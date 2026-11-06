"use client"; // uses a click handler

// Thin-line icons (24x24 grid, drawn small). They use currentColor so they match the text color.
const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

export default function ThemeToggle() {
  function toggle() {
    // Read the current theme straight from the <html> tag, flip it, and remember it
    const next = document.documentElement.dataset.theme === "light" ? "dark" : "light";
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next); // remembered for the next visit
    } catch {
      // Storage blocked (private mode): the switch still works, it just won't be remembered
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light and dark theme"
      title="Toggle theme"
      // h-11 = 44px tall (easy tap size)
      className="inline-flex h-11 w-full items-center justify-center text-muted transition-colors hover:text-accent focus-visible:text-accent">
      {/* Dark mode shows the sun ("switch to light"). light:hidden hides it in light mode. */}
      <svg {...iconProps} className="light:hidden">
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      {/* Light mode shows the moon ("switch to dark"). Hidden by default, shown only in light mode. */}
      <svg {...iconProps} className="hidden light:block">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
