import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Footer from '../../components/footer';
import ReactMarkdown from 'react-markdown';

interface BlogPost {
  _id?: string;
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
      .get(`https://www.teldev.org/api/posts?slug=${slug}`)
      .then((res) => {
        if (!res.data) {
          setError('Post not found');
        } else {
          setPost(res.data);
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return <div className="text-center text-white py-20">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 py-20">{error}</div>;
  }

  if (!post) return null;

  const { title, content, image, createdAt } = post;

  return (
    <>
      <section className="min-h-screen bg-black text-left text-white px-4 pb-12 md:px-12 mt-10">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm sm:text-base" aria-label="Breadcrumb">
            <ol className="list-reset flex text-[#a0a0a0]">
              <li>
                <Link
                  to="/blogpage"
                  className="hover:text-[#1C6CFE] focus:outline-none focus:ring-2 focus:ring-[#1C6CFE] rounded"
                >
                  Blog
                </Link>
              </li>
              <li>
                <span className="mx-2">/</span>
              </li>
              <li aria-current="page" className="text-white font-semibold">
                {title}
              </li>
            </ol>
          </nav>

          {/* Cover Image */}
          {image && (
            <img
              src={image}
              alt={title}
              className="w-full rounded-xl mb-8"
            />
          )}

          {/* Title */}
          <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>

          {/* Date */}
          {createdAt && (
            <p className="text-xs text-gray-400 mt-4 mb-10">
              {new Date(createdAt).toLocaleDateString()}
            </p>
          )}

          {/* Content */}
          <div
            className="prose prose-invert max-w-none text-lg"
            style={{ whiteSpace: 'pre-line' }}
          >
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
