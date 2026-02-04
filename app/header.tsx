"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import Link from "next/link"
import { motion } from "motion/react"
import useScroll from "@/hooks/useScroll"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  const { theme, setTheme } = useTheme()
  const { isScrolled } = useScroll()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-20 bg-transparent p-2">
      <motion.div
        layout
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 30,
        }}
        className={cn(
          "mx-auto flex items-center justify-between",
          "bg-background/80 backdrop-blur-md",
          "transition-all duration-300",
          isScrolled ? "rounded-full px-6 py-3 shadow-lg border" : "px-6 py-1"
        )}
      >
        <Link href="#" aria-label="Home">
          <Avatar>
            <AvatarImage src="/profile-image.jpg" alt="Profile picture" />
            <AvatarFallback>AD</AvatarFallback>
          </Avatar>
        </Link>

        <nav
          className="flex items-center gap-4 text-sm font-medium"
          aria-label="Main navigation"
        >
          <Link href="#about" className="hover:opacity-70 transition-opacity">
            About
          </Link>
          <Link href="#work" className="hover:opacity-70 transition-opacity">
            Work
          </Link>
          <Link
            href="#projects"
            className="hover:opacity-70 transition-opacity"
          >
            Projects
          </Link>

          <Separator
            orientation="vertical"
            className="
            data-[orientation=vertical]:h-6
            data-[orientation=vertical]:w-0.5
            data-[orientation=vertical]:bg-foreground
            shrink-0
        "
            aria-hidden="true"
          />

          <Button
            variant="outline"
            size="icon"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            {theme === "dark" ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </nav>
      </motion.div>
    </header>
  )
}
