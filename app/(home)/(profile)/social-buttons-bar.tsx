import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import {
  faGithub,
  faLinkedin,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react"

interface IconsProp {
  icon: ReactNode
  link: string
  toolTipTitle: string
}

const icons: IconsProp[] = [
  {
    icon: <FontAwesomeIcon icon={faGithub} size="lg" />,
    link: "https://github.com/aditya-desai-19",
    toolTipTitle: "Github",
  },
  {
    icon: <FontAwesomeIcon icon={faLinkedin} size="lg" />,
    link: "https://www.linkedin.com/in/aditya-desai-192k/",
    toolTipTitle: "Linkedin",
  },
  {
    icon: <FontAwesomeIcon icon={faXTwitter} size="lg" />,
    link: "https://x.com/desai__aditya",
    toolTipTitle: "X(Formerly Twitter)",
  },
  {
    icon: <LinkIcon size={"24"} />,
    link: "https://drive.google.com/file/d/17ZUcH4MnNTUNk6GSg5wNJgr_9LEpJl3y/view?usp=drive_link",
    toolTipTitle: "Resume",
  },
]

export default function SocialButtonsBar() {
  return (
    <div className="flex gap-2 items-end">
      {icons.map((icon) => (
        <Tooltip key={icon.link}>
          <TooltipTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              asChild
              className="rounded-full"
            >
              <Link href={icon.link} target="_blank">
                {icon.icon}
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>{icon.toolTipTitle}</p>
          </TooltipContent>
        </Tooltip>
      ))}
    </div>
  )
}
