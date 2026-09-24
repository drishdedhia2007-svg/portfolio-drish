import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects, getSkillCounts } from "@/lib/projects";

export default function Home() {
  const projects = getAllProjects().filter((project) => !project.category?.includes("Childhood"));
  const skills = getSkillCounts();

  return (
    <>
      <HomeHero />
      <section className="page-wrap grid gap-0 border-x border-[#d9ded8] sm:grid-cols-3" aria-label="Portfolio at a glance">
        <div className="border-b border-[#d9ded8] px-6 py-8 sm:border-b-0 sm:border-r"><span className="technical text-[10px] text-[#a74727]">01 / CASE STUDIES</span><p className="display mt-2 text-3xl font-extrabold">{projects.length.toString().padStart(2, "0")}</p><p className="mt-1 text-sm text-[#59676b]">Detailed engineering stories</p></div>
        <div className="border-b border-[#d9ded8] px-6 py-8 sm:border-b-0 sm:border-r"><span className="technical text-[10px] text-[#a74727]">02 / SKILLS IN USE</span><p className="display mt-2 text-3xl font-extrabold">{skills.length.toString().padStart(2, "0")}</p><p className="mt-1 text-sm text-[#59676b]">Linked to real work</p></div>
        <div className="px-6 py-8"><span className="technical text-[10px] text-[#a74727]">03 / CURRENT CHAPTER</span><p className="display mt-2 text-xl font-extrabold">RWTH Aachen</p><p className="mt-1 text-sm text-[#59676b]">B.Sc. Mechanical Engineering</p></div>
      </section>

      <section className="page-wrap py-20 sm:py-28">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
          <div><p className="eyebrow">Selected work</p><h2 className="display mt-3 text-4xl font-extrabold sm:text-5xl">From question to prototype.</h2><p className="mt-4 max-w-2xl text-[#59676b]">Each project records the thinking behind the result: the problem, the decisions, the setbacks, and what changed along the way.</p></div>
          <Link href="/projects" className="button-secondary">All projects <span aria-hidden="true">&rarr;</span></Link>
        </div>
        {projects.length > 0 ? <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">{projects.slice(0, 3).map((project, index) => <ProjectCard key={project.slug} project={project} index={index + 1} />)}</div> : <p className="border border-[#d9ded8] bg-[#fffefa] p-8 text-[#59676b]">The first case study is on its way.</p>}
      </section>

      <section className="bg-[#e9ece7] py-20 sm:py-24">
        <div className="page-wrap grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]">
          <div><p className="eyebrow">The approach</p><h2 className="display mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">Make. Measure.<br />Understand. Repeat.</h2></div>
          <div className="border-l-2 border-[#c45e37] pl-6 sm:pl-8"><p className="text-lg leading-8 text-[#42545c]">I use this space as a workshop notebook in public. Finished projects matter, but so do the choices and wrong turns that made them possible.</p><Link href="/about" className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold text-[#a74727] hover:underline">More about me <span aria-hidden="true">&rarr;</span></Link></div>
        </div>
      </section>
    </>
  );
}
