import { account } from './appwrite/config';
import { ID } from 'appwrite';

export const authService = {
  // Register a new user
  register: async (email, password, name) => {
    try {
      const userAccount = await account.create(ID.unique(), email, password, name);
      if (userAccount) {
        return await account.createEmailPasswordSession(email, password);
      }
    } catch (error) {
      console.error('AuthService :: register :: error', error);
      throw error;
    }
  },

  // Login existing user
  login: async (email, password) => {
    try {
      return await account.createEmailPasswordSession(email, password);
    } catch (error) {
      console.error('AuthService :: login :: error', error);
      throw error;
    }
  },

  // Logout user
  logout: async () => {
    try {
      return await account.deleteSessions();
    } catch (error) {
      console.error('AuthService :: logout :: error', error);
      throw error;
    }
  },

  // Get current session/user
  getCurrentUser: async () => {
    try {
      return await account.get();
    } catch (error) {
      console.error('AuthService :: getCurrentUser :: error', error);
      return null;
    }
  }
};
