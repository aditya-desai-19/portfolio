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
    location: "Bangalore, Karnataka, India",
    workMode: "Hybrid",
    contributions: [
      [
        {
          text: "Resolved issues related to MUI version 6 upgrade.",
        },
      ],
      [
        {
          text: "Fixed data inconsistency issue between microservice and main backend.",
        },
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
    location: "Bangalore, Karnataka, India",
    workMode: "On-site",
    contributions: [
      [
        {
          text: "Developed a",
        },
        {
          text: "dynamic dashboard",
          emphasis: "bold",
        },
        {
          text: "for doctors and researchers to create and manage various clinical trial tasks (e.g., surveys, appointments), featuring drag-and-drop task sequencing, client-side validation, and infinite scrolling for efficient task rendering.",
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
        { text: "Optimized mobile app login time by" },
        { text: "90%", emphasis: "bold" },
        { text: "through" },
        { text: "parallel API calls", emphasis: "bold" },
        { text: "and" },
        { text: "batch processing,", emphasis: "bold" },
        { text: "significantly improving local database storage efficiency. " },
      ],
      [
        {
          text: "Developed a snapshot feature for a surveillance project, enabling time-interval-based snapshots to summarize entire camera feeds, reducing client costs.",
        },
      ],
      [
        {
          text: "Built an",
        },
        { text: "ETL service", emphasis: "bold" },
        { text: "using" },
        { text: "Azure Functions", emphasis: "bold" },
        {
          text: "to extract, transform, and load weather data every 24 hours, ensuring automated data processing.",
        },
      ],
      [
        {
          text: "Created an",
        },
        {
          text: "open-source React boilerplate",
          emphasis: "bold",
        },
        {
          text: ", streamlining the development process and enhancing project scalability.",
        },
      ],
    ],
  },
]
