# Drish Dedhia's engineering portfolio

A living engineering journal built with Next.js, TypeScript, Tailwind CSS, and Markdown. Projects are case studies: each entry explains the motivation, approach, challenge, result, and lessons learned.

## Run the website on your computer

1. Open `C:\Users\drish\Desktop\Projects\portfolio-drish` in VS Code.
2. Choose **Terminal > New Terminal**.
3. Run `npm install` if this is a fresh copy of the project.
4. Run `npm run dev`.
5. Open `http://localhost:3000` in your browser.

Use `Ctrl+C` in the terminal to stop the website.

## Add a project

1. Create a new `.md` file in `content/projects/`. The file name becomes the page address. For example, `wind-tunnel-model.md` becomes `/projects/wind-tunnel-model`.
2. Paste this starting structure and replace the example text with your own facts:

```md
---
title: "Project title"
status: "completed"
category: ["CAD"]
skills: ["Fusion 360"]
shortDescription: "One sentence describing the problem and result."
coverImage: "/images/projects/project-folder/cover.png"
---

## Why I Built This

What was the problem or motivation?

## My Approach

What did you try, and why?

## Challenges

What was difficult?

## Solution

How did you work through it?

## Result

What did you make or learn? Be precise about whether it was designed, built, or tested.

## What I Learned

What would you carry into the next project?
```

3. Put any images in a matching folder under `public/images/projects/`. If you have no cover image, remove the `coverImage` line. Image names and capitalization must match exactly.
4. Save the file. It will appear automatically on Projects, and its skills will appear on Skills. To show a childhood project under About instead, add `"Childhood"` to its `category` list.

Only `.md` files inside `content/projects/` are read as projects. Files directly inside `content/` are ignored.

## Check before publishing

Run `npm run build` in the project terminal. A successful build lists every generated page, including each project address. Then commit and push to `main` to trigger the Vercel deployment.

## Site map

- `/` - animated introduction and selected projects
- `/projects` - filterable project archive
- `/projects/[slug]` - full case study
- `/skills` - skills linked to project evidence
- `/about` - background, writing, and childhood projects
- `/recruiter` - concise view for recruiters
