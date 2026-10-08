import Link from "next/link";

const links = [
  ["Experience", "/experience"], ["Projects", "/projects"], ["Research", "/research"],
  ["Writing", "/writing"], ["Competitions", "/competitions"], ["About", "/about"],
  ["Skills", "/skills"], ["For recruiters", "/recruiter"],
];

export default function Footer() {
  return <footer className="site-footer"><div className="page-wrap footer-layout"><div className="footer-invite"><p className="eyebrow">The next conversation</p><h2>Let&apos;s talk <em>shop.</em></h2><p>Have an engineering role, a research question, or an idea to build together? I would love to hear it.</p><a href="mailto:drishdedhia2007@gmail.com" className="footer-email">drishdedhia2007@gmail.com <span aria-hidden="true">↗</span></a></div><div className="footer-aside"><p className="technical">DRISH DEDHIA / RWTH AACHEN</p><nav aria-label="Footer navigation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><div className="footer-social"><a href="https://www.linkedin.com/in/drish-dedhia-2564122b1" target="_blank" rel="noopener noreferrer">LinkedIn ↗</a><a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer">Substack ↗</a></div></div></div><div className="page-wrap footer-bottom"><span>© 2026 Drish Dedhia</span><span>Designed around the work, and the questions that follow it.</span></div></footer>;
}
