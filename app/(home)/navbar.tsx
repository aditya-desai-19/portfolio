"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import clsx from "clsx"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { useEffect, useState } from "react"
import { motion } from "motion/react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 80)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-10 bg-background p-2">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={clsx(
          "mx-auto flex items-center justify-end",
          "bg-background/80 backdrop-blur",
          "transition-colors",
          isScrolled
            ? "mt-4 rounded-full px-6 py-3 shadow-lg border-2"
            : "px-6 py-3"
        )}
      >

        <nav className="flex items-center gap-4 text-sm font-medium">
          <Link href="#about" className="hover:opacity-70">
            About
          </Link>
          <Link href="/projects" className="hover:opacity-70">
            Projects
          </Link>
          <Separator
            orientation="vertical"
            className="
            data-[orientation=vertical]:h-6
            data-[orientation=vertical]:w-[2px]
            data-[orientation=vertical]:bg-foreground
            shrink-0
        "
          />
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            {theme === "dark" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
          </Button>
        </nav>
      </motion.div>
    </header>
  )
}
