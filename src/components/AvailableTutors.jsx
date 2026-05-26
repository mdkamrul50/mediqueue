import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaClock, FaVideo } from 'react-icons/fa';

const fetchTutors = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tutors?limit=6`, {
    cache: 'no-store',
  });

  const data = await res.json();

  return data || [];
};
const AvailableTutors = async () => {
  const tutors = await fetchTutors();

  return (
    <section className="relative overflow-hidden bg-[#d0e2d5] py-24 text-black dark:bg-[#062f49] dark:text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#5DF8D8]/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container relative mx-auto px-6">
        <div className="mb-16 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/40 px-4 py-2 backdrop-blur-md dark:bg-white/5">
            <span className="h-2 w-2 rounded-full bg-[#5DF8D8]" />

            <p className="text-sm text-gray-700 dark:text-gray-300">
              Available Tutors
            </p>
          </div>

          <h2 className="font-playfair text-5xl font-bold leading-tight md:text-6xl">
            Learn from experienced
            <span className="block text-[#0c4a73] dark:text-[#5DF8D8]">
              professional tutors
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-700 dark:text-gray-400">
            Discover expert tutors for programming, mathematics, English,
            science, and more. Start learning smarter today.
          </p>
        </div>

        {/* Cards */}
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
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
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
                  {tutor.subjects.map((subject, i) => (
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

                    <p>{tutor.mode.join(', ')}</p>
                  </div>
                </div>
                {/* Footer */}{' '}
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

        {/* Button */}
        <div className="mt-16 flex justify-center">
          <Link href="/tutors">
            <button className="rounded-full bg-[#0c4a73] px-10 py-4 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#5DF8D8] hover:text-black dark:bg-[#5DF8D8] dark:text-black">
              Explore All Tutors
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AvailableTutors;
