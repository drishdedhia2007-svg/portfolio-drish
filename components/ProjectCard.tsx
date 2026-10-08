import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

export default function ProjectCard({ project, index, variant = "standard" }: { project: ProjectMeta; index?: number; variant?: "feature" | "standard" | "wide" }) {
  return <Link href={`/projects/${project.slug}`} className={`project-card project-card--${variant}`} data-reveal>
    <div className="project-card-image">
      {project.coverImage ? <Image src={project.coverImage} alt={project.coverAlt || `${project.title} project render`} fill loading={index === 1 ? "eager" : "lazy"} sizes={variant === "feature" || variant === "wide" ? "(max-width: 800px) 100vw, 55vw" : "(max-width: 800px) 100vw, 42vw"} className="object-contain" /> : <span>Project image in progress</span>}
      <span className="project-card-index">CASE / {String(index ?? 1).padStart(2, "0")}</span>
      {project.coverCaption?.startsWith("Studio") && <span className="project-card-render">CAD VISUALIZATION</span>}
    </div>
    <div className="project-card-copy"><p className="technical">{project.category?.slice(0, 2).join(" / ") || "Engineering"} <span>·</span> {project.status.replaceAll("-", " ")}</p><h3>{project.title}</h3><p>{project.shortDescription}</p><span className="project-card-footer">Read the case study <span aria-hidden="true">↗</span></span></div>
  </Link>;
}
