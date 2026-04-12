"use client";

import Image from "next/image";
import Link from "next/link";

const trips = [
  {
    slug: "char-dham-yatra/4n5d",
    title: "Char Dham Yatra - 4N/5D",
    image: "https://images.unsplash.com/photo-1715457573748-8e8a70b2c1be?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "5 Days 4 Nights",
    price: 16999,
    oldPrice: 18699,
  },
  {
    slug: "char-dham-yatra/5n6d",
    title: "Char Dham Yatra - 5N/6D",
    image: "https://images.unsplash.com/photo-1614591276564-7b3e69347a48?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "6 Days 5 Nights",
    price: 18999,
    oldPrice: 20899,
  },
  {
    slug: "char-dham-yatra/6n7d",
    title: "Char Dham Yatra - 6N/7D",
    image: "https://images.unsplash.com/photo-1643449416258-5c8e7ec598b1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    duration: "7 Days 6 Nights",
    price: 20999,
    oldPrice: 23099,
  },
];

export default function CharDhamYatra() {
  return (
    <section className="bg-gray-50 py-12 px-5 mt-15">
      
      {/* Heading */}
    <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
         Char Dham Yatra
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