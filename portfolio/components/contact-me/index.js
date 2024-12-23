'use client';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaDiscord, FaLinkedin, FaKaggle } from 'react-icons/fa';
import Link from 'next/link';
import React, { useState } from 'react'

const ContactMe = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  
  return (
    <motion.div
      className="md:h-[90vh] bg-gray-50 flex justify-center items-center py-12 px-4 sm:px-6 lg:px-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      id='contact-me'
    >
      <div className="max-w-4xl w-full bg-gray-800 text-white rounded-lg shadow-lg px-8 py-12 flex flex-col md:flex-row">
        {/* Left Section */}
        <div className="md:w-1/2 md:pr-8 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-2">Reach out👋</p>
          <p className="text-lg mb-2">Let&apos;s connect🔗</p>
          <p className="text-lg mb-6">Use the form to send me an email📩</p>

          <div className="flex gap-6 mt-6">
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
          
          <motion.div className="border border-solid p-3 rounded-full bg-gray-800 hover:bg-white  hover:border-[#24292e] text-white hover:text-[#24292e]">
            <Link href="https://www.github.com/anesu-rirwa" target="_blank" className="text-3xl">
                <FaGithub />
            </Link>
          </motion.div>
          </div>

        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0 bg-white text-gray-800 rounded-lg p-6">
          <form className="space-y-4">
            <div>
                <label for="first_name" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Name</label>
                <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John Doe" required />
            </div>

            <div>
                <label for="email" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Email</label>
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="johndoe@gmail.com" required />
            </div>

            <div>
                <label for="message" className="block mb-2 text-sm font-semibold text-gray-800 dark:text-white">Message</label>
                <textarea id="message" rows="5" className="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your message" required></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gray-800 text-white font-bold py-2 px-4 rounded-md hover:bg-gray-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 tracking-wider"
            >
              SEND EMAIL
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  )
}

export default ContactMe