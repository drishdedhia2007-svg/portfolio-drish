import Link from "next/link";
import Image from "next/image";
import HomeHero from "@/components/HomeHero";

const paths = [
  { number: "01", href: "/experience", eyebrow: "Teams & opportunities", title: "Experience", detail: "Current chassis work at Ecogenium, an early aerospace design internship, volunteering, and a fully funded German scholarship." },
  { number: "02", href: "/projects", eyebrow: "3D design portfolio", title: "Projects", detail: "CAD models, print preparation, and honest notes on what worked, what failed, and what I learned." },
  { number: "03", href: "/research", eyebrow: "Questions & evidence", title: "Research papers", detail: "Magnetic induction, projectile motion, Fourier analysis, and economic policy—with the original papers available to read." },
  { number: "04", href: "/competitions", eyebrow: "Working under pressure", title: "Competitions", detail: "Mathematics, investing, Model UN, and the outcomes that shaped my thinking." },
  { number: "05", href: "/about", eyebrow: "The fuller story", title: "More about me", detail: "Where my curiosity began, what I study, the languages I speak, and where I hope to contribute." },
];

export default function Home() {
  return <>
    <HomeHero />
    <section className="page-wrap story-section">
      <div className="grid gap-8 lg:grid-cols-[.42fr_.58fr] lg:gap-16">
        <div><p className="eyebrow">At a glance</p><h2 className="display mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">A person behind<br/>the portfolio.</h2></div>
        <p className="story-lead max-w-2xl text-lg">I am Drish, a mechanical engineering student at RWTH Aachen who grew up taking things apart to understand them. My work sits between mechanical design, practical making, and questions that deserve a careful experiment. I am currently learning with Ecogenium&apos;s chassis team while documenting the process as openly as the outcomes.</p>
      </div>
      <div className="mt-12 grid gap-3 sm:grid-cols-3">
        <div className="story-card p-6"><p className="eyebrow">Now</p><p className="display mt-3 text-xl font-extrabold">RWTH Aachen</p><p className="mt-2 text-sm text-[#54656b]">B.Sc. Mechanical Engineering</p></div>
        <div className="story-card p-6"><p className="eyebrow">Building with</p><p className="display mt-3 text-xl font-extrabold">Ecogenium</p><p className="mt-2 text-sm text-[#54656b]">Chassis department · hydrogen vehicle</p></div>
        <div className="story-card p-6"><p className="eyebrow">Working style</p><p className="display mt-3 text-xl font-extrabold">Make. Test. Learn.</p><p className="mt-2 text-sm text-[#54656b]">Useful work, documented honestly</p></div>
      </div>
    </section>
    <section className="border-y border-[#b7c3bd] bg-[#dce1dc]">
      <div className="page-wrap story-section">
        <p className="eyebrow">Start here</p><h2 className="display mt-3 max-w-2xl text-4xl font-extrabold sm:text-5xl">Follow the work, then the story.</h2>
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          {paths.map((item) => <Link href={item.href} key={item.href} className="story-card group flex min-h-52 flex-col p-7 transition-transform hover:-translate-y-1">
            <div className="flex items-start justify-between gap-4"><p className="technical text-[11px] text-[#a74727]">{item.number} / {item.eyebrow.toUpperCase()}</p><span className="text-xl text-[#a74727]" aria-hidden="true">&nearr;</span></div>
            <h3 className="display mt-6 text-2xl font-extrabold group-hover:text-[#a74727]">{item.title}</h3><p className="mt-2 max-w-lg leading-7 text-[#53666a]">{item.detail}</p>
          </Link>)}
        </div>
      </div>
    </section>
    <section className="page-wrap story-section">
      <div className="grid overflow-hidden rounded-xl bg-[#1f333c] text-[#f3f2ec] lg:grid-cols-[.95fr_1.05fr]">
        <div className="p-8 sm:p-12"><p className="technical text-[11px] uppercase text-[#e0ae89]">Currently learning / Ecogenium</p><h2 className="display mt-4 text-3xl font-extrabold sm:text-4xl">A logbook from the chassis team.</h2><p className="mt-5 leading-8 text-[#d5dfda]">Working on a student hydrogen vehicle reminds me how much engineering happens between the first idea and a trustworthy part. I write about those lessons as I encounter them.</p><div className="mt-7 flex flex-wrap gap-3"><Link href="/experience#ecogenium" className="button-primary">See the experience &rarr;</Link><a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="button-light">Read my Substack &rarr;</a></div></div>
        <div className="relative min-h-72"><Image src="/images/experience/ecogenium-workshop.jpeg" alt="Ecogenium chassis material sample photographed in the workshop" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
      </div>
    </section>
  </>;
}
