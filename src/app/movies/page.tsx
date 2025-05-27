import Image from "next/image"
import Link from "next/link"
import Explanation from "../workshops/Explanation";
import ImageCarousel from "../workshops/Carousel";

const movies = [
    {
    id: 2,
    title: "פנתר לבן",
    genre: "נושאים: גזענות, בחירות, ישראליות, קבלת האחר",
    content: "בכיכובו של השחקן האגדי זאב רווח",
    link: "first",
    image: "/whitepanther.jpg"
  },
    {
    id: 3,
    title: "(גרסה חדשה 2025) אל תחכי לי",
    genre: "נושאים: לקיחת אחריות, קבלת החלטות, מניעת אלימות, התמודדות עם חרם ולחץ חברתי",
    content: "בכיכובם של עומר חזן, עינת שרוף, טיילור מלכוב ואורי גבריאל",
    link: "second",
    image: "/dontwaitforme.jpg"
  },
      {
    id: 1,
    title: "אמצע החיים",
    genre: "מתאים גם לפעילות חדר מורים כולל סדנה מעוררת השראה",
    content: "חדש מהקולנוע! בכיכובם של שלום אסייג, צחי הלבי, חן אמסלם, יניב סוויסה (קופה ראשית)",
    link: "third",
    image: "/middlelife.jpg"
  },
  {
    id: 4,
    title: "פעילות יום השואה",
    genre: "נושאים: יום השואה, גזענות, ישראליות, תקומה",
    content: "חדש! כולל ציורי אנימציה ופעילות סדנת משחק",
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
                    {movie.content}
                  </p>
                  <p className="text-gray-500 text-xs mb-2">{movie.genre}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>
                        <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
              <div className="mx-auto flex flex-col mt-60 h-screen items-stretch justify-center md:flex-row md:mt-0">
                  <ImageCarousel />
                  <div>
                    <h2 className="text-xl md:text-2xl font-bold text-gray-900 text-center mb-4">חדש! סדנאות קבועות או חד פעמיות</h2>
                    <Explanation />
                  </div>
              </div>
            </section>
    </div>
  )
}
