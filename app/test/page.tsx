import Image from "next/image"

export default function TestPage() {
  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Image Test Page</h1>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Test 1: Regular HTML img tag</h2>
        <Image src="/photo.jpg" alt="Test image 1" width="200" height="200" style={{ border: "2px solid red" }} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Test 2: Different path</h2>
        <Image src="./photo.jpg" alt="Test image 2" width="200" height="200" style={{ border: "2px solid blue" }} />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Test 3: Absolute URL</h2>
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo.jpg-3v5Sfi5X085Pei1FOJELlADcCtg7GN.jpeg"
          alt="Test image 3"
          width="200"
          height="200"
          style={{ border: "2px solid green" }}
        />
      </div>

      <div className="mb-8">
        <h2 className="text-xl mb-2">Test 4: Next.js Image Component</h2>
        <div style={{ border: "2px solid purple", width: "200px", height: "200px", position: "relative" }}>
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo.jpg-3v5Sfi5X085Pei1FOJELlADcCtg7GN.jpeg"
            alt="Test image 4"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  )
}

