'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export const metadata = {
  title: '404 Not Found | MediQueue',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#d0e2d5] via-[#e8f3ec] to-[#d0e2d5] px-4 dark:from-[#0F172A] dark:via-[#0B1220] dark:to-[#0F172A]">
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#5DF8D8]/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-[120px]" />

      {/* FLOATING SHAPES */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
        }}
        className="absolute left-10 top-32 hidden h-24 w-24 rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl lg:block"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="absolute bottom-24 right-16 hidden h-32 w-32 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl lg:block"
      />

      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 60 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[40px] border border-white/10 bg-white/10 p-10 text-center shadow-[0_20px_80px_rgba(0,0,0,0.4)] backdrop-blur-3xl"
      >
        {/* 404 */}
        <motion.h1
          animate={{
            scale: [1, 1.03, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="bg-gradient-to-r from-[#2b7667] to-[#5DF8D8] bg-clip-text text-8xl font-black text-transparent md:text-9xl"
        >
          404
        </motion.h1>

        {/* TITLE */}
        <h2 className="mt-6 text-3xl font-black text-black dark:text-white md:text-4xl">
          Lost in Space 🚀
        </h2>

        {/* DESCRIPTION */}
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-gray-600 dark:text-gray-400 md:text-base">
          Oops! The page you’re looking for doesn’t exist or may have been moved
          somewhere else. Let’s get you back to safety.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link href="/">
            <button className="group relative overflow-hidden rounded-2xl bg-[#5DF8D8] px-8 py-4 font-semibold text-black shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
              <span className="relative z-10">⬅ Back To Home</span>

              <div className="absolute inset-0 translate-y-full bg-white/20 transition-transform duration-300 group-hover:translate-y-0" />
            </button>
          </Link>

          <Link href="/tutors">
            <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-semibold text-black backdrop-blur-xl transition-all duration-300 hover:bg-white/10 dark:text-white">
              Browse Tutors
            </button>
          </Link>
        </div>

        {/* BOTTOM TEXT */}
        <p className="mt-10 text-xs tracking-widest text-gray-500">
          ERROR • PAGE NOT FOUND
        </p>
      </motion.div>
    </section>
  );
}
