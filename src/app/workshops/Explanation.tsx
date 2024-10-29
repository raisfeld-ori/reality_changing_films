"use client"

import Link from "next/link"

export default function Component() {
  return (
    <div className="w-full bg-white flex items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-blue-600 mb-8">
          סדנאות קולנוע ומשחק
        </h1>
        <div className="h-1 w-32 bg-blue-600 mx-auto mb-8"></div>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-12">
        פעילות משמעותית ומרגשת לנוער יחד עם 
במאי ושחקנים מקצועיים

במהלך הסדנה, הנערים והנערות מקבלים הזדמנות לחוות ולשחק בסצנות המתמקדות בדילמות חברתיות ואישיות קשות שהם עלולים להתמודד איתן בחיים. 

הסדנה מציעה למשתתפים חוויה של יצירתיות והבעת הערך עצמי דרך משחק.
ובנוסף היא מעניקה כלים חשובים לאנשי החינוך להעביר מסרים עמוקים והשקפה על התנהגות חברתית והתמודדות עם קשיים. 
כאשר הסצנות מוצגות בפני קהל וניתן פידבק חיובי בצורת מחיאות כפיים, נוצרת תחושת גאווה והערכה בקרב המשתתפים, מה שיכול להביא לחיזוק עצמי ולהנחותם לשפוט עצמם באופן חיובי.

בסיום הסדנה בית הספר יקבל את הסרטונים
של התלמידים ביום הקרנות מיוחד
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