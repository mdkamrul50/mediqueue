'use client';

import { FaGoogle } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import Logo from "@/assets/logo.png";

import 'swiper/css';
import 'swiper/css/effect-fade';
import Image from 'next/image';
import { authClient } from '@/lib/auth-client';
import toast from 'react-hot-toast';

export default function LoginPage() {

  const handelLogin = async (e) => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const loginData = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: loginData.email,
      password: loginData.password,
      callbackURL: '/',
    });

    if (error) {
      toast.error('Login failed ❌ ' + error.message);
    }

    if (data) {
      toast.success('Login successful 🎉');
    }

    console.log(data, error);
  };



  const images = [
    'https://plus.unsplash.com/premium_vector-1726498072933-f6112c1b1396?q=80&w=1077&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    'https://images.unsplash.com/photo-1486520299386-6d106b22014b?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    
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
                    alt="anime learning"
                    className="h-full w-full object-cover scale-110 animate-zoomSlow"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-[#0F172A]/95 via-[#0F172A]/40 to-transparent" />

                  <div className="absolute bottom-10 left-10 right-10 text-white animate-fadeUp">
                    <p className="text-2xl font-semibold leading-tight mb-3">
                      {quotes[index]}
                    </p>
                    <p className="text-sm text-[#5DF8D8]">
                      MediQueue Learning Platform
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

            <h2 className="text-3xl font-semibold pb-3">Welcome Back</h2>

            <p className="text-gray-400 mb-8">
              Unlock your potential with expert tutors and interactive learning
              experiences.
            </p>

            <form onSubmit={handelLogin} className="space-y-6">
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#5DF8D8] outline-none"
              />

              <input
                name="password"
                type="password"
                placeholder="Password"
                className="w-full px-5 py-4 bg-white/5 border border-white/10 rounded-2xl focus:border-[#5DF8D8] outline-none"
              />

              <button
                type="submit"
                className="w-full bg-[#5DF8D8] text-black font-semibold py-4 rounded-2xl hover:bg-[#4BE8C5] transition active:scale-95"
              >
                Log In
              </button>
            </form>

            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            <button className="w-full border border-white/10 hover:bg-white/10 py-4 rounded-2xl flex items-center justify-center gap-3">
              <FaGoogle className="text-blue-400" />
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
