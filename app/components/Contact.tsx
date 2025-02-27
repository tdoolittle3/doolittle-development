'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Send } from 'lucide-react'

interface ContactProps {
  id: string;
}

export default function Contact({ id }: ContactProps) {
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
          Contact
        </motion.h2>
        <motion.div
          className="max-w-md mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <form
            className="space-y-6"
            action="https://formsubmit.co/41acae3cb684915ebb926e16b5fe13bd " // Replace with correct alias
            method="POST"
          >
            {/* Hidden fields to disable captcha and redirect */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_subject" value="New submission!"/>
            <input type="hidden" name="_next" value="https://doolittle-development.vercel.app/thankyou" />

            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md text-white"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-md text-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition duration-300 flex items-center justify-center"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>

        </motion.div>
      </div>
    </section>
  )
}

