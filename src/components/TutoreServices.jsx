'use client';

import { FaUserGraduate, FaCalendarAlt, FaVideo } from 'react-icons/fa';

export default function TutorServices() {
  return (
    <section className="relative py-30 px-6 bg-[#0F172A] text-white overflow-hidden ">
      <div className="container mx-auto relative z-10">
     
        <div className="text-center mb-16">
          <p className="text-[#5DF8D8] font-medium tracking-widest text-sm mb-3">
            OUR PLATFORM FEATURES
          </p>

          <h2 className="text-5xl font-bold leading-tight">
            Everything you need for <br />
            smart learning & tutoring
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A complete tutoring platform where students can find experts, book
            sessions, and learn anytime with ease.
          </p>
        </div>

   
        <div className="grid md:grid-cols-3 gap-8">
       
          <div className="p-8 rounded-3xl bg-[#093C5D] hover:bg-[#0F4F78] border border-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 bg-[#5DF8D8]/10 text-[#5DF8D8]">
              <FaUserGraduate size={30} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Tutor Profiles</h3>
            <p className="text-gray-300 mb-8">
              Create professional tutor profiles with skills, experience,
              ratings, and verified identity.
            </p>
            <a href="#" className="text-[#5DF8D8] font-medium">
              Learn More →
            </a>
          </div>

       
          <div className="p-8 rounded-3xl bg-[#093C5D] hover:bg-[#0F4F78] border border-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 bg-[#5DF8D8]/10 text-[#5DF8D8]">
              <FaCalendarAlt size={30} />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Smart Booking</h3>
            <p className="text-gray-300 mb-8">
              Easy scheduling system to book one-to-one or group sessions based
              on tutor availability.
            </p>
            <a href="#" className="text-[#5DF8D8] font-medium">
              Learn More →
            </a>
          </div>

         
          <div className="p-8 rounded-3xl bg-[#093C5D] hover:bg-[#0F4F78] border border-white/10 transition-all duration-300 hover:-translate-y-2">
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl mb-6 bg-[#5DF8D8]/10 text-[#5DF8D8]">
              <FaVideo size={30} />
            </div>

            <h3 className="text-2xl font-semibold mb-4">
              Live Tutoring Sessions
            </h3>

            <p className="text-gray-300 mb-8">
              Connect with expert tutors through real-time video classes and get
              personalized learning experience anytime.
            </p>

            <a href="#" className="text-[#5DF8D8] font-medium">
              Join Session →
            </a>
          </div>
        </div>
      </div>

  
    </section>
  );
}
