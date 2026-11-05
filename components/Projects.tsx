"use client"; // must be the very first line of the file

import { useState } from "react";
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import Section from "@/components/Section";
import LinkMark from "@/components/LinkMark";
import ProjectImage from "@/components/ProjectImage";
import { site } from "@/lib/site";

// Shared look for the Live / GitHub links. min-h-11 = 44px tall, an easy tap size on phones.
const linkClass = "inline-flex min-h-11 items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-accent focus-visible:text-accent";

export default function Projects() {
  const reduce = useReducedMotion(); // true if the visitor wants less motion
  const [hovered, setHovered] = useState<number | null>(null); // which row the mouse is on (null = none)
  const [overLinks, setOverLinks] = useState(false); // true while the mouse is on the Live / GitHub links

  // The raw mouse position, updated on every move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Springs follow the raw position with a soft delay (the "glide").
  // stiffness = snappiness, damping = less bounce, mass = heaviness. Tweak these to taste.
  const spring = { stiffness: 220, damping: 26, mass: 0.6 };
  const x = useSpring(mouseX, spring);
  const y = useSpring(mouseY, spring);

  // Put the preview 24px right of the cursor, but keep it fully on screen.
  // 360 = preview width (must match w-[360px] below), 16 = gap from the screen edge.
  // typeof window check: the first render happens on the server, where "window" doesn't exist.
  const previewX = useTransform(x, (v) => (typeof window === "undefined" ? v : Math.min(v + 24, window.innerWidth - 360 - 16)));
  // Keep it vertically on screen too (140 is about half the preview height plus a margin)
  const previewY = useTransform(y, (v) => (typeof window === "undefined" ? v : Math.min(Math.max(v, 140), window.innerHeight - 140)));
  return (
    <Section id="projects">
      {/* The list. border-t = hairline on top; each row has one underneath. */}
      <ol
        className="border-t border-line"
        onPointerMove={(e) => {
          if (e.pointerType !== "mouse") return; // ignore touch and pen, only a real mouse gets the preview
          mouseX.set(e.clientX);
          mouseY.set(e.clientY);
        }}
        onPointerLeave={() => setHovered(null)} // leaving the whole list hides the preview
      >
        {site.projects.map((project, i) => (
          // Grid: number | main info | links (links drop under the info on phones)
          <li
            key={project.name}
            onPointerEnter={(e) => {
              if (e.pointerType !== "mouse") return;
              mouseX.set(e.clientX);
              mouseY.set(e.clientY);
              // If the preview wasn't showing, snap it to the cursor first so it doesn't fly in from its old spot
              if (hovered === null) {
                x.jump(e.clientX);
                y.jump(e.clientY);
              }
              setHovered(i);
            }}
            // Same classes as before, plus: other rows fade to 40% while one is hovered
            className={`group grid grid-cols-[2.5rem_1fr] gap-x-4 border-b border-line py-8 transition-opacity duration-300 md:grid-cols-[3rem_1fr_auto] md:gap-x-8 ${
              hovered !== null && hovered !== i ? "opacity-40" : "opacity-100"
            }`}>
            {/* Number like 01. Turns blue when u hover the row. */}
            <span className="pt-2 font-mono text-xs text-muted transition-colors group-hover:text-accent">{String(i + 1).padStart(2, "0")}</span>

            <div>
              {/* Phone thumbnail. [@media(hover:hover)]:hidden = hidden on devices with a mouse
                  (they get the floating preview in 5b), shown on touch devices. */}
              <div className="mb-5 max-w-xs [@media(hover:hover)]:hidden">
                <ProjectImage name={project.name} image={project.image} />
              </div>

              <h3 className="text-2xl text-bone">{project.name}</h3>
              <p className="mt-2 max-w-xl text-muted">{project.description}</p>

              {/* Tech tags */}
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <li key={tag} className="border border-line px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-muted">
                    {tag}
                  </li>
                ))}
              </ul>
            </div>

            {/* Links. col-start-2 = sits under the info on phones. md:col-start-auto = own column on desktop. */}
            <div
              className="col-start-2 mt-3 flex gap-5 md:col-start-auto md:mt-0"
              // While the mouse is over the links, hide the preview so it never covers them
              onPointerEnter={(e) => e.pointerType === "mouse" && setOverLinks(true)}
              onPointerLeave={() => setOverLinks(false)}>
              {project.live && (
                <a href={project.live} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live site (opens in a new tab)`} className={linkClass}>
                  Live <LinkMark kind="external" />
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} on GitHub (opens in a new tab)`} className={linkClass}>
                  GitHub <LinkMark kind="external" />
                </a>
              )}
            </div>
          </li>
        ))}
      </ol>
      {/* Floating preview. fixed = placed against the screen, pointer-events-none = never blocks clicks.
          It only exists while a row is hovered (so the server never draws it, which avoids the mismatch). */}
      <AnimatePresence>
        {hovered !== null &&
          !overLinks && ( // show only while hovering a row AND not over its links
            <motion.div
              key="preview" // one frame that stays while u move between rows
              aria-hidden="true"
              className="pointer-events-none fixed left-0 top-0 z-30 w-[360px]"
              style={{ x: previewX, y: previewY }} // follows the cursor with the glide
              exit={{ opacity: 0, transition: { duration: 0.15 } }} // quick fade out when u leave the list
            >
              <motion.div
                key={hovered} // new key per row = the wipe plays again for each project
                className="absolute left-0 top-0 w-full -translate-y-1/2" // centered on the cursor's height
                initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }} // fully hidden
                animate={{ clipPath: "inset(0 0 0% 0)" }} // wipes open from top to bottom
                transition={{ duration: 0.35, ease: "easeOut" }}>
                {/* opacity-50 = see-through, so the rows behind stay readable */}
                <div className="opacity-50">
                  <ProjectImage name={site.projects[hovered].name} image={site.projects[hovered].image} />
                </div>
              </motion.div>
            </motion.div>
          )}
      </AnimatePresence>
    </Section>
  );
}
