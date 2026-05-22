import { BookSessionModal } from '@/components/BookSessionModal';
import Shape from '@/components/borderShape/Shape';
import Image from 'next/image';
import React from 'react';
import { FaStar, FaClock, FaVideo, FaMapMarkerAlt } from 'react-icons/fa';

export const metadata = {
  title: 'Tutor Details | MediQueue',
  description: 'View tutor profile, session info, and booking details.',
};

const singleTutorDetail = async (id) => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors/${id}`, {
    cache: 'no-store',
  });

  const data = await res.json();
  return data || {};
};

const tutorDetailPage = async ({ params }) => {
  const { id } = await params;
  const tutor = await singleTutorDetail(id);
  console.log(tutor);

  return (
    <section className="relative min-h-screen bg-[#d0e2d5] dark:bg-[#0F172A] text-black dark:text-white py-20 overflow-hidden">
      <div className="absolute top-0 left-0 h-96 w-96 bg-[#5DF8D8]/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 bg-blue-500/20 blur-[120px] animate-pulse" />

      <div className="container mx-auto px-6">
        <div className="group relative max-w-5xl mx-auto grid md:grid-cols-2 gap-10 rounded-[40px] border border-white/10 bg-white/5 backdrop-blur-2xl shadow-2xl overflow-hidden transition-all duration-500 hover:scale-[1.01] hover:shadow-[#5DF8D8]/20">
          <div className="relative overflow-hidden">
            <Image
              src={tutor.image}
              alt={tutor.name}
              width={800}
              height={800}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent" />

            <div className="absolute top-5 right-5 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 backdrop-blur-md border border-white/10">
              <FaStar className="text-yellow-400 animate-pulse" />
              <span className="font-semibold">{tutor.rating}</span>
            </div>

            <div className="absolute bottom-5 left-5 bg-[#5DF8D8] text-black px-5 py-2 rounded-full font-bold shadow-lg transition-all duration-300 group-hover:scale-110">
              ৳ {tutor.fee}/hr
            </div>
          </div>

          <div className="p-8 space-y-6 flex flex-col justify-center">
            <div className="space-y-2">
              <h1 className="text-4xl md:text-5xl font-bold transition-all duration-300 dark:group-hover:text-[#5DF8D8] group-hover:text-[#35cfb0]">
                {tutor.name}
              </h1>
              <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
                {tutor.bio}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tutor.subjects?.map((sub, i) => (
                <span
                  key={i}
                  className="px-4 py-2 rounded-full dark:bg-[#5DF8D8]/10 bg-[#5DF8D8]/30 border border-[#5DF8D8]/20 text-[#0F172A] dark:text-[#5DF8D8] text-sm transition-all duration-300 hover:bg-[#52f9d7] hover:text-black hover:scale-105"
                >
                  {sub}
                </span>
              ))}
            </div>

            <div className="space-y-4 rounded-2xl border border-white/10 dark:bg-white/5 bg-[#aec8b5] hover:shadow-[#5DF8D8] hover:shadow-sm p-6 backdrop-blur-xl transition-all duration-300 group-hover:border-[#5DF8D8]/30">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="dark:text-[#5DF8D8] text-[#2b7667]" />
                <p>{tutor.location}</p>
              </div>

              <div className="flex items-center gap-3">
                <FaClock className="dark:text-[#5DF8D8] text-[#2b7667]" />
                <p>{tutor.availability?.time}</p>
              </div>

              <div className="flex items-center gap-3">
                <FaVideo className="dark:text-[#5DF8D8] text-[#2b7667]" />
                <p>{tutor.mode?.join(', ')}</p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="dark:text-[#5DF8D8] text-[#2b7667]" />
                <p>
                  Session Start Date:{' '}
                  <span className="text-[#cdcd1b] font-bold ">
                    {tutor.sessionDate}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="dark:text-[#5DF8D8] text-[#2b7667]" />
                <p>
                  Remaining Slots:{' '}
                  <span className="text-[#e1e11c] font-bold ">
                    {tutor.slots}
                  </span>
                </p>
              </div>

              <div className="text-sm dark:text-gray-400 text-gray-600">
                Experience:{' '}
                <span className=" text-white dark:text-white/80">
                  {tutor.experience}
                </span>
              </div>
            </div>

            <BookSessionModal tutor={tutor} />
          </div>
        </div>
      </div>
      <Shape />
    </section>
  );
};

export default tutorDetailPage;
