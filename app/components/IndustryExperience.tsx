"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { experiences } from "../data/experiences"

interface IndustryExperienceProps {
  id: string
}

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Left Column - Image with Span Text */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
          >
            <span className="block italic text-gray-400 mb-4 text-center">
              A decade of building robust railroad tech
            </span>
            <Image
              src="/railway-track-2049394_1280.jpg"
              alt="Industry Experience"
              width={600}
              height={400}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </motion.div>

          {/* Right Column - Experience List */}
          <div className="md:col-span-1 flex flex-col gap-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exp.role}</h3>
                  <p className="text-purple-400 mb-2">{exp.company}</p>
                  <p className="text-gray-400 mb-4">{exp.period}</p>
                  <p className="text-gray-300 mb-4">{exp.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="bg-gray-700 px-3 py-1 rounded-full text-sm text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/experience/${exp.slug}`}
                    className="inline-flex items-center text-purple-400 hover:text-purple-300 transition duration-300"
                  >
                    View Details <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>

  )
}

