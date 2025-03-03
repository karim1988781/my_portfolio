import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
      <form className="space-y-4">
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-300">
            Name
          </label>
          <Input id="name" placeholder="Your Name" className="bg-gray-800 text-white border-gray-700" />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-300">
            Email
          </label>
          <Input
            id="email"
            type="email"
            placeholder="your@email.com"
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-300">
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Your message here..."
            className="bg-gray-800 text-white border-gray-700"
          />
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
          Send Message
        </Button>
      </form>
    </section>
  )
}

