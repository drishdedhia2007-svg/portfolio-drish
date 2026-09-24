import Link from "next/link";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/competitions", label: "Competitions" },
  { href: "/about", label: "More about me" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#30434a] bg-[#1c2c34]/95 text-[#f5f0e7] backdrop-blur-xl">
      <nav className="page-wrap flex flex-col items-start justify-between gap-3 py-3 lg:min-h-18 lg:flex-row lg:items-center" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Drish Dedhia, home">
          <span className="display grid h-10 w-10 place-items-center border border-[#aebfbd] bg-[#243943] text-sm font-extrabold text-white transition-colors group-hover:bg-[#c45e37]">DD</span>
          <span className="flex flex-col leading-tight">
            <span className="display text-sm font-extrabold tracking-tight sm:text-base">Drish Dedhia</span>
            <span className="technical mt-1 text-[9px] uppercase text-[#bac9c6]">Engineering portfolio</span>
          </span>
        </Link>
        <div className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[12px] font-bold text-[#e4e9e2] sm:text-[13px] lg:w-auto lg:justify-start lg:gap-x-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#e0ae89]">{link.label}</Link>
          ))}
          <Link href="/recruiter" className="text-[#e0ae89] transition-colors hover:text-white lg:border-l lg:border-[#62787e] lg:pl-5">For recruiters <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </nav>
    </header>
  );
}
