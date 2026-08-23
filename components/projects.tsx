import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Projects</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Why the catalogue lives one version ahead
            </p>
            <p className="mx-auto max-w-[720px] text-sm text-muted-foreground md:text-base leading-relaxed">
              When this version of my portfolio shipped in 2025, I held off on a dedicated
              projects section because I didn&apos;t think I had enough finished work to fill
              one. That aged poorly in the best way: the builds kept stacking up, and the
              catalogue outgrew the section before the section ever existed. So instead of
              retrofitting a static gallery here, the full, actively maintained catalogue,
              including the thinking behind each build, lives on the current version of the
              site.
            </p>
            <div className="pt-2">
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <a
                  href="https://kingsleyaremu.vercel.app/projects"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View the full project catalogue
                  <ArrowUpRight className="mr-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
