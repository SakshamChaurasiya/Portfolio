export const portfolioData = {
  hero: {
    name: "Saksham Chaurasiya",
    title: "Full Stack Developer",
    tagline: "I build modern, scalable, and exceptional digital experiences.",
    resumeLink: "/SakshamResume.pdf",
  },
  about: {
    introduction: "Hello! I'm a passionate Full Stack Developer with experience in building scalable web applications. I love solving complex problems and taking ideas from concept to reality. When I'm not coding, I'm usually exploring new technologies or contributing to open-source projects.",
    skills: [
      "JavaScript ",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Java",
      "Postgresql",
      "Tailwind CSS",
      "GenAI",
      "Git & GitHub",
      "Vercel",
      "Render"
    ],
  },
  projects: [
    {
      id: 1,
      title: "Hostel Gate Pass Management System (SaaS)",
      description: "A multi-tenant hostel access control SaaS with 6-role RBAC, approval workflows, QR-based verification, and automated pass lifecycle management.",
      techStack: ["MongoDB", "Express.js", "React", "Node.js", "Cron Jobs"],
      liveLink: "gate-pass-system-phi.vercel.app",
      githubLink: "https://github.com/SakshamChaurasiya/GatePassSystem",
    },
    {
      id: 2,
      title: "Live-Ease",
      description: "An Airbnb-style booking platform with authentication, property listings, reservations, and location-based search.",
      techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "Mapbox", "Cloudinary"],
      liveLink: "https://liveease-org.onrender.com/listings",
      githubLink: "https://github.com/SakshamChaurasiya/LiveEase",
    },
    {
      id: 3,
      title: "Viltrum Voice",
      description: "A real-time chat application with instant messaging, multiple UI themes, and image sharing capabilities.",
      techStack: ["React", "Express.js", "Socket.io", "MongoDB"],
      liveLink: "https://viltrumvoice.onrender.com/",
      githubLink: "https://github.com/example/task-saas",
    },
    {
      id: 4,
      title: "AI Resume Analyzer",
      description: "An AI-powered resume screening tool that automates parsing, scoring, and job-fit analysis using workflow automation.",
      techStack: ["n8n", "OpenAI API", "Google Drive API", "Google Sheets"],

    }
  ],
  contact: {
    email: "chaurasiyasaksham23@gmail.com",
    linkedin: "https://www.linkedin.com/in/saksham-chaurasiya-14f/",
    github: "https://github.com/SakshamChaurasiya",
    twitter: "https://x.com/mrCapable14f",
  }
};
