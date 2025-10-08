"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Code, Clock, TrendingUp } from "lucide-react";

export default function PersonalStats() {
  const [isVisible, setIsVisible] = useState(false);
  const [stats, setStats] = useState({
    linesOfCode: 0,
    projectsCompleted: 0,
    hoursOfCoding: 0,
    technologiesUsed: 0,
  });
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate stats
          const targetStats = {
            linesOfCode: 8000,
            projectsCompleted: 3,
            hoursOfCoding: 500,
            technologiesUsed: 12,
          };

          Object.entries(targetStats).forEach(([key, value]) => {
            let current = 0;
            const increment = value / 50;
            const timer = setInterval(() => {
              current += increment;
              if (current >= value) {
                current = value;
                clearInterval(timer);
              }
              setStats((prev) => ({ ...prev, [key]: Math.floor(current) }));
            }, 30);
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

  const achievements = [
    {
      title: "Full Stack Developer",
      description: "1+ Years Experience",
      icon: <Code className="w-5 h-5" />,
    },
    {
      title: "Project Completion",
      description: "75% Success Rate",
      icon: <Star className="w-5 h-5" />,
    },
    {
      title: "Quick Learner",
      description: "New Tech Adoption",
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Problem Solver",
      description: "Complex Solutions",
      icon: <Clock className="w-5 h-5" />,
    },
  ];

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-8 sm:py-12 lg:py-16 bg-muted/30"
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
              Development Stats
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Numbers that reflect my coding journey and commitment to
              continuous improvement.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {stats.linesOfCode.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Lines of Code
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Written & Committed
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-green-500/5 to-green-500/10 border-green-500/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {stats.projectsCompleted}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Successful Projects
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Full Stack Applications
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-blue-500/5 to-blue-500/10 border-blue-500/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stats.hoursOfCoding.toLocaleString()}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Hours of Coding
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Problem Solving
                </div>
              </CardContent>
            </Card>

            <Card className="text-center bg-gradient-to-br from-purple-500/5 to-purple-500/10 border-purple-500/20">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {stats.technologiesUsed}+
                </div>
                <div className="text-sm text-muted-foreground">
                  Technologies
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Frameworks & Tools
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Key Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-muted/20 border-border hover:bg-muted/40 transition-all duration-300"
                >
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3 text-primary">
                      {achievement.icon}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
