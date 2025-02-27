"use client"

import { motion } from 'framer-motion'
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

interface HeroProps {
  id: string;
}

function Particles() {
  const mesh = useRef<THREE.Points>(null)
  const particleCount = 500
  const positions = new Float32Array(particleCount * 3)

  // Generate random positions for particles
  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20 // Spread out particles
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20
  }

  // Rotate particles over time
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0002
      mesh.current.rotation.x += 0.0001
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.07}
        color="#ffffff"
        transparent
        opacity={0.8}
      />
    </points>
  )
}

export default function Hero({ id }: HeroProps) {
  // Animation variants for the letters
  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    }),
  }

  // Split text into words and then letters
  const words = ["Build", "Your", "Impact"]
  const letters = words.map((word) => Array.from(word))

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Three.js Particles Background */}
      <Canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
        camera={{ position: [0, 0, 10], fov: 75 }}
      >
        <Particles />
      </Canvas>

{/* Gradient Overlay */}
<div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-800 opacity-50 pointer-events-none"></div>
      {/* Animated background elements */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-indigo-600/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
      </motion.div>

      <div className="relative z-10 text-center space-y-16">
        {/* Animated "Build Your Impact" text */}
        <div className="overflow-hidden px-4">
          <div className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
            {letters.map((word, wordIndex) => (
              <div key={wordIndex} className="inline-block">
                {word.map((letter, letterIndex) => (
                  <motion.span
                    key={letterIndex}
                    custom={wordIndex * word.length + letterIndex}
                    variants={letterVariants}
                    initial="hidden"
                    animate="visible"
                    className="inline-block"
                    style={{
                      textShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
                    }}
                  >
                    {letter}
                  </motion.span>
                ))}
                {/* Add space between words */}
                {wordIndex !== letters.length - 1 && <span className="inline-block">&nbsp;</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Existing content with updated animations */}
        <div className="space-y-8 px-4">
          <motion.h1
            className="text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            Thomas Doolittle
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-200"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
          >
            Innovative solutions engineering
          </motion.p>
          <motion.a
            href="#projects"
            className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 transform hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            whileHover={{
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.5)",
            }}
          >
            View More
          </motion.a>
        </div>
      </div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      />
    </section>
  )
}

