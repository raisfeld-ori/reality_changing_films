import Movie from '../movie';
export default function Page(){
    return <Movie title='אמצע החיים' description={[
        'סרט חברתי בכיכובם של צחי הלוי, שלום אסייג, חן אמסלם, יניב סויסה (קופה ראשית).',
        'סיפור על ישראליות, אחדות, אהבה, תשוקה, ואמונה הסוחפת אותך באמצע החיים.',
        "נושאים: זהות ישראלית, מיניות בריאה, קבחת החלטות, אמונה וחוסן",
        "גרסאות וסדנאות מותאמות שכבת גיל י-יב",

    ]} trailerSrc='/middlelifetrailer.mp4' content={[{
        title: 'סרט פנתר לבן',
        media: {type: 'image', src:'/whitepanther1.jpg', text: ''},
        text: 'סרט פנתר לבן לחצו לכפתור הסרט לפרס סרטי הטוב ביותר באוסקר הישראלי.'
        
    }]}
        backgroundImageSrc='/middlelife.jpg'></Movie>
}