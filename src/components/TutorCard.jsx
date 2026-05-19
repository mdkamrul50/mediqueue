
import { FaStar, FaClock, FaVideo } from 'react-icons/fa';

const TutorCard = ({ tutor }) => {
  return (
    <div className="group overflow-hidden rounded-[30px] border border-white/10 bg-white/40 p-4 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 dark:bg-white/5">
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

            <p className="text-sm text-gray-600 dark:text-gray-400">
              {tutor.experience} Experience
            </p>
          </div>

          <div className="rounded-2xl bg-[#5DF8D8]/20 px-4 py-2 text-sm font-semibold text-[#0c4a73] dark:text-[#5DF8D8]">
            ৳ {tutor.fee}
          </div>
        </div>

        {/* Subjects */}
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

        {/* Schedule */}
        <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
          <div className="flex items-center gap-3">
            <FaClock className="text-[#5DF8D8]" />

            <p>{tutor.availability.time}</p>
          </div>

          <div className="flex items-center gap-3">
            <FaVideo className="text-[#5DF8D8]" />

            <p>{tutor.mode.join(', ')}</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>

            <p className="font-medium">{tutor.location}</p>
          </div>

          <Link href={`/tutors/${tutor._id}`}>
            <button className="rounded-full bg-[#0c4a73] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-[#5DF8D8] hover:text-black dark:bg-[#5DF8D8] dark:text-black">
              Book Session
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TutorCard
