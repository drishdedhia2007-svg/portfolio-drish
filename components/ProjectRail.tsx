"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import type { ProjectMeta } from "@/lib/projects";

const captions: Record<string, string> = {
  "self-locking-towel-hook": "A ball, a groove, and gravity doing the work.",
  "star-test-pad": "A rough idea made visible enough to discuss.",
  "miniature-winners-podium": "A tiny first place for a very fast driver.",
  "door-stopper": "A practical print that began with a stubborn door.",
  propeller: "A guided detour into surfaces and projected geometry.",
};

export default function ProjectRail({ projects }: { projects: ProjectMeta[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  function move(direction: number) {
    const node = rail.current;
    if (!node) return;
    const item = node.querySelector<HTMLElement>(".new-project");
    node.scrollBy({ left: direction * (item?.offsetWidth ?? 440) + direction * 24, behavior: "smooth" });
  }

  function syncActive() {
    const node = rail.current;
    if (!node) return;
    const items = Array.from(node.querySelectorAll<HTMLElement>(".new-project"));
    const next = items.reduce((best, item, index) =>
      Math.abs(item.offsetLeft - node.scrollLeft) < Math.abs(items[best].offsetLeft - node.scrollLeft) ? index : best, 0);
    setActive(next);
  }

  return (
    <div className="new-rail-wrap">
      <div className="page-wrap new-rail-controls">
        <span className="new-rail-count"><b>{String(active + 1).padStart(2, "0")}</b> / {String(projects.length).padStart(2, "0")}</span>
        <div className="new-rail-buttons"><button type="button" onClick={() => move(-1)} disabled={active === 0} aria-label="Previous project">←</button><button type="button" onClick={() => move(1)} disabled={active === projects.length - 1} aria-label="Next project">→</button></div>
      </div>
      <div className="new-project-rail" ref={rail} onScroll={syncActive} onKeyDown={(event) => { if (event.key === "ArrowRight") { event.preventDefault(); move(1); } else if (event.key === "ArrowLeft") { event.preventDefault(); move(-1); } }} role="region" aria-label="Featured projects" tabIndex={0}>
        {projects.map((project, index) => (
          <Link key={project.slug} href={`/projects/${project.slug}`} className="new-project" aria-label={`Explore ${project.title}`}>
            <div className="new-project-copy"><span className="new-project-number">0{index + 1} / {project.category?.[0] ?? "CAD"}</span><h3>{project.title}</h3><p>{captions[project.slug] ?? project.shortDescription}</p></div>
            <div className="new-project-art">
              {project.coverImage && <div className="new-project-image"><Image src={project.coverImage} alt={project.coverAlt || project.title} fill sizes="180px" className="object-contain" /></div>}
              <span className="new-project-open" aria-hidden="true">↗</span>
            </div>
          </Link>
        ))}
      </div>
      <div className="page-wrap"><div className="new-rail-track" aria-hidden="true"><span style={{ width: `${((active + 1) / projects.length) * 100}%` }} /></div></div>
    </div>
  );
}
