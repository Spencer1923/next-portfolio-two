import { useEffect, useState } from "react"; // React tools for remembering values and running effects

// Characters that flicker before the real letters appear. Edit this string to change the look.
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// text = final word, active = true while hovering, duration = milliseconds to finish
export function useScramble(text: string, active: boolean, duration = 500) {
  const [output, setOutput] = useState(text); // the text currently shown

  useEffect(() => {
    if (!active) return; // not hovering, do nothing

    // If the visitor's device asks for less motion, skip the effect (accessibility)
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const start = performance.now(); // when the effect began
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1); // goes from 0 to 1
      const resolved = Math.floor(progress * text.length); // how many letters are final so far

      let next = "";
      for (let i = 0; i < text.length; i++) {
        // Letters before "resolved" are real, the rest are random
        const isLetterOrDigit = /[A-Za-z0-9]/.test(text[i]); // only letters and digits scramble; spaces and "/" stay put
        next += i < resolved || !isLetterOrDigit ? text[i] : CHARS[Math.floor(Math.random() * CHARS.length)];
      }
      setOutput(next);

      if (progress < 1) frame = requestAnimationFrame(tick); // run again on the next screen refresh
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame); // stop if the mouse leaves early
  }, [text, active, duration]);

  // When not hovering, always show the clean final text
  return active ? output : text;
}
