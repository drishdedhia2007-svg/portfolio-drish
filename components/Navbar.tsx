import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/skills", label: "Skills" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#d9ded8] bg-[#f7f5ef]/95 backdrop-blur-xl">
      <nav className="page-wrap flex flex-col items-start justify-between gap-3 py-3 lg:min-h-18 lg:flex-row lg:items-center" aria-label="Main navigation">
        <Link href="/" className="group flex items-center gap-3" aria-label="Drish Dedhia, home">
          <span className="display grid h-10 w-10 place-items-center border border-[#192a34] bg-[#192a34] text-sm font-extrabold text-white transition-colors group-hover:bg-[#c45e37]">DD</span>
          <span className="flex flex-col leading-tight">
            <span className="display text-sm font-extrabold tracking-tight sm:text-base">Drish Dedhia</span>
            <span className="technical mt-1 text-[9px] uppercase text-[#68757a]">Engineering journal</span>
          </span>
        </Link>
        <div className="flex w-full flex-wrap items-center justify-between gap-x-3 gap-y-2 text-[12px] font-bold text-[#42545c] sm:text-[13px] lg:w-auto lg:justify-start lg:gap-x-7">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-[#a74727]">{link.label}</Link>
          ))}
          <Link href="/recruiter" className="text-[#a74727] transition-colors hover:text-[#192a34] lg:border-l lg:border-[#cbd2cc] lg:pl-7">For recruiters <span aria-hidden="true">&rarr;</span></Link>
        </div>
      </nav>
    </header>
  );
}
