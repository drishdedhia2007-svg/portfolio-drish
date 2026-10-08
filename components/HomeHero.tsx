import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return <section className="home-hero" aria-labelledby="home-title">
    <div className="page-wrap hero-layout">
      <div className="hero-copy">
        <p className="eyebrow hero-kicker">Drish Dedhia <span aria-hidden="true">/</span> Maschinenbau at RWTH Aachen</p>
        <h1 id="home-title" className="hero-title">I want to know <em>how it works.</em></h1>
        <p className="hero-intro">I am a mechanical engineering student who likes taking a question into CAD, the workshop, or an experiment and finding out where the first answer falls short.</p>
        <p className="hero-aside">I started by pulling apart toy cars. These days I am learning from a hydrogen vehicle team, designing small things of my own, and writing down the parts I get wrong along the way.</p>
        <div className="hero-actions"><a href="#approach" className="button-primary">Explore the story <span aria-hidden="true">↘</span></a><Link href="/recruiter" className="text-link">A quick view for recruiters <span aria-hidden="true">↗</span></Link></div>
      </div>
      <figure className="hero-portrait-composition">
        <div className="portrait-coordinate portrait-coordinate-top" aria-hidden="true"><span>DD—01</span><span>50° 46&apos; N / 6° 04&apos; E</span></div>
        <div className="hero-portrait-frame"><Image src="/images/about/drish-formal.jpg" alt="Drish Dedhia smiling and facing the camera in a blazer" fill priority sizes="(max-width: 800px) 85vw, 440px" className="object-cover" /></div>
        <figcaption className="portrait-caption"><span>DRISH / 2026</span><span>Looking closely. Building carefully. Learning openly.</span></figcaption>
        <div className="portrait-measure" aria-hidden="true" />
      </figure>
    </div>
    <div className="hero-bottom page-wrap"><span>Mechanical design <i>·</i> experiments <i>·</i> the learning in between</span><a href="#approach">Scroll to begin <span aria-hidden="true">↓</span></a></div>
  </section>;
}
