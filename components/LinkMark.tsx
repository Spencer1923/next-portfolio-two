// Tiny arrow icons drawn as lines. "currentColor" makes them match the text color automatically.
// kind: "arrow" (right), "external" (up-right), "download" (down)
export default function LinkMark({ kind }: { kind: string }) {
  const paths = {
    arrow: "M2 6h8M7 3l3 3-3 3",
    external: "M3 9l6-6M4 3h5v5",
    download: "M6 2v7M3 6l3 3 3-3M2 11h8",
    up: "M6 10V2M3 5l3-3 3 3", // up arrow
  };
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.25" aria-hidden="true">
      <path d={paths[kind as keyof typeof paths]} />
    </svg>
  );
}
