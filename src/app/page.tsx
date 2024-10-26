"use client"

export default function Home() {
  return (
    <div>
      <DynamicFilmHero />
    </div>
  );
}

import { useState, useEffect } from 'react'

const heroContent: {video: string, title: string, description: string}[] = [
  {
    video: "/movie clip 1.mp4",
    title: "הסרטים הכי נצפים בחטיבות ותיכונים",
    description: "מומלצי משרד החינוך והגפן"
  },
  {
    video: "/movie clip2.mp4",
    title: "כל סרט מלווה בסדנת משחק ואודישנים",
    description: "הסרטים והסדנאות מותאמים לפי שכבות גיל ז-יב"
  },
  {
    video: "/movie clip 3.mp4",
    title: "עוד משהו נוסף",
    description: "אני לא יודע מה לשים פה"
  },
  {
    video: "/movie clip 4.mp4",
    title: "title",
    description: "description"
  },
  {
    video: '/movie clip 5.mp4',
    title: "title",
    description: 'description'
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
      }, 500) // Half a second for fade out, then change content
    }, 10 * 1000)

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
        className="absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500"
        style={{ opacity: isTransitioning ? 0 : 1 }}
      >
        <source src={currentContent.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center md:justify-end">
        <div className="w-full max-w-xl px-6 text-right">
          <h1 
            className={`mb-4 font-serif text-4xl font-bold text-white transition-opacity duration-500 sm:text-6xl text-center md:text-left ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {currentContent.title}
          </h1>
          <p 
            className={`ml-auto max-w-md text-lg text-gray-200 transition-opacity duration-500 text-center md:text-left ${
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