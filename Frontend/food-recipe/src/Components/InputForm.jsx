import React, { useState } from 'react'
import './InputForm.css'
import axios from 'axios'


export default function InputForm(setIsOpen) {
    const[email,setEmail] = useState("")
    const [password, setpassword] = useState("")
    const [isSignUp, setisSignUp] = useState(false)
    const [error, seterror] = useState("")


    const handleOnSubmit=async(e)=>{
        e.preventDefault()
        let endpoint=(isSignUp)?"signUp":"login"
        await axios.post(`http://localhost:3000/${endpoint}`,{email,password})
        .then((res)=>{
            localStorage.setItem("token,res.data.token")
            localStorage.setItem("user",JSON.stringify(res.data.user))
            setIsOpen()
        })
        .catch(data=>seterror(data.response?.data?.error))
    }
  return (
    <>
    <form action="" className="form" onSubmit={handleOnSubmit} >
    <div className='form'>
        <label htmlFor="">Email</label>
        <input type="email" className='input' onChange={(e)=>setEmail(e.target.value)}  required />
    </div>
    <div className="form-control">
        <label htmlFor="">Password</label>
        <input type="password" className='input-password' onChange={(e)=>setpassword(e.target.value)} id="" />
    </div>
    <button type='submit'>{(isSignUp)?"Sign Up":"Login"}</button>

    <p onClick={()=>setisSignUp(prev=>!prev)}>{(isSignUp)?"Already have an account":"Create new Account"}</p>
    </form>


    </>

  )
}
