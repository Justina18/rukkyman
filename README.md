# Rukkyman

Portfolio site for **Oghenerukevwe "Rukky" Otebele** — screenwriter, film
director and editor. React + TypeScript + Tailwind, built with Vite.

## Run it

```bash
npm install
npm run dev
```

Build for production with `npm run build`; the output lands in `dist/`.

## How it's put together

- **`/`** — landing page: hero, "Recent work" list (every title links out),
  awards, skills, footer.
- **`/work/:slug`** — one page per project. Full-bleed still as the hero,
  then scroll down into the role, studio, year, logline, synopsis, and an
  "up next" link into the next project.
- Project content lives in `src/data/projects.ts`, sourced directly from
  Rukky's CV. Add a new film by adding an entry there — the landing page
  and routing pick it up automatically.

## Placeholder stills

Each project's `heroImage` currently points at a seeded
`picsum.photos` URL so every page has a working full-screen image out of
the box. Swap these for real frames or posters from each film before
shipping — search `still(` in `src/data/projects.ts`.

## Design notes

- **Palette** — a warm near-black (`reel-black`) rather than pure black,
  ivory text (`paper`) instead of plain white, and a single spotlight-gold
  accent (`gold`) used sparingly for links, awards and hover states. A
  muted rust (`rust`) appears only as a soft wash behind the hero.
- **Type** — Fraunces (a serif with some personality) for headlines,
  Inter for everything functional. No third face, no icon font.
- **The sprocket rail** — a column of filmstrip holes runs down the left
  edge of every page. It's the one recurring structural device, standing
  in for what would otherwise be a plain vertical rule.
- **Grain** — a very faint, looping film-grain texture sits over the hero
  and each project still. It's the only ambient motion on the site and
  respects `prefers-reduced-motion`.

All tokens live in `tailwind.config.ts` under `theme.extend.colors` and
`theme.extend.fontFamily` if you want to retune them.
