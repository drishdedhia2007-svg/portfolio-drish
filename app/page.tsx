import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import ProjectRail from "@/components/ProjectRail";
import TechnicalSpline from "@/components/TechnicalSpline";
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

      <section className="new-method" id="approach" aria-labelledby="method-title">
        <TechnicalSpline className="new-method-spline" variant="wide" />
        <div className="page-wrap new-method-inner">
          <p className="new-index">01 / A LITTLE ABOUT ME</p>
          <h2 id="method-title">Make it.<br /><em>Then make it better.</em></h2>
          <div className="new-method-bottom">
            <p>I study mechanical engineering at RWTH Aachen. I love the moment an idea leaves my head and meets dimensions, materials, and other people&apos;s questions.</p>
            <Link href="/about" className="new-underlink">Get to know me <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
      </section>

      <section className="new-work" id="selected-work" aria-labelledby="work-title">
        <div className="page-wrap new-section-head">
          <div><p className="new-index">02 / SELECTED WORK</p><h2 id="work-title">Ideas with <em>edges.</em></h2></div>
          <p>A few things I&apos;ve modelled, questioned, and learned from.</p>
        </div>
        <ProjectRail projects={featured} />
        <div className="page-wrap new-work-end"><Link href="/projects" className="new-underlink">All projects and the stories behind them <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="new-field" aria-labelledby="field-title">
        <div className="page-wrap new-field-layout">
          <div className="new-field-copy">
            <p className="new-index">03 / IN PROGRESS</p>
            <h2 id="field-title">On the <em>build sheet.</em></h2>
            <p>Building a chassis in one team; looking inside components in another.</p>
          </div>
          <div className="new-role-list">
            <Link href="/experience#ecogenium" className="new-role">
              <span className="new-role-meta">01 / CHASSIS DESIGN &amp; PRODUCTION</span>
              <strong>Ecogenium</strong>
              <span>Hydrogen vehicle · RWTH Aachen</span>
              <p>Fabricating composite chassis components, preparing tooling, and solving production snags through testing.</p>
              <span className="new-role-arrow" aria-hidden="true">↗</span>
            </Link>
            <Link href="/experience#student-assistant" className="new-role">
              <span className="new-role-meta">02 / STUDENT RESEARCH ASSISTANT</span>
              <strong>WZL | IQS</strong>
              <span>Industrial X-ray CT · RWTH Aachen</span>
              <p>Helping prepare scans, reconstruct 3D volume data, and evaluate component quality without cutting the component open.</p>
              <span className="new-role-arrow" aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
        <TechnicalSpline className="new-field-spline" variant="short" />
      </section>

      <section className="new-research" aria-labelledby="research-title">
        <div className="page-wrap">
          <p className="new-index">04 / RESEARCH</p>
          <div className="new-research-head"><h2 id="research-title">Where the <em>why</em> went.</h2><p>Experiments and models that got more interesting when the first answer did not hold.</p></div>
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
          <div><p className="new-index">05 / WRITING</p><h2 id="writing-title">And the thoughts <em>in between.</em></h2></div>
          <div className="new-writing-door"><p className="new-writing-kicker">MY SUBSTACK</p><h3>The Logbook of a <em>Learning Engineer</em></h3><p>Notes from learning in public: new questions, small mistakes, and the occasional thing that finally clicks.</p><Link href="/writing" className="new-underlink">Open the logbook <span aria-hidden="true">↗</span></Link></div>
        </div>
      </section>

      <section className="new-explore" aria-labelledby="explore-title">
        <TechnicalSpline className="new-explore-spline" variant="short" />
        <div className="page-wrap"><p className="new-index">IF YOU WANT TO GO FURTHER</p><h2 id="explore-title">There&apos;s more to <em>the story.</em></h2><nav aria-label="Explore more"><Link href="/about">About me <span aria-hidden="true">↗</span></Link><Link href="/experience">Experience <span aria-hidden="true">↗</span></Link><Link href="/competitions">Competitions <span aria-hidden="true">↗</span></Link><Link href="/recruiter">A quick view <span aria-hidden="true">↗</span></Link></nav></div>
      </section>
    </div>
  );
}
