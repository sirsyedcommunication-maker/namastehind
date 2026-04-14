// "use client";

// import Image from "next/image"; // Missing import fix
// import { useParams } from "next/navigation";
// import tripsData from "@/data/tripsData"; 
// import { CheckCircle, Clock, MapPin, ShieldCheck } from "lucide-react"; // Icons import
// import Link from "next/link";

// export default function TripDetails() {
//   const params = useParams();
  
//   // Params hamesha array hota hai Catch-all mein: ["kashmir_backpacking_trip", "4n5d"]
//   // Ise join karke wapas waisa hi banayein jaisa data.js mein hai
//   const currentSlug = params.slug?.join("/"); 

//   // Data search
//   const trip = tripsData.find((t) => t.slug === currentSlug);

//   // Debugging ke liye (Agar abhi bhi nahi mil raha toh screen par path dikhega)
//   if (!trip) {
//     return (
//       <div className="h-screen flex flex-col items-center justify-center text-center p-5">
//         <h1 className="text-3xl font-bold text-red-500">Trip Not Found!</h1>
//         <p className="mt-2 text-gray-500">Hume ye path nahi mila: <span className="font-mono bg-gray-100 p-1">{currentSlug}</span></p>
//         <p className="text-sm mt-4 text-gray-400 italic">Check karein ki tripsData.js mein slug aur URL exact match ho rahe hain ya nahi.</p>
//         <Link href="/" className="mt-6 bg-black text-white px-6 py-2 rounded-full">Back to Home</Link>
//       </div>
//     );
//   }

//   return (
//     <main className="bg-white min-h-screen">
//       {/* Hero Image Section */}
//       <div className="relative h-[50vh] w-full">
//         {trip.image && (
//           <Image 
//             src={trip.image} 
//             alt={trip.title} 
//             fill 
//             className="object-cover" 
//             priority 
//           />
//         )}
//         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//           <h1 className="text-white text-4xl md:text-6xl font-bold text-center px-4 leading-tight">
//             {trip.title}
//           </h1>
//         </div>
//       </div>

//       <div className="max-w-6xl mx-auto py-12 px-5 grid grid-cols-1 lg:grid-cols-3 gap-10">
        
//         {/* Left Side: Overview & Plans */}
//         <div className="lg:col-span-2">
//           <div className="flex gap-6 mb-8 text-gray-600 border-b pb-6">
//             <span className="flex items-center gap-2 font-medium">
//               <Clock className="text-red-600" size={20}/> {trip.duration}
//             </span>
//             <span className="flex items-center gap-2 font-medium">
//               <MapPin className="text-red-600" size={20}/> Destination
//             </span>
//           </div>
          
//           <h2 className="text-3xl font-bold mb-4 text-gray-800">Tour Overview</h2>
//           <p className="text-gray-600 leading-relaxed mb-10 text-lg">
//             {trip.description || "Experience an unforgettable journey through breathtaking landscapes and cultural wonders. This trip is designed to give you the best of the destination."}
//           </p>

//           <h3 className="text-2xl font-bold mb-6 text-gray-800 border-l-4 border-red-600 pl-3">
//             Itinerary Highlights
//           </h3>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             {trip.plans?.map((plan, i) => (
//               <div key={i} className="flex items-start gap-3 bg-gray-50 p-4 rounded-2xl border border-gray-100 hover:shadow-sm transition">
//                 <CheckCircle className="text-green-500 shrink-0 mt-1" size={20} />
//                 <span className="font-medium text-gray-700">{plan}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Side: Booking Card */}
//         <div className="lg:col-span-1">
//           <div className="sticky top-24 bg-white border border-gray-200 rounded-[2rem] p-8 shadow-2xl shadow-gray-200/50">
//             <p className="text-gray-500 mb-1 text-sm uppercase tracking-wider font-semibold">Best Price Guarantee</p>
//             <div className="flex items-baseline gap-2 mb-6 border-b pb-6">
//               <span className="text-5xl font-extrabold text-red-600">₹{trip.price}</span>
//               <span className="text-gray-400 font-medium">/Person</span>
//             </div>

//             <div className="space-y-4">
//               <button className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200">
//                 Book This Trip
//               </button>
              
//               <button className="w-full bg-white border-2 border-gray-100 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition">
//                 Contact Expert
//               </button>
//             </div>
            
//             <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mt-6">
//               <ShieldCheck size={16} className="text-green-600" />
//               100% Safe & Secure Payments
//             </div>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }




"use client";

import Image from "next/image";
import { useParams } from "next/navigation";
import tripsData from "@/data/tripsData"; 
import { CheckCircle, Clock, MapPin, ShieldCheck, Info, XCircle, ChevronRight } from "lucide-react"; 
import Link from "next/link";
import { useState } from "react";

