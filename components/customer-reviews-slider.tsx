"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"

const reviews = [
  {
    text: "All my family member ITR got done by TaxEasy. They helped a lot to reduce my tax liability as per income tax provision. Also, TaxEasy charges a very nominal fee compared to others.",
    author: "Harshit Agarwal",
    initial: "H"
  },
  {
    text: "There are many ITR filing platforms that have large customers but hardly reply to your queries and provide help in time. I reached out to TaxEasy after failed follow-ups on many platforms, and they did my ITR filing within an hour.",
    author: "Shubham S S TRADERS",
    initial: "S"
  },
  {
    text: "I am lucky to have found these guys who helped me file my ITR. TaxEasy was very helpful and professional throughout the process. Never imagined that filing ITR would be this smooth and easy—thanks to these guys.",
    author: "Shruti Agrawal",
    initial: "S"
  },
  {
    text: "I got my ITR filed with TaxEasy last year, and this year I called for advice on choosing between the old and new scheme returns as asked by my employer. They provided proper calculations for that without any extra charges.",
    author: "Deepti Verma",
    initial: "D"
  },
  {
    text: "Very satisfied with their service. The TaxEasy team was very professional and filed my return on the same day without any hassle. The team has good knowledge of their domain and clears all queries in a prompt manner.",
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
    <section className="py-16 px-4 sm:px-8 bg-gradient-to-r from-green-50 to-blue-50 overflow-hidden">
      <div className="container mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">
          Reviews from Customers
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Hear from our customers about their experience with us!
        </p>

        <div className="relative h-auto min-h-[250px] sm:min-h-[300px] md:min-h-[350px] flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentIndex}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="absolute w-full max-w-lg md:max-w-2xl"
            >
              <Card className="w-full bg-white shadow-xl rounded-lg px-6 py-4 sm:py-6">
                <CardContent className="p-0 sm:p-6">
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg mr-3 sm:mr-4">
                      {reviews[currentIndex].initial}
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <img
                          src="https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc"
                          alt="Google"
                          className="h-4 sm:h-5 w-4 sm:w-5 mr-2"
                        />
                        <div className="flex text-yellow-400">
                          {"★".repeat(5)}
                        </div>
                      </div>
                      <p className="font-medium text-sm sm:text-base">
                        {reviews[currentIndex].author}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm sm:text-lg leading-relaxed">
                    "{reviews[currentIndex].text}"
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center mt-6 sm:mt-8">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2.5 h-2.5 mx-1 sm:w-3 sm:h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
