"use client"; // uses clicks and state, so it runs in the browser

import { useEffect, useState } from "react";
import { useScramble } from "@/lib/useScramble"; // the same scramble effect as the rail
import Magnetic, { MagneticLabel } from "@/components/Magnetic";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false); // true for ~2 seconds after copying

  // While "copied" is true, the label scrambles into "Copied"
  const label = useScramble(copied ? "Copied" : "Copy", copied, 500);

  // 1.8 seconds after copying, switch back to "Copy".
  // The returned function cancels the timer if the button disappears early.
  useEffect(() => {
    if (!copied) return;
    const timer = setTimeout(() => setCopied(false), 1800);
    return () => clearTimeout(timer);
  }, [copied]);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text); // puts the email on the clipboard
      setCopied(true);
    } catch {
      // Clipboard blocked (rare): do nothing. The email link still works.
    }
  }

  return (
    <>
      {/* relative z-10 keeps it above the Contact row's clickable overlay */}
      <Magnetic className="relative z-10">
        <button
          type="button"
          onClick={handleCopy}
          aria-label="Copy email address"
          className="relative z-10 inline-flex min-h-11 min-w-20 items-center justify-center border border-muted/40 px-3 font-mono text-xs uppercase tracking-wider text-bone transition-colors hover:border-accent hover:text-accent focus-visible:border-accent focus-visible:text-accent">
          <MagneticLabel>{label}</MagneticLabel>
        </button>
      </Magnetic>
      {/* Invisible message that screen readers announce after copying */}
      <span role="status" className="sr-only">
        {copied ? "Email address copied" : ""}
      </span>
    </>
  );
}
