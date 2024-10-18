'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = [
  'https://picsum.photos/500/500',
  'https://picsum.photos/501/500',
  'https://picsum.photos/502/500',
  'https://picsum.photos/503/500',
]

export default function AutoCarouselRTL() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg shadow-lg bg-blue-600">
      <div 
        className="flex flex-row-reverse transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <div key={index} className="w-full flex-shrink-0">
            <Image
              src={src}
              alt={`Carousel image ${index + 1}`}
              width={600}
              height={400}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}