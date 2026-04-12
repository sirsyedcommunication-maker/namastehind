"use client";

import { useRef, useState } from "react";
import Image from "next/image";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Delhi",
    text: "The Char Dham Yatra experience was truly amazing. The management and hotels were very good. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
  },
  {
    name: "Priya Patel",
    location: "Ahmedabad",
    text: "Kashmir backpacking trip was a dream come true! Everything was well-organized and the guides were very friendly.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
  },
  {
    name: "Amit Verma",
    location: "Mumbai",
    text: "Great value for money. The difference between the old price and the new price was fair. There were no planning issues.",
    image: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 4,
  },
 
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const scrollToIndex = (index) => {
    if (!sliderRef.current) return;
    const item = sliderRef.current.children[index];
    if (item) {
      item.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
      setActiveIndex(index);
    }
  };

  const prevSlide = () => scrollToIndex(Math.max(activeIndex - 1, 0));
  const nextSlide = () => scrollToIndex(Math.min(activeIndex + 1, reviews.length - 1));

  return (
    <section className="bg-white py-16 px-5">
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            What Our Travelers Say
          </h2>
          <div className="w-20 h-1 bg-red-600 mx-auto rounded-full"></div>
          <p className="text-gray-500 mt-4 text-lg">Trusted by thousands, remembered by many.</p>
        </div>

        {/* Testimonials Slider */}
        <div className="relative">
          <button
            type="button"
            onClick={prevSlide}
            disabled={activeIndex === 0}
            className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-700 shadow-lg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            ‹
          </button>

          <div
            ref={sliderRef}
            className="flex gap-8 overflow-x-auto px-2 pb-4 scroll-smooth hide-scrollbar"
            style={{ scrollSnapType: "x mandatory", msOverflowStyle: "none", scrollbarWidth: "none" }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="min-w-[280px] md:min-w-[360px] snap-center bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
                style={{ scrollSnapAlign: "center" }}
              >
              {/* Rating Stars */}
              <div className="flex text-yellow-400 mb-4 text-sm">
                {[...Array(review.rating)].map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 italic mb-6">
                {review.text}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{review.name}</h4>
                  <p className="text-sm text-gray-500">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
          </div>

          <button
            type="button"
            onClick={nextSlide}
            disabled={activeIndex === reviews.length - 1}
            className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full bg-white/90 p-3 text-gray-700 shadow-lg transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}