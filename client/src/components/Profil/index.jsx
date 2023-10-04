import { useEffect, useState, } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getUser } from '../../redux/features/user'
import axios from 'axios';
import Button from '../Generic/Button'
import userLogo from '../../../src/assets/user.png'
import './style.scss'
import { priceToString } from '../../utils/variable';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { useNavigate } from 'react-router-dom';

const Profil = () => {
  const token = localStorage.getItem('token')
  const [image, setImage] = useState('')
  const [userId, setUserId] = useState('')
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [locus, setLocus] = useState('')
  const [passportId, setPassportId] = useState('')
  const [salary, setSalary] = useState('')
  const [workLocus, setWorkLocus] = useState('')


  axios.interceptors.request.use(
    config => {
      config.headers.Authorization = `Bearer ${token}`
      return config
    },
    error => {
      return Promise.reject(error)
    }
  )
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);

  const navigate=useNavigate()
  
  const user = useSelector((state) => state.User)
  const data = user?.data?.user
  const dispach = useDispatch()
  useEffect(() => {
    dispach(getUser())
    setUserId(data?._id)
      setFullName(data?.fullName||'')
      setPhone(data?.phone)
      setLocus(data?.locus || '')
      setPassportId(data?.passportId || '')
      setSalary(data?.salary || '')
      setWorkLocus(data?.workLocus || '')
    setImage('http://localhost:5000/images/'+ data.image)
  }, [])
  const onCloseModal = () =>{
    setOpen(false);
    setImage('http://localhost:5000/images/'+data.image)
  }
    const [profileImage,setProfileImage]=useState("")
  const handleImage=(files)=>{

    console.log(files[0].name);

    if(files.length !== 0){
        setProfileImage(files[0])
        setImage(URL.createObjectURL(files[0]));
    }
  }


  
  const editUser=()=>{

    const formData=new FormData()
    formData.append('image',profileImage)
    formData.append('salary',salary)
    formData.append('workLocus',workLocus)
    formData.append('locus',locus)
    formData.append('passportId',passportId)
    formData.append('fullName',fullName)
    axios.patch(`http://localhost:5000/api/user/${userId}`,formData,{
      'Authorization':`Bearer ${token}`
    })
    .then((res)=>{
      if (res.status===201){
          setOpen(false)
      }
      // console.log(res)
  })
  .catch((err)=>{
      console.log(err)
  })
  }
  const exit=()=>{
    localStorage.removeItem('token')
      navigate('/')
      window.location.reload();
  }
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='Main_Profil'>
          <div className='fullname'><h2>Salom  {data?.fullName}</h2></div>
          <div className='Profil'>
            <div className='Profil_Title'>
              <h2>Hisob qaydnoma sozlamalar</h2>
              <div className='Button_Profil'>
                <Button onClick={onOpenModal} wd={120}>Tahrirlash</Button>
                <Button onClick={exit} type={'ext'}>Chiqish</Button>
              </div>
            </div>
            <div className='profile_wrapper'>
              <div className='profile_Img'>
                <img src={image.includes('undefined') ? userLogo : image} alt="user" />
              </div>
              <div className='Profil_title'>
                <div>Ism va Familiya</div>
                <div>{data?.fullName}</div>

              </div>
              <div className='Profil_title'>
                <div>Telefon raqami</div>
                <div>{data?.phone}</div>

              </div>
              {
                data?.locus &&
                <div className='Profil_title'>
                  <div>Yashash joyi</div>
                  <div>{data?.locus}</div>
                </div>
              }
              {
                data?.passportId &&
                <div className='Profil_title'>
                  <div>Passport ID</div>
                  <div>{data?.passportId}</div>
                </div>
              }
              {
                data?.workLocus &&
                <div className='Profil_title'>
                  <div>Ish joyi</div>
                  <div>{data?.workLocus}</div>
                </div>
              }
              {data?.salary && <div className='Profil_title'>
                <div >O'rtacha oylik maoshi</div>
                <div>{priceToString(+data?.salary)} so'm</div>
              </div>}
              <div className='Button_Profil'>
                <Button onClick={onOpenModal} wd={170}>Tahrirlash</Button>
                <Button onClick={exit} wd={150} type={'ext'}>Chiqish</Button>
              </div>
            </div>
            <div>
            </div>
          </div>
          <Modal open={open} onClose={onCloseModal} >
            <div className='Profi_editing'>
              <div className='editing_h2'>
                <h2>Hisob qaydnomangizni tahrirlang</h2>
                <p>Ushbu ma'lumotdagi o'zgarishlar sizning AppleUz hisob qaydnomangizga tegishli bo'lib, keyingi xaridlaringizga ta'sir qiladi.</p>
              </div>
           
              <div className='editing_img'>
                <input onChange={(e) => { handleImage(e.target.files) }} type="file" id='avatar' accept='image/png, image/jpg' />
                <img src={image.includes('undefined') ? userLogo : image} alt="user" />
                <label htmlFor={"avatar"} className='avatar_plus'>+</label>
              </div>
              <div>
                <form action="" className='form'>
                  <input value={fullName} onChange={event => setFullName(event.target.value)} type="text" placeholder='Ism va Familiya' />
                  <input value={passportId} onChange={event => setPassportId(event.target.value)} type="text" placeholder='Pasport ID' />
                  <input value={locus} onChange={event => setLocus(event.target.value)} type="text" placeholder='Yashash joyi' />
                  <input value={workLocus} onChange={event => setWorkLocus(event.target.value)} type="text" placeholder='ish joyi' />
                  <input value={salary} onChange={event => setSalary(event.target.value)} type="text" placeholder="O'rtacha oylik maoshi(so'mda)" />
                  <div className='editing_button'>
                    <Button wd={130} onClick={onCloseModal} type={'ext'}>Bekor qilish</Button>
                    <Button wd={130} onClick={editUser}>Saqlash</Button>
                  </div>
                </form>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  )
}

export default Profil