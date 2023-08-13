import { Link, useNavigate } from 'react-router-dom'
import {IoLogoInstagram} from 'react-icons/io'
import {FaFacebookSquare} from 'react-icons/fa'
import {BiLogoTelegram} from 'react-icons/bi'
import {BsYoutube} from 'react-icons/bs'
import {RiTiktokLine} from 'react-icons/ri'


import './styled.scss'
const Footer = () => {

    const navigate=useNavigate()
    return (
        <div className="container">
            <div className="wrapper">
                <div className='Footer'>
                    <div className='FooterLink'>
                        <h6>Sotib olish</h6>
                        <Link to={'/'}>Mac</Link>
                        <Link to={'/'}>iPad</Link>
                        <Link to={'/'}>iPhone</Link>
                    </div>
                    <div className='FooterLink'>
                        <h6>Kompaniya</h6>
                        <Link to={'/'}>Yangiliklar</Link>
                        <Link to={'/'}>Kompaniya haqida</Link>
                        <Link to={'/'}>Do'kon manzili</Link>
                        <Link to={'/'}>Biznes uchun</Link>
                    </div>
                    <div className='FooterLink'>
                        <h6>Ma'lumot</h6>
                        <Link to={'/'}>Siz uchun sotib beramiz!</Link>
                        <Link to={'/'}>Muddatli to'ov</Link>
                        <Link to={'/'}>Yetkazib berish</Link>
                        <Link to={'/'}>Aloqa</Link>
                        <Link to={'/'}>Taklif bildirish</Link>
                        <Link to={'/'}>Siz taklif qilinasiz</Link>
                    </div>
                    <div className='FooterLink'>
                        <h6>Biz bilan bog'laning</h6>
                        <div className='FooterIcon'>
                            <FaFacebookSquare onClick={()=>navigate('/')} />
                            <BiLogoTelegram onClick={()=> navigate('/')}/>
                            <BsYoutube onClick={()=> navigate('/')}/>
                            <RiTiktokLine onClick={()=> navigate('/')}/>
                        </div>
                        <Link to={'/'}>+998 78 777 20 20</Link>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer