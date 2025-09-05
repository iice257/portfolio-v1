import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kingsley Aremu",
  description:
    "Portfolio of Kingsley Aremu, a React (Native) Web and Mobile App Developer specializing in JavaScript, TypeScript, React.js and React Native, Node.js, and SwiftUI.",
}

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <About />
      <Experience />
      {/* <Projects /> */}
      <Education />
      <Contact />
    </div>
  )
}
