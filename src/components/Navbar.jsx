import Image from 'next/image'
import React from 'react'
import Logo from "@/assets/logo.png";
import { Button } from '@heroui/react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className=" bg-[#3B7597]">
      <div className="container mx-auto flex justify-between my-3">
        <Image src={Logo} height={150} width={150} alt="logo" />
        <div className="flex gap-8">
          <ul className="flex items-center gap-2 text-xl  text-gray-900">
            <li>Home</li>
            <li>Tutor</li>
          </ul>
        </div>

        <div className="flex items-center gap-2">
          <Link href={'/login'}>
            <Button>Login</Button>
          </Link>
          <Button variant="secondary" className={'text-black'}>
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Navbar