'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const timelineData = [
    {
      year: '2019',
      title: 'Software Engineer',
      institution: 'Datadog',
    },
    {
      year: '2024',
      title: 'Data Science · Viz',
      institution: 'Consultant',
    },
  ];

  return (
    <motion.div
      className=" bg-gray-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-5xl w-full">
        <div className="relative border-t-2 border-gray-600">
          <ul className="flex justify-between items-center w-full">
            {timelineData.map((item, index) => (
              <li key={index} className="relative text-center">
                {/* Timeline Point */}
                <div className="w-6 h-6 bg-teal-500 rounded-full mx-auto"></div>

                {/* Timeline Content */}
                <div className="mt-4">
                  <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                  <p className="text-sm italic text-gray-500">{item.institution}</p>
                  <p className="text-sm text-gray-600 mt-2">{item.year}</p>
                </div>

                {/* Connecting Line */}
                {index < timelineData.length - 1 && (
                  <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-6 w-px bg-gray-300"></div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
