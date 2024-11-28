import Link from "next/link"
import Image from "next/image"
import { Github } from 'lucide-react'
import file from '../../../public/file.svg'
const projects = [
  {
    title: "Project 1",
    description: "This is a description of Project 1. It&#39;s a web application built with React and Node.js.",
    image: "/placeholder.svg",
    github: "https://github.com/username/project-1",
    technologies: ["React", "Node.js", "Express", "MongoDB"]
  },
  {
    title: "Project 2",
    description: "This is a description of Project 2. It&#39;s a mobile app developed using React Native.",
    image:file,
    github: "https://github.com/username/project-2",
    technologies: ["React Native", "Firebase", "Redux"]
  }
]

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div key={project.title} className="group hover:bg-slate-900 rounded-lg  ">
            <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg border bg-card  ">
              <div className="absolute top-0 left-0 right-0 h-6 bg-card border-b flex items-center px-2 gap-1">
                <div className="w-2 h-2 rounded-full bg-card-foreground/20" />
                <div className="w-2 h-2 rounded-full bg-card-foreground/20" />
                <div className="w-2 h-2 rounded-full bg-card-foreground/20" />
              </div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-lg font-semibold mb-2  ">
              {project.title}
            </h2>
            <p className="text-muted-foreground mb-3  text-sm leading-relaxed line-clamp-3">
              {project.description}
            </p>
            <div className="flex flex-wrap  gap-2 mb-3">
              {project.technologies.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <Link 
              href={project.github}
              className="text-muted-foreground  hover:text-foreground transition-colors inline-flex"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}