"use client"

import { Separator } from "@/components/ui/separator"
import ActiveIcon from "./active-icon"
import Image from "next/image"
import { CompanyProps } from "./types"
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import CustomUl from "@/components/ui/custom-ul"

interface ExperienceCardProps {
  experience: CompanyProps
}

export default function ExperienceCard({
  experience: exp,
}: ExperienceCardProps) {
  return (
    <AccordionItem value={exp.name} className="border-b-2">
      <AccordionTrigger>
        <div className="flex gap-2">
          <Image
            src={exp.logo}
            width={32}
            height={32}
            loading="lazy"
            alt="company-logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <p className="text-lg font-medium">{exp.name}</p>
              {exp.isActive && <ActiveIcon />}
            </div>

            <span className="text-muted">{exp.role}</span>

            <span className="text-muted text-sm flex items-center gap-2">
              <span>{exp.jobType}</span>
              <span>&middot;</span>
              <span>{exp.duration}</span>
            </span>

            <span className="text-muted text-sm flex items-center gap-2">
              <span className="text-muted">{exp.location}</span>
              <span>&middot;</span>
              <span>{exp.workMode}</span>
            </span>
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent>
        <div className="ml-8">
          <CustomUl bulletPoints={exp.contributions} />
        </div>
      </AccordionContent>
    </AccordionItem>
  )
}
