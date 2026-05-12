#!/usr/bin/env node
/* Create test donor and emergency request to verify matching */
import { Client, Databases, ID, Permission, Role, Query } from 'appwrite';

const apiKey = process.env.APPWRITE_API_KEY;
const endpoint = process.env.VITE_APPWRITE_ENDPOINT || 'https://tor.cloud.appwrite.io/v1';
const projectId = process.env.VITE_APPWRITE_PROJECT_ID;
const databaseId = process.env.VITE_APPWRITE_DATABASE_ID;
const donorsCollectionId = process.env.VITE_APPWRITE_DONORS_COLLECTION_ID;
const requestsCollectionId = process.env.VITE_APPWRITE_REQUESTS_COLLECTION_ID;

if (!apiKey) {
  console.error('❌ Error: APPWRITE_API_KEY not set');
  process.exit(1);
}

if (!projectId || !databaseId || !donorsCollectionId || !requestsCollectionId) {
  console.error('❌ Error: Missing Appwrite configuration. Please set:');
  console.error('  - VITE_APPWRITE_PROJECT_ID');
  console.error('  - VITE_APPWRITE_DATABASE_ID');
  console.error('  - VITE_APPWRITE_DONORS_COLLECTION_ID');
  console.error('  - VITE_APPWRITE_REQUESTS_COLLECTION_ID');
  process.exit(1);
}

const client = new Client()
  .setEndpoint(endpoint)
  .setProject(projectId);

// For Appwrite SDK v25+, use a different approach
client.headers['X-Appwrite-Key'] = apiKey;

const databases = new Databases(client);

async function createTestData() {
  try {
    console.log('🚀 Creating test data...\n');

    // Test data
    const testArea = 'Downtown Hospital';
    const testBloodGroup = 'O Positive';
    
    // 1. Create test donor
    console.log('📋 Creating test donor...');
    const donor = await databases.createDocument(
      databaseId,
      donorsCollectionId,
      ID.unique(),
      {
        name: 'Test Donor',
        bloodGroup: testBloodGroup,
        area: testArea,
        phone: '1234567890',
        email: 'donor@test.com',
        available: true,
      },
      [Permission.read(Role.any())]
    );
    console.log('✅ Donor created:', donor.$id);
    console.log('   Blood Group:', donor.bloodGroup);
    console.log('   Area:', donor.area);
    console.log('   Available:', donor.available);

    // 2. Create test request
    console.log('\n📋 Creating test emergency request...');
    const request = await databases.createDocument(
      databaseId,
      requestsCollectionId,
      ID.unique(),
      {
        hospitalName: 'Test Hospital',
        bloodGroup: testBloodGroup,
        urgency: 'high',
        area: testArea,
        hospitalArea: testArea,
        patientName: 'Test Patient',
        status: 'active',
      },
      [Permission.read(Role.any())]
    );
    console.log('✅ Request created:', request.$id);
    console.log('   Blood Group:', request.bloodGroup);
    console.log('   Area:', request.area);
    console.log('   Status:', request.status);

    // 3. Verify matching
    console.log('\n🔍 Verifying matching logic...');
    
    // Get all active requests
    const allRequests = await databases.listDocuments(
      databaseId,
      requestsCollectionId,
      [Query.equal('status', 'active')]
    );
    console.log('✅ Found', allRequests.documents.length, 'active request(s)');

    // Find matching donors for the request
    const matchingDonors = await databases.listDocuments(
      databaseId,
      donorsCollectionId,
      [
        Query.equal('bloodGroup', testBloodGroup),
        Query.equal('area', testArea),
        Query.equal('available', true)
      ]
    );
    console.log('✅ Found', matchingDonors.documents.length, 'matching donor(s)');

    // Simulate dashboard matching logic
    const dashboardMatches = allRequests.documents.filter(req => {
      const reqArea = req.area || req.hospitalArea || '';
      return req.bloodGroup === testBloodGroup && reqArea === testArea;
    });
    console.log('✅ Dashboard filter found', dashboardMatches.documents?.length || dashboardMatches.length, 'matching request(s)');

    console.log('\n✨ Test completed successfully!');
    console.log('\nNext steps:');
    console.log('1. Open http://localhost:5173/ in your browser');
    console.log('2. Go to /login or /register');
    console.log('3. Register/login with email: donor@test.com');
    console.log('4. Go to /dashboard');
    console.log('5. You should see the test emergency request matching your blood type and area');

    process.exit(0);
  } catch (error) {
    console.error('❌ Error:', error.message || error);
    console.error(error);
    process.exit(1);
  }
}

createTestData();
