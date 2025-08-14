import React from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Home from './pages/Home'
import AddFoodRecipe from './pages/AddFoodRecipe'
import MainNavigation from './Components/MainNavigation'
import axios from 'axios';

const getAllRecipes = async()=>{
  let allRecipes=[];
  await axios.get('http://localhost:3000/recipes').then(res=>{
    allRecipes=res.data;
  })
  return allRecipes;
}

const router=createBrowserRouter([

  {path:"/",element:<MainNavigation/>,children:[
      {path:"/",element:<Home/>,loader:getAllRecipes},
       {path:"/myRecipe",element:<Home/>},
       {path:"/favRecipe",element:<Home/>},
        {path:"/AddRecipe",element:<AddFoodRecipe/>},
  ]}
])


export default function App() {
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}
