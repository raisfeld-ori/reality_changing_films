import Image from "next/image"
import Link from "next/link"

const movies = [
  {
    id: 1,
    title: "פנתר לבן",
    year: 2013,
    genre: "גזענות, אחדות, ספורט",
    duration: "שעתיים",
    link: "first",
    image: "/whitepanther.jpg"
  },
  {
    id: 2,
    title: "אמצע החיים",
    year: 2024,
    genre: "דת, רוחניות, התמודדות עם קשיים",
    duration: "שעתיים",
    link: "third",
    image: "/middlelife.jpg"
  },
  {
    id: 3,
    title: "אל תחכי לי",
    year: 2021,
    genre: "נוער, לקחת אחריות",
    duration: "שעתיים",
    link: "second",
    image: "/dontwaitforme.jpg"
  },
  {
    id: 4,
    title: "יום השואה",
    year: 2025,
    genre: "שואה",
    duration: "שעתיים",
    link: "fourth",
    image: "/shoaa2.png"
  }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 mt-20">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Movies Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
            <Link key={movie.id} href={`/movies/${movie.link}`} className="group cursor-pointer">
              <div className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                {/* Movie Poster */}
                <div className="relative aspect-[2/3] overflow-hidden">
                  <Image
                    src={movie.image}
                    alt={movie.title}
                    width={300}
                    height={450}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Movie Info */}
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-1 group-hover:text-red-600 transition-colors">
                    {movie.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-2">
                    {movie.year} • {movie.duration}
                  </p>
                  <p className="text-gray-500 text-xs mb-2">נושאים: {movie.genre}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </div>
  )
}
