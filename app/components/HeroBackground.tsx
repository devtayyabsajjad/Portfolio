"use client"

import { useEffect, useRef } from "react"

const HeroBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)

    // Create circles
    const circles: Circle[] = []
    const numberOfCircles = 5

    class Circle {
      x: number
      y: number
      radius: number
      opacity: number
      growing: boolean

      constructor(x: number, y: number, radius: number) {
        this.x = x
        this.y = y
        this.radius = radius
        this.opacity = 0.1
        this.growing = true
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.strokeStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.lineWidth = 1
        ctx.stroke()
      }

      update() {
        if (this.growing) {
          this.radius += 0.5
          this.opacity -= 0.0005
          if (this.radius > 300) {
            this.growing = false
          }
        } else {
          this.radius += 0.5
          this.opacity -= 0.0005
          if (this.opacity <= 0) {
            this.radius = 0
            this.opacity = 0.1
            this.growing = true
          }
        }
        this.draw()
      }
    }

    // Create dots
    const dots: Dot[] = []
    const numberOfDots = 50

    class Dot {
      x: number
      y: number
      size: number
      opacity: number

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.1
      }

      draw() {
        if (!ctx) return
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`
        ctx.fill()
      }
    }

    // Initialize circles
    for (let i = 0; i < numberOfCircles; i++) {
      const x = canvas.width * 0.7
      const y = canvas.height * 0.5
      const radius = i * 50
      circles.push(new Circle(x, y, radius))
    }

    // Initialize dots
    for (let i = 0; i < numberOfDots; i++) {
      dots.push(new Dot())
    }

    const animate = () => {
      if (!ctx) return

      // Clear canvas with gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)
      gradient.addColorStop(0, "#a5d8ff")
      gradient.addColorStop(1, "#e7f5ff")
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update circles
      circles.forEach((circle) => {
        circle.update()
      })

      // Draw dots
      dots.forEach((dot) => {
        dot.draw()
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 -z-10" />
}

export default HeroBackground
