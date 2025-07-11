"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { IconMoon, IconSun } from "@tabler/icons-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"))
  }, [])

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
    localStorage.setItem("theme", !isDark ? "dark" : "light")
  }

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      {isDark ? <IconSun className="w-5 h-5" /> : <IconMoon className="w-5 h-5" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
