"use client"

import { Separator } from "@/components/ui/separator"
import Navbar from "./navbar"
import Profile from "./(profile)"
import About from "./about"
import WorkExperience from "./(work-experience)"
import TechStack from "./(tech-stack)"

export default function Home() {
  return (
    <div className="w-1/2  p-4">
      <Navbar />
      <Separator className="my-4 h-0.5!" />
      <Profile />
      <Separator className="my-4 h-0.5!" />
      <About />
      <Separator className="my-4 h-0.5!" />
      <WorkExperience />
      <Separator className="my-4 h-0.5!" />
      <TechStack />
      <Separator className="my-4 h-0.5!" />
    </div>
  )
}
