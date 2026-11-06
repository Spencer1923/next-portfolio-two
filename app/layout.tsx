import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

// next/font downloads the fonts at build time and serves them from your own site (fast, no layout jump)
import { Space_Grotesk, IBM_Plex_Mono } from "next/font/google";
import Rail from "@/components/Rail";
import ScrollProgress from "@/components/ScrollProgress";

// Main font for headings and body text
const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk", // creates a CSS variable we can use in Tailwind
  subsets: ["latin"], // only download Latin letters (smaller file)
});

// Mono font for labels like "01 / About"
const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"], // this font isn't variable, so list the weights you'll use
});

// The text used for the tab title and for share cards
const title = `${site.name} | Portfolio`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url), // base address for the share image link
  title, // browser tab title
  description: site.description, // shown in Google results
  openGraph: { title, description: site.description, type: "website" }, // share card (LinkedIn, iMessage, etc.)
  twitter: { card: "summary_large_image" }, // tells X to show the big image card
};

// Runs before the page appears: if the visitor picked light last time, switch to it immediately (prevents a dark flash)
const themeScript = `try{if(localStorage.getItem("theme")==="light")document.documentElement.dataset.theme="light"}catch(e){}`;
export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <meta name="google-site-verification" content="MxqQo_I354HviOaO2gJHTOzCGOPBMYgXHhYT23KmmrU" />
      </head>
      <body // Adds both font variables to the page. "antialiased" makes text look smoother.
        className={`${spaceGrotesk.variable} ${plexMono.variable} antialiased`}>
        {/* The rail is fixed, so main gets left padding equal to the rail width to avoid sitting under it */}
        <ScrollProgress />
        <Rail />
        <main className="pl-[var(--rail-w)]">
          {children}
          {/* Footer lives in the layout so every page gets it. It sits inside main so it clears the rail. */}
          <Footer />
        </main>
      </body>
    </html>
  );
}
