import express from "express";
import cors from "cors";
import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
const client = new MongoClient(process.env.teldevdb_MONGODB_URI);
await client.connect();
const db = client.db(); // default DB

// Create blog post
app.post("/posts", async (req, res) => {
  try {
    const post = {
      ...req.body,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await db.collection("posts").insertOne(post);

    res.json({ success: true, post });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(4000, () => console.log("API running on port 4000"));
