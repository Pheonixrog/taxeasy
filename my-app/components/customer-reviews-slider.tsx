"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    text: "All my family member ITR got done by Taxeasy. They helped a lot to reduce my tax liability as per income tax provision. Also TaxEasy charge a very nominal fees as compared to others.",
    author: "Harshit Agarwal",
    initial: "H"
  },
  {
    text: "There are many ITR filing platform who have large customers but they hardly reply to your queries and provide help in time. I have reached to Taxeasy after failed follow ups on many platforms and they have done my itr filing within an hour.",
    author: "Shubham S S TRADERS",
    initial: "S"
  },
  {
    text: "I am lucky to get these guys who helped me to file my ITR ITR. TaxEasy is very helpful and professional throughout the process. Never imagined that filing ITR would be this smooth and easy thanks to these guys.",
    author: "Shruti Agrawal",
    initial: "S"
  },
  {
    text: "I got filled my ITR with TaxEasy last year and this year I called for choosing old or new scheme returns that is asked by my employer they provide proper calculation for that without any extra charges.",
    author: "Deepti Verma",
    initial: "D"
  },
  {
    text: "Very satisfied with their service. TaxEasy team was very professional in they filed my return on the same day without any hassle. Team have good knowledge of his domain and he clears all the query in a prompt manner",
    author: "GUPTA JI STORE",
    initial: "G"
  }
]

export function CustomerReviewsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 px-8 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-2">Reviews from Customers</h2>
        <p className="text-center text-gray-600 mb-12">
          Heard from Our Customers what they have to say about Us!
        </p>
        
        <div className="relative h-[400px]">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Card className="w-full max-w-2xl bg-white shadow-xl">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-4">
                      {reviews[currentIndex].initial}
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <img src="https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc" alt="Google" className="h-5 w-5 mr-2" />
                        <div className="flex text-yellow-400">
                          {"★".repeat(5)}
                        </div>
                      </div>
                      <p className="font-medium">{reviews[currentIndex].author}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 mx-1 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

