

import React from 'react'
import Me from './me/me'
import ExperiencePreview from './experience-preview/experiencePreview'
import Timeline from './experience-preview/timeline'

const AboutMe = () => {
  return (
    <div className="h-[90vh] flex flex-col items-center px-6 md:px-16 bg-gray-50 text-gray-800 border border-solid border-red-500" id="experience">
      <Me />
      <Timeline />
    </div>
  )
}

export default AboutMe