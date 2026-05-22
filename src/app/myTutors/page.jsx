'use client';

import { useEffect, useState } from 'react';
import { authClient } from '@/lib/auth-client';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { SyncLoader } from 'react-spinners';
import toast from 'react-hot-toast';



const MyTutorPage = () => {
  const { data } = authClient.useSession();
  const userId = data?.user?.id;

  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editTutor, setEditTutor] = useState(null);
  const [deleteTutorId, setDeleteTutorId] = useState(null);

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


const handleDelete = async () => {
  if (!deleteTutorId) return;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/tutors/${deleteTutorId}`,
    {
      method: 'DELETE',
    }
  );

  if (res.ok) {
    setTutors((prev) => prev.filter((t) => t._id !== deleteTutorId));

    setDeleteTutorId(null);
    toast.error('Tutor delete Success!');
  }
};


  const handleEdit = (item) => {
    setEditTutor(item);
  };


const handleUpdate = async (e) => {
  e.preventDefault();

  const { _id, ...updatedTutor } = editTutor;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tutors/${_id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTutor),
      }
    );

    const data = await res.json();

  

    if (!res.ok) {
      console.log(data);
      alert('Update failed');
      return;
    }

    toast.success('Tutor update Successfully 🚀');

    setTutors((prev) =>
      prev.map((t) =>
        t._id === _id
          ? {
              ...t,
              ...updatedTutor,
            }
          : t
      )
    );

    setEditTutor(null);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <section className="min-h-screen bg-linear-to-br from-[#d0e2d5] via-[#e8f3ec] to-[#d0e2d5] dark:from-[#0F172A] dark:via-[#0B1220] dark:to-[#10192e] text-black dark:text-white p-6">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-6 text-[#2b7667] dark:text-[#5DF8D8]"
        >
          My Tutors
        </motion.h1>

        {loading ? (
          <div className="flex justify-center item center">
            {' '}
            <SyncLoader color="#5DF8D8" />
          </div>
        ) : tutors.length === 0 ? (
          <div className="flex min-h-[60vh] flex-col items-center justify-center rounded-[32px] border border-white/10 bg-white/5 dark:bg-white/5 backdrop-blur-2xl p-10 text-center shadow-2xl">
            <div className="relative mb-6">
              <div className="absolute inset-0 rounded-full bg-[#5DF8D8]/20 blur-2xl" />

              <div className="relative flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/10 text-6xl shadow-xl">
                📚
              </div>
            </div>

            <h2 className="text-3xl font-black text-[#2b7667] dark:text-[#5DF8D8]">
              No Tutors Found
            </h2>

            <p className="mt-3 max-w-md text-sm leading-relaxed text-gray-500 dark:text-gray-400">
              You haven’t added any tutors yet. Start creating your tutor
              profile and manage all your teaching sessions from one place.
            </p>

            <Link href={'/addTutor'}>
              <button className="mt-8 rounded-2xl bg-[#5DF8D8] px-6 py-3 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-[#5DF8D8]/40 active:scale-95">
                Add Your First Tutor
              </button>
            </Link>
          </div>
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
                  <th className="p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {tutors.map((item, index) => (
                  <motion.tr
                    key={item._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border-t border-white/10 hover:bg-black/10 dark:hover:bg-white/5 transition"
                  >
                    <td className="p-4">
                      <img
                        src={item.image}
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
                      {item.fee}/hr
                    </td>

                    <td className="p-4">{item.slots}</td>

                    <td className="p-4 flex gap-3  justify-center pt-6">
                      <button
                        onClick={() => handleEdit(item)}
                        className="px-4 py-2 text-xs rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/30 hover:bg-blue-500 hover:text-white transition"
                      >
                        ✏ Edit
                      </button>

                      <button
                        onClick={() => setDeleteTutorId(item._id)}
                        className="px-3 py-1 text-xs rounded-full bg-red-500/10 text-red-400 border border-red-500/30 hover:bg-red-500 hover:text-white transition"
                      >
                        🗑 Delete
                      </button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <AnimatePresence>
          {editTutor && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-md"
            >
              <motion.form
                initial={{ scale: 0.8, y: 40, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.8, y: 40, opacity: 0 }}
                transition={{ duration: 0.25 }}
                onSubmit={handleUpdate}
                className="w-[420px] rounded-3xl border border-white/10 bg-white/10 dark:bg-[#0F172A]/80 backdrop-blur-2xl p-6 shadow-2xl"
              >
                <h2 className="text-xl font-bold text-white mb-5">
                  ✏️ Update Tutor
                </h2>

                <input
                  value={editTutor.name}
                  onChange={(e) =>
                    setEditTutor({ ...editTutor, name: e.target.value })
                  }
                  className="w-full p-3 mb-3 rounded-xl bg-white/5 text-white outline-none border border-white/10 focus:border-[#5DF8D8] transition"
                  placeholder="Name"
                />

                <select
                  value={editTutor.subject}
                  onChange={(e) =>
                    setEditTutor({
                      ...editTutor,
                      subject: e.target.value,
                    })
                  }
                  className="w-full p-3 mb-3 rounded-xl bg-[#0F172A] text-white border border-white/10 focus:border-[#5DF8D8] outline-none"
                >
                  <option value="">Select Subject</option>
                  <option value="Math">Math</option>
                  <option value="English">English</option>
                  <option value="Physics">Physics</option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Biology">Biology</option>
                  <option value="Programming">Programming</option>
                </select>

                <input
                  value={editTutor.fee}
                  onChange={(e) =>
                    setEditTutor({ ...editTutor, fee: e.target.value })
                  }
                  className="w-full p-3 mb-3 rounded-xl bg-white/5 text-white outline-none border border-white/10 focus:border-[#5DF8D8] transition"
                  placeholder="Fee"
                />

                <input
                  value={editTutor.slots}
                  onChange={(e) =>
                    setEditTutor({ ...editTutor, slots: e.target.value })
                  }
                  className="w-full p-3 mb-4 rounded-xl bg-white/5 text-white outline-none border border-white/10 focus:border-[#5DF8D8] transition"
                  placeholder="Slots"
                />

                <div className="flex justify-end gap-3">
                  <button
                    type="button"
                    onClick={() => setEditTutor(null)}
                    className="px-4 py-2 rounded-xl text-gray-300 hover:text-white transition"
                  >
                    Cancel
                  </button>

                  <button className="px-5 py-2 rounded-xl bg-[#5DF8D8] text-black font-semibold hover:scale-105 transition">
                    Save
                  </button>
                </div>
              </motion.form>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {deleteTutorId && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0, y: 40 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 40 }}
                transition={{ duration: 0.25 }}
                className="w-[380px] rounded-3xl border border-white/10 bg-white/10 dark:bg-[#0F172A]/90 backdrop-blur-2xl p-6 shadow-2xl"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-red-500/10 flex items-center justify-center text-3xl mb-4">
                    🗑
                  </div>

                  <h2 className="text-2xl font-bold text-white mb-2">
                    Delete Tutor?
                  </h2>

                  <p className="text-sm text-gray-400 mb-6">
                    This action cannot be undone.
                  </p>

                  <div className="flex items-center gap-3 w-full">
                    <button
                      onClick={() => setDeleteTutorId(null)}
                      className="flex-1 py-3 rounded-2xl border border-white/10 text-gray-300 hover:bg-white/5 transition"
                    >
                      Cancel
                    </button>

                    <button
                      onClick={handleDelete}
                      className="flex-1 py-3 rounded-2xl bg-red-500 text-white font-semibold hover:scale-105 hover:bg-red-600 transition"
                    >
                      Confirm Delete
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MyTutorPage;
