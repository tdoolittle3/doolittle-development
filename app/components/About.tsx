"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Network, Users, Database } from "lucide-react"

interface AboutProps {
  id: string
}

const expertise = [
  {
    icon: Network,
    title: "Enterprise-Grade Scalable Communication Systems",
    keywords: ["High-Performance Messaging", "System Reliability", "Fault Tolerance", "Network Architecture"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Code2,
    title: "Holistic Software Architecture & Development",
    keywords: ["Full-Stack Development", "Modern Frameworks", "System Design", "Code Quality"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Customer-Centric Solution Engineering",
    keywords: ["Business Analysis", "User Experience", "Solution Design", "Technical Strategy"],
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Database,
    title: "Efficient Data & Development Pipelines",
    keywords: ["Workflow Automation", "CI/CD Optimization", "Data Processing", "Performance Tuning"],
    gradient: "from-green-500 to-emerald-500",
  },
]

export default function About({ id }: AboutProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section id={id} className="py-20 bg-gradient-to-b from-gray-900 to-black" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          className="max-w-2xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl font-bold mb-4">Technical Expertise</h2>
          <p className="text-gray-400 text-lg">
            
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {expertise.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl blur-xl -z-10`}
                />
                <div className="relative h-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-gray-600/50 transition-colors duration-300">
                  <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.gradient} mb-6`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-6 text-white">{item.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {item.keywords.map((keyword, keywordIndex) => (
                      <motion.span
                        key={keywordIndex}
                        className={`px-3 py-1 rounded-full text-sm bg-gray-700 bg-opacity-10 border border-gray-700 text-white`}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                        transition={{ duration: 0.3, delay: index * 0.1 + keywordIndex * 0.1 }}
                      >
                        {keyword}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

