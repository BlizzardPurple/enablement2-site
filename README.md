# Enablement 2.0 — Demo Site

Internal showcase comparing the old DAR campaign flow with the new AI-powered Enablement 2.0 flow.

## Quick Start

```bash
npm install
npm run dev        # local dev → http://localhost:5173
npm run build      # static output → dist/
npm run preview    # preview the built site
```

## Stack

| Layer        | Choice              |
|------------- |---------------------|
| Framework    | React 19 + Vite 8   |
| Charts       | Recharts            |
| Animations   | Framer Motion       |
| Video Player | React Player        |
| Styling      | Plain CSS (custom)  |

## Folder Structure

```
src/
├── assets/         # Logo, images, videos
├── components/     # Reusable: Navbar, Footer, Section, ScreenshotPlaceholder
├── pages/          # Content sections: Hero, OldFlow, NewFlow, Comparison, Video
└── styles/         # theme.css (tokens) + global.css
```

## Adding Screenshots

Drop images into `src/assets/images/` and update the `src` prop on `<ScreenshotPlaceholder />` components in the relevant page files.

## Adding Video

Set the `VIDEO_URL` constant in `src/pages/VideoSection.jsx` to a local path or external URL (YouTube, Vimeo, mp4).

## Deployment (free static hosting)

| Platform         | Command / Notes                                 |
|----------------- |-------------------------------------------------|
| **Vercel**       | `npx vercel --prod` (auto-detects Vite)         |
| **Netlify**      | Push to GitHub → connect repo → build: `npm run build`, publish: `dist` |
| **GitHub Pages** | Use `gh-pages` branch or GitHub Actions          |
| **Cloudflare Pages** | Connect repo → build: `npm run build`, output: `dist` |

All platforms offer generous free tiers for static sites.
