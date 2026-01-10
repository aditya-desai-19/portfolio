"use client"

import { Accordion } from "@/components/ui/accordion"
import ExperienceCard from "./experience-card"
import { experience } from "./data"

export default function WorkExperience() {
  return (
    <section className="p-2">
      <h2 className="text-2xl font-semibold">{"Work Experience"}</h2>
      <div className="flex flex-col gap-2">
        <Accordion type="multiple">
          {experience.map((exp) => (
            <ExperienceCard experience={exp} key={exp.name} />
          ))}
        </Accordion>
      </div>
    </section>
  )
}
