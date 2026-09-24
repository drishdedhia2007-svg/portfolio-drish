"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const clamp = (n: number) => Math.max(0, Math.min(1, n));

function Star({ x, y, size = 7 }: { x: number; y: number; size?: number }) {
  return <path d={`M${x} ${y - size}L${x + size * .2} ${y - size * .2}L${x + size} ${y + size * .5}L${x + size * .15} ${y + size * .2}L${x} ${y + size}L${x - size * .15} ${y + size * .2}L${x - size} ${y + size * .5}L${x - size * .2} ${y - size * .2}Z`} fill="#ffd3c5" />;
}

function Wheel({ x }: { x: number }) {
  return <g>
    <circle cx={x} cy="296" r="45" fill="#101a20" stroke="#aec1c2" strokeWidth="2" />
    <circle cx={x} cy="296" r="35" fill="#25343a" stroke="#84999d" strokeWidth="2" />
    <circle cx={x} cy="296" r="25" fill="#bbc7c4" stroke="#f2f3e9" strokeWidth="2" />
    {[0, 72, 144, 216, 288].map((angle) => <path key={angle} d={`M${x - 5} 292L${x - 8} 273L${x + 7} 273L${x + 4} 292Z`} fill="#536971" transform={`rotate(${angle} ${x} 296)`} />)}
    <circle cx={x} cy="296" r="8" fill="#e7e8de" stroke="#536971" strokeWidth="2" />
    <circle cx={x} cy="296" r="4" fill="#62767b" />
  </g>;
}

