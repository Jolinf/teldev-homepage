import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Footer from '../../components/footer';
import ReactMarkdown from 'react-markdown';

// Define the BlogPost type to match the Strapi response
interface BlogPost {
  id: number;
  title: string;
  date?: string;
  publishedAt?: string;
  content: string;
  author: string;
  coverImage?: {
    url?: string;
    formats?: {
      large?: { url: string };
      medium?: { url: string };
      small?: { url: string };
      thumbnail?: { url: string };
    };
  };
}

export default function BlogOpen() {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(`http://localhost:1337/api/posts?filters[slug][$eq]=${slug}&populate=coverImage`)
      .then((res) => {
        if (res.data.data && res.data.data.length > 0) {
          setPost(res.data.data[0]);
        } else {
          setError('Post not found');
        }
        setLoading(false);
      })
      .catch(() => {
        setError('Failed to load post');
        setLoading(false);
      });
  }, [slug]);

  if (loading) return <div className="text-center text-white py-20">Loading...</div>;
  if (error) return <div className="text-center text-red-500 py-20">{error}</div>;
  if (!post) return null;

  // Strapi v4 returns the post object with a .attributes property, but your API returns fields at the top level
  // If you get the post as { id, attributes: { ... } }, use: const { title, ... } = post.attributes;
  // Otherwise, use as below:
  const { title, date, publishedAt, content, coverImage, author } = post;
  const imageUrl = coverImage?.formats?.large?.url
    ? `http://localhost:1337${coverImage.formats.large.url}`
    : coverImage?.url
      ? `http://localhost:1337${coverImage.url}`
      : null;

  return (
    <>
      <section className="min-h-screen bg-black text-left text-white px-4 pb-12 md:px-12 mt-10">
        <div className="max-w-3xl mx-auto">
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
          {imageUrl && <img src={imageUrl} alt={title} className="w-full rounded-xl mb-8" />}
          <h1 className="text-3xl md:text-5xl font-bold ">{title}</h1>
          <div className="text-xl text-gray-400 mt-4">{author}</div>
          <p className="text-xs text-gray-400 mt-2 mb-10">
            {new Date(date || publishedAt || '').toLocaleDateString()}
          </p>
          <div className="prose prose-invert max-w-none text-lg" style={{ whiteSpace: 'pre-line' }}>
            <ReactMarkdown>{content}</ReactMarkdown>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
