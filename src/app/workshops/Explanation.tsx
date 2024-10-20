"use client"

import Link from "next/link"

export default function Component() {
  return (
    <div className="min-h-screen w-full bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-8">
          סדנאות קולנוע ומשחק
        </h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae libero ullam illum aperiam! Perferendis, necessitatibus repellat corrupti aperiam omnis, corporis eius, labore exercitationem totam qui odio itaque aliquid libero temporibus?
        </p>
        <Link href={'/contact'}
          className="px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          דברו איתנו
        </Link>
      </div>
    </div>
  )
}