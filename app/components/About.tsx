'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface AboutProps {
  id: string;
}

const problems = [
  { title: 'Scalability Challenges', description: 'Designing systems that can handle rapid growth and high traffic.' },
  { title: 'Data Security', description: 'Implementing robust security measures to protect sensitive information.' },
  { title: 'Performance Optimization', description: 'Enhancing application speed and efficiency for better user experience.' },
  { title: 'Cross-platform Compatibility', description: 'Ensuring seamless functionality across various devices and browsers.' },
]

export default function About({ id }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
              <p className="text-gray-400">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

