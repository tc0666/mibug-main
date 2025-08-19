# Database Setup Guide

This guide explains how to set up PostgreSQL for the Mibug Credit Platform, both for local development and Vercel deployment.

## 🚀 Quick Start

### Local Development

1. **Install PostgreSQL**
   ```bash
   # macOS (using Homebrew)
   brew install postgresql
   brew services start postgresql
   
   # Ubuntu/Debian
   sudo apt update
   sudo apt install postgresql postgresql-contrib
   sudo systemctl start postgresql
   
   # Windows
   # Download from https://www.postgresql.org/download/windows/
   ```

2. **Create Database**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database and user
   CREATE DATABASE mibug_credit;
   CREATE USER mibug_user WITH PASSWORD 'your_secure_password';
   GRANT ALL PRIVILEGES ON DATABASE mibug_credit TO mibug_user;
   \q
   ```

3. **Configure Environment**
   ```bash
   # Update .env file
   DATABASE_URL=postgresql://mibug_user:your_secure_password@localhost:5432/mibug_credit
   ADMIN_USER=your_admin_username
   ADMIN_PASSWORD=your_secure_admin_password
   ```

4. **Setup Database Schema**
   ```bash
   npm run setup-db
   ```

5. **Start Application**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Vercel Deployment

### 1. Add Vercel Postgres

1. Go to your Vercel project dashboard
2. Navigate to **Storage** tab
3. Click **Create Database** → **Postgres**
4. Choose your plan (Hobby is free)
5. Vercel will automatically set `POSTGRES_URL` environment variable

### 2. Deploy with Database

```bash
# Build and deploy
npm run build
vercel --prod

# The database will be automatically initialized on first deployment
```

### 3. Environment Variables

Ensure these are set in Vercel:
- `ADMIN_USER` - Your admin username
- `ADMIN_PASSWORD` - Your admin password
- `POSTGRES_URL` - Automatically set by Vercel Postgres

## 🔒 Security Features

### Enterprise-Grade Security

- **Row Level Security (RLS)** - Enabled on all tables
- **Audit Logging** - All changes tracked with user/IP/timestamp
- **Password Hashing** - bcrypt with 12 rounds
- **Session Management** - Secure token-based authentication
- **Input Validation** - SQL injection prevention
- **Rate Limiting** - Brute force protection

### Data Encryption

- **In Transit** - SSL/TLS encryption
- **At Rest** - Database-level encryption (Vercel Postgres)
- **Password Storage** - bcrypt hashed passwords
- **Session Tokens** - UUID-based secure tokens

## 📊 Database Schema

### Core Tables

- **`leads`** - Customer lead data with full audit trail
- **`admin_sessions`** - Secure session management
- **`admin_users`** - Admin user accounts with security features
- **`audit_log`** - Complete audit trail of all changes

### Key Features

- **UUID Primary Keys** - Better security and performance
- **Enum Types** - Data integrity for status fields
- **Constraints** - Email validation, positive amounts
- **Indexes** - Optimized for search and filtering
- **Triggers** - Automatic timestamps and audit logging

## 🛠️ Maintenance

### Clean Expired Sessions

```sql
SELECT clean_expired_sessions();
```

### View Audit Log

```sql
SELECT * FROM audit_log 
WHERE changed_at > NOW() - INTERVAL '24 hours'
ORDER BY changed_at DESC;
```

### Database Backup

```bash
# Local backup
pg_dump mibug_credit > backup.sql

# Restore
psql mibug_credit < backup.sql
```

## 🔧 Troubleshooting

### Connection Issues

1. **Check PostgreSQL is running**
   ```bash
   # macOS
   brew services list | grep postgresql
   
   # Linux
   sudo systemctl status postgresql
   ```

2. **Verify DATABASE_URL format**
   ```
   postgresql://username:password@host:port/database
   ```

3. **Test connection**
   ```bash
   psql "postgresql://username:password@host:port/database"
   ```

### Migration Issues

1. **Reset database** (⚠️ Deletes all data)
   ```bash
   npm run setup-db -- --force
   ```

2. **Manual schema update**
   ```bash
   psql -d mibug_credit -f database/schema.sql
   ```

### Performance Issues

1. **Check indexes**
   ```sql
   SELECT schemaname, tablename, indexname, indexdef 
   FROM pg_indexes 
   WHERE schemaname = 'public';
   ```

2. **Analyze query performance**
   ```sql
   EXPLAIN ANALYZE SELECT * FROM leads WHERE email ILIKE '%example%';
   ```

## 📈 Monitoring

### Key Metrics

- **Connection count**: Monitor active connections
- **Query performance**: Track slow queries
- **Storage usage**: Monitor database size
- **Session activity**: Track admin logins

### Vercel Postgres Monitoring

- Built-in metrics dashboard
- Query performance insights
- Connection pooling statistics
- Storage usage tracking

## 🔄 Data Migration

The setup script automatically migrates existing JSON data:

1. **Backup created** - Original `leads.json` backed up
2. **Data validation** - Invalid records skipped
3. **Audit trail** - Migration marked in audit log
4. **Rollback support** - Original data preserved

## 🚨 Emergency Procedures

### Account Lockout

```sql
-- Unlock admin account
UPDATE admin_users 
SET failed_login_attempts = 0, locked_until = NULL 
WHERE username = 'your_admin_user';
```

### Session Cleanup

```sql
-- Force logout all sessions
DELETE FROM admin_sessions;
```

### Data Recovery

```sql
-- View deleted records (if audit enabled)
SELECT * FROM audit_log 
WHERE action = 'DELETE' 
AND table_name = 'leads'
ORDER BY changed_at DESC;
```

## 📞 Support

For database-related issues:

1. Check this documentation
2. Review application logs
3. Verify environment variables
4. Test database connectivity
5. Check Vercel Postgres dashboard (for production)

## 🔗 Useful Links

- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [Vercel Postgres Guide](https://vercel.com/docs/storage/vercel-postgres)
- [Database Security Best Practices](https://www.postgresql.org/docs/current/security.html)
