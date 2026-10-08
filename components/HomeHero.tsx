import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return <section className="home-hero" aria-labelledby="home-title">
    <div className="page-wrap hero-layout">
      <div className="hero-copy">
        <p className="eyebrow">Drish Dedhia / Mechanical Engineering / RWTH Aachen</p>
        <h1 id="home-title" className="hero-title">I want to know <em>how it works.</em><br />Then make it <em>better.</em></h1>
        <p className="hero-intro">I started by pulling apart toy cars and old appliances to see what was going on inside. Now I bring that same curiosity to CAD, research, and Ecogenium&apos;s chassis workshop. There is a lot I do not know yet, which means there is a lot I cannot wait to figure out.</p>
        <div className="hero-actions"><Link href="/projects" className="button-primary">Explore the work <span aria-hidden="true">↗</span></Link><Link href="/about" className="button-light">Meet Drish <span aria-hidden="true">↗</span></Link></div>
        <div className="hero-index" aria-label="Portfolio at a glance"><span><strong>01</strong> Mechanical engineering student</span><span><strong>02</strong> CAD and hands-on projects</span><span><strong>03</strong> Learning out loud</span></div>
      </div>
      <div className="hero-visual" aria-label="Portrait and engineering work">
        <div className="hero-visual-grid" aria-hidden="true" />
        <figure className="hero-portrait"><Image src="/images/about/drish-formal.jpg" alt="Drish Dedhia smiling in a blazer" fill priority sizes="(max-width: 900px) 70vw, 380px" className="object-cover" /></figure>
        <figure className="hero-model"><Image src="/images/projects/self-locking-hook/studio-visualization.png" alt="CAD visualization of Drish's self-locking towel hook" fill sizes="(max-width: 900px) 48vw, 260px" className="object-contain" /><figcaption>CAD study / 002</figcaption></figure>
        <div className="hero-orbit" aria-hidden="true"><span>?</span></div><span className="hero-visual-note">Sketch → model → question → repeat</span>
      </div>
    </div>
    <div className="hero-bottom page-wrap"><span>Curiosity has a workshop address now.</span><a href="#start" aria-label="Scroll to the introduction">Scroll to explore ↓</a></div>
  </section>;
}
