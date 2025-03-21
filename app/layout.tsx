import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "KARIMUNDA KALIMU - Data Science & ML Engineer",
  description: "Portfolio of KARIMUNDA KALIMU, a Data Science and Machine Learning Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Get the base path from environment or default to empty string
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

  return (
    <html lang="en" className="dark">
      <head>
        {/* Add this to ensure CSS is loaded correctly */}
        <link rel="stylesheet" href={`${basePath}/globals.css`} />
      </head>
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}

