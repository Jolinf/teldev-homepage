import { motion } from 'framer-motion';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import post1 from '../../assets/Homepage-images/homepage-teledevblogpost1-image.jpg';
import post2 from '../../assets/Homepage-images/homepage-teldevblogpost2-image.jpg';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
};

export default function TeldevBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          'https://teldev-homepage.onrender.com/api/posts?populate=coverImage&pagination[page]=1&pagination[pageSize]=2'
        );
        setPosts(response.data.data);
        setLoading(false);
      } catch (err) {
        console.error('Failed to fetch posts:', err);
        setError('Failed to load blog posts. Please try again later.');
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (error) {
    return (
      <section className="px-[10%] bg-[#0E0E0E] text-[#FFFFFF] text-left sm:px-[60px] md:px-[80px] lg:px-[100px] py-20 sm:py-[60px] md:py-[80px]">
        <div className="text-center">
          <p className="text-red-500">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="px-[10%] bg-[#0E0E0E] text-[#FFFFFF] text-left sm:px-[60px] md:px-[80px] lg:px-[100px] py-20 sm:py-[60px] md:py-[80px]">
      <motion.div
        className="max-w-screen-xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-center text-[1.8em] sm:text-2xl md:text-3xl font-semibold text-[#2F80ED] mb-[5%] sm:mb-10 md:mb-14"
          style={{ fontFamily: 'Poppins, sans-serif' }}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Teldev <span className="text-[#FFFFFF]">Blog</span>
        </motion.h2>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6">
            {[...Array(2)].map((_, i) => (
              <div key={i} className="bg-[#1A1A1A] rounded-[10px] p-4 animate-pulse h-[400px]" />
            ))}
          </div>
        ) : posts.length === 0 ? (
          <div className="text-center">
            <p className="text-gray-400">No blog posts found.</p>
          </div>
        ) : (
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6"
            style={{ fontFamily: 'Inter, sans-serif' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {posts.map((post) => {
              const imageUrl = post.coverImage?.formats?.medium?.url
                ? `https://teldev-homepage.onrender.com${post.coverImage.formats.medium.url}`
                : post.coverImage?.url
                  ? `https://teldev-homepage.onrender.com${post.coverImage.url}`
                  : null;

              return (
                <motion.article
                  key={post.id}
                  className="bg-[#1A1A1A] w-full h-full rounded-[10px] overflow-hidden shadow-md hover:shadow-blue-500/30 transition-all duration-300 border-[2px] sm:border-[3px] border-[#0F1729] cursor-pointer"
                  variants={cardVariants}
                  whileHover="hover"
                  role="article"
                  aria-labelledby={`post-title-${post.id}`}
                  onClick={() => navigate(`/blog/${post.slug}`)}
                >
                  <motion.div
                    className="relative overflow-hidden"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    {imageUrl && (
                      <img
                        src={imageUrl}
                        alt={post.title}
                        loading="lazy"
                        className="w-full h-[300px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-500"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
                  </motion.div>
                  <motion.div
                    className="p-6 sm:p-8"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.time
                      dateTime={post.date || post.publishedAt}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 block"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {new Date(post.date || post.publishedAt).toLocaleDateString()}
                    </motion.time>
                    <motion.h3
                      id={`post-title-${post.id}`}
                      className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold leading-snug mb-2 sm:mb-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {post.title}
                    </motion.h3>
                    <motion.p
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      {post.content.slice(0, 120)}...
                    </motion.p>
                    <motion.div
                      className="inline-flex items-center text-[#2F80ED] no-underline text-sm sm:text-base font-medium hover:text-[#1C6CFE] transition-colors duration-300"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.5 }}
                      whileHover={{ x: 5 }}
                    >
                      Read more →
                    </motion.div>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
