"use client"

import { Card } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const experiences = [
  {
    company: "Impact Makers Foundation",
    role: "Full Stack Web Developer",
    period: "3 months",
    description:
      "Built a platform for students to find internships and for companies to find interns.",
  },
  {
    company: "Adama Science and Technology University",
    role: "Student",
    period: "2023 - Present",
    description:
      "Studying Computer Science and Engineering at ASTU.",
  }
]

export function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-20 sm:py-32 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My professional journey and career highlights
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.company}
                  initial={{ opacity: 0, x: -50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex items-start gap-6">
                    <div className="hidden md:flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground shrink-0 relative z-10">
                      <Briefcase className="h-6 w-6" />
                    </div>
                    <Card className="flex-1 glass p-6">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2 gap-2">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <span className="text-sm text-muted-foreground font-mono">{exp.period}</span>
                      </div>
                      <p className="text-primary font-semibold mb-3">{exp.company}</p>
                      <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
