import Image from "next/image";
import Link from "next/link";
import TechnicalSpline from "@/components/TechnicalSpline";

export default function HomeHero() {
  return (
    <section className="new-hero" aria-labelledby="home-title">
      <div className="new-hero-light" aria-hidden="true" />
      <div className="page-wrap new-hero-layout">
        <div className="new-hero-copy">
          <p className="new-index">DRISH DEDHIA / MECHANICAL ENGINEERING / RWTH AACHEN</p>
          <h1 id="home-title">Curiosity has <em>moving parts.</em></h1>
          <p>The interesting part starts when a neat model meets an awkward result. I follow that moment through CAD, composite chassis work, and X-ray CT scans.</p>
          <div className="new-hero-links"><a href="#build-sheet" className="new-pill-link">See what I&apos;m working on <span aria-hidden="true">↗</span></a><Link href="/recruiter" className="new-underlink">A quick view for recruiters <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="new-hero-portrait">
          <TechnicalSpline className="new-portrait-spline" variant="short" />
          <Link href="/about" className="new-portrait-link" aria-label="Meet Drish Dedhia on the About page">
            <span className="new-portrait-image"><Image src="/images/about/drish-formal.jpg" alt="Drish Dedhia smiling and facing the camera in a blazer" width={739} height={1600} priority sizes="(max-width: 800px) 220px, 260px" className="new-portrait-photo" /></span>
            <span className="new-portrait-caption">A little more about me <span aria-hidden="true">↗</span></span>
          </Link>
        </div>
      </div>
      <div className="page-wrap new-hero-floor"><span>DRAWING · BUILDING · QUESTIONING</span></div>
    </section>
  );
}
