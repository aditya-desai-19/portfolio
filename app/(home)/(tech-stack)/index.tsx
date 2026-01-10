import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { getTechStackData } from "./data"
import { useTheme } from "next-themes"

export default function TechStack() {
  const { theme } = useTheme()

  const isDarkTheme = theme === "dark"
  const techStackData = getTechStackData(isDarkTheme)

  return (
    <section>
      <h2 className="text-2xl font-semibold">{"Tech Stack"}</h2>
      <div className="flex flex-wrap gap-2 my-2">
        {techStackData.map((item, i) => (
          <Badge
            variant={"outline"}
            key={item.name + i}
            className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-foreground dark:bg-accent"
          >
            <Image
              src={item.logo}
              alt={`${item.name}-logo`}
              height={16}
              width={16}
            />
            {item.name}
          </Badge>
        ))}
      </div>
    </section>
  )
}
