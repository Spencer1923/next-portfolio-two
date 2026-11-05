"use client"; // needs mouse movement

import { useRef } from "react";

type Props = {
  children: React.ReactNode;
  strength?: number; // how far the button leans, in pixels (change the default 8 here)
  className?: string;
};

// Wrap any button or link in <Magnetic> and it leans toward your cursor.
export default function Magnetic({ children, strength = 3, className = "" }: Props) {
  const areaRef = useRef<HTMLDivElement>(null); // the still "field" around the button that senses the mouse
  const moverRef = useRef<HTMLDivElement>(null); // the part that actually moves

  function handleMove(e: React.PointerEvent) {
    if (e.pointerType !== "mouse") return; // no effect on touch screens
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return; // respect "reduce motion"
    const area = areaRef.current;
    const mover = moverRef.current;
    if (!area || !mover) return;

    // How far the cursor is from the center of the field: -1 (left/top edge) to 1 (right/bottom edge)
    const box = area.getBoundingClientRect();
    const dx = (e.clientX - (box.left + box.width / 2)) / (box.width / 2);
    const dy = (e.clientY - (box.top + box.height / 2)) / (box.height / 2);

    // Save the offset as CSS variables. The mover and the label (parallax) both read them.
    mover.style.setProperty("--mx", `${dx * strength}px`);
    mover.style.setProperty("--my", `${dy * strength}px`);
  }

  function handleLeave() {
    // Cursor left: send everything back to the center
    moverRef.current?.style.setProperty("--mx", "0px");
    moverRef.current?.style.setProperty("--my", "0px");
  }

  return (
    // p-2 -m-2 = the field extends 8px past the button (so it reacts as u approach), with no layout change
    <div
      ref={areaRef}
      onPointerMove={handleMove}
      onPointerLeave={handleLeave}
      className={`inline-flex p-2 -m-2 ${className}`}
    >
      {/* translate follows the CSS variables. duration-200 = how smoothly it eases (change it for more or less lag). */}
      <div
        ref={moverRef}
        className="transition-[translate] duration-200 ease-out [translate:var(--mx,0px)_var(--my,0px)]"
      >
        {children}
      </div>
    </div>
  );
}

// Put a button's text and icon inside this and they shift 50% extra (8px becomes 12px): the "parallax".
// Must be used inside a <Magnetic>.
export function MagneticLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 transition-[translate] duration-200 ease-out [translate:calc(var(--mx,0px)*0.5)_calc(var(--my,0px)*0.5)]">
      {children}
    </span>
  );
}