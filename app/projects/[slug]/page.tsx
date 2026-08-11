import { getAllProjectSlugs, getProjectData } from "@/lib/projects";

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectData(slug);

  return (
    <div className="min-h-screen bg-white px-6 py-16">
      <div className="max-w-2xl mx-auto">
        <span className="text-xs uppercase tracking-wide text-zinc-500">
          {project.status}
        </span>
        <h1 className="text-3xl font-bold text-black mt-1 mb-6">
          {project.title}
        </h1>

        <div
          className="prose prose-zinc max-w-none"
          dangerouslySetInnerHTML={{ __html: project.contentHtml }}
        />
      </div>
    </div>
  );
}