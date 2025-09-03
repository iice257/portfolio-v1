import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"
import Link from "next/link"

export default function Socials() {
  return (
    <section id="blog" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="space-y-12">
          <div className="space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Socials</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Where I share my thoughts, tips, and insights about tech.
            </p>
          </div>

          <div className="flex flex-row gap-6 items-start">
            <Card className="w-full max-w-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Visit My Twitter</h3>
                <p className="text-muted-foreground mb-6">
                  I yap about JavaScript, React, Node.js, my projects, and other technologies on my Twitter (X). Check it out:
                </p>
                <Button asChild>
                  <Link
                    href="https://x.com/ice257_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Twitter
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="w-full max-w-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Visit My TikTok</h3>
                <p className="text-muted-foreground mb-6">
                  I just be postin stuff, Check it out:
                  (I really don't know why I'm doxxing myself but oh well)
                </p>
                <Button asChild>
                  <Link
                    href="https://www.tiktok.com/@ice257_"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit TikTok
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="w-full max-w-md">
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-4">Reach out on Whatsapp</h3>
                <p className="text-muted-foreground mb-6">
                  You can also reach out to me on Whatsapp for quick questions or collaborations.
                  Do not call this number.
                </p>
                <Button asChild>
                  <Link
                    href="https://wa.me/+2348168367367"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" /> Visit Whatsapp
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
