"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/research", label: "Research" },
  { href: "/writing", label: "Writing" },
  { href: "/competitions", label: "Competitions" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return <header className="site-header">
    <nav className="page-wrap site-nav" aria-label="Main navigation">
      <Link href="/" className="site-brand" onClick={() => setOpen(false)} aria-label="Drish Dedhia, home"><span className="brand-mark">D<span>/</span>D</span><span><strong>Drish Dedhia</strong><small>Mechanical engineering / RWTH Aachen</small></span></Link>
      <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="site-links" onClick={() => setOpen(value => !value)}>{open ? "Close" : "Menu"}<span aria-hidden="true">{open ? "×" : "+"}</span></button>
      <div id="site-links" className={`site-links ${open ? "is-open" : ""}`}>{links.map(link => <Link key={link.href} href={link.href} className={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "is-active" : ""} aria-current={pathname === link.href || pathname.startsWith(`${link.href}/`) ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}</Link>)}<Link className="recruiter-link" href="/recruiter" onClick={() => setOpen(false)}>Quick view ↗</Link></div>
      <ThemeToggle />
    </nav>
  </header>;
}
