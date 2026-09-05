import Link from "next/link";
import { getAllProjects } from "@/lib/projects";
import ProjectsGrid from "@/components/ProjectsGrid";

export default function Projects() {
  const allProjects = getAllProjects();
  const projects = allProjects.filter(function (p: any) {
    return !p.category || !p.category.includes("Childhood");
  });

  return (
    <div className="min-h-screen bg-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl font-semibold text-[#1D2433] text-center mb-2"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Projects
        </h1>
        <p
          className="text-center text-[#6E7280] mb-12"
          style={{ fontFamily: "var(--font-body)" }}
        >
          A record of what I have built, designed, and learned along the way.
        </p>

        <ProjectsGrid projects={projects} />

        <div className="text-center mt-20">
          <Link
            href="/about"
            className="text-sm text-[#8B93A1] hover:text-[#D98E4A] transition-colors"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Curious where this all started? The Beginning
          </Link>
        </div>
      </div>
    </div>
  );
}