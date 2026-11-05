import { ImageResponse } from "next/og"; // Next.js tool that draws an image from code
import { site } from "@/lib/site";

export const size = { width: 32, height: 32 }; // favicon size in pixels
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex", // needed so the text centers
          alignItems: "center",
          justifyContent: "center",
          background: "#2f6bff", // your accent blue (if u change the accent in globals.css, change it here too)
          color: "white",
          fontSize: 17,
          fontWeight: 700,
          letterSpacing: -1,
        }}
      >
        {site.monogram}
      </div>
    ),
    { ...size }
  );
}