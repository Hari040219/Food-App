import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function AddFoodRecipe() {
    const [recipeData, setRecipeData] = useState({
        title: '',
        ingredients: [],
        instructions: '',
        time: '',
        file: null
    })
    
    const navigate = useNavigate()

    const onHandlerChange = (e) => {
        let val;
        if (e.target.name === "ingredients") {
            val = e.target.value.split(",").map(item => item.trim())
        } else if (e.target.name === "file") {
            val = e.target.files[0]
        } else {
            val = e.target.value
        }
        setRecipeData(prev => ({...prev, [e.target.name]: val}))
    }

    const onHandlerSubmit = async (e) => {
  e.preventDefault();
  try {
    const formData = new FormData();
    formData.append('title', recipeData.title);
    // Send ingredients as comma-separated string
    formData.append('ingredients', recipeData.ingredients.join(','));
    formData.append('instructions', recipeData.instructions);
    formData.append('time', recipeData.time);
    if (recipeData.file) {
      formData.append('file', recipeData.file); // Must match multer's field name
    }

    await axios.post("http://localhost:3000/recipes", formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
    navigate("/");
  } catch (error) {
    console.error("Error submitting recipe:", error.response?.data || error.message);
    // Add user feedback here
  }
}

    return (
        <>
            <div className="container">
                <form className="form" onSubmit={onHandlerSubmit}>

                    {/* Title */}
                    <div className="form-control">
                        <label htmlFor="title">Title</label>
                        <input 
                            type="text" 
                            name="title" 
                            className="input" 
                            onChange={onHandlerChange} 
                            required 
                        />
                    </div>

                    {/* Ingredients */}
                    <div className="form-control">
                        <label htmlFor="ingredients">Ingredients</label>
                        <textarea
                            name="ingredients"
                            type='text'
                            className="input"
                            rows="4"
                            placeholder="List ingredients separated by commas"
                            required
                            onChange={onHandlerChange}
                        ></textarea>
                    </div>

                    {/* Instructions */}
                    <div className="form-control">
                        <label htmlFor="instructions">Instructions</label>
                        <textarea
                            name="instructions"
                            className="input"
                            rows="5"
                            placeholder="Step-by-step cooking instructions"
                            required
                            onChange={onHandlerChange}
                        ></textarea>
                    </div>

                    {/* Time */}
                    <div className="form-control">
                        <label htmlFor="time">Time</label>
                        <input
                            type="text"
                            name="time"
                            className="input"
                            placeholder="e.g. 30 minutes"
                            required
                            onChange={onHandlerChange}
                        />
                    </div>

                    {/* Cover Image */}
                    <div className="form-control">
                        <label htmlFor="coverImage">Cover Image</label>
                        <input
                            type="file"
                            name="file"
                            className="input"
                            accept="image/*"
                            onChange={onHandlerChange}
                            required
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" className="btn">
                        Add Recipe
                    </button>

                </form>
            </div>
        </>
    )
}