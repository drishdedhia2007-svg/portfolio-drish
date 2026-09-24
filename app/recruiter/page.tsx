import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, getSkillCounts } from "@/lib/projects";

export const metadata: Metadata = { title: "For Recruiters", description: "A concise overview of Drish Dedhia's mechanical engineering work, skills, and current experience." };

export default function Recruiter() {
  const projects = getAllProjects().filter((project) => !project.category?.includes("Childhood"));
  const featured = ["star-test-pad", "self-locking-towel-hook"].map(slug => projects.find(project => project.slug === slug)).filter((project): project is (typeof projects)[number] => Boolean(project));
  const skills = getSkillCounts();

  return (
    <>
      <header className="blueprint-grid bg-[#192a34] py-20 text-[#fffefa] sm:py-26"><div className="page-wrap"><p className="technical text-[11px] uppercase text-[#d99d79]">Quick view / for recruiters</p><h1 className="display mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl">Engineering potential,<br /><span className="text-[#d99d79]">shown through work.</span></h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#c4d0d0]">I am Drish Dedhia, a B.Sc. mechanical engineering student at RWTH Aachen. This page is a short route through my projects, practical skills, and current interests.</p><div className="mt-9 flex flex-wrap gap-3"><Link href="/projects" className="button-primary">View case studies <span aria-hidden="true">&rarr;</span></Link><Link href="/about" className="button-light">About me</Link></div></div></header>

      <section className="page-wrap grid gap-9 py-16 sm:py-22 lg:grid-cols-3"><div className="border-t-2 border-[#c45e37] pt-5"><span className="technical text-[10px] text-[#f4b58d]">01 / EDUCATION</span><h2 className="display mt-3 text-xl font-extrabold">RWTH Aachen</h2><p className="mt-2 text-sm leading-7 text-[#c0cfca]">B.Sc. Maschinenbau, mechanical engineering.</p></div><div className="border-t-2 border-[#c45e37] pt-5"><span className="technical text-[10px] text-[#f4b58d]">02 / CURRENT TEAM</span><h2 className="display mt-3 text-xl font-extrabold">Ecogenium</h2><p className="mt-2 text-sm leading-7 text-[#c0cfca]">Chassis department on a hydrogen fuel cell vehicle for the Shell Eco-marathon.</p></div><div className="border-t-2 border-[#c45e37] pt-5"><span className="technical text-[10px] text-[#f4b58d]">03 / INTERESTS</span><h2 className="display mt-3 text-xl font-extrabold">Design with purpose</h2><p className="mt-2 text-sm leading-7 text-[#c0cfca]">CAD modelling, electronics, automotive systems, and renewable energy.</p></div></section>

      <section className="border-y border-[#35515b] bg-[#142832] py-18"><div className="page-wrap grid gap-10 lg:grid-cols-[.32fr_.68fr]"><div><p className="eyebrow">Project evidence</p><h2 className="display mt-3 text-3xl font-extrabold">See the decisions.</h2><p className="mt-4 text-sm leading-7 text-[#c0cfca]">Each case study covers motivation, approach, challenge, solution, result, and lessons learned.</p></div><div className="grid gap-6 sm:grid-cols-2">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index + 1} />)}{featured.length === 0 && <p className="text-[#c0cfca]">Project case studies are being prepared.</p>}</div></div></section>

      <section className="page-wrap grid gap-10 py-18 lg:grid-cols-[.32fr_.68fr]"><div><p className="eyebrow">Practical toolkit</p><h2 className="display mt-3 text-3xl font-extrabold">Skills with context.</h2></div><div><div className="flex flex-wrap gap-2">{skills.map((item) => <span key={item.skill} className="border border-[#35515b] bg-[#1a303a] px-4 py-2 text-sm font-bold">{item.skill}</span>)}{skills.length === 0 && <p className="text-[#c0cfca]">Skills are added as projects are documented.</p>}</div><Link href="/skills" className="mt-7 inline-flex items-center gap-2 text-sm font-extrabold text-[#f4b58d] hover:underline">See where each skill was used <span aria-hidden="true">&rarr;</span></Link></div></section>

      <section className="border-t border-[#35515b] bg-[#172b35] py-16"><div className="page-wrap flex flex-wrap items-end justify-between gap-6"><div><p className="eyebrow">Keep exploring</p><h2 className="display mt-3 max-w-xl text-3xl font-extrabold">The portfolio grows as the work does.</h2><p className="mt-3 text-sm leading-7 text-[#c0cfca]">For a more personal account of what I am learning, see my writing.</p></div><a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="button-secondary">Read the logbook <span aria-hidden="true">&rarr;</span><span className="sr-only">(opens in a new tab)</span></a></div></section>
    </>
  );
}
