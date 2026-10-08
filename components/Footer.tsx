import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#3b4d6a] bg-[#111c2b] py-12 text-[#f3f5fa]">
      <div className="page-wrap grid gap-8 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <p className="technical text-[11px] uppercase text-[#d8e7ff]">Let&apos;s build something thoughtful</p>
          <p className="display mt-3 text-3xl font-extrabold">Have an idea worth exploring?</p>
          <p className="mt-3 max-w-xl text-sm leading-7 text-[#dfe6f0]">I welcome conversations about internships, engineering roles, and research collaborations. Tell me what you are working on.</p>
          <div className="mt-5 flex flex-wrap gap-4 text-sm font-bold"><a href="mailto:drishdedhia2007@gmail.com" className="text-[#d8e7ff] hover:underline">drishdedhia2007@gmail.com &rarr;</a><a href="https://www.linkedin.com/in/drish-dedhia-2564122b1" target="_blank" rel="noopener noreferrer" className="text-[#d8e7ff] hover:underline">LinkedIn &rarr;</a></div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 gap-y-3 text-sm font-bold text-[#dfe6f0] sm:grid-cols-3">
          <Link href="/experience" className="hover:text-[#d8e7ff]">Experience</Link>
          <Link href="/projects" className="hover:text-[#d8e7ff]">Projects</Link>
          <Link href="/writing" className="hover:text-[#d8e7ff]">Writing</Link>
          <Link href="/research" className="hover:text-[#d8e7ff]">Research</Link>
          <Link href="/competitions" className="hover:text-[#d8e7ff]">Competitions</Link>
          <Link href="/about" className="hover:text-[#d8e7ff]">More about me</Link>
          <Link href="/skills" className="hover:text-[#d8e7ff]">Skills</Link>
          <Link href="/recruiter" className="hover:text-[#d8e7ff]">For recruiters</Link>
          <a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d8e7ff]">Substack <span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
    </footer>
  );
}
