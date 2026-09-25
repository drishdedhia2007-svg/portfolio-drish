import Image from "next/image";
import Link from "next/link";
import HomeHero from "@/components/HomeHero";

const paths = [
  {
    number: "01",
    href: "/experience",
    label: "The people and places",
    title: "Experience",
    detail: "Meet the teams and people who pushed me forward: from my first aerospace design brief to Ecogenium's workshop, a Goethe scholarship, and teaching with CRY.",
  },
  {
    number: "02",
    href: "/projects",
    label: "Ideas I could not leave alone",
    title: "Projects",
    detail: "A door that would not stay open. A towel hook with a clever little mechanism. I like chasing those everyday problems into CAD and seeing whether the idea still works when it has dimensions.",
  },
  {
    number: "03",
    href: "/research",
    label: "Questions that needed evidence",
    title: "Research papers",
    detail: "Follow the experiments and models behind my questions, including a projectile study that refused to agree with my hypothesis and became more interesting because of it.",
  },
  {
    number: "04",
    href: "/competitions",
    label: "A little healthy pressure",
    title: "Competitions",
    detail: "Mathematics, investing, debate, and sport each gave me a different reason to prepare well, think quickly, and keep going.",
  },
  {
    number: "05",
    href: "/about",
    label: "The person behind the work",
    title: "More about me",
    detail: "Where I started, what I am studying now, the languages I speak, and the kind of engineer I hope to become.",
  },
];

export default function Home() {
  return (
    <>
      <HomeHero />
      <section className="page-wrap story-section">
        <div className="grid gap-10 lg:grid-cols-[.4fr_.6fr] lg:gap-20">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2 className="display mt-4 text-4xl font-extrabold leading-tight sm:text-5xl">
              Small questions have a way of becoming <span className="serif-accent text-[#f4b58d]">big adventures.</span>
            </h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-[#c7d5d0]">
            <p>One day I am figuring out why my door will not stay open in the wind. Another day I am asking what a chassis material really has to survive. I love that engineering makes room for both questions, and that neither one is solved by just making something look right.</p>
            <p>I study mechanical engineering at RWTH Aachen. With Ecogenium&apos;s chassis team, I am beginning to see what happens when ideas meet materials, teammates, and workshop constraints. On my own, I open Fusion 360 or Siemens NX to see if I can give the shape in my head sensible dimensions. The first version is rarely the last; that is usually when I learn the most.</p>
            <p>I made this site to show the whole process: the excitement, the wrong turns, what I changed, and the next question I want to chase. I hope you will find something here that makes you curious too.</p>
          </div>
        </div>
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-[#35515b] bg-[#35515b] sm:grid-cols-3">
          <div className="bg-[#162a33] p-6"><p className="eyebrow">Where I am</p><p className="display mt-3 text-xl font-extrabold">RWTH Aachen</p><p className="mt-2 text-sm text-[#c0cfca]">Mechanical engineering student</p></div>
          <div className="bg-[#162a33] p-6"><p className="eyebrow">What I am building with</p><p className="display mt-3 text-xl font-extrabold">Ecogenium</p><p className="mt-2 text-sm text-[#c0cfca]">Learning in the chassis department</p></div>
          <div className="bg-[#162a33] p-6"><p className="eyebrow">What keeps me going</p><p className="display mt-3 text-xl font-extrabold">The next version</p><p className="mt-2 text-sm text-[#c0cfca]">A better question, model, or explanation</p></div>
        </div>
      </section>

      <section className="border-y border-[#35515b] bg-[#12252e]">
        <div className="page-wrap story-section">
          <p className="eyebrow">Find your way around</p>
          <div className="mt-3 flex flex-wrap items-end justify-between gap-6">
            <h2 className="display max-w-2xl text-4xl font-extrabold leading-tight sm:text-5xl">There is more than one way into the story.</h2>
            <p className="max-w-sm text-sm leading-7 text-[#c0cfca]">For a quick introduction, begin with the teams and opportunities. If a design or question catches your eye first, follow that instead.</p>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {paths.map((item, index) => (
              <Link
                href={item.href}
                key={item.href}
                className={`story-card group relative flex min-h-64 flex-col justify-between overflow-hidden p-7 transition-all hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(0,0,0,.22)] sm:p-9 ${index === 0 ? "md:col-span-2" : ""}`}
              >
                <div className="relative z-10">
                  <p className="technical text-[11px] uppercase text-[#f4b58d]">{item.number} / {item.label}</p>
                  <h3 className="display mt-6 text-3xl font-extrabold sm:text-4xl">{item.title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-[#c7d5d0]">{item.detail}</p>
                </div>
                <span className="relative z-10 mt-8 inline-flex items-center gap-2 text-sm font-extrabold text-[#f4b58d] group-hover:gap-4">Explore {item.title.toLowerCase()} <span aria-hidden="true">→</span></span>
                <span className="pointer-events-none absolute -bottom-12 right-3 display text-[11rem] font-extrabold leading-none text-white/[.035]" aria-hidden="true">{item.number}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="page-wrap story-section">
        <div className="grid overflow-hidden rounded-2xl border border-[#35515b] bg-[#1a303a] lg:grid-cols-[1fr_.92fr]">
          <div className="p-8 sm:p-12">
            <p className="eyebrow">Right now / Ecogenium</p>
            <h2 className="display mt-4 text-3xl font-extrabold sm:text-4xl">Learning in the workshop, writing it down as I go.</h2>
            <p className="mt-5 text-base leading-8 text-[#c7d5d0]">Joining a student team building a hydrogen vehicle has been exciting and humbling in equal measure. I write about being new to the chassis team while it is happening: the questions I ask, the details I miss, and the things that finally click. If you are learning something difficult too, I hope the notes feel like good company.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/experience#ecogenium" className="button-primary">Meet the team through my experience <span aria-hidden="true">→</span></Link>
              <a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="button-light">Read the logbook <span aria-hidden="true">→</span></a>
            </div>
          </div>
          <div className="relative min-h-72"><Image src="/images/experience/ecogenium-workshop.jpeg" alt="A chassis material sample photographed during Ecogenium workshop work" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" /></div>
        </div>
      </section>
    </>
  );
}
