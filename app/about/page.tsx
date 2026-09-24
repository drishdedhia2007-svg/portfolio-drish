import type { Metadata } from "next";
import Link from "next/link";
import { getChildhoodProjects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "About",
  description: "Meet Drish Dedhia: mechanical engineering student at RWTH Aachen, CAD maker, researcher, and curious collaborator.",
};

const research = [
  {
    label: "Physics extended essay",
    title: "Exploring the Relationship Between Magnet Configuration and Magnetic Field Density",
    detail: "I built and tested an electromagnetic induction setup to investigate how Halbach array configurations and magnet rotation speed affect the field and resulting response.",
  },
  {
    label: "Mathematics exploration",
    title: "Using Fourier Analysis for Frequency Decomposition and Harmonic Comparison",
    detail: "Starting with a question from my guitar, I used Fourier analysis to compare the harmonics of the high and low E strings and examine their resonance.",
  },
];

export default function About() {
  const childhoodProjects = getChildhoodProjects();

  return <>
    <header className="paper-grid border-b border-[#d9ded8] bg-[#e9ece7] py-20 sm:py-26">
      <div className="page-wrap grid gap-9 lg:grid-cols-[.7fr_1.3fr] lg:items-end">
        <p className="eyebrow">About / 03</p>
        <div><h1 className="display text-5xl font-extrabold sm:text-7xl">Curiosity came first.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-[#42545c]">Before CAD software or university workshops, there were toy cars, old appliances, and a need to understand how things worked.</p></div>
      </div>
    </header>

    <div className="page-wrap grid gap-12 py-18 lg:grid-cols-[.32fr_.68fr] lg:gap-20 lg:py-24">
      <aside>
        <p className="eyebrow">The person behind the projects</p>
        <p className="display mt-4 max-w-xs text-2xl font-extrabold leading-snug">Student. Maker. Still learning out loud.</p>
        <p className="mt-5 border-l-2 border-[#c45e37] pl-4 text-sm leading-7 text-[#59676b]">Based in Aachen, Germany. Studying B.Sc. Maschinenbau at RWTH Aachen.</p>
      </aside>
      <div className="space-y-12">
        <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">01 / ORIGIN</span><h2 className="display mt-3 text-3xl font-extrabold">Where I come from</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">My curiosity about engineering began with toy cars and the question of how they actually worked. That became a habit of taking apart old appliances to see their insides, then trying to put them back together. Somewhere along the way, knowing that something worked stopped being enough. I wanted to know why.</p></section>
        <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">02 / EDUCATION</span><h2 className="display mt-3 text-3xl font-extrabold">Learning to ask better questions</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">I now study mechanical engineering at RWTH Aachen University. Before that, I completed the International Baccalaureate with 44 out of 45 points and graduated as my class valedictorian. Physics, mathematics, and building things were the threads that kept crossing: the more I learned in one, the more questions I had for the others.</p></section>
        <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">03 / EXPERIENCE</span><h2 className="display mt-3 text-3xl font-extrabold">From an idea to a model</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">During STAR Space Technology and Aeronautical Rocketry’s virtual mechanical design internship in 2023, I helped turn a team’s static motor test pad idea into a Fusion 360 concept. It communicated the idea, but the overlapping profiles in my model also taught me that a convincing visualization is only a first step toward a buildable design. My wider internship work included Proteus, and STAR’s director later gave me a letter of recommendation. I also completed GE Aerospace’s Explore Engineering online job simulation, working through energy source and engine performance tasks.</p><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">At RWTH, I am part of Ecogenium’s chassis department, contributing to a hydrogen fuel cell vehicle for the Shell Eco-marathon. Automotive engineering and renewable energy systems interest me, and I am keeping my direction open while I build wider experience.</p></section>
        <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">04 / RESEARCH</span><h2 className="display mt-3 text-3xl font-extrabold">Questions worth measuring</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">For my IB research work, I followed two quite different questions. Both began with something I could observe, then pushed me to make sense of it through a model and a measurement.</p><div className="mt-6 grid gap-4">{research.map((item) => <article key={item.title} className="border border-[#d9ded8] bg-[#fffefa] p-5 sm:p-6"><p className="eyebrow">{item.label}</p><h3 className="display mt-2 text-xl font-extrabold leading-snug">{item.title}</h3><p className="mt-3 leading-7 text-[#59676b]">{item.detail}</p></article>)}</div></section>
        <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">05 / OUTSIDE THE WORKSHOP</span><h2 className="display mt-3 text-3xl font-extrabold">Beyond engineering</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">I play volleyball, basketball, cricket, and guitar. At school I served as House Captain and co-founded a Financial Literacy Club to help younger students understand investing. I am also a lifelong Max Verstappen fan who is always happy to talk cars.</p></section>
        <section className="border-t border-[#d9ded8] pt-6"><span className="technical text-[10px] text-[#a74727]">06 / WRITING</span><h2 className="display mt-3 text-3xl font-extrabold">Logbook of a Learning Engineer</h2><p className="mt-4 text-[1.06rem] leading-8 text-[#42545c]">I write about my mistakes and lessons as a beginner on a student racing team. It is an honest account for other people who are starting out and learning in public.</p><a href="https://drishdedhia23.substack.com/?utm_campaign=profile_chips" target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-[#a74727] hover:underline">Read the logbook <span aria-hidden="true">&rarr;</span><span className="sr-only">(opens in a new tab)</span></a></section>
      </div>
    </div>

    {childhoodProjects.length > 0 && <section id="the-beginning" className="border-t border-[#d9ded8] bg-[#e9ece7] py-20 sm:py-24"><div className="page-wrap grid gap-9 lg:grid-cols-[.42fr_.58fr]"><div><p className="eyebrow">Before the coursework</p><h2 className="display mt-3 text-4xl font-extrabold">The beginning.</h2><p className="mt-4 max-w-sm leading-7 text-[#59676b]">Before CAD software, there was newspaper, tape, and a lot of trial and error.</p></div><div className="space-y-4">{childhoodProjects.map((project) => <Link key={project.slug} href={`/projects/${project.slug}`} className="group flex gap-5 border border-[#d9ded8] bg-[#fffefa] p-5 transition-colors hover:border-[#a7b4b1]"><span className="display grid h-16 w-16 shrink-0 place-items-center bg-[#192a34] text-xl font-extrabold text-[#d99d79]">01</span><span><span className="display block text-lg font-extrabold group-hover:text-[#a74727]">{project.title}</span><span className="mt-1 block text-sm leading-6 text-[#59676b]">{project.shortDescription}</span><span className="mt-3 block text-xs font-extrabold text-[#a74727]">Read the story &rarr;</span></span></Link>)}</div></div></section>}

    <section className="bg-[#192a34] py-20 text-[#fffefa] sm:py-24">
      <div className="page-wrap grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
        <div><p className="technical text-[11px] uppercase text-[#d99d79]">07 / LET’S TALK</p><h2 className="display mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">Have a question<br />worth exploring?</h2></div>
        <div><p className="max-w-2xl text-lg leading-8 text-[#c4d0d0]">I would love to hear from people working on thoughtful engineering problems. If you have an internship or job opportunity, an idea for a research paper, or simply a project that could use another curious pair of hands, please get in touch.</p><div className="mt-7 flex flex-wrap gap-3"><a href="mailto:drishdedhia2007@gmail.com" className="button-primary">Email me <span aria-hidden="true">&rarr;</span></a><a href="https://www.linkedin.com/in/drish-dedhia-2564122b1" target="_blank" rel="noopener noreferrer" className="button-light">LinkedIn <span aria-hidden="true">&rarr;</span><span className="sr-only">(opens in a new tab)</span></a></div><p className="technical mt-5 break-all text-xs text-[#9eb3b6]">drishdedhia2007@gmail.com &nbsp; / &nbsp; linkedin.com/in/drish-dedhia-2564122b1</p></div>
      </div>
    </section>
  </>;
}
