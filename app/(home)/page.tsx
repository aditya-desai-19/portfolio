"use client"

import { Separator } from "@/components/ui/separator"
import Profile from "./(profile)"
import About from "./about"
import WorkExperience from "./(work-experience)"
import TechStack from "./(tech-stack)"
import Projects from "./(projects)"
import GetInTouch from "./get-in-touch"

export default function Home() {
  return (
    <div>
      <Profile />
      <Separator className="my-4 h-0.5!" />
      <About />
      <Separator className="my-4 h-0.5!" />
      <WorkExperience />
      <Separator className="my-4 h-0.5!" />
      <TechStack />
      <Separator className="my-4 h-0.5!" />
      <Projects />
      <Separator className="my-4 h-0.5!" />
      <GetInTouch />
    </div>
  )
}
