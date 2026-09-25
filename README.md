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

1. Create a new `.md` file in `content/projects/`. The file name becomes the page address. For example, `wind-tunnel-model.md` becomes `/projects/wind-tunnel-model`. If you include a `slug` field, it must exactly match the file name.
2. Paste this starting structure and replace the example text with your own facts:

```md
---
title: "Project title"
status: "completed"
category: ["CAD"]
skills: ["Fusion 360"]
shortDescription: "One sentence describing the problem and result."
coverImage: "/images/projects/project-folder/cover.png"
coverAlt: "Plain description of what the image shows"
coverCaption: "What this image actually is"
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

3. Put any images in a matching folder under `public/images/projects/`. Use the path starting with `/images/projects/` in the Markdown. If you have no cover image, remove `coverImage`, `coverAlt`, and `coverCaption`. Image names and capitalization must match exactly. Identify CAD screenshots, physical photos, and generated visualizations honestly in captions.
4. Save the file. It will appear automatically on Projects, and its skills will appear on Skills. To show a childhood project under About instead, add `"Childhood"` to its `category` list. New projects are sorted alphabetically by title. The featured projects on `/recruiter` are selected separately by their slugs in `app/recruiter/page.tsx`.

Only `.md` files inside `content/projects/` are read as projects. Files directly inside `content/` are ignored.

## Edit other content

| Content | File |
| --- | --- |
| Home introduction and route cards | `components/HomeHero.tsx`, `app/page.tsx` |
| Experience and scholarship entries | `app/experience/page.tsx` |
| Research paper summaries and PDF links | `app/research/page.tsx`, PDFs in `public/papers/` |
| Competition outcomes | `app/competitions/page.tsx` |
| Education, languages, and early story | `app/about/page.tsx` |
| Recruiter summary and featured project slugs | `app/recruiter/page.tsx` |
| Shared navigation and contact footer | `components/Navbar.tsx`, `components/Footer.tsx` |
| Colors, spacing, and typography | `app/globals.css` |

The Projects list and Skills page read project Markdown automatically. Experience, research, competitions, and About entries currently live in the page files listed above; they do not have an admin dashboard. Keep claims precise: distinguish CAD studies from printed or tested objects, identify tutorial-guided work, and describe mistakes and what changed.

## Check before publishing

Run `npm run lint` and `npm run build` in the project terminal. A successful build lists every generated page, including each project address. Review the changed pages, then commit and push to `main` to trigger the Vercel deployment.

## Site map

- `/` - personal introduction and routes into the portfolio
- `/experience` - internships, student team, scholarship, and volunteering
- `/projects` - filterable project archive
- `/projects/[slug]` - full case study
- `/research` - research summaries and PDF links
- `/competitions` - competition results and stories
- `/skills` - skills linked to project evidence
- `/about` - education, languages, background, and childhood projects
- `/recruiter` - concise view for recruiters
