import axios from "axios"
import { useEffect, useState, } from "react"
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { AiOutlineHeart } from 'react-icons/ai'
import { TiExport } from 'react-icons/ti'
import { FcLike } from 'react-icons/fc'
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { priceToString } from "../../utils/variable";
import Button from '../Generic/Button'

// Import Swiper styles FcLike
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './style.scss'
import ProductCarusel from "../ProductCarusel";
import { addItem, decrement, increment } from "../../redux/features/shop";
import { addToLike, removeItem } from "../../redux/features/like";


// import required modules

const Product = () => {
    const { id } = useParams()
    const [data, setData] = useState([])
    const dispatch = useDispatch()
    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`).then((res) => {
            setData(res.data.product);
        })
    }, [id])
    const Images = data?.images
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
   
    const add = () => (
        dispatch(addItem(data))
    )
    const Count = () => {

        dispatch(decrement(data))
    }

    const shop = useSelector((state) => state.ShopReducer.shop)
    const itme = shop?.filter(v => v._id === data?._id)
    const getQU = (id) => {
        const itme = shop?.filter(v => v._id === id)
        return itme[0].quantity
    }
    const like = useSelector((state) => state.LikeReducer.like)
    const Like=like.map(v=>v._id)
  
    return (
        <>
            <div className="Bg">
                <div className="container">
                    <div className="wrapper">
                        <div className="Mian">
                            <Swiper
                                style={{
                                    '--swiper-navigation-color': '#fff',
                                    '--swiper-pagination-color': '#fff',
                                }}
                                loop={true}
                                spaceBetween={10}
                                navigation={true}
                                thumbs={{ swiper: thumbsSwiper }}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper2"
                            >
                                {
                                    Images?.map((v, i) => (
                                        <div key={i}>
                                            <SwiperSlide className="Top">
                                                <img src={`http://localhost:5000/images/${v}`} alt="" />
                                            </SwiperSlide>
                                        </div>
                                    ))
                                }

                            </Swiper>
                            <Swiper
                                onSwiper={setThumbsSwiper}
                                loop={true}
                                spaceBetween={10}
                                slidesPerView={4}
                                freeMode={true}
                                watchSlidesProgress={true}
                                modules={[FreeMode, Navigation, Thumbs]}
                                className="mySwiper"
                            >
                                {
                                    Images?.map((v, i) => (
                                        <div key={i}>
                                            <SwiperSlide className="Botton">
                                                <img src={`http://localhost:5000/images/${v}`} alt="" />
                                            </SwiperSlide>
                                        </div>
                                    ))
                                }
                            </Swiper>
                        </div>
                        <div className="contaner">
                            <div>
                                <div className="Titl">
                                    <h2>{data.title}</h2>
                                    <div className="SVG">

                                        <TiExport className="Export" />
                                        {
                                            Like.includes(data._id) ? <FcLike onClick={()=>dispatch(removeItem(data))} /> : <AiOutlineHeart onClick={()=>dispatch(addToLike(data))} />
                                        }
                                    </div>
                                </div>
                                <p className="Texnik">Texnik jihozlar</p>
                                {
                                    data?.characters?.map((v, i) => (

                                        <div key={i} className="Text">
                                            <p className="p">{v.name.padEnd(60, '_ _')}</p>
                                            <p className="char">{v.char}</p>
                                        </div>
                                    ))
                                }

                                {itme?.length > 0 && <div className="button">
                                    <button onClick={Count}>-</button> <div>{getQU(data._id)}</div><button onClick={() => dispatch(increment(data))}>+</button>
                                </div>

                                }

                                <div className="price">
                                    <h3>{data.price ? `${priceToString(data?.price)} so'm` : ""}</h3>
                                    <h4>{data.price ? `${priceToString(data?.price + 400000)} so'm` : ""}</h4>
                                </div>
                                <div className="Button">
                                    {
                                        // eslint-disable-next-line react/no-unescaped-entities
                                        itme?.length > 0 ? <Button type={'cklic'} wd={280} hd={45} FS={17}>Savatchaga qo'shish</Button> : <Button type={'dark'} wd={280} hd={45} FS={17} onClick={add} >Savatchaga qo'shish</Button>
                                    }

                                    <Button wd={280} hd={45} FS={17}>Taqqoslash</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ProductCarusel type={data?.category} />
            </div>
        </>
    )
}

export default Product