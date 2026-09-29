# Siddhesh Sawant — Portfolio

Personal portfolio site for Siddhesh Sawant — QA Lead / Program Manager based in Mumbai, India.

![Portfolio Preview](./public/preview.webp)

[![Live Site](https://img.shields.io/badge/Live%20Site-siddhesh--sawant.vercel.app-C89B3C?style=flat-square&logo=vercel&logoColor=white)](https://siddhesh-sawant.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?style=flat-square&logo=vercel)](https://vercel.com)

---

## Sections

| # | Section | Description |
|---|---------|-------------|
| 01 | **About** | Background, values, and approach |
| 02 | **Skills** | Technical and program management competencies |
| 03 | **Experience** | Parallel QA Leadership and Program Management timeline at Contentstack |
| 04 | **Work & Initiatives** | Selected projects with category filters (Program Management, AI-Assisted Engineering, QA & Testing) |
| 05 | **Credentials** | Certifications and education |
| 06 | **Resume** | Downloadable PDF and Word resume |
| 07 | **Contact** | Contact form + email, LinkedIn, GitHub |

---

## Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router, static export)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v4 with CSS custom properties for theming
- **Fonts** — Lora (headings), system sans-serif (body), system monospace (code/links)
- **Hosting** — [Vercel](https://vercel.com)
- **Theme** — Dark / Light toggle, persisted in `localStorage`

---

## Local Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Content lives in `/content` — each section has its own `.ts` file (e.g. `experience.ts`, `projects.ts`).

---

## Project Structure

```
├── app/              # Next.js App Router (layout, page, global CSS)
├── components/
│   ├── sections/     # One component per portfolio section
│   ├── Header.tsx
│   └── Footer.tsx
├── content/          # Section data (TypeScript, easy to edit)
└── public/           # Static assets
```

---

## Author

**Siddhesh Sawant** — [siddhesh-sawant.vercel.app](https://siddhesh-sawant.vercel.app) · [LinkedIn](https://in.linkedin.com/in/siddhesh-sawant-0283349) · [GitHub](https://github.com/siddheshsawant-work)
