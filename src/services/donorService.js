import { databases, appwriteConfig } from './appwrite/config';
import { ID, Query } from 'appwrite';

export const donorService = {
  // Create a new donor profile
  createDonor: async (donorData) => {
    try {
      return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.donorsCollectionId,
        ID.unique(),
        donorData
      );
    } catch (error) {
      console.error('DonorService :: createDonor :: error', error);
      throw error;
    }
  },

  // Get all donors, optionally filtered
  getDonors: async (queries = []) => {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.donorsCollectionId,
        queries
      );
    } catch (error) {
      console.error('DonorService :: getDonors :: error', error);
      throw error;
    }
  },

  // Get donor by blood group and location proximity
  getMatchingDonors: async (bloodGroup, city) => {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.donorsCollectionId,
        [
          Query.equal('bloodGroup', bloodGroup),
          Query.equal('city', city)
        ]
      );
    } catch (error) {
      console.error('DonorService :: getMatchingDonors :: error', error);
      throw error;
    }
  }
};
