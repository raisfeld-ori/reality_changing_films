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
    }, 6 * 1000)

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

import { motion, AnimatePresence } from 'framer-motion'

// Replace these with your actual image URLs
const images = [
  'https://picsum.photos/2000',
  'https://picsum.photos/2100',
  'https://picsum.photos/2200',
  'https://picsum.photos/2300',
]

const imageVariants = {
  enter: (direction: number) => ({
    y: direction > 0 ? 200 : -200,
    opacity: 0,
  }),
  center: {
    y: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    y: direction < 0 ? 200 : -200,
    opacity: 0,
  }),
}

export function LoadingAnimation({page}: {page: JSX.Element}) {
  const [[currentImageIndex, direction], setCurrentImage] = useState([0, 0])
  const [showContent, setShowContent] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentImageIndex < images.length - 1) {
        setCurrentImage([currentImageIndex + 1, 1])
      } else {
        setShowContent(true)
      }
    }, 2 * 1000) // Change image every 2 seconds

    return () => clearTimeout(timer)
  }, [currentImageIndex])

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gray-100 overflow-hidden">
      <AnimatePresence mode="wait" initial={false} custom={direction}>
        {!showContent ? (
          <motion.div
            key={`loading-${currentImageIndex}`}
            custom={direction}
            variants={imageVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="text-center"
          >
            <img
              src={images[currentImageIndex]}
              alt={`Loading image ${currentImageIndex + 1}`}
              className="w-screen h-full mx-auto rounded-lg shadow-lg object-fill"
            />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            {page}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}