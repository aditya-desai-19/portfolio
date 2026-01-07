"use client"

import AnthologyLogo from "../../../public/anthology.png";
import ApraLabsLogo from "../../../public/apra-labs.jpg";
import ExperienceCard from "./experience-card";
import { CompanyProps, JobType } from "./types";

const experience: CompanyProps[] = [
  {
    logo: AnthologyLogo,
    name: "Anthology",
    isActive: true,
    duration: "Oct 2025 - Present",
    jobType: JobType.FullTime,
  },
  {
    logo: ApraLabsLogo,
    name: "Apra Labs",
    isActive: false,
    duration: "April 2023 - Oct 2025",
    jobType: JobType.FullTime,
  },
];

export default function WorkExperience() {
  return (
    <section className="p-2">
      <h2 className="text-2xl font-semibold">{"Work Experience"}</h2>
      <div className="flex flex-col gap-2 my-4">
        {experience.map((exp) => (
          <ExperienceCard experience={exp} key={exp.name}/>
        ))}
      </div>
    </section>
  );
}
