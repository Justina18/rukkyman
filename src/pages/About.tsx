import FilmGrain from "../components/FilmGrain";
import HaloReel from "../components/ui/halo-reel";
import { FloatingNav, SiteFooter, SiteHeader } from "../components/SiteChrome";
import { awards } from "../data/projects";
import {
  aboutBio,
  creativeSkills,
  siteProfile,
  technicalSkills,
} from "../data/site";

const haloItems = [
  {
    src: "/personal-images/IMG_2889.JPG.jpeg",
    alt: `Portrait of ${siteProfile.name}`,
  },
  {
    src: "/personal-images/IMG_2890.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
  {
    src: "/personal-images/IMG_3308.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
  {
    src: "/personal-images/IMG_2889.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
  {
    src: "/personal-images/IMG_2890.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
  {
    src: "/personal-images/IMG_3308.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
  {
    src: "/personal-images/IMG_2889.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
  {
    src: "/personal-images/IMG_2890.JPG.jpeg",
    alt: `${siteProfile.name} portrait`,
  },
];

export default function About() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-reel-black">
      <FloatingNav />
      <FilmGrain />

      <div className="relative z-10">
        <SiteHeader />

        <section className="mx-auto max-w-[1600px] px-6 pb-20 pt-8 sm:px-12 sm:pb-24 sm:pt-12">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
            <div className="flex flex-col gap-5">
              <HaloReel
                items={haloItems}
                cardWidth={130}
                cardHeight={180}
                minScale={0.4}
                className="!h-[560px] overflow-hidden sm:!h-[640px] [&_img]:grayscale"
              />

              <div className="space-y-2 px-1">
                <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                  About
                </p>
                <p className="font-display text-3xl font-light leading-tight text-paper sm:text-4xl">
                  {siteProfile.name}
                </p>
                <p className="font-body text-sm text-paper-dim">
                  {siteProfile.title} · {siteProfile.location}
                </p>
              </div>
            </div>

            <div className="flex flex-col justify-end">
              <p className="font-body text-xs uppercase tracking-[0.25em] text-paper-faint">
                Bio
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-5xl font-light leading-[0.96] tracking-tightest text-paper sm:text-7xl">
                A story-first filmmaker.
              </h1>
              <p className="mt-8 max-w-2xl font-body text-base leading-8 text-paper-dim sm:text-lg">
                {aboutBio}
              </p>

              <dl className="mt-10 grid gap-6 border-t border-reel-rule pt-8 sm:grid-cols-2">
                <div>
                  <dt className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                    Name
                  </dt>
                  <dd className="mt-2 font-body text-sm text-paper">
                    {siteProfile.name}
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                    Role
                  </dt>
                  <dd className="mt-2 font-body text-sm text-paper">
                    {siteProfile.title}
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                    Location
                  </dt>
                  <dd className="mt-2 font-body text-sm text-paper">
                    {siteProfile.location}
                  </dd>
                </div>
                <div>
                  <dt className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                    Contact
                  </dt>
                  <dd className="mt-2 flex flex-col gap-2 font-body text-sm text-paper">
                    <a
                      href={`mailto:${siteProfile.email}`}
                      className="transition-colors hover:text-[#7FA06B]"
                    >
                      {siteProfile.email}
                    </a>
                    <a
                      href={`tel:${siteProfile.phone.replace(/\s+/g, "")}`}
                      className="transition-colors hover:text-[#7FA06B]"
                    >
                      {siteProfile.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="border-t border-reel-rule px-6 py-16 sm:px-12 sm:py-20">
          <div className="mx-auto grid max-w-[1600px] gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                Technical
              </p>
              <ul className="mt-5 space-y-3">
                {technicalSkills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-reel-rule pb-3 font-body text-base text-paper-dim"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
                Creative
              </p>
              <ul className="mt-5 space-y-3">
                {creativeSkills.map((skill) => (
                  <li
                    key={skill}
                    className="border-b border-reel-rule pb-3 font-body text-base text-paper-dim"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="border-t border-reel-rule px-6 py-16 sm:px-12 sm:py-20">
          <div className="mx-auto max-w-[1600px]">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
              Awards
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-2">
              {awards.map((award) => (
                <article
                  key={`${award.title}-${award.project}`}
                  className="border border-reel-rule bg-reel-charcoal/30 p-6"
                >
                  <p className="font-body text-sm text-[#7FA06B]">{award.year}</p>
                  <h2 className="mt-3 font-display text-2xl font-light text-paper">
                    {award.title}
                  </h2>
                  <p className="mt-2 font-body text-sm text-paper-dim">
                    {award.project} · {award.presenter}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <SiteFooter />
      </div>
    </main>
  );
}