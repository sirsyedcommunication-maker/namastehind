"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import "../../src/app/globals.css";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false); // dropdown
  const [menuOpen, setMenuOpen] = useState(false); // mobile menu

  return (
    <section className="w-[90%] md:w-4/5 m-auto rounded-full fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md border-b border-white/20 flex items-center justify-between px-4 md:px-10 h-20">
      
      {/* Logo */}
      
      <div className="flex items-center md:gap-3 font-bold text-2xl ">
       <Link href={"/"} className="relative w-16 h-16 md:w-18 md:h-18">
  <Image
    src="/image/namasteindiaFinelLogo.jpeg"
    alt="logo"
    fill
    className="rounded-full object-cover"
  />
</Link>
      </div>
        <span className="text-lg uppercase md:relative md:-left-75 text-shadow-blue-400 font-custom text-center font-bold">namastehind
          {/* <br /><small className="">testing words</small> */}
        </span>

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
      <AnimatePresence>
  {menuOpen && (
    <>
      {/* Backdrop for focus */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setMenuOpen(false)}
        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
      /> */}

      {/* Menu Content */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -20, opacity: 0 }}
        className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md shadow-2xl z-50 rounded-[2rem] overflow-hidden border border-gray-100 md:hidden"
      >
        <ul className="flex flex-col p-6 gap-2 text-gray-800 font-medium">
          
          {/* Home Link */}
          <li>
            <Link 
              href="/" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center p-3 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all"
            >
              Home
            </Link>
          </li>

          {/* Trips Dropdown */}
          <li className="border-t border-gray-50 pt-2">
            <button
              onClick={() => setOpen(!open)}
              className={`flex justify-between items-center w-full p-3 rounded-2xl transition-all ${
                open ? "bg-red-50 text-red-600" : "hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center gap-2">Trips</span>
              <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
                ▼
              </span>
            </button>

            <AnimatePresence>
              {open && (
                <motion.ul 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden ml-4 mt-1 border-l-2 border-red-100 flex flex-col gap-1"
                >
                  {[
                    { name: "Char Dham Yatra", href: "/chardham_yatra" },
                    { name: "Kashmir", href: "/kashmir-backpacking-trip" },
                    { name: "Ladakh", href: "/ladakh_bike_tour" },
                    { name: "Spiti", href: "/spiti_bike_tour" },
                    { name: "Manali", href: "/manali" },
                  ].map((trip) => (
                    <li key={trip.href}>
                      <Link
                        href={trip.href}
                        onClick={() => { setMenuOpen(false); setOpen(false); }}
                        className="block p-3 text-sm text-gray-600 hover:text-red-600 rounded-xl hover:bg-red-50/50"
                      >
                        {trip.name}
                      </Link>
                    </li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>

          {/* About & Contact */}
          <li className="border-t border-gray-50 pt-2">
            <Link 
              href="/about" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center p-3 rounded-2xl hover:bg-red-50 hover:text-red-600 transition-all"
            >
              About Us
            </Link>
          </li>
          
          <li>
            <Link 
              href="/contact" 
              onClick={() => setMenuOpen(false)}
              className="flex items-center p-4 mt-2 bg-red-600 text-white rounded-2xl font-bold justify-center shadow-lg shadow-red-200 active:scale-95 transition-transform"
            >
              Book Now ✈️
            </Link>
          </li>
        </ul>
      </motion.div>
    </>
  )}
</AnimatePresence>
    </section>
  );
};

export default Navbar;