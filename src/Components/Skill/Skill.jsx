import React from 'react';

function Skill() {
  return (
    <section id="skill" className="min-h-screen text-stone-400 px-4 md:px-16 lg:px-32 py-16 mb-16">
      
      {/* Section Title */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-8">
        <span className="text-blue-500">03. </span> Skills
      </h2>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        
        {/* Frontend */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Frontend</h3>
          <ul className="space-y-2 text-stone-300">
            <li className="hover:text-blue-400 transition-colors">ReactJS</li>
            <li className="hover:text-blue-400 transition-colors">HTML</li>
            <li className="hover:text-blue-400 transition-colors">CSS</li>
            <li className="hover:text-blue-400 transition-colors">Redux</li>
            <li className="hover:text-blue-400 transition-colors">JavaScript (ES6+)</li>
             <li className="hover:text-blue-400 transition-colors">Responsive Design</li>
            
          </ul>
        </div>

        {/* Backend */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Backend</h3>
          <ul className="space-y-2 text-stone-300">
            <li className="hover:text-blue-400 transition-colors">Node.js</li>
            <li className="hover:text-blue-400 transition-colors">Express</li>
            <li className="hover:text-blue-400 transition-colors">MongoDB</li>
            <li className="hover:text-blue-400 transition-colors">SQL </li>
          </ul>
        </div>

        {/* Other Skills */}
        <div className="bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          <h3 className="text-xl font-semibold text-blue-400 mb-4">Other</h3>
          <ul className="space-y-2 text-stone-300">
            
            <li className="hover:text-blue-400 transition-colors">Problem Solving (LeetCode, Codechef, HackerRank)</li>
           
            <li className="hover:text-blue-400 transition-colors">Version Control (Git,Github)</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Skill;
