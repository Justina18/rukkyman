import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import FilmGrain from "../components/FilmGrain";

const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "Vimeo", href: "#" },
  { label: "LinkedIn", href: "#" },
];

export default function Home() {
  return <Hero />;
}

function Hero() {
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

      <nav className="absolute left-1/2 top-8 z-30 hidden -translate-x-1/2 sm:block">
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
            Work
          </Link>
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
          <h1 className="font-display text-[13vw] font-light leading-[0.92] tracking-tightest text-paper sm:text-8xl md:text-9xl">
           The Rukky Otebele
          </h1>
          <p className="mt-6 max-w-md font-body text-sm text-paper-dim sm:text-base">
            Screenwriter, Director &amp; Editor
          </p>
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

          <div className="sm:text-right">
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