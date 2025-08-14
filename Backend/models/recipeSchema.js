const mongoose = require("mongoose");  


const recipeSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    ingredients:{
        type:Array,
        required:true
    },
    instructions:{
        type:String,
        required:true
    },

    time:{
        type:String,
        required:true
    },

    coverImage:{
        type:String,
        default:null

    },


})

const Recipe=mongoose.model("Recipes",recipeSchema)
module.exports = Recipe;