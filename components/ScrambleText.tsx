"use client"; // the scramble runs in the browser

import { useScramble } from "@/lib/useScramble";

// Shows the text, scrambling into place as soon as it appears. 900 = speed in ms.
export default function ScrambleText({ text }: { text: string }) {
  const scrambled = useScramble(text, true, 900); // true = start immediately
  return <>{scrambled}</>;
}