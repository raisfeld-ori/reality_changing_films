import ImageCarousel from "./Carousel";
import Explanation from './Explanation';

export default function Page() {
    return (
        <div className="page mx-auto flex h-svh flex-row items-stretch justify-center overflow-hidden">
            <ImageCarousel />
            <Explanation />
        </div>
    );
}
