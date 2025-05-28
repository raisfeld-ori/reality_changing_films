"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-coverflow"

const images = [
  {
    src: "/reccomendation (1).jpg",
    title: "המלצה #1",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (2).jpg",
    title: "המלצה #2",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (3).jpg",
    title: "המלצה #3",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (4).jpg",
    title: "המלצה #4",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (5).jpg",
    title: "המלצה #5",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (6).jpg",
    title: "המלצה #6",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (7).jpg",
    title: "המלצה #7",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (8).jpg",
    title: "המלצה #8",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (9).jpg",
    title: "המלצה #9",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
  {
    src: "/reccomendation (10).jpg",
    title: "המלצה #10",
    description: "כאן יש תיאור לאדם שהמליץ",
  },
]

export default function SwipeGallery() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-gray-300 text-lg">צפו בהמלצות השונות, השתמשו באצבע או בעכבר בשביל להחליף בין המלצות</p>
        </div>

        {/* Swiper Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            loop={true}
            grabCursor={true}
            className="w-full h-[600px]"
            breakpoints={{
              640: {
                slidesPerView: 1.2,
              },
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full bg-white rounded-2xl shadow-2xl overflow-hidden group">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{image.title}</h3>
                      <p className="text-gray-200">{image.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110">
            <ChevronLeft size={24} />
          </button>

          <button className="swiper-button-next-custom absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-3 rounded-full transition-all duration-200 hover:scale-110">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }
        
        .swiper-pagination-bullet-active {
          background: white;
        }
        
        .swiper-pagination {
          bottom: 20px !important;
        }
        
        .swiper-slide {
          transition: transform 0.3s ease;
        }
        
        .swiper-slide-active {
          transform: scale(1.05);
        }
      `}</style>
    </div>
  )
}
