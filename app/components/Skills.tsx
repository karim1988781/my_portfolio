import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skills = [
    "Python",
    "Deep Learning",
    "Data Analysis",
    "Technical Support",
    "Problem Solving",
    "AI & Machine Learning",
    "Computer Systems",
    "Software Development",
    "Hardware Configuration",
    "Research & Development",
  ]

  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">Key Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <Badge key={index} variant="outline" className="bg-gray-800 text-gray-200">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}

