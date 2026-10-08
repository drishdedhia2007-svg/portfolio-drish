import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: ProjectMeta; index?: number }) {
  return (
    <Link href={`/projects/${project.slug}`} data-reveal className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#40526b] bg-[#1b2b40] transition-all duration-300 hover:-translate-y-1 hover:border-[#94a8c7] hover:shadow-[0_18px_40px_rgba(25,42,52,.1)]">
      <div className="paper-grid relative aspect-[16/10] overflow-hidden border-b border-[#40526b] bg-[#273e59]">
        {project.coverImage ? (
          <Image src={project.coverImage} alt={project.coverAlt || `${project.title} project render`} fill loading={index === 1 ? "eager" : "lazy"} sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain transition-transform duration-500 group-hover:scale-[1.04]" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#b3c5dd]">Project image coming soon</div>
        )}
        <span className="technical absolute left-4 top-4 bg-[#1b2b40]/90 px-2 py-1 text-[10px] text-[#c5d0e0]">CASE {String(index ?? 1).padStart(2, "0")}</span>
        {project.coverCaption?.startsWith("Studio") && <span className="technical absolute bottom-4 right-4 bg-[#121f30]/85 px-2 py-1 text-[9px] uppercase text-white">CAD visualization</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#d8e7ff]">
          <span>{project.status.replaceAll("-", " ")}</span>
          {(project.category || []).slice(0, 2).map((category) => <span key={category} className="border-l border-[#40526b] pl-2">{category}</span>)}
        </div>
        <h3 className="display mt-4 text-2xl font-extrabold leading-tight text-[#f3f5fa]">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#c5d0e0]">{project.shortDescription}</p>
        <span className="mt-6 inline-flex items-center gap-2 border-t border-[#40526b] pt-4 text-xs font-extrabold text-[#d8e7ff]">Read the case study <span aria-hidden="true">&rarr;</span></span>
      </div>
    </Link>
  );
}
