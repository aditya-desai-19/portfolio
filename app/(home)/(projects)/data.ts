import { StaticImageData } from "next/image"
import Pixiflow from "../../../public/pixiflow.png"

export interface Project {
  image: StaticImageData
  title: string
  description: string
  technologies: string[]
  githubLink: string
  videoLink: string
}

export const projects: Project[] = [
  {
    image: Pixiflow,
    title: "Pixiflow",
    description:
      "An alternative to applications like Image Resizer, Reduce Images etc.",
    githubLink: "https://github.com/aditya-desai-19/Pixiflow",
    technologies: ["Next.js", "Spring Boot", "Java"],
    videoLink: "https://www.youtube.com/embed/2nRGx9vD6kk",
  },
]
