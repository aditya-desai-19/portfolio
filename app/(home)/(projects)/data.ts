import { StaticImageData } from "next/image"
import Pixiflow from "../../../public/pixiflow.png"
import Portfolio from "../../../public/portfolio.png"

export interface Project {
  image: StaticImageData
  title: string
  description: string
  technologies: string[]
  githubLink: string
}

export const projects: Project[] = [
  {
    image: Portfolio,
    title: "Portfolio website",
    description: "My portfolio website",
    githubLink: "https://github.com/aditya-desai-19/portfolio",
    technologies: ["Next.js", "TypeScript", "Shadcn UI"],
  },
  {
    image: Pixiflow,
    title: "Pixiflow",
    description:
      "An alternative to applications like Image Resizer, Reduce Images etc.",
    githubLink: "https://github.com/aditya-desai-19/Pixiflow",
    technologies: ["Next.js", "Spring Boot", "Java"],
  },
]
