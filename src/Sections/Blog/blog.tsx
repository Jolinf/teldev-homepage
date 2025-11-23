// src/Pages/Blog.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  content: string;
  image?: string;
  published?: boolean;
  createdAt?: string;
};

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await axios.get("/api/posts");
        setPosts(res.data);
      } catch (err) {
        console.error(err);
        setError("Failed to load blog posts.");
      }
      setLoading(false);
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <section className="min-h-screen bg-black text-white px-4 py-12 md:px-12 mt-20">
        <p className="text-center text-red-500">{error}</p>
      </section>
    );
  }

  const filtered = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.content.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="min-h-screen bg-black text-white px-4 py-12 md:px-12">
      {/* Search Bar */}
      <div className="mb-12 flex justify-center">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="w-full max-w-[40%] px-4 py-2 rounded-xl border border-zinc-700 bg-zinc-800 text-white"
        />
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-gray-800 rounded-xl p-4 animate-pulse h-64" />
          ))}
        </div>
      ) : filtered.length === 0 ? (
        <p className="text-center text-gray-400">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((post) => (
            <motion.div
              key={post._id}
              whileHover={{ scale: 1.02 }}
              className="bg-zinc-900 border border-zinc-700 rounded-xl overflow-hidden shadow-md cursor-pointer"
              onClick={() => navigate(`/blog/${post.slug}`)}
            >
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="p-4">
                <p className="text-xs text-gray-400 mb-1">
                  {post.createdAt
                    ? new Date(post.createdAt).toLocaleDateString()
                    : ""}
                </p>

                <h3 className="text-lg font-semibold">{post.title}</h3>

                <p className="text-sm text-gray-400 mt-2 line-clamp-3">
                  {post.content.slice(0, 120)}…
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
