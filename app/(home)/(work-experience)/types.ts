import { BulletPoint } from "@/components/ui/custom-ul"
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
  role: string
  location: string
  workMode: string
  contributions: BulletPoint[]
}
