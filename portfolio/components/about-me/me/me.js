"use client"

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import imageUrl from '@/images/me.jpg'

const Me = () => {
  

  return (
    <div className="flex flex-col md:flex-row items-center max-w-5xl w-full py-10">
        {/* Profile Photo */}
        <motion.div
          className="w-48 h-48 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <Image
            src={imageUrl}
            alt="Anesu Rirwa"
            width={200}
            height={200}
            className="object-cover w-full h-full"
          />
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          className="flex-1 md:ml-10 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="text-3xl font-bold mb-4">Hi, I&apos;m Anesu</h1>

          <p className="text-lg leading-relaxed mb-6">
            I specialize in helping companies and researchers analyze and visualize their datasets. With a degree in Artificial Intelligence and Machine Learning from the University of Zimbabwe, I possess a strong foundation in data analysis, model development, and software engineering. I excel in
            <span className="font-semibold text-blue-600"> data visualization</span>. 
            
            If you&apos;re looking for guidance on presenting your results or building complex interactive charts, I&apos;m the expert you&apos;re seeking.
          
          </p>

          {/* Social Links */}
          <div className="flex justify-center md:justify-start gap-4">
            <a
              href="https://linkedin.com/in/anesu"
              target="_blank"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
            >
              <FaLinkedin size={20} /> LinkedIn
            </a>
            <a
              href="https://kaggle.com/anesu"
              target="_blank"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
            >
              <FaGithub size={20} /> Kaggle
            </a>
            <a
              href="https://github.com/anesu"
              target="_blank"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition"
            >
              <FaGithub size={20} /> GitHub
            </a>
          </div>
        </motion.div>
      </div>
  )
}

export default Me