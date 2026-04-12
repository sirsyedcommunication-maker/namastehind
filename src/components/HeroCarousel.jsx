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
    title: "Kashmir Backpacking Trip",
    desc: "Explore the paradise on Earth with serene valleys, crystal lakes, and unforgettable landscapes.",
  },
  {
    image: "https://images.unsplash.com/photo-1597167231350-d057a45dc868?q=80&w=1982&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Manali",
    desc: "Experience snow-covered peaks, thrilling adventures, and the charm of mountain life.",
  },
  {
    image: "https://images.unsplash.com/photo-1581793745862-99fde7fa73d2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Ladakh Bike Tour",
    desc: "Ride through rugged terrains, high passes, and witness the raw beauty of the Himalayas.",
  },
  {
    image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Spiti Bike Tour",
    desc: "Adventure into the cold desert, explore remote villages, and experience untouched natural beauty.",
  },
];

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

{/* <div className="w-1/3 h-12 mt-5 gap-2 justify-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex items-center px-2 py-4">
  <input className="border p-2 rounded-l-full" type="text" placeholder="Search" />
   <div className="relative border py-2 px-12">
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
            <div className="absolute top-full mt-2 w-44  bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-lg z-50">
              <ul className="py-2 text-start text-black">
                <li><Link href="/chardham_yatra" className="block px-4 py-2 hover:bg-gray-100">Char Dham Yatra</Link></li>
                <li><Link href="/kashmir_backpacking_trip" className="block px-4 py-2 hover:bg-gray-100">Kashmir Backpacking Trip</Link></li>
                <li><Link href="ladakh_bike_tour" className="block px-4 py-2 hover:bg-gray-100">Ladakh Bike Tour</Link></li>
                <li><Link href="/spiti_bike_tour" className="block px-4 py-2 hover:bg-gray-100">Spiti Bike Tour</Link></li>
                <li><Link href="/manali" className="block px-4 py-2 hover:bg-gray-100">Manali</Link></li>
              </ul>
            </div>
          )}
        </div>
  <button className="border p-2 px-7 rounded-r-full hover:bg-blue-200">Search</button>
</div> */}

{/* <div className="w-full md:w-2/3 lg:w-1/3 mx-auto h-auto mt-5 gap-2 justify-center bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-full flex flex-wrap md:flex-nowrap items-center px-2 py-2">

 
  <input
    className="flex-1 min-w-[120px] border p-2 md:rounded-l-full rounded-l-full outline-none"
    type="text"
    placeholder="Search"
  />

  
  <div className="relative">
    <button
      onClick={() => setOpen(!open)}
      className="flex items-center gap-1 border px-3 py-2  md:rounded-none cursor-pointer whitespace-nowrap"
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
      <div className="absolute left-0 md:left-auto md:right-0 top-full mt-2 w-48 bg-white/30 backdrop-blur-md border border-white/20 shadow-lg rounded-lg z-50">
        <ul className="py-2 text-start text-black">
          <li><Link href="/chardham_yatra" className="block px-4 py-2 hover:bg-gray-100">Char Dham Yatra</Link></li>
          <li><Link href="/kashmir_backpacking_trip" className="block px-4 py-2 hover:bg-gray-100">Kashmir Backpacking Trip</Link></li>
          <li><Link href="/ladakh_bike_tour" className="block px-4 py-2 hover:bg-gray-100">Ladakh Bike Tour</Link></li>
          <li><Link href="/spiti_bike_tour" className="block px-4 py-2 hover:bg-gray-100">Spiti Bike Tour</Link></li>
          <li><Link href="/manali" className="block px-4 py-2 hover:bg-gray-100">Manali</Link></li>
        </ul>
      </div>
    )}
  </div>

  
  <button className="border p-2 px-5 md:px-7 rounded-r-full  md:rounded-r-full hover:bg-blue-200 whitespace-nowrap">
    Search
  </button>

</div> */}

      </div>
    </div>
  );
}