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
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4 border-y border-[#40526b] py-4">
        <div className="flex flex-wrap gap-2" aria-label="Filter projects by status">
          {statuses.map((status) => (
            <button key={status} type="button" onClick={() => setStatusFilter(status)} aria-pressed={statusFilter === status} className={`rounded-sm px-4 py-2 text-xs font-extrabold capitalize transition-colors ${statusFilter === status ? "bg-[#121f30] text-white" : "bg-[#142235] text-[#c5d0e0] hover:bg-[#304a66]"}`}>
              {status === "all" ? "All work" : status.replaceAll("-", " ")}
            </button>
          ))}
        </div>
        <span className="technical text-[10px] uppercase text-[#b3c5dd]">Showing {filtered.length} of {projects.length}</span>
      </div>
      {filtered.length > 0 ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{filtered.map((project) => <ProjectCard key={project.slug} project={project} index={projects.findIndex((item) => item.slug === project.slug) + 1} />)}</div>
      ) : (
        <div className="border border-[#40526b] bg-[#1b2b40] p-10 text-center text-[#c5d0e0]">No projects match this filter yet.</div>
      )}
    </div>
  );
}
