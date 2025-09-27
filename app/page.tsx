import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navigation from "@/components/navigation"
import ScrollToTop from "@/components/scroll-to-top"
import LoadingScreen from "@/components/loading-screen"

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <main className="relative">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <ScrollToTop />
      </main>
    </>
  )
}
