import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectSlugs, getProjectData } from "@/lib/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  if (!getAllProjectSlugs().includes(slug)) return {};
  const project = await getProjectData(slug);
  return { title: project.title, description: project.shortDescription };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  if (!getAllProjectSlugs().includes(slug)) notFound();
  const project = await getProjectData(slug);

  return (
    <>
      <header className="border-b border-[#d9ded8] bg-[#e9ece7]">
        <div className="page-wrap py-10 sm:py-16">
          <Link href="/projects" className="inline-flex items-center gap-2 text-xs font-extrabold text-[#a74727] hover:underline"><span aria-hidden="true">&larr;</span> All projects</Link>
          <p className="eyebrow mt-12">Case study / {project.category?.join(" + ") || "Engineering"}</p>
          <h1 className="display mt-4 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#42545c]">{project.shortDescription}</p>
          <div className="mt-10 flex flex-wrap gap-3 border-t border-[#cbd2cc] pt-5 text-[11px] font-bold uppercase tracking-[.13em] text-[#59676b]"><span className="pr-3 text-[#a74727]">{project.status.replaceAll("-", " ")}</span>{project.startDate && <span className="border-l border-[#cbd2cc] pl-3">{project.startDate}{project.endDate ? ` – ${project.endDate}` : ""}</span>}{project.skills?.map((skill) => <span key={skill} className="border-l border-[#cbd2cc] pl-3">{skill}</span>)}</div>
        </div>
      </header>

      {project.coverImage && <div className="page-wrap py-8 sm:py-12"><div className="paper-grid relative aspect-[16/8] overflow-hidden border border-[#d9ded8] bg-[#dde3df]"><Image src={project.coverImage} alt={project.coverAlt || `${project.title} project render`} fill priority sizes="(max-width: 1180px) 100vw, 1180px" className="object-contain" /></div><p className="technical mt-3 text-[10px] uppercase text-[#68757a]">{project.coverCaption || `Project render / ${project.title}`}</p></div>}

      <div className="page-wrap grid gap-12 py-12 lg:grid-cols-[220px_minmax(0,720px)] lg:gap-20 lg:py-18">
        <aside className="lg:sticky lg:top-28 lg:self-start"><p className="eyebrow">Project notes</p><p className="mt-4 text-sm leading-7 text-[#59676b]">The full story behind the work, from the first problem to the last lesson.</p><Link href="/skills" className="mt-6 inline-block text-xs font-extrabold text-[#a74727] hover:underline">See skills in context <span aria-hidden="true">&rarr;</span></Link></aside>
        <article className="project-prose" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </div>

      <div className="page-wrap border-t border-[#d9ded8] py-10"><Link href="/projects" className="button-secondary">Back to all projects <span aria-hidden="true">&rarr;</span></Link></div>
    </>
  );
}
