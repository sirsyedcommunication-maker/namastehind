"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css"
const slides = [
  
  {
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    title: "Not Just a Stay, It’s an Experience",
    desc: "Discover unique stays, breathtaking views, and moments that turn every trip into a lifelong memory.",
  },
  {
    image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Char Dham Yatra",
    desc: "Embark on a sacred Himalayan journey and experience peace, devotion, and spiritual awakening.",
  },
  {
    image: "https://images.unsplash.com/photo-1666501546683-f308f97016c7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Kashmir",
    desc: "Explore the paradise on Earth with serene valleys, crystal lakes, and unforgettable landscapes.",
  },
  // {
  //   image: "https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   title: "Manali",
  //   desc: "Experience snow-covered peaks, thrilling adventures, and the charm of mountain life.",
  // },
  {
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ladakh",
    desc: "Ride through rugged terrains, high passes, and witness the raw beauty of the Himalayas.",
  },
  {
    image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spiti",
    desc: "Adventure into the cold desert, explore remote villages, and experience untouched natural beauty.",
  },
];

export const metadata = {
  title: "Best Travel Packages in India",
  description:
    "Book Char Dham Yatra, Ladakh, Kashmir, Spiti, and Manali travel packages with Namaste Hind.",
};
export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false); // dropdown

  // auto change
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 sec

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="relative w-full h-screen object-cover overflow-hidden">

      {/* Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
        </div>
        ))}

        <Image
          src={slides[current].image}
          alt="slide"
          fill
          className="object-cover"
        />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold mb-4 transition-all duration-500 font-sans">
          {slides[current].title}
        </h1>

        <p className="text-lg md:text-2xl playfair ">
          {slides[current].desc}
        </p>
 {/* <div className="flex flex-col gap-4 sm:flex-row sm:items-center"> */}
            <Link href={"/contact"} className="inline-flex items-center justify-center mt-10 rounded-full bg-[#E7000B] px-8 py-3 text-white shadow-lg shadow-blue-200/50 transition hover:bg-red-700">
              Book Your Trip
            </Link>
            {/* <span className="text-sm text-slate-500">Call us at <strong>+91 98765 43210</strong> for custom plans.</span> */}
          </div>
      </div>
    // </div>
  );
}