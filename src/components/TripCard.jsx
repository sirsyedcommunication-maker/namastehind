

"use client";

import Image from "next/image";
import Link from "next/link";
// import tripsData from "@/data/tripsData";



const tripsData = [
  {
    id: 1,
    slug: "kashmir-backpacking-trip", // Unique Slug
    title: "Kashmir",
    image: "https://images.unsplash.com/photo-1526772662000-3f88f10405ff",
    description: "Backpack through Srinagar, Gulmarg, Sonmarg and Pahalgam with lakes, valleys, and mountain magic.",
    visits: 8,
    duration: "5 Days 4 Nights",
    price: 16999,
    plans: ["5 Days Srinagar Trip", "Gulmarg Snow Trip", "Sonmarg Visit"],
  },
  {
    id: 2,
    slug: "chardham_yatra",
    title: "Char Dham Yatra",
    image: "https://images.unsplash.com/photo-1612438214708-f428a707dd4e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "A sacred pilgrimage through Yamunotri, Gangotri, Kedarnath and Badrinath with spiritual stops and serene mountain views.",
    visits: 6,
    duration: "4 Days 3 Nights",
    price: 12999,
    plans: ["Rohtang Pass", "Solang Valley"],
  },
  {
    id: 3,
    slug: "manali",
    title: "Manali",
    image: "https://images.unsplash.com/photo-1712388430474-ace0c16051e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Experience snow-capped peaks, lush valleys, river rafting and cozy mountain-town charm.",
    visits: 12,
    duration: "6 Days 5 Nights",
    price: 18999,
    plans: ["Pahalgam Visit", "Doodhpathri Trek"],
  },
  {
    id: 4,
    slug: "spiti_bike_tour",
    title: "Spiti",
    image: "https://images.unsplash.com/photo-1617159156637-dfb8655c9f95?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description: "Ride through the rugged high-altitude desert of Spiti, visiting monasteries, villages and dramatic Himalayan passes.",
    visits: 5,
    duration: "3 Days 2 Nights",
    price: 9999,
    plans: ["Hadimba Temple", "Old Manali Cafe Crawl"],
  },
  {
    id: 5,
    slug: "ladakh_bike_tour",
    title: "Ladakh",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    description: "Explore Ladakh’s high passes, turquoise lakes and desert beauty on an unforgettable bike adventure.",
    visits: 5,
    duration: "3 Days 2 Nights",
    price: 9999,
    plans: ["Hadimba Temple", "Old Manali Cafe Crawl"],
  }
];



export default function TripCard() {
  return (
    <>
     <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Popular Destinations
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-lg">Your Next Favorite Destination Starts Here</p>
        </div>
    <div className="p-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      
      {tripsData.map((trip) => (
        <Link key={trip.slug} href={`/${trip.slug}`}>
          
          <div className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
            
            {/* Image */}
            <Image
              src={trip.image}
              alt={trip.title}
              fill
              className="object-cover group-hover:scale-110 transition duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition"></div>

            {/* Bottom Title */}
            <div className="absolute bottom-3 left-3 text-white text-lg font-semibold">
              {trip.title}
            </div>

            {/* Hover Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white opacity-0 group-hover:opacity-100 transition duration-500 px-4">
              
              <h2 className="text-2xl font-bold mb-2">
                {trip.title}
              </h2>

              <p className="text-sm mb-3">
                {trip.description}
              </p>

              <span className="text-red-400 font-semibold">
                View Tour →
              </span>
            </div>

          </div>

        </Link>
      ))}

    </div>
    </>
  );
}