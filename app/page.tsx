import Hero from "@/components/hero"
import About from "@/components/about"
import Experience from "@/components/experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Contact from "@/components/contact"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Kingsley Aremu",
  description:
    "Portfolio of Kingsley Aremu, a React (Native) Web and Mobile App Developer specializing in JavaScript, TypeScript, React.js and React Native, Node.js, and SwiftUI.",
  
  openGraph: {
    title: "Kingsley Aremu's Portfolio",
    description: "Explore my projects, skills, and experience as a software developer.",
    url: "https://kingsleyaremu-v1.vercel.app",
    siteName: "Kingsley Aremu",
    images: [
      {
        url: "/favicon.png",
        width: 500,
        height: 500,
        alt: "A preview of Kingsley Aremu's portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="w-full">
        <Hero />
        <About />
        <Education />
        <Experience />
        <Contact />
    </div>
  )
}
