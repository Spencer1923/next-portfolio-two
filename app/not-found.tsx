import Link from "next/link"; // Next.js link (fast page changes)
import LinkMark from "@/components/LinkMark";
import Magnetic, { MagneticLabel } from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

export default function NotFound() {
  return (
    // Same centered column as the other sections. min-h-[70svh] = tall enough to feel like a page.
    <section className="mx-auto flex min-h-[70svh] w-full max-w-7xl flex-col justify-center px-6 py-24 md:px-10">
      {/* Small status line with the pulsing dot */}
      <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-label">
        <span aria-hidden="true" className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 [animation-duration:2.4s] motion-reduce:animate-none" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        Page not found
      </p>

      {/* Big 404 that scrambles into place. clamp(min, flexible, max) keeps it fitting on phones. */}
      <h1 className="mt-6 text-[clamp(4rem,14vw,9rem)] font-medium leading-none tracking-tight text-bone">
        <ScrambleText text="404" />
      </h1>

      <p className="mt-6 max-w-md text-xl text-muted md:text-2xl">
        Nothing here. The page you wanted moved, or never existed.
      </p>

      {/* Back home button: same look as your hero buttons, and it leans toward the cursor */}
      <div className="mt-10">
        <Magnetic>
          <Link
            href="/"
            className="inline-flex min-h-11 items-center border border-muted/40 px-4 font-mono text-xs uppercase tracking-wider text-bone transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent"
          >
            <MagneticLabel>
              Back home
              <LinkMark kind="arrow" />
            </MagneticLabel>
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}