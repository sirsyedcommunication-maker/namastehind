"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-5 gap-8">
        
        {/* Brand */}
        <div>
         <div className="flex items-center gap-3 font-bold text-2xl uppercase">
       <Link href={"/"} className="relative w-16 h-16 md:w-18 md:h-18">
  <Image
    src="/image/namasteHindlogo2.jpg"
    alt="logo"
    fill
    className="rounded-full object-cover"
  />
</Link>
        {/* <span className="text-lg text-shadow-blue-400">namstehind</span> */}
      </div>
          <h2 className="text-2xl font-bold">NamasteHind</h2>
          <p className="text-gray-400 mt-3">
            Explore India with the best travel experiences.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/trips">Trips</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <div className="flex flex-col gap-4 text-gray-400">
            <Link href={"/contact"} className="cursor-pointer hover:text-white">Customer Support</Link>
            <Link href={'/privacy-policy'} className="cursor-pointer hover:text-white">Privacy & Policy</Link>
            <span className="cursor-pointer hover:text-white">Contact Channels</span>
          </div>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <div className="flex flex-col gap-4 text-gray-400">
            <span className="cursor-pointer hover:text-white">+91 970 976 5557</span>
            {/* <span className="cursor-pointer hover:text-white">+91 7879 455 155</span> */}
            <span className="cursor-pointer hover:text-white">info@namastehind.com</span>
            {/* <span className="cursor-pointer hover:text-white"></span> */}
          </div>
        </div>
        {/* Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Social Media</h3>
          <div className="flex  gap-4 text-gray-400">
            <Link href={'https://www.facebook.com/share/1Mt6sNLUBn/'} className="cursor-pointer hover:text-white"><FaFacebook /></Link>
            <Link href={'https://www.instagram.com/namaste_hind?igsh=MXNscWZ2NTM5ejZ0OA=='} className="cursor-pointer hover:text-white"><FaInstagram /></Link>
            {/* <span className="cursor-pointer hover:text-white">Working With Us</span>
            <span className="cursor-pointer hover:text-white">Be Our Partner</span> */}
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 text-center py-4 text-gray-400 text-sm">
        © {new Date().getFullYear()} NamasteHind & <Link href={'https://bytewings.in/'}>ByteWings Technology</Link>. All rights reserved.
      </div>

    </footer>
  );
}