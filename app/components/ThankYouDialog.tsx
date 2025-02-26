"use client"

import { useEffect, useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { Sparkles } from "lucide-react"

export default function ThankYouDialog() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if the user came from a QR code (using URL parameters)
    const urlParams = new URLSearchParams(window.location.search)
    const fromThankYou = urlParams.get("from") === "thankyou"
    
    if (fromThankYou) {
      setIsOpen(true)
      // Store in session storage so we don't show the dialog again during this session
      sessionStorage.setItem("contacted", "true")
    }
  }, [])

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="w-[90%] sm:w-[80%] max-w-lg h-[80vh] sm:h-auto bg-gray-900">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center text-2xl">
            <Sparkles className="h-6 w-6 mr-2 text-purple-400" />
            Thank you!
          </DialogTitle>
          <DialogDescription className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-4"
            >
              <p className="text-lg">Thanks for reaching out.  We should get back to you soon.</p>

            </motion.div>
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-center">
          <Button onClick={() => setIsOpen(false)} className="bg-purple-500 hover:bg-purple-600">
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

