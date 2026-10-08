import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="new-hero" aria-labelledby="home-title">
      <div className="new-hero-light" aria-hidden="true" />
      <div className="page-wrap new-hero-layout">
        <div className="new-hero-copy">
          <p className="new-index">DRISH DEDHIA / MECHANICAL ENGINEERING / RWTH AACHEN</p>
          <h1 id="home-title">Curiosity has <em>moving parts.</em></h1>
          <p>I take questions into CAD, the workshop, or an experiment—and see what the first answer missed.</p>
          <div className="new-hero-links"><a href="#selected-work" className="new-pill-link">See what I make <span aria-hidden="true">↗</span></a><Link href="/recruiter" className="new-underlink">A quick view for recruiters <span aria-hidden="true">↗</span></Link></div>
        </div>
        <figure className="new-hero-portrait">
          <div className="new-portrait-halo" aria-hidden="true" />
          <div className="new-portrait-image"><Image src="/images/about/drish-formal.jpg" alt="Drish Dedhia smiling and facing the camera in a blazer" fill priority sizes="(max-width: 800px) 76vw, 420px" className="object-cover" /></div>
          <figcaption>From toy cars to hydrogen vehicles.<br />Still taking things apart in my head.</figcaption>
          <span className="new-portrait-index" aria-hidden="true">DD / 01</span>
        </figure>
      </div>
      <div className="page-wrap new-hero-floor"><span>DRAWING · BUILDING · QUESTIONING</span><a href="#approach">Scroll a little <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
