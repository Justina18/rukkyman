import { Link } from "react-router-dom";
import FilmGrain from "../components/FilmGrain";
import { FloatingNav, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { projects } from "../data/projects";
import { siteProfile } from "../data/site";

const heroVideo =
  "/Videos/THE-BLUEPRINT-CHRISTIAN-MOVIE-THE-COVENANT-NATION-SNAPSHOTS-PROD-clip-6m55s-7m03s.webm";

export default function Work() {
  return (
    <main className="bg-reel-black">
      <section className="relative min-h-screen overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-ruk.jpeg"
        >
          <source src={heroVideo} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-reel-black via-reel-black/55 to-reel-black/10" />
        <FilmGrain />
        <FloatingNav />

        <div className="relative z-10 flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex flex-1 items-end px-6 pb-14 pt-24 sm:px-12 sm:pb-20">
            <div className="mx-auto max-w-[1600px]">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-paper-dim">
                Selected Work
              </p>
              <h1 className="mt-4 max-w-4xl font-display text-[12vw] font-light leading-[0.92] tracking-tightest text-paper sm:text-7xl md:text-8xl">
                {siteProfile.name}
              </h1>
              <p className="mt-5 max-w-xl font-body text-sm text-paper-dim sm:text-base">
                {siteProfile.title} · Stories shaped from page to final cut.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-reel-rule px-6 py-16 sm:px-12 sm:py-20">
        <div className="mx-auto max-w-[1600px]">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                Projects
              </p>
              <h2 className="mt-3 font-display text-3xl font-light text-paper sm:text-4xl">
                Click into each film.
              </h2>
            </div>
          </div>

          <div className="mt-10 space-y-4">
            {projects.map((project) => (
              <Link
                key={project.slug}
                to={`/work/${project.slug}`}
                className="group block border border-reel-rule bg-reel-charcoal/20 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#7FA06B]/60"
              >
                <div className="grid gap-5 p-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-8 sm:p-6">
                  <div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                      <span>{project.format}</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="mt-3 font-display text-2xl font-light text-paper transition-colors group-hover:text-[#7FA06B] sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 max-w-2xl font-body text-sm text-paper-dim sm:text-base">
                      {project.role} · {project.studio}
                    </p>
                    <span className="mt-4 block h-px w-0 bg-[#7FA06B] transition-all duration-300 group-hover:w-full" />
                  </div>

                  <div className="flex items-center gap-4 sm:gap-6">
                    <div className="relative hidden h-24 w-36 overflow-hidden border border-reel-rule bg-reel-black/40 sm:block">
                      <video
                        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        aria-label={`Preview clip for ${project.title}`}
                      >
                        <source src={project.previewVideo} type="video/webm" />
                      </video>
                      <div className="absolute inset-0 bg-gradient-to-tr from-reel-black/35 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    </div>
                    <span className="font-display text-2xl text-paper-dim transition-colors group-hover:text-[#7FA06B]" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}