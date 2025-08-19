#!/usr/bin/env node

/**
 * Demo Data Population Script
 * 
 * This script populates the database with realistic demo leads for testing
 */

require('dotenv').config();
const Database = require('../database/database');
const { v4: uuidv4 } = require('uuid');

const demoLeads = [
  {
    firstName: 'Anna',
    lastName: 'Becker',
    email: 'anna.becker@email.de',
    phone: '+49 151 1234 5678',
    gender: 'FEMALE',
    birthday: '1992-04-18',
    birthplace: 'München',
    nationality: 'DE',
    street: 'Leopoldstraße',
    homeNumber: '12',
    zipCode: '80802',
    city: 'München',
    country: 'DE',
    residentSince: 2019,
    familyStatus: 'SINGLE',
    professionalGroup: 'EMPLOYEE',
    livingSituation: 'RENT',
    income: 3200,
    rentIncludingHeating: 980,
    category: 'OTHER',
    creditAmount: 15000,
    duration: 84,
    deposit: 0,
    label: 'New',
    status: 'New',
    notes: 'Interessiert an Umschuldung. Gute Bonität.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Markus',
    lastName: 'Schmidt',
    email: 'markus.schmidt@gmail.com',
    phone: '+49 152 9876 5432',
    gender: 'MALE',
    birthday: '1987-09-07',
    birthplace: 'Berlin',
    nationality: 'DE',
    street: 'Friedrichstraße',
    homeNumber: '101',
    zipCode: '10117',
    city: 'Berlin',
    country: 'DE',
    residentSince: 2015,
    familyStatus: 'MARRIED',
    professionalGroup: 'WORKER',
    livingSituation: 'PROPERTY',
    income: 4100,
    rentIncludingHeating: 0,
    category: 'AUTO',
    creditAmount: 25000,
    duration: 72,
    deposit: 3000,
    label: 'Follow-Up',
    status: 'Follow-Up',
    notes: 'Autokredit für neuen BMW. Termin vereinbart für nächste Woche.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Lena',
    lastName: 'Keller',
    email: 'lena.keller@uni-hamburg.de',
    phone: '+49 153 1111 2222',
    gender: 'FEMALE',
    birthday: '1996-12-02',
    birthplace: 'Hamburg',
    nationality: 'DE',
    street: 'Mönckebergstraße',
    homeNumber: '5',
    zipCode: '20095',
    city: 'Hamburg',
    country: 'DE',
    residentSince: 2020,
    familyStatus: 'SINGLE',
    professionalGroup: 'STUDENT',
    livingSituation: 'RENT',
    income: 1200,
    rentIncludingHeating: 650,
    category: 'EDUCATION',
    creditAmount: 8000,
    duration: 36,
    deposit: 0,
    label: 'Warm',
    status: 'Qualified',
    notes: 'Studienkredit für Master-Studium. Eltern bürgen mit.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Jonas',
    lastName: 'Weber',
    email: 'jonas.weber@business.de',
    phone: '+49 160 4444 5555',
    gender: 'MALE',
    birthday: '1990-01-22',
    birthplace: 'Köln',
    nationality: 'DE',
    street: 'Hohenzollernring',
    homeNumber: '88',
    zipCode: '50672',
    city: 'Köln',
    country: 'DE',
    residentSince: 2018,
    familyStatus: 'SINGLE',
    professionalGroup: 'SELF_EMPLOYED',
    livingSituation: 'RENT',
    income: 5200,
    rentIncludingHeating: 1200,
    category: 'BUSINESS',
    creditAmount: 40000,
    duration: 96,
    deposit: 5000,
    label: 'High-Value',
    status: 'High-Value',
    notes: 'Geschäftskredit für Expansion. Sehr gute Geschäftszahlen.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Sofia',
    lastName: 'Meier',
    email: 'sofia.meier@company.de',
    phone: '+49 170 7777 8888',
    gender: 'FEMALE',
    birthday: '1989-06-30',
    birthplace: 'Stuttgart',
    nationality: 'DE',
    street: 'Königstraße',
    homeNumber: '43',
    zipCode: '70173',
    city: 'Stuttgart',
    country: 'DE',
    residentSince: 2012,
    familyStatus: 'MARRIED',
    professionalGroup: 'EMPLOYEE',
    livingSituation: 'PROPERTY',
    income: 3600,
    rentIncludingHeating: 0,
    category: 'HOME',
    creditAmount: 12000,
    duration: 48,
    deposit: 0,
    label: 'Qualified',
    status: 'Qualified',
    notes: 'Modernisierungskredit für Küche und Bad. Schnelle Abwicklung gewünscht.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Michael',
    lastName: 'Hoffmann',
    email: 'michael.hoffmann@tech.de',
    phone: '+49 171 3333 4444',
    gender: 'MALE',
    birthday: '1985-03-15',
    birthplace: 'Frankfurt',
    nationality: 'DE',
    street: 'Zeil',
    homeNumber: '67',
    zipCode: '60313',
    city: 'Frankfurt am Main',
    country: 'DE',
    residentSince: 2010,
    familyStatus: 'MARRIED',
    professionalGroup: 'EMPLOYEE',
    livingSituation: 'PROPERTY',
    income: 4800,
    rentIncludingHeating: 0,
    category: 'OTHER',
    creditAmount: 20000,
    duration: 60,
    deposit: 2000,
    label: 'New',
    status: 'New',
    notes: 'Umschuldung bestehender Kredite. Zinsen optimieren.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Julia',
    lastName: 'Fischer',
    email: 'julia.fischer@design.de',
    phone: '+49 162 6666 7777',
    gender: 'FEMALE',
    birthday: '1993-11-08',
    birthplace: 'Düsseldorf',
    nationality: 'DE',
    street: 'Königsallee',
    homeNumber: '23',
    zipCode: '40212',
    city: 'Düsseldorf',
    country: 'DE',
    residentSince: 2018,
    familyStatus: 'SINGLE',
    professionalGroup: 'SELF_EMPLOYED',
    livingSituation: 'RENT',
    income: 2800,
    rentIncludingHeating: 850,
    category: 'BUSINESS',
    creditAmount: 18000,
    duration: 72,
    deposit: 1000,
    label: 'Follow-Up',
    status: 'Follow-Up',
    notes: 'Kredit für Designstudio-Ausstattung. Freelance Designerin.',
    consent: true,
    source: 'web_form'
  },
  {
    firstName: 'Thomas',
    lastName: 'Müller',
    email: 'thomas.mueller@logistics.de',
    phone: '+49 173 9999 0000',
    gender: 'MALE',
    birthday: '1988-07-12',
    birthplace: 'Hannover',
    nationality: 'DE',
    street: 'Bahnhofstraße',
    homeNumber: '156',
    zipCode: '30159',
    city: 'Hannover',
    country: 'DE',
    residentSince: 2016,
    familyStatus: 'MARRIED',
    professionalGroup: 'WORKER',
    livingSituation: 'RENT',
    income: 3800,
    rentIncludingHeating: 1100,
    category: 'AUTO',
    creditAmount: 22000,
    duration: 84,
    deposit: 2500,
    label: 'Cold',
    status: 'Cold',
    notes: 'Interesse an Fahrzeugfinanzierung. Noch unentschlossen.',
    consent: true,
    source: 'web_form'
  }
];

