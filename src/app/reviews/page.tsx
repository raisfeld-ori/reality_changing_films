'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: "Alice Johnson",
    text: "An absolute masterpiece! The storytelling is captivating from start to finish.",
    score: 5,
    media: "/placeholder.svg?height=400&width=600",
    isVideo: false
  },
  {
    id: 2,
    name: "Bob Smith",
    text: "While it has its moments, the pacing feels off in the middle. Still enjoyable overall.",
    score: 3,
    media: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    isVideo: true
  },
  {
    id: 3,
    name: "Carol Davis",
    text: "Innovative and thought-provoking. A must-see for any film enthusiast.",
    score: 4,
    media: "/placeholder.svg?height=400&width=600",
    isVideo: false
  }
]

export default function FullScreenReview() {
  const [currentReviewIndex, setCurrentReviewIndex] = useState(0)
  const currentReview = reviews[currentReviewIndex]

  const goToPrevious = () => {
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentReviewIndex((prevIndex) => 
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div className="relative h-screen w-screen bg-gray-100 text-gray-900 overflow-hidden flex items-center justify-center">
      <div className="relative w-full max-w-5xl mx-4 p-8 bg-white shadow-xl rounded-lg">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-full md:w-1/2 aspect-video rounded-lg overflow-hidden shadow-md">
            {currentReview.isVideo ? (
              <video 
                src={currentReview.media} 
                className="w-full h-full object-cover"
                autoPlay
                controls
              />
            ) : (
              <img 
                src={currentReview.media} 
                alt="Review media" 
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold">{currentReview.name}</h2>
            <p className="text-lg">{currentReview.text}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`w-6 h-6 ${i < currentReview.score ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-4 md:hidden z-50">
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md"
          onClick={goToPrevious}
          aria-label="Previous review"
        >
          <ChevronLeft className="h-8 w-8" />
        </button>
        <button
          className="bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md"
          onClick={goToNext}
          aria-label="Next review"
        >
          <ChevronRight className="h-8 w-8" />
        </button>
      </div>
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md hidden md:block z-50"
        onClick={goToPrevious}
        aria-label="Previous review"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 text-gray-800 rounded-full p-2 transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-gray-300 shadow-md hidden md:block z-50"
        onClick={goToNext}
        aria-label="Next review"
      >
        <ChevronRight className="h-8 w-8" />
      </button>
    </div>
  )
}