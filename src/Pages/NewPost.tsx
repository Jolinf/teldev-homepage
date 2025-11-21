import { FormEvent, useState } from 'react';

export default function NewPost() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);

    const data = {
      title: formData.get('title')?.toString() ?? '',
      slug: formData.get('slug')?.toString() ?? '',
      content: formData.get('content')?.toString() ?? '',
      image: formData.get('image')?.toString() ?? '',
      published: formData.get('published') === 'on',
    };

    // Step 3: Call your Vercel serverless function
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });

    setLoading(false);
    if (res.ok) setSuccess(true);
  }

  return (
    <div className="min-h-screen bg-white text-black px-4">
      <div className="max-w-xl mx-auto py-10">
        <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>

        {success && <p className="text-green-600">Post created successfully.</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input name="title" placeholder="Title" className="border p-2 w-full" />
          <input name="slug" placeholder="Slug" className="border p-2 w-full" />
          <textarea
            name="content"
            placeholder="Content"
            className="border p-2 w-full h-40"
          />
          <input
            name="image"
            placeholder="Image URL"
            className="border p-2 w-full"
          />
          <label className="flex gap-2">
            <input type="checkbox" name="published" />
            Publish now
          </label>

          <button className="bg-black text-white p-2 w-full">
            {loading ? 'Publishing...' : 'Publish'}
          </button>
        </form>
      </div>
    </div>
  );
}
