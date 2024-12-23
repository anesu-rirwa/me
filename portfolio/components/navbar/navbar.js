"use client"

// import the necessary libraries
import React from 'react'
import { motion } from 'framer-motion'
import { FaHome, FaUser, FaCode, FaGraduationCap, FaBlogger, FaEnvelope, FaFileContract } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    const navOptions = [
        {label: 'about.me', icon: FaUser, link: '#about-me'},
        {label: 'experience', icon: FaGraduationCap, link: '#experience'},
        {label: 'projects', icon: FaCode, link: '#projects'},
        {label: 'blog', icon: FaBlogger, link: '#blog'},
        {label: 'contact-me', icon: FaEnvelope, link: '#contact-me'},
    ]
    
    return (
    <div> 
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 75 }}
            className='fixed top-0 w-full h-[10vh] bg-gray-900 text-white shadow-md z-50 px-6'  
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
                <motion.h1
                    className="text-2xl font-bold"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                >
                    MyPortfolio
                </motion.h1>

                <ul className="flex gap-6">
                    {navOptions.map((item, index) => (
                        <motion.li
                        key={item.label}
                        className="flex items-center gap-2 hover:text-yellow-400 cursor-pointer"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        >
                        <item.icon size={20} />
                        <Link href={`/${item.link}`}>
                            {item.label.replace('.', ' ')}
                        </Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
        </motion.nav>
    </div>
  )
}

export default Navbar