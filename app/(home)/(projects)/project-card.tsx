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
    <Card className="p-2">
      <CardHeader className="relative h-52 rounded-md overflow-hidden bg-linear-to-r from-sky-500 to-indigo-500">
        <Image
          src={image}
          alt="project-image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
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
