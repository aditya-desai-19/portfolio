import { projects } from "./data"
import ProjectCard from "./project-card"

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-20 p-2">
      <h2 className="text-2xl font-semibold">{"Projects"}</h2>
      <div className="grid sm:grid-cols-2 gap-2 my-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  )
}
