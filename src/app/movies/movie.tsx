'use client'

import Link from 'next/link'
import { Laugh, Play, Tv,  } from 'lucide-react'

export interface Content {
  title: string
  text: string
  media: { type: 'image' | 'video' | 'link', src: string, text: string, image?: string }
}

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
      className="relative w-full h-screen bg-contain bg-center flex items-center justify-center overflow-x-hidden"
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      {showContents && !!content && content.length > 0 && <SwipeableReviewCard proofs={content}></SwipeableReviewCard>}
      {showReviews && !!reviews && reviews.length > 0 && <SwipeableReviewCard proofs={reviews}></SwipeableReviewCard>}
      {(showContents || showReviews) && <div onClick={() => {setShowContents(false); setShowReviews(false);}} className='w-svw h-svh bg-black opacity-50 absolute z-20'></div>}
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative z-10 text-white text-center max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8">{description.map((p) => <p key={p}>{p}<br></br></p>)}</p>
        <div className='flex flex-row gap-4'>
        <Link href={trailerSrc} target="_blank">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300"
        >
          <Play size={24} className="mr-2" />
          לצפייה בטריילר
        </button>
        </Link>
        {!!content && content.length > 0 && <button
          onClick={() => setShowContents(true)}
          className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300"
        >
          <Tv size={24} className="mr-2 ml-2" />
          מן התקשורת
        </button>}
        {!!reviews && reviews.length > 0 && <button
          onClick={() => setShowReviews(true)}
          className="bg-blue-800 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300"
        >
          <Laugh size={24} className="mr-2" />
          המלצות
        </button>}
        </div>
      </div>
    </div>
  )
}

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

function SwipeableReviewCard({ proofs }: { proofs: Content[] }) {
  const [currentReview, setCurrentReview] = useState(0)
  const [direction, setDirection] = useState(0)

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

  const renderMedia = (media: typeof proofs[0]['media']) => {
    switch (media.type) {
      case 'image':
        return (
          <Image
            src={media.src}
            alt={media.text}
            width={500}
            height={500}
            draggable={false}
            className="rounded-lg object-contain h-1/2 max-w-72"
          />
        )
      case 'link':
        return (
          <Link href={media.src} target='_blank' className="h-1/2 w-full bg-white border-2 border-blue-600 text-blue-600 rounded-lg flex items-center justify-center hover:underline">
            {media.image ? <Image src={media.image} alt={media.text} height={200} width={100} className='h-full w-full' draggable={false} /> : media.text}
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
    <div className="flex items-center justify-center absolute min-h-screen w-full">
      <div className="relative w-full h-full z-30 max-w-md mx-auto">
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
            <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-sm mt-20">
              <div className="flex flex-col items-center mb-4">
                <div className="mb-4 w-full flex justify-center">
                  {renderMedia(proofs[currentReview].media)}
                </div>
                <h2 className="text-xl font-semibold">{proofs[currentReview].title}</h2>
              </div>
              <p className="text-gray-700 mb-4 text-center">{proofs[currentReview].text}</p>
              <div className="text-sm text-gray-500 text-center">
                <p className="mt-2">
                  {currentReview + 1} / {proofs.length}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}