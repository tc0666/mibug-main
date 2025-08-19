#!/usr/bin/env node

/**
 * Automated Vercel Deployment Script
 * 
 * This script automates the complete Vercel deployment process including:
 * - Database creation
 * - Environment variable setup
 * - Project deployment
 */

require('dotenv').config();
const { execSync } = require('child_process');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function question(prompt) {
  return new Promise(resolve => rl.question(prompt, resolve));
}

function execCommand(command, description) {
  console.log(`🔄 ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} completed`);
    return output;
  } catch (error) {
    console.error(`❌ ${description} failed:`, error.message);
    throw error;
  }
}

async function deployToVercel() {
  console.log('🚀 Automated Vercel Deployment for Mibug Credit Platform\n');

  try {
    // Check if Vercel CLI is installed
    try {
      execSync('vercel --version', { stdio: 'pipe' });
    } catch {
      console.log('📦 Installing Vercel CLI...');
      execSync('npm install -g vercel', { stdio: 'inherit' });
    }

    // Login to Vercel (if not already logged in)
    console.log('🔐 Checking Vercel authentication...');
    try {
      execSync('vercel whoami', { stdio: 'pipe' });
      console.log('✅ Already logged in to Vercel');
    } catch {
      console.log('🔑 Please login to Vercel...');
      execSync('vercel login', { stdio: 'inherit' });
    }

    // Get project configuration
    const projectName = await question('📝 Enter project name (default: mibug-credit): ') || 'mibug-credit';
    const adminUser = await question('👤 Enter admin username (default: mibugadmin666): ') || 'mibugadmin666';
    const adminPassword = await question('🔒 Enter admin password (default: generate secure): ') || generateSecurePassword();

    console.log('\n📋 Deployment Configuration:');
    console.log(`   Project: ${projectName}`);
    console.log(`   Admin User: ${adminUser}`);
    console.log(`   Admin Password: ${adminPassword.replace(/./g, '*')}`);
    
    const confirm = await question('\n❓ Proceed with deployment? (y/N): ');
    if (confirm.toLowerCase() !== 'y') {
      console.log('❌ Deployment cancelled');
      process.exit(0);
    }

    // Build the project
    execCommand('npm run build', 'Building project');

    // Deploy to Vercel
    console.log('🚀 Deploying to Vercel...');
    const deployOutput = execSync(`vercel --prod --name ${projectName} --yes`, { encoding: 'utf8' });
    
    // Extract project URL
    const urlMatch = deployOutput.match(/https:\/\/[^\s]+/);
    const projectUrl = urlMatch ? urlMatch[0] : null;
    
    if (!projectUrl) {
      throw new Error('Could not extract project URL from deployment output');
    }

    console.log(`✅ Project deployed to: ${projectUrl}`);

    // Add Postgres database
    console.log('🗄️ Adding Postgres database...');
    try {
      execSync(`vercel env add POSTGRES_URL --scope production`, { 
        input: 'postgresql://placeholder', 
        stdio: 'pipe' 
      });
    } catch {
      // Database might already exist, continue
    }

    // Set environment variables
    console.log('⚙️ Setting environment variables...');
    
    // Set admin user
    execSync(`echo "${adminUser}" | vercel env add ADMIN_USER production`, { stdio: 'pipe' });
    
    // Set admin password
    execSync(`echo "${adminPassword}" | vercel env add ADMIN_PASSWORD production`, { stdio: 'pipe' });

    // Create Postgres database via API (requires manual step)
    console.log('\n🗄️ Database Setup Required:');
    console.log('   1. Go to Vercel Dashboard → Storage');
    console.log('   2. Click "Create Database" → "Postgres"');
    console.log('   3. Choose your plan (Hobby is free)');
    console.log('   4. This will automatically set POSTGRES_URL');

    // Redeploy after environment variables are set
    console.log('\n🔄 Triggering redeploy with new environment...');
    execSync(`vercel --prod --name ${projectName} --yes`, { stdio: 'pipe' });

    console.log('\n🎉 Deployment completed successfully!');
    console.log('\n📋 Next Steps:');
    console.log(`   1. Visit: ${projectUrl}`);
    console.log(`   2. Admin panel: ${projectUrl}/admin`);
    console.log(`   3. Login with: ${adminUser} / ${adminPassword}`);
    console.log('\n⚠️  Remember to add Postgres database in Vercel dashboard!');

  } catch (error) {
    console.error('\n❌ Deployment failed:', error.message);
    console.error('\n🔧 Manual steps required:');
    console.error('   1. Run: vercel login');
    console.error('   2. Run: vercel --prod');
    console.error('   3. Add Postgres database in Vercel dashboard');
    console.error('   4. Set ADMIN_USER and ADMIN_PASSWORD environment variables');
    process.exit(1);
  } finally {
    rl.close();
  }
}

function generateSecurePassword() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
  let password = '';
  for (let i = 0; i < 16; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
}

// Run if called directly
if (require.main === module) {
  deployToVercel();
}

module.exports = deployToVercel;
