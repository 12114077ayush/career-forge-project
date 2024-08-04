/* eslint-disable no-unused-vars */
import { Client, Databases } from "appwrite";
import conf from "../../conf/Conf";

class Dataservice {
  client = new Client();
  database;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteurl)
      .setProject(conf.appwriteProjectid);

    this.database = new Databases(this.client);
  }

  async createdatabase({
    name,
    email,
    userId,
    skills = "",
    schooling = "",
    address = "",
    phone = "",
  }) {
    try {
      return await this.database.createDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        userId,
        {
          name,
          email,
          skills,
          schooling,
          address,
          phone,
        }
      );
    } catch (error) {
      console.error("Error creating document:", error);
      throw error; // Optionally rethrow to handle errors in calling code
    }
  }

  async updatedatabase({
    userId,
    name,
    email,
    skills,
    schooling,
    address,
    phone,
  }) {
    try {
      return await this.database.updateDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        userId,
        {
          name,
          email,
          skills,
          schooling,
          address,
          phone,
        }
      );
    } catch (error) {
      console.error("Error updating document:", error);
      throw error; // Optionally rethrow to handle errors in calling code
    }
  }

  async getdatabase({ userId }) {
    try {
      return await this.database.getDocument(
        conf.appwriteDatabaseid,
        conf.appwriteCollectionid,
        userId
      );
    } catch (error) {
      console.error("Error fetching document:", error);
      // Handle specific error codes or situations here if needed
      if (error.code === 404) {
        console.error("Document not found");
      }
      return null; // Return null to indicate that the document was not found
    }
  }
}

export const userDataservice = new Dataservice();
