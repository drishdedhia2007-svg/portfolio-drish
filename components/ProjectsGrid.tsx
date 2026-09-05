"use client";

import Link from "next/link";
import { useState } from "react";

type Project = {
  slug: string;
  title: string;
  status: string;
  shortDescription?: string;
  coverImage?: string;
  [key: string]: any;
};

export default function ProjectsGrid({ projects }: { projects: Project[] }) {
  const [statusFilter, setStatusFilter] = useState("all");

  const statuses = ["all", ...Array.from(new Set(projects.map((p) => p.status)))];

  const filtered =
    statusFilter === "all"
      ? projects
      : projects.filter((p) => p.status === statusFilter);

  return (
    <div>
      <div className="flex flex-wrap gap-2 justify-center mb-10">
        {statuses.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={
              statusFilter === status
                ? "px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors bg-[#1D2433] text-white"
                : "px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors bg-[#F0F1F3] text-[#4A4F58] hover:bg-[#E2E4E8]"
            }
            style={{ fontFamily: "var(--font-body)" }}
          >
            {status === "all" ? "All" : status.replace("-", " ")}
          </button>
        ))}
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((project) => (
          <Link
            key={project.slug}
            href={"/projects/" + project.slug}
            className="group block rounded-2xl border border-[#EAEAEC] overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all bg-white"
          >
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.title}
                className="w-full h-44 object-cover"
              />
            ) : (
              <div
                className="w-full h-44 bg-[#F0F1F3] flex items-center justify-center text-[#B4B8C0] text-sm"
                style={{ fontFamily: "var(--font-body)" }}
              >
                No image yet
              </div>
            )}
            <div className="p-5">
              <div className="flex items-center justify-between mb-2">
                <h2
                  className="text-lg font-semibold text-[#1D2433]"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {project.title}
                </h2>
                <span
                  className="text-xs uppercase tracking-wide text-[#D98E4A] shrink-0 ml-2"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {project.status}
                </span>
              </div>
              <p
                className="text-sm text-[#6E7280] leading-relaxed"
                style={{ fontFamily: "var(--font-body)" }}
              >
                {project.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p
          className="text-center text-[#8B93A1] mt-10"
          style={{ fontFamily: "var(--font-body)" }}
        >
          No projects match this filter yet.
        </p>
      )}
    </div>
  );
}