"use client"

import { Card } from "@/components/ui/card"
import { Award, BookOpen, Code, Heart, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const highlights = [
  {
    icon: Award,
    title: "Experience",
    description: "2+ years building web applications",
  },
  {
    icon: BookOpen,
    title: "Education",
    description: "Computer Science and Engineering at ASTU",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "Creating delightful user experiences",
  },
]

const skills = [
  { category: "Frontend", tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { category: "Backend", tech: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"] },
  { category: "Tools", tech: ["Git", "Docker", "VS Code", "Figma", "Vercel"] },
]

export function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="about" className="py-12 sm:py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center order-1 lg:order-1"
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <img
                src="/proffessional web developer portrait.jpeg"
                alt="Abdulwedud Yassin - Full Stack Web Developer"
                className="relative rounded-3xl w-80 h-80 sm:w-96 sm:h-96 object-cover border-2 border-blue-500/30 shadow-2xl"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8 order-2 lg:order-2"
          >
            <div className="space-y-5">
              <h3 className="text-2xl sm:text-3xl text-center font-bold text-foreground">Who I Am</h3>
              <p className="text-lg text-center leading-relaxed text-muted-foreground">
                I'm a passionate Full Stack Web Developer with over 2 years of experience in building modern web
                applications. I specialize in React, Next.js, and Node.js, creating scalable and performant solutions
                that solve real-world problems.
              </p>
              <p className="text-lg text-center leading-relaxed text-muted-foreground">
                When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
                or exploring new technologies. I believe in continuous learning and staying up-to-date with the latest
                industry trends.
              </p>
            </div>

            {/* Highlights Grid */}
            <motion.div
              className="grid sm:grid-cols-3 gap-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {highlights.map((highlight) => (
                <motion.div key={highlight.title} variants={itemVariants}>
                  <Card className="p-6 text-center border border-blue-500/20 hover:border-blue-500/50 hover:bg-blue-50/5 transition-all duration-300 backdrop-blur group cursor-default hover:shadow-lg hover:shadow-blue-500/10">
                    <div className="flex justify-center mb-3">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:scale-125 transition-transform duration-300">
                        <highlight.icon className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>
                    <h3 className="font-semibold text-base mb-2">{highlight.title}</h3>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
