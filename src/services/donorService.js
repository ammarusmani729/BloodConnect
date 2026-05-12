import { databases, appwriteConfig } from './appwrite/config';
import { ID, Query } from 'appwrite';

export const donorService = {
  // Create a new donor profile
  createDonor: async ({ name, bloodGroup, area, phone, email, available = true }) => {
    try {
      return await databases.createDocument(
        appwriteConfig.databaseId,
        appwriteConfig.donorsCollectionId,
        ID.unique(),
        { name, bloodGroup, area, phone, email, available }
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

  // Get matching donors by blood group and area directly from the database
  getMatchingDonors: async (bloodGroup, area) => {
    try {
      return await databases.listDocuments(
        appwriteConfig.databaseId,
        appwriteConfig.donorsCollectionId,
        [
          Query.equal('bloodGroup', bloodGroup),
          Query.equal('area', area),
          Query.equal('available', true)
        ]
      );
    } catch (error) {
      console.error('DonorService :: getMatchingDonors :: error', error);
      throw error;
    }
  }
};
