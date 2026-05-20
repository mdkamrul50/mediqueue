import Shape from '@/components/borderShape/Shape';
import Image from 'next/image';
import Link from 'next/link';
import { FaStar, FaClock, FaVideo } from 'react-icons/fa';

const fetchTutors = async () => {
  const res = await fetch(`${process.env.PUBLIC_API_URL}/tutors`, {
    cache: 'no-store',
  });

  const data = await res.json();
  return data || [];
};

const TutorsPage = async () => {
  const tutors = await fetchTutors();

  return (
    <section className="relative overflow-hidden bg-[#d0e2d5] py-24 text-black dark:bg-[#062f49] dark:text-white">
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-[#5DF8D8]/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="container relative mx-auto px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <h2 className="font-playfair text-5xl font-bold md:text-6xl">
            All Expert Tutors
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-700 dark:text-gray-400">
            Browse all available tutors and choose the best match for your
            learning journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {tutors.map((tutor) => (
            <div
              key={tutor._id}
              className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/40 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:bg-white/5"
            >
              {/* Image */}
              <div className="relative overflow-hidden rounded-[24px]">
                <Image
                  src={tutor.image}
                  alt={tutor.name}
                  width={500}
                  height={500}
                  className="h-[320px] w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Rating */}
                <div className="absolute right-4 top-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-1 text-sm text-white backdrop-blur-md">
                  <FaStar className="text-yellow-400" />
                  {tutor.rating}
                </div>
              </div>

              {/* Content */}
              <div className="pt-6">
                <div className="mb-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-2xl font-bold">{tutor.name}</h3>
                  </div>

                  <div className="rounded-2xl bg-[#5DF8D8]/20 px-4 py-2 text-sm font-semibold text-[#0c4a73] dark:text-[#5DF8D8]">
                    ৳ {tutor.fee}
                  </div>
                </div>

                {/* Subjects */}
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

                {/* Info */}
                <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
                  <div className="flex items-center gap-3">
                    <FaVideo className="text-[#5DF8D8]" />
                    <p>{tutor.mode?.join(', ')}</p>
                  </div>
                </div>

                {/* Footer */}
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
      </div>
      <Shape />
    </section>
  );
};

export default TutorsPage;
