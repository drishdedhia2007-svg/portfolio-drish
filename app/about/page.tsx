import type { Metadata } from "next";
import Link from "next/link";
import { getChildhoodProjects } from "@/lib/projects";

export const metadata: Metadata = { title: "About", description: "Meet Drish Dedhia: mechanical engineering student, curious maker, and author of an ongoing engineering journal." };

export default function About() {
  const childhoodProjects = getChildhoodProjects();

  return (
    <>
      <header className="paper-grid border-b border-[#d9ded8] bg-[#e9ece7] py-20 sm:py-26"><div className="page-wrap grid gap-9 lg:grid-cols-[.7fr_1.3fr] lg:items-end"><p className="eyebrow">About / 03</p><div><h1 className="display text-5xl font-extrabold sm:text-7xl">Curiosity came first.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#42545c]">Before CAD software or university workshops, there were toy cars, old appliances, and a need to understand how things worked.</p></div></div></header>

      <div className="page-wrap grid gap-12 py-18 lg:grid-cols-[.32fr_.68fr] lg:gap-20 lg:py-24">
        <aside><p className="eyebrow">The person behind the projects</p><p className="display mt-4 max-w-xs text-2xl font-extrabold leading-snug">Student. Maker. Still learning out loud.</p><p className="mt-5 border-l-2 border-[#c45e37] pl-4 text-sm leading-7 text-[#59676b]">Based in Aachen, Germany. Studying B.Sc. Maschinenbau at RWTH Aachen.</p></aside>
        <div className="space-y-12">
          <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">01 / ORIGIN</span><h2 className="display mt-3 text-3xl font-extrabold">Where I come from</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">My curiosity about engineering began with toy cars and the question of how they actually worked. That became a habit of taking apart old appliances to see their insides, then trying to put them back together. Somewhere along the way, knowing that something worked stopped being enough. I wanted to know why.</p></section>
          <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">02 / NOW</span><h2 className="display mt-3 text-3xl font-extrabold">What I am working on</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">I study mechanical engineering at RWTH Aachen. CAD modelling and electronics draw my attention most when they have a real application. I am part of the chassis department at Ecogenium, working on a hydrogen fuel cell vehicle for the Shell Eco-marathon. Automotive and renewable energy systems both interest me, and I am keeping my direction open while I build broad experience.</p></section>
          <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">03 / OUTSIDE THE WORKSHOP</span><h2 className="display mt-3 text-3xl font-extrabold">Beyond engineering</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">I play volleyball, basketball, cricket, and guitar. I graduated valedictorian of my IB class with 44 out of 45, served as House Captain, and co-founded a Financial Literacy Club to teach younger students the basics of investing. I am also a lifelong Max Verstappen fan who is always happy to talk cars.</p></section>
          <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">04 / WRITING</span><h2 className="display mt-3 text-3xl font-extrabold">Logbook of a Learning Engineer</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">I write about my mistakes and lessons as a beginner on a student racing team. It is an honest account for other people who are starting out and learning in public.</p><a href="https://drishdedhia23.substack.com/?utm_campaign=profile_chips" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#a74727] hover:underline">Read the logbook <span aria-hidden="true">&rarr;</span><span className="sr-only">(opens in a new tab)</span></a></section>
        </div>
      </div>

      {childhoodProjects.length > 0 && <section id="the-beginning" className="border-t border-[#d9ded8] bg-[#e9ece7] py-20 sm:py-24"><div className="page-wrap grid gap-9 lg:grid-cols-[.42fr_.58fr]"><div><p className="eyebrow">Before the coursework</p><h2 className="display mt-3 text-4xl font-extrabold">The beginning.</h2><p className="mt-4 max-w-sm leading-7 text-[#59676b]">Before CAD software, there was newspaper, tape, and a lot of trial and error.</p></div><div className="space-y-4">{childhoodProjects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="group flex gap-5 border border-[#d9ded8] bg-[#fffefa] p-5 transition-colors hover:border-[#a7b4b1]"><span className="display grid h-16 w-16 shrink-0 place-items-center bg-[#192a34] text-xl font-extrabold text-[#d99d79]">01</span><span><span className="display block text-lg font-extrabold group-hover:text-[#a74727]">{project.title}</span><span className="mt-1 block text-sm leading-6 text-[#59676b]">{project.shortDescription}</span><span className="mt-3 block text-xs font-extrabold text-[#a74727]">Read the story &rarr;</span></span></Link>)}</div></div></section>}

      <section className="page-wrap flex flex-wrap items-center justify-between gap-6 py-16"><p className="display max-w-xl text-2xl font-extrabold">The best way to understand my work is to see what I built.</p><Link href="/projects" className="button-primary">Browse projects <span aria-hidden="true">&rarr;</span></Link></section>
    </>
  );
}
