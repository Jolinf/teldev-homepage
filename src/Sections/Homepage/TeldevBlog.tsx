import React from 'react';
import post1 from '../../assets/Homepage-images/homepage-teledevblogpost1-image.jpg';
import post2 from '../../assets/Homepage-images/homepage-teldevblogpost2-image.jpg';

const blogPosts = [
  {
    id: 1,
    date: 'March 20, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: post1, // Replace with your actual image path
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    id: 2,
    date: 'March 20, 2025',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    image: post2, // Replace with your actual image path
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function TeldevBlog() {
  return (
    <section className="px-[10%] bg-[#0E0E0E] text-[#FFFFFF] text-left sm:px-[60px] md:px-[80px] lg:px-[100px] py-[5%] sm:py-[60px] md:py-[80px]">
      <div className="max-w-screen-xl mx-auto ">
        <h2
          className="text-center text-[1.8em] sm:text-2xl md:text-3xl font-semibold text-[#2F80ED] mb-[5%] sm:mb-10 md:mb-14"
          style={{ fontFamily: 'Poppins, sans-serif' }}
        >
          Teldev <span className="text-[#FFFFFF]">Blog</span>
        </h2>

        <div
          className="grid grid-cols-2 sm:grid-cols-1 gap-[30px]"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-[#1A1A1A] w-full h-full rounded-[10px] overflow-hidden shadow-md hover:shadow-blue-500/30 transition border-[2px] sm:border-[3px] border-[#0F1729]"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[300px] sm:h-[250px] md:h-[300px] object-cover"
              />
              <div className="p-[30px]">
                <p className="text-[1em] sm:text-base text-gray-400 mb-2">{post.date}</p>
                <h3 className="text-base sm:text-lg font-bold leading-snug mb-2 sm:mb-3">
                  {post.title}
                </h3>
                <p className="text-[1em] sm:text-base text-gray-300 mb-3 sm:mb-4 line-clamp-2 sm:line-clamp-3">
                  {post.summary}
                </p>
                <a
                  href="#"
                  className="text-[#2F80ED] no-underline text-sm sm:text-base font-medium hover:underline"
                >
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
