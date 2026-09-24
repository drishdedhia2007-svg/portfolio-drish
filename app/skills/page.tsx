import type { Metadata } from "next";
import Link from "next/link";
import { getAllProjects, getSkillCounts } from "@/lib/projects";

export const metadata: Metadata = { title: "Skills", description: "Tools and engineering skills connected to the projects where Drish Dedhia used them." };

export default function Skills() {
  const skills = getSkillCounts();
  const projects = getAllProjects().filter((project) => !project.category?.includes("Childhood"));

  return (
    <>
      <header className="border-b border-[#d9ded8] bg-[#192a34] py-20 text-[#fffefa] sm:py-26">
        <div className="page-wrap"><p className="technical text-[11px] uppercase text-[#d99d79]">Evidence / 02</p><h1 className="display mt-4 text-5xl font-extrabold sm:text-7xl">Skills in practice.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#c4d0d0]">Tools are most useful when they solve a real problem. Every skill here links back to a project where I used it.</p></div>
      </header>
      <section className="page-wrap py-16 sm:py-22">
        {skills.length === 0 ? (
          <p className="border border-[#d9ded8] bg-[#fffefa] p-8 text-[#59676b]">Skills will appear here as case studies are added.</p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-[.35fr_.65fr]">
            <aside><p className="eyebrow">Toolbox</p><h2 className="display mt-3 text-3xl font-extrabold">Learned by doing.</h2><p className="mt-4 max-w-xs text-sm leading-7 text-[#59676b]">This list grows automatically when a skill is added to a project entry.</p></aside>
            <div className="border-t border-[#d9ded8]">
              {skills.map((item, index) => {
                const evidence = projects.filter((project) => project.skills?.includes(item.skill));
                return (
                  <div key={item.skill} className="grid gap-3 border-b border-[#d9ded8] py-6 sm:grid-cols-[3rem_1fr_auto] sm:items-start sm:gap-5">
                    <span className="technical pt-1 text-[10px] text-[#a74727]">{String(index + 1).padStart(2, "0")}</span>
                    <div><h3 className="display text-xl font-extrabold">{item.skill}</h3><div className="mt-2 flex flex-wrap gap-x-4 gap-y-1">{evidence.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="text-sm text-[#a74727] hover:underline">{project.title} <span aria-hidden="true">&rarr;</span></Link>)}</div></div>
                    <span className="w-fit border border-[#d9ded8] px-3 py-1 text-[11px] font-bold text-[#59676b]">{item.count} {item.count === 1 ? "project" : "projects"}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </section>
    </>
  );
}
