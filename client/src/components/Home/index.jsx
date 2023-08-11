import GENRcCarousel from "../Generic/Carusel"
import Search from "./Search"
import Carousel from "./carousel"

const Home = () => {
    return (
        <div>
            <Search />
            <Carousel />
            <GENRcCarousel title={'Yangi mahsulotlar'} />
            <GENRcCarousel title={'Mac'} />
            <GENRcCarousel title={'iPhone'} />
            <GENRcCarousel title={'iPad'} />
            <GENRcCarousel title={'Watch'} />
        </div>
    )
}

export default Home