"use client";

import { portfolioConfig } from "@/data/portfolio-config";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { XIcon } from "@/components/ui/x-icon";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    github: Github,
    linkedin: Linkedin,
    twitter: XIcon,
    email: Mail,
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">
              {portfolioConfig.personal.name}
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {portfolioConfig.personal.title} passionate about creating
              exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <div className="space-y-2">
              {[
                { name: "About", href: "#about" },
                { name: "Projects", href: "#projects" },
                { name: "GitHub", href: "#github" },
                { name: "Contact", href: "#contact" },
              ].map((link) => (
                <button
                  key={link.name}
                  onClick={() =>
                    document
                      .querySelector(link.href)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="block text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="space-y-2">
              <p className="text-muted-foreground">
                {portfolioConfig.personal.email}
              </p>
              <p className="text-muted-foreground">
                {portfolioConfig.personal.location}
              </p>
            </div>
            <div className="flex space-x-4">
              {Object.entries(portfolioConfig.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="sr-only">{platform}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} {portfolioConfig.personal.name}. All rights
            reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 sm:mt-0">
            Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> using
            Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
