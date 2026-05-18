'use client';

import { motion } from 'framer-motion';

export default function TransformSection() {
  return (
    <section className="relative py-28 px-6 dark:bg-[#0F172A] bg-[#a0bb90] text-white overflow-hidden">
      <div className="absolute top-[-100px] left-[-100px] w-[400px] h-[400px] bg-[#5DF8D8]/20 blur-3xl rounded-full" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-[#5DF8D8]/10 blur-3xl rounded-full" />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
            Transform Your Learning <br />
            Into Real Success
          </h1>

          <p className="dark:text-gray-300 text-gray-600 mt-5 max-w-2xl mx-auto">
            Build your tutor platform, manage students, and grow your teaching
            career with smart tools.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-4 space-y-6"
          >
            <div className="dark:bg-white/5 bg-white/12 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <h3 className="text-[#5DF8D8] font-semibold">Smart Booking</h3>
              <p className="dark:text-gray-300 text-gray-600 text-sm mt-2">
                Schedule classes easily with real-time availability.
              </p>
            </div>

            <div className="dark:bg-white/5 bg-white/12 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <h3 className="text-[#5DF8D8] font-semibold">Live Learning</h3>
              <p className="dark:text-gray-300 text-gray-600 text-sm mt-2">
                One-to-one sessions with expert tutors.
              </p>
            </div>

            <div className="dark:bg-white/5 bg-white/12 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <h3 className="text-[#5DF8D8] font-semibold">Secure Payment</h3>
              <p className="dark:text-gray-300 text-gray-600 text-sm mt-2">
                Fast and safe payment system for tutors.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="rounded-[40px] overflow-hidden shadow-2xl border border-white/10 group relative">
              <div className="overflow-hidden">
                <img
                  src="https://i.ibb.co.com/nNnbFJf7/9963615.jpg"
                  alt="learning"
                  className="h-[520px] w-full object-cover opacity-80 transition-transform duration-1000 ease-out group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t dark:from-[#0F172A]/80 from-[#a0bb90]/80 via-transparent to-transparent" />
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-6 left-6 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl"
            >
              <p className="text-sm text-gray-700">🔥 10+ Tutors</p>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="lg:col-span-3 space-y-6"
          >
            <div className="bg-[#5DF8D8] text-black p-8 rounded-3xl">
              <h3 className="text-2xl font-bold">Start Learning Today</h3>
              <p className="text-sm mt-3">
                Join thousands of students and tutors worldwide.
              </p>

              <button className="mt-6 bg-black text-white w-full py-3 rounded-2xl font-semibold hover:opacity-90 transition">
                Get Started
              </button>
            </div>

            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-3xl">
              <h4 className="text-[#5DF8D8] font-semibold">24/7 Support</h4>
              <p className="dark:text-gray-300 text-gray-600 text-sm mt-2">
                We help students and tutors anytime.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-15"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,0 1200,100 L1200,120 L0,120 Z"
            className="dark:fill-[#0c1322] fill-[#5e7551]"
          ></path>
        </svg>
      </div>
    </section>
  );
}
