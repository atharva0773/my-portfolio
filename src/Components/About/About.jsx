import React from 'react'

function About() {
  return (
    <section id="about" className="min-h-screen text-stone-400 px-4 md:px-16 lg:px-32 py-16 mb-16">
      
      {/* Section Title */}
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
        <span className="text-blue-500">01. </span> About Me ---------------
      </h2>

      {/* Content: Text + Image */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-8">
        
        {/* Text Section */}
        <div className="flex-1 space-y-4">
          <p className="text-base sm:text-lg md:text-xl">Hello! My name is Atharva Singh, and I’m a Computer Science undergraduate with a passion for 
  building scalable and user-friendly web applications. My journey into development began with a 
  curiosity to understand how websites work, which quickly evolved into designing and building 
  full-stack solutions that combine creativity and performance.</p>
          <p className="text-base sm:text-lg md:text-xl">I specialize in working with modern technologies like <span className="text-blue-400">ReactJS</span>, 
  <span className="text-blue-400"> Node.js</span>, and <span className="text-blue-400">Firebase </span> 
  to craft responsive applications. I enjoy turning ideas into reality through 
  clean, efficient, and maintainable code — whether it’s developing a real-time email app like 
  <span className="text-blue-400"> FireMail</span> or building tools that enhance everyday user experiences.</p>
          <p className="text-base sm:text-lg md:text-xl">When I’m not coding, I’m often exploring cloud, refining my problem-solving skills on 
  platforms like LeetCode, Codechef, HackerRank or contributing to college tech fests. I’m always eager to learn, collaborate, 
  and work on projects that push my technical and creative boundaries.</p>
          

          {/* Skills List */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-4 text-stone-300">
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition-colors hover:underline">JavaScript (ES6+)</li>
              <li className="hover:text-blue-400 transition-colors hover:underline">React</li>
              <li className="hover:text-blue-400 transition-colors hover:underline">Node.js</li>
            </ul>
            <ul className="space-y-2">
              <li className="hover:text-blue-400 transition-colors hover:underline">HTML</li>
              <li className="hover:text-blue-400 transition-colors hover:underline">CSS</li>
              <li className="hover:text-blue-400 transition-colors hover:underline">Redux</li>
            </ul>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center mt-6 md:mt-0">
  <img
    src="https://images.pexels.com/photos/19312410/pexels-photo-19312410.jpeg"
    alt="profile"
    className="
      w-56 h-56 sm:w-56 sm:h-56 md:w-75 md:h-75
      rounded-lg border-2 border-transparent
      hover:border-blue-400 hover:scale-105
      transition-transform duration-300
      object-cover
    "
  />
</div>


      </div>
    </section>
  )
}

export default About
