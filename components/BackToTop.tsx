"use client"; // uses hover and state

import { useState } from "react";
import { useScramble } from "@/lib/useScramble";
import LinkMark from "@/components/LinkMark";
import Magnetic, { MagneticLabel } from "@/components/Magnetic";

export default function BackToTop() {
  const [active, setActive] = useState(false); // true while hovered or keyboard-focused
  const label = useScramble("Top", active, 400); // 400 = scramble speed in ms

  return (
    <Magnetic>
      <a
        href="#top"
        aria-label="Back to top"
        onPointerEnter={(e) => e.pointerType === "mouse" && setActive(true)}
        onPointerLeave={() => setActive(false)}
        onFocus={(e) => e.currentTarget.matches(":focus-visible") && setActive(true)}
        onBlur={() => setActive(false)}
        className="inline-flex min-h-11 items-center font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent focus-visible:text-accent">
        <MagneticLabel>
          {label}
          <LinkMark kind="up" />
        </MagneticLabel>
      </a>
    </Magnetic>
  );
}
