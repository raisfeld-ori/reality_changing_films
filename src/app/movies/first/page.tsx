import Movie from '../movie';
export default function Page(){
    return <Movie title='פנתר לבן' description={[
       ' הסרט פנתר לבן מועמד לפרס הסרט הטוב ביותר באוסקר הישראלי.',
       'הסרט מציע גרסאות וסדנאות מותאמות לשכבות גיל ז–יב.',
        'הסיפור עוקב אחרי מסעו של אלכס, נער זועם ונעדר שליטה, ויחסיו עם מאמנו דוד אוחנה (אותו מגלם זאב רווח האגדי), תוך כדי מאבק בדרך לאליפות.',
       'נושאים רלוונטיים: גזענות, עלייה, זכויות אדם, יום רבין, זהות ישראלית, הכלה והשתלבות, מאבק באלימות.',
       'הסרט מומלץ על ידי מפמ"רית תחום קולנוע במשרד החינוך לשכבות גיל ז–יב.'
    ]} extraFile='/content4.pdf' fileTitle='מערך שיעור מצולם עם שלום אסייג' trailerSrc='/whitepanthertrailer.mp4' content={[
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
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (1).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (2).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (3).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (4).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (5).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (6).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (7).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (8).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (9).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/moremessagesRAH (10).png', text: 'לצפייה בכתבה', image: ''},
        },
    ]}
        backgroundImageSrc='/whitepanther.jpg'></Movie>
}