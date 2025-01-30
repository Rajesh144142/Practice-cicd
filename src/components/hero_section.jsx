import Rajesh from '../assets/images/rajesh.jpg'
function Hero() {
  return (

    <div className="font-poppins bg-black relative">
      <div id="container" class="p-20 w-auto flex px-24 justify-center relative">

        <div id="container" class="p-20 sm:p-16 md:p-20 lg:p-24 xl:p-20 w-auto flex flex-col md:flex-row px-4 sm:px-8 md:px-24 lg:px-24 xl:px-24 relative">
          <div class="mr-10">
            <img
              class="rounded-lg min-w-[100px] w-full h-auto md:w-auto md:h-auto"
              src={Rajesh}
              alt="image of myself"
            />
          </div>
          <div class="w-full sm:w-[70%] md:w-[60%] lg:w-[50%]">
            <h1 class="text-white font-bold text-3xl mt-6 mb-8">
              Hey it's me, Rajesh Kumar Halder
            </h1>

            <p class="text-white w-full sm:w-[35rem] md:w-[30rem] lg:w-[25rem] mb-10">
              I am a Full-Stack Developer with 1 year of experience, specializing in the MERN stack, PostgreSQL, and Generative AI. I have built end-to-end scalable solutions, implemented AI-driven functionalities using tools like LangChain and Crew AI, and optimized backend systems.
              My work includes:
              Developing full-stack applications with MongoDB, Express.js, React, and Node.js.
              Building and optimizing RESTful APIs and robust database solutions with PostgreSQL.
              Leveraging AWS Amplify, S3, Lambda, and API Gateway for cloud-based applications.
              Creating interactive data apps with Streamlit.
              I’m passionate about solving real-world problems through innovative development and AI integration.
            </p>

            <div id="social" class="flex flex-wrap justify-start items-center gap-4">
              <a rel="noopener" target="_blank" href="https://github.com/Rajesh144142" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/1f465c47-4849-4935-91f4-29135d8607af/github2.svg" width="20px" height="20px" alt="Github" />
                <span>Visit my Github</span>
              </a>
              <a rel="noopener" target="_blank" href="https://www.linkedin.com/in/rajesh-kumar-halder-141666203/" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/linkedin.svg" width="20px" height="20px" alt="LinkedIn" />
                <span>Follow me on Linkedin</span>
              </a>
              <a rel="noopener" target="_blank" href="https://x.com/rajesh_tech0735" class="bg-gray-800 rounded-lg p-5 w-64 flex items-center gap-2 text-white">
                <img class="mr-2 hover:scale-105 transition duration-300 ease-in-out" src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/" width="20px" height="20px" alt="Twitter" />
                <span>Follow me on Twitter</span>
              </a>
            </div>



          </div>
        </div>
      </div>

    </div>
  )
}
export default Hero;