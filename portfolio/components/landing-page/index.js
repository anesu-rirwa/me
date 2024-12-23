"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaCode, FaGraduationCap, FaBlogger, FaEnvelope, FaLinkedin, FaGithub, FaKaggle } from 'react-icons/fa';
import Link from 'next/link';

const LandingPage = () => {
  
  return (
    <section className="h-[100vh] flex items-center justify-center from-gray-900 via-gray-800 to-gray-900 text-gray-900 inset-0 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" id='about-me'>
      <div className="text-center max-w-3xl">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Anesu Rirwa
        </motion.h1>
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          👋 Hi! I am a machine learning engineer with a strong foundation in data analysis, model development, and software engineering, I am passionate about building impactful solutions. I possess strong skills in web and mobile development using React, and I&apos;m eager to contribute my expertise to innovative projects that leverage artificial intelligence and machine learning to solve real-world challenges❤️
        </motion.p>
        
        <div className="flex justify-center gap-8 mb-6">
          <motion.div className="border border-solid p-3 rounded-full bg-gray-800 hover:bg-white  hover:border-blue-500 text-white hover:text-blue-500">
            <Link href="https://www.linkedin.com/in/anesurirwa" target="_blank" className="text-3xl">
              <FaLinkedin />
            </Link>
          </motion.div>

          <motion.div className="border border-solid p-3 rounded-full bg-gray-800 text-white hover:bg-white  hover:border-blue-500 hover:text-blue-500">
            <Link href="https://www.kaggle.com/anesurirwa" target="_blank" className="text-3xl">
              <FaKaggle />
            </Link>
          </motion.div>
          
          <div className="border border-solid p-3 rounded-full bg-gray-800 hover:bg-white  hover:border-[#24292e] text-white hover:text-[#24292e]">
            <Link href="https://www.github.com/anesu-rirwa" target="_blank" className="text-3xl">
                <FaGithub />
            </Link>
          </div>
        </div>
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.7 }}
        >
          <button className="px-6 py-2 bg-yellow-500 text-gray-800 font-semibold rounded-lg hover:bg-gray-800 hover:text-white">Hire Me</button>

          <button className="px-6 py-2  text-white bg-gray-800 font-semibold rounded-lg hover:bg-yellow-500 hover:text-gray-800">View Projects</button>
        </motion.div>
      </div>
    </section>
  )
}

export default LandingPage