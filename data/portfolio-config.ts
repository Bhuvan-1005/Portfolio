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
    { name: "JavaScript", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", level: 95, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Node.js", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Python", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "PostgreSQL", level: 85, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "AWS", level: 75, icon: "https://devicons.railway.app/aws.svg" },
    { name: "Docker", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Git", level: 90, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  ],

  projects: [
    {
      id: 1,
      title: "CrisisPOP",
      description:
        "A comprehensive crisis management web application built with vanilla JavaScript, featuring responsive design and interactive user interfaces for emergency response coordination.",
      image:
        "https://imgs.search.brave.com/G4_1onh9D3MjZFEai0jLirYLmgH5NaTVaLjxo1RJrTc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTQz/NjQ0ODg4L3Bob3Rv/L2VhcnRocXVha2Uu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PWFhZGFkM1U2S2Ey/dTk5YWhXQk9Ndkxl/bjJpS0daM2oxQ09Y/eHBQTjJndE09",
      technologies: ["JavaScript", "CSS", "HTML"],
      githubUrl: "https://github.com/Bhuvan-1005/CrisisPOP",
      liveUrl: "",
      featured: true,
    },
    {
      id: 2,
      title: "MediSeal",
      description:
        "An AI-powered pharmaceutical supply chain management system with blockchain integration. Features smart contracts for secure drug tracking, AI-driven analytics for supply chain optimization, and a modern web interface ensuring transparency and authenticity in pharmaceutical distribution.",
      image:
        "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      technologies: [
        "React",
        "Node.js",
        "Solidity",
        "AI/ML",
        "Blockchain",
        "TypeScript",
      ],
      githubUrl: "https://github.com/Bhuvan-1005/MediSeal",
      liveUrl: "",
      featured: true,
    },
    {
      id: 3,
      title: "Portfolio Website",
      description:
        "A modern, responsive portfolio website built with Next.js 14 and TypeScript. Features dark/light theme toggle, contact form with email integration, GitHub activity display, and optimized performance with Tailwind CSS and Radix UI components.",
      image:
        "https://imgs.search.brave.com/IeRnUuEjmJrys1TZ30D7J_vFLq5i0W7sFYZOAxIrU24/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aGVt/ZXdhZ29uLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/MS9hcHByb2FjaC5q/cGc",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Radix UI",
        "Framer Motion",
      ],
      githubUrl: "https://github.com/Bhuvan-1005/Portfolio",
      liveUrl: "",
      featured: true,
    },
    {
      id: 4,
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
