"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { portfolioConfig } from "@/data/portfolio-config";

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skill bars with staggered delay
          portfolioConfig.skills.forEach((_, index) => {
            setTimeout(() => {
              setAnimatedSkills((prev) => [...prev, index]);
            }, index * 100);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = {
    Frontend: portfolioConfig.skills.filter((skill) =>
      ["JavaScript", "TypeScript", "React", "Next.js"].includes(skill.name)
    ),
    Backend: portfolioConfig.skills.filter((skill) =>
      ["Node.js", "Python", "PostgreSQL"].includes(skill.name)
    ),
    "Tools & DevOps": portfolioConfig.skills.filter((skill) =>
      ["AWS", "Docker", "Git"].includes(skill.name)
    ),
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A comprehensive overview of the technologies and tools I work with
              to bring ideas to life.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Object.entries(skillCategories).map(
              ([category, skills], categoryIndex) => (
                <Card
                  key={category}
                  className="bg-gradient-to-br from-muted/30 to-muted/10 border-border hover:shadow-lg transition-all duration-300 group"
                >
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3 group-hover:animate-pulse"></div>
                      {category}
                    </h3>
                    <div className="space-y-4">
                      {skills.map((skill, index) => {
                        const globalIndex = portfolioConfig.skills.findIndex(
                          (s) => s.name === skill.name
                        );
                        const isAnimated = animatedSkills.includes(globalIndex);

                        return (
                          <div
                            key={skill.name}
                            className="space-y-2 group/skill"
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-2">
                                {skill.icon.startsWith("http") ? (
                                  <div className="relative">
                                    <Image
                                      src={skill.icon}
                                      alt={skill.name}
                                      width={20}
                                      height={20}
                                      className="w-5 h-5 group-hover/skill:scale-110 transition-transform duration-200"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-200"></div>
                                  </div>
                                ) : (
                                  <span className="text-lg group-hover/skill:scale-110 transition-transform duration-200">
                                    {skill.icon}
                                  </span>
                                )}
                                <span className="font-medium text-foreground group-hover/skill:text-primary transition-colors duration-200">
                                  {skill.name}
                                </span>
                              </div>
                              <span className="text-sm text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
                                {skill.level}%
                              </span>
                            </div>
                            <div className="relative">
                              <Progress
                                value={isAnimated ? skill.level : 0}
                                className="h-2 bg-muted"
                              />
                              <div
                                className="absolute top-0 left-0 h-2 bg-gradient-to-r from-primary to-primary/60 rounded-full transition-all duration-1000 ease-out"
                                style={{
                                  width: isAnimated ? `${skill.level}%` : "0%",
                                  animationDelay: `${
                                    (categoryIndex * skills.length + index) *
                                    100
                                  }ms`,
                                }}
                              ></div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </CardContent>
                </Card>
              )
            )}
          </div>

          {/* Tech Stack Icons */}
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Technologies I Love Working With
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {portfolioConfig.skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className={`flex flex-col items-center space-y-2 p-4 rounded-lg bg-muted/20 border border-border hover:bg-muted/40 transition-all duration-300 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {skill.icon.startsWith("http") ? (
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={32}
                      height={32}
                      className="w-8 h-8"
                    />
                  ) : (
                    <span className="text-3xl">{skill.icon}</span>
                  )}
                  <span className="text-sm font-medium text-muted-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
