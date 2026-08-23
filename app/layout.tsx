import type React from "react"
import type { Metadata, Viewport } from "next"
import { Analytics } from "@/components/analytics"
import ClientLayout from "./client"
import { Suspense } from "react"

export const metadata: Metadata = {
  metadataBase: new URL("https://kingsleyaremu-v1.vercel.app"),
  title: "Kingsley Aremu | React Developer",
  description:
    "Portfolio of Kingsley Aremu, a React (Native) Web and Mobile App Developer specializing in JavaScript, TypeScript, React.js and React Native, Node.js, and SwiftUI.",
  keywords: [
    "Kingsley Aremu",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "SwiftUI",
  ],
  authors: [{ name: "Kingsley Aremu" }],
  creator: "Kingsley Aremu",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kingsleyaremu-v1.vercel.app",
    title: "Kingsley Aremu | React Developer",
    description:
      "Portfolio of Kingsley Aremu, a React (Native) Web and Mobile App Developer specializing in JavaScript, TypeScript, React.js and React Native, Node.js, and SwiftUI.",
    siteName: "Kingsley Aremu Portfolio",
    images: [
      {
        url: "/favicon.png",
        width: 512,
        height: 512,
        alt: "Kingsley Aremu Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingsley Aremu | React Developer",
    description:
      "Portfolio of Kingsley Aremu, a React (Native) Web and Mobile App Developer specializing in JavaScript, TypeScript, React.js and React Native, Node.js, and SwiftUI.",
    creator: "@iice257",
    images: ["/favicon.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Suspense>
        <ClientLayout>{children}</ClientLayout>
      </Suspense>
      <Analytics />
    </>
  )
}


import './globals.css'
