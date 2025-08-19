# Automated Vercel Deployment Guide

This guide explains how to set up fully automated deployment to Vercel with PostgreSQL database.

## 🚀 **Option 1: Fully Automated Script**

### One-Command Deployment
```bash
npm run deploy
```

This interactive script will:
- ✅ Install Vercel CLI
- ✅ Login to Vercel (if needed)
- ✅ Build and deploy your project
- ✅ Set environment variables
- ✅ Configure database connection
- ✅ Provide deployment summary

### What the Script Does
1. **Checks Prerequisites** - Vercel CLI, authentication
2. **Builds Project** - Runs `npm run build`
3. **Deploys to Vercel** - Creates production deployment
4. **Sets Environment Variables** - Admin credentials
5. **Guides Database Setup** - Instructions for Postgres

## 🔄 **Option 2: GitHub Actions (Auto-Deploy)**

### Setup GitHub Secrets
In your GitHub repository → Settings → Secrets and Variables → Actions:

```
VERCEL_TOKEN=your_vercel_token
VERCEL_ORG_ID=your_org_id
VERCEL_PROJECT_ID=your_project_id
```

### How to Get These Values
1. **VERCEL_TOKEN**: 
   - Go to Vercel Dashboard → Settings → Tokens
   - Create new token with appropriate scope

2. **VERCEL_ORG_ID & VERCEL_PROJECT_ID**:
   ```bash
   # Run in your project directory
   npx vercel link
   # This creates .vercel/project.json with the IDs
   ```

### Auto-Deploy Workflow
The GitHub Action (`.github/workflows/deploy.yml`) will:
- ✅ Trigger on every push to main/master
- ✅ Build the project
- ✅ Deploy to Vercel automatically
- ✅ Handle database initialization

## 🗄️ **Database Setup (One-Time)**

### Automated via Vercel Dashboard
1. **Go to Vercel Project** → Storage tab
2. **Click "Create Database"** → Postgres
3. **Choose Plan** (Hobby is free)
4. **Done!** - `POSTGRES_URL` is automatically set

### Environment Variables (One-Time)
Set these in Vercel Dashboard → Settings → Environment Variables:
```
ADMIN_USER=your_admin_username
ADMIN_PASSWORD=your_secure_password
```

## 📋 **Complete Setup Checklist**

### Initial Setup (One-Time)
- [ ] Add Vercel Postgres database
- [ ] Set `ADMIN_USER` environment variable
- [ ] Set `ADMIN_PASSWORD` environment variable
- [ ] Configure GitHub secrets (for auto-deploy)

### Deployment Options
- [ ] **Manual**: Run `npm run deploy`
- [ ] **Auto**: Push to GitHub (main/master branch)

### Verification
- [ ] Visit your Vercel URL
- [ ] Check `/admin` login works
- [ ] Verify database connection
- [ ] Test form submissions

## 🔧 **Configuration Files**

### `vercel.json` - Vercel Configuration
```json
{
  "version": 2,
  "builds": [
    { "src": "server.js", "use": "@vercel/node" },
    { "src": "build/**", "use": "@vercel/static" }
  ],
  "routes": [
    { "src": "/admin/api/(.*)", "dest": "/server.js" },
    { "src": "/admin/(.*)", "dest": "/build/index.html" },
    { "src": "/(.*)", "dest": "/build/index.html" }
  ]
}
```

### `.github/workflows/deploy.yml` - GitHub Actions
- Automated build and deployment
- Environment variable handling
- Database connection verification

## 🚨 **Troubleshooting**

### Common Issues

1. **"Database connection failed"**
   - Ensure Postgres database is added in Vercel
   - Check `POSTGRES_URL` environment variable

2. **"Admin login not working"**
   - Verify `ADMIN_USER` and `ADMIN_PASSWORD` are set
   - Check environment variable scope (production)

3. **"GitHub Actions failing"**
   - Verify all GitHub secrets are set correctly
   - Check Vercel token permissions

### Debug Commands
```bash
# Check Vercel authentication
vercel whoami

# List environment variables
vercel env ls

# Check deployment logs
vercel logs --follow

# Test local build
npm run build
npm start
```

## 🎯 **Deployment Strategies**

### Strategy 1: Manual Deployment
- Use `npm run deploy` for controlled releases
- Good for testing and staging
- Interactive prompts for configuration

### Strategy 2: Auto-Deployment
- Push to GitHub triggers deployment
- Good for continuous deployment
- Requires initial GitHub secrets setup

### Strategy 3: Hybrid Approach
- Auto-deploy for main branch
- Manual deploy for feature branches
- Best of both worlds

## 🔐 **Security Best Practices**

### Environment Variables
- ✅ Never commit secrets to Git
- ✅ Use strong admin passwords
- ✅ Rotate tokens periodically
- ✅ Scope tokens appropriately

### Database Security
- ✅ Use Vercel Postgres (managed security)
- ✅ Enable SSL in production
- ✅ Regular security updates
- ✅ Monitor access logs

## 📊 **Monitoring & Maintenance**

### Vercel Dashboard
- Monitor deployment status
- Check function logs
- View performance metrics
- Manage environment variables

### Database Monitoring
- Connection pool status
- Query performance
- Storage usage
- Backup status

## 🔄 **Updates & Rollbacks**

### Updating the Application
```bash
# Make changes to code
git add .
git commit -m "Update feature"
git push origin main
# Auto-deploys via GitHub Actions
```

### Rolling Back
```bash
# Via Vercel CLI
vercel rollback [deployment-url]

# Via Vercel Dashboard
# Go to Deployments → Click previous deployment → Promote
```

## 📞 **Support & Resources**

### Documentation
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Postgres Guide](https://vercel.com/docs/storage/vercel-postgres)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)

### Getting Help
1. Check deployment logs in Vercel dashboard
2. Review GitHub Actions workflow logs
3. Test locally with `npm run build && npm start`
4. Verify environment variables are set correctly

## 🎉 **Success Metrics**

After successful deployment, you should have:
- ✅ **Live Application** - Accessible via Vercel URL
- ✅ **Admin Panel** - Working login at `/admin`
- ✅ **Database** - Persistent data storage
- ✅ **Auto-Deploy** - GitHub pushes trigger deployments
- ✅ **Security** - Encrypted connections and secure authentication
- ✅ **Monitoring** - Logs and metrics in Vercel dashboard

Your Mibug Credit Platform is now production-ready with enterprise-grade deployment automation!
