import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Engineering case studies by Drish Dedhia: the challenges, decisions, and lessons behind each build." };

export default function Projects() {
  const projects = getAllProjects().filter((project) => !project.category?.includes("Childhood"));

  return (
    <>
      <header className="paper-grid border-b border-[#d9ded8] bg-[#e9ece7] py-20 sm:py-26">
        <div className="page-wrap"><p className="eyebrow">Archive / 01</p><h1 className="display mt-4 text-5xl font-extrabold sm:text-7xl">The project log.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#42545c]">A growing archive of engineering work. Open a project to see the problem, process, result, and what I would carry into the next build.</p></div>
      </header>
      <section className="page-wrap py-14 sm:py-20" aria-label="Engineering projects">
        <ProjectsGrid projects={projects} />
        <div className="mt-20 flex flex-col gap-4 border-t border-[#d9ded8] pt-8 sm:flex-row sm:items-center sm:justify-between"><p className="text-sm text-[#59676b]">The curiosity started before university.</p><Link href="/about#the-beginning" className="text-sm font-extrabold text-[#a74727] hover:underline">See where it began <span aria-hidden="true">&rarr;</span></Link></div>
      </section>
    </>
  );
}
