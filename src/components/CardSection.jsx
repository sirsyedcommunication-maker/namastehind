"use client";

import Link from "next/link";
import Image from "next/image";

export default function CardSection({ title, destination, trips }) {
  return (
    <section className="mb-14">
      <h2 className="text-2xl font-bold mb-6">{title}</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {trips.map((trip, i) => (
          <Link
            key={i}
            href={`/trips/${destination}/${trip.trip}`}
          >
            <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition cursor-pointer group">
              
              <div className="relative w-full h-52">
                <Image
                  src={trip.image}
                  alt={trip.title}
                  fill
                  className="object-cover group-hover:scale-105 transition"
                />
              </div>

              <div className="p-4">
                <h3 className="font-semibold">{trip.title}</h3>
                <p className="text-sm text-gray-500">
                  {trip.duration}
                </p>

                <div className="mt-2 flex justify-between">
                  <span className="text-red-600 font-bold">
                    ₹{trip.price}
                  </span>
                  <span className="line-through text-gray-400">
                    ₹{trip.oldPrice}
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