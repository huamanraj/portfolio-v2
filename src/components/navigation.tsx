"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { ThemeToggle } from "./theme-toggle"

export function Navigation() {
  const pathname = usePathname()

  return (
    <nav className="bg-background mt-5">
      <div className="max-w-[700px] mx-auto px-6 py-4 flex items-center justify-between relative">
        <div className="flex gap-8 relative">
          <Link 
            href="/" 
            className={`relative pb-0.5 group ${
              pathname === "/" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            home
            <span className={`absolute bottom-0 left-0 w-full h-[1px] origin-left transition-transform duration-500 ease-in-out ${
              pathname === "/" 
                ? "scale-x-100 bg-gray-400" 
                : "scale-x-0 bg-gray-400"
            }`} />
          </Link>
          <Link 
            href="/blog" 
            className={`relative pb-0.5 group ${
              pathname === "/blog" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            blog
            <span className={`absolute bottom-0 left-0 w-full h-[1px] origin-left transition-transform duration-500 ease-in-out ${
              pathname === "/blog" 
                ? "scale-x-100 bg-gray-400" 
                : "scale-x-0 bg-gray-400"
            }`} />
          </Link>
          <Link 
            href="/projects" 
            className={`relative pb-0.5 group ${
              pathname === "/projects" ? "text-foreground" : "text-muted-foreground"
            }`}
          >
            projects
            <span className={`absolute bottom-0 left-0 w-full h-[1px] origin-left transition-transform duration-500 ease-in-out ${
              pathname === "/projects" 
                ? "scale-x-100 bg-gray-400" 
                : "scale-x-0 bg-gray-400"
            }`} />
          </Link>
        </div>
        <ThemeToggle />
      </div>
    </nav>
  )
}