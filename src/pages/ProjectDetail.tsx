import { Link, Navigate, useParams } from "react-router-dom";
import FilmGrain from "../components/FilmGrain";
import SprocketRail from "../components/SprocketRail";
import { FloatingNav, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { getProjectBySlug, projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = slug ? getProjectBySlug(slug) : undefined;

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <div className="flex min-h-screen">
      <SprocketRail className="hidden sm:block sticky top-0 h-screen" />

      <div className="flex-1 min-w-0">
        <FloatingNav />

        <header className="relative flex min-h-screen flex-col justify-end overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={project.heroImage}
          >
            <source src={project.previewVideo} type="video/webm" />
          </video>
          <div
            className="absolute inset-0 bg-gradient-to-t from-reel-black via-reel-black/45 to-reel-black/10"
            aria-hidden="true"
          />
          <FilmGrain />

          <div className="relative z-10">
            <SiteHeader />
            <div className="px-6 pb-14 pt-24 sm:px-12 sm:pb-20">
              <Link
                to="/work"
                className="inline-flex items-center gap-2 font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
              >
                <span aria-hidden="true">←</span> Back to work
              </Link>

              <p className="mt-8 font-body text-sm text-[#7FA06B]">
                {project.format} · {project.year}
              </p>
              <h1 className="mt-2 max-w-3xl font-display text-5xl font-light leading-[0.98] tracking-tightest text-paper sm:text-7xl">
                {project.title}
              </h1>
              <a
                href={project.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-paper/15 bg-reel-black/55 px-5 py-2.5 font-body text-sm text-paper transition-colors hover:border-[#7FA06B] hover:text-[#7FA06B]"
              >
                Watch here
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </header>

        <section className="border-t border-reel-rule px-6 py-20 sm:px-12 sm:py-28">
          <div className="mx-auto grid max-w-[1600px] gap-12 sm:grid-cols-[1fr_2fr] sm:gap-16">
            <dl className="space-y-6 font-body text-sm">
              <div>
                <dt className="text-paper-faint">Role</dt>
                <dd className="mt-1 text-paper">{project.role}</dd>
              </div>
              <div>
                <dt className="text-paper-faint">Studio</dt>
                <dd className="mt-1 text-paper">{project.studio}</dd>
              </div>
              <div>
                <dt className="text-paper-faint">Year</dt>
                <dd className="mt-1 text-paper">{project.year}</dd>
              </div>
              {project.award && (
                <div>
                  <dt className="text-paper-faint">Recognition</dt>
                  <dd className="mt-1 border-l-2 border-[#7FA06B] pl-3 text-paper">
                    {project.award}
                  </dd>
                </div>
              )}
            </dl>

            <div>
              <p className="font-display text-2xl font-light leading-relaxed text-paper sm:text-3xl">
                {project.logline}
              </p>
              <p className="mt-6 max-w-2xl font-body text-base leading-relaxed text-paper-dim">
                {project.synopsis}
              </p>
            </div>
          </div>
        </section>

        <Link
          to={`/work/${next.slug}`}
          className="group flex items-center justify-between border-t border-reel-rule px-6 py-10 sm:px-12 sm:py-14"
        >
          <div>
            <p className="font-body text-sm text-paper-faint">Up next</p>
            <p className="mt-1 font-display text-2xl font-light text-paper transition-colors group-hover:text-[#7FA06B] sm:text-3xl">
              {next.title}
            </p>
          </div>
          <span
            className="font-display text-2xl text-paper-dim transition-colors group-hover:text-[#7FA06B]"
            aria-hidden="true"
          >
            →
          </span>
        </Link>

        <SiteFooter />
      </div>
    </div>
  );
}
