import BackToTop from "@/components/BackToTop";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    // Same centered column as the sections, so everything lines up
    <footer className="mx-auto w-full max-w-7xl px-6 pb-10 pt-12 md:px-10 md:pb-12">
      {/* One box, two cells. Phones: stacked. Desktop (md+): copyright fills the space, TOP sits on the right. */}
      <div className="grid border border-line font-mono text-xs uppercase tracking-wider text-muted md:grid-cols-[1fr_auto]">
        {/* Cell 1: pulsing availability dot + copyright.
            title = tooltip on hover. sr-only = invisible text that screen readers read. */}
        <div className="flex min-h-11 items-center gap-3 border-b border-line px-4 md:border-b-0 md:border-r" title={site.hero.status}>
          <span aria-hidden="true" className="relative flex h-2 w-2">
            {/* The ring: grows and fades forever. 2.4s = pulse speed. motion-reduce = no pulse if the visitor asked for less motion. */}
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 [animation-duration:2.4s] motion-reduce:animate-none" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="sr-only">{site.hero.status}. </span>
          <span>
            © {site.copyrightYear} {site.name}
          </span>
        </div>

        {/* Cell 2: back to top (scrambles on hover) */}
        <div className="flex items-center px-4">
          <BackToTop />
        </div>
      </div>
    </footer>
  );
}
