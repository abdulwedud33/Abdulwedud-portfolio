"use client"

import { Card } from "@/components/ui/card"
import { Award, BookOpen, Heart } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: Award,
    title: "Experience",
    description: "5+ years building web applications",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Computer Science degree",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Creating delightful user experiences",
  },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Get to know more about who I am and what I do
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-20" />
              <img
                src="/professional-developer-portrait.png"
                alt="Profile"
                className="relative rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-border"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground">
              I'm a passionate Full Stack Developer with over 5 years of experience in building modern web applications.
              I specialize in React, Next.js, and Node.js, creating scalable and performant solutions that solve
              real-world problems.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you can find me contributing to open-source projects, writing technical articles, or
              exploring new technologies. I believe in continuous learning and staying up-to-date with the latest
              industry trends.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                >
                  <Card className="p-6 text-center glass hover:shadow-lg transition-shadow">
                    <highlight.icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                    <h3 className="font-semibold mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
