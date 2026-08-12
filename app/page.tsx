"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [assembled, setAssembled] = useState(false);
  const router = useRouter();

  function handleViewProjects() {
    setAssembled(true);
    setTimeout(() => {
      router.push("/projects");
    }, 1300);
  }

  const partTransition = "transform 1.4s cubic-bezier(0.22,1,0.36,1)";

  return (
    <div className="dark-bg relative min-h-screen overflow-hidden">
      {/* exploded car, assembles on click */}
      <svg
        viewBox="0 0 600 260"
        className="absolute right-[-40px] bottom-0 h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] opacity-50 pointer-events-none"
      >
        <g
          style={{
            transform: assembled ? "translate(0px, 0px)" : "translate(-14px, 6px) rotate(-1deg)",
            transition: partTransition,
          }}
        >
          <g className="float-part">
            <rect x="80" y="120" width="440" height="58" rx="18" fill="#1E293D" stroke="#9AA3B2" strokeWidth="1.5" />
            <rect x="60" y="150" width="30" height="14" rx="4" fill="#D98E4A" />
            <rect x="510" y="150" width="30" height="14" rx="4" fill="#D98E4A" />
          </g>
        </g>

        <g
          style={{
            transform: assembled ? "translate(0px, 0px)" : "translate(10px, -60px) rotate(4deg)",
            transition: partTransition,
          }}
        >
          <g className="float-part" style={{ animationDelay: "0.3s" }}>
            <path
              d="M185,120 L225,60 Q300,38 380,60 L418,120 Z"
              fill="#243247"
              stroke="#9AA3B2"
              strokeWidth="1.5"
            />
          </g>
        </g>

        <g
          style={{
            transform: assembled ? "translate(0px, 0px)" : "translate(-70px, 46px) rotate(-25deg)",
            transition: partTransition,
          }}
        >
          <g className="float-part" style={{ animationDelay: "0.6s" }}>
            <circle cx="185" cy="182" r="38" fill="#141B29" stroke="#D98E4A" strokeWidth="2" />
            <circle cx="185" cy="182" r="15" fill="#0B1220" />
          </g>
        </g>

        <g
          style={{
            transform: assembled ? "translate(0px, 0px)" : "translate(80px, 55px) rotate(30deg)",
            transition: partTransition,
          }}
        >
          <g className="float-part" style={{ animationDelay: "0.9s" }}>
            <circle cx="440" cy="182" r="38" fill="#141B29" stroke="#D98E4A" strokeWidth="2" />
            <circle cx="440" cy="182" r="15" fill="#0B1220" />
          </g>
        </g>
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 min-h-screen flex flex-col justify-center py-24">
        <span
          className="mb-6 w-fit rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-[#D98E4A]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Maschinenbau at RWTH Aachen
        </span>

        <h1
          className="font-semibold tracking-tight text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-[#F5F3EE]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Drish
          <br />
          Dedhia
        </h1>

        <p
          className="mt-5 text-lg sm:text-xl text-[#8B93A1] max-w-md"
          style={{ fontFamily: "var(--font-body)" }}
        >
          Documenting my engineering journey, from
          childhood builds to CAD design and manufacturing.
        </p>

        <button
          onClick={handleViewProjects}
          className="mt-10 w-fit inline-flex items-center gap-2 rounded-full bg-[#D98E4A] text-[#10151F] px-7 py-3.5 text-sm font-semibold hover:bg-[#E6A566] transition-colors shadow-lg shadow-black/20"
          style={{ fontFamily: "var(--font-body)" }}
        >
          View Portfolio
        </button>
      </div>

      <div
        className="hidden sm:block absolute bottom-10 left-10 z-10 bg-[#F5F3EE] rounded-lg px-5 py-3 shadow-lg"
        style={{ transform: "rotate(-3deg)" }}
      >
        <p
          className="text-xl text-[#10151F]"
          style={{ fontFamily: "var(--font-hand)" }}
        >
          You Only Live Once; might as well build something.
        </p>
      </div>
    </div>
  );
}