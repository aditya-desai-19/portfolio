import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Project } from "./data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { image, description, technologies, title, githubLink } = project
  return (
    <Card>
      <CardHeader>
        <div className="w-full aspect-video rounded-md overflow-hidden">
          <Image
            src={project.image}
            alt="project-image"
            className="h-full object-cover"
            unoptimized
          />
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          {technologies.map((item, i) => (
            <Badge key={item + i}>{item}</Badge>
          ))}
        </div>
        <Button variant="outline" size="icon" asChild className="rounded-full">
          <Link href={githubLink} target="_blank">
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
