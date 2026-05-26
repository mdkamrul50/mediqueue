'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Logo from '@/assets/logo.png';
import { Button } from '@heroui/react';
import Link from 'next/link';
import { useSession, signOut } from '@/lib/auth-client';
import { usePathname } from 'next/navigation';
import { HiMenu, HiX } from 'react-icons/hi';

const Navbar = () => {
  const userInfo = useSession();
  const user = userInfo.data?.user;

  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handelSignOut = async () => {
    await signOut();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Tutors',
      path: '/tutors',
    },
  ];

  const privateLinks = [
    {
      name: 'Add Tutor',
      path: '/addTutor',
    },
    {
      name: 'My Tutors',
      path: '/myTutors',
    },
    {
      name: 'Booked Sessions',
      path: '/myBookedSessions',
    },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'backdrop-blur-xl bg-white/10 dark:bg-[#0F172A]/60 border-b border-white/10 shadow-lg'
          : 'bg-[#b8d2bf] dark:bg-[#3B7597]'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <Link href="/">
            <Image
              src={Logo}
              height={120}
              width={120}
              alt="logo"
              className="w-27.5 md:w-32.5"
            />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            <ul className="flex items-center gap-6 text-gray-900 dark:text-white">
              {navLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <li
                    className={`relative pb-1 transition-all duration-300 hover:text-[#2b7667] dark:hover:text-[#5DF8D8] ${
                      pathname === link.path
                        ? 'text-[#2b7667] dark:text-[#5DF8D8]'
                        : ''
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-[#2b7667] dark:bg-[#5DF8D8] transition-all duration-300 ${
                        pathname === link.path
                          ? 'w-full'
                          : 'w-0 group-hover:w-full'
                      }`}
                    ></span>
                  </li>
                </Link>
              ))}

              {user &&
                privateLinks.map((link) => (
                  <Link key={link.path} href={link.path}>
                    <li
                      className={`relative pb-1 transition-all duration-300 hover:text-[#2b7667] dark:hover:text-[#5DF8D8] ${
                        pathname === link.path
                          ? 'text-[#2b7667] dark:text-[#5DF8D8]'
                          : ''
                      }`}
                    >
                      {link.name}

                      <span
                        className={`absolute left-0 bottom-0 h-0.5 bg-[#2b7667] dark:bg-[#5DF8D8] transition-all duration-300 ${
                          pathname === link.path ? 'w-full' : 'w-0 hover:w-full'
                        }`}
                      ></span>
                    </li>
                  </Link>
                ))}
            </ul>
          </div>

          <div className="hidden lg:flex items-center gap-3 relative">
            {user ? (
              <div className="relative group">
                <button className="focus:outline-none">
                  <img
                    src={user.image}
                    alt="user"
                    className="h-12 w-12 rounded-full object-cover border-2 border-[#5DF8D8] hover:scale-105 transition"
                  />
                </button>

                <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-white/10 bg-[#0F172A]/95 backdrop-blur-2xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 overflow-hidden">
                  <div className="px-4 py-3 border-b border-white/10">
                    <p className="text-sm font-semibold text-white">
                      {user.name}
                    </p>

                    <p className="text-xs text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>

                  <button
                    onClick={handelSignOut}
                    className="w-full text-left px-4 py-3 text-sm text-red-400 hover:bg-white/5 transition"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <>
                <Link href="/login">
                  <Button>Login</Button>
                </Link>

                <Link href="/register">
                  <Button
                    variant="secondary"
                    className="text-black dark:bg-gray-300 dark:text-blue-900"
                  >
                    Register
                  </Button>
                </Link>
              </>
            )}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-3xl text-black dark:text-white"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? 'max-h-[600px] pb-6' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-5 pt-4 text-gray-900 dark:text-white">
            {navLinks.map((link) => (
              <Link key={link.path} href={link.path}>
                <li
                  onClick={() => setIsOpen(false)}
                  className={`relative w-fit pb-1 ${
                    pathname === link.path
                      ? 'text-[#2b7667] dark:text-[#5DF8D8]'
                      : ''
                  }`}
                >
                  {link.name}

                  <span
                    className={`absolute left-0 bottom-0 h-0.5 bg-[#2b7667] dark:bg-[#5DF8D8] transition-all duration-300 ${
                      pathname === link.path ? 'w-full' : 'w-0'
                    }`}
                  ></span>
                </li>
              </Link>
            ))}

            {user &&
              privateLinks.map((link) => (
                <Link key={link.path} href={link.path}>
                  <li
                    onClick={() => setIsOpen(false)}
                    className={`relative w-fit pb-1 ${
                      pathname === link.path
                        ? 'text-[#2b7667] dark:text-[#5DF8D8]'
                        : ''
                    }`}
                  >
                    {link.name}

                    <span
                      className={`absolute left-0 bottom-0 h-0.5 bg-[#2b7667] dark:bg-[#5DF8D8] transition-all duration-300 ${
                        pathname === link.path ? 'w-full' : 'w-0'
                      }`}
                    ></span>
                  </li>
                </Link>
              ))}

            <div className="flex flex-col gap-3 pt-4">
              {user && (
                <img
                  src={user.image}
                  alt="user"
                  className="h-12 w-12 rounded-full object-cover border-2 border-[#5DF8D8] hover:scale-105 transition"
                />
              )}
              {user ? (
                <Button onClick={handelSignOut} variant="secondary">
                  Logout
                </Button>
              ) : (
                <>
                  <Link href="/login">
                    <Button className="w-full">Login</Button>
                  </Link>

                  <Link href="/register">
                    <Button
                      variant="secondary"
                      className="w-full text-black dark:bg-gray-300 dark:text-blue-900"
                    >
                      Register
                    </Button>
                  </Link>
                </>
              )}
            </div>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
