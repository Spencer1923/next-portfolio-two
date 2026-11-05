import Section from "@/components/Section";
import { site } from "@/lib/site";

export default function Experience() {
  return (
    <Section id="experience">
      {/* <ol> = ordered list. max-w-3xl keeps lines a comfortable reading length. */}
      <ol className="max-w-3xl">
        {site.experience.map((job) => {
          const isCurrent = job.end === null; // no end date = this is the current job

          return (
            // group = lets the children react when you hover anywhere on this entry
            // relative = lets the line and marker position themselves inside this entry
            // pl-8 = space on the left for the timeline, pb-12 = space between jobs
            <li key={`${job.company}-${job.start}`} className="group relative pb-12 pl-8 last:pb-0">
              {/* The timeline hairline. It covers the full height of the entry, so entries join into one long line. */}
              <span aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-line" />

              {/* Blue edge tick: a 2px blue line on top of the hairline, only visible on hover */}
              <span
                aria-hidden="true"
                className="absolute -left-[0.5px] top-0 h-full w-[2px] bg-accent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
              />

              {/* Marker on the line */}
              {isCurrent ? (
                // Current job: blue dot with the slow pulse ring (same idea as the availability dot)
                <span aria-hidden="true" className="absolute -left-1 top-[4px] flex h-[9px] w-[9px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75 [animation-duration:2.4s] motion-reduce:animate-none" />
                  <span className="relative inline-flex h-[9px] w-[9px] rounded-full bg-accent" />
                </span>
              ) : (
                // Past jobs: small hollow square. bg-ink hides the line behind it. Border turns blue on hover.
                <span
                  aria-hidden="true"
                  className="absolute -left-[3px] top-[5px] h-[7px] w-[7px] border border-muted bg-ink transition-colors group-hover:border-accent"
                />
              )}

              {/* Dates, like "2025 — PRESENT" */}
              <p className="font-mono text-xs uppercase tracking-wider text-muted">
                {job.start} — {job.end ?? "Present"}
              </p>

              {/* Role and company */}
              <h3 className="mt-2 text-xl text-bone md:text-2xl">
                {job.role} <span className="text-muted">· {job.company}</span>
              </h3>

              {/* Highlight bullets. They brighten when you hover the entry. */}
              <ul className="mt-4 space-y-2 text-muted transition-colors duration-200 group-hover:text-bone/80">
                {job.bullets.map((bullet, i) => (
                  <li key={i} className="flex gap-3">
                    <span aria-hidden="true">—</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ol>
    </Section>
  );
}