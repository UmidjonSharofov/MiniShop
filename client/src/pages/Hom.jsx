import GENRcCarousel from "../components/Generic/Carusel"
import Search from "../components/Home/Search"
import Carousel from "../components/Home/carousel"

export const Home = () => {
    return (
        <div>
            <Carousel />
            <Search />
            <GENRcCarousel title={'Yangi mahsulotlar'} />
            <GENRcCarousel title={'Mac'} />
            <GENRcCarousel title={'iPhone'} />
            <GENRcCarousel title={'iPad'} />
            <GENRcCarousel title={'Watch'} />
        </div>
    )
}
