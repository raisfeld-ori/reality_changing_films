import Movie from '../movie';
export default function Page(){
    return <Movie title='פנתר לבן' description={[
    'מועמד לפרס הסרט הטוב ביותר באוסקר הישראלי.',
    'גרסאות וסדנאות מותאמות שכבת גיל ז-יב',
    ' סרט המספר את המסע לאליפות של אלקס, נער זועם וכועס ושל המאמן שלו דוד אוחנה (זאב רווח האגדי)',
    'הנושאים והימים להם הוא מתאים: גזענות, עלייה, זכויות אדם, יום רבין, זהות ישראלית, הכלה והשתלבות, מאבק באלימות.',
    'המלצת מפמ"רית תחום קולנוע משרד החינוך לשכבות ז-יב'
    ]} trailerSrc='/whitepanthertrailer.mp4' content={[
        {
            title: 'המלצות לפנתר לבן',
            text: '',
            media: {type: 'image', src:'/whitepantherreccomended.png', text: ''},
        },
        {
            title: 'ביקורת מ' + "Ynet",
            text: '',
            media: {type: 'image', src: '/adReview.JPG', text: ''},
        },
        {
            title: 'לינק לכתבה מהחדשות',
            text: 'לחץ על הכתבה בשביל לראות',
            media: {type: 'link', src: 'https://vimeo.com/460178007?share=copy', text: 'לצפייה בכתבה', image: '/videoReviewIntro.png'},
        }
    ]} reviews={[
        {
            title: 'המלצת מפמ"רית',
            text: "המלצת מפקחת תחום קולנוע משרד החינוך",
            media: {type: 'image', src: '/recommendedbymafmar.png', text: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/studenreview1.png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/teacherreview.png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/morereviewyipee.png', text: 'לצפייה בכתבה', image: ''},
        }
    ]}
        backgroundImageSrc='/whitepanther.jpg'></Movie>
}