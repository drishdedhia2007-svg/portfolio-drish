import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import ProjectCard from "@/components/ProjectCard";
import { getAllProjects } from "@/lib/projects";

const paths = [
  { number: "01", href: "/experience", label: "People and places", title: "Experience", detail: "From my first aerospace design brief to Ecogenium's workshop, a Goethe scholarship, and teaching with CRY." },
  { number: "02", href: "/projects", label: "Things I've made", title: "Projects", detail: "A door that would not stay open. A towel hook with a clever mechanism. Ideas that had to make sense once they had dimensions." },
  { number: "03", href: "/research", label: "Questions and evidence", title: "Research", detail: "Experiments and models, including a projectile study that refused to agree with my hypothesis." },
  { number: "04", href: "/writing", label: "Notes from the workshop", title: "Writing", detail: "A real-time logbook of learning with Ecogenium, from the first mistakes to the details that finally click." },
  { number: "05", href: "/competitions", label: "Thinking under pressure", title: "Competitions", detail: "Mathematics, investing, debate, and sport each gave me a different reason to prepare and keep going." },
  { number: "06", href: "/about", label: "The person behind the work", title: "About", detail: "Where I started, what I am studying now, the languages I speak, and where I hope to go." },
];

export default function Home() {
  const projects = getAllProjects();
  const featured = ["star-test-pad", "self-locking-towel-hook", "miniature-winners-podium"]
    .map(slug => projects.find(project => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));
  return <>
    <HomeHero />
    <section id="start" className="page-wrap story-section intro-section">
      <div className="section-heading" data-reveal><p className="eyebrow">A little about me / 001</p><h2 className="display">Small questions have a way of becoming <em>big adventures.</em></h2></div>
      <div className="intro-body" data-reveal><p>One day I am figuring out why my door will not stay open in the wind. Another day I am asking what a chassis material really has to survive. I love that engineering makes room for both questions, and that neither one is solved by just making something look right.</p><p>I study mechanical engineering at RWTH Aachen. With Ecogenium&apos;s chassis team, I am beginning to see what happens when ideas meet materials, teammates, and workshop constraints. On my own, I open Fusion 360 or Siemens NX to see if I can give the shape in my head sensible dimensions. The first version is rarely the last; that is usually when I learn the most.</p><p>I made this site to show the whole process: the excitement, the wrong turns, what I changed, and the next question I want to chase. I hope you will find something here that makes you curious too.</p><Link href="/about" className="text-link">A bit more about me <span aria-hidden="true">↗</span></Link></div>
    </section>
    <section className="feature-section"><div className="page-wrap story-section"><div className="feature-heading" data-reveal><div><p className="eyebrow">On the workbench / 002</p><h2 className="display">Ideas with <em>dimensions.</em></h2></div><Link href="/projects" className="text-link">All project notes <span aria-hidden="true">↗</span></Link></div><p className="section-lead">I like showing the decisions alongside the finished model. Here are three very different places that habit has taken me.</p><div className="featured-projects">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} index={index + 1} />)}</div></div></section>
    <section className="page-wrap story-section current-section"><div className="current-photo" data-reveal><Image src="/images/experience/ecogenium-workshop.jpeg" alt="A material sample from Ecogenium's workshop" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover"/><span>WORKSHOP NOTE / 001</span></div><div className="current-copy" data-reveal><p className="eyebrow">Right now / 003</p><h2 className="display">Learning in the workshop, <em>writing it down.</em></h2><p>Joining a student team building a hydrogen vehicle has been exciting and humbling in equal measure. I write about being new to the chassis team while it is happening: the questions I ask, the details I miss, and the things that finally click. If you are learning something difficult too, I hope the notes feel like good company.</p><div className="flex flex-wrap gap-3"><Link href="/experience#ecogenium" className="button-primary">My Ecogenium experience ↗</Link><Link href="/writing" className="button-light">Read the logbook ↗</Link></div></div></section>
    <section className="path-section"><div className="page-wrap story-section"><div className="feature-heading" data-reveal><div><p className="eyebrow">Find your way around / 004</p><h2 className="display">Follow what <em>catches your eye.</em></h2></div><p>For a quick introduction, begin with the teams and opportunities. If a design or question catches your eye first, follow that instead.</p></div><div className="path-grid">{paths.map(item => <Link href={item.href} key={item.href} className="path-card" data-reveal><span className="path-number">{item.number} / {item.label}</span><span className="path-title">{item.title}</span><span className="path-detail">{item.detail}</span><span className="path-arrow" aria-hidden="true">↗</span></Link>)}</div></div></section>
  </>;
}
