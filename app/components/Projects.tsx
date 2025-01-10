'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'
import Modal from './Modal'
import { Button } from '@/components/ui/button'

interface ProjectsProps {
  id: string;
}

const projects = [
  { id: 1, title: 'Joeys Toy Box', image: '/main_logo.svg?height=200&width=300', description: 'A 501c3 foundation website using React, hosted on Azure.',
    details: "",
    technologies: ['React', 'Azure', 'Paypal']
  },
  { id: 2, title: 'Pensacola Pressure Washing', image: '/logo-color.png?height=200&width=300', description: 'A Vercel powered small business web page.',
    details: "",
    technologies: ['NextJS', 'Vercel']
   },
  { id: 3, title: 'Land Leads', image: '/logo-no-background.png?height=200&width=300', description: 'A website for using AI to find real estate deals using Langchain natural language to SQL.',
    details: "",
    technologies: ['Python', 'Jupyter', 'Postgres', 'LangChain', 'Firebase']
   },
]

export default function Projects({ id }: ProjectsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [selectedProject, setSelectedProject] = useState<number | null>(null)

  const openModal = (projectId: number) => {
    setSelectedProject(projectId)
  }

  const closeModal = () => {
    setSelectedProject(null)
  }

  const goToNextProject = () => {
    setSelectedProject((prev) => (prev === null || prev === projects.length - 1) ? 0 : prev + 1)
  }

  const goToPrevProject = () => {
    setSelectedProject((prev) => (prev === null || prev === 0) ? projects.length - 1 : prev - 1)
  }

  return (
    <section id={id} className="py-20 bg-gray-900" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => openModal(project.id)}
            >
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <Modal
        isOpen={selectedProject !== null}
        onClose={closeModal}
        onPrev={goToPrevProject}
        onNext={goToNextProject}
      >
        {selectedProject !== null && (
          <div className="p-6 max-h-[80vh] overflow-y-auto">
            <h2 className="text-2xl font-bold mb-4">{projects[selectedProject].title}</h2>
            <Image
              src={projects[selectedProject].image}
              alt={projects[selectedProject].title}
              width={600}
              height={400}
              className="w-full mb-4 rounded-lg"
            />
            <p className="text-gray-300 mb-4">{projects[selectedProject].details}</p>
            <div className="mb-4">
              <h3 className="text-xl font-semibold mb-2">Technologies Used:</h3>
              <ul className="list-disc list-inside text-gray-300">
                {projects[selectedProject].technologies.map((tech, index) => (
                  <li key={index}>{tech}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-between mt-6">
              <Button onClick={goToPrevProject} variant="outline">Previous Project</Button>
              <Button onClick={goToNextProject} variant="outline">Next Project</Button>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}

