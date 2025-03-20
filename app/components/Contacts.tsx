"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })

    const { error } = await res.json()
    if (error) {
      setStatus("Failed to send message. Please try again.")
      return
    }

    setName("")
    setEmail("")
    setMessage("")
    setStatus("Message sent successfully!")
  }

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">Contact Me</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block mb-2 text-gray-300">
            Name
          </label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            className="bg-gray-800 text-white border-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-gray-300">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="bg-gray-800 text-white border-gray-700"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-gray-300">
            Message
          </label>
          <Textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message here..."
            className="bg-gray-800 text-white border-gray-700"
            required
          />
        </div>
        <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
          Send Message
        </Button>
        {status && <p className="mt-4 text-white">{status}</p>}
      </form>
    </section>
  )
}

