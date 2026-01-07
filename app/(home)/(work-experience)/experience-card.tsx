"use client"

import { Card, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import ActiveIcon from "./active-icon";
import Image from "next/image";
import { CompanyProps } from "./types";

interface ExperienceCardProps {
  experience: CompanyProps;
}

export default function ExperienceCard({ experience: exp }: ExperienceCardProps) {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
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
            <span className="text-muted text-sm flex items-center gap-1">
              <span>{exp.jobType}</span>
              <Separator
                orientation="vertical"
                className="h-4! w-0.5! bg-muted!"
              />
              <span>{exp.duration}</span>
            </span>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}
