import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[#d9ded8] bg-[#efece3] py-9">
      <div className="page-wrap flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
        <div>
          <p className="display text-lg font-extrabold">Drish Dedhia</p>
          <p className="mt-1 text-sm text-[#59676b]">Mechanical engineering student at RWTH Aachen.</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm font-bold text-[#42545c]">
          <Link href="/projects" className="hover:text-[#a74727]">Projects</Link>
          <Link href="/about" className="hover:text-[#a74727]">About</Link>
          <Link href="/recruiter" className="hover:text-[#a74727]">For recruiters</Link>
          <a href="https://drishdedhia23.substack.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a74727]">Writing <span className="sr-only">(opens in a new tab)</span></a>
        </div>
      </div>
    </footer>
  );
}
