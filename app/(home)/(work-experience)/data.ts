import AnthologyLogo from "../../../public/anthology.png"
import ApraLabsLogo from "../../../public/apra-labs.jpg"
import { CompanyProps, JobType } from "./types"

export const experience: CompanyProps[] = [
  {
    logo: AnthologyLogo,
    name: "Anthology",
    isActive: true,
    duration: "Oct 2025 - Present",
    jobType: JobType.FullTime,
    role: "Software Engineer",
    contributions: [
      [
        {
          text: "Fixed data inconsistency issue between microservice and main backend by implementing a",
        },
        { text: "Message Queue.", emphasis: "bold" },
      ],
    ],
  },
  {
    logo: ApraLabsLogo,
    name: "Apra Labs",
    isActive: false,
    duration: "April 2023 - Oct 2025",
    jobType: JobType.FullTime,
    role: "Junior Software Engineer",
    contributions: [
      [
        {
          text: "Developed a dynamic dashboard for doctors and researchers to create and manage various clinical trial tasks (e.g., surveys, appointments), featuring drag-and-drop task sequencing, client-side validation, and infinite scrolling for efficient task rendering.",
        },
      ],
      [
        { text: "Developed a" },
        { text: "React Native", emphasis: "bold" },
        { text: "survey generator library based on the FHIR Questionnaire" },
        { text: "FHIR Questionnaire", emphasis: "bold" },
        {
          text: "standard, adopted by the largest health organization in the United States.",
        },
      ],
      [
        {
          text: "Led frontend development of a React Native application, managing a team of three to deliver high-quality features and functionality.",
        },
      ],
      [
        {
          text: "Implemented a local database solution using WatermelonDB, enabling dynamic rendering with RxJS.",
        },
      ],
      [
        { text: "Optimized mobile app login time by" },
        { text: "90%", emphasis: "bold" },
        { text: "through" },
        { text: "parallel API calls", emphasis: "bold" },
        { text: "and" },
        { text: "batch processing,", emphasis: "bold" },
        { text: "significantly improving local database storage efficiency. " },
      ],
    ],
  },
]
