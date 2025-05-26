import Movie from '../movie';
export default function Page(){
    return <Movie title='יום השואה' description={[
        "סיפור אמיתי על נער ששרד 4 שנים באושביץ.",
        "סיפור מרתק, מרגש ומצחיק מלווה בסרטוני אנימציה ותמונות קומיקס מקוריים שהופקו למען הפעילות.",
        "מתקימת גם סדנת משחק בנושא גזענות",
        "הפעילות עברה בהצלחה בחטיבות רבות, התלמידים חוו חוויה שרתקה אותם ורגשה אותם."
    ]} extraFile='/content4.pdf' trailerTitle='צפייה בסרטון דוגמה' trailerSrc='/whitepanthertrailer.mp4' content={[
    ]} backgroundImageSrc='/shoaa2.png'></Movie>
}