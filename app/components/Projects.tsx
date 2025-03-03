import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Developed a machine learning model to predict customer churn for a telecom company, improving retention strategies.",
    technologies: ["Python", "Scikit-learn", "Pandas", "Matplotlib"],
  },
  {
    title: "Image Classification with Deep Learning",
    description: "Implemented a convolutional neural network for image classification on the CIFAR-10 dataset.",
    technologies: ["Python", "TensorFlow", "Keras", "NumPy"],
  },
  {
    title: "Natural Language Processing for Sentiment Analysis",
    description: "Built an NLP model to analyze sentiment in customer reviews, enhancing product feedback analysis.",
    technologies: ["Python", "NLTK", "Spacy", "Transformers"],
  },
]

export default function Projects() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-4 text-white">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-300">{project.description}</CardDescription>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge key={techIndex} variant="outline" className="bg-gray-700 text-gray-200">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

