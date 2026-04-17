# SEU Velocity

Bilingual (Arabic / English) static site for **SEU Velocity** — an intensive 7-day sports-tech innovation program by Saudi Electronic University.

Built with [Astro](https://astro.build/) + Tailwind CSS 4.

## Commands

| Command           | Action                                   |
| :---------------- | :--------------------------------------- |
| `npm install`     | Install dependencies                     |
| `npm run dev`     | Dev server at `localhost:4321/velocity/` |
| `npm run build`   | Build to `./dist/`                       |
| `npm run preview` | Preview the built site locally           |

## Routes

- `/ar/` — Arabic (default, RTL)
- `/en/` — English
- `/ar/terms/` · `/en/terms/` — Terms & Conditions
- `/ar/privacy/` · `/en/privacy/` — Privacy Policy

## Deployment

Deployed to GitHub Pages via `.github/workflows/deploy.yml`. The site is served under the `/velocity` base path.
