import AddTutorForm from '@/components/AddTutorForm';

export default function AddTutor() {
  return (
    <section className="min-h-screen bg-[#d0e2d5] dark:bg-[#0F172A] text-black dark:text-white py-16 px-4 transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="text-center mb-14">
          <h1
            className="text-4xl md:text-5xl font-bold tracking-tight 
            text-[#0F172A] dark:text-[#5DF8D8] transition-colors duration-300"
          >
            Add New Tutor
          </h1>

          <div
            className="w-24 h-[2px] mx-auto mt-4 rounded-full 
            bg-[#0F172A]/20 dark:bg-[#5DF8D8]/40 transition-colors duration-300"
          />

          <p
            className="mt-4 text-sm md:text-base max-w-md mx-auto leading-relaxed 
            text-gray-700 dark:text-gray-400"
          >
            Create and manage a professional tutor profile for your platform.
            Ensure all details are accurate before publishing.
          </p>
        </div>

        {/* FORM */}
        <AddTutorForm />
      </div>
    </section>
  );
}
