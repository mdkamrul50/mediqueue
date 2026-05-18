'use client';

import { FaGoogle, FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Logo from '@/assets/logo.png';

import 'swiper/css';
import 'swiper/css/effect-fade';

import Image from 'next/image';
import Link from 'next/link';

export default function RegisterPage() {
  const images = [
    'https://plus.unsplash.com/premium_vector-1726498072933-f6112c1b1396?q=80&w=1077&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169&auto=format&fit=crop',

    'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe',
  ];

  const quotes = [
    'Education is the most powerful weapon which you can use to change the world. — Nelson Mandela',

    'Live as if you were to die tomorrow. Learn as if you were to live forever. — Mahatma Gandhi',

    'The beautiful thing about learning is that nobody can take it away from you. — B.B. King',
  ];

  return (
    <div className="min-h-screen bg-[#0f1524] flex items-center justify-center p-4">
      <div className="max-w-6xl w-full bg-[#3B7597]/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl">
        <div className="relative hidden md:block h-full">
          <Swiper
            modules={[Autoplay, EffectFade]}
            autoplay={{
              delay: 2200,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            loop={true}
            effect="fade"
            speed={1200}
            className="h-full"
          >
            {images.map((img, index) => (
              <SwiperSlide key={index} className="h-full">
                <div className="relative h-full w-full overflow-hidden">
                  <img
                    src={img}
                    alt="learning"
                    className="h-full w-full object-cover scale-110 animate-zoomSlow"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/95 via-[#0F172A]/40 to-transparent" />

                  <div className="absolute bottom-10 left-10 right-10 text-white animate-fadeUp">
                    <p className="text-2xl font-semibold leading-tight mb-3">
                      {quotes[index]}
                    </p>

                    <p className="text-sm text-[#5DF8D8]">
                      TutorLink Learning Platform
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="p-10 md:p-16 flex flex-col justify-center text-white">
          <div className="max-w-md mx-auto w-full">
            <Image
              src={Logo}
              height={140}
              width={140}
              alt="logo"
              className="mb-3"
            />

            <h2 className="text-3xl font-semibold pb-3">Create Account</h2>

            <p className="text-gray-400 mb-8">
              Start your learning journey with smart tutors and live classes.
            </p>

            <form className="space-y-5">
              <div className="relative">
                <FaUser className="absolute top-1/2 -translate-y-1/2 left-5 text-[#5DF8D8]" />

                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-14 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#5DF8D8] outline-none"
                />
              </div>

              <div className="relative">
                <FaEnvelope className="absolute top-1/2 -translate-y-1/2 left-5 text-[#5DF8D8]" />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-14 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#5DF8D8] outline-none"
                />
              </div>
              <div className="relative">
                <FaUser className="absolute top-1/2 -translate-y-1/2 left-5 text-[#5DF8D8]" />

                <input
                  type="text"
                  placeholder="Photo URL"
                  className="w-full pl-14 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#5DF8D8] outline-none"
                />
              </div>

              <div className="relative">
                <FaLock className="absolute top-1/2 -translate-y-1/2 left-5 text-[#5DF8D8]" />

                <input
                  type="password"
                  placeholder="Password"
                  className="w-full pl-14 pr-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#5DF8D8] outline-none"
                />
              </div>

              <button className="w-full bg-[#5DF8D8] text-black font-semibold py-4 rounded-2xl hover:bg-[#4BE8C5] transition active:scale-95">
                Register
              </button>
            </form>

            {/* OR */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10"></div>

              <span className="text-gray-400 text-sm">OR</span>

              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <p className="text-center text-gray-400 mt-8">
              Already have an account?{' '}
              <Link
                href="/login"
                className="text-[#5DF8D8] font-semibold hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* CUSTOM ANIMATION */}
      <style jsx>{`
        .animate-zoomSlow {
          animation: zoom 7s ease-in-out infinite;
        }

        @keyframes zoom {
          0% {
            transform: scale(1.1);
          }
          50% {
            transform: scale(1.25);
          }
          100% {
            transform: scale(1.1);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 1s ease-out;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
