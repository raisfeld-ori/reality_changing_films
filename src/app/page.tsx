"use client"

export default function Home() {
  return (
    <LoadingAnimation page={<DynamicFilmHero />}></LoadingAnimation>
  );
}

import { useState, useEffect } from 'react'

const heroContent: {video: string, title: string, description: string}[] = [
  {
    video: "/movie clip 1.mp4",
    title: "קולנוע משנה מציאות",
    description: "מכינים את הסרטים הכי נצפים בחטיבות ותיכונים בישראל"
  },
  {
    video: "/movie clip2.mp4",
    title: "סרטים לכל הגילאים",
    description: "עם סרטים וסדנאות שמותאמים לכל תלמיד מכיתה ז לכיתה יב"
  },
  {
    video: "/movie clip 3.mp4",
    title: "משובים וציונים של 100",
    description: "מומלצים על ידי משרד החינוך והגפן"
  },
  {
    video: "/movie clip 4.mp4",
    title: "מעל ל250 הקרנות בשנה",
    description: "עם סדנאות בכל רחבי הארץ"
  },
  {
    video: '/movie clip 5.mp4',
    title: "מכינים סרטים כבר 20+ שנה",
    description: ""
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
      <div className='absolute top-1/3 w-full text-center text-9xl font-bold z-0'>קולנוע משנה מציאות</div>

      {/* Content */}
      <div className="relative z-10 flex h-full w-svw items-center justify-center md:justify">
        <div className="w-full px-6 text-right">
          <h1 
            className={`mb-4 font-serif text-4xl font-bold text-white transition-opacity duration-500 sm:text-6xl text-center md:text-center ${
              isTransitioning ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {currentContent.title}
          </h1>
          <p 
            className={`ml-auto w-full text-lg text-gray-200 transition-opacity duration-500 text-center md:text-center ${
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
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

function LoadingAnimation(props: { page: JSX.Element }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [showContent, setShowContent] = useState(false)

  const images = [
    '/dontwaitforme.jpg',
    '/middlelife.jpg',
    '/whitepanther.jpg',
    '/image2.jpg',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImageIndex(prevIndex => prevIndex + 1)
      } else {
        clearInterval(interval)
        setTimeout(() => setShowContent(true), 500)
      }
    }, 1500)

    return () => clearInterval(interval)
  }, [currentImageIndex])

  return (
    <div className="relative h-screen w-full overflow-hidden bg-white">
      <AnimatePresence>
        {!showContent && (
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <Image
              src={images[currentImageIndex]}
              alt={``}
              width={600}
              height={300}
              className="object-fit"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showContent && (
          props.page
        )}
      </AnimatePresence>
    </div>
  )
}