async function populateDemoData() {
  console.log('🚀 Populating database with demo leads...\n');

  const db = new Database();
  
  try {
    // Wait a moment for database initialization
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('📊 Adding demo leads...');
    
    for (const [index, leadData] of demoLeads.entries()) {
      try {
        // Add some time variation to creation dates
        const daysAgo = Math.floor(Math.random() * 30); // Random date within last 30 days
        const createdAt = new Date();
        createdAt.setDate(createdAt.getDate() - daysAgo);
        
        const result = await db.createLead({
          ...leadData,
          createdAt: createdAt.toISOString()
        }, {
          userId: 'demo-script',
          ip: '127.0.0.1',
          userAgent: 'Demo Data Script'
        });
        
        console.log(`   ✅ Added: ${leadData.firstName} ${leadData.lastName} (${leadData.email})`);
      } catch (error) {
        console.log(`   ⚠️  Skipped: ${leadData.firstName} ${leadData.lastName} - ${error.message}`);
      }
    }
    
    console.log('\n🎉 Demo data population completed!');
    console.log(`📈 Added ${demoLeads.length} demo leads to the database`);
    
    // Get final count
    const result = await db.getLeads({}, { page: 1, limit: 100 });
    console.log(`📊 Total leads in database: ${result.total}`);
    
  } catch (error) {
    console.error('\n❌ Demo data population failed:', error.message);
  } finally {
    await db.close();
    process.exit(0);
  }
}

// Run if called directly
if (require.main === module) {
  populateDemoData();
}

module.exports = populateDemoData;
