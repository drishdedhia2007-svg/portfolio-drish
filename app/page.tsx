import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import ProjectRail from "@/components/ProjectRail";
import ProjectileEvidence from "@/components/ProjectileEvidence";
import { getAllProjects } from "@/lib/projects";

const featuredSlugs = [
  "self-locking-towel-hook",
  "star-test-pad",
  "miniature-winners-podium",
  "door-stopper",
  "propeller",
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
        <div className="new-method-orbit" aria-hidden="true"><span /><span /><span /></div>
        <div className="page-wrap new-method-inner">
          <p className="new-index">01 / HOW I THINK</p>
          <h2 id="method-title">Make it.<br /><em>Then make it better.</em></h2>
          <div className="new-method-bottom">
            <p>An idea gets interesting when dimensions, materials, and other people start asking questions back.</p>
            <div className="new-method-steps" aria-label="My process"><span>Model</span><i aria-hidden="true">↗</i><span>Test</span><i aria-hidden="true">↗</i><span>Rethink</span></div>
          </div>
        </div>
      </section>

      <section className="new-work" id="selected-work" aria-labelledby="work-title">
        <div className="page-wrap new-section-head">
          <div><p className="new-index">02 / ON THE CAD BENCH</p><h2 id="work-title">Made on <em>purpose.</em></h2></div>
          <p>Objects, concepts, and the wrong turns that taught me something.</p>
        </div>
        <ProjectRail projects={featured} />
        <div className="page-wrap new-work-end"><Link href="/projects" className="new-underlink">See every project <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="new-field" aria-labelledby="field-title">
        <div className="page-wrap new-field-layout">
          <div className="new-field-copy">
            <p className="new-index">03 / OUT OF THE SCREEN</p>
            <h2 id="field-title">The workshop<br /><em>has opinions.</em></h2>
            <p>At Ecogenium, I am learning how chassis geometry, composites, and a team turn a neat model into a real decision.</p>
            <Link href="/experience" className="new-underlink">Where I put it to work <span aria-hidden="true">↗</span></Link>
          </div>
          <figure className="new-field-photo">
            <Image src="/images/experience/ecogenium-workshop.jpeg" alt="Composite material sample from Ecogenium's workshop" fill sizes="(max-width: 800px) 90vw, 48vw" className="object-cover" />
            <figcaption>Field note / Ecogenium chassis team</figcaption>
          </figure>
        </div>
      </section>

      <section className="new-research" aria-labelledby="research-title">
        <div className="page-wrap new-research-layout">
          <div className="new-research-copy">
            <p className="new-index">04 / THE UNEXPECTED RESULT</p>
            <h2 id="research-title">The data said <em>otherwise.</em></h2>
            <p>I expected a wider launch-tube gap to shorten a projectile&apos;s range. Across the six gaps tested, the average went up. The no-gap control went farther still.</p>
            <Link href="/research" className="new-underlink">Read the research <span aria-hidden="true">↗</span></Link>
          </div>
          <ProjectileEvidence />
        </div>
      </section>

      <section className="new-writing" aria-labelledby="writing-title">
        <div className="page-wrap new-writing-layout">
          <div><p className="new-index">05 / NOTES FROM THE WORKSHOP</p><h2 id="writing-title">Still figuring<br /><em>it out.</em></h2><p>Short dispatches from the parts of engineering I am learning in public.</p><Link href="/writing" className="new-underlink">My writing <span aria-hidden="true">↗</span></Link></div>
          <a className="new-writing-note" href="https://drishdedhia23.substack.com/p/entry-three-why-am-i-looking-for" target="_blank" rel="noopener noreferrer"><span className="new-index">THE LOGBOOK / ENTRY 03</span><strong>Why Am I Looking for <em>Shortcuts?</em></strong><span>On making a hotwire cutter instead of buying one, and the questions that followed.</span><span className="new-note-arrow" aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="new-explore" aria-labelledby="explore-title">
        <div className="page-wrap"><p className="new-index">KEEP FOLLOWING THE THREAD</p><h2 id="explore-title">Beyond <em>CAD.</em></h2><nav aria-label="Explore more"><Link href="/competitions">Competitions <span aria-hidden="true">↗</span></Link><Link href="/about">The person behind the CAD <span aria-hidden="true">↗</span></Link><Link href="/recruiter">The quick version <span aria-hidden="true">↗</span></Link></nav></div>
      </section>
    </div>
  );
}
