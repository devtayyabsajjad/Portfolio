"use client"

import { useState, useEffect } from "react"

const phrases = [
  "IT Professional 💻",
  "4x Intel Hackathon Winner 🏆",
  "Full Stack Developer 🚀",
  "AI & ML Engineer 🤖",
  "Tech Trainer & Mentor 📚",
  "Problem Solver & Innovator 💡",
]

export default function TypewriterText() {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0)
  const [currentText, setCurrentText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const currentPhrase = phrases[currentPhraseIndex]

        if (!isDeleting) {
          setCurrentText(currentPhrase.substring(0, currentText.length + 1))

          if (currentText === currentPhrase) {
            setIsDeleting(true)
            setTimeout(() => {}, 2000) // Pause at complete word
          }
        } else {
          setCurrentText(currentPhrase.substring(0, currentText.length - 1))

          if (currentText === "") {
            setIsDeleting(false)
            setCurrentPhraseIndex((currentPhraseIndex + 1) % phrases.length)
          }
        }
      },
      isDeleting ? 100 : 200,
    )

    return () => clearTimeout(timeout)
  }, [currentText, currentPhraseIndex, isDeleting])

  return (
    <div className="h-[30px] text-blue-500">
      {currentText}
      <span className="animate-blink">|</span>
    </div>
  )
}
