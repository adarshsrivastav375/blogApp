/* eslint-disable no-useless-catch */
import { Client, Account, ID } from "appwrite";
import config from "../config/config";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client.setEndpoint(config.Url).setProject(config.ProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    // eslint-disable-next-line no-useless-catch
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.logIn({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async logIn({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
      // if (user) {
      //   return user;
      // } else {
      //   return null;
      // }
    } catch (error) {
      console.log("appwrite service :: get current User::error", error);
    }
    return null;
  }
  async logOut() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite Service :: logout :: error", error);
    }
  }
}

const authService = new AuthService();

export default authService;
