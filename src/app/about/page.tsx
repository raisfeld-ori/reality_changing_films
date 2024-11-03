import Image from "next/image"
import dani from './dani.jpg';
import hila from './hila2.jpg';
import raz from './raz.jpg';
import yavgani from './yavgani.jpg';

export default function AboutUs() {
  const teamMembers = [
    {
      name: "דני ריספלד",
      role: "במאי קולנוע",
      description: "במאי סרטי קולנוע ותסריטאי בעל תואר שני וניסיון רב בתחום החינוך בין סרטיו \"פנתר לבן\" \"אל תחכי לי\" \"אמצע החיים\" בכיכובם של צחי הלוי ושלום אסייג- יוצא לקולנוע בשנת 2024. ראש המסלול לתקשורת וקולנוע במכללת כנרת לשעבר ומרצה במכללות ספיר ואוניברסיטת אריאל. בעשור האחרון מרצה בבתי ספר עם סרטיו במסגרת המאבק באלימות וגזענות של בני נוער.",
      imageUrl: dani,
    },
    {
      name: "הילה ריספלד",
      role: "תסריטאית ומנהלת השיווק",
      description: "אני מאמינה שסרט קולנוע הוא אמצעי לעורר שיח איכותי סביב נושאים חברתיים בוערים ולכן כל הכתיבה והעשייה שלי היא למען הנוער .  פיתחנו את סרטי הקולנוע בכדי לזכות בחברה טובה יותר וסבלנית. מעבר להיותי תסריטאית ומפיצה אני גם אשתו של דני רייספלד במאי הסרטים",
      imageUrl: hila,
    },
    {
      name: "רז מזרחי",
      role: "שחקן ראשי, אל תחכי לי",
      description: "'חברות' - עונה 3 בתפקיד שלומי 'נאפס'-HOT -בתפקיד בן אלפסי 'בני אור' - בתפקיד מסו 'אל תחכי לי' בתפקיד ציון כהן 'לאהוב את צ'רלי בתפקיד איציק השבדי",
      imageUrl: raz,
    },
    {
      name: "יבגני אורלוב",
      role: "שחקן ראשי, פנתר לבן",
      description: "שחקן קולנוע בסרט פנתר לבן מרצה ומוביל סדנאות משחק. כנער בסיכוי שעבר את המסע כעולה חדש זועם להשתלבות מלאה בחברה הישראלית . ההרצאות שלי מלוות בהומור ויחס אישי לכל תלמיד.",
      imageUrl: yavgani,
    },
  ]

  return (
    <div className="container mx-auto px-4 py-20">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">קולנוע משנה מציאות</h1>
      <p className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto">
        הסרטים הכי נצפים בחטיבות ותיכונים בישראל. <br></br><br></br>
        לכל סרט מערך שעור וגרסה מותאמת וערוכה לפי שכבת גיל (ז-יב). <br></br><br></br>
        לאחר כל הקרנה נערכת סדנת משחק מול מצלמה ואודישנים להעברת המסר והגברת העניין של התלמידים.<br></br><br></br>
        לצד המסרים החזקים של מאבק באלימות, גזענות חרם, חוסן וזהות ישראילית אנו מצליחים כל פעם לייצר פעילות שהיא גם כיף גדול וגם ריגוש לתלמידים ולמורים.
      </p>

      <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">תכירו אותנו</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <Image
              src={member.imageUrl}
              alt={member.name}
              width={400}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{member.role}</p>
              <p className="text-sm text-gray-700" dir="rtl">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}