"use client"

import { useState, useEffect } from 'react'
import Image from 'next/image'

const images = Array.from({length: 16}).map((_, i) => {return '/image (' + (i + 1) + ').jpg'})

export default function Component() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-screen h-full overflow-hidden bg-white">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={src}
            alt={`Slide ${index + 1}`}
            fill
            sizes="100vw"
            className="object-contain"
            priority={index === 0}
          />
        </div>
      ))}
    </div>
  )
}