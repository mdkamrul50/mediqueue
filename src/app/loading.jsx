import Image from 'next/image';
import Logo from '@/assets/logo.png';

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-[#0F172A]">

      <div className="absolute h-72 w-72 rounded-full bg-[#5DF8D8]/20 blur-3xl animate-pulse" />

      <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl animate-pulse" />

      {/* Content */}
      <div className="relative flex flex-col items-center">
       
        <div className="animate-bounce">
          <Image
            src={Logo}
            alt="logo"
            width={130}
            height={130}
            priority
            className="drop-shadow-[0_0_25px_rgba(93,248,216,0.45)]"
          />
        </div>

       
        <h1 className="mt-5 text-3xl font-extrabold tracking-wide text-white">
          Medi<span className="text-[#5DF8D8]">Queue</span>
        </h1>

       
        <p className="mt-3 text-sm text-gray-400 animate-pulse">
          Preparing your learning experience...
        </p>

       
        <div className="mt-7 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-[#5DF8D8] animate-bounce" />

          <span
            className="h-3 w-3 rounded-full bg-[#5DF8D8] animate-bounce"
            style={{ animationDelay: '0.15s' }}
          />

          <span
            className="h-3 w-3 rounded-full bg-[#5DF8D8] animate-bounce"
            style={{ animationDelay: '0.3s' }}
          />
        </div>
      </div>
    </div>
  );
}
