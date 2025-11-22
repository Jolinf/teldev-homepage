import { FormEvent, useRef, useState } from 'react';

import { useScrollContainer } from '../contexts/ScrollContext';

export default function NewPost() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [imageFileName, setImageFileName] = useState<string>('');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { mainRef } = useScrollContainer();

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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageFileName(file.name);
    }
  };

  const handleImageButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <main ref={mainRef} className="bg-white">
      <div className="min-h-screen px-4 py-10">
        <div className="max-w-xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">Create New Blog Post</h1>

          {success && (
            <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
              Post created successfully.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="title"
              placeholder="Title"
              className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <input
              name="slug"
              placeholder="Slug"
              className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            <textarea
              name="content"
              placeholder="Content"
              className="border border-gray-300 rounded p-3 w-full h-40 resize-y focus:outline-none focus:ring-2 focus:ring-black"
              required
            />
            
            {/* Hidden file input */}
            <input
              ref={fileInputRef}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            
            {/* Button-styled file input trigger */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleImageButtonClick}
                className="w-full bg-black text-white py-3 px-4 rounded hover:bg-gray-800 transition-colors cursor-pointer font-medium"
              >
                {imageFileName ? `Selected: ${imageFileName}` : 'Choose Image'}
              </button>
              {imageFileName && (
                <button
                  type="button"
                  onClick={() => {
                    setImageFileName('');
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className="text-sm text-gray-600 hover:text-gray-800 underline"
                >
                  Clear selection
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white py-3 px-4 w-full rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              {loading ? 'Publishing...' : 'Publish'}
            </button>
          </form>
        </div>
      </div>

    </main>
  );
}
