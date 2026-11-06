import { site } from "@/lib/site"; // "@/" means "start from the project root"
import RailNav from "@/components/RailNav";
import ThemeToggle from "@/components/ThemeToggle";

export default function Rail() {
  return (
    // fixed = stays put while u scroll, inset-y-0 = full height, left-0 = left edge
    // z-40 = sits above the page content
    // bg-ink/40 = near-black at 40% opacity, backdrop-blur-md = blurs what's behind it
    // border-r border-line = the hairline on the right edge
    <aside className="fixed inset-y-0 left-0 z-40 flex w-[var(--rail-w)] flex-col items-center border-r border-line bg-ink/40 py-6 backdrop-blur-md">
      {/* Monogram at the top. "#top" scrolls back to the top of the page. */}
      <a href="#top" className="font-mono text-sm font-medium tracking-wider text-bone">
        {site.monogram}
      </a>

      {/* my-auto pushes the numbers to the vertical middle of the rail */}
      {/* The numbers, with the active-section highlight (see RailNav.tsx) */}
      <RailNav />
      {/* Theme toggle at the very bottom of the rail. The numbers above use my-auto,
          so they stay centered in the free space and this sits at the bottom. */}
      <ThemeToggle />
    </aside>
  );
}
