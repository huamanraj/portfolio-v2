import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <Image
          src="/placeholder.svg"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mb-6"
          priority
        />
        <h1 className="text-3xl font-bold mb-4">Your Name</h1>
        <p className="text-muted-foreground mb-4">
          I&#39;m a fullstack software engineer specializing in building scalable web applications with rich user interfaces using JavaScript.
        </p>
        <p className="text-muted-foreground mb-6">
          Over the years, I&#39;ve worked on multiple startups to build end-to-end products in various domains, and have actively contributed to open source projects.
        </p>
        <p className="text-muted-foreground mb-6">
          If you&#39;d like to collaborate, please{" "}
          <Link href="mailto:example@email.com" className="underline">
            send me an email
          </Link>
          {" "}or reach out on any of my social handles.
        </p>
        <div className="flex gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://github.com">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://twitter.com">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://linkedin.com">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://instagram.com">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
        <Button variant="outline" asChild>
          <Link href="/resume">View Resume</Link>
        </Button>
      </div>
    </div>
  )
}