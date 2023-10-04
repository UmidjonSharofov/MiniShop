import { useState } from 'react'
import PhoneInput from 'react-phone-number-input'
import Button from '../Generic/Button'
import './style.scss'
import { Link, useNavigate } from 'react-router-dom'
import {  toast ,ToastContainer} from 'react-toastify';
import axios from 'axios'

const SingIn = () => {
  const [phoneVal, setPhoneVal] = useState('')
   const [data, setData] = useState({
    password: "",
    ConfirimPasword: ""
})

const handle = (e) => {
  const newdata = { ...data }
  newdata[e.target.id] = e.target.value
  setData(newdata)
}

const navigate=useNavigate()

const submit=()=>{
  if (phoneVal.length <12) {
    const notify = () => toast('the number is incorrect' );
    delete data.ConfirimPasword
    notify()
}
else{
  axios.post('http://localhost:5000/api/user/signin',{
    password: data?.password,
    confirmPassword: data?.ConfirimPasword,
    phone: Number(phoneVal.slice(1))

  }).then((res)=>{
    localStorage.setItem('token',res?.data?.token)
            if(res?.data?.token?.length>2){

                navigate('/profil')
                window.location.reload();
            }
  }).catch((err)=>{
    const notify = () => toast(err?.response?.data?.message);    
    notify()
  })
}
}
  return (
    <div className="Singin_Wrapper">
      <h1>Kirish</h1>
      <div>
        <div>
          <from>
            <div className='from_Singin'>

              <div>
                <PhoneInput
                  international
                  limitMaxLength={true}
                  value={phoneVal}
                  onChange={setPhoneVal}
                  defaultCountry={"UZ"}
                  // name="phone"
                  autoComplete='off'
                  disabled={false}
                  placeholder={"Telefon raqam"}
                />
              </div>
              <div>
                <input onChange={(e)=>handle(e)} type='password' id='password' value={data.password} placeholder='password' />
              </div>
              <div>
                <input onChange={(e)=>handle(e)}  type='password' id='ConfirimPasword' value={data.ConfirimPasword}  placeholder='Confirm Password..' />

              </div>
              <div>
                <Button onClick={submit} wd={380} hd={48}>Kirish</Button>
                <ToastContainer/>
              </div>
                <Link to={'/product/SingUp'} className='Link'>{`Accountingiz yo'qmi? Ro'yhatdan o'ting`}</Link>
            </div>
          </from>
        </div>
      </div>
    </div>
  )
}

export default SingIn