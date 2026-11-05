import { useEffect, useState } from "react";

// Give it a list of section ids. It returns the id of the one currently in the middle of the screen.
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    // Find each section on the page by its id
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    // IntersectionObserver = a browser tool that tells us when an element enters or leaves an area.
    // rootMargin shrinks the watched area to a thin band at 40%–45% down the screen,
    // so exactly one section "touches" it at a time.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect(); // stop watching when the component goes away
  }, [ids]);

  return active;
}