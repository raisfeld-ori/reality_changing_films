import Movie from '../movie';
export default function Page(){
    return <Movie title='פנתר לבן' description={[
    'מועמד לפרס הסרט הטוב ביותר באוסקר הישראלי.',
    'גרסאות וסדנאות מותאמות שכבת גיל ז-יב',
    ' סרט המספר את המסע לאליפות של אלקס, נער זועם וכועס ושל המאמן שלו דוד אוחנה (זאב רווח האגדי)',
    'הנושאים והימים להם הוא מתאים: גזענות, עלייה, זכויות אדם, יום רבין, זהות ישראלית, הכלה והשתלבות, מאבק באלימות.',
    'המלצת מפמ"רית תחום קולנוע משרד החינוך לשכבות ז-יב'
    ]} trailerSrc='/whitepanthertrailer.mp4' reviews={[
        {
            title: 'המלצות לפנתר לבן',
            text: '',
            media: {type: 'image', src:'/whitepantherreccomended.png', text: ''},
        }
    ]}
        backgroundImageSrc='/whitepanther.jpg'></Movie>
}