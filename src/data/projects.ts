import type { Award, Project } from "../types";

/**
 * Placeholder stills. Each is a fixed seed on picsum.photos so the layout
 * is stable in development — replace `heroImage` with a real frame from
 * the corresponding film before shipping.
 */
const still = (seed: string) =>
  `https://picsum.photos/seed/${seed}/1920/1080`;

export const projects: Project[] = [
  {
    slug: "the-blueprint",
    title: "The Blueprint",
    format: "Feature Length",
    role: "Writer, Director & Editor",
    studio: "Snapshots Productions",
    year: 2026,
    logline:
      "A riveting tale about choices, spiritual sensitivity, and the power of faith in God.",
    synopsis:
      "The Blueprint follows a life built and rebuilt by the choices we make when no one else is watching. As writer, director and editor, Rukky carried the film from page to final cut, tracing how spiritual sensitivity can quietly redraw the plans we thought were already set.",
    heroImage: still("the-blueprint"),
    previewVideo:
      "/Videos/THE-BLUEPRINT-CHRISTIAN-MOVIE-THE-COVENANT-NATION-SNAPSHOTS-PROD-clip-6m55s-7m03s.webm",
    youtubeUrl: "https://youtu.be/y5EWU0LZ84A",
  },
  {
    slug: "the-whistleblower",
    title: "The Whistleblower",
    format: "Short Film",
    role: "Writer & Director",
    studio: "SafeScreens Productions",
    year: 2026,
    logline:
      "A cyberbullying campaign film confronting the rise of deepfakes among teenagers.",
    synopsis:
      "Made for SafeScreens Productions' campaign against online harm, The Whistleblower puts a face to a threat many teenagers don't yet have language for: images that look real, made without their consent. The film sits alongside Toxic as part of a two-film push to get the conversation into classrooms and homes.",
    heroImage: still("the-whistleblower"),
    previewVideo:
      "/Videos/WHISTLEBLOWER-File-002-—-The-Cyberbully-Files-Cyberbullying-in-S-clip-6m00s-6m07s.webm",
    youtubeUrl: "https://youtu.be/IgPjTb1Oyek",
  },
  {
    slug: "toxic",
    title: "Toxic",
    format: "Short Film",
    role: "Writer & Director",
    studio: "SafeScreens Productions",
    year: 2026,
    logline:
      "A cyberbullying campaign film touching on the topic of deepfakes among teenagers.",
    synopsis:
      "Toxic looks at how quickly a rumor becomes a picture, and a picture becomes a permanent record. Part of SafeScreens Productions' campaign work, it was built to open conversations with teenagers about deepfakes — not to frighten them, but to arm them.",
    heroImage: still("toxic"),
    previewVideo:
      "/Videos/TOXIC-File-001-—-The-Cyberbully-Files-Deepfake-Cyberbullying-in-clip-12m30s-12m36s.webm",
    youtubeUrl: "https://www.youtube.com/watch?v=bn4Irq66Ps0",
  },
  {
    slug: "mind-you",
    title: "Mind You",
    format: "Web Series",
    role: "Writer & Director",
    studio: "Snapshots Productions",
    year: 2025,
    logline:
      "A serialized drama unpacking the power in mindsets, spirituality, and friendships.",
    synopsis:
      "Mind You is told in episodes rather than one sitting — a deliberate choice, since its subject is the slow accumulation of small decisions. Across the series, a circle of friends discovers how much of their spiritual life is actually shaped by the people closest to them.",
    heroImage: still("mind-you"),
    previewVideo:
      "/Videos/MIND-YOU---Episode-1-Christian-Web-Series-clip-5m40s-5m45s.webm",
    youtubeUrl: "https://www.youtube.com/watch?v=1m9Xo_Hu8wk",
  },
  {
    slug: "wished-away",
    title: "Wished Away",
    format: "Short Film",
    role: "Writer & Director",
    studio: "Snapshots Productions",
    year: 2025,
    logline: "A thought-provoking story about regret and second chances.",
    synopsis:
      "Wished Away sits with a single question long after most films would have moved on: what would you actually do with a second chance, once you had one? It's a quieter film, built around performance and the space between lines rather than incident.",
    heroImage: still("wished-away"),
    previewVideo:
      "/Videos/Wished-Away-Short-Film-(-Celebrating-International-Women's-Day-)-clip-9m00s-9m07s.webm",
    youtubeUrl: "https://youtu.be/5sMIaMNIQhQ",
  },
  {
    slug: "perte-de-memoire",
    title: "Perte De Memoire",
    format: "Short Film",
    role: "Director",
    studio: "TCN CCG",
    year: 2024,
    logline:
      "A French-themed short film — in name only — navigating memory and guilt.",
    synopsis:
      "Perte De Memoire borrows its title from French but tells a story rooted much closer to home. Directing here rather than writing, Rukky worked the film toward its central tension: how guilt outlives the memories that caused it. The film earned a Best Director award from the Covenant Community Groups.",
    heroImage: still("perte-de-memoire"),
    previewVideo: "/Videos/Perte-De-Memoire-clip-7m54s-8m02s.webm",
    youtubeUrl: "https://youtu.be/S3kPh9GtCbI",
    award: "Best Director — Covenant Community Groups Award, 2024",
  },
  {
    slug: "smoking-gun",
    title: "Smoking Gun",
    format: "Short Film",
    role: "Writer & Director",
    studio: "TCN CCG",
    year: 2024,
    logline: "A suspense-driven drama spun from an age-long truth.",
    synopsis:
      "Smoking Gun takes a truth old enough to feel like folklore and gives it teeth again, building suspense out of what everyone already suspects but no one will say out loud. The screenplay won Best Screenwriting at the Covenant Community Groups Awards.",
    heroImage: still("smoking-gun"),
    previewVideo: "/Videos/Smoking-Gun-clip-3m34s-3m45s.webm",
    youtubeUrl: "https://youtu.be/sUh047Aifp0",
    award: "Best Screenwriting — Covenant Community Groups Award, 2024",
  },
  {
    slug: "soul-games",
    title: "Soul Games",
    format: "Feature Length",
    role: "Writer & Director",
    studio: "Snapshots Productions",
    year: 2024,
    logline:
      "A layered narrative exploring faith, choices, and love-driven mercy through symbolic storytelling.",
    synopsis:
      "Soul Games is built in layers on purpose — a feature that asks to be watched more than once. Through symbol as much as dialogue, it traces how mercy, when it's driven by love rather than obligation, can change the shape of a choice already made.",
    heroImage: still("soul-games"),
    previewVideo: "/Videos/SOUL-GAMES-clip-25m36s-25m46s.webm",
    youtubeUrl: "https://youtu.be/JqtZxV6rG2o",
  },
];

export const awards: Award[] = [
  {
    title: "Best Screenwriting",
    project: "Smoking Gun",
    presenter: "Covenant Community Groups Award",
    year: 2024,
  },
  {
    title: "Best Director",
    project: "Perte De Memoire",
    presenter: "Covenant Community Groups Award",
    year: 2024,
  },
];

export const getProjectBySlug = (slug: string): Project | undefined =>
  projects.find((p) => p.slug === slug);
