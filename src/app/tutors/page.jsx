'use client';

import Shape from '@/components/borderShape/Shape';
import ThemeToggle from '@/components/ThemeToggle';
import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaStar, FaVideo, FaSearch } from 'react-icons/fa';

const TutorsPage = () => {
  const [tutors, setTutors] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isFiltered, setIsFiltered] = useState(false);

  const fetchTutors = async () => {
    setLoading(true);

    const query = new URLSearchParams();

    if (search) {
      query.append('search', search);
    }

    if (startDate) {
      query.append('startDate', startDate);
    }

    if (endDate) {
      query.append('endDate', endDate);
    }

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/tutors?${query.toString()}`,
      {
        cache: 'no-store',
      }
    );

    const data = await res.json();

    setTutors(data || []);
    setLoading(false);
  };

  const handleSearch = () => {
    setIsFiltered(true);
    fetchTutors();
  };

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#d0e2d5] py-24 text-black dark:bg-[#062f49] dark:text-white">
      <ThemeToggle />
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#5DF8D8]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-5xl font-bold md:text-6xl">
            All Expert Tutors
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
            Browse all available tutors and choose the best match for your
            learning journey.
          </p>
        </div>

        <div className="mb-10 grid gap-4 md:grid-cols-4">
          <input
            type="text"
            placeholder="Search tutor..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/50 px-4 py-3 outline-none dark:bg-white/5"
          />

          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/50 px-4 py-3 outline-none dark:bg-white/5"
          />

          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            className="rounded-2xl border border-white/10 bg-white/50 px-4 py-3 outline-none dark:bg-white/5"
          />

          <button
            onClick={handleSearch}
            className="rounded-2xl bg-[#5DF8D8] px-5 py-3 font-bold text-black transition hover:scale-105"
          >
            Search
          </button>
          {isFiltered && (
            <a href={'/tutors'}>
              <button
                onClick={() => {
                  setSearch('');
                  setStartDate('');
                  setEndDate('');
                  setIsFiltered(false);
                  n;
                  fetchTutors();
                }}
                className="mb-6 flex items-center gap-2 font-semibold text-[#0c4a73] transition hover:translate-x-1 dark:text-[#5DF8D8]"
              >
                <ArrowLeft size={18} />
                Go Back
              </button>
            </a>
          )}
        </div>

        {loading ? (
          <div className="flex min-h-[300px] items-center justify-center">
            <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#5DF8D8] border-t-transparent"></div>
          </div>
        ) : tutors.length === 0 ? (
          <div className="flex min-h-[350px] flex-col items-center justify-center rounded-[30px] border border-dashed border-white/10 bg-white/20 p-10 text-center backdrop-blur-xl dark:bg-white/5">
            <div className="mb-5 text-7xl">📚</div>

            <h2 className="mb-3 text-3xl font-bold">No Tutors Found</h2>

            <p className="max-w-md text-gray-600 dark:text-gray-400">
              We couldn’t find any tutors matching your search or filter. Try
              changing the keyword or date range.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {tutors.map((tutor) => (
              <div
                key={tutor._id}
                className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/40 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:bg-white/5"
              >
                <div className="relative overflow-hidden rounded-[24px]">
                  <Image
                    src={tutor.image}
                    alt={tutor.name}
                    width={500}
                    height={500}
                    className="h-87.5 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-md">
                    <FaStar className="text-yellow-400" />
                    {tutor.rating}
                  </div>
                </div>

                <div className="pt-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold">{tutor.name}</h3>
                    </div>

                    <div className="rounded-2xl bg-[#5DF8D8]/20 px-4 py-2 text-sm font-semibold text-[#0c4a73] dark:text-[#5DF8D8]">
                      ৳ {tutor.fee}
                    </div>
                  </div>

                  <div className="mb-5 flex flex-wrap gap-2">
                    {tutor.subjects?.map((subject, i) => (
                      <span
                        key={i}
                        className="rounded-full bg-[#5DF8D8]/20 px-3 py-1 text-sm font-medium text-[#0c4a73] dark:text-[#5DF8D8]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-3">
                      <FaVideo className="text-[#5DF8D8]" />

                      <p>
                        {Array.isArray(tutor.mode)
                          ? tutor.mode.join(', ')
                          : tutor.mode}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
                    <Link href={`/tutors/${tutor._id}`}>
                      <button className="rounded-full bg-[#0c4a73] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#5DF8D8] hover:text-black dark:bg-[#5DF8D8] dark:text-black">
                        Book Session
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <Shape />
    </section>
  );
};

export default TutorsPage;
