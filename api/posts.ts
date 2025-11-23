import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.teldevdb_mongodb_uri!);
let cachedDb: Db | null = null;

async function connectDB() {
  if (cachedDb) return cachedDb;

  await client.connect();
  cachedDb = client.db("teldev");
  return cachedDb;
}

// CORS middleware helper
function setCorsHeaders(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Apply CORS headers first
  setCorsHeaders(res);

  // Handle preflight requests
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  try {
    const db = await connectDB();
    const posts = db.collection("posts");

    if (req.method === "GET") {
      const { slug } = req.query;

      if (slug) {
        const post = await posts.findOne({ slug: slug.toString() });
        return res.status(200).json(post);
      }

      const allPosts = await posts.find().sort({ createdAt: -1 }).toArray();
      return res.status(200).json(allPosts);
    }

    if (req.method === "POST") {
      const { title, slug, content, image, published } = req.body;

      const result = await posts.insertOne({
        title,
        slug,
        content,
        image,
        published,
        createdAt: new Date(),
      });

      return res.status(201).json({ success: true, id: result.insertedId });
    }

    // Method not allowed
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err: unknown) {
    console.error("API ERROR:", err);
    return res.status(500).json({
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    });
  }
}
