import { MongoClient } from "mongodb";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const connectionString = process.env.ATLAS_URI;


/* NEW DB CONNECTION
const db = mongoose.connect(connectionString, { dbName: "media"});

export default db;
*/

/*  OLD DB CONNECTION (WORKS) */
const client = new MongoClient(connectionString);


let conn;

try {
    conn = await client.connect();
} catch(e) {
    console.error(e);
}

let db = conn.db("media");
export default db