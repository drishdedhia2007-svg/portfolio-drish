"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectMeta } from "@/lib/projects";

export default function ProjectsGrid({ projects }: { projects: ProjectMeta[] }) {
  const [statusFilter, setStatusFilter] = useState("all");
  const statuses = ["all", ...Array.from(new Set(projects.map((project) => project.status)))];
  const filtered = statusFilter === "all" ? projects : projects.filter((project) => project.status === statusFilter);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#35515b] py-4">
        <div className="flex flex-wrap gap-2" aria-label="Filter projects by status">
          {statuses.map((status) => (
            <button key={status} type="button" onClick={() => setStatusFilter(status)} aria-pressed={statusFilter === status} className={`rounded-sm px-4 py-2 text-xs font-extrabold capitalize transition-colors ${statusFilter === status ? "bg-[#192a34] text-white" : "bg-[#142832] text-[#c0cfca] hover:bg-[#26424b]"}`}>
              {status === "all" ? "All work" : status.replaceAll("-", " ")}
            </button>
          ))}
        </div>
        <span className="technical text-[10px] uppercase text-[#a9c1bf]">Showing {filtered.length} of {projects.length}</span>
      </div>
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((project) => <ProjectCard key={project.slug} project={project} index={projects.findIndex((item) => item.slug === project.slug) + 1} />)}</div>
      ) : (
        <div className="border border-[#35515b] bg-[#1a303a] p-10 text-center text-[#c0cfca]">No projects match this filter yet.</div>
      )}
    </div>
  );
}
