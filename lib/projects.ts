import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

const projectsDirectory = path.join(process.cwd(), "content/projects");

export type ProjectMeta = {
  slug: string;
  title: string;
  status: string;
  shortDescription?: string;
  coverImage?: string;
  category?: string[];
  skills?: string[];
  startDate?: string;
  endDate?: string;
  [key: string]: any;
};

export function getAllProjectSlugs() {
  const fileNames = fs.readdirSync(projectsDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
}

export function getAllProjects(): ProjectMeta[] {
  const slugs = getAllProjectSlugs();
  const projects = slugs.map((slug) => {
    const fullPath = path.join(projectsDirectory, `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);
    return {
      slug,
      ...data,
    } as ProjectMeta;
  });
  return projects;
}

export async function getProjectData(slug: string): Promise<ProjectMeta & { contentHtml: string }> {
  const fullPath = path.join(projectsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    ...data,
  } as ProjectMeta & { contentHtml: string };
}