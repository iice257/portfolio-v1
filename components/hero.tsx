"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpCircle, Download, Github, Linkedin, Mail, ScrollText } from "lucide-react"
import Link from "next/link"
import { FaReact } from "react-icons/fa"

export default function Hero() {
  return (
    <section id="home" className="py-20 md:py-32 flex flex-col items-center justify-center min-h-[90vh]">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Kingsley Aremu
            </h1>
            <p className="mx-auto max-w-[700px] text-xl text-muted-foreground md:text-2xl">
              <span className="js-only">
                <span className="gradient-text items-center flex justify-center gap-2">
                  <FaReact className="mt-2 h-6 w-6 text-primary animate-spin" style={{ animationDuration: "3s" }} />
                  React Developer
                </span>
              </span>
              <noscript>
                <span>React / React Native Developer | Web & Mobile Apps | JavaScript & Modern Frontend UI</span>
              </noscript>
            </p>
          </div>
          <div className="max-w-[700px] text-muted-foreground">
            <p className="text-lg">3+ years building sleek web & mobile apps with React, React Native, and modern frontend tools. Creating scalable digital products.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button asChild size="lg" className="rounded-full">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full">
              <a href="/KingsleyAremuResumé.pdf" target="_blank" rel="noopener noreferrer">
                <ScrollText className="mr-2 h-4 w-4" /> View Resumé
              </a>
            </Button>
          </div>
          <div className="flex gap-4 mt-6">
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://github.com/iice257" target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="https://www.linkedin.com/in/kingsley-aremu" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="mailto:kingsley.aremu@gmail.com">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 hidden md:block js-only animate-pulse">
          <Link
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: "smooth" })
            }}
          >
            <ArrowUpCircle className="h-10 w-10 text-primary" />
          </Link>
        </div>
      </div>
    </section>
  )
}
