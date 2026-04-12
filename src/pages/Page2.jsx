import Image from "next/image";
import React from "react";

const data = [
  {
    title: "20+ Destinations",
    desc: "Explore amazing places across India with unforgettable experiences.",
  },
  {
    title: "Best Price",
    desc: "Get the best travel deals with affordable pricing and offers.",
  },
  {
    title: "Trusted Guides",
    desc: "Travel with experienced guides for a safe and smooth journey.",
  },
];

const Page2 = () => {
  return (
    <div className="bg-gray-50 w-full py-10 px-5">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {data.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-6 flex flex-col items-center text-center group"
          >
            
            {/* Image */}
            <div className="relative mb-4 w-16 h-16 md:w-20 md:h-20">
              <Image
                src="/image/namastehindLogo.jpeg"
                alt="logo"
                fill
                className="rounded-full object-cover group-hover:scale-110 transition duration-300"
              />
            </div>

            {/* Title */}
            <h1 className="font-semibold text-xl text-gray-800 mb-2">
              {item.title}
            </h1>

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed">
              {item.desc}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
};

export default Page2;