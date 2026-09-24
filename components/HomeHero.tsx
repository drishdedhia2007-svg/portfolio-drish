import Link from "next/link";

function Wheel({ x }: { x: number }) {
  return <g transform={`translate(${x} 283)`}>
    <circle r="48" fill="#0d151b" stroke="#8e9ca0" strokeWidth="2" />
    <circle r="37" fill="#17242c" stroke="#bac5c4" strokeWidth="3" />
    <circle r="31" fill="#73868b" stroke="#e2e7e2" strokeWidth="2" />
    {Array.from({ length: 20 }, (_, i) => <path key={i} d="M-2.6 -12 L-2.2 -29 L2.2 -29 L2.6 -12Z" fill={i % 2 ? "#dce3df" : "#aebfbd"} transform={`rotate(${i * 18})`} />)}
    <circle r="12" fill="#dce4df" stroke="#344b52" strokeWidth="2" />
    <circle r="8" fill="#17262d" />
    <path d="M0-6.6V1.5M0 1.5L-5 4.6M0 1.5L5 4.6" stroke="#e6ece5" strokeWidth="1.5" strokeLinecap="round" />
  </g>;
}

function SideProfile() {
  return <svg viewBox="0 0 900 390" className="w-full" role="img" aria-label="Still side profile drawing of a classic E-Class inspired sedan with multispoke wheels">
    <defs>
      <linearGradient id="sideBody" x1="80" y1="150" x2="790" y2="320" gradientUnits="userSpaceOnUse"><stop stopColor="#cbd1ca"/><stop offset=".44" stopColor="#81969b"/><stop offset="1" stopColor="#3e5963"/></linearGradient>
      <linearGradient id="sideGlass" x1="340" y1="98" x2="590" y2="198" gradientUnits="userSpaceOnUse"><stop stopColor="#8fa9ad"/><stop offset="1" stopColor="#203640"/></linearGradient>
    </defs>
    <ellipse cx="449" cy="341" rx="382" ry="22" fill="#091218" opacity=".55" />
    <path d="M52 256 Q58 220 93 209 L251 180 L322 116 Q343 95 381 92 L551 94 Q580 95 606 115 L673 177 L790 195 Q829 201 841 229 L844 281 Q842 307 817 312 L756 314 Q746 259 696 257 Q645 255 633 315 L306 315 Q295 258 244 257 Q192 257 182 315 L90 311 Q58 307 53 283Z" fill="url(#sideBody)" stroke="#e2e6de" strokeWidth="3" />
    <path d="M324 169 L359 115 Q370 104 388 104 L467 105 L467 169Z M480 105 L548 106 Q569 108 587 124 L634 174 L480 170Z" fill="url(#sideGlass)" stroke="#d8e2de" strokeWidth="2" />
    <path d="M318 178 L668 182 M473 105 L473 296 M639 184 L639 293 M309 199 L304 296" fill="none" stroke="#e3e8e0" strokeWidth="2" opacity=".8" />
    <path d="M104 216 Q351 194 787 215" fill="none" stroke="#f1efe3" strokeWidth="3" opacity=".78" />
    <path d="M119 263 Q413 252 806 262" fill="none" stroke="#203a45" strokeWidth="2" opacity=".55" />
    <path d="M382 200 H414 M521 201 H553" stroke="#e8ebe2" strokeWidth="3" strokeLinecap="round" />
    <path d="M308 183 L292 191 L310 195 L326 187" fill="#a9b9b9" stroke="#e4e8e0" strokeWidth="2" />
    <path d="M73 225 L126 214 L120 233 L61 242Z" fill="#dfe7df" stroke="#f2f3e9" strokeWidth="2" />
    <path d="M795 207 L832 222 L838 241 L797 230Z" fill="#ad6862" stroke="#df9c90" strokeWidth="2" />
    <path d="M65 289 Q91 299 163 295 M766 296 L831 288" stroke="#d9e0da" strokeWidth="3" fill="none" />
    <path d="M182 315 A62 62 0 0 1 306 315 M633 315 A62 62 0 0 1 757 315" fill="none" stroke="#15252d" strokeWidth="8" />
    <Wheel x={244} /><Wheel x={695} />
    <path d="M73 326 H827" stroke="#748b90" strokeWidth="1" opacity=".35" />
  </svg>;
}

export default function HomeHero() {
  return <section className="blueprint-grid relative overflow-hidden bg-[#17252e] text-[#f7f3e9]">
    <div className="pointer-events-none absolute -right-20 top-0 h-96 w-96 rounded-full bg-[#496e75]/30 blur-3xl" />
    <div className="page-wrap relative grid items-center gap-10 pt-16 pb-16 lg:grid-cols-[.95fr_1.05fr] lg:gap-5 lg:pt-24 lg:pb-24">
      <div className="relative z-10">
        <p className="technical text-[11px] uppercase text-[#e0ae89]">Drish Dedhia / Aachen, Germany</p>
        <h1 className="display mt-6 max-w-2xl text-[clamp(3rem,5.2vw,5rem)] font-extrabold leading-[1.03]">Curious by nature.<br/><span className="text-[#e0ae89]">Engineering by choice.</span></h1>
        <p className="mt-7 max-w-xl text-lg leading-8 text-[#d3ddda]">I study mechanical engineering at RWTH Aachen. I design in CAD, ask questions through research, and learn as much from the wrong turns as the finished work.</p>
        <div className="mt-8 flex flex-wrap gap-3"><Link href="/experience" className="button-primary">Explore my experience <span aria-hidden="true">&rarr;</span></Link><Link href="/projects" className="button-light">See my projects</Link></div>
      </div>
      <div className="relative mt-4 lg:mt-14"><SideProfile /><p className="technical mt-2 text-center text-[10px] uppercase tracking-widest text-[#aebfbd]">A still study of the E-Class side profile</p></div>
    </div>
  </section>;
}
