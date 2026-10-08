import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import ProjectRail from "@/components/ProjectRail";
import TechnicalSpline from "@/components/TechnicalSpline";
import LineCluster from "@/components/LineCluster";
import { getAllProjects } from "@/lib/projects";

const featuredSlugs = ["self-locking-towel-hook", "star-test-pad", "miniature-winners-podium", "door-stopper", "propeller"];

const research = [
  { field: "PHYSICS", title: "How magnet arrangement changes an induction response", note: "The geometry of a magnetic field, measured at different speeds." },
  { field: "EXPERIMENTAL MECHANICS", title: "When my projectile hypothesis failed", note: "A neat prediction met a result that went the other way." },
  { field: "MATHEMATICS", title: "What a guitar string looks like in frequency space", note: "The hidden structure inside a familiar sound." },
  { field: "ECONOMICS", title: "Three policy choices, three different trade-offs", note: "Models make the costs of a decision harder to ignore." },
  { field: "CHEMISTRY / DRAFT", title: "Do cooking oils release different amounts of heat?", note: "An open-flame experiment whose answer is still unresolved." },
];

export default function Home() {
  const allProjects = getAllProjects();
  const featured = featuredSlugs
    .map((slug) => allProjects.find((project) => project.slug === slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <div className="new-home">
      <HomeHero />

      <section className="new-field" id="build-sheet" aria-labelledby="field-title">
        <div className="page-wrap new-field-layout">
          <div className="new-field-copy">
            <p className="new-index">01 / CURRENT WORK</p>
            <h2 id="field-title">The <em>build sheet.</em></h2>
            <p>Engineering gets interesting when a part leaves the CAD window. I build composite chassis components and help inspect technical parts with industrial CT.</p>
          </div>
          <div className="new-role-list">
            <Link href="/experience#ecogenium" className="new-role">
              <span className="new-role-meta">01 / CHASSIS DESIGN &amp; PRODUCTION</span>
              <strong>Ecogenium</strong>
              <span>Hydrogen vehicle · RWTH Aachen</span>
              <p>A chassis part has to work in the shop. I help prepare tooling, fabricate composite components, and adjust the process when production gets tricky.</p>
              <LineCluster kind="fabrication" className="new-role-trajectory" />
              <span className="new-role-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link href="/experience#student-assistant" className="new-role">
              <span className="new-role-meta">02 / STUDENT RESEARCH ASSISTANT</span>
              <strong>WZL | IQS</strong>
              <span>Industrial X-ray CT · RWTH Aachen</span>
              <p>A CT scan should tell us something useful about a part. I help prepare measurements, reconstruct volumes, and evaluate quality without cutting it open.</p>
              <LineCluster kind="inspection" className="new-role-trajectory" />
              <span className="new-role-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <TechnicalSpline className="new-field-spline" variant="short" />
      </section>

      <section className="new-work" id="selected-work" aria-labelledby="work-title">
        <div className="page-wrap new-section-head">
          <div><p className="new-index">02 / PROJECTS</p><h2 id="work-title">What I tried, <em>and why.</em></h2></div>
          <p>A tidy render can hide a bad assumption. These CAD studies show the choices, mistakes, and new tools behind each idea.</p>
        </div>
        <ProjectRail projects={featured} />
        <div className="page-wrap new-work-end"><Link href="/projects" className="new-underlink">All projects and the stories behind them <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="new-research" aria-labelledby="research-title">
        <div className="page-wrap">
          <p className="new-index">03 / RESEARCH</p>
          <div className="new-research-head"><h2 id="research-title">I had to <em>find out.</em></h2><p>Some questions get more interesting when the evidence disagrees. These papers follow experiments and models through the assumptions that did not hold.</p></div>
          <nav className="new-paper-line" aria-label="Research papers">
            {research.map((paper, index) => <Link href="/research" className="new-paper" key={paper.title}>
              <span className="new-paper-meta">{String(index + 1).padStart(2, "0")} / {paper.field}</span>
              <strong>{paper.title}</strong>
              <span className="new-paper-note">{paper.note}</span>
              <span className="new-paper-arrow" aria-hidden="true">↗</span>
            </Link>)}
          </nav>
          <Link href="/research" className="new-underlink new-research-link">Read the papers <span aria-hidden="true">↗</span></Link>
        </div>
      </section>

      <section className="new-writing" aria-labelledby="writing-title">
        <div className="page-wrap new-writing-layout">
          <div><p className="new-index">04 / WRITING</p><h2 id="writing-title">What I don&apos;t want <em>to forget.</em></h2></div>
          <div className="new-writing-door"><p className="new-writing-kicker">MY SUBSTACK</p><h3>The Logbook of a <em>Learning Engineer</em></h3><p>Workshop problems rarely wait for a polished ending. My Ecogenium logbook keeps the mistakes, new terms, and small breakthroughs in the story.</p><Link href="/writing" className="new-underlink">Open the logbook <span aria-hidden="true">↗</span></Link></div>
          <LineCluster kind="writing" className="new-writing-thread" />
        </div>
      </section>

      <section className="new-method new-method--closing" id="approach" aria-labelledby="method-title">
        <TechnicalSpline className="new-method-spline" variant="wide" />
        <div className="page-wrap new-method-inner">
          <p className="new-index">05 / A LITTLE ABOUT ME</p>
          <h2 id="method-title">Make it.<br /><em>Then make it better.</em></h2>
          <div className="new-method-bottom">
            <p>I grew up taking things apart in Mumbai. At RWTH Aachen, the questions are bigger, but I still learn by making, measuring, and asking what I missed.</p>
            <Link href="/about" className="new-underlink">Get to know me <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
