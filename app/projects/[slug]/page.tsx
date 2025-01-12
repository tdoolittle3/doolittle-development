import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const projects = [
  { 
    id: 1, 
    title: 'E-commerce Platform', 
    image: '/placeholder.svg?height=400&width=600', 
    description: 'A full-stack e-commerce solution with real-time inventory management.', 
    slug: 'joeys-toy-box',
    fullDescription: 'Our E-commerce Platform is a comprehensive solution designed to meet the needs of modern online retailers. Built with scalability in mind, it features real-time inventory management, secure payment processing, and a user-friendly interface for both customers and administrators. The platform utilizes React for the frontend, Node.js for the backend, and MongoDB for efficient data storage. Key features include product search with filters, user authentication, order tracking, and an analytics dashboard for business insights.'
  },
  { 
    id: 2, 
    title: 'AI Chatbot', 
    image: '/placeholder.svg?height=400&width=600', 
    description: 'An intelligent chatbot powered by machine learning algorithms.', 
    slug: 'pensacola-pressure-washing',
    fullDescription: 'Our AI Chatbot is a cutting-edge conversational agent that leverages the power of natural language processing and machine learning. Designed to provide instant, accurate responses to user queries, the chatbot can be easily integrated into websites, messaging platforms, and mobile apps. It uses a combination of rule-based responses and machine learning models trained on vast datasets to understand context and generate human-like responses. The chatbot is built using Python, with TensorFlow for the ML components, and features continuous learning capabilities to improve its performance over time.'
  },
  { 
    id: 3, 
    title: 'Data Visualization Dashboard', 
    image: '/placeholder.svg?height=400&width=600', 
    description: 'Interactive data visualizations for complex datasets.', 
    slug: 'land-leads',
    fullDescription: 'Our Data Visualization Dashboard is a powerful tool for transforming complex datasets into intuitive, interactive visual representations. Designed for data analysts and business intelligence professionals, the dashboard offers a wide range of customizable charts, graphs, and maps to help users uncover insights and trends. Built with D3.js for visualizations and React for the UI, the dashboard supports real-time data updates, drill-down capabilities, and export options for reports. Its highly scalable and can handle large datasets, making it suitable for enterprises dealing with big data.'
  },
]

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find(p => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white py-20">
      <div className="container mx-auto px-6">
        <Link href="/#projects" className="text-purple-400 hover:text-purple-300 transition duration-300 mb-8 inline-block">
          &larr; Back to Projects
        </Link>
        <h1 className="text-4xl font-bold mb-8">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image 
              src={project.image} 
              alt={project.title} 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-xl mb-6">{project.description}</p>
            <p className="text-gray-300">{project.fullDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

