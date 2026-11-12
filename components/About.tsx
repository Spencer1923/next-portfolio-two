import Section from "@/components/Section";
import { site } from "@/lib/site";


export default function About() {
  return (
    // Section gives us the "01 / ABOUT" header and the page spacing
    <Section id="about">
      {/* Stacked on phones and tablets. From 1024px (lg) up: two columns, bio a bit wider */}
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Left: bio paragraphs. space-y-6 = gap between paragraphs. text-bone/80 = bone color at 80%. */}
        <div className="max-w-2xl space-y-6 text-lg leading-relaxed text-bone/80">
          {site.about.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Right: the fact sheet. <dl> = "description list" (label + value pairs).
            Phones: hairline on top. Desktop (lg): hairline on the left instead. */}
        <dl className="border-t border-line lg:border-l lg:border-t-0 lg:pl-10">
          {site.about.facts.map((fact) => (
            // Each row: narrow label column + flexible value column, hairline underneath
            <div key={fact.label} className="grid grid-cols-[6.5rem_1fr] gap-4 border-b border-line py-4">
              <dt className="pt-0.5 font-mono text-xs uppercase tracking-wider text-muted">{fact.label}</dt>
              <dd className="text-bone">{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
