import Image from "next/image"
import TypewriterText from "./TypewriterText"
import HeroBackground from "./HeroBackground"
import { Brain, Code, Database, Lightbulb, School, PuzzleIcon } from "lucide-react"

const Hero = () => {
  // Define all expertise areas with their icons and positions
  const expertiseAreas = [
    {
      name: "Gen AI",
      icon: <Lightbulb className="text-emerald-500" size={20} />,
      bgColor: "bg-emerald-100",
      textColor: "text-emerald-500",
      position: "-top-4 left-1/4 -translate-x-1/2",
      mobileHidden: false,
    },
    {
      name: "AI & ML",
      icon: <Brain className="text-green-500" size={20} />,
      bgColor: "bg-green-100",
      textColor: "text-green-500",
      position: "-top-4 -right-4",
      mobileHidden: false,
    },
    {
      name: "Data Science",
      icon: <Database className="text-purple-500" size={20} />,
      bgColor: "bg-purple-100",
      textColor: "text-purple-500",
      position: "-bottom-4 -right-4",
      mobileHidden: false,
    },
    {
      name: "Web Dev",
      icon: <Code className="text-blue-500" size={20} />,
      bgColor: "bg-blue-100",
      textColor: "text-blue-500",
      position: "-bottom-4 left-1/4 -translate-x-1/2",
      mobileHidden: false,
    },
    {
      name: "Problem Solver",
      icon: <PuzzleIcon className="text-amber-500" size={20} />,
      bgColor: "bg-amber-100",
      textColor: "text-amber-500",
      position: "top-1/2 -translate-y-1/2 -left-32",
      mobileHidden: true,
    },
    {
      name: "Trainer",
      icon: <School className="text-indigo-500" size={20} />,
      bgColor: "bg-indigo-100",
      textColor: "text-indigo-500",
      position: "top-1/2 -translate-y-1/2 -right-24",
      mobileHidden: true,
    },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-6 overflow-hidden">
      <HeroBackground />

      <div className="w-full max-w-6xl mx-auto">
        {/* Mobile Layout */}
        <div className="md:hidden flex flex-col items-center">
          {/* Profile Image for Mobile */}
          <div className="relative mb-8 mt-12">
            {/* Glowing background effect */}
            <div className="absolute inset-0 rounded-full bg-blue-400 opacity-70 blur-3xl"></div>
            <div className="absolute inset-0 rounded-full bg-purple-400 opacity-50 blur-3xl -translate-x-5 translate-y-5"></div>
            <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 blur-3xl translate-x-5 translate-y-5"></div>

            {/* Profile image */}
            <div className="relative z-10 w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1725519960647-xrw3PDXs7jMkxDkebPS6IW1En4l2EY.jpeg"
                alt="Tayyab Sajjad"
                layout="fill"
                objectFit="cover"
                className="rounded-full"
              />
            </div>

            {/* Mobile Expertise Badges - Positioned in a circle around the profile image */}
            <div className="absolute -top-4 left-0 bg-white px-2 py-1 rounded-full shadow-lg flex items-center z-20">
              <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center mr-1">
                <Lightbulb className="text-emerald-500" size={14} />
              </div>
              <span className="font-medium text-gray-800 text-xs">Gen AI</span>
            </div>

            <div className="absolute -top-4 right-0 bg-white px-2 py-1 rounded-full shadow-lg flex items-center z-20">
              <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mr-1">
                <Brain className="text-green-500" size={14} />
              </div>
              <span className="font-medium text-gray-800 text-xs">AI & ML</span>
            </div>

            <div className="absolute -bottom-4 right-0 bg-white px-2 py-1 rounded-full shadow-lg flex items-center z-20">
              <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center mr-1">
                <Database className="text-purple-500" size={14} />
              </div>
              <span className="font-medium text-gray-800 text-xs">Data Science</span>
            </div>

            <div className="absolute -bottom-4 left-0 bg-white px-2 py-1 rounded-full shadow-lg flex items-center z-20">
              <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mr-1">
                <Code className="text-blue-500" size={14} />
              </div>
              <span className="font-medium text-gray-800 text-xs">Web Dev</span>
            </div>
          </div>

          {/* Text Content for Mobile */}
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">
              Let's Build <span className="text-blue-500">Innovative</span> Solutions Together
            </h1>

            <div className="mt-4 text-lg text-gray-600 flex justify-center">
              <TypewriterText />
            </div>

            <p className="mt-4 text-sm text-gray-600 max-w-md mx-auto">
              An IT professional and 4x Intel Hackathon winner with expertise in AI, ML, and full-stack development.
              Transforming complex challenges into elegant, efficient solutions.
            </p>

            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="https://topmate.io/tayyabsajjad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors text-sm"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                className="px-6 py-2.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-colors text-sm"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 min-h-[80vh]">
          {/* Left Content */}
          <div className="flex flex-col justify-center p-8 lg:p-16">
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Let's Build <span className="text-blue-500">Innovative</span> Solutions Together
            </h1>

            <div className="mt-6 text-xl text-gray-600">
              <TypewriterText />
            </div>

            <p className="mt-6 text-base text-gray-600">
              An IT professional and 4x Intel Hackathon winner with expertise in AI, ML, and full-stack development.
              Transforming complex challenges into elegant, efficient solutions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://topmate.io/tayyabsajjad"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-blue-500 text-white font-medium rounded-full hover:bg-blue-600 transition-colors"
              >
                Let's Talk
              </a>
              <a
                href="#projects"
                className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-full hover:bg-gray-100 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>

          {/* Right Content - Image with Glowing Effect */}
          <div className="relative flex items-center justify-center p-8">
            {/* Profile Image with Glowing Effect */}
            <div className="relative group">
              {/* Glowing background effect - increased opacity in static mode */}
              <div className="absolute inset-0 rounded-full bg-blue-400 opacity-70 blur-3xl group-hover:opacity-80 group-hover:blur-4xl transition-all duration-500 scale-85 group-hover:scale-100"></div>
              <div className="absolute inset-0 rounded-full bg-purple-400 opacity-50 blur-3xl group-hover:opacity-60 group-hover:blur-4xl transition-all duration-500 scale-90 group-hover:scale-110 -translate-x-10 translate-y-10"></div>
              <div className="absolute inset-0 rounded-full bg-green-400 opacity-50 blur-3xl group-hover:opacity-60 group-hover:blur-4xl transition-all duration-500 scale-90 group-hover:scale-110 translate-x-10 translate-y-10"></div>

              {/* Profile image */}
              <div className="relative z-10 w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1725519960647-xrw3PDXs7jMkxDkebPS6IW1En4l2EY.jpeg"
                  alt="Tayyab Sajjad"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>

              {/* Expertise Area Badges */}
              {expertiseAreas.map((area, index) => (
                <div
                  key={index}
                  className={`absolute ${area.position} bg-white px-3 md:px-4 py-2 rounded-full shadow-lg flex items-center transition-transform duration-300 hover:scale-110 z-20 ${
                    area.mobileHidden ? "hidden md:flex" : "flex"
                  }`}
                >
                  <div
                    className={`w-7 md:w-8 h-7 md:h-8 ${area.bgColor} rounded-full flex items-center justify-center mr-2`}
                  >
                    {area.icon}
                  </div>
                  <span className={`font-medium text-gray-800 text-sm md:text-base`}>{area.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
