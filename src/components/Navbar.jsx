"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../src/app/globals.css";

const Navbar = () => {
  const [open, setOpen] = useState(false); // dropdown
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  return (
    <section className="w-[90%] md:w-4/5 m-auto rounded-full fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 flex items-center justify-between px-4 md:px-10 h-20">
      
      {/* Logo */}
      <div className="flex items-center gap-11 md:gap-3 font-bold text-2xl uppercase">
       <Link href={"/"} className="relative w-16 h-16 md:w-18 md:h-18">
  <Image
    src="/image/namasteindiaFinelLogo.jpeg"
    alt="logo"
    fill
    className="rounded-full object-cover"
  />
</Link>
        <span className="text-lg text-shadow-blue-400 font-custom">namastehind
          {/* <br /><small className="">testin words</small> */}
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 text-lg font-sans">
        
        <Link href="/">Home</Link>

        {/* Dropdown */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-1 cursor-pointer"
          >
            Trips
            <svg
              className={`w-3 h-3 transition-transform ${
                open ? "rotate-180" : ""
              }`}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M2 5L8 10.5L14 5"
                stroke="currentColor"
                strokeWidth="2"
              />
            </svg>
          </button>

          {open && (
            <div className="absolute top-full mt-2 w-44 bg-white shadow-lg rounded-lg z-50">
              <ul className="py-2 text-black">
                <li><Link href="/chardham_yatra" className="block px-4 py-2 hover:bg-gray-100">Char Dham Yatra</Link></li>
                <li><Link href="/kashmir-backpacking-trip" className="block px-4 py-2 hover:bg-gray-100">Kashmir</Link></li>
                <li><Link href="ladakh_bike_tour" className="block px-4 py-2 hover:bg-gray-100">Ladakh</Link></li>
                <li><Link href="/spiti_bike_tour" className="block px-4 py-2 hover:bg-gray-100">Spiti</Link></li>
                <li><Link href="/manali" className="block px-4 py-2 hover:bg-gray-100">Manali</Link></li>
              </ul>
            </div>
          )}
        </div>

        <Link href="/about">About</Link>
        <Link href="/contact">Contact Us</Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ">
        <button className="text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col p-4 gap-3 text-black">
            
            <li><Link href="/" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Home</Link></li>

            {/* Mobile Dropdown */}
            <li>
              <button
                onClick={() => setOpen(!open)}
                className="flex justify-between w-full"
              >
                Trips
                <span>{open ? "▲" : "▼"}</span>
              </button>

              {open && (
                <ul className="ml-4 mt-2 flex flex-col gap-2">
                  <li><Link href="/chardham_yatra" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Char Dham Yatra</Link></li>
                  <li><Link href="/kashmir-backpacking-trip" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Kashmir</Link></li>
                  <li><Link href="/ladakh_bike_tour" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Ladakh</Link></li>
                  <li><Link href="/spiti_bike_tour" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Spiti</Link></li>
                  <li><Link href="/manali" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Manali</Link></li>
                </ul>
              )}
            </li>

            <li><Link href="/about" onClick={()=>{setMenuOpen(false); setOpen(false);}}>About</Link></li>
            <li><Link href="/contact" onClick={()=>{setMenuOpen(false); setOpen(false);}}>Contact Us</Link></li>
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;