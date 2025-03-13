import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"; // Importing Lucide icons
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold">MUJTOPPER</h2>
          <p className="mt-2 text-gray-400">
            Your College Journey, Simplified: Study, Eat & Chill
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-lg font-semibold text-gray-300">Quick Links</h3>
          <Link
            href="/material"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Study Materials
          </Link>
          <Link
            href="/order"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Order Notes
          </Link>
          <Link
            href="/exam-tips"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            Exam Tips
          </Link>
          <Link
            href="/about-us"
            className="text-gray-400 hover:text-yellow-400 transition"
          >
            About Us
          </Link>
        </div>

        {/* Contact & Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-gray-300">
            Stay Connected
          </h3>
          <div className="flex space-x-4 mt-3">
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <Facebook size={24} />
            </Link>
            <Link
              href="#"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <Twitter size={24} />
            </Link>
            <Link
              href="https://www.instagram.com/mujtoppers"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <Instagram size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/company/muj-toppers/about/?viewAsMember=true"
              className="text-gray-400 hover:text-blue-700 transition"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-gray-500 text-sm">
        © 2025 MUJTOPPER. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
