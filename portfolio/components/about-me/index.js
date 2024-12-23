

import React from 'react'
import Me from './me/me'
import ExperiencePreview from './experience-preview/experiencePreview'
import Timeline from './experience-preview/timeline'

const AboutMe = () => {
  return (
    <div className="md:h-[90vh] flex flex-col items-center px-6 md:px-16 bg-gray-50 text-gray-800" id="experience">
      <Me />
    </div>
  )
}

export default AboutMe