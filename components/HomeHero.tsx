"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomeHero() {
  const [assembled, setAssembled] = useState(false);
  const router = useRouter();
  const transition = "transform 1.25s cubic-bezier(0.22, 1, 0.36, 1)";

  function handleViewProjects() {
    if (assembled) return;
    setAssembled(true);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.setTimeout(() => router.push("/projects"), reducedMotion ? 0 : 1250);
  }

  return (
    <section className="blueprint-grid relative overflow-hidden bg-[#192a34] text-[#f7f5ef]">
      <div className="pointer-events-none absolute -right-20 top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#527681]/20 blur-3xl" />
      <div className="page-wrap relative grid min-h-[640px] items-center gap-8 py-20 lg:grid-cols-[.93fr_1.07fr] lg:py-28">
        <div className="relative z-10 max-w-xl">
          <p className="technical mb-7 text-[11px] uppercase text-[#d99d79]">Field notes / mechanical engineering / Aachen</p>
          <h1 className="display text-[clamp(3.7rem,8vw,7rem)] font-extrabold leading-[.98] text-[#fffefa]">Built to<br /><span className="text-[#d99d79]">figure it out.</span></h1>
          <p className="mt-7 max-w-lg text-lg leading-8 text-[#c4d0d0]">I am Drish Dedhia, a mechanical engineering student at RWTH Aachen. This is a living record of the things I make, test, and learn along the way.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <button type="button" onClick={handleViewProjects} disabled={assembled} className="button-primary disabled:cursor-wait">{assembled ? "Assembling..." : "Explore projects"} <span aria-hidden="true">&rarr;</span></button>
            <Link href="/about" className="button-light">My story</Link>
          </div>
          <p className="technical mt-12 text-[10px] uppercase text-[#8ca4a9]">Curiosity is a design tool. &nbsp; / &nbsp; Scroll to explore</p>
        </div>

        <div className="relative flex min-h-[310px] items-center justify-center lg:min-h-[470px]" aria-hidden="true">
          <span className="technical absolute left-1 top-0 text-[10px] text-[#86a0a5]">FIG. 01 &nbsp; / &nbsp; ASSEMBLY STUDY</span>
          <span className="technical absolute bottom-0 right-0 text-[10px] text-[#86a0a5]">CONCEPT: CURIOSITY IN MOTION</span>
          <svg viewBox="0 0 700 450" className="w-full max-w-[700px] overflow-visible" fill="none">
            <circle cx="350" cy="226" r="191" stroke="#607780" strokeWidth="1" strokeDasharray="3 9" opacity=".5" />
            <path d="M62 335H641M96 355H609M151 60H560" stroke="#607780" strokeWidth="1" opacity=".5" />
            <path d="M125 81V365M585 81V365" stroke="#607780" strokeWidth="1" strokeDasharray="4 8" opacity=".4" />
            <g style={{ transform: assembled ? "translate(0px, 0px)" : "translate(-22px, 13px) rotate(-2deg)", transition }}>
              <g className="float-part">
                <path d="M117 237L147 192H530L577 235L593 267V294H100V262L117 237Z" fill="#66838a" stroke="#e1e5dd" strokeWidth="2" />
                <path d="M110 273H583" stroke="#d0d9d2" strokeWidth="2" />
                <path d="M98 256H128M566 255H593" stroke="#db885d" strokeWidth="9" strokeLinecap="round" />
                <path d="M294 201V264M306 201V264" stroke="#d0d9d2" strokeWidth="1" opacity=".7" />
              </g>
            </g>
            <g style={{ transform: assembled ? "translate(0px, 0px)" : "translate(7px, -78px) rotate(5deg)", transition }}>
              <g className="float-part" style={{ animationDelay: ".3s" }}>
                <path d="M186 192L238 127Q257 115 275 115H419Q444 115 466 133L517 192H186Z" fill="#365661" stroke="#e1e5dd" strokeWidth="2" />
                <path d="M248 135L219 183H334V129H274Q259 129 248 135ZM347 129V183H487L456 143Q441 129 421 129H347Z" fill="#9fb9bc" opacity=".52" />
              </g>
            </g>
            <g style={{ transform: assembled ? "translate(0px, 0px)" : "translate(-82px, 58px) rotate(-25deg)", transition }}>
              <g className="float-part" style={{ animationDelay: ".6s" }}><circle cx="209" cy="292" r="49" fill="#17252e" stroke="#db885d" strokeWidth="3" /><circle cx="209" cy="292" r="27" stroke="#9db1b3" strokeWidth="2" /><circle cx="209" cy="292" r="7" fill="#db885d" /></g>
            </g>
            <g style={{ transform: assembled ? "translate(0px, 0px)" : "translate(88px, 68px) rotate(28deg)", transition }}>
              <g className="float-part" style={{ animationDelay: ".9s" }}><circle cx="483" cy="292" r="49" fill="#17252e" stroke="#db885d" strokeWidth="3" /><circle cx="483" cy="292" r="27" stroke="#9db1b3" strokeWidth="2" /><circle cx="483" cy="292" r="7" fill="#db885d" /></g>
            </g>
            <path d="M342 45V95M334 69H350M352 358V410M344 387H360" stroke="#db885d" strokeWidth="1.5" opacity=".75" />
          </svg>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-4">
        <div className="page-wrap flex flex-wrap items-center justify-between gap-2 text-[11px] text-[#9eb3b6]"><span className="technical">ENGINEERING IS AN ITERATIVE PROCESS</span><span className="technical">EST. IN CURIOSITY &nbsp; / &nbsp; UPDATED AS I BUILD</span></div>
      </div>
    </section>
  );
}
