"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Film data
const films = [
  {
    id: 1,
    title: "פנתר לבן",
    image: "/whitepanther.jpg",
    link: "/movies/first",
  },
  {
    id: 2,
    title: "אל תחכי לי",
    image: "/dontwaitforme.jpg",
    link: "/movies/second",
  },
  {
    id: 3,
    title: "אמצע החיים",
    image: "/middlelife.jpg",
    link: "/movies/third",
  },
]

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % films.length)
  }

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + films.length) % films.length)
  }

  // Function to go to a specific slide
  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4500)

    return () => clearInterval(interval)
  }, [])

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-black text-white">
      {/* Carousel container */}
      <div className="absolute inset-0 w-full h-full">
        {films.map((film, index) => (
                        <Link
                href={film.link}
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-lg font-medium text-black transition-colors hover:bg-gray-200 w-fit"
              >
          <div
            key={film.id}
            className={`absolute inset-0 w-full h-full transition-opacity duration-500 ease-out ${
              currentIndex === index ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <Image src={film.image} alt={film.title} fill className="object-cover" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8 sm:p-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white text-center">{film.title}</h2>
            </div>
          </div>
          </Link>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 z-20"
        aria-label="Previous film"
      >
        <ChevronLeft className="h-8 w-8" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70 z-20"
        aria-label="Next film"
      >
        <ChevronRight className="h-8 w-8" />
      </button>

      {/* Indicator dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
        {films.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={"h-3 w-3 rounded-full transition-all " + (currentIndex === index ? "bg-white w-8" : "bg-white/50")}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </main>
  )
}
