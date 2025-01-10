'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface ProjectsProps {
  id: string;
}

const projects = [
  { id: 1, title: 'Joey&apos;s Toy Box', image: '/main_logo.png?height=200&width=300', description: 'A 501c3 foundation website using React, hosted on Azure.' },
  { id: 2, title: 'Pensacola Pressure Washing', image: '/placeholder.svg?height=200&width=300', description: 'A Vercel powered small business web page.' },
  { id: 3, title: 'Land Leads', image: '/placeholder.svg?height=200&width=300', description: 'A website for using AI to find real estate deals using Langchain natural language to SQL.' },
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
              <Image src={project.image} alt={project.title} width={300} height={200} className="w-full" />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

