import Header from "./components/Header"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contacts"

export default function Home() {
  return (
    <main className="container mx-auto px-4 py-8">
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}

