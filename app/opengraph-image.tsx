import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} | Portfolio`; // description for people who can't see the image
export const size = { width: 1200, height: 630 }; // the standard share-card size
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#0a0a0b", // your "ink" background
          color: "#ece8df", // your "bone" text color
          fontSize: 96,
          fontWeight: 600,
          letterSpacing: -2,
        }}
      >
        {site.name}
        {/* The blue dot after your name */}
        <div style={{ width: 28, height: 28, borderRadius: 999, background: "#2f6bff", marginLeft: 36 }} />
      </div>
    ),
    { ...size }
  );
}