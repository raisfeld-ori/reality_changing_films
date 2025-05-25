"use client"

import { Play, Users, Award, Star, ArrowLeft, Globe } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"
import Explanation from "./workshops/Explanation";
import ImageCarousel from "./workshops/Carousel";

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

// Custom Button Component
interface ButtonProps {
  children: ReactNode
  size?: "default" | "lg"
  variant?: "default" | "outline"
  className?: string
  onClick?: () => void
}

function CustomButton({ children, size = "default", variant = "default", className = "", onClick }: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"

  const sizeClasses = {
    default: "h-10 py-2 px-4",
    lg: "h-11 px-8 py-3 text-lg",
  }

  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
  }

  return (
    <button className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

// Custom Card Components
interface CardProps {
  children: ReactNode
  className?: string
}

interface CardContentProps {
  children: ReactNode
  className?: string
}

function CustomCard({ children, className = "" }: CardProps) {
  return <div className={`rounded-lg border bg-white shadow-sm ${className}`}>{children}</div>
}

function CustomCardContent({ children, className = "" }: CardContentProps) {
  return <div className={`p-6 ${className}`}>{children}</div>
}

export default function Page() {
  const router = useRouter();
  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-blue-50 to-white font-sans">
      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  קולנוע
                  <span className="text-blue-600"> משנה </span>
                  מציאות
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
הסרטים הכי נצפים ופופולריים בחטיבות ובתיכונים בישראל. עוסקים בנושא חרם, גזענות, אלימות, השואה ועוד.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <CustomButton size="lg" className="bg-blue-600 hover:bg-blue-700 text-white" onClick={() => router.push("/movies")}>
                  <Play className="ml-2 h-5 w-5" />
                  צפייה בפעילויות
                </CustomButton>
                <CustomButton variant="outline" size="lg" onClick={() => router.push("/about")}>
                  למדו עוד עלינו
                  <ArrowLeft className="mr-2 h-5 w-5" />
                </CustomButton>
              </div>
              <div className="flex items-center gap-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10+</div>
                  <div className="text-sm text-gray-600">שנים של ניסיון</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">97</div>
                  <div className="text-sm text-gray-600">במשובים ובגפן</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">בתי ספר בשנה</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Link href={"/movies"}>
                <Image
                  src="/contact.jpg"
                  alt=""
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                </Link>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Film Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">הסרטים הכי נצפים בחטיבות וסרטונים</h2>
            <h3 className="text-lg text-gray-600">תלחצו על סרט בשביל ללמוד עוד</h3>
          </div>

          <div className="grid gap-12 items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 min-w-full gap-6">
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
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">ההשפעה שלנו על החינוך</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              ראו כיצד הסרטים החינוכיים שלנו עושים הבדל אמיתי בכיתות ובקהילות ברחבי העולם.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <CustomCard className="text-center p-8 border-0 shadow-lg">
              <CustomCardContent className="space-y-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">1.2M+</h3>
                <p className="text-gray-600">תלמידים שהושפעו</p>
                <p className="text-sm text-gray-500">השפעה משמעותיתה בתוכן חינוכי ובהשפעה חברתית</p>
              </CustomCardContent>
            </CustomCard>

            <CustomCard className="text-center p-8 border-0 shadow-lg">
              <CustomCardContent className="space-y-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">15</h3>
                <p className="text-gray-600">פרסים שזכינו</p>
                <p className="text-sm text-gray-500">הכרה במצוינות בתוכן חינוכי ובהשפעה חברתית</p>
              </CustomCardContent>
            </CustomCard>

            <CustomCard className="text-center p-8 border-0 shadow-lg">
              <CustomCardContent className="space-y-4">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">5</h3>
                <p className="text-gray-600">פעילויות</p>
                <p className="text-sm text-gray-500">הסרטים שלנו משמשים במערכות חינוך ברחבי הגלובוס</p>
              </CustomCardContent>
            </CustomCard>
          </div>
        </div>
      </section>

            <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="mx-auto flex flex-col mt-60 h-screen items-stretch justify-center md:flex-row md:mt-0">
            <ImageCarousel />
            <Explanation />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 md:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">מה אומרים המחנכים</h2>
            <p className="text-xl text-gray-600">שמעו ממורים והורים שראו את ההשפעה החיובית של הסרטים שלנו</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <CustomCard className="p-6 border-0 shadow-lg">
              <CustomCardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  &quot;הסרטים האלה שינו את הדרך שבה התלמידים שלי חושבים על גיוון. השיחות שאנחנו מנהלים אחרי הצפייה הן
                  מדהימות.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold">שמ</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">שרה מרטינז</div>
                    <div className="text-sm text-gray-600">מורה לכיתה ה&quot;, בית ספר לינקולן</div>
                  </div>
                </div>
              </CustomCardContent>
            </CustomCard>

            <CustomCard className="p-6 border-0 shadow-lg">
              <CustomCardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  &quot;כהורה, אני מעריך איך הסרטים האלה עוזרים לילדים שלי להבין נושאים חברתיים מורכבים בצורה מתאימה לגיל.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 font-semibold">דג</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">דוד ג&quot;ונסון</div>
                    <div className="text-sm text-gray-600">הורה וחבר מועצת בית הספר</div>
                  </div>
                </div>
              </CustomCardContent>
            </CustomCard>

            <CustomCard className="p-6 border-0 shadow-lg">
              <CustomCardContent className="space-y-4">
                <div className="flex items-center space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  &quot;האיכות והערך החינוכי של הסרטים האלה יוצאי דופן. הם כעת חלק מתוכנית הלימודים הליבה שלנו.&quot;
                </p>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                    <span className="text-purple-600 font-semibold">רח</span>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">ד&quot;ר רחל חן</div>
                    <div className="text-sm text-gray-600">מנהלת תוכנית לימודים, בתי ספר מטרו</div>
                  </div>
                </div>
              </CustomCardContent>
            </CustomCard>
          </div>
        </div>
      </section>
    </div>
  )
}
