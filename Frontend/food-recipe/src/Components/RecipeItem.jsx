import React from 'react'
import './RecipeItem.css'
import { useLoaderData } from 'react-router-dom'
import Food2 from '../assets/food2.png'
import { BiAlarm } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

export default function RecipeItem() {
    const allRecipes=useLoaderData()
    console.log(allRecipes)
  return (
    <div className='card-container'>
        {
            allRecipes?.map((item,index)=>{
                return(
                    <div key={index} className='card'>
                        <img src={Food2} width="120px" height="100px" />
                        <div className="card-body">
                            <div className="title">{item.title}</div>
                            <div className="icons">
                                <div><BiAlarm /></div>
                                <FaHeart />
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
