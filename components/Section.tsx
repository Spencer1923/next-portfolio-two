"use client"; // needs the browser to know when it scrolls into view

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { site } from "@/lib/site";
import { useScramble } from "@/lib/useScramble";

// id must match an id in site.sections (lib/site.ts)
type Props = { id: string; children: React.ReactNode };

export default function Section({ id, children }: Props) {
  const headerRef = useRef<HTMLDivElement>(null); // points at the header row so we can watch it

  // inView turns true once, when the header reaches the lower part of the screen.
  // Change -15% to trigger earlier (-5%) or later (-30%).
  const inView = useInView(headerRef, { once: true, margin: "0px 0px -15% 0px" });

  // Look up this section's number and name from the data file
  const current = site.sections.find((s) => s.id === id)!;
  const total = String(site.sections.length).padStart(2, "0"); // e.g. "04"

  // The label text scrambles into place once the header is in view (700 = speed in ms)
  const labelText = useScramble(`${current.number} / ${current.label.toUpperCase()}`, inView, 700);

  return (
    // mx-auto + max-w-7xl = centered column, max 1280px wide
    // py-24 md:py-32 = vertical space (change these numbers for tighter or looser sections)
    <section id={id} className="mx-auto w-full max-w-7xl px-6 py-28 md:px-10 md:py-40">
      {/* Header row: label, then the line, then the index */}
      <div ref={headerRef} className="flex items-center gap-4 font-mono text-base uppercase tracking-wider text-label">
        {/* 1. Label: hidden until in view, then scrambles */}
        <span className={`shrink-0 whitespace-nowrap transition-opacity duration-150 ${inView ? "opacity-100" : "opacity-0"}`}>{labelText}</span>

        {/* 2. The line: flex-1 fills the space. It grows from its left end (origin-left)
               after a 0.5s delay, so it starts once the label is mostly done. */}
        <motion.div className="h-px flex-1 origin-left bg-line" initial={{ scaleX: 0 }} animate={{ scaleX: inView ? 1 : 0 }} transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }} />

        {/* 3. Index like [ 01/04 ]: fades in last, after the line */}
        <motion.span className="hidden shrink-0 whitespace-nowrap min-[400px]:inline" initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.4, delay: 1.2 }}>
          [ {current.number}/{total} ]
        </motion.span>
      </div>

      {/* The section's actual content goes here */}
      <div className="mt-12">{children}</div>
    </section>
  );
}
