import Image from "next/image";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section className="hero-ambient relative overflow-hidden border-b border-[#35515b]">
      <div className="pointer-events-none absolute inset-0 paper-grid opacity-50" />
      <div className="page-wrap relative grid min-h-[760px] items-center gap-14 py-20 lg:grid-cols-[1.2fr_.8fr] lg:gap-8 lg:py-24">
        <div className="relative z-10 max-w-3xl">
          <p className="eyebrow">Hi, I&apos;m Drish Dedhia · Mechanical engineering at RWTH Aachen</p>
          <h1 className="display mt-7 text-[clamp(3.5rem,6vw,6.75rem)] font-extrabold leading-[1.02]">
            I want to know how it <span className="serif-accent text-[#f4b58d]">works.</span>
            <br />
            Then make it <span className="serif-accent text-[#f4b58d]">better.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#d0ded9]">
            I started by pulling apart toy cars and old appliances to see what was going on inside. Now I get to bring that same curiosity to CAD, research, and Ecogenium&apos;s chassis workshop. There is a lot I do not know yet, which means there is a lot I cannot wait to figure out.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/experience" className="button-primary">See what I&apos;m doing now <span aria-hidden="true">→</span></Link>
            <Link href="/projects" className="button-light">Explore what I&apos;ve made <span aria-hidden="true">→</span></Link>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute inset-5 rounded-full border border-[#89aba8]/40" />
          <div className="absolute -inset-4 rounded-full border border-[#e1a37d]/25" />
          <div className="formal-portrait mx-auto w-[min(78vw,390px)] border-4 border-[#d08b68] shadow-[0_28px_90px_rgba(0,0,0,.35)]">
            <Image src="/images/about/drish-formal.jpg" alt="Drish Dedhia smiling in a blazer" fill priority sizes="(max-width: 1024px) 78vw, 390px" />
          </div>
          <div className="absolute -bottom-6 left-1/2 w-max max-w-[90%] -translate-x-1/2 rounded-full border border-[#49636b] bg-[#142832] px-5 py-3 text-center text-xs font-bold tracking-wide text-[#e5eeea] shadow-xl">
            Curious mind. Busy hands. Always learning.
          </div>
        </div>
      </div>
    </section>
  );
}
