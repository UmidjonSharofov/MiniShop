const Erorr=(data)=>{
    const eror={}

    if(data.fullname==""){
        eror.fullname='Your Full Name is Required!'
        
    }
    else if(data.password<4){
        eror.password='password must be at least 4 characters'
    }
    else if(data.ConfirimPasword!==data.password){
        eror.ConfirimPasword='confirmPassword is a required field'
    }
    return eror
}
export default Erorr