export default function HomeHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const section = sectionRef.current;
        if (!section) return;
        const travel = Math.max(1, section.offsetHeight - window.innerHeight);
        const next = media.matches ? 1 : clamp(-section.getBoundingClientRect().top / travel);
        setProgress((previous) => Math.abs(previous - next) > .003 ? next : previous);
      });
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    media.addEventListener("change", update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
      media.removeEventListener("change", update);
    };
  }, []);

  const part = (x: number, y: number, rotation = 0, cx = 390, cy = 230) => {
    const remaining = 1 - progress;
    return `translate(${x * remaining} ${y * remaining}) rotate(${rotation * remaining} ${cx} ${cy})`;
  };

  return <section ref={sectionRef} className="blueprint-grid relative h-[185svh] bg-[#192a34] text-[#f7f5ef]" aria-label="Introduction and scroll-assembled car illustration">
    <div className="sticky top-0 flex h-svh min-h-[540px] flex-col overflow-hidden">
      <div className="pointer-events-none absolute -right-20 top-[-12rem] h-[30rem] w-[30rem] rounded-full bg-[#527681]/20 blur-3xl" />
      <div className="page-wrap relative grid min-h-0 flex-1 items-center gap-5 py-9 lg:grid-cols-[.83fr_1.17fr] lg:gap-9 lg:py-16">
        <div className="relative z-10 max-w-xl">
          <p className="technical mb-5 text-[10px] uppercase text-[#d99d79] sm:mb-7 sm:text-[11px]">Field notes / mechanical engineering / Aachen</p>
          <h1 className="display text-[clamp(3.1rem,7.3vw,6.6rem)] font-extrabold leading-[.98] text-[#fffefa]">Built to<br /><span className="text-[#d99d79]">figure it out.</span></h1>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#c4d0d0] sm:mt-7 sm:text-lg sm:leading-8">I am Drish Dedhia, a mechanical engineering student at RWTH Aachen. This is a living record of the things I make, test, and learn along the way.</p>
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-9">
            <Link href="/projects" className="button-primary">Explore projects <span aria-hidden="true">&rarr;</span></Link>
            <Link href="/about" className="button-light">My story</Link>
          </div>
          <p className="technical mt-7 text-[10px] uppercase text-[#9db5b8] sm:mt-12">Scroll to assemble the study &nbsp; / &nbsp; {Math.round(progress * 100).toString().padStart(2, "0")}%</p>
        </div>
        <div className="relative flex min-h-0 items-center justify-center lg:min-h-[440px]" aria-hidden="true">
          <span className="technical absolute left-0 top-0 text-[10px] text-[#86a0a5]">FIG. 01 &nbsp; / &nbsp; E-CLASS DESIGN STUDY</span>
          <svg viewBox="0 0 760 420" className="w-full max-w-[760px] overflow-visible" fill="none" role="presentation">
            <defs>
              <linearGradient id="body" x1="90" y1="160" x2="660" y2="330" gradientUnits="userSpaceOnUse"><stop stopColor="#bdc8c3" /><stop offset=".38" stopColor="#718c91" /><stop offset=".72" stopColor="#496671" /><stop offset="1" stopColor="#273c47" /></linearGradient>
              <linearGradient id="glass" x1="360" y1="105" x2="535" y2="200" gradientUnits="userSpaceOnUse"><stop stopColor="#bed7d7" /><stop offset="1" stopColor="#4d7179" /></linearGradient>
              <linearGradient id="chrome" x1="100" y1="220" x2="220" y2="290" gradientUnits="userSpaceOnUse"><stop stopColor="#f8f4e8" /><stop offset=".52" stopColor="#95a8a8" /><stop offset="1" stopColor="#d7e0d7" /></linearGradient>
              <linearGradient id="lamp" x1="630" y1="188" x2="687" y2="240" gradientUnits="userSpaceOnUse"><stop stopColor="#f27766" /><stop offset="1" stopColor="#882d32" /></linearGradient>
            </defs>
            <ellipse cx="395" cy="341" rx="300" ry="22" fill="#0f1c23" opacity=".55" />
            <circle cx="385" cy="205" r="180" stroke="#789198" strokeDasharray="3 10" opacity=".42" />
            <path d="M40 342H727M74 362H688M385 20V388M64 111H704" stroke="#789198" opacity=".25" />
            <path d="M95 302H681M220 118V331M580 118V331" stroke="#c59073" strokeDasharray="5 8" opacity={.45 * (1 - progress)} />
            <g transform={part(-30, 38, -3)}>
              <path d="M90 228Q106 210 163 195L301 167L356 164L548 163Q595 167 643 185L681 206Q693 214 695 233L689 275Q686 296 665 306H614Q604 253 566 252Q526 251 514 305H330Q323 252 281 251Q239 251 226 304H116Q91 297 88 276Z" fill="url(#body)" stroke="#e0e8df" strokeWidth="2" />
              <path d="M201 192L302 170H355M548 164Q622 169 676 204" stroke="#eff3e8" strokeWidth="3" opacity=".78" />
              <path d="M216 236Q365 221 665 230" stroke="#d6e0d8" strokeWidth="2" opacity=".64" />
              <path d="M335 242V293M496 235V292" stroke="#29434e" strokeWidth="2" opacity=".7" />
              <path d="M353 247H380M516 240H541" stroke="#e7e8dd" strokeWidth="3" strokeLinecap="round" />
              <path d="M116 305H227M330 307H513M613 307H662" stroke="#b7c7c5" strokeWidth="3" />
              <path d="M103 276Q135 282 202 268" stroke="#14242c" strokeWidth="5" opacity=".7" />
              <path d="M221 299Q228 251 280 248Q328 248 333 299M512 299Q520 250 565 248Q612 247 617 299" stroke="#1b3039" strokeWidth="7" />
            </g>
            <g transform={part(24, -90, 5, 457, 153)}>
              <path d="M309 169L366 110Q380 94 407 94H505Q526 94 544 112L600 174L309 174Z" fill="#3f5e68" stroke="#e7ece3" strokeWidth="2.4" />
              <path d="M373 119Q386 104 406 104H447V165H330L373 119ZM460 104H505Q521 104 536 120L580 165H460V104Z" fill="url(#glass)" stroke="#c8ded9" strokeWidth="1.4" />
              <path d="M452 102V173M366 114L314 174M544 116L600 174" stroke="#dce8df" strokeWidth="4" />
              <path d="M334 169H582" stroke="#eff2e7" strokeWidth="2" />
              <path d="M584 169L606 182L592 188L576 177" fill="#c5d0c9" stroke="#e9ede3" strokeWidth="1.5" />
            </g>
            <g transform={part(-94, 4, -8, 157, 250)}>
              <path d="M96 227Q107 216 174 207L215 210L210 286Q148 304 98 289Z" fill="#20343c" stroke="url(#chrome)" strokeWidth="6" />
              <path d="M105 238L207 226M103 251L207 243M102 265L207 260M102 279L207 277" stroke="url(#chrome)" strokeWidth="5" strokeLinecap="round" />
              <path d="M92 216Q105 205 176 193L218 200L214 219L101 231Z" fill="#e9eee6" stroke="#fffdf1" strokeWidth="2" />
              <path d="M115 215L199 204" stroke="#82a2a9" strokeWidth="4" strokeLinecap="round" />
              <path d="M92 298Q135 307 212 288" stroke="#e4e9e1" strokeWidth="3" />
            </g>
            <g transform={part(88, -47, 6, 667, 215)}>
              <path d="M640 187Q667 196 684 210L687 230L648 229L624 213Z" fill="url(#lamp)" stroke="#f2a69a" strokeWidth="2" />
              <path d="M638 202L681 216" stroke="#f5b5a7" strokeWidth="2" opacity=".75" />
              <Star x={650} y={212} size={8} /><Star x={671} y={219} size={7} />
            </g>
            <g transform={part(-66, 90, -23, 278, 296)}><Wheel x={278} /></g>
            <g transform={part(74, 95, 21, 564, 296)}><Wheel x={564} /></g>
            <g transform={part(-8, -110, -13, 305, 163)}>
              <path d="M305 160V145" stroke="#e7ece3" strokeWidth="2" strokeLinecap="round" />
              <circle cx="305" cy="139" r="9" stroke="#f3f3e7" strokeWidth="1.8" />
              <path d="M305 131V143M305 143L298 147M305 143L312 147" stroke="#f3f3e7" strokeWidth="1.6" strokeLinecap="round" />
            </g>
            <g className="hidden sm:block" opacity={.28 + .72 * progress}>
              <path d="M536 364H690" stroke="#79949a" strokeWidth="1" />
              <text x="538" y="380" fill="#9db6b9" fontSize="10" letterSpacing="2" fontFamily="monospace">REAR LIGHT SIGNATURE</text>
              <path d="M592 346L610 338L633 343L633 354L609 355Z" fill="#9d3e3e" stroke="#d8837b" />
              <path d="M648 343L670 338L690 346L674 355L648 354Z" fill="#9d3e3e" stroke="#d8837b" />
              <Star x={606} y={347} size={5} /><Star x={623} y={348} size={5} />
              <Star x={659} y={348} size={5} /><Star x={676} y={347} size={5} />
            </g>
          </svg>
          <span className="technical absolute bottom-0 right-0 hidden text-[10px] text-[#86a0a5] sm:block">W213 LINES &nbsp; / &nbsp; NEWER STAR TAILLIGHTS</span>
        </div>
      </div>
      <div className="relative border-t border-white/10 py-3 sm:py-4">
        <div className="page-wrap flex items-center justify-between gap-4 text-[10px] text-[#9eb3b6] sm:text-[11px]"><span className="technical">ENGINEERING IS AN ITERATIVE PROCESS</span><span className="technical text-right">DRAG THE PAGE DOWN &nbsp; / &nbsp; {progress >= .98 ? "ASSEMBLED" : "ASSEMBLING"}</span></div>
        <div className="absolute bottom-0 left-0 h-[2px] bg-[#d99d79]" style={{ width: `${progress * 100}%` }} />
      </div>
    </div>
  </section>;
}
