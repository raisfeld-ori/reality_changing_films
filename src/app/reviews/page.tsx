'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from "lucide-react"
import Image from 'next/image'

// Sample review data
const reviews = [
  { 
    id: 1, 
    title: "John Doe", 
    jobTitle: "Software Engineer", 
    rating: 5, 
    text: "Excellent product! Highly recommended.", 
    media: { type: 'image', src: "/image (1).jpg" }
  },
  { 
    id: 2, 
    title: "Jane Smith", 
    jobTitle: "UX Designer", 
    rating: 4, 
    text: "Great experience overall, but there's room for improvement.", 
    media: { type: 'video', src: "/images.mp4" }
  },
  { 
    id: 3, 
    title: "Mike Johnson", 
    jobTitle: "Product Manager", 
    rating: 5, 
    text: "This exceeded my expectations. Will definitely use again!", 
    media: { type: 'image', src: "/image (10).jpg" }
  },
]

export default function SwipeableReviewCard() {
  const [currentReview, setCurrentReview] = useState(0)
  const [direction, setDirection] = useState(0)
  const videoRef = useRef<HTMLVideoElement>(null)

  const handleDragEnd = (_event: any, info: {offset: {x: number}}) => {
    if (info.offset.x < -100 && currentReview < reviews.length - 1) {
      setDirection(1)
      setCurrentReview(currentReview + 1)
    } else if (info.offset.x > 100 && currentReview > 0) {
      setDirection(-1)
      setCurrentReview(currentReview - 1)
    }
  }
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
    }),
  }

  return (
    <div className="flex items-center justify-center min-h-screen w-full bg-white overflow-hidden">
      <div className="relative w-full h-full max-w-md mx-auto">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentReview}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={handleDragEnd}
            className="absolute w-full h-full touch-none flex items-center justify-center"
          >
            <div className="bg-white shadow-xl rounded-lg overflow-hidden w-full max-w-sm">
              <div className="relative h-48 w-full">
                {reviews[currentReview].media.type === 'image' ? (
                  <Image
                    src={reviews[currentReview].media.src}
                    alt={reviews[currentReview].title}
                    layout="fill"
                    objectFit="cover"
                  />
                ) : (
                  <div className="relative h-full w-full">
                    <video
                      ref={videoRef}
                      src={reviews[currentReview].media.src}
                      className="h-full w-full object-cover"
                      controls
                    />
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{reviews[currentReview].title}</h2>
                    <p className="text-sm text-gray-500">{reviews[currentReview].jobTitle}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < reviews[currentReview].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{reviews[currentReview].text}</p>
                <div className="text-sm text-gray-500 text-center">
                  <p className="mt-2">
                    {currentReview + 1} / {reviews.length}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}