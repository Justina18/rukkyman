import { FloatingNav, SiteHeader } from "../components/SiteChrome";
import { socialLinks, siteProfile } from "../data/site";

export default function Contact() {
  return (
    <main className="min-h-screen bg-reel-black">
      <FloatingNav />
      <SiteHeader />

      <section className="mx-auto flex min-h-[calc(100vh-88px)] max-w-[1600px] flex-col justify-center px-6 py-14 sm:px-12 sm:py-20">
        <div className="max-w-3xl">
          <p className="font-body text-xs uppercase tracking-[0.25em] text-paper-faint">
            Contact
          </p>
          <h1 className="mt-4 font-display text-5xl font-light leading-[0.95] tracking-tightest text-paper sm:text-7xl">
            Reach out for writing, directing, editing, or campaign work.
          </h1>
          <p className="mt-6 max-w-2xl font-body text-base leading-8 text-paper-dim sm:text-lg">
            Based in {siteProfile.location}, Rukky is available for creative
            collaborations, commission work, and project conversations.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="border-t border-reel-rule pt-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
              Direct
            </p>
            <ul className="mt-5 space-y-4 font-body text-lg text-paper">
              <li>
                <a
                  href={`mailto:${siteProfile.email}`}
                  className="transition-colors hover:text-[#7FA06B]"
                >
                  {siteProfile.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${siteProfile.phone.replace(/\s+/g, "")}`}
                  className="transition-colors hover:text-[#7FA06B]"
                >
                  {siteProfile.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="border-t border-reel-rule pt-8">
            <p className="font-body text-xs uppercase tracking-[0.2em] text-paper-faint">
              Socials
            </p>
            <ul className="mt-5 space-y-4">
              {socialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    className="group inline-flex items-center gap-3 font-body text-lg text-paper transition-colors hover:text-[#7FA06B]"
                  >
                    <span>{social.label}</span>
                    <span className="h-px w-8 bg-reel-rule transition-all group-hover:w-12 group-hover:bg-[#7FA06B]" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}