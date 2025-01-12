'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface ProjectsProps {
  id: string;
}

const projects = [
  { id: 1, title: 'Joeys Toy Box', image: '/main_logo.svg?height=200&width=300', description: 'A 501c3 foundation website using React, hosted on Azure.',
    details: "",
    technologies: ['React', 'Azure', 'Paypal'], slug: 'joeys-toy-box'
  },
  { id: 2, title: 'Pensacola Pressure Washing', image: '/logo-color.png?height=200&width=300', description: 'A Vercel powered small business web page.',
    details: "",
    technologies: ['NextJS', 'Vercel'], slug: 'pensacola-pressure-washing'
   },
  { id: 3, title: 'Land Leads', image: '/logo-no-background.png?height=200&width=300', description: 'A website for using AI to find real estate deals using Langchain natural language to SQL.',
    details: "",
    technologies: ['Python', 'Jupyter', 'Postgres', 'LangChain', 'Firebase'], slug:'land-leads'
   },
]

export default function Projects({ id }: ProjectsProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })


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
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" priority={true}/>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <motion.a
                  href={`/projects/${project.slug}`}
                  className="text-purple-400 hover:text-purple-300 transition duration-300 z-index:100"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  >
                    See More
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

