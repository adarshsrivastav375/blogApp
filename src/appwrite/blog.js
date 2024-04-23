import config from "../config/config";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Blogservice {
  client = new Client();
  databases;
  bucket;
  constructor() {
    this.client.setEndpoint(config.Url).setProject(config.ProjectId);
    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        config.DBId,
        config.CollectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite service::create post::error", error);
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        config.DBId,
        config.CollectionId,
        slug,
        { title, content, featuredImage, status }
      );
    } catch (error) {
      console.log("appwrite service :: update post :: error", error);
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.deleteDocument(
        config.DBId,
        config.CollectionId,
        slug
      );
      return true;
    } catch (error) {
      console.log("appwrite service :: delete post :: error", error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        config.DBId,
        config.CollectionId,
        slug
      );
    } catch (error) {
      console.log("appwrite service :: get post :: error", error);
      return false;
    }
  }
  async getPostList(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        config.DBId,
        config.CollectionId,
        queries
      );
    } catch (error) {
      console.log("appwrite service :: get posts :: error", error);
      return false;
    }
  }
  // file upload
  async fileUpload(file) {
    try {
      return await this.bucket.createFile(config.bucketId, ID.unique(), file);
    } catch (error) {
      console.log("appwrite service :: upload file :: error", error);
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(config.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("appwrite service :: upload file :: error", error);
      return false;
    }
  }
  getFilePreview(fileId) {
    return this.bucket.getFilePreview(config.bucketId, fileId);
  }
}

const blogService = new Blogservice();
export default blogService;
