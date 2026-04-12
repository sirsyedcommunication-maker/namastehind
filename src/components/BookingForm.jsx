// "use client";

// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, MapPin, Phone, User, Send } from "lucide-react";

// export default function BookingForm() {
//   const [show, setShow] = useState(false);
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     destination: "Kashmir Tour",
//   });

//   const destinations = [
//     "Char Dham Yatra",
//     "Manali Adventure",
//     "Ladakh Expedition",
//     "Spiti Valley Trek",
//     "Kashmir Tour",
//   ];

//   // 3 sec baad popup show hoga
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShow(true);
//     }, 3000);
//     return () => clearTimeout(timer);
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Booking Data:", form);
//     alert("Inquiry Sent Successfully! ✅");
//     setShow(false);
//   };

//   return (
//     <AnimatePresence>
//       {show && (
//         <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
//           {/* Backdrop */}
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             onClick={() => setShow(false)}
//             className="absolute inset-0 bg-black/60 backdrop-blur-sm"
//           />

//           {/* Popup Box */}
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0, y: 20 }}
//             animate={{ scale: 1, opacity: 1, y: 0 }}
//             exit={{ scale: 0.9, opacity: 0, y: 20 }}
//             className="bg-white rounded-[2.5rem] p-8 w-full max-w-md relative shadow-2xl overflow-hidden"
//           >
//             {/* Design Element (Red accent) */}
//             <div className="absolute top-0 left-0 w-full h-2 bg-red-600" />

//             {/* Close Button */}
//             <button
//               onClick={() => setShow(false)}
//               className="absolute top-5 right-5 text-gray-400 hover:text-red-600 transition-colors p-1"
//             >
//               <X size={24} />
//             </button>

//             <div className="text-center mb-8">
//               <h2 className="text-2xl font-extrabold text-gray-900">
//                 Get Best Travel Deals ✈️
//               </h2>
//               <p className="text-gray-500 text-sm mt-2">
//                 Leave your details and our experts will call you.
//               </p>
//             </div>

//             <form onSubmit={handleSubmit} className="space-y-5">
//               {/* Name Input */}
//               <div className="relative">
//                 <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Your Full Name"
//                   required
//                   className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition"
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                 />
//               </div>

//               {/* Phone Input */}
//               <div className="relative">
//                 <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   required
//                   className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition"
//                   value={form.phone}
//                   onChange={(e) => setForm({ ...form, phone: e.target.value })}
//                 />
//               </div>

//               {/* Destination Select */}
//               <div className="relative">
//                 <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
//                 <select
//                   className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition appearance-none cursor-pointer text-gray-700"
//                   value={form.destination}
//                   onChange={(e) => setForm({ ...form, destination: e.target.value })}
//                 >
//                   {destinations.map((dest, i) => (
//                     <option key={i} value={dest}>
//                       {dest}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               {/* Submit Button */}
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-100"
//               >
//                 Get Best Quote <Send size={18} />
//               </button>
//             </form>

//             <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-semibold">
//               * Secure & Private
//             </p>
//           </motion.div>
//         </div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Phone, User, Send, Loader2 } from "lucide-react";

export default function BookingForm() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false); // Loading state for UX
  const [form, setForm] = useState({
    name: "",
    phone: "",
    destination: "Kashmir Tour",
  });

  const destinations = [
    "Char Dham Yatra",
    "Manali Adventure",
    "Ladakh Expedition",
    "Spiti Valley Trek",
    "Kashmir Tour",
  ];

  // 3 sec baad popup show hoga
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // API Integration
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          destination: form.destination,
          message: "Inquiry from Popup Form", // Default message
        }),
      });

      const result = await response.json();

      if (response.ok) {
        alert("Inquiry Sent Successfully! info@namastehind.com check karein. ✅");
        setForm({ name: "", phone: "", destination: "Kashmir Tour" }); // Reset Form
        setShow(false); // Close Popup
      } else {
        alert(`Error: ${result.error || "Kuch gadbad ho gayi"}`);
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Network error! Check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {show && (
        <div className="fixed inset-0 flex items-center justify-center z-[100] px-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => !loading && setShow(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Popup Box */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="bg-white rounded-[2.5rem] p-8 w-full max-w-md relative shadow-2xl overflow-hidden"
          >
            {/* Design Element (Red accent) */}
            <div className="absolute top-0 left-0 w-full h-2 bg-red-600" />

            {/* Close Button */}
            {!loading && (
              <button
                onClick={() => setShow(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-red-600 transition-colors p-1"
              >
                <X size={24} />
              </button>
            )}

            <div className="text-center mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900">
                Get Best Travel Deals ✈️
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Leave your details and our experts will call you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name Input */}
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Your Full Name"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition disabled:opacity-50"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </div>

              {/* Phone Input */}
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition disabled:opacity-50"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
              </div>

              {/* Destination Select */}
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                <select
                  disabled={loading}
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition appearance-none cursor-pointer text-gray-700 disabled:opacity-50"
                  value={form.destination}
                  onChange={(e) => setForm({ ...form, destination: e.target.value })}
                >
                  {destinations.map((dest, i) => (
                    <option key={i} value={dest}>
                      {dest}
                    </option>
                  ))}
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-100 disabled:bg-gray-400 disabled:shadow-none"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin" size={18} /></>
                ) : (
                  <>Get Best Quote <Send size={18} /></>
                )}
              </button>
            </form>

            <p className="text-center text-[10px] text-gray-400 mt-6 uppercase tracking-widest font-semibold">
              * Secure & Private
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}