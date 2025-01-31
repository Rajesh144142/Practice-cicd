import React from 'react';
import Rajesh from '../assets/images/rajesh.jpg'

const Hero = () => {
  return (
      <div className=" min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 py-18 lg:py-16">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image Section with Gradient Border */}
            <div className="relative group w-full lg:w-auto flex justify-center">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative">
                <img
                    src={Rajesh}
                    alt="Rajesh Kumar Halder"
                    className="rounded-lg w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] object-cover shadow-xl"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 space-y-6 text-center lg:text-left">
              <div className="space-y-2">
                <div className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="h-1 w-20 bg-gradient-to-r from-pink-600 to-purple-600"></div>
                  <span className="text-gray-400 text-sm">Full-Stack Developer</span>
                  <div className="h-1 w-20 bg-gradient-to-r from-pink-600 to-purple-600 block lg:hidden"></div>

                </div>
                <h1 className="text-4xl font-bold text-white">
                  Hey it's me,{' '}
                  <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Rajesh Kumar Halder
                </span>
                </h1>
              </div>

              <p className="text-gray-300 leading-relaxed max-w-2xl">
                I am a Full-Stack Developer with 1 year of experience in MERN, Fast Api and Generative AI.
                I build scalable applications, optimize APIs, and integrate AI using LangChain and Crew AI.
                My expertise includes AWS (Amplify, S3, Lambda, API Gateway) and interactive data apps with
                Streamlit. Passionate about solving real-world problems with innovation.
              </p>

              {/* Social Links with Hover Effects */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-4">
                <a
                    href="https://github.com/Rajesh144142"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gray-800 transform group-hover:bg-gray-700 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center lg:justify-start gap-3">
                    <img
                        src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg"
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        alt="Github"
                    />
                    <span className="text-white text-sm">Github</span>
                  </div>
                </a>

                <a
                    href="https://www.linkedin.com/in/rajesh-kumar-halder-141666203/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gray-800 transform group-hover:bg-gray-700 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center lg:justify-start gap-3">
                    <img
                        src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg"
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        alt="LinkedIn"
                    />
                    <span className="text-white text-sm">LinkedIn</span>
                  </div>
                </a>

                <a
                    href="https://x.com/rajesh_tech0735"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative px-6 py-3 rounded-lg overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gray-800 transform group-hover:bg-gray-700 transition-all duration-300"></div>
                  <div className="relative flex items-center justify-center lg:justify-start gap-3">
                    <img
                        src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                        className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                        alt="Twitter"
                    />
                    <span className="text-white text-sm">Twitter</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;