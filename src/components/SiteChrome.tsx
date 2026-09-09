import { Link, useLocation } from "react-router-dom";
import { projects } from "../data/projects";
import { siteFooterNote, siteProfile, socialLinks } from "../data/site";

const navItems = [
  { label: "About", to: "/about" },
  { label: "Work", to: "/work" },
  { label: "Contact", to: "/contact" },
];

export function SiteHeader() {
  return (
    <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between gap-6 px-6 pt-8 sm:px-12 sm:pt-10">
      <Link
        to="/"
        className="font-display text-lg tracking-tight text-paper transition-colors hover:text-[#7FA06B]"
      >
        {siteProfile.initials}
      </Link>

      <a
        href={`mailto:${siteProfile.email}`}
        className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
      >
        Email
      </a>
    </div>
  );
}

export function FloatingNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed left-1/2 top-5 z-40 -translate-x-1/2 px-4">
      <div className="flex items-center gap-4 rounded-full border border-paper/10 bg-reel-black/70 px-5 py-2.5 backdrop-blur-md sm:gap-7 sm:px-6">
        {navItems.map((item) => {
          const isActive =
            pathname === item.to ||
            (item.to === "/work" && pathname.startsWith("/work/"));

          return (
            <Link
              key={item.to}
              to={item.to}
              className={`font-body text-sm transition-colors ${
                isActive ? "text-paper" : "text-paper-dim hover:text-[#7FA06B]"
              }`}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-reel-rule px-6 py-12 sm:px-12 sm:py-14">
      <div className="mx-auto grid max-w-[1600px] gap-10 sm:grid-cols-[1.3fr_1fr] sm:items-start">
        <div>
          <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
            Recent Work
          </p>
          <ul className="mt-4 space-y-2">
            {projects.slice(0, 5).map((project) => (
              <li key={project.slug}>
                <Link
                  to={`/work/${project.slug}`}
                  className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
                >
                  {project.title} <span className="text-paper-faint">/w {project.studio}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:text-right">
          <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
            Socials
          </p>
          <ul className="mt-4 space-y-2">
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

      <div className="mx-auto mt-10 flex max-w-[1600px] flex-col gap-3 border-t border-reel-rule/70 pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-body text-sm text-paper-dim">{siteFooterNote}</p>
        <a
          href={`mailto:${siteProfile.email}`}
          className="font-body text-sm text-paper-dim transition-colors hover:text-[#7FA06B]"
        >
          {siteProfile.email}
        </a>
      </div>
    </footer>
  );
}