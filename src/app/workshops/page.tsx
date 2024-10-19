import ImageCarousel from "./Carousel";
import Explanation from './Explanation';

export default function Page() {
    return (
        <div className="mx-auto flex flex-col h-screen items-stretch justify-center overflow-hidden md:flex-row">
            <ImageCarousel />
            <Explanation />
        </div>
    );
}
