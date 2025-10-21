import React from "react";
import project01 from "../../assets/project/01project.png";
import { FaGithub } from "react-icons/fa6";


function Work() {
  return (
    <section
      id="work"
      className="min-h-screen text-stone-400 px-4 md:px-16 lg:px-32 py-16 mb-16"
    >
      {/* Section Title */}
      <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
        <span className="text-blue-500">02. </span> Some Things I have Built ---------------
      </h2>

      {/* Project List */}
      <ul className="space-y-12">
        {/* Project 1 */}
        <li className="flex flex-col md:flex-row items-center gap-8 bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          {/* Image */}
          <div className="flex-1">
            <img
              onClick={() => window.open("https://leet-matric-six.vercel.app/", "_blank")}
              src={project01}
              alt="Leet Matrix Project"
              className="rounded-lg w-full object-cover max-h-80 hover:scale-105 hover:opacity-55 transition-transform duration-300 "
            />
          </div>

          {/* Text */}
          <div className="flex-1 space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
              Leet Matrix
            </h3>
            <p className="text-sm md:text-base text-gray-300">
              A web app built with React and Tailwind that helps users track and
              visualize their coding progress. It integrates with LeetCode APIs
              and offers charts, badges, and personalized streak analytics.
            </p>
            <div className="flex space-x-4 text-sm text-blue-400">
              <span>HTML</span>
              <span>CSS</span>
              <span>Javascript</span>
            </div>
            <div className="flex items-center mt-4 space-x-4">
              <a
                href="https://leet-matric-six.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-300"
              >
                View Project
              </a>
              <a
                href="https://github.com/atharva0773/leetMatric"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>


          </div>
        </li>

        {/* Project 2 */}
        <li className="flex flex-col md:flex-row items-center gap-8 bg-gray-900 p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
          {/* Image */}
          <div className="flex-1">
            <img
              src="https://via.placeholder.com/400"
              alt="Project 2"
              className="rounded-lg w-full object-cover max-h-80 hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col justify-between space-y-4">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-blue-400">
                Fire Mail
              </h3>
              <p className="text-sm md:text-base text-gray-300 mt-2">
                Another amazing React project with responsive design and elegant
                animations built using modern frontend tools.
              </p>
              <div className="flex space-x-4 mt-2 text-sm text-blue-400">
                <span>React</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="flex items-center mt-4 space-x-4">
              <a
                href="https://github.com/atharva0773/fire-mail"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-4 py-2 border border-blue-400 rounded-md hover:bg-blue-400 hover:text-white transition-colors duration-300"
              >
                View Project
              </a>
              <a
                href="https://github.com/atharva0773/fire-mail"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-blue-400 transition-colors"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>
        </li>

      </ul>
    </section>
  );
}

export default Work;
