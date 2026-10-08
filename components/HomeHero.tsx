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
          <p>I like finding out what happens when a question becomes a model, a test, or something I can hold in my hands. Usually, the interesting part starts when the first answer is wrong.</p>
          <div className="new-hero-links"><a href="#selected-work" className="new-pill-link">See what I make <span aria-hidden="true">↗</span></a><Link href="/recruiter" className="new-underlink">A quick view for recruiters <span aria-hidden="true">↗</span></Link></div>
        </div>
        <div className="new-hero-portrait">
          <TechnicalSpline className="new-portrait-spline" variant="short" />
          <span className="new-portrait-coordinate" aria-hidden="true">X 07.3 / Y 21.8</span>
          <Link href="/about" className="new-portrait-link" aria-label="Meet Drish Dedhia on the About page">
            <span className="new-portrait-image"><Image src="/images/about/drish-formal.jpg" alt="Drish Dedhia smiling and facing the camera in a blazer" fill priority sizes="(max-width: 800px) 230px, 270px" className="object-cover" /></span>
            <span className="new-portrait-caption">A little more about me <span aria-hidden="true">↗</span></span>
          </Link>
          <span className="new-portrait-index" aria-hidden="true">FIG. 01 / THE PERSON</span>
        </div>
      </div>
      <div className="page-wrap new-hero-floor"><span>DRAWING · BUILDING · QUESTIONING</span><a href="#approach">Scroll a little <span aria-hidden="true">↓</span></a></div>
    </section>
  );
}
