import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import FilmGrain from "../components/FilmGrain";

const socialLinks = [
  { label: "X (Twitter)", href: "https://x.com/ingeniusone" },
  { label: "Threads", href: "https://www.threads.net/@ingeniusone" },
  { label: "TikTok", href: "https://www.tiktok.com/@ingeniusone" },
];

const videoFilters = [
  "Reels",
  "Podcasts",
  "Docu-films",
  "Weddings",
  "Adulting Series",
  "Abstract Content",
];

interface HomeProps {
  introDone: boolean;
}

export default function Home({ introDone }: HomeProps) {
  return <Hero introDone={introDone} />;
}

interface HeroProps {
  introDone: boolean;
}

function Hero({ introDone }: HeroProps) {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <img
          src="/hero-ruk.jpeg"
          alt=""
          className="h-full w-full object-cover object-top grayscale"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-reel-black via-reel-black/50 to-reel-black/10"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-reel-black/25" aria-hidden="true" />
      </div>

      <FilmGrain />

      <nav className="absolute left-1/2 top-8 z-30 -translate-x-1/2">
        <div className="flex items-center gap-7 rounded-full border border-paper/10 bg-reel-black/45 px-6 py-2.5 backdrop-blur-md">
          <Link
            to="/about"
            className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
          >
            About
          </Link>
          <Link
            to="/work"
            className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
          >
            Filmwork
          </Link>
          <details className="group relative">
            <summary className="cursor-pointer list-none font-body text-sm text-paper-dim transition-colors marker:hidden hover:text-[#7FA06B] [&::-webkit-details-marker]:hidden">
              Videography &amp; Editing
            </summary>
            <div className="absolute right-0 top-full z-50 mt-3 min-w-44 border border-paper/10 bg-reel-black/95 p-2 shadow-2xl backdrop-blur-md">
              {videoFilters.map((filter) => (
                <Link
                  key={filter}
                  to={`/work?filter=${filter.toLowerCase()}`}
                  className="block px-3 py-2 font-body text-xs uppercase tracking-[0.16em] text-paper-dim transition-colors hover:bg-paper/5 hover:text-[#7FA06B]"
                >
                  {filter}
                </Link>
              ))}
            </div>
          </details>
          <Link
            to="/contact"
            className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
          >
            Contact
          </Link>
        </div>
      </nav>

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1600px] flex-col px-6 py-8 sm:px-12 sm:py-10">
        {/* Top bar */}
        <div className="flex items-center justify-between gap-6">
          <span className="font-display text-lg tracking-tight text-paper">
            O.O.
          </span>

          <a
            href="mailto:Rotebele@gmail.com"
            className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
          >
            Email
          </a>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="font-display text-[13vw] font-light leading-[0.92] tracking-tightest text-paper sm:text-8xl md:text-9xl"
          >
            The Rukky Otebele
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={introDone ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.12 }}
            className="mt-6 max-w-md font-body text-sm text-paper-dim sm:text-base"
          >
            Screenwriter, Director &amp; Editor
          </motion.p>
        </div>

        <div className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
              Recent Work
            </p>
            <ul className="space-y-1.5">
              {projects.slice(0, 6).map((project) => (
                <li key={project.slug}>
                  <Link
                    to={`/work/${project.slug}`}
                    className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
                  >
                    {project.title}{" "}
                    <span className="text-paper-faint">
                      /w {project.studio}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden sm:block">
            <p className="mb-3 font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
              Socials
            </p>
            <ul className="space-y-1.5">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
                  >
                    {social.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}