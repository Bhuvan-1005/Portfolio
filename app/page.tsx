import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import PersonalStats from "@/components/personal-stats";
import GitHubStats from "@/components/github-stats";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Navigation from "@/components/navigation";
import ScrollToTop from "@/components/scroll-to-top";
import LoadingScreen from "@/components/loading-screen";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <PersonalStats />
        <Projects />
        <GitHubStats />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  );
}
