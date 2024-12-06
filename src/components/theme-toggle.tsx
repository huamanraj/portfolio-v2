"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }

  if (!mounted) return null

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-900"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 overflow-hidden">
        <div className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
          ${resolvedTheme === 'dark' 
            ? 'translate-y-full opacity-0' 
            : 'translate-y-0 opacity-100'}`}
        >
          <Sun className="w-6 h-6" />
        </div>
        <div className={`absolute inset-0 transition-all duration-1000 ease-in-out transform
          ${resolvedTheme === 'dark' 
            ? 'translate-y-0 opacity-100' 
            : '-translate-y-full opacity-0'}`}
        >
          <Moon className="w-6 h-6" />
        </div>
      </div>
    </button>
  )
}