'use client';
import Link from "next/link"
import Image from "next/image"
import { FaGithub } from "react-icons/fa";
import { LiaExternalLinkSquareAltSolid } from "react-icons/lia";
import promptly from '../../../public//images/promptly.png'

const projects = [
  {
    title: "Promptly",
    description:
      "A cutting-edge chatbot platform powered by Pollination AI, capable of generating dynamic text and images seamlessly.",
    image: promptly,
    github: "https://github.com/huamanraj/Promptly",
    liveDemo: "https://promptly.aman-raj.xyz/",
    technologies: [
      "React",
      "Vite",
      "Pollination AI",
      "Tailwind CSS",
      "React Helmet",
    ],
  },

  {
    title: "Mind Mosaic",
    description: "A comprehensive blogging platform with React and Appwrite.",
    image:
      "https://img.freepik.com/free-vector/blogging-illustration-concept_114360-788.jpg?t=st=1726934749~exp=1726938349~hmac=8a2f877b41442cc2a287fbe168cb876ae040609bfc955caf50fcbf61d068ae0d&w=1060",
    github: "https://github.com/yourusername/mind-mosaic",
    liveDemo: "https://mind-mosaic-blogs.vercel.app/",
    technologies: ["React", "Redux", "Appwrite", "tinyMCE", "Tailwind CSS"],
  },
  {
    title: "BuzzSphere",
    description:
      "A real-time chat application with seamless messaging and custom features.",
    image:
      "https://img.freepik.com/free-vector/new-message-landing-page-concept_23-2148319402.jpg?t=st=1731169458~exp=1731173058~hmac=77e10c8685a8cd88d33d63353d6c5e3d9376d7fd04ee0a86f73af2245f569e34&w=1480",
    github: "https://github.com/huamanraj/BuzzSphere",
    liveDemo: "https://buzz-sphere.vercel.app/",
    technologies: [
      "React",
      "Appwrite",
      "Appwrite Realtime",
      "Tailwind CSS",
      "Vite",
    ],
  },
  {
    title: "SnapDrop",
    description:
      "A modern and secure file-sharing web app with customizable expiry and short links.",
    image: "https://snapdrop.vercel.app/assets/logo-CW4s9jSv.png",
    github: "https://github.com/huamanraj/SnapDrop",
    liveDemo: "https://snapdrop.vercel.app/",
    technologies: ["React", "Appwrite", "Tailwind CSS", "Vite"],
  },
  {
    title: "QuoteCanvas AI",
    description:
      "A customizable AI-powered quote image creator for social media posts.",
    image:
      "https://img.freepik.com/free-photo/industrial-designer-digital-art_23-2151585281.jpg?t=st=1730654190~exp=1730657790~hmac=880ce876a1c45707f69de88b3d95beda4aaa972f12eb119728415c30ec69ffc1&w=1060",
    github: "https://github.com/huamanraj/QuoteCanvasAI",
    liveDemo: "https://quotecanvasai.vercel.app/",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS",
      "Vite",
      "Google Gemini API",
    ],
  },
  {
    title: "AI Github README Generator",
    description: "A full-stack GitHub README generator using OpenAI API.",
    image:
      "https://kinsta.com/wp-content/uploads/2018/04/what-is-github-1-1.png",
    github:
      "https://github.com/huamanraj?tab=repositories&q=readme-gen&type=&language=&sort=",
    liveDemo: "https://githubreadmegenerator.vercel.app/",
    technologies: ["React.js", "Node.js", "Express.js", "OpenAI API"],
  },
  {
    title: "AI Description Generation",
    description:
      "A backend for recruitment platform AI description generation.",
    image:
      "https://plopdo.com/wp-content/uploads/2021/10/What-is-back-end-development-2.jpg",
    liveDemo: "https://github.com/huamanraj/AI-discription-",
    github: "https://github.com/huamanraj/AI-discription-",
    technologies: ["Node.js", "Express.js", "OpenAi API"],
  },
  {
    title: "Sharma Interior Website",
    description:
      "A Webpage made in next js and framer motion for a small company Sharma Interiors.",
    image:
      "https://img.freepik.com/free-vector/web-hosting-isometric-composition-with-icons-website-windows-buttons-desktop-computer-with-people-vector-illustration_1284-80933.jpg?t=st=1727295303~exp=1727298903~hmac=7eaa660e6447b47fd146b523683d51f5005291aa3028ab493523f5bcdb9c5500&w=740",
    github: "https://www.sharmainteriors.xyz/",
    liveDemo: "https://www.sharmainteriors.xyz/",
    technologies: ["Next js", "Framer motion", "Email js", "Tailwind CSS"],
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-12">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group  hover:bg-muted rounded-lg cursor-pointer "
          >
            <div className="relative w-full aspect-[16/9] mb-4 overflow-hidden rounded-lg border bg-card  ">
              <div className="absolute top-0 left-0 right-0 h-6 bg-card border-b flex items-center px-2 gap-1">
                <div className="w-2 h-2 rounded-full bg-card-foreground/20" />
                <div className="w-2 h-2 rounded-full bg-card-foreground/20" />
                <div className="w-2 h-2 rounded-full bg-card-foreground/20" />
              </div>
              <Image
                src={project.image}
                alt={project.title}
                onClick={() => window.open(project.liveDemo, "_blank")}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2
              onClick={() => window.open(project.liveDemo, "_blank")}
              className="text-lg font-semibold mb-2 pl-1 "
            >
              {project.title}
            </h2>
            <p
              onClick={() => window.open(project.liveDemo, "_blank")}
              
              className="text-muted-foreground mb-3 pl-1 text-sm leading-relaxed line-clamp-3"
            >
              {project.description}
            </p>
            <div
              className="flex flex-wrap pl-1 gap-2 mb-3"
              onClick={() => window.open(project.liveDemo, "_blank")}
            >
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-full bg-secondary/50 text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="pb-1 pl-2 ">
              <Link
                href={project.github}
                className="text-muted-foreground  hover:text-foreground transition-colors inline-flex"
              >
                <FaGithub className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={project.liveDemo}
                className="text-muted-foreground  hover:text-foreground transition-colors inline-flex pl-2"
              >
                <LiaExternalLinkSquareAltSolid className="h-5 w-5" />
                <span className="sr-only">Link</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}