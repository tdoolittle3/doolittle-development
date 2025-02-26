'use client'

import { motion } from 'framer-motion'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import IndustryExperience from './components/IndustryExperience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WelcomeDialog from './components/WelcomeDialog'
import { Analytics } from "@vercel/analytics/react"
import ThankYouDialog from './components/ThankYouDialog'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <Analytics/>  
      <WelcomeDialog/> 
      <ThankYouDialog/>   
      <Header />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Hero id="home" />
        <Projects id="projects" />
        <About id="about" />
        <IndustryExperience id="experience" />
        <Contact id="contact" />
        <Footer />
      </motion.div>
    </div>
  )
}

