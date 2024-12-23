"use client"

import React from 'react'
import { motion } from 'framer-motion'

const ExperiencePreview = () => {
    const timeline = [
        {
            title: "Software Engineer",
            company: "Google",
            location: "Mountain View, CA",
            date: "2019 - Present",
            description: "I work on the Google Search team, where I help build the next generation of search experiences."
        },
        {
            title: "Software Engineer",
            company: "Facebook",
            location: "Menlo Park, CA",
            date: "2017 - 2019",
            description: "I worked on the Facebook Marketplace team, where I helped connect buyers and sellers through a seamless shopping experience."
        },
        {
            title: "Software Engineering Intern",
            company: "Microsoft",
            location: "Redmond, WA",
            date: "Summer 2016",
            description: "I interned on the Windows team, where I helped build the next generation of Windows features."
        }
    ]

  return (
    <div>
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay:0.8 }}
            className="max-w-4xl w-full mt-10"
        >
        {/* Timeline Section */}
            <h2 className="text-2xl font-bold text-center mb-8">Timeline</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
            {timeline.map((item, index) => (
                <div key={index} className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center bg-blue-600 text-white rounded-full mb-2">
                    {item.year}
                </div>
                <div className="text-center">
                    <p className="font-semibold">{item.role}</p>
                    <p className="text-sm text-gray-600">{item.company}</p>
                </div>
                </div>
            ))}
            </div>
        </motion.div>
    </div>
  )
}

export default ExperiencePreview