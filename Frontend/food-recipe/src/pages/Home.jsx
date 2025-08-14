import React from 'react'
import './Home.css'
import food from '../assets/food.png'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import RecipeItem from '../Components/RecipeItem'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
   
    <section className="home">
        <div className="left">
            <h1>Food Recipe</h1>
            <h5>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati reiciendis earum ex ea fuga. Iusto, quam ad perferendis aperiam accusantium ducimus a commodi aliquam laboriosam fuga et cumque provident architecto?</h5>
            <button onClick={()=>navigate('/AddRecipe')} >Share your recipe</button>
        </div>


        <div className="right">
        <img src={food} width="320px" height='300px' />

        </div>
    </section>
    <div className="bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#5000ca" fillOpacity="1" d="M0,192L12,170.7C24,149,48,107,72,85.3C96,64,120,64,144,106.7C168,149,192,235,216,266.7C240,299,264,277,288,261.3C312,245,336,235,360,208C384,181,408,139,432,133.3C456,128,480,160,504,149.3C528,139,552,85,576,80C600,75,624,117,648,144C672,171,696,181,720,197.3C744,213,768,235,792,202.7C816,171,840,85,864,96C888,107,912,213,936,250.7C960,288,984,256,1008,234.7C1032,213,1056,203,1080,218.7C1104,235,1128,277,1152,282.7C1176,288,1200,256,1224,208C1248,160,1272,96,1296,80C1320,64,1344,96,1368,106.7C1392,117,1416,107,1428,101.3L1440,96L1440,0L1428,0C1416,0,1392,0,1368,0C1344,0,1320,0,1296,0C1272,0,1248,0,1224,0C1200,0,1176,0,1152,0C1128,0,1104,0,1080,0C1056,0,1032,0,1008,0C984,0,960,0,936,0C912,0,888,0,864,0C840,0,816,0,792,0C768,0,744,0,720,0C696,0,672,0,648,0C624,0,600,0,576,0C552,0,528,0,504,0C480,0,456,0,432,0C408,0,384,0,360,0C336,0,312,0,288,0C264,0,240,0,216,0C192,0,168,0,144,0C120,0,96,0,72,0C48,0,24,0,12,0L0,0Z"></path></svg>
    </div>
    
   <div className="recipes">
    <RecipeItem/>
   </div>
    
    </>
  )
}