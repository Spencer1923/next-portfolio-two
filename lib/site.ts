const email = "spencersamra@gmail.com"; // placeholder: your real email, used by the hero, contact, and copy button

// ALL site content lives here. Change text here, not inside components.
export const site = {
  monogram: "SS", // placeholder: your initials, shown at the top of the rail
  name: "Spencer Samra", // placeholder: your full name, shown big in the hero
  description: "Full-stack web developer building fast, SEO-ready websites and e-commerce stores.", // placeholder: shown in Google and share cards
  url: "https://your-domain.com", // placeholder: change to your real site address after you deploy
  copyrightYear: 2026, // used in the footer © line
  email,

  hero: {
    role: "Web developer · SEO", // small mono label under your name
    statement: "Full-stack web developer with a marketing-aware approach to SEO and e-commerce.", // placeholder headline
    status: "Open to new opportunities", // describes the pulsing dot (shown on hover and read by screen readers)
  },

  // Your contact links. Edit here and the hero buttons and Contact rows update.
  // mark = tiny icon: "arrow", "external" (opens a new tab), or "download"
  // value = the text shown in the Contact section
  links: [
    { label: "Email", href: `mailto:${email}`, mark: "arrow", value: email },
    { label: "GitHub", href: "https://github.com/Spencer1923", mark: "external", external: true, value: "Spencer1923" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/spencer-samra", mark: "external", external: true, value: "Spencer Samra" }, // placeholder
  ],

  about: {
    // Bio paragraphs: add, remove, or edit freely (placeholders)
    paragraphs: [
      "I'm a full-stack web developer looking for a role where I can contribute from day one while gaining real-world experience and continuing to grow my skills.",
      "I build with React, Next.js, TypeScript, and Tailwind CSS, on a foundation of JavaScript, HTML, CSS, and Java. My focus is on e-commerce and SEO-friendly websites that are fast, responsive, and built to be maintained.",
      "I continue to learn new tools and approaches, and put them to work in real projects, from an NFL site and an online store to a car dealership platform and a more.",
    ],

    // Fact sheet rows: label on the left, value on the right (placeholders)
    facts: [
      { label: "Languages", value: "JavaScript, TypeScript, Java, HTML, CSS" },
      { label: "Frontend", value: "React, Next.js, Tailwind CSS, Framer Motion" },
      { label: "Backend", value: "Node.js, REST APIs" },
      { label: "Tooling", value: "Git, GitHub, VS Code, ESLint" },
      { label: "Focus", value: "E-commerce, SEO, responsive design, performance" },
    ],
  },

  // Jobs, newest first. end: null means "current job" (shows PRESENT and the pulsing dot).
  experience: [
    {
      role: "Frontend Developer", // placeholder
      company: "Code Haven Web Solutions", // placeholder
      start: "2024",
      end: null,
      bullets: [
        "Designed and developed custom, responsive websites for small businesses, prioritizing performance, SEO, and mobile usability using clean HTML, CSS, and JavaScript.",
        "Managed full project lifecycle, from client communication and iterative revisions to post-launch support, ensuring tailored solutions and seamless user experiences.",
      ],
    },
    {
      role: "Freelance Web Developer", // placeholder
      company: "Self-employed", // placeholder
      start: "2023",
      end: "2024",
      bullets: ["Building, designing & improving websites/applications."],
    },
    {
      type: "education", // work, education, or certification (decides the small tag on the entry)
      role: "York University", // for school entries, the school name goes in "role"
      company: "", // left empty: nothing shows after the dot
      start: "Sept 2021",
      end: "May 2026", // null = Present
      bullets: ["Completed two years of Computer Science then switched to and graduated in Digital Media."],
    },
    {
      type: "certification",
      role: "Responsive Web Design (V8)",
      company: "freeCodeCamp", // the issuer
      start: "", // empty = no dates shown (certifications only show their tag)
      end: "",
      bullets: ["Completed coursework covering HTML, CSS, Flexbox, CSS Grid, and accessibility."],
    },
    {
      type: "certification",
      role: "JavaScript Algorithms and Data Structures (V8)",
      company: "freeCodeCamp",
      start: "",
      end: "",
      bullets: ["Completed coursework covering ES6, algorithm design, and data structures."],
    },
  ],

  // Projects, in display order. Edit text here and the rows update.
  // live: "" or github: "" hides that link. image: "" shows a placeholder frame.
  projects: [
    {
      name: "SSports",
      description: "  Full-stack NFL site with live scores, standings, stats, injuries, depth charts, and custom blog, built with Next.js and ESPN API.",
      tags: ["Next.js", "Tailwind v4", "ESPN API", "React"],
      live: "https://s-sports.netlify.app/", // add the deployed URL here
      github: "https://github.com/Spencer1923/SSports",
      image: "/projects/ss-sports.jpg", // later: "/projects/ssports.png" (file goes in public/projects/)
    },
    {
      name: "Matrix Market",
      description: "E-commerce tech site using Next.js, Tailwind, Supabase, Stripe with secure checkout and admin dashboard.",
      tags: ["Next.js", "Tailwind", "Supabase", "Stripe", "Typescript"],
      live: "https://the-matrix-market.netlify.app/",
      github: "https://github.com/Spencer1923/matrix-market", // placeholder: check the real repo name
      image: "/projects/matrix-market.jpg",
    },
    {
      name: "Autobahn Garage",
      description: "Dealership website with search and filter, vehicle details page for any car and estimates monthly payments with a financing calculator.",
      tags: ["Next.js", "Tailwind", "Tailwind CSS", "Typescript"],
      live: "https://autobahn-garage.netlify.app/",
      github: "https://github.com/Spencer1923/autobahn-garage", // placeholder: check the real repo name
      image: "/projects/autobahn-garage.jpg",
    },

    {
      name: "Weather Web App",
      description: "Immersive Weather Web App using JavaScript Open Weather API and Max 9.",
      tags: ["JavaScript", "Open Weather API", "Max 9"],
      live: "https://datt3074weatherwebapp.netlify.app",
      github: "https://github.com/Spencer1923/Weather-Web-App", // placeholder: check the real repo name
      image: "/projects/weather-app.jpg",
    },

    {
      name: "Web Page for Client",
      description: "Mobile first business page for client prioritizing SEO and CTAs.",
      tags: ["HTML", "CSS", "JavaScript", "SEO"],
      live: "https://dreamzdirectsolutions.com",
      github: "https://github.com/Spencer1923", // placeholder: check the real repo name
      image: "/projects/dreamz-direct.jpg",
    },

    {
      name: "Guess It!",
      description: "Multiplayer Guessing Game built with Java and Android Studio with different difficulty modes and live leaderboards.",
      tags: ["Java", "Android Studio"],
      live: "https://drive.google.com/drive/folders/10BygrOvwYWA8K3GatF69hsKFHPEEpjjK?usp=share_link",
      github: "https://github.com/Spencer1923/Guess-It", // placeholder: check the real repo name
      image: "/projects/guess-it.jpg",
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
