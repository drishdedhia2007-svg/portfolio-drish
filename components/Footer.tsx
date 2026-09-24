import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#334a50] bg-[#17252e] py-12 text-[#f7f3e9]">
      <div className="page-wrap grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="technical text-[11px] uppercase text-[#e0ae89]">Let&apos;s build something thoughtful</p>
          <p className="display mt-3 text-3xl font-extrabold">Have an idea worth exploring?</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#d3ddda]">I welcome conversations about internships, engineering roles, and research collaborations. Tell me what you are working on.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold"><a href="mailto:drishdedhia2007@gmail.com" className="text-[#e0ae89] hover:underline">drishdedhia2007@gmail.com &rarr;</a><a href="https://www.linkedin.com/in/drish-dedhia-2564122b1" target="_blank" rel="noopener noreferrer" className="text-[#e0ae89] hover:underline">LinkedIn &rarr;</a></div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-bold text-[#d3ddda] sm:grid-cols-3">
          <Link href="/experience" className="hover:text-[#e0ae89]">Experience</Link>
          <Link href="/projects" className="hover:text-[#e0ae89]">Projects</Link>
          <Link href="/research" className="hover:text-[#e0ae89]">Research</Link>
          <Link href="/competitions" className="hover:text-[#e0ae89]">Competitions</Link>
          <Link href="/about" className="hover:text-[#e0ae89]">More about me</Link>
          <Link href="/skills" className="hover:text-[#e0ae89]">Skills</Link>
          <Link href="/recruiter" className="hover:text-[#e0ae89]">For recruiters</Link>
          <a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#e0ae89]">Substack <span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
    </footer>
  );
}
