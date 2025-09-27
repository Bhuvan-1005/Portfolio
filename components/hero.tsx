"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio-config";

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
                {portfolioConfig.personal.title}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                {portfolioConfig.personal.tagline}
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
                className="text-base px-8 py-3"
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
                className="text-base px-8 py-3"
              >
                Get In Touch
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex space-x-6 pt-4">
              {Object.entries(portfolioConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-lg"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{platform}</span>
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
