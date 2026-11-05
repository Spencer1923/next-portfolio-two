import Section from "@/components/Section";
import LinkMark from "@/components/LinkMark";
import CopyButton from "@/components/CopyButton";
import { site } from "@/lib/site";

export default function Contact() {
  return (
    <Section id="contact">
      {/* The spec sheet. max-w-3xl keeps rows from stretching too wide on big screens. */}
      <ul className="max-w-3xl border-t border-line">
        {site.links.map((link) => {
          const isEmail = link.href.startsWith("mailto:"); // the email row gets the Copy button

          return (
            // relative = lets the clickable overlay below cover this whole row
            // Phones: label on its own line, value + action under it. Desktop (md+): three columns.
            <li
              key={link.label}
              className="group relative grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-line py-5 md:grid-cols-[6.5rem_1fr_auto] md:gap-y-0"
            >
              {/* Label */}
              <span className="col-span-2 font-mono text-xs uppercase tracking-wider text-muted md:col-span-1">
                {link.label}
              </span>

              {/* Value. after:absolute after:inset-0 stretches the link over the entire row,
                  so the whole row is clickable. */}
              <a
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}              
                aria-label={`${link.label}: ${link.value}`}
                className="min-w-0 break-words text-lg text-bone transition-colors after:absolute after:inset-0 group-hover:text-accent focus-visible:text-accent"
              >
                {link.value}
              </a>

              {/* Action: Copy button for email, a small arrow icon for the rest */}
              {isEmail ? (
                <CopyButton text={site.email} />
              ) : (
                <span aria-hidden="true" className="text-muted transition-colors group-hover:text-accent">
                  <LinkMark kind={link.mark} />
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </Section>
  );
}