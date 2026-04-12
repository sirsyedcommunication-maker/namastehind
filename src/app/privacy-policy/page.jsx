"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Lock, Eye, FileText, Globe, Bell } from "lucide-react";
import Link from "next/link";

const PrivacyPolicy = () => {
  const lastUpdated = "April 12, 2026";

  const sections = [
    {
      icon: <Eye className="text-red-600" />,
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes your name, phone number, email address, and travel preferences (e.g., Manali, Kashmir, etc.).",
    },
    {
      icon: <Globe className="text-red-600" />,
      title: "How We Use Your Information",
      content: "We use the information we collect to provide, operate, and maintain our services, including booking tours, providing quotes, and sending you updates regarding your travel inquiries.",
    },
    {
      icon: <Lock className="text-red-600" />,
      title: "Data Security",
      content: "We implement a variety of security measures to maintain the safety of your personal information. Your data is stored in secured networks and is only accessible by a limited number of persons who have special access rights to such systems.",
    },
    {
      icon: <ShieldCheck className="text-red-600" />,
      title: "Third-Party Sharing",
      content: "We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except to trusted third parties who assist us in operating our website or servicing you (like hotels or transport providers).",
    },
    {
      icon: <Bell className="text-red-600" />,
      title: "Changes to This Policy",
      content: "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.",
    },
  ];

  return (
    <main className="bg-white min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-3xl mb-6">
            <ShieldCheck size={32} className="text-red-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-500 font-medium tracking-wide uppercase text-sm">
            Last Updated: {lastUpdated}
          </p>
          <div className="w-20 h-1.5 bg-red-600 mx-auto rounded-full mt-6"></div>
        </motion.div>

        {/* Content Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="space-y-12"
        >
          <section className="prose prose-red max-w-none text-gray-600">
            <p className="text-lg leading-relaxed">
              At our Travel Agency, your privacy is our priority. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it. If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
            </p>
          </section>

          <div className="grid grid-cols-1 gap-8">
            {sections.map((section, index) => (
              <motion.div 
                key={index}
                whileHover={{ x: 5 }}
                className="flex gap-6 p-8 bg-gray-50 rounded-[2rem] border border-gray-100 transition-all"
              >
                <div className="shrink-0 w-12 h-12 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-gray-100">
                  {section.icon}
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 mb-3">{section.title}</h2>
                  <p className="text-gray-600 leading-relaxed">{section.content}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Note */}
          <div className="bg-red-600 rounded-[2.5rem] p-10 text-center text-white shadow-xl shadow-red-200 mt-16">
            <h3 className="text-2xl font-bold mb-4 flex items-center justify-center gap-2">
              <FileText /> Questions?
            </h3>
            <p className="opacity-90 mb-6 max-w-md mx-auto">
              If you have any concerns regarding how we handle your data, please reach out to our compliance team.
            </p>
            <Link href={'/contact'} className="bg-white text-red-600 px-8 py-3 rounded-2xl font-bold hover:bg-gray-100 transition-colors">
              Contact Support
            </Link>
          </div>
        </motion.div>

      </div>
    </main>
  );
};

export default PrivacyPolicy;