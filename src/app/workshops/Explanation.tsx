"use client"

import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-600 mb-8">
          סדנאות אודישנים ומשחק מול מצלמה
        </h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-lg md:text-2xl text-gray-700 leading-relaxed mb-12">
        הסדנה מציעה למשתתפים חוויה יצירתית שמבוססת על ביטוי עצמי דרך משחק. לכל הקרנה אנו מביאים מצלמת קולנוע וציוד מקצועי. התלמידים עולים על הבמה ומבצעים סצנות שמתארות מצבים מהחיים והדילמות האישיות שלהם, כאשר הם מצולמים מול הקהל. נושאים כמו חרם, קבלת החלטות, לחץ חברתי ועוד (בהתאם להסכמה עם בית הספר) נבחנים במהלך הסדנה. בסופה, הסצנות מוקרנות על מסך גדול לצלילי מחיאות הכפיים, ועותקים נמסרים לבית הספר כדי לשלוח להורים.
        </p>
        <div className="flex flex-col md:flex-row justify-center items-center">
        <Link href={'/contact'}
          className="px-8 py-3 bg-blue-600 text-white text-lg mb-5 md:mb-0 md:mr-5 md:ml-5 font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-opacity-50"
        >
          דברו איתנו
        </Link>
        <a href="/content3.pdf" target="_blank" className="px-8 py-3 bg-purple-500 text-white text-lg font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50">
          סרטון סיכום 2025
        </a>
        </div>
      </div>
    </div>
  )
}