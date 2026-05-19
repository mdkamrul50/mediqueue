import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/logo.png";
import { Button } from '@heroui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" dark:bg-[#3B7597] bg-[#b8d2bf]" >
      <div className="container mx-auto flex justify-between my-3">
        <Image src={Logo} height={150} width={150} alt="logo" />
        <div className="flex gap-8">
          <ul className="flex items-center gap-2 text-xl  text-gray-900">
            <Link href={'/'}>
              <li>Home</li>
            </Link>
            <li>Tutors</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Link href={'/login'}>
            <Button>Login</Button>
          </Link>
          <Link href={'/register'}>
            <Button
              variant="secondary"
              className={'text-black dark:bg-gray-300 dark:text-blue-900'}
            >
              Register
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar