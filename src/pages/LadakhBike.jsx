"use client";

import Image from "next/image";
import Link from "next/link";

const trips = [
  {
    slug: "ladakh-bike-tour/7n8d",
    title: "Ladakh Bike Tour 2026 - (Leh to Leh)",
    image: "https://images.unsplash.com/photo-1738494777740-21b07e9da9a2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "8 Days 7 Nights",
    price: 19999,
    oldPrice: 25999,
  },
  {
    slug: "ladakh-bike-tour/srinagar-to-delhi",
    title: "Ladakh Bike Tour 2026 - Srinagar to Delhi",
    image: "https://images.unsplash.com/photo-1581793746485-04698e79a4e8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "12 Days 11 Nights",
    price: 34999,
    oldPrice: 50999,
  },
  {
    slug: "ladakh-bike-tour/delhi-to-srinagar",
    title: "Ladakh Bike Tour 2026 - Delhi to Srinagar",
    image: "https://images.unsplash.com/photo-1536295243470-d7cba4efab7b?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "12 Days 11 Nights",
    price: 34999,
    oldPrice: 50999,
  },
];

export default function LadakhBike() {
  return (
    <section className="bg-gray-50 py-12 px-5 mt-15">
      
      {/* Heading */}
           <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
           Ladakh
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-lg">Your Next Favorite Destination Starts Here</p>
        </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        
        {trips.map((trip, i) => (
          <Link key={i} href={`/trips/${trip.slug}`}>
            
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 cursor-pointer group">
              
              {/* Image */}
              <div className="relative w-full h-52 overflow-hidden">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4">
                
                {/* Title */}
                <h2 className="font-semibold text-lg mb-2">
                  ⚡ {trip.title}
                </h2>

                {/* Duration + Old Price */}
                <div className="flex justify-between text-sm text-gray-500 mb-2">
                  <span>⏱ {trip.duration}</span>
                  <span className="line-through">
                    ₹{trip.oldPrice}
                  </span>
                </div>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 text-sm mb-2">
                  ⭐⭐⭐⭐⭐
                  <span className="text-gray-500 ml-2">
                    (5 Review)
                  </span>
                </div>

                {/* Price */}
                <div className="text-right">
                  <span className="text-red-600 text-xl font-bold">
                    ₹ {trip.price}/-
                  </span>
                </div>

              </div>

            </div>

          </Link>
        ))}

      </div>
    </section>
  );
}