export type ProjectFormat = "Feature Length" | "Short Film" | "Web Series";

export interface Project {
  /** URL-safe identifier, used for the /work/:slug route */
  slug: string;
  title: string;
  format: ProjectFormat;
  role: string;
  studio: string;
  year: number;
  logline: string;
  /** Longer description shown on the project's own page */
  synopsis: string;
  /** Deterministic placeholder still — swap for a real frame from the film. */
  heroImage: string;
  /** Short public preview clip used in project landing/listing views. */
  previewVideo: string;
  youtubeUrl: string;
  award?: string;
}

export interface Award {
  title: string;
  project: string;
  presenter: string;
  year: number;
}
