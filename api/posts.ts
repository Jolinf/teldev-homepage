import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";

// Try multiple possible environment variable names
const mongoUri = 
  process.env.teldevdb_mongodb_uri || 
  process.env.TELDEVDB_MONGODB_URI || 
  process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("MongoDB URI not found in environment variables");
}

let client: MongoClient | null = null;
let cachedDb: Db | null = null;

async function connectDB() {
  if (cachedDb) return cachedDb;

  if (!mongoUri) {
    throw new Error("MongoDB connection string is not configured. Please set teldevdb_mongodb_uri, TELDEVDB_MONGODB_URI, or MONGODB_URI environment variable.");
  }

  try {
    // Create new client if needed
    if (!client) {
      client = new MongoClient(mongoUri);
    }

    // Connect to MongoDB
    await client.connect();
    
    // Get database
    cachedDb = client.db("teldev");
    return cachedDb;
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    // Reset client on error so next request can retry
    client = null;
    cachedDb = null;
    throw error;
  }
}

// CORS middleware helper
function setCorsHeaders(res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");
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
        setCorsHeaders(res);
        return res.status(200).json(post);
      }

      const allPosts = await posts.find().sort({ createdAt: -1 }).toArray();
      setCorsHeaders(res);
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

      setCorsHeaders(res);
      return res.status(201).json({ success: true, id: result.insertedId });
    }

    // Method not allowed
    setCorsHeaders(res);
    return res.status(405).json({ error: "Method not allowed" });
  } catch (err: unknown) {
    console.error("API ERROR:", err);
    const errorMessage = err instanceof Error ? err.message : "Unknown error";
    const errorDetails = err instanceof Error ? err.stack : String(err);
    
    // Log full error details for debugging
    console.error("Full error details:", errorDetails);
    
    setCorsHeaders(res);
    return res.status(500).json({
      success: false,
      error: errorMessage,
      // Include more details in development (you can remove this in production)
      ...(process.env.NODE_ENV === 'development' && { details: errorDetails }),
    });
  }
}
