"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Github,
  GitCommit,
  GitBranch,
  Star,
  GitFork,
  ExternalLink,
  Calendar,
  Clock,
} from "lucide-react";
import { portfolioConfig } from "@/data/portfolio-config";

interface GitHubData {
  user: {
    login: string;
    name: string;
    avatar_url: string;
    bio: string;
    public_repos: number;
    followers: number;
    following: number;
    html_url: string;
  };
  events: Array<{
    id: string;
    type: string;
    repo: string;
    created_at: string;
    payload: {
      commits?: Array<{ message: string }>;
      action?: string;
      ref?: string;
      ref_type?: string;
    };
  }>;
  repositories: Array<{
    id: number;
    name: string;
    full_name: string;
    description: string;
    html_url: string;
    language: string;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
  }>;
}

export default function GitHubActivity() {
  const [isVisible, setIsVisible] = useState(false);
  const [githubData, setGithubData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
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

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        const response = await fetch("/api/github");
        if (!response.ok) {
          throw new Error("Failed to fetch GitHub data");
        }
        const data = await response.json();
        setGithubData(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case "PushEvent":
        return <GitCommit className="w-4 h-4" />;
      case "CreateEvent":
        return <GitBranch className="w-4 h-4" />;
      case "PullRequestEvent":
        return <Github className="w-4 h-4" />;
      default:
        return <Github className="w-4 h-4" />;
    }
  };

  const getEventDescription = (event: GitHubData["events"][0]) => {
    switch (event.type) {
      case "PushEvent":
        const commitMessage =
          event.payload.commits?.[0]?.message || "Updated code";
        return `Pushed commits: ${
          commitMessage.length > 50
            ? commitMessage.substring(0, 50) + "..."
            : commitMessage
        }`;
      case "CreateEvent":
        return `Created ${event.payload.ref_type}: ${event.payload.ref}`;
      case "PullRequestEvent":
        return `${event.payload.action} pull request`;
      default:
        return "GitHub activity";
    }
  };

  const getRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

    if (diffInSeconds < 60) return "just now";
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m ago`;
    if (diffInSeconds < 86400)
      return `${Math.floor(diffInSeconds / 3600)}h ago`;
    if (diffInSeconds < 2592000)
      return `${Math.floor(diffInSeconds / 86400)}d ago`;
    return formatDate(dateString);
  };

  if (loading) {
    return (
      <section id="github" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="text-muted-foreground mt-4">
              Loading GitHub activity...
            </p>
          </div>
        </div>
      </section>
    );
  }

  if (error || !githubData) {
    return (
      <section id="github" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Github className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">
              Unable to load GitHub activity at the moment.
            </p>
            <Button asChild className="mt-4">
              <a
                href={portfolioConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                View GitHub Profile
              </a>
            </Button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="github"
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              GitHub Activity
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              A live feed of my recent contributions and projects on GitHub.
            </p>
          </div>

          {/* GitHub Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="bg-muted/30 border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData.user.public_repos}
                </div>
                <div className="text-muted-foreground">Public Repositories</div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData.user.followers}
                </div>
                <div className="text-muted-foreground">Followers</div>
              </CardContent>
            </Card>
            <Card className="bg-muted/30 border-border text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">
                  {githubData.user.following}
                </div>
                <div className="text-muted-foreground">Following</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Recent Activity */}
            <Card className="bg-muted/30 border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>Recent Activity</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {githubData.events.length > 0 ? (
                  githubData.events.map((event) => (
                    <div
                      key={event.id}
                      className="flex items-start space-x-3 p-3 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
                    >
                      <div className="text-primary mt-1">
                        {getEventIcon(event.type)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground font-medium">
                          {getEventDescription(event)}
                        </p>
                        <div className="flex items-center space-x-3 mt-1">
                          <p className="text-xs text-muted-foreground">
                            {event.repo}
                          </p>
                          <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            <span>{getRelativeTime(event.created_at)}</span>
                          </div>
                        </div>
                        {event.type === "PushEvent" &&
                          event.payload.commits && (
                            <div className="mt-2">
                              <Badge variant="secondary" className="text-xs">
                                {event.payload.commits.length} commit
                                {event.payload.commits.length !== 1 ? "s" : ""}
                              </Badge>
                            </div>
                          )}
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-muted-foreground text-center py-8">
                    No recent activity found.
                  </p>
                )}
              </CardContent>
            </Card>

            {/* Recent Repositories */}
            <Card className="bg-muted/30 border-border">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Github className="w-5 h-5" />
                  <span>Recent Repositories</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {githubData.repositories.map((repo) => (
                  <div
                    key={repo.id}
                    className="p-3 rounded-lg bg-background/50"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium text-foreground hover:text-primary transition-colors">
                        <a
                          href={repo.html_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {repo.name}
                        </a>
                      </h4>
                      <ExternalLink className="w-4 h-4 text-muted-foreground" />
                    </div>
                    {repo.description && (
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {repo.description}
                      </p>
                    )}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                        {repo.language && (
                          <Badge variant="secondary" className="text-xs">
                            {repo.language}
                          </Badge>
                        )}
                        <div className="flex items-center space-x-1">
                          <Star className="w-3 h-3" />
                          <span>{repo.stargazers_count}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <GitFork className="w-3 h-3" />
                          <span>{repo.forks_count}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        <span>{formatDate(repo.updated_at)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <Button asChild size="lg">
              <a
                href={githubData.user.html_url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4 mr-2" />
                Follow me on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
