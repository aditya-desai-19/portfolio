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
    location: "Bangalore, Karnataka, India",
    workMode: "On-site",
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
      [
        {
          text: "Designed and developed the frontend application for a cancer patient using",
        },
        { text: "Next.js", emphasis: "bold" },
        { text: "ensuring a user-friendly and accessible interface." },
      ],
      [
        {
          text: "Implemented",
        },
        { text: "responsive", emphasis: "bold" },
        { text: "and" },
        { text: "reusable", emphasis: "bold" },
        { text: "components" },
        { text: "in" },
        { text: "React", emphasis: "bold" },
        {
          text: "project, such as ListView and dynamic forms, enhancing code modularity and maintainability.",
        },
      ],
      [
        {
          text: "Integrated server-side components and developed server actions for efficient backend data fetching in",
        },
        { text: "Next.js", emphasis: "bold" },
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
          text: "Designed and implemented the UI for the Beacons feature, enabling users to accurately determine their location inside a building.",
        },
      ],
      [
        {
          text: "Developed interactive analytics graphs for diverse data sets, empowering the client to make data-driven decisions effectively.",
        },
      ],
      [
        {
          text: "Created an open-source React boilerplate, streamlining the development process and enhancing project scalability.",
        },
      ],
    ],
  },
]
