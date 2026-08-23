import Link from "next/link"
import { ArrowUpCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center justify-center gap-4 text-center md:gap-6">
        <div className="space-y-2">
          <p className="text-sm mb-3 *:text-muted-foreground">&copy; 2025 Kingsley Aremu. All rights reserved.
          </p>
          <br />
          <p className="md:hidden text-sm text-muted-foreground">Viewership on a larger screen is advised.
          </p>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block js-only animate-pulse">
          <Link
            href="#"
            aria-label="Back to top"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
