"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { useState, useEffect } from "react"
import clsx from "clsx"
//import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu

export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark")

  useEffect(() => {
    setIsDarkMode(theme === "dark")
  }, [theme])

  const handleToggle = () => {
    const newMode = !isDarkMode
    setIsDarkMode(newMode)
    setTheme(newMode ? "dark" : "light")
  }

  return (
    <button
      onClick={handleToggle}
      className={clsx(
        "relative w-14 h-8 rounded-full flex items-center transition-colors duration-300",
        isDarkMode ? "bg-gray-900" : "bg-primary"
      )}
    >
      {/* Knob */}
      <span
        className={clsx(
          "absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300",
          isDarkMode
            ? "translate-x-0 bg-primary text-gray-900"
            : "translate-x-6 bg-white text-primary"
        )}
      >
        {isDarkMode ? (
          <Moon size={16} />
        ) : (
          <Sun size={16} />
        )}
      </span>
    </button>
  )
}


{/*export function ModeToggle() {
  const { theme, setTheme } = useTheme()
  const handleToggle = () => {
     if (theme === "dark") {
       setTheme("light")
     } else {
       setTheme("dark")
    }
  }

return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )

  return (
    <Button 
      variant="ghost" 
      size="icon" 
      className="h-9 w-9" 
      onClick={handleToggle}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}*/}