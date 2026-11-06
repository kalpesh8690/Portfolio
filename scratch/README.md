# Scratch Portfolio — Kalpesh Chauhan

A self-contained React + Vite portfolio experiment with an animated multi-cursor swarm.

## Run locally

```bash
cd scratch
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Cursor swarm

On devices with a fine pointer, five custom follower cursors orbit and trail the main pointer. Each follower uses frame-based linear interpolation with a different follow factor to create a spring-like lag. The effect is disabled for touch-first devices and users who prefer reduced motion.

## Customize

- Edit projects and social links in `src/main.jsx`.
- Update typography, colors and responsive layouts in `src/styles.css`.
- Replace the placeholder contact email before publishing.

This project lives in `scratch/` and does not change the existing portfolio app at the repository root.
