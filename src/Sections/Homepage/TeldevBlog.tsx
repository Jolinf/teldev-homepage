import { motion } from 'framer-motion';
import post1 from '../../assets/Homepage-images/homepage-teledevblogpost1-image.jpg';
import post2 from '../../assets/Homepage-images/homepage-teldevblogpost2-image.jpg';

const blogPosts = [
  {
    id: 1,
    date: 'March 20, 2025',
    dateTime: '2025-03-20',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: post1,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#', // replace with actual URL
  },
  {
    id: 2,
    date: 'March 20, 2025',
    dateTime: '2025-03-20',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: post2,
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    link: '#', // replace with actual URL
  },
];

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

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-6"
          style={{ fontFamily: 'Inter, sans-serif' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              className="bg-[#1A1A1A] w-full h-full rounded-[10px] overflow-hidden shadow-md hover:shadow-blue-500/30 transition-all duration-300 border-[2px] sm:border-[3px] border-[#0F1729]"
              variants={cardVariants}
              whileHover="hover"
              role="article"
              aria-labelledby={`post-title-${post.id}`}
            >
              <motion.div
                className="relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={post.image}
                  alt={post.title}
                  loading="lazy"
                  className="w-full h-[300px] sm:h-[250px] md:h-[300px] object-cover transition-transform duration-500"
                />
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
                  dateTime={post.dateTime}
                  className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 mb-2 block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  {post.date}
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
                  {post.summary}
                </motion.p>
                <motion.a
                  href={post.link}
                  className="inline-flex items-center text-[#2F80ED] no-underline text-sm sm:text-base font-medium hover:text-[#1C6CFE] transition-colors duration-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ x: 5 }}
                >
                  Read more →
                </motion.a>
              </motion.div>
            </motion.article>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
