import { GithubIcon, LinkedinIcon, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  // Get the base path from environment or default to empty string
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

  return (
    <header className="flex flex-col items-center mb-12 text-center">
      <div className="mb-6">
        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-700 mx-auto">
          {/* Use the external URL for now to ensure it works */}
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo.jpg-3v5Sfi5X085Pei1FOJELlADcCtg7GN.jpeg"
            alt="KARIMUNDA KALIMU"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <h1 className="text-4xl font-bold mb-4 text-white">KARIMUNDA KALIMU</h1>
      <h2 className="text-2xl mb-6 text-gray-300">Technical Support Engineer & Aspiring Data Scientist</h2>
      <div className="flex space-x-4 mb-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <GithubIcon className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/karimunda-kalim-aa688715a/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white"
        >
          <LinkedinIcon className="w-6 h-6" />
        </a>
        <Link href={`${basePath}/cv`} className="text-gray-400 hover:text-white">
          <FileText className="w-6 h-6" />
        </Link>
      </div>
      <Button asChild variant="outline">
        <Link href={`${basePath}/cv`} className="flex items-center gap-2 text-white">
          View Full CV
        </Link>
      </Button>
    </header>
  )
}

