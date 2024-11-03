"use client"

import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-8">
          סדנאות אודישנים ומשחק מול מצלמה
        </h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
          הסדנה מציע למשתתפים חוויה של יצירתיות והבעת ביטחות עצמי דרך משחק.
          לכל הקרנה אנחנו מגיעים עם מצלמת קולנוע וציוד מקצועי.
          התלמידים עולים על הבמה ומייצרים סצנות מהחיים והדילמות שמצטלמים מול הקהל.
          נושאים של חרם, קבלת החלטות, לחץ חברתי, ועוד (בתיאום עם בית הספר).
          בסיום הסדנה הסצנות מוקרנות על המסך הגדול לצלילי מחיאות הכפיים ועותקים נשארים בבית הספר לשלוח להורים.
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