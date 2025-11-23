// src/Pages/open.tsx
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from "../../components/footer";
import ReactMarkdown from "react-markdown";

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  content: string;
  image?: string;
  createdAt?: string;
}

export default function BlogOpen() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`/api/posts?slug=${slug}`)
      .then((res) => {
        if (!res.data) return setError("Post not found");
        setPost(res.data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to load post");
        setLoading(false);
      });
  }, [slug]);

  if (loading)
    return <div className="text-center text-white py-20">Loading...</div>;
  if (error)
    return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!post) return null;

  return (
    <>
      <section className="min-h-screen bg-black text-white px-4 pb-12 md:px-12 mt-10">
        <div className="max-w-3xl mx-auto">
          <nav className="mb-6 text-sm">
            <ol className="flex text-[#a0a0a0]">
              <li>
                <Link to="/blog" className="hover:text-blue-500">
                  Blog
                </Link>
              </li>
              <li className="mx-2">/</li>
              <li className="text-white font-semibold">{post.title}</li>
            </ol>
          </nav>

          {post.image && (
            <img
              src={post.image}
              alt={post.title}
              className="w-full rounded-xl mb-8"
            />
          )}

          <h1 className="text-3xl md:text-5xl font-bold">{post.title}</h1>

          <p className="text-xs text-gray-400 mt-2 mb-10">
            {post.createdAt
              ? new Date(post.createdAt).toLocaleDateString()
              : ""}
          </p>

          <div className="prose prose-invert max-w-none text-lg">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
