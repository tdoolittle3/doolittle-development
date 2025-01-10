'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Linkedin, Github } from 'lucide-react'

export default function Header() {
  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-opacity-90 bg-gray-900 backdrop-blur-sm"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <ul className="flex space-x-8">
          {['Home', 'Projects', 'About'].map((item) => (
            <li key={item}>
              <Link
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition duration-300"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex space-x-4">
          <a
            href="https://www.linkedin.com/in/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/johndoe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            <Github size={24} />
          </a>
        </div>
      </nav>
    </motion.header>
  )
}

