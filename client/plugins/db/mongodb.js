import { MongoClient, ServerApiVersion } from "mongodb";

const uri = 'mongodb+srv://andrehendrawan:VObNKXeVPMG4Zi6N@cluster0.8kfq6ka.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const DB_NAME = "todo_app_db";

const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

export const db = client.db(DB_NAME);
export const getCollection = (collectionName) => {
  return db.collection(collectionName);
};


