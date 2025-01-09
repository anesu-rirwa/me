"use client";

// Import necessary libraries
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaHome, FaUser, FaCode, FaGraduationCap, FaBlogger, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navOptions = [
    { label: "about.me", icon: FaUser, link: "#about-me" },
    { label: "experience", icon: FaGraduationCap, link: "#experience" },
    { label: "projects", icon: FaCode, link: "#projects" },
    { label: "contact-me", icon: FaEnvelope, link: "#contact-me" },
  ];

  return (
    <div>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 75 }}
        className="fixed top-0 w-full h-[10vh] bg-gray-900 text-white shadow-md z-50 px-6"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
          {/* Brand Name */}
          <motion.h1
            className="text-2xl font-bold"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            A.Rirwa
          </motion.h1>

          {/* Hamburger Menu for Mobile */}
          <div className="md:hidden">
            {isMenuOpen ? (
              <FaTimes
                size={25}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(false)}
              />
            ) : (
              <FaBars
                size={25}
                className="cursor-pointer"
                onClick={() => setIsMenuOpen(true)}
              />
            )}
          </div>

          {/* Navigation Links */}
          <ul
            className={`flex md:flex md:gap-6 absolute md:static bg-gray-900 top-[10vh] right-0 w-full md:w-auto md:bg-transparent flex-col md:flex-row items-center md:items-center gap-4 py-[100%] md:py-0 transition-transform duration-300 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            {navOptions.map((item, index) => (
              <motion.li
                key={item.label}
                className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <item.icon size={20} />
                <Link href={item.link} onClick={() => setIsMenuOpen(false)}>
                  {item.label.replace(".", " ")}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navbar;
