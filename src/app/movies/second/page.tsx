import Movie from '../movie';
export default function Page(){
    return <Movie title='אל תחכי לי' description={[
        "הסיפור מגולל את גאולתו של מתן, נער המנסה לשרוד בשכונת מצוקה לאחר שמשפחתו פשטה את הרגל.",
        "הסרט מבוסס על סיפור ילדותו של הבמאי דני רייספלד.",
        "נושאים עיקריים: מאבק באלימות, זהות ישראלית, זכויות אדם, יום רבין, הכלה והשתלבות, קבלת החלטות, המעבר מחטיבה לתיכון, חוסן אישי והתמודדות עם אתגרים.",
        "הסרט מציע גרסאות וסדנאות מותאמות לשכבות גיל ט'-יב.",
        "מומלץ על ידי שרת החינוך, ד'ר יפעת שאשא-ביטון."
      ]} extraFile='/content2.pdf' trailerSrc='https://vimeo.com/1028010416?share=copy' reviews={[
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
    ]} content={[
    {
        title: 'ערב טוב עם גי פינס',
        text: 'מתוך ערב טוב עם גאי פינס',
        media: {type: 'link', src: 'https://vimeo.com/914129830?share=copy', text: '', image: '/name.png'},
    },
    {
        title: 'כתבו לנו מורים ותלמידים',
        text: 'חלק ממאות ההודעות שאנחנו מקבלים',
        media: {type: 'image', src: '/dontwaitformereview (3).png', text: 'לצפייה בכתבה', image: ''},
    },
    {
        title: 'ביקורת על הסרט',
        text: '',
        media: {type: 'link', src: 'https://www.seret.co.il/critics/moviereviews.asp?id=2754', text: '', image: '/introreviewidkrah (1).png'},
    },
    {
        title: 'כתבו על הסרט והפעילות שלנו',
        text: "מתוך הקרנה ופעילות בבין תחומי בצפת",
        media: {type: 'image', text: '', src: '/katavawow.png'},
    }
    ]}
        backgroundImageSrc='/dontwaitforme.jpg'></Movie>
}