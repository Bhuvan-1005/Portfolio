"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, Star, GitFork, Code2, TrendingUp } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio-config";

export default function GitHubStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});
  const sectionRef = useRef<HTMLElement>(null);

  const handleImageError = (imageType: string) => {
    setImageErrors(prev => ({ ...prev, [imageType]: true }));
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const githubUsername = portfolioConfig.github.username;

  return (
    <section
      id="github"
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
            <div className="flex items-center justify-center gap-3 mb-4">
              <Github className="w-10 h-10 text-primary" />
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground">
                GitHub Statistics
              </h2>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              My open-source contributions, coding activity, and project
              development insights.
            </p>
          </div>

          {/* GitHub Stats Cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* GitHub Stats */}
            <Card className="overflow-hidden border-border bg-gradient-to-br from-muted/30 to-background">
              <CardContent className="p-6">
                {imageErrors.stats ? (
                  <div className="text-center py-8">
                    <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">GitHub Stats</h3>
                    <p className="text-muted-foreground mb-4">Visit my GitHub profile for latest stats</p>
                    <Button variant="outline" asChild>
                      <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                        View Profile
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=ffffff&text_color=9ca3af&icon_color=22c55e&bg_color=00000000&include_all_commits=true&count_private=true`}
                      alt="GitHub Stats"
                      className="w-full h-auto"
                      onError={() => handleImageError('stats')}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* GitHub Streak */}
            <Card className="overflow-hidden border-border bg-gradient-to-br from-muted/30 to-background">
              <CardContent className="p-6">
                {imageErrors.streak ? (
                  <div className="text-center py-8">
                    <TrendingUp className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Contribution Streak</h3>
                    <p className="text-muted-foreground mb-4">Consistent daily contributions to open source</p>
                    <Button variant="outline" asChild>
                      <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                        View Activity
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=transparent&hide_border=true&stroke=22c55e&ring=22c55e&fire=22c55e&currStreakLabel=ffffff&sideLabels=ffffff&currStreakNum=ffffff&dates=9ca3af&sideNums=9ca3af&background=00000000`}
                      alt="GitHub Streak"
                      className="w-full h-auto"
                      onError={() => handleImageError('streak')}
                    />
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Language Stats and Trophy */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Most Used Languages */}
            <Card className="overflow-hidden border-border bg-gradient-to-br from-muted/30 to-background">
              <CardContent className="p-6">
                {imageErrors.languages ? (
                  <div className="text-center py-8">
                    <Code2 className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-foreground mb-2">Programming Languages</h3>
                    <p className="text-muted-foreground mb-4">JavaScript, TypeScript, Python, React, Node.js</p>
                    <Button variant="outline" asChild>
                      <a href={`https://github.com/${githubUsername}?tab=repositories`} target="_blank" rel="noopener noreferrer">
                        View Repositories
                      </a>
                    </Button>
                  </div>
                ) : (
                  <div className="relative w-full">
                    <img
                      src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=ffffff&text_color=9ca3af&bg_color=00000000&langs_count=8`}
                      alt="Most Used Languages"
                      className="w-full h-auto"
                      onError={() => handleImageError('languages')}
                    />
                  </div>
                )}
              </CardContent>
            </Card>

            {/* GitHub Contributions Calendar */}
            <Card className="overflow-hidden border-border bg-gradient-to-br from-muted/30 to-background">
              <CardContent className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-primary" />
                    Contribution Calendar
                  </h3>
                </div>
                <div className="relative w-full bg-muted/20 rounded-lg p-4">
                  {imageErrors.calendar ? (
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">Contribution calendar temporarily unavailable</p>
                      <Button variant="outline" className="mt-4" asChild>
                        <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <img
                      src={`https://ghchart.rshah.org/22c55e/${githubUsername}`}
                      alt="GitHub Contribution Calendar"
                      className="w-full h-auto"
                      onError={() => handleImageError('calendar')}
                    />
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contribution Graph */}
          <Card className="overflow-hidden border-border bg-gradient-to-br from-muted/30 to-background mb-8">
            <CardContent className="p-6">
              <div className="mb-4">
                <h3 className="text-xl font-semibold text-foreground flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Contribution Activity
                </h3>
              </div>
              <div className="relative w-full">
                {imageErrors.graph ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">Activity graph temporarily unavailable</p>
                    <Button variant="outline" className="mt-4" asChild>
                      <a href={`https://github.com/${githubUsername}`} target="_blank" rel="noopener noreferrer">
                        View Activity on GitHub
                      </a>
                    </Button>
                  </div>
                ) : (
                  <img
                    src={`https://github-readme-activity-graph.vercel.app/graph?username=${githubUsername}&theme=react-dark&hide_border=true&bg_color=00000000&color=7bc96f&line=7bc96f&point=ffffff&area=true&area_color=7bc96f`}
                    alt="Contribution Graph"
                    className="w-full h-auto rounded-lg"
                    onError={() => handleImageError('graph')}
                  />
                )}
              </div>
            </CardContent>
          </Card>

          {/* Featured Repositories */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {portfolioConfig.projects.slice(0, 3).map((project, index) => (
              <Card
                key={project.id}
                className={`border-border hover:border-primary/50 transition-all duration-300 bg-gradient-to-br from-muted/20 to-background group ${
                  isVisible ? "animate-fade-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <Code2 className="w-8 h-8 text-primary" />
                    <Badge variant="outline" className="text-xs">
                      {project.technologies[0]}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      <span>0</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      <span>0</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              onClick={() =>
                window.open(portfolioConfig.social.github, "_blank")
              }
            >
              <Github className="w-5 h-5 mr-2" />
              View Full GitHub Profile
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
