"use client"; // uses the browser's scroll watching

import RailItem from "@/components/RailItem";
import { site } from "@/lib/site";
import { useActiveSection } from "@/lib/useActiveSection";

// "top" is the hero. Watching it means no number is highlighted while you're in the hero.
// Defined outside the component so the list stays the same between renders.
const ids = ["top", ...site.sections.map((s) => s.id)];

export default function RailNav() {
  const active = useActiveSection(ids);

  return (
    // w-full = the nav spans the whole rail, so each item can reach the rail's edge
    <nav aria-label="Sections" className="my-auto flex w-full flex-col gap-4">
      {site.sections.map((s) => (
        <RailItem key={s.id} id={s.id} number={s.number} label={s.label} current={active === s.id} />
      ))}
    </nav>
  );
}