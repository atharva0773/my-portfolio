import React from 'react'

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center px-4 md:px-16 lg:px-32 space-y-6 md:space-y-8">
      
      {/* Intro */}
      <div className="w-full max-w-md">
        <h1 className="text-xl md:text-2xl text-blue-500">Hi, my name is</h1>
      </div>

      {/* Name */}
      <div className="w-full max-w-2xl">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-200 hover:text-blue-400 transition-colors">
          Atharva Singh
        </h2>
      </div>

      {/* Tagline */}
      <div className="w-full max-w-3xl">
        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-semibold text-gray-400">
          I build things for the web.
        </h3>
      </div>

      {/* Description */}
      <div className="w-full max-w-3xl">
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mt-3">
          I’m a frontend developer passionate about crafting clean, responsive, and user-friendly web interfaces. 
          I specialize in building modern web applications using React, Tailwind CSS, and JavaScript, 
          creating fast, accessible, and visually appealing digital experiences.
        </p>
      </div>

    </section>
  )
}

export default Hero
