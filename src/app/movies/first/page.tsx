import Movie from '../movie';
export default function Page(){
    return <Movie title='פנתר לבן' description={[
    'מועמד לפרס הסרט הטוב ביותר באוסקר הישראלי.',
    'גרסאות וסדנאות מותאמות שכבת גיל ז-יב',
    ' סרט המספר את המסע לאליפות של אלקס, נער זועם וכועס ושל המאמן שלו דוד אוחנה (זאב רווח האגדי)',
    'הנושאים והימים להם הוא מתאים: גזענות, עלייה, זכויות אדם, יום רבין, זהות ישראלית, הכלה והשתלבות, מאבק באלימות.',
    'המלצת מפמ"רית תחום קולנוע משרד החינוך לשכבות ז-יב'
    ]} trailerSrc='/whitepanthertrailer.mp4' content={[{
        title: 'סרט פנתר לבן',
        media: {type: 'image', src:'/whitepanther1.jpg', text: ''},
        text: 'סרט פנתר לבן לחצו לכפתור הסרט לפרס סרטי הטוב ביותר באוסקר הישראלי.'
        
    }]}
        backgroundImageSrc='/whitepanther.jpg'></Movie>
}