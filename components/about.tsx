"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, MapPin, Award } from "lucide-react";
import { portfolioConfig } from "@/data/portfolio-config";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      id="about"
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
              About Me
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Get to know more about my background and what drives my passion
              for development.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {/* Quick Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">Location</p>
                      <p className="font-medium text-foreground">
                        {portfolioConfig.personal.location}
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4 flex items-center space-x-3">
                    <Award className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-muted-foreground">
                        Experience
                      </p>
                      <p className="font-medium text-foreground">1+ Year</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-background/50 border-border">
                  <CardContent className="p-4 flex items-center justify-center">
                    <Button
                      onClick={() =>
                        window.open(
                          portfolioConfig.personal.resumeUrl,
                          "_blank"
                        )
                      }
                      size="lg"
                      className="w-full"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Resume
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Bio */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-foreground mb-6">
                  My Story
                </h3>
                <div className="space-y-6 text-muted-foreground leading-relaxed text-lg max-w-3xl mx-auto">
                  <p>{portfolioConfig.personal.bio}</p>
                  <p>
                    When I'm not coding, you can find me exploring new
                    technologies, contributing to open-source projects, or
                    sharing knowledge with the developer community. I believe in
                    continuous learning and staying up-to-date with the latest
                    industry trends and best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
