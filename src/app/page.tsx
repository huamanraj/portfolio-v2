import Image from "next/image"
import Link from "next/link"
import { Github, Twitter, Linkedin, Instagram } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Blog from "./blog/page"

export default function Home() {
  return (
    <div>
      <div className="mb-12">
        <Image
          src="https://github.com/huamanraj.png"
          alt="Profile"
          width={120}
          height={120}
          className="rounded-full mb-6"
          priority
        />
        <h1 className="text-3xl font-bold mb-4">Aman Raj</h1>
        <p className="text-muted-foreground mb-4">
          I&#39;m a fullstack software engineer specializing in building scalable web applications with rich user interfaces using JavaScript.
        </p>
        <p className="text-muted-foreground mb-6">
          Over the years, I&#39;ve worked on multiple products in various domains, and have actively contributed to open source projects.
        </p>
        <p className="text-muted-foreground mb-4">
          If you&#39;d like to collaborate, please{" "}
          <Link href="mailto:amanraj12.ar@gmail.com" className="underline">
            send me an email
          </Link>
          {" "}or reach out on any of my social handles.
        </p>
        <div className="flex gap-2 mb-4">
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://github.com/huamanraj">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://twitter.com/huamanraj">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://linkedin.com/huamanraj">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild className="rounded-full">
            <Link href="https://instagram.com/https.amanraj">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </Button>
        </div>
        <Button variant="outline" asChild>
          <Link href="/resume">View Resume</Link>
        </Button>
        <div className="pt-12">
        <Blog/>
        </div>
        
      </div>
    </div>
  )
}