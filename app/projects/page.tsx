import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Engineering case studies by Drish Dedhia: the challenges, decisions, and lessons behind each build." };

export default function Projects() {
  const projects = getAllProjects().filter((project) => !project.category?.includes("Childhood"));

  return (
    <>
      <header className="paper-grid border-b border-[#35515b] bg-[#142832] py-20 sm:py-26">
        <div className="page-wrap"><p className="eyebrow">3D design portfolio / 02</p><h1 className="display mt-4 text-5xl font-extrabold sm:text-7xl">The project log.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#c0cfca]">A growing collection of personal CAD and 3D print studies. Open a project to see the problem, process, result, mistakes, and what I would carry into the next build.</p></div>
      </header>
      <section className="page-wrap py-14 sm:py-20" aria-label="Engineering projects">
        <ProjectsGrid projects={projects} />
        <div className="mt-20 flex flex-col gap-4 border-t border-[#35515b] pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-[#c0cfca]">The curiosity started before university.</p><Link href="/about#the-beginning" className="text-sm font-extrabold text-[#f4b58d] hover:underline">See where it began <span aria-hidden="true">&rarr;</span></Link></div>
      </section>
    </>
  );
}
