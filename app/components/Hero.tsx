'use client'

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

  {/* Foreground Content */}
  <motion.div
    className="relative z-10 text-center"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
  >
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-4 text-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
    >
      Thomas Doolittle
    </motion.h1>
    <motion.p
      className="text-xl md:text-2xl mb-8 text-gray-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6 }}
    >
      Full Stack Developer & Problem Solver
    </motion.p>
    <motion.a
      href="#projects"
      className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8 }}
    >
      View My Work
    </motion.a>
  </motion.div>
</section>

  )
}
