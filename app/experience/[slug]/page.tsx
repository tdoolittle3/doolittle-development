import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, MapPin, Calendar } from "lucide-react"
import { experiences } from "@/app/data/experiences"
import { notFound } from "next/navigation"
import Footer from "@/app/components/Footer"

export async function generateStaticParams() {
  return experiences.map((experience) => ({
    slug: experience.slug,
  }))
}

export default function ExperiencePage({ params }: { params: { slug: string } }) {
  const experience = experiences.find((exp) => exp.slug === params.slug)

  if (!experience) {
    notFound()
  }

  return (<>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <Link
          href="/#experience"
          className="inline-flex items-center text-purple-400 hover:text-purple-300 transition duration-300 mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Industry Experience
        </Link>

        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
          <Image
            src={experience.image || "/placeholder.svg"}
            alt={experience.company}
            width={1200}
            height={400}
            className="w-full h-64 object-cover"
          />

          <div className="p-8">
            <h1 className="text-4xl font-bold mb-4">{experience.role}</h1>
            <div className="flex flex-wrap gap-4 mb-6 text-gray-300">
              <p className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                {experience.period}
              </p>
              <p className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {experience.location}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Technologies</h2>
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <span key={index} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">Responsibilities</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {experience.responsibilities.map((responsibility, index) => (
                  <li key={index}>{responsibility}</li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-4">Key Achievements</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                {experience.achievements.map((achievement, index) => (
                  <li key={index}>{achievement}</li>
                ))}
              </ul>
            </div>

            {/* Narrative Section */}
            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-4"></h2>
              <div className="mb-12 prose prose-invert max-w-none">{experience.narrative}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

