"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { ExternalLink, GitlabIcon as GitHub } from "lucide-react"

const Projects = () => {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const firstRowRef = useRef<HTMLDivElement>(null)
  const secondRowRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      name: "Human to Mars",
      description:
        "Innovative project exploring human colonization of Mars, addressing challenges in space travel and habitation.",
      technologies: ["Space Tech", "AI", "Sustainability"],
      github: "https://github.com/devtayyabsajjad/Humans-to-Mars",
      demo: "https://marsapp.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/b4c44e11-8cc9-4c47-b084-cded305deb9e/generations/4c1a6173-6357-4d41-8ae2-ff50c3fdbdb4/AlbedoBase_XL_A_highresolution_photorealistic_landscape_of_the_0.jpg",
    },
    {
      name: "AI Post Creator",
      description: "AI-powered content generator with multi-agent system and news validation framework.",
      technologies: ["Python", "Streamlit", "AI", "API"],
      github: "https://github.com/muhammadibrahim313/AI-Post-Creator2",
      demo: "https://ai-post-creator2-btaji.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/b4c44e11-8cc9-4c47-b084-cded305deb9e/generations/1854a608-378e-46f4-ae14-dcf1a5a17170/AlbedoBase_XL_A_visually_striking_banner_image_for_the_AI_Post_0.jpg",
    },
    {
      name: "EduNexus 2.0",
      description: "AI-powered educational platform integrating IBM Watson Assistant for personalized learning.",
      technologies: ["IBM Watson", "AI", "NLP"],
      github: "https://github.com/devtayyabsajjad/EDUNEXUS-2.0",
      demo: "https://edunexus-2.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/b4c44e11-8cc9-4c47-b084-cded305deb9e/generations/ee97b67e-ab31-4329-8bc2-6e23bf3d86ef/AlbedoBase_XL_A_futuristic_digital_painting_of_an_AIpowered_vi_2.jpg",
    },
    {
      name: "GovEase",
      description: "A platform connecting citizens with essential government information and services.",
      technologies: ["AI", "Python", "Streamlit"],
      github: "https://github.com/devtayyabsajjad/Llama_impact-3.2",
      demo: "https://llamaimpact-32-gjlgkbvyt5hsgjnay5yawz.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/b4c44e11-8cc9-4c47-b084-cded305deb9e/generations/45551569-3c97-4c98-824d-6421aa9bd6dc/AlbedoBase_XL_A_modern_visually_appealing_and_minimalist_desig_2.jpg",
    },
    {
      name: "WP Maintenance Pro",
      description: "WordPress plugin for streamlined site maintenance with customization options.",
      technologies: ["PHP", "WordPress", "MySQL"],
      github: "https://github.com/devtayyabsajjad/WP-Maintenance-Pro",
      demo: "https://drive.google.com/file/d/1JwX1-eXP11RwX_6MLHP37jlweTXAobxb/view?usp=sharing",
      image:
        "https://cdn.leonardo.ai/users/d5ae6db6-c0db-4343-994e-994a0edd0dde/generations/2e811366-b9bf-4184-98ea-046042598e66/AlbedoBase_XL_A_clean_modern_and_wellbalanced_interface_for_th_0.jpg",
    },
    {
      name: "Pulse and Prism",
      description: "Automates creation of high-quality, short-form video content for social media platforms.",
      technologies: ["AI", "Video Production", "NLP"],
      github: "https://github.com/bilal77511/aria-and-allegro-hackathon",
      demo: "https://pulse-and-prism.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/d5ae6db6-c0db-4343-994e-994a0edd0dde/generations/eeed2be3-8344-46f4-ad55-e4ee41d718eb/AlbedoBase_XL_A_sleek_and_modern_interface_for_the_Pulse_and_P_0.jpg",
    },
    {
      name: "Legal Buddy",
      description: "AI-driven legal assistant automating document review and case analysis.",
      technologies: ["AI", "NLP", "OCR", "MongoDB"],
      github: "https://github.com/Ahmad-Fakhar/LegalBuddy_o1",
      demo: "https://legalbuddyo1.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/7e9e2c74-137e-4d06-ad43-401a2a0c7509/generations/eda32864-8859-4a7c-81f6-b6924c9e62d0/AlbedoBase_XL_A_technologically_advanced_Legal_Buddy_case_anal_0.jpg",
    },
    {
      name: "DataVue",
      description: "AI-powered data science platform simplifying EDA and data cleaning.",
      technologies: ["Python", "AI", "Data Science", "Streamlit"],
      github: "https://github.com/muhammadibrahim313/DataVue",
      demo: "https://data-vue.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/7e9e2c74-137e-4d06-ad43-401a2a0c7509/generations/06f097ca-282e-4be2-8174-9fc5dfc6745d/AlbedoBase_XL_A_clean_intuitive_interface_for_the_DataVue_plat_0.jpg",
    },
    {
      name: "Period Care",
      description: "Holistic health platform supporting menstrual cycle with personalized insights.",
      technologies: ["React", "Next.js", "Firebase", "Google Maps API"],
      github: "https://github.com/devtayyabsajjad/PeriodCare",
      demo: "https://lablab.ai/event/replit-and-cursor-hackathon/b-taji-force/period-care",
      image:
        "https://cdn.leonardo.ai/users/7e9e2c74-137e-4d06-ad43-401a2a0c7509/generations/84aad215-37ab-4251-8721-0ca67fee7efe/AlbedoBase_XL_Period_Care_Empowering_Womens_Health_Delicately_2.jpg",
    },
    {
      name: "Dr.Well",
      description: "AI-powered health dashboard for tracking vital health metrics.",
      technologies: ["Python", "Streamlit", "AI"],
      github: "https://github.com/devtayyabsajjad/dr_well",
      demo: "https://drwell.streamlit.app/",
      image:
        "https://cdn.leonardo.ai/users/7e9e2c74-137e-4d06-ad43-401a2a0c7509/generations/81b8f0e2-a218-4d2b-8b25-a5a9caab3a6a/AlbedoBase_XL_DrWell_an_innovative_AIpowered_health_dashboard_0.jpg",
    },
  ]

  // For mobile, display projects in a grid instead of scrolling rows
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  // Split projects into two rows for desktop
  const firstRowProjects = projects.slice(0, Math.ceil(projects.length / 2))
  const secondRowProjects = projects.slice(Math.ceil(projects.length / 2))

  useEffect(() => {
    // Only apply scrolling effect on desktop
    if (isMobile) return

    const container = containerRef.current
    const firstRow = firstRowRef.current
    const secondRow = secondRowRef.current

    if (container && firstRow && secondRow) {
      let animationFrameId: number
      let lastScrollPos = 0

      const animate = () => {
        if (!isPaused) {
          const currentScrollLeft = container.scrollLeft
          const maxScroll = container.scrollWidth - container.clientWidth

          if (currentScrollLeft !== lastScrollPos) {
            // User is scrolling
            lastScrollPos = currentScrollLeft
          } else {
            // Auto-scroll
            container.scrollLeft += 1
            if (container.scrollLeft >= maxScroll) {
              container.scrollLeft = 0
            }
          }
        }
        animationFrameId = requestAnimationFrame(animate)
      }

      animate()

      const handleMouseEnter = () => setIsPaused(true)
      const handleMouseLeave = () => setIsPaused(false)

      container.addEventListener("mouseenter", handleMouseEnter)
      container.addEventListener("mouseleave", handleMouseLeave)

      return () => {
        cancelAnimationFrame(animationFrameId)
        container.removeEventListener("mouseenter", handleMouseEnter)
        container.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [isPaused, isMobile])

  const ProjectCard = ({ project }: { project: (typeof projects)[0] }) => (
    <div className="w-full sm:w-[350px] md:w-[400px] flex-shrink-0 px-4 mb-8">
      <div className="relative group h-full">
        <div className="absolute inset-0 bg-blue-300 opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl rounded-2xl"></div>
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm relative z-10 transition-all duration-300 group-hover:shadow-lg h-full flex flex-col">
          <div className="mb-4 relative h-[180px] sm:h-[200px] md:h-[225px] rounded-xl overflow-hidden bg-gray-100">
            <Image src={project.image || "/placeholder.svg"} alt={project.name} layout="fill" objectFit="cover" />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900">{project.name}</h3>
          <p className="text-gray-600 mb-4 flex-grow text-xs sm:text-sm line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech, techIndex) => (
              <span
                key={techIndex}
                className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                  techIndex < 2 ? "bg-blue-100 text-blue-700" : "bg-green-100 text-green-700"
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>
          <div className="flex space-x-4">
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 text-xs sm:text-sm font-medium"
            >
              <ExternalLink size={16} className="mr-1" /> Demo
            </a>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500 hover:text-blue-600 text-xs sm:text-sm font-medium"
            >
              <GitHub size={16} className="mr-1" /> Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="projects" className="py-16 sm:py-20 px-4 sm:px-6 bg-white overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-gray-900">Projects</h2>

        {/* Mobile view - Grid layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.slice(0, 6).map((project, index) => (
            <ProjectCard key={`mobile-${index}`} project={project} />
          ))}
        </div>

        {/* Desktop view - Scrolling rows */}
        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div className="inline-flex">
              {/* First row - scrolls left to right */}
              <div className="mb-8">
                <div ref={firstRowRef} className="flex">
                  {[...firstRowProjects, ...firstRowProjects].map((project, index) => (
                    <ProjectCard key={`row1-${index}`} project={project} />
                  ))}
                </div>
              </div>

              {/* Second row - scrolls right to left */}
              <div>
                <div ref={secondRowRef} className="flex">
                  {[...secondRowProjects, ...secondRowProjects].map((project, index) => (
                    <ProjectCard key={`row2-${index}`} project={project} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <a
            href="https://github.com/devtayyabsajjad"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-colors text-sm sm:text-base"
          >
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects
