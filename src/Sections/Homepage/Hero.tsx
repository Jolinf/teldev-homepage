// src/sections/Hero.tsx
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import heroImage from '../../assets/Homepage-images/Homepage-herosection image.webp';
import tonyVideo from '../../assets/tony.mp4';
import tonyPoster from '../../assets/tony-poster.webp';

/**
 * Homepage hero: copy on the left, Tony on the right.
 *
 * Tony is a short clip of the robot turning his head from his right to his
 * left. Rather than autoplaying it, we scrub it: the horizontal position of
 * the pointer maps to a position in the clip, so moving the cursor across the
 * page makes Tony track it. The source clip was trimmed to exactly the range
 * that contains the turn, so cursor 0..1 maps cleanly onto currentTime
 * 0..duration with no dead zones at either end, and it is encoded with a
 * keyframe every 4 frames so seeking stays cheap.
 *
 * The clip's background was crushed to true #000 during encoding, and the
 * hero overlay is taken to near-solid black on the right, so the video's
 * rectangle dissolves into the background with no visible box. A CSS blend
 * mode cannot do this job here: the z-20 content wrapper and framer-motion's
 * transforms both open stacking contexts, which isolate a blended element
 * from the background image sitting behind them.
 *
 * Pointer tracking is only set up for devices with a real hovering pointer and
 * only while the hero is on screen. On touch devices, and when the visitor has
 * asked for reduced motion, the still poster frame is rendered instead and the
 * video is never downloaded at all.
 */

const CLAMP = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

export default function Hero() {
  const navigate = useNavigate();
  const prefersReducedMotion = useReducedMotion();

  const [canTrack, setCanTrack] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const targetRef = useRef(0.5); // where the pointer is, 0 (left) .. 1 (right)
  const easedRef = useRef(0.5); // where Tony currently is, eased toward target
  const frameRef = useRef<number | null>(null);
  const visibleRef = useRef(true);

  useEffect(() => {
    if (prefersReducedMotion) return;
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const query = window.matchMedia('(hover: hover) and (pointer: fine)');
    const apply = () => setCanTrack(query.matches);
    apply();
    query.addEventListener('change', apply);
    return () => query.removeEventListener('change', apply);
  }, [prefersReducedMotion]);

  const handlePointerMove = useCallback((event: PointerEvent) => {
    targetRef.current = CLAMP(event.clientX / window.innerWidth);
  }, []);

  useEffect(() => {
    if (!canTrack) return;
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video || !section) return;

    // Skip the work entirely once the hero has scrolled out of view.
    const observer = new IntersectionObserver(
      ([entry]) => {
        visibleRef.current = entry.isIntersecting;
      },
      { threshold: 0 }
    );
    observer.observe(section);

    const step = () => {
      frameRef.current = requestAnimationFrame(step);
      if (!visibleRef.current || document.hidden) return;

      // Ease toward the pointer so the turn lags slightly instead of snapping.
      easedRef.current += (targetRef.current - easedRef.current) * 0.1;

      const duration = video.duration;
      if (!duration || Number.isNaN(duration) || video.readyState < 2) return;

      const next = CLAMP(easedRef.current) * duration;
      // One frame of the source clip is ~1/24s; ignore anything smaller, and
      // never stack a new seek on top of one still in flight.
      if (!video.seeking && Math.abs(video.currentTime - next) > 0.02) {
        video.currentTime = next;
      }
    };

    window.addEventListener('pointermove', handlePointerMove, { passive: true });
    frameRef.current = requestAnimationFrame(step);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
      if (frameRef.current !== null) cancelAnimationFrame(frameRef.current);
      observer.disconnect();
    };
  }, [canTrack, handlePointerMove]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex items-center overflow-hidden"
    >
      {/*
        Rendered as a real <img>, not a JS-loaded CSS background-image, so the
        browser's preload scanner finds it while still parsing the initial
        HTML. fetchPriority="high" plus no lazy loading marks it as the page's
        priority image.
      */}
      <motion.img
        src={heroImage}
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover z-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      />

      {/*
        Two overlays instead of the previous even wash. The vertical one keeps
        the old darkening; the horizontal one leaves the photo faintly readable
        behind the copy on the left and takes the right-hand side to effectively
        solid black, which is what lets Tony's black backdrop disappear.
      */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/85 to-black/98 z-10" />

      {/* Content */}
      <div className="relative z-20 w-full max-w-[85rem] mx-auto px-6 pt-32 pb-16 sm:pt-36 lg:pt-32 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-8 items-center">
          {/* Copy */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1
              className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl leading-tight sm:leading-tight mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Bringing Technology to <span className="text-[#1C6CFE]">You</span>
            </motion.h1>

            <motion.p
              className="text-[#F5F5F5] max-w-2xl mx-auto lg:mx-0 text-lg sm:text-xl md:text-2xl leading-relaxed sm:leading-relaxed font-medium mb-10"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Making technology, artificial intelligence, and automation accessible, practical, and
              impactful for individuals, businesses, and communities. Starting in Nigeria.
            </motion.p>

            {/* Stacked calls to action */}
            <motion.div
              className="flex flex-col gap-4 items-stretch sm:items-center lg:items-start max-w-sm mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                type="button"
                className="w-full sm:w-64 px-8 py-4 bg-[#1752c4] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-[#123f8f] transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/ContactUsPage')}
              >
                Book a Free Consultation
              </motion.button>

              <motion.button
                type="button"
                className="w-full sm:w-64 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0F1729] transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate('/Whoweare')}
              >
                Meet Our Team
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Tony */}
          <motion.div
            className="relative flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.35, ease: 'easeOut' }}
          >
            {canTrack ? (
              <video
                ref={videoRef}
                src={tonyVideo}
                poster={tonyPoster}
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                tabIndex={-1}
                onLoadedMetadata={(event) => {
                  // Start him facing forward, before the pointer has moved.
                  const el = event.currentTarget;
                  if (el.duration) el.currentTime = el.duration / 2;
                }}
                className="relative w-[16rem] sm:w-[20rem] lg:w-full lg:max-w-[30rem] h-auto select-none"
              />
            ) : (
              <img
                src={tonyPoster}
                alt=""
                aria-hidden="true"
                loading="eager"
                decoding="async"
                className="relative w-[16rem] sm:w-[20rem] lg:w-full lg:max-w-[30rem] h-auto select-none"
              />
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
