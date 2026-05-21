import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookedSessions = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        Please login first ❌
      </div>
    );
  }

  const res = await fetch(`http://localhost:5000/booking/${user.id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await res.json();

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#d0e2d5] via-[#e8f3ec] to-[#d0e2d5] dark:from-[#0F172A] dark:via-[#0B1220] dark:to-[#0F172A] py-20 text-black dark:text-white">
      <div className="container mx-auto px-4">
        {/* HEADER */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <h1 className="text-5xl font-extrabold tracking-tight">
              My Bookings
            </h1>

            <p className="mt-3 text-gray-600 dark:text-gray-400">
              Track all your tutor sessions in one place
            </p>
          </div>

          <div className="hidden md:block rounded-2xl border border-white/10 bg-white/10 px-6 py-4 backdrop-blur-xl">
            <p className="text-xs text-gray-500">Total Sessions</p>
            <p className="text-2xl font-bold text-[#2b7667] dark:text-[#5DF8D8]">
              {data?.length || 0}
            </p>
          </div>
        </div>

        {/* TABLE WRAPPER */}
        <div className="rounded-[30px] border border-white/10 bg-white/10 shadow-2xl backdrop-blur-3xl overflow-hidden">
          {/* HEADER ROW */}
          <div className="hidden md:grid grid-cols-4 px-8 py-6 bg-black/10 dark:bg-white/5 text-xs uppercase tracking-widest text-gray-600 dark:text-gray-300">
            <span>Tutor Info</span>
            <span>Contact</span>
            <span>Email</span>
            <span>Status</span>
          </div>

          {/* BODY */}
          {data?.length > 0 ? (
            data.map((item) => (
              <div
                key={item._id}
                className="group grid md:grid-cols-4 items-center gap-6 px-8 py-6 border-t border-white/10 transition-all duration-300 hover:bg-white/10 dark:hover:bg-white/5 hover:scale-[1.01]"
              >
                {/* Tutor */}
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#5DF8D8] to-[#2b7667] flex items-center justify-center text-black font-bold shadow-lg">
                    {item.tutorName?.charAt(0)}
                  </div>

                  <div>
                    <p className="font-semibold group-hover:text-[#2b7667] dark:group-hover:text-[#5DF8D8] transition">
                      {item.tutorName}
                    </p>
                    <p className="text-xs text-gray-500">
                      Tutor ID: {item.tutorId}
                    </p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-[#5DF8D8]" />
                  {item.phone}
                </div>

                {/* Email */}
                <div className="truncate text-gray-700 dark:text-gray-300">
                  {item.email}
                </div>

                {/* Status */}
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-xs font-semibold text-green-400 border border-green-500/20">
                    ● Confirmed
                  </span>
                </div>
              </div>
            ))
          ) : (
            <div className="flex flex-col items-center justify-center py-20 text-center text-gray-500">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-lg font-medium">No bookings found</p>
              <p className="text-sm text-gray-400 mt-1">
                Book a tutor session to see it here
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default MyBookedSessions;
