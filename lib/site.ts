const email = "spencersamra@gmail.com"; // placeholder: your real email, used by the hero, contact, and copy button

// ALL site content lives here. Change text here, not inside components.
export const site = {
  monogram: "SS", // placeholder: your initials, shown at the top of the rail
  name: "Spencer Samra", // placeholder: your full name, shown big in the hero
  description: "Web developer building responsive, user-focused websites.", // placeholder: shown in Google and share cards
  url: "https://your-domain.com", // placeholder: change to your real site address after you deploy
  copyrightYear: 2026, // used in the footer © line
  email,

  hero: {
    role: "Web developer · Next.js", // small mono label under your name
    statement: "I build fast, precise websites that feel made by hand.", // placeholder headline
    status: "Open to work", // describes the pulsing dot (shown on hover and read by screen readers)
  },

  // Your contact links. Edit here and the hero buttons and Contact rows update.
  // mark = tiny icon: "arrow", "external" (opens a new tab), or "download"
  // value = the text shown in the Contact section
  links: [
    { label: "Email", href: `mailto:${email}`, mark: "arrow", value: email },
    { label: "GitHub", href: "https://github.com/Spencer1923", mark: "external", external: true, value: "Spencer1923" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-handle", mark: "external", external: true, value: "your-handle" }, // placeholder
    { label: "Résumé", href: "/resume.pdf", mark: "download", download: true, value: "Download PDF" },
  ],

  about: {
    // Bio paragraphs: add, remove, or edit freely (placeholders)
    paragraphs: [
      "I'm a web developer who cares about fast, clean, carefully built websites. Placeholder: replace this with your own story.",
      "I build with Next.js, TypeScript, and Tailwind, taking ideas from sketch to finished interface. Placeholder: say how you work.",
      "Outside of code, placeholder: add one personal line so people remember you.",
    ],

    // Fact sheet rows: label on the left, value on the right (placeholders)
    facts: [
      { label: "Frontend", value: "Next.js, React, TypeScript, Tailwind CSS" },
      { label: "Motion", value: "Framer Motion" },
      { label: "Tooling", value: "Git, GitHub, VS Code, ESLint" },
      { label: "Focus", value: "Performance, responsive layouts, accessibility" },
    ],
  },

  // Jobs, newest first. end: null means "current job" (shows PRESENT and the pulsing dot).
  experience: [
    {
      role: "Frontend Developer", // placeholder
      company: "Company Name", // placeholder
      start: "2025",
      end: null,
      bullets: ["Placeholder: one short line about something you built or improved.", "Placeholder: another line, ideally with a result or number."],
    },
    {
      role: "Freelance Web Developer", // placeholder
      company: "Self-employed", // placeholder
      start: "2023",
      end: "2025",
      bullets: ["Placeholder: built websites for small businesses with Next.js.", "Placeholder: handled design, development, and launch end to end."],
    },
  ],

  // Projects, in display order. Edit text here and the rows update.
  // live: "" or github: "" hides that link. image: "" shows a placeholder frame.
  projects: [
    {
      name: "SSports",
      description: "NFL fan site powered by the ESPN API. Placeholder: say what a visitor can do on it.",
      tags: ["Next.js", "Tailwind v4", "ESPN API"],
      live: "https://s-sports.netlify.app/", // add the deployed URL here
      github: "https://github.com/Spencer1923/SSports",
      image: "", // later: "/projects/ssports.png" (file goes in public/projects/)
    },
    {
      name: "Matrix Market",
      description: "E-commerce site for TVs, speakers, and video games. Placeholder: add more detail.",
      tags: ["Next.js", "Tailwind"],
      live: "",
      github: "https://github.com/Spencer1923/matrix-market", // placeholder: check the real repo name
      image: "",
    },
    {
      name: "Autobahn Garage",
      description: "Car dealership site with inventory filters, detail pages, and a financing calculator.",
      tags: ["Next.js", "Tailwind"],
      live: "",
      github: "https://github.com/Spencer1923/autobahn-garage", // placeholder: check the real repo name
      image: "",
    },
    {
      name: "Next Rep",
      description: "Online personal training and coaching platform. Currently in progress.",
      tags: ["Next.js", "Tailwind"],
      live: "",
      github: "https://github.com/Spencer1923/next-rep", // placeholder: check the real repo name
      image: "",
    },
  ],

  // The rail reads this list. Edit the order or names here and the rail updates.
  sections: [
    { id: "about", number: "01", label: "About" },
    { id: "experience", number: "02", label: "Experience" },
    { id: "projects", number: "03", label: "Projects" },
    { id: "contact", number: "04", label: "Contact" },
  ],
};
