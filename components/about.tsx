import { Card, CardContent } from "@/components/ui/card"
import { Code2, Globe, Server, Users } from "lucide-react"
import { FaReact } from "react-icons/fa"

export default function About() {
  const features = [
    {
      icon: <Code2 className="h-10 w-10 text-primary" />,
      title: "Full Stack Development",
      description: "Expertise in JavaScript, TypeScript, React.js, Node.js, and modern frontend tools",
    },
    {
      icon: <Server className="h-10 w-10 text-primary" />,
      title: "Mobile Development",
      description: "Building responsive applications with React Native and cross-platform solutions",
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: "Problem Solving",
      description: "IT support background providing practical problem-solving mindset for real user needs",
    },
    {
      icon: <Globe className="h-10 w-10 text-primary" />,
      title: "Modern Technologies",
      description: "Continuously learning and experimenting with cutting-edge web and mobile technologies",
    },
  ]

  return (
    <div className="w-full bg-muted/30">
      <section id="about" className="py-20 w-full">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed flex items-center justify-center gap-2">
                <FaReact className="h-6 w-6 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                React Developer
              </p>
            </div>

            <div className="mx-auto max-w-3xl text-center space-y-6">
              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Web and mobile developer with hands-on experience building modern applications using React, React
                Native, and JavaScript. Skilled in creating responsive, user-focused digital products and continuously
                growing toward full-stack expertise with Node.js and modern frontend tools.
              </p>

              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                I enjoy turning ideas into scalable solutions, whether designing sleek interfaces, optimizing app
                performance, or experimenting with new technologies. Alongside development, I bring a background in IT
                support, which gives me a practical problem-solving mindset and the ability to bridge technical
                challenges with real user needs.
              </p>

              <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed">
                Passionate about clean design, efficiency, and continuous learning, I'm focused on building impactful
                digital experiences and sharpening my expertise in web and app development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {features.map((feature, index) => (
                <div key={index} className="animate-in">
                  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-primary/50">
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
        </div>
      </section>
    </div>
  )
}
