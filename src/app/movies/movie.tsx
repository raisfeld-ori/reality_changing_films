'use client'

import Link from 'next/link'
import { Play } from 'lucide-react'

interface MovieShowcaseProps {
  title: string
  description: string[]
  trailerSrc: string
  backgroundImageSrc: string
}

export default function MovieShowcase({
  title = "Interstellar",
  description = ["A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."],
  trailerSrc = "https://www.example.com/interstellar-trailer.mp4",
  backgroundImageSrc = "https://example.com/interstellar-background.jpg"
}: MovieShowcaseProps) {
  return (
    <div 
      className="relative w-full h-screen bg-contain bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImageSrc})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      
      <div className="relative z-10 text-white text-center max-w-4xl px-4 flex flex-col items-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4">{title}</h1>
        <p className="text-lg md:text-xl mb-8">{description.map((p) => <p key={p}>{p}<br></br></p>)}</p>
        <Link href={trailerSrc} target="_blank">
        <button
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-full flex items-center justify-center transition duration-300"
        >
          <Play size={24} className="mr-2" />
          צפייה
        </button>
        </Link>
      </div>
    </div>
  )
}