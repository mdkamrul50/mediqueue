'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === 'dark';

  return (
    <div className='flex justify-end  container mx-auto'>
      {' '}
      <button
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        className="relative flex items-center justify-between w-20 h-7 px-1 rounded-full transition-all duration-500 bg-gray-200 dark:bg-gray-800 shadow-md"
      >
  
        <div
          className={`absolute top-0 left-1 h-7 w-8 rounded-full bg-white dark:bg-black shadow-md transform transition-all duration-500 ${
            isDark ? 'translate-x-10' : 'translate-x-0'
          }`}
        />

        <Sun
          size={18}
          className={`z-10 transition-all duration-300 ${
            isDark ? 'text-gray-400' : 'text-yellow-500'
          }`}
        />

        <Moon
          size={18}
          className={`z-10 transition-all duration-300 ${
            isDark ? 'text-blue-400' : 'text-gray-400'
          }`}
        />
      </button>
    </div>
  );
}
