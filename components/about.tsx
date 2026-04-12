"use client"

import { Card } from "@/components/ui/card"
import { Award, BookOpen, Code, Heart, Zap } from "lucide-react"
import { motion, useInView } from "framer-motion"
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

  const isInView = useInView(ref, {
    once: true,
    margin: "-100px",
  })

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section
      id="about"
      ref={ref}
      className="py-12 sm:py-20 relative overflow-hidden"
      aria-label="About section"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-balance tracking-tight">
            About Me
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full" />
        </motion.div>

        {/* Main Content Grid */}
        <div className="flex items-center justify-center max-w-6xl mx-auto mb-14">
          {/* Image Section (reserved for future use) */}

          {/* Content Section */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-10 order-2 lg:order-2 w-full"
          >
            <div className="flex justify-center">
              <div className="space-y-6 max-w-2xl text-center px-4">
                <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
                  Who I Am
                </h3>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate Full Stack Web Developer with over 2 years of experience in building modern web
                  applications. I specialize in React, Next.js, and Node.js, creating scalable and performant solutions
                  that solve real-world problems.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  When I'm not coding, you can find me contributing to open-source projects, writing technical articles,
                  or exploring new technologies. I believe in continuous learning and staying up-to-date with the latest
                  industry trends.
                </p>
              </div>
            </div>

            {/* Highlights Grid */}
            <motion.div
              className="grid sm:grid-cols-3 gap-5"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <Card className="p-6 text-center border border-blue-500/20 hover:border-blue-500/60 hover:bg-blue-50/5 transition-all duration-300 backdrop-blur group cursor-default hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover:scale-125 group-hover:rotate-3 transition-transform duration-300">
                        <highlight.icon className="w-6 h-6 text-blue-400" />
                      </div>
                    </div>

                    <h3 className="font-semibold text-base mb-2">
                      {highlight.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Skills Section (kept and enhanced for future UI use) */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              transition={{ delay: 0.3 }}
              className="pt-6"
            >
              <div className="grid sm:grid-cols-3 gap-6">
                {skills.map((skill) => (
                  <div key={skill.category} className="text-center space-y-2">
                    <h4 className="font-semibold text-lg text-foreground">
                      {skill.category}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {skill.tech.join(" • ")}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  )
}
