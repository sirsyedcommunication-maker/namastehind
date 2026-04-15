"use client";

import Image from "next/image";
import Link from "next/link";

export default function WhatsAppIcon() {
  const phoneNumber = "919709765556"; // Verified contact number from documents [cite: 5, 13, 18, 22]
  const message = "Hello Namaste Hind! I'm interested in a tour package. Please share details.";
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link
      href={whatsappUrl}
      target="_blank"
      className="fixed bottom-6 right-6 z-[100] bg-[#25D366] text-white p-3 rounded-full shadow-2xl hover:scale-110 transition-transform active:scale-95 group flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      {/* Path fixed: Removed /public and added required props */}
      <Image 
        src="/image/icons8-whatsapp-logo-48.png" 
        alt="WhatsApp"
        width={40}
        height={40}
        className="object-contain"
      />
      
      {/* Tooltip on hover */}
      <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md whitespace-nowrap pointer-events-none border border-gray-100">
        Chat with Expert! 💬
      </span>
    </Link>
  );
}