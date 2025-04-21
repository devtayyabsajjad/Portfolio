"use client"

import { useRef, useEffect, useState } from "react"
import { Trophy, Star, Brain, Award, Code } from "lucide-react"

const Achievements = () => {
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const achievementsRef = useRef<HTMLDivElement>(null)

  const achievements = [
    {
      title: "Hackathon Champion",
      icon: Trophy,
      details: [
        "🏆 1st place nationally, 2nd globally - 'Dr. Well' healthcare project",
        "🏆 1st place - 'Period Care' healthcare project",
        "🥈 2nd place - Wordsprint Hackathon",
        "🥈 2nd place - Humans to Mars Hackathon",
      ],
      color: "from-yellow-400 to-yellow-600",
    },
    {
      title: "Advent of Code 2024",
      icon: Star,
      details: [
        "🌍 Global Ranking: 36th overall",
        "🇵🇰 National Ranking: 4th in Pakistan",
        "🧩 Daily Challenge: Solved 1 problem (2 parts) for 25 consecutive days",
        "🎯 Elite Performance: Showcased exceptional problem-solving skills",
      ],
      color: "from-purple-400 to-purple-600",
    },
    {
      title: "MIT Informatics Winter Contest 2025",
      icon: Brain,
      details: [
        "🌍 Global Ranking: 66th among 500+ teams",
        "✅ Problem Solving: Solved 5/9 problems with a perfect approach",
        "💯 Score: 550/900 points",
      ],
      color: "from-green-400 to-green-600",
    },
    {
      title: "Coding Competitions",
      icon: Code,
      details: [
        "🏆 Participated in Meta Hacker Cup 2024",
        "🌐 Competed in Google Code Jam 2023",
        "💻 Demonstrated advanced problem-solving and algorithmic skills",
      ],
      color: "from-blue-400 to-blue-600",
    },
    {
      title: "Certifications",
      icon: Award,
      details: [
        "🎓 Generative AI Application Developer - Pak Angels (2025)",
        "🎓 Large Language Models - Google (2023)",
        "🎓 Generative AI Fundamentals - Google (2023)",
        "🎓 WordPress and Elementor - Udemy (2023)",
      ],
      color: "from-red-400 to-red-600",
    },
  ]

  // Check if we're on mobile
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768

  useEffect(() => {
    // Only apply scrolling effect on desktop
    if (isMobile) return

    const container = containerRef.current
    const achievementsEl = achievementsRef.current

    if (container && achievementsEl) {
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

  const AchievementCard = ({ achievement }: { achievement: (typeof achievements)[0] }) => {
    const Icon = achievement.icon
    return (
      <div className="w-full sm:w-72 md:w-80 flex-shrink-0 px-4 mb-6">
        <div className="relative group h-full">
          <div
            className={`absolute inset-0 bg-gradient-to-r ${achievement.color} opacity-0 group-hover:opacity-75 transition-opacity duration-300 blur-xl rounded-3xl`}
          ></div>
          <div className="bg-white p-4 sm:p-6 rounded-3xl shadow-lg relative z-10 transition-all duration-300 group-hover:shadow-2xl h-full">
            <div className="flex items-center mb-4">
              <div className={`p-2 sm:p-3 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                <Icon size={20} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold ml-3 sm:ml-4 text-gray-900">{achievement.title}</h3>
            </div>
            <ul className="space-y-2">
              {achievement.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="flex items-start">
                  <span className="mr-2 text-blue-500">•</span>
                  <span className="text-sm sm:text-base text-gray-600">{detail}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }

  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-gray-900">
          Achievements & Recognition
        </h2>

        {/* Mobile view - Grid layout */}
        <div className="md:hidden grid grid-cols-1 sm:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <AchievementCard key={`mobile-${index}`} achievement={achievement} />
          ))}
        </div>

        {/* Desktop view - Scrolling layout */}
        <div className="hidden md:block">
          <div
            ref={containerRef}
            className="relative overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            <div ref={achievementsRef} className="flex" style={{ width: `${achievements.length * 2 * 320}px` }}>
              {[...achievements, ...achievements].map((achievement, index) => (
                <AchievementCard key={index} achievement={achievement} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
            <div className="px-6 sm:px-8 py-2 sm:py-3 bg-white rounded-full">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-semibold text-sm sm:text-base">
                Continuously Growing & Achieving
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Achievements
