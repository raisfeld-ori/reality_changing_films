"use client"

export default function Home() {
  return (
    <DynamicFilmHero />
  );
}

import { useState, useEffect } from 'react'

const heroContent: {video: string, title: string, description: string}[] = [
  {
    video: "/movie clip 1.mp4",
    title: "הסרטים הכי נצפים בחטיבות ותיכונים",
    description: ""
  },
  {
    video: "/movie clip2.mp4",
    title: "מומלץ משרד החינוך, הגפן וסל תרבות",
    description: ""
  },
  {
    video: "/movie clip 3.mp4",
    title: "מעל 250 הקרנות בשנה",
    description: "מול מאות אלפי בני נוער"
  },
  {
    video: "/movie clip 4.mp4",
    title: "מייצרים סרטים וסדנאות לנוער בהצלחה מעל 20 שנה",
    description: ""
  },
  {
    video: '/movie clip 5.mp4',
    title: 'סדנאות משחק ואודישנים אחרי כל הקרנה',
    description: '',
  },
  {
    video: '/images.mp4',
    title: '',
    description: '',
  }
]

function DynamicFilmHero() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % heroContent.length)
        setIsTransitioning(false)
      }, 1000) // Half a second for fade out, then change content
    }, 8 * 1000)

    return () => clearInterval(interval)
  }, [])

  const currentContent = heroContent[currentIndex]

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        key={currentContent.video}
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 h-full w-full object-cover transition-opacity z-10 duration-500"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <source src={currentContent.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-0" />

      {/* Content */}
      <div className="relative z-10 flex h-full w-svw items-center justify-center md:justify">
        <div className="w-full px-6 text-right">
          <h1 
            className={`mb-4 font-serif text-6xl font-bold text-white transition-opacity tinos-regular duration-500 sm:text-6xl text-center md:text-center ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {currentContent.title}
          </h1>
          <p 
            className={`ml-auto w-full text-2xl text-gray-200 transition-opacity tinos-regular duration-500 text-center md:text-center ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {currentContent.description}
          </p>
        </div>
      </div>
    </div>
  )
}