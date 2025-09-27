import { NextResponse } from "next/server"

const GITHUB_USERNAME = "alexjohnson" // Replace with actual username
const GITHUB_API_URL = "https://api.github.com"

export async function GET() {
  try {
    // Fetch user data
    const userResponse = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-Website",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!userResponse.ok) {
      throw new Error("Failed to fetch user data")
    }

    const userData = await userResponse.json()

    // Fetch recent events
    const eventsResponse = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/events/public?per_page=10`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-Website",
      },
      next: { revalidate: 1800 }, // Cache for 30 minutes
    })

    if (!eventsResponse.ok) {
      throw new Error("Failed to fetch events data")
    }

    const eventsData = await eventsResponse.json()

    // Fetch repositories
    const reposResponse = await fetch(`${GITHUB_API_URL}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        "User-Agent": "Portfolio-Website",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    })

    if (!reposResponse.ok) {
      throw new Error("Failed to fetch repositories data")
    }

    const reposData = await reposResponse.json()

    // Process and filter events
    const processedEvents = eventsData
      .filter((event: any) => ["PushEvent", "CreateEvent", "PullRequestEvent"].includes(event.type))
      .slice(0, 5)
      .map((event: any) => ({
        id: event.id,
        type: event.type,
        repo: event.repo.name,
        created_at: event.created_at,
        payload: {
          commits: event.payload.commits?.slice(0, 1) || [],
          action: event.payload.action,
          ref: event.payload.ref,
          ref_type: event.payload.ref_type,
        },
      }))

    return NextResponse.json({
      user: {
        login: userData.login,
        name: userData.name,
        avatar_url: userData.avatar_url,
        bio: userData.bio,
        public_repos: userData.public_repos,
        followers: userData.followers,
        following: userData.following,
        html_url: userData.html_url,
      },
      events: processedEvents,
      repositories: reposData.slice(0, 6).map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        full_name: repo.full_name,
        description: repo.description,
        html_url: repo.html_url,
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        updated_at: repo.updated_at,
      })),
    })
  } catch (error) {
    console.error("GitHub API Error:", error)
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 })
  }
}
