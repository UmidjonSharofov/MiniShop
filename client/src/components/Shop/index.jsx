import { useDispatch, useSelector } from 'react-redux'
import './style.scss'
import { decrement, deleteItme, increment } from '../../redux/features/shop';
import { priceToString } from '../../utils/variable';
import { AiOutlineDelete } from 'react-icons/ai'
import Button from '../Generic/Button'
import { useNavigate } from 'react-router-dom';
const Shop = () => {
   const shop = useSelector((state) => state.ShopReducer.shop)
   const dispatch = useDispatch();
   const navgete=useNavigate()
  const token=localStorage.getItem('token')
   const AllSum = () => {
      return shop?.reduce((a, b) => a + (b.price * b.quantity), 0)
   }
   const Quantit = () => {
      return shop?.reduce((a, b) => a + (b?.quantity || 0), 0)
   }
   return (
      <div className='Bg'>
         <div className='container'>

            <div className='Container_shop'>
               <div>
                  <h2 className='products_h2'> Savatchada <span>{Quantit()}</span> mahsulot bor</h2>
               </div>
               {shop?.length >= 1 ?
                  <div className='shop' >
                     <div className='products'>
                        {
                           shop?.map(v =>
                              <div className='div' key={v._id}>
                                 <div><img src={`http://localhost:5000/images/${v.images[0]}`} alt="" /></div>
                                 <div className='products_Title'>
                                    <p onClick={()=>navgete(`/product/${v._id}`)}>{v.title}</p>
                                 </div>
                                 <div className='button'>
                                    <button onClick={() => dispatch(decrement(v))}>-</button><div>{v.quantity}</div><button onClick={() => dispatch(increment(v))}>+</button>
                                 </div>
                                 <div className='products_som'>
                                    <p>{`${priceToString(v.price * v.quantity)}`}</p>
                                    <p> so'm</p>
                                 </div>
                                 <div className='products_delete'>{<AiOutlineDelete onClick={() => dispatch(deleteItme(v))} />}</div>
                              </div>
                           )
                        }
                     </div>
                     <div className='payment'>
                        <div className='payment_Sum'>
                           <p>Mahsulotlar ({Quantit()})</p>
                           <p>{AllSum()}</p>
                        </div>
                        <div className='payment_title'>
                           <p>Umumiy</p>
                           <p>{AllSum()} so'm</p>
                        </div>
                        <div className='payment_button'>
                           <Button onClick={()=>token?navgete('/checkout'):navgete('/product/singIn')}>To'lovga o'tish</Button>
                           <Button onClick={()=>navgete('/')} type={'payment'} >Menyuga qaytish</Button>
                        </div>
                     </div>
                  </div> : <div className='noProject'>
                     <div className='noProject_Img'>
                        <img className={"no_cart_img"} src="https://macbro.uz/images/no_cart_item.png" alt="" />
                     </div>
                     <div>
                        <p>Siz hali savatingizga biron bir mahsulot qo'shmadingiz</p>
                     </div>
                     <div className='noProject_button'>
                        <Button onClick={()=>navgete('/')}>Hoziroq buyurtma qiling</Button>
                     </div>

                  </div>
               }
            </div>
         </div>
      </div>
   )
}

export default Shop