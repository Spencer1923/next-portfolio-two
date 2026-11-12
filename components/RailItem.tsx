"use client"; // marks this file as running in the browser, needed for hover and state

import { useState } from "react";
import { useScramble } from "@/lib/useScramble";
import Link from "next/link";

type Props = { id: string; number: string; label: string; current: boolean }; // current = this section is on screen

export default function RailItem({ id, number, label, current }: Props) {
  const [active, setActive] = useState(false); // true while hovered or keyboard-focused
  const text = useScramble(label, active, 500); // 500 = scramble speed in ms (change here)

  return (
    <Link
      href={`/#${id}`} // the leading "/" means "the home page", so it works from any page (and still scrolls normally on the home page)
      aria-label={label}
      // Mouse only: on phones a tap would leave the label stuck open
      onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
      onPointerLeave={() => setActive(false)}
      // Keyboard only: ":focus-visible" is true for Tab, false for mouse clicks
      onFocus={(e) => e.currentTarget.matches(":focus-visible") && setActive(true)}
      onBlur={() => setActive(false)}
      // relative = lets the label position itself against this number
      aria-current={current ? "location" : undefined} // tells screen readers which section you're in
      // w-full = the link spans the whole rail. min-h-11 = 44px tall for easy tapping.
      // Blue when it's the current section, muted otherwise.
      className={`relative flex min-h-11 w-full items-center justify-center font-mono text-xs transition-colors hover:text-accent focus-visible:text-accent ${current ? "text-accent" : "text-muted"}`}>
      {number}

      {/* Blue bar on the rail's inner edge, only for the current section.
          right-0 = against the rail's right edge, centered vertically. */}
      {current && <span aria-hidden="true" className="absolute right-0 top-1/2 h-5 w-[2px] -translate-y-1/2 bg-accent" />}

      {/* The label: sits just right of the number, off the rail, over the page.
          aria-hidden = screen readers skip it (the aria-label above already says the name). */}
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute left-full top-1/2 ml-3 -translate-y-1/2 whitespace-nowrap uppercase tracking-wider text-bone transition-all duration-200 ${
          active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0" // slide + fade
        }`}>
        {text}
      </span>
    </Link>
  );
}
