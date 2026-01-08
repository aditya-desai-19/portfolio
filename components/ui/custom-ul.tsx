interface TextSegment {
  text: string
  emphasis?: "bold"
}

export type BulletPoint = TextSegment[]

interface CustomUlProps {
  bulletPoints: BulletPoint[]
}

export default function CustomUl({ bulletPoints }: CustomUlProps) {
  return (
    <ul className="my-2 list-disc pl-5 space-y-2">
      {bulletPoints.map((bullet, i) => (
        <li key={i}>
          {bullet.map((item, j) => (
            <span
              key={j}
              className={`text-muted ${item.emphasis === "bold" ? "font-semibold dark:text-foreground" : ""} `}
            >
              {item.text}
              <span> </span>
            </span>
          ))}
        </li>
      ))}
    </ul>
  )
}
