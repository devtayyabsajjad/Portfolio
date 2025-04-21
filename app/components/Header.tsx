"use client"

import { useState, useEffect } from "react"
import { Menu, X, Download } from "lucide-react"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed w-full bg-white z-50 transition-all duration-300 ${
        scrolled ? "bg-opacity-90 backdrop-blur-md shadow-sm py-2" : "bg-opacity-80 py-4"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-base sm:text-lg font-semibold text-blue-500">
            TAYYAB SAJJAD
          </a>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm lg:text-base text-gray-600 hover:text-blue-500 transition-colors"
              >
                {item}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/19wdRuynA-dkk_ex_bYbhqBPCKWe6hAbd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1.5 px-3 lg:py-2 lg:px-4 rounded-full transition-colors text-xs lg:text-sm"
            >
              <Download className="w-3 h-3 lg:w-4 lg:h-4 mr-1 inline-block" />
              Download CV
            </a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-600">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-gray-600 hover:text-blue-500 transition-colors text-sm py-1"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
            <a
              href="https://drive.google.com/file/d/19wdRuynA-dkk_ex_bYbhqBPCKWe6hAbd/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition-colors text-sm"
            >
              <Download className="w-3 h-3 mr-1 inline-block" />
              Download CV
            </a>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
