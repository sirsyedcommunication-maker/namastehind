"use client";

import Image from "next/image";
import Link from "next/link";
import tripsData from "@/data/tripsData";

export default function TripList() {
  return (
    <div className="p-6">
      
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-10 relative">
        Kashmir Tours
        <span className="absolute left-1/2 -translate-x-1/2 top-10 text-6xl text-gray-200 font-bold -z-10">
          KASHMIR
        </span>
      </h1>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {tripsData.map((trip) => (
          <Link key={trip.slug} href={`/${trip.slug}`}>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer">
              
              {/* Image */}
              <div className="relative w-full h-52">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                
                <h2 className="font-semibold text-lg mb-2">
                  ⚡ {trip.title}
                </h2>

                {/* Duration */}
                <p className="text-gray-600 text-sm mb-2">
                  ⏱ {trip.duration}
                </p>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-sm mb-2">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-600 ml-2">
                    ({trip.reviews} Review)
                  </span>
                </div>

                {/* Price */}
                <div className="flex justify-between items-center">
                  <span className="text-gray-500 line-through">
                    ₹{trip.oldPrice}
                  </span>

                  <span className="text-red-600 text-xl font-bold">
                    ₹ {trip.price}/-
                  </span>
                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>
    </div>
  );
}