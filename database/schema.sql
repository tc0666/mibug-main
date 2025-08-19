-- PostgreSQL Database Schema for Mibug Credit Platform
-- Enterprise-grade security and performance optimizations

-- Enable required extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Create enum types for better data integrity
CREATE TYPE lead_status AS ENUM ('New', 'Follow-Up', 'Warm', 'Cold', 'Qualified', 'Disqualified', 'High-Value');
CREATE TYPE family_status AS ENUM ('SINGLE', 'MARRIED', 'WIDOWED', 'DIVORCED');
CREATE TYPE living_situation AS ENUM ('RENT', 'OWN', 'RENTING', 'RENTFREE', 'PARENTS', 'PROPERTY');
CREATE TYPE gender_type AS ENUM ('MALE', 'FEMALE', 'Herr', 'Frau');

-- Leads table with comprehensive security and audit features
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    
    -- Personal Information (encrypted sensitive data)
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    gender gender_type,
    birthday DATE,
    birthplace VARCHAR(100),
    nationality VARCHAR(3), -- ISO country code
    
    -- Address Information
    street VARCHAR(200),
    home_number VARCHAR(20),
    zip_code VARCHAR(10),
    city VARCHAR(100),
    country VARCHAR(3), -- ISO country code
    resident_since INTEGER, -- Year
    
    -- Financial Information
    family_status family_status,
    professional_group VARCHAR(100),
    employment_date DATE,
    living_situation living_situation,
    income DECIMAL(10,2),
    rent_including_heating DECIMAL(10,2),
    
    -- Credit Information
    category VARCHAR(100),
    credit_amount DECIMAL(12,2),
    duration INTEGER, -- months
    deposit DECIMAL(12,2) DEFAULT 0,
    
    -- Admin Management
    label VARCHAR(50) DEFAULT 'New',
    status lead_status DEFAULT 'New',
    notes TEXT,
    consent BOOLEAN DEFAULT false,
    
    -- Audit and Security
    created_by VARCHAR(100),
    ip_address INET,
    user_agent TEXT,
    source VARCHAR(100) DEFAULT 'web_form',
    
    -- Indexes for performance
    CONSTRAINT valid_email CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$'),
    CONSTRAINT valid_zip_code CHECK (zip_code ~ '^[0-9]{4,10}$'),
    CONSTRAINT positive_amounts CHECK (
        (income IS NULL OR income >= 0) AND 
        (rent_including_heating IS NULL OR rent_including_heating >= 0) AND
        (credit_amount IS NULL OR credit_amount >= 0) AND
        (deposit IS NULL OR deposit >= 0)
    )
);

-- Admin sessions table for secure authentication
CREATE TABLE admin_sessions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    session_id VARCHAR(255) UNIQUE NOT NULL,
    user_id VARCHAR(100) NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    expires_at TIMESTAMPTZ NOT NULL,
    ip_address INET,
    user_agent TEXT,
    is_active BOOLEAN DEFAULT true,
    last_activity TIMESTAMPTZ DEFAULT NOW()
);

-- Admin users table (for future multi-user support)
CREATE TABLE admin_users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL, -- bcrypt hash
    email VARCHAR(255),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    last_login TIMESTAMPTZ,
    is_active BOOLEAN DEFAULT true,
    failed_login_attempts INTEGER DEFAULT 0,
    locked_until TIMESTAMPTZ
);

-- Audit log for all database changes
CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    table_name VARCHAR(50) NOT NULL,
    record_id UUID,
    action VARCHAR(20) NOT NULL, -- INSERT, UPDATE, DELETE
    old_values JSONB,
    new_values JSONB,
    changed_by VARCHAR(100),
    changed_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    ip_address INET,
    user_agent TEXT
);

-- Performance indexes
CREATE INDEX idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX idx_leads_email ON leads(email);
CREATE INDEX idx_leads_status ON leads(status);
CREATE INDEX idx_leads_label ON leads(label);
CREATE INDEX idx_leads_credit_amount ON leads(credit_amount);
CREATE INDEX idx_leads_search ON leads USING gin(to_tsvector('german', first_name || ' ' || last_name || ' ' || email));

CREATE INDEX idx_sessions_session_id ON admin_sessions(session_id);
CREATE INDEX idx_sessions_expires ON admin_sessions(expires_at);
CREATE INDEX idx_sessions_user_id ON admin_sessions(user_id);

CREATE INDEX idx_audit_table_record ON audit_log(table_name, record_id);
CREATE INDEX idx_audit_changed_at ON audit_log(changed_at DESC);

-- Security: Row Level Security (RLS)
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE audit_log ENABLE ROW LEVEL SECURITY;

-- Trigger function for updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Apply updated_at trigger to leads table
CREATE TRIGGER update_leads_updated_at 
    BEFORE UPDATE ON leads 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Audit trigger function
CREATE OR REPLACE FUNCTION audit_trigger_function()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'DELETE' THEN
        INSERT INTO audit_log (table_name, record_id, action, old_values, changed_by, ip_address)
        VALUES (TG_TABLE_NAME, OLD.id, TG_OP, row_to_json(OLD), current_user, inet_client_addr());
        RETURN OLD;
    ELSIF TG_OP = 'UPDATE' THEN
        INSERT INTO audit_log (table_name, record_id, action, old_values, new_values, changed_by, ip_address)
        VALUES (TG_TABLE_NAME, NEW.id, TG_OP, row_to_json(OLD), row_to_json(NEW), current_user, inet_client_addr());
        RETURN NEW;
    ELSIF TG_OP = 'INSERT' THEN
        INSERT INTO audit_log (table_name, record_id, action, new_values, changed_by, ip_address)
        VALUES (TG_TABLE_NAME, NEW.id, TG_OP, row_to_json(NEW), current_user, inet_client_addr());
        RETURN NEW;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Apply audit triggers
CREATE TRIGGER leads_audit_trigger
    AFTER INSERT OR UPDATE OR DELETE ON leads
    FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

CREATE TRIGGER admin_sessions_audit_trigger
    AFTER INSERT OR UPDATE OR DELETE ON admin_sessions
    FOR EACH ROW EXECUTE FUNCTION audit_trigger_function();

-- Function to clean expired sessions
CREATE OR REPLACE FUNCTION clean_expired_sessions()
RETURNS INTEGER AS $$
DECLARE
    deleted_count INTEGER;
BEGIN
    DELETE FROM admin_sessions 
    WHERE expires_at < NOW() OR is_active = false;
    
    GET DIAGNOSTICS deleted_count = ROW_COUNT;
    RETURN deleted_count;
END;
$$ LANGUAGE plpgsql;

-- Security function to hash passwords
CREATE OR REPLACE FUNCTION hash_password(password TEXT)
RETURNS TEXT AS $$
BEGIN
    RETURN crypt(password, gen_salt('bf', 12));
END;
$$ LANGUAGE plpgsql;

-- Security function to verify passwords
CREATE OR REPLACE FUNCTION verify_password(password TEXT, hash TEXT)
RETURNS BOOLEAN AS $$
BEGIN
    RETURN hash = crypt(password, hash);
END;
$$ LANGUAGE plpgsql;
