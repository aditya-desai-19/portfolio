import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Project } from "./data"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Play } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { image, description, technologies, title, githubLink, videoLink } =
    project
  return (
    <Card className="p-4 group shadow-lg">
      <CardHeader className="relative h-52 rounded-md overflow-hidden bg-linear-to-r from-sky-500 to-indigo-500">
        <Image
          src={image}
          alt="project-image"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
        <div
          className="absolute opacity-0 scale-95 z-20  h-full w-full flex justify-center items-center group-hover:opacity-100 group-hover:scale-100
              transition-all duration-200"
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button className="rounded-full h-16 w-16 text-foreground bg-background/90 hover:bg-background/80 cursor-pointer">
                <Play className="h-8! w-8!" />
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[90vw] lg:w-[70vw] sm:max-w-none p-0 overflow-hidden">
              <DialogTitle className="hidden"></DialogTitle>
              <div className="relative w-full aspect-video flex justify-center items-center">
                <iframe
                  src={videoLink}
                  className="absolute  h-9/10 w-9/10 rounded-lg"
                  allowFullScreen
                ></iframe>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-muted">{description}</p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center gap-1">
          {technologies.map((item, i) => (
            <Badge
              key={item + i}
              variant={"outline"}
              className="text-xs font-medium px-2 py-0.5  text-accent-foreground/80 border border-border rounded "
            >
              {item}
            </Badge>
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
