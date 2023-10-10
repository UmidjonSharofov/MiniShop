import { useState } from "react"
import PhoneInputWithCountrySelect from "react-phone-number-input"
import './style.scss'
import axios from 'axios'
import Button from '../Generic/Button'
import Erorr from "./eror"
import { Link, useNavigate } from "react-router-dom"
import {  toast ,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingUp = () => {
    const [phoneVal, setPhoneVal] = useState('');
    const navigat = useNavigate()

    const [data, setData] = useState({
        fullname: "",
        password: "",
        ConfirimPasword: ""
    })
    const [eror, setEror] = useState({});


    const handle = (e) => {
        const newdata = { ...data }
        newdata[e.target.id] = e.target.value
        setData(newdata)
    }
    const submit = () => {
        setEror(Erorr(data))
        if (phoneVal.length <=12) {
            const notify = () => toast('the number is incorrect' );
            delete data.ConfirimPasword
            notify()
        }
        else{

            
            axios.post('http://localhost:5000/api/user/signup', {
                fullName: data?.fullname,
                password: data?.password,
                confirmPassword: data?.ConfirimPasword,
                phone: Number(phoneVal.slice(1))
        }).then(res => {
            console.log(res)
            localStorage.setItem('token', res?.data?.token)
            if (res?.data?.token?.length > 2) {
                navigat('/profil')
                window.location.reload();
            }
            
        }).catch((err)=>{
            console.log(err);
            
            const notify = () => toast(err?.response?.data.message);
            notify()
        })
    }
        
    }
    return (
        <div className="SingUp_Wrapper">
            <h1>{`AppleUz dan ro'yxatdan o'tish`}</h1>
            <div>
                <from >
                    <div className="from_Singin">
                        <div>
                            <PhoneInputWithCountrySelect

                                international
                                limitMaxLength={true}
                                value={phoneVal}
                                onChange={setPhoneVal}
                                defaultCountry={"UZ"}
                                // name="phone"
                                autoComplete='off'
                                disabled={false}
                                placeholder={"*Telefon raqam"}
                            />
                        </div>
                        <div>
                            <input type='text' onChange={(e) => handle(e)} id="fullname" value={data.fullname} placeholder="*Ism va Familiya" />
                        </div>
                        <p>{eror?.fullname}</p>
                        <div>
                            <input type='password' onChange={(e) => handle(e)} id="password" value={data.password} placeholder="*password" />
                        </div>
                        <p>{eror?.password}</p>
                        <div>
                            <input type='number' onChange={(e) => handle(e)} id="ConfirimPasword" value={data.ConfirimPasword} placeholder="*Confirm Password..." />
                        </div>
                        <p>{eror?.ConfirimPasword}</p>

                        <div>
                            <Button onClick={submit} hd={48} wd={380}>Ro'yxatdan o'tish</Button>
                           <ToastContainer />
                        </div>
                        <Link to={'/product/singIn'} className='Link'>{`Accountingiz bormi? Kirish`}</Link>
                    </div>
                </from>
            </div>
        </div>
    )
}

export default SingUp
