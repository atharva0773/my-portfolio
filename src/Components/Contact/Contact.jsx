import React from 'react'

function Contact() {
  return (
    <section className="min-h-screen text-gray-400 flex flex-col items-center px-4 md:px-16 lg:px-32 py-16 space-y-8">
      
      {/* Section Title */}
      <h2 className="text-2xl md:text-3xl flex justify-center gap-x-2">
        <span className="text-blue-500">03.</span> What’s Next?
      </h2>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 text-center">
        Get In Touch
      </h2>

      {/* Description */}
      <p className="text-base sm:text-lg md:text-xl text-center max-w-2xl mt-5">
        I’m currently open to new opportunities where I can contribute, learn, and grow as a developer. 
        If you think I’d be a good fit for your team or project, feel free to reach out — I’d love to connect!
      </p>

      {/* Contact Button */}
      <div>
        <a
          href="mailto:atharvasingh@gmail.com"
          className="text-lg sm:text-xl md:text-2xl px-6 py-3 border-2 border-blue-400 rounded-xl text-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-300"
        >
          Say Hello
        </a>
      </div>
    </section>
  )
}

export default Contact
