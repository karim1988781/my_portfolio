import Link from "next/link"

export default function NotFound() {
  // Get the base path from environment or default to empty string
  const basePath = process.env.NODE_ENV === "production" ? "/portfolio" : ""

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center p-4">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="mb-8">The page you are looking for does not exist.</p>
      <Link href={`${basePath}/`} className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Return to Home
      </Link>
    </div>
  )
}

