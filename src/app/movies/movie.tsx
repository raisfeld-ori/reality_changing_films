'use client'

import { Laugh, Play, Tv,  } from 'lucide-react'

interface MovieShowcaseProps {
  title: string
  description: string[]
  trailerSrc: string
  backgroundImageSrc: string
  content?: Content[]
  reviews?: Content[]
}

export default function MovieShowcase({
  title = "Interstellar",
  description = ["A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."],
  trailerSrc = "https://www.example.com/interstellar-trailer.mp4",
  backgroundImageSrc = "https://example.com/interstellar-background.jpg",
  content = [],
  reviews = [],
}: MovieShowcaseProps) {
  const [showContents, setShowContents] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  return (
    <div 
      className="relative min-h-screen bg-contain bg-center flex items-center justify-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      <div className='absolute top-0 left-0 w-full h-full bg-black opacity-60'></div>
      {(showContents || showReviews) && <div onClick={() => { setShowContents(false); setShowReviews(false); }} className='absolute top-0 left-0 w-full h-full z-20 bg-black opacity-70'></div>}
      {showContents && !!content && content.length > 0 && <SwipeableReviewCard showItems={setShowContents} proofs={content}></SwipeableReviewCard>}
      {showReviews && !!reviews && reviews.length > 0 && <SwipeableReviewCard showItems={setShowReviews} proofs={reviews}></SwipeableReviewCard>}
      <div className="relative z-10 text-white font-bold text-center max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
        <div className="text-md md:text-2xl mb-8">{description.map((p) => <p key={p}>{p}<br></br></p>)}</div>
        <div className='flex flex-col md:flex-row gap-4'>
        <Link href={trailerSrc} target="_blank">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center w-64 justify-center transition duration-300"
        >
          <Play size={24} className="mr-2 ml-2" />
          לצפייה בטריילר
        </button>
        </Link>
        {!!content && content.length > 0 && <button
          onClick={() => setShowContents(true)}
          className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300"
        >
          <Tv size={24} className="mr-2 ml-2" />
          ביקורות מהתעשייה
        </button>}
        {!!reviews && reviews.length > 0 && <button
          onClick={() => setShowReviews(true)}
          className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300"
        >
          <Laugh size={24} className="mr-2 ml-2" />
          המלצות
        </button>}
        </div>
      </div>
    </div>
  )
}import { useState, useRef, SetStateAction, Dispatch } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

interface Content {
  title: string
  text: string
  media: {
    type: 'image' | 'link' | 'video'
    src: string
    text?: string
    image?: string
  }
}

const defaultProofs: Content[] = [
  {
    title: "Beautiful Sunset",
    text: "Captured this amazing sunset at the beach yesterday.",
    media: {
      type: "image",
      src: "/placeholder.svg?height=500&width=500",
      text: "A beautiful sunset over the ocean"
    }
  },
  {
    title: "Interesting Article",
    text: "Check out this fascinating read about space exploration.",
    media: {
      type: "link",
      src: "https://example.com/space-article",
      text: "Space Exploration Article"
    }
  },
  {
    title: "Cute Puppy",
    text: "Watch this adorable puppy playing in the park!",
    media: {
      type: "video",
      src: "/placeholder.mp4",
    }
  }
]

function SwipeableReviewCard({ proofs = defaultProofs, showItems }: { proofs?: Content[], showItems: Dispatch<SetStateAction<boolean>> }) {
  const [currentReview, setCurrentReview] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const fullscreenRef = useRef<HTMLDivElement>(null)

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: { offset: { x: number } }) => {
    if (info.offset.x < -100 && currentReview < proofs.length - 1) {
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

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      if (fullscreenRef.current?.requestFullscreen) {
        fullscreenRef.current.requestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().then(() => {
          setIsFullscreen(false);
        });
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  const closeCard = () => {
    showItems(false);
    setCurrentReview(0)
    setDirection(-1)
  }

  const handlePrevious = () => {
    if (currentReview > 0) {
      setDirection(-1)
      setCurrentReview(currentReview - 1)
    }
  }

  const handleNext = () => {
    if (currentReview < proofs.length - 1) {
      setDirection(1)
      setCurrentReview(currentReview + 1)
    }
  }

  const renderMedia = (media: typeof proofs[0]['media']) => {
    switch (media.type) {
      case 'image':
        return (
          <div ref={fullscreenRef} className="relative">
            <Image
              src={media.src}
              alt={media.text || ''}
              width={500}
              height={500}
              draggable={false}
              className={"rounded-lg object-contain w-svw max-w-sm " + (isFullscreen ? 'h-svh ml-auto mr-auto' : 'h-96')}
            />
            <button
              className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              onClick={toggleFullscreen}
            >
              {isFullscreen ? (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"/>
                </svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <polyline points="9 21 3 21 3 15"></polyline>
                  <line x1="21" y1="3" x2="14" y2="10"></line>
                  <line x1="3" y1="21" x2="10" y2="14"></line>
                </svg>
              )}
            </button>
          </div>
        )
      case 'link':
        return (
          <Link href={media.src} target='_blank' className="w-full bg-white border-2 text-blue-600 rounded-lg h-96 flex items-center justify-center hover:underline">
            {media.image ? <Image src={media.image} alt={media.text || ''} height={200} width={100} className='h-full w-full' draggable={false} /> : media.text}
          </Link>
        )
      case 'video':
        return (
          <video width="100%" height="auto" controls className="rounded-lg">
            <source src={media.src} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )
      default:
        return null
    }
  }

  return (
    <div className="flex items-end justify-center mt-44 mb-24 absolute min-h-screen w-full h-full">
      <div className="relative w-full z-30 h-full max-w-lg mx-auto">
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
            <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-screen-md relative">
              <button
                onClick={closeCard}
                className="absolute top-0 right-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 rounded-full"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4 w-full flex justify-center">
                  {renderMedia(proofs[currentReview].media)}
                </div>
                <h2 className="text-xl font-semibold">{proofs[currentReview].title}</h2>
              </div>
              <p className="text-gray-700 mb-4 text-center">{proofs[currentReview].text}</p>
              <div className="text-sm text-gray-500 text-center">
                {currentReview + 1} / {proofs.length}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <button
          onClick={handlePrevious}
          className="hidden md:block absolute -left-2 top-1/2 transform -translate-y-1/2 -translate-x-full bg-white p-4 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          disabled={currentReview === 0}
          aria-label="Previous card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={handleNext}
          className="hidden md:block absolute -right-2 top-1/2 transform -translate-y-1/2 translate-x-full bg-white p-4 rounded-full shadow-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-400"
          disabled={currentReview === proofs.length - 1}
          aria-label="Next card"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  )
}