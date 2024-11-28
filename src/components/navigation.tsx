"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-background border-b">
      <div className="max-w-[700px] mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex gap-8">
          <Link 
            href="/" 
            className={`hover:text-foreground transition-colors ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            home
          </Link>
          <Link 
            href="/blog" 
            className={`hover:text-foreground transition-colors ${
              pathname === "/blog" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            blog
          </Link>
          <Link 
            href="/projects" 
            className={`hover:text-foreground transition-colors ${
              pathname === "/projects" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            projects
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}