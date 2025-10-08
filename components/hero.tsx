"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio-config";
import TypingEffect from "@/components/typing-effect";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: Twitter,
    email: Mail,
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div
            className={`space-y-8 ${
              mounted ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            <div className="space-y-4">
              <p className="text-primary font-mono text-sm tracking-wider uppercase">
                Hello, I'm
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {portfolioConfig.personal.name}
              </h1>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground">
                <TypingEffect
                  texts={[
                    "Full Stack Developer",
                    "React Specialist",
                    "Node.js Expert",
                    "Blockchain Developer",
                    "Problem Solver",
                  ]}
                  speed={120}
                  deleteSpeed={80}
                  pauseDuration={3000}
                />
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                <span className="text-primary font-semibold">
                  Passionate about creating
                </span>{" "}
                exceptional digital experiences with modern web technologies.
                <span className="text-primary font-semibold">
                  {" "}
                  Specializing in
                </span>{" "}
                scalable applications and innovative solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#projects")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base px-8 py-3 bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base px-8 py-3 border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 shadow-md hover:shadow-lg"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              {Object.entries(portfolioConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                const socialColors = {
                  github: "hover:bg-[#333] hover:text-white",
                  linkedin: "hover:bg-[#0077b5] hover:text-white",
                  twitter: "hover:bg-[#1DA1F2] hover:text-white",
                  email: "hover:bg-primary hover:text-primary-foreground",
                };
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group relative p-3 rounded-xl bg-muted/50 border border-border text-muted-foreground transition-all duration-300 ${
                      socialColors[platform as keyof typeof socialColors]
                    } hover:shadow-lg hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                    <span className="sr-only">{platform}</span>
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {platform.charAt(0).toUpperCase() + platform.slice(1)}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div
            className={`flex justify-center lg:justify-end order-first lg:order-last ${
              mounted ? "animate-fade-in" : "opacity-0"
            }`}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl transform rotate-6"></div>
                <div className="relative w-full h-full bg-muted rounded-2xl overflow-hidden border border-border">
                  <Image
                    src={portfolioConfig.personal.profileImage}
                    alt={portfolioConfig.personal.name}
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 256px, (max-width: 1024px) 320px, 384px"
                  />
                </div>
              </div>

              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-20 sm:h-20 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                <span className="text-lg sm:text-2xl">⚡</span>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-10 h-10 sm:w-16 sm:h-16 bg-primary/10 rounded-full flex items-center justify-center border border-primary/20">
                <span className="text-sm sm:text-xl">🚀</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button
          onClick={scrollToAbout}
          className="text-muted-foreground hover:text-foreground transition-colors animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
}
