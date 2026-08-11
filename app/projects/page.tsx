import Link from "next/link";
import { getAllProjects } from "@/lib/projects";

export default function Projects() {
  const projects = getAllProjects();

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <h1 className="text-3xl font-bold text-black text-center mb-10">
        Projects
      </h1>

      <div className="max-w-2xl mx-auto flex flex-col gap-4">
        {projects.map((project: any) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            className="block rounded-lg border border-zinc-200 p-5 hover:border-zinc-400 transition-colors"
          >
            <div className="flex items-center justify-between mb-1">
              <h2 className="text-lg font-semibold text-black">
                {project.title}
              </h2>
              <span className="text-xs uppercase tracking-wide text-zinc-500">
                {project.status}
              </span>
            </div>
            <p className="text-sm text-zinc-600">
              {project.shortDescription}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}