"use client"; // changes the browser tab title, so it must run in the browser

import { useEffect } from "react";
import { site } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection"; // the same hook the rail uses

// "top" is the hero. Defined outside the component so the list stays the same between renders.
const ids = ["top", ...site.sections.map((s) => s.id)];

export default function SectionTitle() {
  const active = useActiveSection(ids); // which section is in the middle of the screen

  useEffect(() => {
    const section = site.sections.find((s) => s.id === active);
    // In a section: "Projects | Spencer Samra". In the hero: your normal title (same as in layout.tsx).
    document.title = section ? `${section.label} | ${site.name}` : `${site.name} | Portfolio`;
  }, [active]);

  return null; // draws nothing on screen
}