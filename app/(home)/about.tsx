interface TextSegment {
  text: string;
  emphasis?: "bold";
}

type BulletPoint = TextSegment[];

const bulletPoints: BulletPoint[] = [
  [
    { text: "Software Engineer with " },
    { text: "2+ years ", emphasis: "bold" },
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
];

export default function About() {
  return (
    <div>
      <h2 className="text-2xl font-semibold">{"About"}</h2>
      <ul className="my-2 list-disc pl-5 space-y-2">
        {bulletPoints.map((bullet, i) => (
          <li key={i}>
            {bullet.map((item, j) => (
              <span key={j} className={`text-muted ${item.emphasis === "bold" ? "font-semibold" : ""}`}>
                {item.text}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
}
