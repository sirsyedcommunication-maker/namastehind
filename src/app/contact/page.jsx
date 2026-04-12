"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";

const ContactPage = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "", // number ko phone kar diya backend mapping ke liye
    destination: "Kashmir Tour",
    message: "",
  });

  const destinations = [
    "Char Dham Yatra",
    "Manali Adventure",
    "Ladakh Expedition",
    "Spiti Valley Trek",
    "Kashmir Tour",
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        alert("Thank you! Inquiry received at info@namastehind.com ✅");
        setForm({
          name: "",
          phone: "",
          destination: "Kashmir Tour",
          message: "",
        });
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error || "Submission failed"}`);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white py-20 px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get In Touch
          </h1>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ready for your next adventure? Fill out the form below and our travel experts will craft the perfect itinerary for you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Email Us</p>
                    <p className="text-lg font-semibold text-gray-700">info@namastehind.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Call Us</p>
                    <p className="text-lg font-semibold text-gray-700">+91 97097 65557</p>
                  </div>
                </div>

                {/* <div className="flex items-center gap-5">
                  <div className="w-12 h-12 bg-red-50 text-red-600 rounded-2xl flex items-center justify-center shadow-sm">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">Our Office</p>
                    <p className="text-lg font-semibold text-gray-700">Bhopal, Madhya Pradesh</p>
                  </div>
                </div> */}
              </div>
            </div>

            <div className="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-2">Connect with us</h3>
              <p className="text-gray-500 text-sm">Follow our journey on Instagram and Facebook for daily travel inspiration.</p>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-10 rounded-[2.5rem] shadow-2xl shadow-gray-200/50 border border-gray-100"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    disabled={loading}
                    value={form.name}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition disabled:opacity-50"
                    placeholder="Enter your name"
                    onChange={(e) => setForm({...form, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                  <input 
                    type="tel" 
                    required
                    disabled={loading}
                    value={form.phone}
                    className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition disabled:opacity-50"
                    placeholder="Enter phone number"
                    onChange={(e) => setForm({...form, phone: e.target.value})}
                  />
                </div>
              </div>

              {/* Destination Dropdown */}
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Interested Destination</label>
                <select 
                  disabled={loading}
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition appearance-none cursor-pointer disabled:opacity-50"
                  value={form.destination}
                  onChange={(e) => setForm({...form, destination: e.target.value})}
                >
                  {destinations.map((dest, i) => (
                    <option key={i} value={dest}>{dest}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                <textarea 
                  rows="4"
                  required
                  disabled={loading}
                  value={form.message}
                  className="w-full px-5 py-4 bg-gray-50 border-none rounded-2xl focus:ring-2 focus:ring-red-600/20 outline-none transition resize-none disabled:opacity-50"
                  placeholder="Tell us about your travel plans..."
                  onChange={(e) => setForm({...form, message: e.target.value})}
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={loading}
                className="w-full bg-red-600 text-white py-4 rounded-2xl font-bold text-lg hover:bg-red-700 transition-all flex items-center justify-center gap-3 shadow-lg shadow-red-100 disabled:bg-gray-400"
              >
                {loading ? (
                  <>Sending... <Loader2 className="animate-spin" size={20} /></>
                ) : (
                  <>Send Message <Send size={20} /></>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;