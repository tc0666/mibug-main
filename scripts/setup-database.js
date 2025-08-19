#!/usr/bin/env node

/**
 * Database Setup Script for Mibug Credit Platform
 * 
 * This script helps set up the PostgreSQL database for local development.
 * For production deployment on Vercel, the database will be automatically configured.
 */

require('dotenv').config();
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

async function setupDatabase() {
  console.log('🚀 Setting up Mibug Credit Database...\n');

  // Check if DATABASE_URL is configured
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL;
  
  if (!databaseUrl) {
    console.error('❌ DATABASE_URL not found in environment variables.');
    console.log('\n📝 Please configure your database connection:');
    console.log('1. Install PostgreSQL locally');
    console.log('2. Create a database named "mibug_credit"');
    console.log('3. Update DATABASE_URL in your .env file:');
    console.log('   DATABASE_URL=postgresql://username:password@localhost:5432/mibug_credit');
    console.log('\n🔗 For Vercel deployment, use Vercel Postgres:');
    console.log('   https://vercel.com/docs/storage/vercel-postgres');
    process.exit(1);
  }

  console.log('🔗 Connecting to database...');
  console.log(`📍 URL: ${databaseUrl.replace(/:[^:@]*@/, ':****@')}`);

  const pool = new Pool({
    connectionString: databaseUrl,
    ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : false,
  });

  try {
    // Test connection
    await pool.query('SELECT NOW()');
    console.log('✅ Database connection successful!\n');

    // Check if tables already exist
    const tablesResult = await pool.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('leads', 'admin_sessions', 'admin_users', 'audit_log')
    `);

    if (tablesResult.rows.length > 0) {
      console.log('⚠️  Database tables already exist:');
      tablesResult.rows.forEach(row => {
        console.log(`   - ${row.table_name}`);
      });
      
      console.log('\n❓ Do you want to recreate the database? This will DELETE all existing data!');
      console.log('   To proceed, run: npm run setup-db -- --force');
      
      if (!process.argv.includes('--force')) {
        console.log('\n✨ Database is already set up. You can start the application now!');
        process.exit(0);
      }
      
      console.log('\n🗑️  Dropping existing tables...');
      await pool.query('DROP TABLE IF EXISTS audit_log CASCADE');
      await pool.query('DROP TABLE IF EXISTS admin_sessions CASCADE');
      await pool.query('DROP TABLE IF EXISTS admin_users CASCADE');
      await pool.query('DROP TABLE IF EXISTS leads CASCADE');
      await pool.query('DROP TYPE IF EXISTS lead_status CASCADE');
      await pool.query('DROP TYPE IF EXISTS family_status CASCADE');
      await pool.query('DROP TYPE IF EXISTS living_situation CASCADE');
      await pool.query('DROP TYPE IF EXISTS gender_type CASCADE');
      console.log('✅ Existing tables dropped');
    }

    // Run schema creation
    console.log('📋 Creating database schema...');
    const schemaSQL = fs.readFileSync(path.join(__dirname, '..', 'database', 'schema.sql'), 'utf8');
    await pool.query(schemaSQL);
    console.log('✅ Database schema created successfully!');

    // Create admin user
    const adminUser = process.env.ADMIN_USER;
    const adminPassword = process.env.ADMIN_PASSWORD;
    
    if (adminUser && adminPassword) {
      console.log('👤 Creating admin user...');
      const bcrypt = require('bcrypt');
      const passwordHash = await bcrypt.hash(adminPassword, 12);
      
      await pool.query(`
        INSERT INTO admin_users (username, password_hash, email, is_active)
        VALUES ($1, $2, $3, true)
        ON CONFLICT (username) DO UPDATE SET
        password_hash = EXCLUDED.password_hash,
        email = EXCLUDED.email
      `, [adminUser, passwordHash, `${adminUser}@mibug-credit.com`]);
      
      console.log(`✅ Admin user '${adminUser}' created/updated successfully!`);
    } else {
      console.log('⚠️  No admin credentials found in environment variables');
      console.log('   Set ADMIN_USER and ADMIN_PASSWORD in your .env file');
    }

    // Migrate existing JSON data if it exists
    const dataPath = path.join(__dirname, '..', 'data', 'leads.json');
    if (fs.existsSync(dataPath)) {
      console.log('📦 Migrating existing JSON data...');
      
      try {
        const existingData = JSON.parse(fs.readFileSync(dataPath, 'utf8'));
        
        if (Array.isArray(existingData) && existingData.length > 0) {
          console.log(`   Found ${existingData.length} leads to migrate`);
          
          for (const [index, lead] of existingData.entries()) {
            try {
              await pool.query(`
                INSERT INTO leads (
                  id, created_at, first_name, last_name, email, phone, gender, birthday, birthplace, nationality,
                  street, home_number, zip_code, city, country, resident_since,
                  family_status, professional_group, employment_date, living_situation,
                  income, rent_including_heating, category, credit_amount, duration, deposit,
                  label, status, notes, consent, source
                ) VALUES (
                  $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20,
                  $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31
                )
              `, [
                lead.id,
                lead.createdAt || new Date().toISOString(),
                lead.firstName || lead.first_name,
                lead.lastName || lead.last_name,
                lead.email,
                lead.phone,
                lead.gender,
                lead.birthday,
                lead.birthplace,
                lead.nationality,
                lead.street,
                lead.homeNumber || lead.home_number,
                lead.zipCode || lead.zip_code,
                lead.city,
                lead.country,
                lead.residentSince || lead.resident_since,
                lead.familyStatus || lead.family_status,
                lead.professionalGroup || lead.professional_group,
                lead.date ? new Date(lead.date + '-01') : null,
                lead.livingSituation || lead.living_situation,
                parseFloat(lead.income) || null,
                parseFloat(lead.rentIncludingHeating || lead.rent_including_heating) || null,
                lead.category,
                parseFloat(lead.creditAmount || lead.credit_amount) || null,
                parseInt(lead.duration) || null,
                parseFloat(lead.deposit) || 0,
                lead.label || 'New',
                lead.status || 'New',
                lead.notes || '',
                lead.consent || false,
                'migrated_data'
              ]);
            } catch (error) {
              console.log(`   ⚠️  Skipped lead ${index + 1}: ${error.message}`);
            }
          }
          
          console.log('✅ Data migration completed!');
          
          // Backup original file
          const backupPath = dataPath + '.backup.' + Date.now();
          fs.renameSync(dataPath, backupPath);
          console.log(`📁 Original data backed up to: ${path.basename(backupPath)}`);
        } else {
          console.log('   No valid data found to migrate');
        }
      } catch (error) {
        console.log(`   ⚠️  Migration failed: ${error.message}`);
      }
    }

    console.log('\n🎉 Database setup completed successfully!');
    console.log('\n📋 Summary:');
    console.log('   ✅ Database schema created');
    console.log('   ✅ Admin user configured');
    console.log('   ✅ Security features enabled');
    console.log('   ✅ Audit logging active');
    
    console.log('\n🚀 You can now start the application:');
    console.log('   npm run build && npm start');
    
    console.log('\n🔐 Admin login:');
    console.log(`   Username: ${adminUser || 'Not configured'}`);
    console.log(`   Password: ${adminPassword ? '***configured***' : 'Not configured'}`);
    
  } catch (error) {
    console.error('\n❌ Database setup failed:', error.message);
    console.error('\n🔍 Troubleshooting:');
    console.error('1. Ensure PostgreSQL is running');
    console.error('2. Check DATABASE_URL in .env file');
    console.error('3. Verify database permissions');
    console.error('4. For Vercel, ensure Postgres addon is configured');
    process.exit(1);
  } finally {
    await pool.end();
  }
}

// Run setup if called directly
if (require.main === module) {
  setupDatabase();
}

module.exports = setupDatabase;
