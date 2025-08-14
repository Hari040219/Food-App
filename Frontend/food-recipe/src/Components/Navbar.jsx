import React, { useState } from 'react'
import './Navbar.css'
import Model from './Model'
import InputForm from './InputForm'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const checkLogin=()=>{
    setIsOpen(true)
  }

  return (
    <>
    <header>
        <h2>Food Blog</h2>
        <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/myRecipe'>My Recipe</NavLink></li>
            <li><NavLink to='/favRecipe' >Favourites</NavLink></li>
            <li onClick={checkLogin}><p className='login'></p>Login</li>
        </ul>
    </header>
    { (isOpen)&&<Model onClose={()=>setIsOpen(false)}><InputForm setIsOpen={()=>setIsOpen(false)} /></Model> }
    </>
  )
}
