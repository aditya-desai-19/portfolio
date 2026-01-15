import CustomUl, { BulletPoint } from "@/components/ui/custom-ul"

const careerStartDate = new Date(2023, 3, 17)

function getExactYearsDiff(dateFrom: Date, dateTo: Date): number {
  let yearDiff = dateTo.getFullYear() - dateFrom.getFullYear()

  if (
    dateTo.getMonth() < dateFrom.getMonth() ||
    (dateTo.getMonth() === dateFrom.getMonth() &&
      dateTo.getDate() < dateFrom.getDate())
  ) {
    yearDiff--
  }

  return yearDiff
}

const bulletPoints: BulletPoint[] = [
  [
    { text: "Software Engineer with " },
    {
      text: `${getExactYearsDiff(careerStartDate, new Date())}+ years`,
      emphasis: "bold",
    },
    {
      text: "of experience building scalable, user-centric web and mobile applications.",
    },
  ],
  [
    { text: "Hands-on experience with " },
    { text: "React, React Native, Next.js, and Node.js, ", emphasis: "bold" },
    { text: "with a strong focus on performance and maintainability." },
  ],
  [
    { text: "Passionate about crafting " },
    { text: "intuitive UI/UX ", emphasis: "bold" },
    { text: "and learning new technologies to solve real-world problems." },
  ],
]

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 p-2">
      <h2 className="text-2xl font-semibold">{"About"}</h2>
      <CustomUl bulletPoints={bulletPoints} />
    </section>
  )
}
