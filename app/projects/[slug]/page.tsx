import { notFound } from 'next/navigation'
import Link from 'next/link'
import { projects } from "@/app/data/projects"
import Footer from '@/app/components/Footer'



export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <Link href="/#projects" className="text-purple-400 hover:text-purple-300 transition duration-300 mb-8 inline-block">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-12">
          <div>
            <p className="text-xl mb-6">{project.description}</p>
            {project.customContent}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