export default function TripDetails() {
  const params = useParams();
  const currentSlug = params.slug?.join("/"); 
  const trip = tripsData.find((t) => t.slug === currentSlug);

  if (!trip) {
    return (
      <div className="h-screen flex flex-col items-center justify-center text-center p-5">
        <h1 className="text-3xl font-bold text-red-500">Trip Not Found!</h1>
        <p className="mt-2 text-gray-500">Hume ye path nahi mila: <span className="font-mono bg-gray-100 p-1">{currentSlug}</span></p>
        <Link href="/" className="mt-6 bg-black text-white px-6 py-2 rounded-full">Back to Home</Link>
      </div>
    );
  }

  return (
    <main className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full">
        {trip.image && (
          <Image src={trip.image} alt={trip.title} fill className="object-cover" priority />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end pb-16 justify-center">
          <div className="text-center px-4">
             <h1 className="text-white text-4xl md:text-6xl font-extrabold leading-tight drop-shadow-lg">
                {trip.title}
             </h1>
             <p className="text-white/90 mt-4 text-lg md:text-xl font-medium tracking-wide">
               Explore the Himalayas with Namaste Hind
             </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-12 px-5 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* LEFT COLUMN: Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Stats Bar */}
          <div className="flex flex-wrap gap-8 p-6 bg-gray-50 rounded-[2rem] border border-gray-100">
            <div className="flex items-center gap-3">
              <Clock className="text-red-600" size={24}/> 
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Duration</p>
                <p className="font-semibold text-gray-800">{trip.duration}</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-red-600" size={24}/> 
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold">Base Location</p>
                <p className="font-semibold text-gray-800">Haridwar</p>
              </div>
            </div>
          </div>

          {/* Overview */}
          <section>
            <h2 className="text-3xl font-bold mb-5 text-gray-900">Tour Overview</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              {trip.description}
            </p>
          </section>

          {/* Detailed Day-wise Itinerary */}
          <section>
            <h3 className="text-2xl font-bold mb-8 text-gray-900 border-l-4 border-red-600 pl-4">Detailed Itinerary</h3>
            <div className="space-y-6">
              {trip.itinerary?.map((item, i) => (
                <div key={i} className="relative pl-10 border-l-2 border-dashed border-red-200 ml-3 pb-4">
                  <div className="absolute -left-[11px] top-0 w-5 h-5 bg-red-600 rounded-full border-4 border-white shadow-sm" />
                  <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
                    <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Day {item.day}</span>
                    <h4 className="text-xl font-bold text-gray-800 mt-1">{item.title}</h4>
                    <p className="text-gray-500 mt-2 text-md leading-relaxed">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Inclusions & Exclusions */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100">
            <div>
              <h4 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-6">
                <CheckCircle className="text-green-600" /> Whats Included
              </h4>
              <ul className="space-y-4">
                {trip.inclusions?.map((inc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                    {inc}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="flex items-center gap-2 text-xl font-bold text-gray-900 mb-6">
                <XCircle className="text-red-600" /> Not Included
              </h4>
              <ul className="space-y-4">
                {trip.exclusions?.map((exc, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-md">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 shrink-0" />
                    {exc}
                  </li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* RIGHT COLUMN: Booking & Pricing */}
        <div className="lg:col-span-1">
          <div className="sticky top-28 space-y-6">
            
            {/* Booking Card */}
            <div className="bg-white border border-gray-200 rounded-[2.5rem] p-8 shadow-2xl shadow-gray-200/50">
              <p className="text-gray-400 mb-2 text-xs uppercase tracking-widest font-bold">Starts From</p>
              <div className="flex items-baseline gap-2 mb-8 border-b border-gray-50 pb-6">
                <span className="text-5xl font-extrabold text-red-600">₹{trip.price}</span>
                <span className="text-gray-400 font-medium">/person</span>
              </div>

              {/* Package Tiers Display */}
              <div className="space-y-3 mb-8">
                {trip.packages?.map((pkg, i) => (
                  <div key={i} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <span className="font-bold text-gray-700">{pkg.name}</span>
                    <span className="text-red-600 font-extrabold">₹{pkg.price}</span>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <Link href="/contact" className="block text-center w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all shadow-lg shadow-red-200">
                  Book This Trip
                </Link>
                <Link href="/contact" className="block text-center w-full bg-white border-2 border-gray-100 text-gray-700 py-3 rounded-2xl font-semibold hover:bg-gray-50 transition">
                  Contact Expert
                </Link>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-50 space-y-3">
                 <div className="flex items-center gap-2 text-xs text-gray-400">
                    <ShieldCheck size={16} className="text-green-600" />
                    100% Secure Booking Guarantee
                 </div>
                 <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Info size={16} className="text-blue-500" />
                    Free Cancellation (Terms Apply)
                 </div>
              </div>
            </div>

            {/* Travel Essentials Alert */}
            <div className="bg-red-50 p-6 rounded-[2rem] border border-red-100">
               <h5 className="font-bold text-red-800 mb-3 flex items-center gap-2 text-sm uppercase">
                 <Info size={16} /> Travel Guidelines
               </h5>
               <ul className="text-xs text-red-700 space-y-2">
                 {trip.essentials?.map((item, i) => (
                   <li key={i} className="flex gap-2">
                     <span className="shrink-0">•</span> {item}
                   </li>
                 ))}
               </ul>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}