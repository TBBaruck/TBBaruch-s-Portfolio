"use client"
import { useState } from 'react';

const About = () => {
  const [showSkills, setShowSkills] = useState(true);

  const toggleSkills = () => {
    setShowSkills(!showSkills);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-orange-700 mt-8">About Me</h1>
        <p className="text-xl text-gray-600">I'm a passionate web developer with expertise in <br/>
        HTML, CSS, JavaScript, React, and Next.js.</p>
      </section>
      <section className="flex flex-col md:flex-row items-start">
        <div className="md:mr-8 mb-8 md:mb-0">
          <img src="/3d programmer.png" alt="Profile" className="w-48 h-48 rounded-full shadow-md" />
        </div>
        <div className="max-w-lg">
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">My Journey</h2>
          <p className="text-lg text-gray-600 mb-6">
            I started my journey in web development by attending a coding bootcamp where I learned the fundamentals of web development.
            Over the years, I have honed my skills in modern web technologies and built several projects.
          </p>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Skills</h2>
          <button onClick={toggleSkills} className="bg-blue-500 text-white py-2 px-4 rounded mb-4 hover:bg-blue-700 transition duration-300">
            {showSkills ? 'Hide Skills' : 'Show Skills'}
          </button>
          {showSkills && (
            <ul className="list-none p-0">
              <li className="bg-gray-100 p-2 mb-2 rounded text-gray-800">HTML</li>
              <li className="bg-gray-100 p-2 mb-2 rounded text-gray-800">CSS</li>
              <li className="bg-gray-100 p-2 mb-2 rounded text-gray-800">JavaScript</li>
              <li className="bg-gray-100 p-2 mb-2 rounded text-gray-800">React</li>
              <li className="bg-gray-100 p-2 mb-2 rounded text-gray-800">Next.js</li>
            </ul>
          )}
        </div>
      </section>
    </div>
  );
};

export default About;
