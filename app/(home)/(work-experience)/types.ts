import { StaticImageData } from "next/image"

export enum JobType {
  FullTime = "Full Time",
  PartTime = "Part Time",
}

export interface CompanyProps {
  logo: StaticImageData
  name: string
  isActive: boolean
  duration: string
  jobType: JobType
}
