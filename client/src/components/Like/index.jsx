import { useDispatch, useSelector } from 'react-redux'
import { FcLike } from 'react-icons/fc'
import { PiShoppingCart } from 'react-icons/pi'
import { priceToString } from '../../utils/variable';
import Button from '../Generic/Button'
import './style.scss'
import { removeItem } from '../../redux/features/like';
import { useNavigate } from 'react-router-dom';
import { addItem, decrement, increment } from '../../redux/features/shop';

const Like = () => {
  const like = useSelector((state) => state.LikeReducer.like)
  const shop = useSelector((state) => state.ShopReducer.shop)
  const itme = shop.map(v => v._id)
  const quantity = (id) => {
    const itme = shop.filter(v => v._id === id)
    return itme[0].quantity
  }
  const dispatch = useDispatch()
  const navgete = useNavigate()
  return (
    <div className='Bg'>
      <div className='Liki_Title'>
        <div className='container'>
          <div className='wrapper'>
            <h1>Sizning  sevimli tovarlaringiz</h1>
          </div>

        </div>
      </div>
      <div className='container'>
        <div className='wrapper'>
          {
            like.length > 0 ?

              <div className='Like'>
                {
                  like?.map(v => (
                    <div className='Like_wrapper' key={v._id}>
                      <div className='Lile_like'>
                        <FcLike onClick={() => dispatch(removeItem(v))} />
                      </div>
                      <div className='Like_img' onClick={() => navgete(`/product/${v._id}`)}>
                        <img src={`http://localhost:5000/images/${v.images[0]}`} alt='img' />
                      </div>
                      <div className='Like_title'>
                        <p onClick={() => navgete(`/product/${v._id}`)}>{v.title}</p>
                      </div>
                      <div className='Like_Sum'>
                        <h4>{priceToString(v.price)} so'm dan</h4>
                      </div>
                      <div className='Like_Button'>
                        {
                          itme?.includes(v._id) ? <div className='button_like'>
                            <button onClick={() => dispatch(decrement(v))}>-</button><div>{quantity(v._id)}</div><button onClick={() => dispatch(increment(v))}>+</button>
                          </div> : <Button onClick={() => dispatch(addItem(v))}> <PiShoppingCart /> Savatchaga</Button>
                        }
                      </div>
                    </div>
                  ))
                }
              </div> : <div className='nooLike'>
                <h4>Hozircha sizda sevimli tovorlar yo'q</h4>
                <Button onClick={() => navgete('/')} wd={200}>Asosiy bo'limga o'tish</Button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Like