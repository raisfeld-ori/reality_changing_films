import Movie from '../movie';
export default function Page(){
    return <Movie title='אמצע החיים' description={[
        'סרט חברתי בכיכובם של צחי הלוי, שלום אסייג, חן אמסלם, יניב סויסה (קופה ראשית).',
        'סיפור על ישראליות, אחדות, אהבה, תשוקה, ואמונה הסוחפת אותך באמצע החיים.',
        "נושאים: זהות ישראלית, מיניות בריאה, קבחת החלטות, אמונה וחוסן",
        "גרסאות וסדנאות מותאמות שכבת גיל י-יב",

    ]} trailerSrc='/middlelifetrailer.mp4' 
        backgroundImageSrc='/middlelife.jpg'></Movie>
}