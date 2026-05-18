'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from './ThemeToggle';

const slides = [
  {
    id: 1,
    title: 'Find Your Perfect Tutor Online',
    description:
      'Connect with expert tutors for programming, English, math, and more.',
    image:
      'https://images.unsplash.com/photo-1588702547954-4800ead296ef?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8b25saW5lJTIwdHV0b3Jpbmd8ZW58MHx8MHx8fDA%3D',
  },
  {
    id: 2,
    title: 'Personalized Learning Experience',
    description:
      'Book live sessions and improve your skills with dedicated mentors.',
    image:
      'https://i.ibb.co.com/SD1Wqrvc/dylan-ferreira-HJmxky8-Fvmo-unsplash.jpg',
  },
  {
    id: 3,
    title: 'Learn Faster, Achieve More',
    description: 'Track progress, complete lessons, and grow with confidence.',
    image:
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slider = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(slider);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#888c95] text-white py-4 dark:bg-[#062f49] ">
      <ThemeToggle />

      <div className="absolute top-0 left-0 h-72 w-72 rounded-full bg-[#5DF8D8]/20 blur-3xl " />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[90vh] container grid-cols-1 items-center gap-12 px-6 py-16 lg:grid-cols-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].id}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green-400" />
              <p className="text-sm text-gray-300">10+ Tutors Available</p>
            </div>

            <h1 className="font-playfair text-5xl font-bold leading-tight md:text-6xl">
              {slides[current].title}
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-gray-300">
              {slides[current].description}
            </p>

            <div className="flex flex-wrap gap-4">
              <Link href="/tutors">
                <button className="rounded-full bg-blue-500 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:bg-violet-500">
                  Explore Tutors
                </button>
              </Link>

              <button className="rounded-full border border-white/20 bg-white/5 px-8 py-4 text-sm font-semibold backdrop-blur-md transition-all duration-300 hover:bg-white/10">
                Become a Tutor
              </button>
            </div>

            <div className="flex flex-wrap gap-6 pt-4">
              <div>
                <h3 className="text-2xl font-bold">12K+</h3>
                <p className="text-sm text-gray-400">Students</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">10+</h3>
                <p className="text-sm text-gray-400">Tutors</p>
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  4.8<span className="text-[#25aa53] pl-0.5">★</span>
                </h3>
                <p className="text-sm text-gray-400">Rating</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.div
            key={slides[current].image}
            initial={{ opacity: 0, scale: 0.9, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -50 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur-xl">
              <Image
                src={slides[current].image}
                alt="Tutor Banner"
                width={700}
                height={700}
                className="h-125 w-full rounded-[24px] object-cover"
              />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3,
                repeat: Infinity,
              }}
              className="absolute -left-6 top-10 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
            >
              <p className="text-sm text-black">Live Classes</p>
              <h4 className="mt-1 text-xl font-bold text-[#0c4a73]">
                24/7 Learning
              </h4>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="absolute -bottom-6 right-4 rounded-2xl border border-white/10 bg-white/10 p-5 backdrop-blur-xl"
            >
              <p className="text-sm text-black">Success Rate</p>
              <h4 className="mt-1 text-xl font-bold text-[#0b466d]">98%</h4>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3 ">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              current === index ? 'w-10 bg-violet-500' : 'w-3 bg-white/30'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
