'use client';

import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { motion } from 'framer-motion';

const MyTutorPage = () => {
  const { data } = authClient.useSession();
  const userId = data?.user?.id;

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!userId) return;

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/my-tutors/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        setTutors(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [userId]);

  return (
    <section className="min-h-screen bg-linear-to-br from-[#d0e2d5] via-[#e8f3ec] to-[#d0e2d5] dark:from-[#0F172A] dark:via-[#0B1220] dark:to-[#0F172A] text-black dark:text-white p-6">
      <div className="max-w-6xl mx-auto ">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-[#2b7667] dark:text-[#5DF8D8]"
        >
          My Tutors
        </motion.h1>

        {loading ? (
          <p className="text-gray-500 dark:text-gray-400">Loading...</p>
        ) : tutors.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No tutors found</p>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-white/10 backdrop-blur-xl">
            <table className="w-full text-left">
              <thead className="bg-white/10 dark:bg-white/5 text-gray-700 dark:text-gray-300 text-sm uppercase">
                <tr>
                  <th className="p-4">Image</th>
                  <th className="p-4">Name</th>
                  <th className="p-4">Subject</th>
                  <th className="p-4">Mode</th>
                  <th className="p-4">Fee</th>
                  <th className="p-4">Slots</th>
                </tr>
              </thead>

              <tbody>
                {tutors.map((item, index) => (
                  <motion.tr
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    
                    className="border-t border-white/10 hover:bg-black/10 dark:hover:bg-white/5 transition "
                  >
                    <td className="p-4">
                      <img
                        src={item.image || 'https://i.ibb.co/placeholder.png'}
                        className="h-12 w-12 rounded-xl object-cover"
                      />
                    </td>

                    <td className="p-4 font-semibold">{item.name}</td>

                    <td className="p-4">{item.subject}</td>

                    <td className="p-4">
                      {Array.isArray(item.mode)
                        ? item.mode.join(', ')
                        : item.mode}
                    </td>

                    <td className="p-4 text-[#2b7667] dark:text-[#5DF8D8] font-bold">
                      ৳ {item.fee}
                    </td>

                    <td className="p-4">{item.slots}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyTutorPage;
