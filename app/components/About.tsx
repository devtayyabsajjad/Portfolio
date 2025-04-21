const About = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">About Me</h2>
        <div className="relative group">
          <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl rounded-3xl"></div>
          <div className="bg-blue-50 p-6 sm:p-8 rounded-3xl shadow-lg relative z-10 transition-all duration-300 group-hover:shadow-2xl">
            <div className="space-y-4 sm:space-y-6">
              {/* Desktop and Tablet Version */}
              <div className="hidden md:block">
                <p className="text-base lg:text-lg text-gray-700">
                  I'm Tayyab Sajjad, an IT graduate and 5x Intel Hackathon winner with expertise in AI, ML, and
                  full-stack development. I've participated in 15+ Hackathons on platforms like Lablab ai, Devpost and
                  Generative AI.
                </p>
                <p className="text-base lg:text-lg text-gray-700 mt-4">
                  My passion lies in leveraging AI and data science to create innovative solutions that address
                  real-world challenges. With hands-on experience in web development, I enjoy building seamless,
                  user-centric applications that merge technology and creativity.
                </p>
                <p className="text-base lg:text-lg text-gray-700 mt-4">
                  As a technical writer and blogger, I've authored 50+ SEO-optimized blogs on data science, machine
                  learning, and generative AI. I'm also a trainer and moderator at iCodeGuru, where I deliver advanced
                  Python programming sessions and mentor students on their data science journey.
                </p>
              </div>

              {/* Mobile Version */}
              <div className="md:hidden">
                <p className="text-sm sm:text-base text-gray-700">
                  I'm Tayyab Sajjad, an IT graduate and 5x Intel Hackathon winner with expertise in AI & ML. I
                  specialize in building AI-driven solutions and data-centric applications that tackle real-world
                  challenges. As a technical writer and trainer at iCodeGuru, I share my knowledge through blogs and
                  mentoring sessions, helping others start their data science journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
