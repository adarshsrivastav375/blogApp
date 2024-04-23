const config = {
  Url: String(import.meta.env.VITE_APPWRITE_URL),
  ProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
  DBId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
  CollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  bucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
};
export default config;
