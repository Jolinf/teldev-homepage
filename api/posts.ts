import { VercelRequest, VercelResponse } from "@vercel/node";
import { MongoClient, Db } from "mongodb";

const client = new MongoClient(process.env.teldevdb_MONGODB_URI!);
let cachedDb: Db | null = null;

async function connectDB() {
  if (cachedDb) return cachedDb;

  await client.connect();
  cachedDb = client.db("teldev");
  return cachedDb;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const db = await connectDB();
    const posts = db.collection("posts");

    const { title, slug, content, image, published } = req.body;

    const result = await posts.insertOne({
      title,
      slug,
      content,
      image,
      published,
      createdAt: new Date(),
    });

    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err: unknown) {
    console.error("API ERROR:", err);
    res.status(500).json({ success: false, error: err instanceof Error ? err.message : "Unknown error" });
  }
}
