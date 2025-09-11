import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"
import Skills from "./skills"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Web & Mobile Development",
      description: "I've got hands-on experience building responsive, user-friendly apps with React, React Native, and modern JavaScript.",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "UI/UX Implementation",
      description: "I have a strong focus on clean layouts, accessibility, and smooth interactions that feel intuitive on both web and mobile.",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Freelance & Client Work",
      description: "I deliver custom websites for brands, startups, and organizations, balancing technical needs with creative direction.",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Full-Stack Integration",
      description: "I am capable of delivering complete end-to-end solutions, connecting frontend, backend, and deployment into seamless products.",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="container mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                Web and mobile developer with hands-on experience building modern applications using React, React Native, and JavaScript and delivering responsive, user-focused products.
              </p>
            </div>

            <div className="space-y-4 text-center">
              <p className="container mx-auto max-w-[1000px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-justify">
                I enjoy turning ideas into scalable solutions, whether designing sleek interfaces, optimizing app performance, or experimenting with new technologies. Alongside development, I bring a background in IT support, which gives me a practical problem-solving mindset and the ability to bridge challenges with real user needs. I'm focused on clean design, efficiency, and continuous learning as well as building impactful digital experiences and sharpening my expertise in web and app development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg border-2 hover:border-primary/50">
                    <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                      <div className="p-2 rounded-full bg-primary/10">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                </div>
              ))} 
            </div>
          </div>
           <div className="mt-20" id="skills">
            <Skills />
          </div>
        </div>
      </section>
    </div>
  )
}
