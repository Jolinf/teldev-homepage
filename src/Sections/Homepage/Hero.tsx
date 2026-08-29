// src/sections/Hero.tsx
import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import tonyVideo from '../../assets/tony.mp4';
import tonyPoster from '../../assets/tony-poster.webp';

/**
 * Homepage hero. Tony is the hero: he is the background of the section, held
 * against flat black, with the copy and calls to action laid over the empty
 * left-hand side. The previous stock photograph of a computer setup has been
 * removed entirely — Tony and the black replace it.
 *
 * Tony is a short clip of the robot turning his head from his right to his
 * left. Rather than autoplaying it, we scrub it: the horizontal position of
 * the pointer maps to a position in the clip, so moving the cursor across the
 * page makes Tony track it. The source clip was trimmed to exactly the range
 * that contains the turn, so cursor 0..1 maps cleanly onto currentTime
 * 0..duration with no dead zones at either end, and it is encoded with a
 * keyframe every 4 frames so seeking stays cheap.
 *
 * The clip's background was crushed to true #000 during encoding and the
 * section behind it is also black, so the video's rectangle is invisible and
 * Tony reads as sitting directly on the page. No blend mode is involved: the
 * z-indexed content wrapper and framer-motion's transforms both open stacking
 * contexts, which would isolate a blended element from what sits behind it.
 *
 * He is anchored to the right and sized by height so he always stands on the
 * bottom edge of the section, whatever the viewport. On large screens the copy
 * sits over the empty left-hand side, with a horizontal scrim holding that side
 * solid black and fading out before it reaches him. Narrow screens have no
 * empty left-hand side to use, so instead of overlaying him there, a spacer
 * reserves the band he occupies at the bottom and the copy is laid out above
 * it — the copy cannot reach his face because the layout never gives it that
 * room.
 *
 * Pointer tracking is only set up for devices with a real hovering pointer and
 * only while the hero is on screen. On touch devices, and when the visitor has
 * asked for reduced motion, the still poster frame is rendered instead and the
 * video is never downloaded at all.
 */

const CLAMP = (v: number) => (v < 0 ? 0 : v > 1 ? 1 : v);

/** Shared sizing for the clip and its still fallback. */
const TONY_CLASS =
  'h-full w-auto max-w-none object-contain object-bottom select-none pointer-events-none';

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

    // Stop the work once the hero has scrolled out of view.
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
      className="relative min-h-screen w-full overflow-hidden bg-black"
    >
      {/* Tony: the background of the section */}
      <motion.div
        className="pointer-events-none absolute right-0 bottom-0 z-0 h-[34vh] sm:h-[38vh] lg:top-0 lg:h-full lg:right-[-2%] xl:right-0"
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
        aria-hidden="true"
      >
        {canTrack ? (
          <video
            ref={videoRef}
            src={tonyVideo}
            poster={tonyPoster}
            muted
            playsInline
            preload="auto"
            tabIndex={-1}
            onLoadedMetadata={(event) => {
              // Start him facing forward, before the pointer has moved.
              const el = event.currentTarget;
              if (el.duration) el.currentTime = el.duration / 2;
            }}
            className={TONY_CLASS}
          />
        ) : (
          <img
            src={tonyPoster}
            alt=""
            loading="eager"
            decoding="async"
            fetchPriority="high"
            className={TONY_CLASS}
          />
        )}
      </motion.div>

      {/*
        Readability scrim. Solid black under the copy, fully transparent well
        before it reaches Tony, so the text always sits on black and he is
        never dimmed. The vertical pass only does anything on small screens,
        where he sits behind the lower half of the copy.
      */}
      <div
        className="absolute inset-0 z-10 hidden lg:block"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(90deg, #000 0%, #000 36%, rgba(0,0,0,0.78) 48%, rgba(0,0,0,0) 68%)',
        }}
      />
      <div
        className="absolute inset-0 z-10 lg:hidden"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, #000 0%, #000 52%, rgba(0,0,0,0.55) 68%, rgba(0,0,0,0) 84%)',
        }}
      />

      {/* Copy */}
      <div className="relative z-20 flex min-h-screen flex-col lg:justify-center">
        <div className="w-full max-w-[85rem] mx-auto px-6 pt-28 sm:pt-32 lg:py-32">
        <motion.div
          className="text-left max-w-xl lg:max-w-[30rem] xl:max-w-[38rem]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1
            className="text-white font-bold text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl leading-tight sm:leading-tight mb-6"
            style={{ fontFamily: 'Poppins, sans-serif' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Bringing Technology to <span className="text-[#1C6CFE]">You</span>
          </motion.h1>

          <motion.p
            className="text-[#F5F5F5] text-lg sm:text-xl md:text-2xl lg:text-lg xl:text-xl leading-relaxed sm:leading-relaxed font-medium mb-10"
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
            className="flex flex-col gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              type="button"
              className="w-full sm:w-72 px-8 py-4 bg-[#1752c4] text-white font-semibold rounded-xl shadow-md hover:shadow-xl hover:bg-[#123f8f] transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/ContactUsPage')}
            >
              Book a Free Consultation
            </motion.button>

            <motion.button
              type="button"
              className="w-full sm:w-72 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-[#0F1729] transition-all duration-300 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate('/Whoweare')}
            >
              Meet Our Team
            </motion.button>
          </motion.div>
        </motion.div>
        </div>

        {/*
          Reserves the bottom band Tony stands in on narrow screens, so the copy
          is laid out above him rather than on top of him. mt-auto pins it to
          the bottom; if the copy is tall the section simply grows past 100vh
          and he stays on the bottom edge.
        */}
        <div className="mt-auto h-[34vh] sm:h-[38vh] w-full lg:hidden" aria-hidden="true" />
      </div>
    </section>
  );
}
