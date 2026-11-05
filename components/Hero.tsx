"use client"; // needs the browser for animations

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import LinkMark from "@/components/LinkMark";
import Magnetic, { MagneticLabel } from "@/components/Magnetic";

export default function Hero() {
  // true if the visitor asked their device for less motion (we skip animations for them)
  const reduce = useReducedMotion();

  // Split the headline into words so each one can animate separately
  const words = site.hero.statement.split(" ");

  return (
    // min-h-svh = at least one full screen tall (svh stays correct on phones with moving address bars)
    // flex + justify-center = content sits in the vertical middle
    // Same width, centering and side padding as Section.tsx, so everything lines up
    <section id="top" className="mx-auto flex min-h-svh w-full max-w-7xl flex-col justify-center px-6 py-24 md:px-10">
      {/* Name + role: fade up together */}
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 16 }} // start invisible and 16px lower
        animate={{ opacity: 1, y: 0 }} // end fully visible in place
        transition={{ duration: 0.6, ease: "easeOut" }}>
        {/* clamp(min, flexible, max): 2.5rem (40px) on phones, grows with screen width, stops at 4rem (64px) */}
        <h1 className="text-[clamp(2.5rem,6vw,4rem)] font-medium leading-none tracking-tight text-bone">{site.name}</h1>
        <p className="mt-4 font-mono text-xs uppercase tracking-wider text-muted">{site.hero.role}</p>
      </motion.div>

      {/* Headline: each word fades up one after another */}
      <p className="mt-10 max-w-3xl text-2xl leading-snug text-muted md:text-4xl">
        {words.map((word, i) => (
          <Fragment key={i}>
            <motion.span
              className="inline-block" // lets the word move up and down
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              // Starts 0.3s after the name, then each word is 0.05s after the last. Change these for speed.
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 + i * 0.05 }}>
              {word}
            </motion.span>{" "}
          </Fragment>
        ))}
      </p>
      {/* Buttons: fade up after the headline finishes (delay depends on how many words it has) */}
      <motion.div
        className="mt-12 flex flex-wrap gap-3" // flex-wrap = buttons drop to a new row on small screens
        initial={reduce ? false : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 + words.length * 0.05 }}>
        {site.links.map((link) => (
          // Magnetic = this button leans toward your cursor. key goes on the outermost element.
          <Magnetic key={link.label}>
            <a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              download={link.download ? true : undefined}
              // gap-2 moved into MagneticLabel below
              className="inline-flex min-h-11 items-center border border-muted/40 px-4 font-mono text-xs uppercase tracking-wider text-bone transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent">
              {/* MagneticLabel = the text and icon shift a bit extra (parallax) */}
              <MagneticLabel>
                {link.label}
                <LinkMark kind={link.mark} />
              </MagneticLabel>
            </a>
          </Magnetic>
        ))}
      </motion.div>
    </section>
  );
}
