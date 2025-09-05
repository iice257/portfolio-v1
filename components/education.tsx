import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export default function Education() {

  const certificates = [
    {
      title: "Cloud Native Development with Node.js, Docker, and Kubernetes",
      issuer: "IBM (Developer skills, Cognitive class)",
      date: "May 2025 - August 2025",
    },
    {
      title: "Security in Full-Stack Web Applications",
      issuer: "Stanford Online (edX)",
      date: "November 2024 - December 2024",
    },
    {
      title: "Developing Cloud Apps with Node.js and React",
      issuer: "IBM (Coursera)",
      date: "October 2023 - January 2024",
    },
    {
      title: "W3Schools Completion Certificates (various web dev courses)",
      issuer: "W3Schools",
      date: null,
    },
    {
      title: "Google UX Design Certificate",
      issuer: "Google (Coursera)",
      date: null,
    },
    {
      title: "Cisco Certificates: JavaScript & React",
      issuer: "Cisco",
      date: null,
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Education</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My academic background and qualifications
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="bg-primary/10 p-6 flex items-center gap-4">
                  <div className="bg-primary/20 p-3 rounded-full">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Bachelor of Engineering: Electrical and Electronic Engineering</h3>
                    <p className="text-muted-foreground">Ladoke Akintola University of Technology (2019 - 2024)</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-muted-foreground">
                    Completed a rigorous engineering program emphasizing problem-solving, systems thinking, and applied technology. Built a foundation in circuit design, control systems, and programming, while independently advancing in web development—shaping my approach to scalable, user-focused software.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Certifications</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <div key={index}>
                <Card className="overflow-hidden h-full flex flex-col">
                  <CardContent className="flex-1 flex flex-col p-5">
                    <div className="flex items-center gap-4">
                      <div className="bg-primary/20 p-3 rounded-full">
                        <GraduationCap className="h-8 w-8 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.issuer}</p>
                        {cert.date && (
                          <p className="text-sm text-muted-foreground mt-1">
                            {cert.date}
                          </p>
                        )}
                      </div>
                    </div>
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