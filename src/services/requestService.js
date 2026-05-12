import { databases, appwriteConfig } from './appwrite/config';
import { ID, Query } from 'appwrite';

export const requestService = {
  // Create an emergency request
  createRequest: async ({ hospitalName, bloodGroup, urgency, HospitalArea, patientName, status = "active" }) => {
    try {
      return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.requestsCollectionId,
        ID.unique(),
        { hospitalName, bloodGroup, urgency, HospitalArea, patientName, status }
      );
    } catch (error) {
      console.error('RequestService :: createRequest :: error', error);
      throw error;
    }
  },

  // Get active emergency requests
  getActiveRequests: async () => {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.requestsCollectionId,
        [Query.equal('status', 'active')]
      );
    } catch (error) {
      console.error('RequestService :: getActiveRequests :: error', error);
      throw error;
    }
  },

  // Update a request status
  updateRequestStatus: async (documentId, status) => {
    try {
      return await databases.updateDocument(
        appwriteConfig.databaseId,
        appwriteConfig.requestsCollectionId,
        documentId,
        { status }
      );
    } catch (error) {
      console.error('RequestService :: updateRequestStatus :: error', error);
      throw error;
    }
  }
};
