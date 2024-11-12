import Movie from '../movie';
export default function Page(){
    return <Movie title='אמצע החיים' description={[
        'סרט חברתי בכיכובם של צחי הלוי, שלום אסייג, חן אמסלם, יניב סויסה (קופה ראשית).',
        'סיפור על ישראליות, אחדות, אהבה, תשוקה, ואמונה הסוחפת אותך באמצע החיים.',
        "נושאים: זהות ישראלית, מיניות בריאה, קבחת החלטות, אמונה וחוסן",
        "גרסאות וסדנאות מותאמות שכבת גיל י-יב",
    ]} trailerSrc='/middlelifetrailer.mp4' newMovie={true} content={[
        {
            title: 'כתבה מ' + "Ynet",
            text: 'לחצו על התמונה בשביל ללמוד עוד',
            media: {type: 'link', src: 'https://www.ynet.co.il/entertainment/article/hkdxgk007a', image: '/ynetreview.png'}
        },
        {
            title: 'כתבה מ' + "רשת 13",
            text: 'לחצו על התמונה בשביל ללמוד עוד',
            media: {type: 'link', src: 'https://13tv.co.il/item/entertainment/cinema/hkd1j-904067224/', image: '/middlelife.jpg'}
        },
        {
            title: "מאחורי הקלעים",
            text: 'לחצו על התמונה בשביל ללמוד עוד',
            media: {type: 'link', src: 'https://www.youtube.com/watch?v=aOGXWzbEbZ0', image: '/behindthescenes.png'}
        },
    ]}
        backgroundImageSrc='/middlelife.jpg'></Movie>
}