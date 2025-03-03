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
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gray-900 text-gray-100`}>
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  )
}

