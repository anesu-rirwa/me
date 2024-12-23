'use client';
import { motion } from 'framer-motion';
import { FaHome, FaUser, FaCode, FaGraduationCap, FaBlogger, FaEnvelope, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import Link from 'next/link';
import React from 'react'
import { projectsList } from './projectsList';

const Projects = () => 
  {
  return (
    <section className="h-[90vh] py-12 px-8 from-gray-900 via-gray-800 to-gray-900 text-gray-900 inset-0 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]" id="projects">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold mb-4">Projects</h2>
        <p className="text-gray-600 font-semibold">✨ A glimpse into my world of work ✨</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Project Cards */}
        {projectsList.map((project, Projects) => (
          <motion.div
            key={Projects}
            className="bg-gray-50 rounded-lg shadow-lg overflow-hidden p-6 flex flex-col justify-between"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-yellow-600 mb-2">{project.languages}</p>
            <p className="text-gray-700 mb-4">{project.bio}</p>
            <div className="flex gap-4 mt-auto">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-700"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-500"
              >
                <FaExternalLinkAlt /> Live
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View More Projects Button */}
      <div className="text-center mt-12">
        <button className="bg-gray-900 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-gray-700">View More Projects</button>
      </div>
  </section>
  )
}

export default Projects