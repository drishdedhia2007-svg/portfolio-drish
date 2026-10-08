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
      <header className="case-header">
        <div className="page-wrap case-header-inner">
          <Link href="/projects" className="case-back">← All projects</Link>
          <p className="eyebrow">Case study / {project.category?.join(" + ") || "Engineering"}</p>
          <h1 className="display">{project.title}</h1>
          <p className="case-deck">{project.shortDescription}</p>
          <div className="case-meta"><span>{project.status.replaceAll("-", " ")}</span>{project.startDate && <span>{project.startDate}{project.endDate ? ` – ${project.endDate}` : ""}</span>}<span>{project.skills?.slice(0, 3).join(" / ")}</span></div>
        </div>
      </header>

      {project.coverImage && <figure className="page-wrap case-hero"><div className="case-hero-image"><Image src={project.coverImage} alt={project.coverAlt || `${project.title} project render`} fill priority sizes="(max-width: 1290px) 100vw, 1290px" className="object-contain" /></div><figcaption className="technical">{project.coverCaption || `Project render / ${project.title}`}</figcaption></figure>}

      <div className="page-wrap case-body">
        <aside className="case-aside"><p className="eyebrow">Inside the study</p><p>Context, process, result, and the part I would change next.</p><div className="case-tools"><span className="technical">TOOLS &amp; METHODS</span>{project.skills?.map(skill => <span key={skill}>{skill}</span>)}</div><Link href="/skills" className="text-link">Skills in context <span aria-hidden="true">↗</span></Link></aside>
        <article className="project-prose" dangerouslySetInnerHTML={{ __html: project.contentHtml }} />
      </div>

      <div className="page-wrap case-end"><Link href="/projects" className="text-link">← All project notes</Link></div>
    </>
  );
}
