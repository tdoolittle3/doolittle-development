'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

interface IndustryExperienceProps {
  id: string;
}

const experiences = [
  { role: 'Senior Full Stack Developer', company: 'Tech Innovators Inc.', period: '2020 - Present' },
  { role: 'Frontend Developer', company: 'Web Solutions Ltd.', period: '2018 - 2020' },
  { role: 'Junior Developer', company: 'StartUp Ventures', period: '2016 - 2018' },
]

export default function IndustryExperience({ id }: IndustryExperienceProps) {
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
          Industry Experience
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <Image 
              src="/railway-track-2049394_1280.jpg" 
              alt="Industry Experience" 
              width={600} 
              height={400} 
              className="rounded-lg shadow-lg"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
          >
            <ul className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.li 
                  key={index}
                  className="bg-gray-800 p-6 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                  <p className="text-gray-400">{exp.company}</p>
                  <p className="text-gray-500">{exp.period}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

