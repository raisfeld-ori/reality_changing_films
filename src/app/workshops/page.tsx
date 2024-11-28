import ImageCarousel from "./Carousel";
import Explanation from './Explanation';

export default function Page() {
    return (
        <div className="mx-auto flex flex-col mt-60 h-screen items-stretch justify-center md:flex-row md:mt-0">
            <ImageCarousel />
            <Explanation />
        </div>
    );
}
