import Link from 'next/link';
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-[#0c1322] text-white ">
      
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
     
        <div>
          <h2 className="text-2xl font-bold">
            Tutor<span className="text-[#5DF8D8]">Hub</span>
          </h2>
          <p className="mt-4 text-sm text-gray-400 leading-relaxed">
            Find expert tutors, book sessions, and upgrade your skills with
            ease.
          </p>
        </div>


        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#5DF8D8]">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <Link href="/tutors">Find Tutors</Link>
            </li>
            <li>
              <Link href="/subjects">Subjects</Link>
            </li>
            <li>
              <Link href="/online-classes">Online Classes</Link>
            </li>
            <li>
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

      
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#5DF8D8]">Contact</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Email: support@tutorhub.com</li>
            <li>Phone: +880 1XXX-XXXXXX</li>
            <li>Khulna, Bangladesh</li>
          </ul>
        </div>

   
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#5DF8D8]">
            Follow Us
          </h3>

          <div className="flex gap-4 text-xl">
            <a href="#">
              <FaFacebook className="hover:text-[#5DF8D8]" />
            </a>
            <a href="#">
              <FaTwitter className="hover:text-[#5DF8D8]" />
            </a>
            <a href="#">
              <FaLinkedin className="hover:text-[#5DF8D8]" />
            </a>
            <a href="#">
              <FaGithub className="hover:text-[#5DF8D8]" />
            </a>
          </div>
        </div>
      </div>

    
      <div className="border-t border-white/10 py-5 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TutorHub. All rights reserved.
      </div>
    </footer>
  );
}
