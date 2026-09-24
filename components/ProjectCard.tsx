import Image from "next/image";
import Link from "next/link";
import type { ProjectMeta } from "@/lib/projects";

export default function ProjectCard({ project, index }: { project: ProjectMeta; index?: number }) {
  return (
    <Link href={`/projects/${project.slug}`} className="group flex h-full flex-col overflow-hidden border border-[#d9ded8] bg-[#fffefa] transition-all duration-300 hover:-translate-y-1 hover:border-[#a7b4b1] hover:shadow-[0_18px_40px_rgba(25,42,52,.1)]">
      <div className="paper-grid relative aspect-[16/10] overflow-hidden border-b border-[#d9ded8] bg-[#e5e9e6]">
        {project.coverImage ? (
          <Image src={project.coverImage} alt={project.coverAlt || `${project.title} project render`} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-contain transition-transform duration-500 group-hover:scale-[1.04]" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-[#728287]">Project image coming soon</div>
        )}
        <span className="technical absolute left-4 top-4 bg-[#fffefa]/90 px-2 py-1 text-[10px] text-[#42545c]">CASE {String(index ?? 1).padStart(2, "0")}</span>
        {project.coverCaption?.startsWith("Studio") && <span className="technical absolute bottom-4 right-4 bg-[#192a34]/85 px-2 py-1 text-[9px] uppercase text-white">CAD visualization</span>}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-bold uppercase tracking-[.16em] text-[#a74727]">
          <span>{project.status.replaceAll("-", " ")}</span>
          {(project.category || []).slice(0, 2).map((category) => <span key={category} className="border-l border-[#cfbcb0] pl-2">{category}</span>)}
        </div>
        <h3 className="display mt-4 text-2xl font-extrabold leading-tight text-[#192a34]">{project.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-[#59676b]">{project.shortDescription}</p>
        <span className="mt-6 inline-flex items-center gap-2 border-t border-[#e2e6df] pt-4 text-xs font-extrabold text-[#a74727]">Read the case study <span aria-hidden="true">&rarr;</span></span>
      </div>
    </Link>
  );
}
