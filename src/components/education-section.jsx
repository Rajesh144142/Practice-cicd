import React from 'react';
import Education from '../assets/images/rajesh.jpg';

const EducationSection = () => {
  return (
    <div className="min-h-screen  py-32 px-4">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Image section */}
        <div className="lg:col-span-1">
          <img 
            src={Education}
            alt="Education Profile" 
            className="w-full rounded-lg shadow-lg"
          />
        </div>
        
        {/* Cards grid section */}
        <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Computer Science Card */}
          <div className="bg-gradient-to-br from-[#1A2233] to-[#131A29] rounded-lg p-6 shadow-lg border border-opacity-20 border-blue-400">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">Computer Science</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Specialized in software development with focus on web technologies, algorithms, and data structures. Completed advanced coursework in machine learning and AI.
            </p>
          </div>

          {/* Technical Skills Card */}
          <div className="bg-gradient-to-br from-[#1A2233] to-[#131A29] rounded-lg p-6 shadow-lg border border-opacity-20 border-blue-400">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">Technical Skills</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Proficient in multiple programming languages including Python, JavaScript, and Java. Experienced with modern frameworks and cloud technologies.
            </p>
          </div>

          {/* Certifications Card */}
          <div className="bg-gradient-to-br from-[#1A2233] to-[#131A29] rounded-lg p-6 shadow-lg border border-opacity-20 border-purple-600">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">Certifications</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              AWS Certified Solutions Architect, Google Cloud Professional, and various programming language certifications demonstrating expertise in cloud and software development.
            </p>
          </div>

          {/* Projects Card */}
          <div className="bg-gradient-to-br from-[#1A2233] to-[#131A29] rounded-lg p-6 shadow-lg border border-opacity-20 border-blue-400">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">Projects</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Led multiple full-stack development projects, created machine learning models, and contributed to open-source projects focusing on web accessibility and performance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationSection;