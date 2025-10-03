export const portfolioConfig = {
  personal: {
    name: "Bhuvaneshwar N",
    title: "Full Stack Developer",
    tagline: "Crafting digital experiences with modern web technologies",
    bio: "I'm a passionate full-stack developer with 1+ year of experience building scalable web applications. I specialize in React, Node.js, and cloud technologies, with a focus on creating user-centric solutions that solve real-world problems.",
    location: "Chennai, India",
    email: "bhuvaneshwar2006@gmail.com",
    phone: "9790031901",
    resumeUrl: "/resume.pdf",
    profileImage: "https://i.ibb.co/sShDVwJ/Bhuvan-Photo.jpg",
  },

  social: {
    github: "https://www.github.com/Bhuvan-1005",
    linkedin: "https://www.linkedin.com/in/bhuvaneshwar-n-2577232b3",
    twitter: "https://www.x.com/Bhuvaneshwarn4",
    email: "mailto:bhuvaneshwar2006@gmail.com",
  },

  skills: [
    { name: "JavaScript", level: 95, icon: "⚡" },
    { name: "TypeScript", level: 90, icon: "🔷" },
    { name: "React", level: 95, icon: "⚛️" },
    { name: "Next.js", level: 90, icon: "▲" },
    { name: "Node.js", level: 85, icon: "🟢" },
    { name: "Python", level: 80, icon: "🐍" },
    { name: "PostgreSQL", level: 85, icon: "🐘" },
    { name: "AWS", level: 75, icon: "☁️" },
    { name: "Docker", level: 80, icon: "🐳" },
    { name: "Git", level: 90, icon: "📝" },
  ],

  projects: [
    {
      id: 1,
      title: "CrisisPOP",
      description:
        "A comprehensive crisis management web application built with vanilla JavaScript, featuring responsive design and interactive user interfaces for emergency response coordination.",
      image:
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["JavaScript", "CSS", "HTML"],
      githubUrl: "https://github.com/Bhuvan-1005/CrisisPOP",
      liveUrl: "",
      featured: true,
    },
    {
      id: 2,
      title: "AI-Invest-Platform",
      description:
        "A cutting-edge AI-powered investment platform that integrates blockchain technology. Features smart contracts written in Solidity, a modern web3 frontend built with TypeScript, and intelligent investment algorithms for secure and automated financial solutions.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: ["TypeScript", "Solidity", "JavaScript", "CSS"],
      githubUrl: "https://github.com/Bhuvan-1005/AI-Invest-Platform",
      liveUrl: "",
      featured: true,
    },
  ],

  experience: [
    {
      company: "Freelance/Internship",
      position: "Full Stack Developer",
      duration: "2024 - Present",
      description:
        "Developed web applications using modern technologies including React, Node.js, and blockchain. Worked on projects involving AI integration and crisis management systems.",
    },
  ],

  // GitHub configuration
  github: {
    username: "Bhuvan-1005", // Replace with your actual GitHub username
    showActivity: true,
    showStats: true,
  },
};

export type PortfolioConfig = typeof portfolioConfig;
