import Movie from '../movie';
export default function Page(){
    return <Movie title='אל תחכי לי' description={[
        "סרט חברתי מסחרי לנוער, בכיכובים של הנוער עומר חזן, טיילו מלכוב ואורי גבריאל ועינת שרוף",
        "סרט המספר סיפור גאולה על נער שמנסה לשרוד בשכונת מצוקה עליה הגיע אחרי שמפחתו פשטה את הרגל",
        "מבוסס על סיפור אמיתי.",
        "נושאים: מאבק באלימות, זהות ישראלית, זכויות אדם, יום רבין, הכלה והשלבות קבלת החלטות, מעברים (חטיבה לתיכון), חוסן והתמודדות",
        "גרסאות וסדנאות מותאמות שכבת גיל ט-יב",
        "הומלץ על ידי שרת החינוך ד\"ר יפעת שאשא ביטון"
    ]} trailerSrc='/dontwaitformevideo.mp4' reviews={[
        {
            title: 'המלצת שרת החינוך',
            text: "דוקטור יפעת שאשא ביטון",
            media: {type: 'image', src: '/reccomendedsaratchinoch.png', text: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/dontwaitformereview.png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/dontwaitformereview (1).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/dontwaitformereview (2).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/dontwaitformereview (3).png', text: 'לצפייה בכתבה', image: ''},
        },
        {
            title: 'כתבו לנו מורים ותלמידים',
            text: 'חלק ממאות ההודעות שאנחנו מקבלים',
            media: {type: 'image', src: '/dontwaitformereview (4).png', text: 'לצפייה בכתבה', image: ''},
        },
    ]}
        backgroundImageSrc='/dontwaitforme.jpg'></Movie>
}