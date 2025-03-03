import { GithubIcon, LinkedinIcon, FileText } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="flex flex-col items-center mb-12 text-center">
      <h1 className="text-4xl font-bold mb-4 text-white">KARIMUNDA KALIMU</h1>
      <h2 className="text-2xl mb-6 text-gray-300">Machine Learning Engineer & Aspiring Data Scientist</h2>
      <div className="flex space-x-4 mb-6">
        <a
          href="https://github.com/karim1988781"
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
        <Link href="/cv" className="text-gray-400 hover:text-white">
          <FileText className="w-6 h-6" />
        </Link>
      </div>
      <Button asChild variant="outline">
        <Link href="/cv" className="flex items-center gap-2 text-white">
          View Full CV
        </Link>
      </Button>
    </header>
  )
}

