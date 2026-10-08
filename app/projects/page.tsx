import type { Metadata } from "next";
import Link from "next/link";
import ProjectsGrid from "@/components/ProjectsGrid";
import { getAllProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "Projects", description: "Engineering case studies by Drish Dedhia: the challenges, decisions, and lessons behind each build." };

export default function Projects() {
  const order = ["self-locking-towel-hook", "star-test-pad", "door-stopper", "miniature-winners-podium", "propeller"];
  const projects = getAllProjects().filter((project) => !project.category?.includes("Childhood"))
    .sort((a, b) => (order.indexOf(a.slug) < 0 ? 99 : order.indexOf(a.slug)) - (order.indexOf(b.slug) < 0 ? 99 : order.indexOf(b.slug)));

  return (
    <>
      <header className="page-header py-20 sm:py-26">
        <div className="page-wrap"><p className="eyebrow">Projects / the work and the thinking</p><h1 className="display mt-4">A model is a way to <em>ask better questions.</em></h1><p className="story-lead mt-6 max-w-2xl">These studies range from a practical doorstopper to an early team concept. I show what I made, where the model falls short, and what each attempt taught me.</p></div>
      </header>
      <section className="page-wrap project-index-section" aria-label="Engineering projects">
        <ProjectsGrid projects={projects} />
        <div className="project-index-end"><p>The curiosity started before university.</p><Link href="/about#the-beginning" className="text-link">See where it began <span aria-hidden="true">↗</span></Link></div>
      </section>
    </>
  );
}
