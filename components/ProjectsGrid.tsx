"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectMeta } from "@/lib/projects";

const filters = [
  { key: "all", label: "All work" },
  { key: "independent", label: "Independent builds" },
  { key: "team", label: "Team concept" },
  { key: "guided", label: "Guided exercise" },
] as const;
type Filter = typeof filters[number]["key"];

function group(project: ProjectMeta): Exclude<Filter, "all"> {
  if (project.category?.includes("Internship")) return "team";
  if (project.category?.includes("Guided Exercise")) return "guided";
  return "independent";
}

export default function ProjectsGrid({ projects }: { projects: ProjectMeta[] }) {
  const [filter, setFilter] = useState<Filter>("all");
  const filtered = filter === "all" ? projects : projects.filter(project => group(project) === filter);

  return <div><div className="project-filters"><div role="group" aria-label="Filter projects by type">{filters.map(item => <button key={item.key} type="button" onClick={() => setFilter(item.key)} aria-pressed={filter === item.key}>{item.label}</button>)}</div><span className="technical">{String(filtered.length).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} STUDIES</span></div>
    {filtered.length ? <div className="project-collection">{filtered.map((project, index) => <ProjectCard key={project.slug} project={project} index={projects.findIndex(item => item.slug === project.slug) + 1} variant={index === 0 ? "feature" : index === filtered.length - 1 && filtered.length > 2 ? "wide" : "standard"} />)}</div> : <p className="project-empty">No projects in this group yet.</p>}
  </div>;
}
