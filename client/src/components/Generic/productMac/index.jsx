import { useEffect, useState } from "react"
import axios from 'axios'
import { AiOutlineHeart } from 'react-icons/ai'
import { FcLike } from 'react-icons/fc'
import './main.scss'
import { useDispatch, useSelector } from "react-redux";
import { addToLike, removeItem } from "../../../redux/features/like";
import { priceToString } from "../../../utils/variable";
import Button from '../Button/index'
import { addItem, decrement, increment } from "../../../redux/features/shop";
import { PiShoppingCart } from 'react-icons/pi'
import { useNavigate } from "react-router-dom";



const ProductsMac = ({ sameObj }) => {


    const like = useSelector((state) => state.LikeReducer.like)
    const Like = like.map(v => v._id)
    const dispatch = useDispatch()

    const naviget = useNavigate()

    const shop = useSelector((state) => state.ShopReducer.shop)
    const itme = shop.map(v => v._id)
    const quantity = (id) => {
        const itme = shop.filter(v => v._id === id)
        return itme[0].quantity
    }

    const [data, setData] = useState()
    const [sorting, setSorting] = useState(false)
    const [sortType, setSortType] = useState('-createdAt')

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products?category=${sameObj.title}&sortType=${sortType.includes("-") ? sortType.slice(1) : sortType}&sortValue=${sortType.includes('-') ? -1 : 1}`).then((res) => {
            setData(res.data.products);
        })
    }, [sameObj, sortType])


    const handleSortType = (value) => {
        setSortType(value);
    }

    return (
        <div className="container">
            <div className="mac">
                <div className="max_width">
                    <div className="wrapper">
                        <div className="Mac_Titile">
                            <h2>{sameObj.title}</h2>
                            <p>{sameObj.desc}</p>
                        </div>
                    </div>
                </div>
                <div className="Bg">
                    <div className="MacWrapper">
                        <div className="macBorder">
                            <div className="macNew">
                                <div className="saralash">
                                    <p>Saralash turi:</p>
                                    <select defaultValue={'-createdAt'} onChange={e => handleSortType(e.target.value)} >
                                        <option value="-createdAt">Eng yangi</option>
                                        <option value="-price">Narxi:Qimmat</option>
                                        <option value="price">Narxi:Arzon</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <button className={`${!sorting ? "flexButton" : "NoButton"}`} onClick={() => setSorting(false)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-grid" viewBox="0 0 16 16">
                                            <path
                                                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
                                        </svg>
                                    </button>
                                    <button className={`${sorting ? "flexButton" : "NoButton"}`} onClick={() => setSorting(true)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                            className="bi bi-list-ul" viewBox="0 0 16 16">
                                            <path fillRule="evenodd"
                                                d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="container">

                        <div className="wrapper_mac">
                            <div className={`${!sorting ? "mac_Grid" : 'mac_Flex'}`}>
                                {
                                    data?.map(v => (
                                        <div className='Mac' key={v._id}>
                                            <div className="Mac_Like">
                                                {
                                                    Like.includes(v._id) ? <FcLike onClick={() => dispatch(removeItem(v))} /> : <AiOutlineHeart onClick={() => dispatch(addToLike(v))} />
                                                }
                                            </div>
                                            <div className="Mac_Img">
                                                <img src={`http://localhost:5000/images/${v.images[0]}`} alt="" />
                                            </div>
                                            <div className="Mac_titile">
                                                <div>
                                                    <p onClick={() => naviget(`/product/${v._id}`)}>{v.title}</p>
                                                    <h4>{`${priceToString(v.price)} so'm dan`}</h4>
                                                </div>
                                                <div className="Like_Button">

                                                    {
                                                        itme?.includes(v._id) ? <div className='button_like'>
                                                            <button onClick={() => dispatch(decrement(v))}>-</button><div>{quantity(v._id)}</div><button onClick={() => dispatch(increment(v))}>+</button>
                                                        </div> : <Button onClick={() => dispatch(addItem(v))}> <PiShoppingCart /> Savatchaga</Button>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductsMac