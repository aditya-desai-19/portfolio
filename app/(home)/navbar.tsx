"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav className="flex justify-end items-center gap-4">
      <Link href="/about" className="font-semibold">About</Link>
      <Link href="/projects" className="font-semibold">Projects</Link>
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
        {theme === "dark" ? <Moon className="size-4"/> : <Sun className="size-4"/>}
      </Button>
    </nav>
  );
}
