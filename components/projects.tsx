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
    description:
      "A full-featured e-commerce landing page with a modern design and smooth animations.",
    image: "/e-commerce landing page.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/abdulwedud33/nike-landing-page",
    demo: "https://nike-landing-page-ashy-five.vercel.app",
  },
  {
    title: "Intern Finder App",
    description: "Analytics dashboard for social media management with data visualization and scheduling features.",
    image: "/intern finder app.png",
    tags: ["React", "TypeScript", "Tailwind", "shadcn-ui", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/abdulwedud33/intern-finder-v2",
    demo: "https://intern-finder-alpha.vercel.app",
  },
  {
    title: "Weather App",
    description: "AI-powered content generation tool using OpenAI API with custom templates and export functionality.",
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
    <section id="projects" className="py-20 sm:py-32" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of my recent work and side projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Card className="overflow-hidden glass h-full flex flex-col">
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription className="text-base">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="gap-2">
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
