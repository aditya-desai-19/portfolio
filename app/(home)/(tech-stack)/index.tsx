import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { getTechStackData } from "./data"
import { useTheme } from "next-themes"

export default function TechStack() {
  const { theme } = useTheme()

  const isDarkTheme = theme === "dark"
  const techStackData = getTechStackData(isDarkTheme)

  return (
    <section className="p-2">
      <h2 className="text-2xl font-semibold">{"Tech Stack"}</h2>
      <div className="grid grid-cols-4 sm:grid-cols-6 gap-3 my-2">
        {techStackData.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center justify-center gap-1 p-2 rounded-lg border bg-accent/40"
          >
            <Image src={item.logo} alt="" width={28} height={28} />
            <span className="text-xs font-medium">{item.name}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
