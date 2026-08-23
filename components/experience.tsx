import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Skills from "./skills-content"

export default function Experience() {
  const experiences = [
    {
    title: "Information Technology Attendant",
    company: "Nestlé Nigeria",
    period: "2025",
    type: "Full-time",
    achievements: [
      "Supported IT systems during industrial training program",
      "Documented technical processes and gained hands-on industry exposure",
      "Learned professional workflow practices in a multinational corporate environment",
    ],
  },
  {
    title: "Software Engineer (Pre-Launch Startup)",
    company: "Confidential Startup",
    period: "2025 - Present",
    type: "Remote",
    achievements: [
      "Contributing to the early-stage architecture and core product features",
      "Collaborating with product and design teams to shape scalable systems before launch",
      "Applying full-stack skills to balance frontend experience with backend performance",
    ],
  },
      {
    title: "Founder & Full-Stack Developer",
    company: "PowerGrid (Self-built Product)",
    period: "2023 - Present",
    type: "Remote",
    achievements: [
      "Spearheading design and development of PowerGrid, a utility-tracking platform inspired by modern apps like Uber and Bolt",
      "Built frontend with Vue.js and Vuetify, and backend with FastAPI for scalable performance",
      "Integrated Leaflet for interactive map-based UI, with sleek dark mode interface",
      "Designed complete user flow covering onboarding, stats, rewards system, and notifications",
      "Balancing product development with branding, UI/UX, and roadmap planning as a solo developer",
    ],
  },
  {
    title: "Freelance Web Developer",
    company: "Self-Employed",
    period: "2022 - Present",
    type: "Remote",
    achievements: [
      "Delivered 20+ websites across industries including crypto, NGOs, real estate, and religious organizations",
      "Built scalable web apps using Wix Studio, custom HTML/CSS/JS, and backend functionality with Wix Velo",
      "Developed NFT platforms with advanced features such as referral systems, rewards, and live databases",
      <>
        Led redesign and long-term maintenance for{" "}
        <a
          href="https://gamblepause.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-2 hover:text-primary transition-colors"
        >
          GamblePause.com
        </a>
        , an NGO site with functionalities comparable to GambleAware
      </>,
      "Implemented user-focused designs with performance optimizations, responsive layouts, and clean UI",
    ],
  },

  ]

  return (
    <section id="experience" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Experience</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My professional journey and key accomplishments
            </p>
          </div>

          <div className="space-y-8 mt-12">
            {experiences.map((experience, index) => (
              <div key={index} className="timeline-item">
                <Card className="border-l-4 border-l-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-sky-500/10">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{experience.title}</h3>
                        <p className="text-muted-foreground">{experience.company}</p>
                      </div>
                      <div className="mt-2 md:mt-0 flex flex-col md:items-end">
                        <Badge variant="outline" className="mb-1 md:mb-0">
                          {experience.period}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{experience.type}</span>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {experience.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0"></span>
                          <span className="text-sm text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
