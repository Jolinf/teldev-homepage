// src/Pages/Blog.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type BlogPost = {
  id: number;
  documentId: string;
  author: string;
  title: string;
  slug: string;
  content: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  date: string;
  coverImage?: {
    url: string;
    formats?: {
      thumbnail?: { url: string };
      small?: { url: string };
      medium?: { url: string };
      large?: { url: string };
    };
  };
};

interface Meta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [meta, setMeta] = useState<Meta | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const pageSize = 6;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://teldev-homepage.onrender.com/api/posts?populate=coverImage&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
        );
        console.log('Strapi response:', JSON.stringify(response.data, null, 2));
        setPosts(response.data.data);
        setMeta(response.data.meta);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, [page]);

  const handlePrevious = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNext = () => {
    if (meta && page < meta.pagination.pageCount) setPage(page + 1);
  };

  if (error) {
    return (
      <section className="min-h-screen bg-black text-white px-4 py-12 md:px-12 mt-20">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white px-4 py-12 md:px-12">
      {/* Search Bar */}
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full max-w-[40%] px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 animate-pulse h-64" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <div className="text-center">
          <p className="text-gray-400">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts
            .filter(
              (post) =>
                post.title.toLowerCase().includes(search.toLowerCase()) ||
                post.content.toLowerCase().includes(search.toLowerCase())
            )
            .map((post) => {
              const imageUrl = post.coverImage?.formats?.medium?.url
                ? `https://teldev-homepage.onrender.com${post.coverImage.formats.medium.url}`
                : post.coverImage?.url
                  ? `https://teldev-homepage.onrender.com${post.coverImage.url}`
                  : null;

              return (
                <motion.div
                  key={post.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-md text-left cursor-pointer"
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  {imageUrl && (
                    <img src={imageUrl} alt={post.title} className="h-48 w-full object-cover" />
                  )}
                  <div className="p-4">
                    <p className="text-xs text-gray-400 mb-1">
                      {new Date(post.date || post.publishedAt).toLocaleDateString()}
                    </p>
                    <h3 className="text-lg font-semibold">{post.title}</h3>
                    <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                      {post.content.slice(0, 120)}...
                    </p>
                  </div>
                </motion.div>
              );
            })}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-center mt-10 items-center space-x-4">
        <button
          onClick={handlePrevious}
          disabled={page === 1}
          className="px-4 py-2 bg-zinc-800 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-gray-400">
          Page {page} of {meta?.pagination.pageCount}
        </span>
        <button
          onClick={handleNext}
          disabled={page === meta?.pagination.pageCount}
          className="px-4 py-2 bg-zinc-800 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </section>
  );
}
