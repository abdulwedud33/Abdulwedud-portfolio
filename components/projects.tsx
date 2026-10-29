"use client"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

const projects = [
  {
    title: "E-Commerce Landing Page",
    description: "A modern e-commerce landing page focused on visual polish, motion, and a clear shopping journey.",
    image: "/e-commerce landing page.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/abdulwedud33/nike-landing-page",
    demo: "https://nike-landing-page-ashy-five.vercel.app",
  },
  {
    title: "Intern Finder App",
    description: "A platform connecting students looking for internships with companies looking for emerging talent.",
    image: "/intern finder app.png",
    tags: ["React", "TypeScript", "Tailwind", "shadcn-ui", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abdulwedud33/intern-finder-v2",
    demo: "https://intern-finder-alpha.vercel.app",
  },
  {
      title: "Grade 12 Entrance Self-Test System",
      description: "A modern web-based self-test platform for Federal Technical and Vocational Training Institute (FTVTI) students. Allows students to practice multiple-choice exit exams by year with instant right/wrong feedback, real-time results, and admin management.",
      image:"/ftvti-self-test.png",
      tags: ["Next.js", "TypeScript", "Express.js", "Prisma", "PostgreSQL", "Tailwind CSS", "shadcn/ui"],
      github: "https://github.com/abdulwedud33/Entrance_self_test.git",
      demo: "https://entrance-self-test.vercel.app/"
  },
  {
    title: "Weather App",
    description: "A focused weather experience with a clean interface, responsive layouts, and live API data.",
    image: "/weather app.png",
    tags: ["Next.js", "React", "TypeScript", "Tailwind", "Weather API"],
    github: "https://github.com/abdulwedud33/weather-app",
    demo: "https://weather-app-cyan-ten-40.vercel.app",
  },
  {
    title: "Task Management App with google authentication",
    description:
      "Collaborative task management application with real-time updates and advanced filtering with google authentication.",
    image: "/task management app.png",
    tags: ["React", "Node.js", "Tailwind", "PostgreSQL"],
    github: "https://github.com/abdulwedud33/Advanced-todo",
    demo: "https://advanced-todo-sable.vercel.app",
  },
]

export function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-24 sm:py-32" ref={ref}>
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-14 grid gap-6 text-left sm:grid-cols-[0.3fr_1fr]"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">03 / Selected work</p>
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-5xl">Projects with a point of view.</h2>
            <p className="mt-4 max-w-xl text-base text-muted-foreground">A selection of shipped experiments and products. Explore the live work or inspect the code behind it.</p>
          </div>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
            >
              <Card className="glass flex h-full flex-col overflow-hidden border-border">
                <div className="group relative overflow-hidden border-b border-border bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <CardTitle className="text-xl leading-tight">{project.title}</CardTitle>
                    <span className="text-xs font-mono text-muted-foreground">0{index + 1}</span>
                  </div>
                  <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2 border-t border-border pt-4">
                  <Button variant="outline" size="sm" className="flex-1 bg-transparent" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
