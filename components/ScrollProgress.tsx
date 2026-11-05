"use client"; // runs in the browser (it listens to scrolling)

import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollProgress() {
  // scrollYProgress is a number from 0 (top of page) to 1 (bottom of page)
  const { scrollYProgress } = useScroll();

  // Turns 0 to 1 into "0%" to "100%". It's capped, so it never goes past the ends.
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    // fixed top-0 = pinned to the top of the screen
    // left-[var(--rail-w)] = starts where the rail ends (same variable the rail uses)
    // h-px = 1px tall, pointer-events-none = clicks pass through it
    <div className="pointer-events-none fixed left-[var(--rail-w)] right-0 top-0 z-50 h-px">
      <motion.div
        style={{
          width, // grows with your scroll, with no delay
          // Soft glow under the line. Change the 8px for glow size, the 60% for glow strength.
          boxShadow: "0 2px 8px color-mix(in srgb, var(--color-accent) 60%, transparent)",
        }}
        className="h-full bg-accent"
      />
    </div>
  );
}