'use client'

import Image from "next/image"
import { useState } from "react"

type MediaItem = {
  name: string;
  mediaUrl: string;
  type: 'image' | 'video';
}

function generateFakeData(count: number): MediaItem[] {
  const items: MediaItem[] = [];
  for (let i = 0; i < count; i++) {
    const isImage = Math.random() > 0.3; // 70% chance of being an image
    items.push({
      name: isImage ? `Image ${i + 1}` : `Video ${i + 1}`,
      mediaUrl: isImage 
        ? `/image (${i + 1}).jpg` 
        : `/movie clip ${i + 1}.mp4`,
      type: isImage ? 'image' : 'video'
    });
  }
  return items;
}

export default function MediaGalleryPage() {
  const [mediaItems] = useState(() => generateFakeData(12)); // Generate 12 fake items

  return (
    <div className="min-h-screen bg-white">
        <div className="max-w-7xl mt-10 mx-auto py-6 sm:px-2 lg:px-3">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {mediaItems.map((item, index) => (
                <div key={index} className="bg-white border border-blue-200 rounded-lg overflow-hidden shadow-md">
                  <div className="p-4">
                    <h2 className="text-xl text-center font-semibold text-blue-600 mb-2">{item.name}</h2>
                  </div>
                  <div className="px-4 pb-4">
                    {item.type === 'image' ? (
                      <Image
                        src={item.mediaUrl}
                        alt={item.name}
                        width={300}
                        height={200}
                        className="w-full h-64 object-cover rounded-md"
                      />
                    ) : (
                      <video
                        src={item.mediaUrl}
                        controls
                        className="w-full h-64 object-cover rounded-md"
                      >
                        Your browser does not support the video tag.
                      </video>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  )
}