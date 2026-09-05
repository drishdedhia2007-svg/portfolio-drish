import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#EAEAEC]">
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-lg font-semibold text-[#1D2433]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Drish Dedhia
        </Link>

        <div
          className="flex items-center gap-6 text-sm font-medium text-[#4A4F58]"
          style={{ fontFamily: "var(--font-body)" }}
        >
          <Link href="/projects" className="hover:text-[#D98E4A] transition-colors">
            Projects
          </Link>
          <Link href="/skills" className="hover:text-[#D98E4A] transition-colors">
            Skills
          </Link>
        </div>
      </nav>
    </header>
  );
}