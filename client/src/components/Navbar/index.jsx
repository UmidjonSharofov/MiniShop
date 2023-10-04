import { AiOutlineHeart } from 'react-icons/ai'
import { GiShoppingCart } from 'react-icons/gi'
import { Link, Outlet, useNavigate } from 'react-router-dom';
import navbar from '../../utils';
import Button from '../Generic/Button';
import Footer from '../Footer';
import { useSelector } from 'react-redux';
import MenuListComposition from './kobenet';
import { useState } from 'react';
import { Drawer, } from 'antd';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

const Navbar = () => {
  const naviget = useNavigate()
  const like = useSelector((state => state.LikeReducer.like))
  const shop = useSelector((state => state.ShopReducer.shop))
  const token = localStorage.getItem('token')

  const [visible, setVerable] = useState()
  const [placement,] = useState('left')
  const showDrawer = () => {
    setVerable(true)
  };
  const onClose = e => {
    console.log(e);
    setVerable(false)
  };


  return (
    <>
      <div className='bg'>

        <div className='container'>
          <div className='wrapper'>
            <div className="main none">
              <div className='icon' onClick={() => naviget('/home')} >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                  className="bi bi-apple" viewBox="0 0 16 16">
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                  <path
                    d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                </svg>
                <span>AppleUz</span>
              </div>
              <div className="link">
                {
                  navbar.map(({ path, title, id, hidden }) => (
                    hidden &&
                    <Link key={id} to={path}>{title}</Link>
                  ))
                }

                <div className='server' onClick={() => naviget('/product/server')}>
                  <span>Bro</span>
                  <span className='span'>Service</span>
                </div>
              </div>
            </div>
            <div className='modalmedya'>
              <div className='menu'>
                <AiOutlineMenu onClick={showDrawer} />
                <Drawer
                  title=''
                  placement={placement}
                  closable={false}
                  onClose={onClose}
                  visible={visible}
                >
                  <div className='mobayle_menu'>
                    <div className='icon_wrapper'>
                      <div className='moble_icon' onClick={() => naviget('/')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                          className="bi bi-apple" viewBox="0 0 16 16">
                          <path
                            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                          <path
                            d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
                        </svg>
                        <span>AppleUz</span>
                      </div>
                      <div className='exit'>
                        <AiOutlineClose onClick={onClose} />
                      </div>

                    </div>
                    {
                      navbar.map(({ path, title, id, hidden }) => (
                        hidden &&
                        <Link key={id} to={path}>{title}</Link>
                      ))
                    }
                  </div>
                </Drawer>
              </div>
            </div>
            <div className="Button">
              <div className="like" onClick={() => naviget('/product/like')}>
                {like.length > 0 &&
                  <div className='shop_number'>
                    <p>{like.length}</p>
                  </div>
                }

                <AiOutlineHeart />
                <h4>Sevimlilar</h4>
              </div> <div className="like" onClick={() => naviget('/product/shop')}>
                {shop.length > 0 &&
                  <div className='shop_number'>
                    <p>{shop?.reduce((a, b) => a + (b?.quantity || 0), 0)}</p>
                  </div>
                }
                <GiShoppingCart />
                <h4>Savatcha</h4>
              </div>
              {token ? <div className='kobent'>
                {MenuListComposition()}
              </div> :

                <div className="button" onClick={() => naviget('/product/singIn')}>
                  <Button hd={40}>kirish</Button>
                </div>

              }
              <div>
              </div>

            </div>
          </div>
        </div>
      </div>
      <Outlet />
      <Footer />
    </>
  )
};

export default Navbar;
