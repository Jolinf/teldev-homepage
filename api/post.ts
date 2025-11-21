import { VercelRequest, VercelResponse } from '@vercel/node';
import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.MONGODB_URI!);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    await client.connect();
    const db = client.db('teldev'); // your DB name
    const posts = db.collection('posts');

    const { title, slug, content, image, published } = req.body;

    const result = await posts.insertOne({ title, slug, content, image, published, createdAt: new Date() });

    res.status(201).json({ success: true, id: result.insertedId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err });
  } finally {
    await client.close();
  }
}
