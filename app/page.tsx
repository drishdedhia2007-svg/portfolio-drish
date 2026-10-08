import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import { getAllProjects } from "@/lib/projects";

const routes = [
  { number: "01", href: "/projects", title: "Projects", detail: "The models, the decisions, and the things I would change." },
  { number: "02", href: "/experience", title: "Experience", detail: "Ecogenium, an early aerospace brief, teaching, and more." },
  { number: "03", href: "/research", title: "Research", detail: "Questions that needed measurements, models, and a second look." },
  { number: "04", href: "/writing", title: "Writing", detail: "My ongoing logbook from the chassis workshop." },
  { number: "05", href: "/competitions", title: "Competitions", detail: "What deadlines and unfamiliar problems taught me." },
  { number: "06", href: "/about", title: "About", detail: "The person behind the projects, from Mumbai to Aachen." },
];

export default function Home() {
  const projects = getAllProjects();
  const [lead, ...more] = ["self-locking-towel-hook", "star-test-pad", "miniature-winners-podium"]
    .map(slug => projects.find(project => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return <>
    <HomeHero />

    <section id="approach" className="home-approach paper-section chapter">
      <div className="page-wrap approach-layout">
        <div className="chapter-index"><span>01 / APPROACH</span><span className="index-line" aria-hidden="true" /></div>
        <div className="approach-intro" data-reveal>
          <p className="eyebrow">The kind of engineer I am becoming</p>
          <h2 className="narrative-title">A neat idea is only the <em>beginning.</em></h2>
          <p>I like the part where an idea meets dimensions, materials, a deadline, or a teammate who asks a better question. That is when I have to stop guessing and make something I can test.</p>
        </div>
        <div className="approach-practices" aria-label="Areas of practice">
          <div className="practice-line" data-reveal><span>01</span><strong>CAD &amp; mechanical design</strong><p>Fusion 360, Siemens NX, and learning to model with a real use in mind.</p></div>
          <div className="practice-line" data-reveal><span>02</span><strong>Prototyping &amp; fabrication</strong><p>Preparing parts for printing and seeing how a chassis team works with composites.</p></div>
          <div className="practice-line" data-reveal><span>03</span><strong>Experiment &amp; analysis</strong><p>Testing a prediction, checking the measurements, and being willing to revise it.</p></div>
        </div>
      </div>
    </section>

    <section id="selected-work" className="home-work dark-section chapter">
      <div className="page-wrap">
        <div className="section-intro split-intro" data-reveal><div><p className="eyebrow">02 / Selected work</p><h2 className="narrative-title">A few things I <em>made, tried, and rethought.</em></h2></div><p>These are not just finished shapes. Each one marks a question I was trying to answer, and a detail I understood better by the end.</p></div>
        {lead && <Link href={`/projects/${lead.slug}`} className="work-lead" aria-label={`Read the ${lead.title} case study`}>
          <div className="work-lead-visual" data-reveal>{lead.coverImage && <Image src={lead.coverImage} alt={lead.coverAlt || lead.title} fill sizes="(max-width: 800px) 100vw, 58vw" className="object-contain" />}<span className="image-annotation">STUDY 01 / PRINT IN PLACE</span></div>
          <div className="work-lead-copy"><p className="eyebrow">Selected build / Fusion 360</p><h3>{lead.title}</h3><p>A towel hook that grips fabric using a captive ball, gravity, and friction. The mechanism drew me in; the print clearances and mounting question reminded me that a CAD model is not a working object yet.</p><span className="work-learned">What stayed with me <b>The detail you add for fun can become the part that teaches you most.</b></span><span className="text-link">Read the whole process <span aria-hidden="true">↗</span></span></div>
        </Link>}
        <div className="work-minors">{more.map((project, index) => <Link key={project.slug} href={`/projects/${project.slug}`} className="work-minor" data-reveal><span className="work-minor-number">0{index + 2} / CASE STUDY</span><div className="work-minor-thumb">{project.coverImage && <Image src={project.coverImage} alt={project.coverAlt || project.title} fill sizes="(max-width: 800px) 100vw, 20vw" className="object-contain" />}</div><div><h3>{project.title}</h3><p>{project.shortDescription}</p></div><span className="work-minor-arrow" aria-hidden="true">↗</span></Link>)}</div>
        <Link href="/projects" className="section-outlink">All project notes <span aria-hidden="true">↗</span></Link>
      </div>
    </section>

    <section className="home-experience chapter">
      <div className="page-wrap experience-layout">
        <div className="experience-copy" data-reveal><p className="eyebrow">03 / Where ideas meet other people</p><h2 className="narrative-title">Now the work has a <em>workshop.</em></h2><p>At Ecogenium, I joined the chassis department of a student team developing a hydrogen fuel cell vehicle for the Shell Eco-marathon. I am still early in it. The most useful lessons so far have come from watching geometry, composites, fabrication, and team decisions affect one another.</p><p>Before this, a virtual internship at STAR taught me to turn an idea into a model people could discuss, while also showing me how far that model was from a buildable design.</p><div className="inline-actions"><Link href="/experience#ecogenium" className="button-primary">More about the work ↗</Link><Link href="/projects/star-test-pad" className="text-link">See the early concept ↗</Link></div></div>
        <figure className="experience-visual" data-reveal><Image src="/images/experience/ecogenium-workshop.jpeg" alt="Composite material sample from Ecogenium's workshop" fill sizes="(max-width: 850px) 100vw, 46vw" className="object-cover"/><figcaption><span>FIELD NOTE / ECOGENIUM</span><span>Chassis team · Aachen</span></figcaption></figure>
      </div>
    </section>

    <section className="home-inquiry paper-section chapter">
      <div className="page-wrap inquiry-layout"><div className="inquiry-lead" data-reveal><p className="eyebrow">04 / The other questions</p><h2 className="narrative-title">Sometimes the result tells me <em>I asked it wrong.</em></h2><p>In a projectile experiment, I expected a wider gap in the launch tube to shorten the range. The data disagreed. That made the work more interesting: I had to examine the launch setup, my measurements, and an assumption borrowed from a different kind of ballistics.</p><Link href="/research" className="text-link">Read the research papers ↗</Link></div><div className="inquiry-side"><div className="inquiry-diagram" aria-hidden="true"><span className="diagram-origin">0</span><span className="diagram-arc"/><span className="diagram-axis">HYPOTHESIS → EVIDENCE</span></div><div className="inquiry-beyond" data-reveal><p className="eyebrow">Outside the workshop</p><p>Teaching with CRY taught me to change an explanation when it does not land. A Goethe scholarship made German a language I could actually live in. Competitions made me defend an idea under pressure. None of that stays outside my engineering work.</p><div className="inquiry-links"><Link href="/experience">People &amp; places ↗</Link><Link href="/competitions">Competitions ↗</Link></div></div></div></div>
    </section>

    <section className="home-writing chapter">
      <div className="page-wrap writing-home-layout"><div data-reveal><p className="eyebrow">05 / The logbook</p><h2 className="narrative-title">I write while I am <em>still figuring it out.</em></h2><p className="writing-home-description">I joined Ecogenium with more questions than answers. The Substack is where I record the mistakes, new terms, and small moments when something finally clicks, without waiting for a polished ending.</p><div className="inline-actions"><Link href="/writing" className="button-primary">Explore the writing ↗</Link><a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="text-link">Open Substack ↗</a></div></div><a className="writing-home-entry" href="https://drishdedhia23.substack.com/p/entry-three-why-am-i-looking-for" target="_blank" rel="noopener noreferrer" data-reveal><span className="technical">THE LOGBOOK OF A LEARNING ENGINEER / 03</span><strong>Why Am I Looking for <em>Shortcuts?</em></strong><p>A hotwire cutter seemed like something we could make instead of buy. That opened a new set of questions about the frame, circuitry, and CAD.</p><span className="entry-bottom">20 SEP 2026 <span>Read the entry ↗</span></span></a></div>
    </section>

    <section className="home-routes paper-section chapter"><div className="page-wrap"><div className="section-intro split-intro"><div><p className="eyebrow">06 / Keep exploring</p><h2 className="narrative-title">Follow the part that <em>caught your eye.</em></h2></div><p>A quick look might be enough for today. If a project, question, or experience stayed with you, there is more behind it.</p></div><nav className="route-list" aria-label="Explore the portfolio">{routes.map(route => <Link key={route.href} href={route.href} className="route-row"><span className="technical">{route.number}</span><strong>{route.title}</strong><span>{route.detail}</span><span className="route-arrow" aria-hidden="true">↗</span></Link>)}</nav></div></section>
  </>;
}
