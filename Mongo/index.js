import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();
const password = process.env.password;

const uri = `mongodb://kp939331_db_user:${password}@ac-nxjqh6n-shard-00-00.dnitlgl.mongodb.net:27017,ac-nxjqh6n-shard-00-01.dnitlgl.mongodb.net:27017,ac-nxjqh6n-shard-00-02.dnitlgl.mongodb.net:27017/?ssl=true&replicaSet=atlas-g3r54k-shard-0&authSource=admin&appName=Cluster0`;

const client = new MongoClient(uri);

export async function connectToMongoDB() {
  try {
    await client.connect();
    console.log("You successfully connected to MongoDB!");
    return client;
  } catch (err) {
    console.error("Connection error:", err);
  }
}

connectToMongoDB();