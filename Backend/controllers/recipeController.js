const Recipes = require("../models/recipeSchema.js");
const multer  = require('multer')


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.originalname
    cb(null, file.fieldname)
  }
})

const upload = multer({ storage: storage })

const getRecipes = async (req, res) => {
  try {
    const recipes = await Recipes.find();
    res.json(recipes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getRecipe = async (req, res) => {
  try {
    const recipe = await Recipes.findById(req.params.id);
    if (!recipe) return res.status(404).json({ message: "Recipe not found" });
    res.json(recipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addRecipe = async (req, res) => {
  try {
    const { title, ingredients, instructions, time } = req.body;
    const file = req.file; // This comes from multer

    if (!title || !ingredients || !instructions || !time) {
      return res.status(400).json({ message: "Required fields cannot be empty" });
    }

    // Handle ingredients - frontend might send as string or array
    const ingredientsArray = Array.isArray(ingredients) 
      ? ingredients 
      : typeof ingredients === 'string' 
        ? ingredients.split(',').map(item => item.trim())
        : [];

    const newRecipe = await Recipes.create({
      title,
      ingredients: ingredientsArray,
      instructions,
      time,
      coverImage: file ? `/images/${file.filename}` : null // Store the path
    });

    return res.status(201).json(newRecipe);
  } catch (err) {
    console.error("Error adding recipe:", err);
    res.status(500).json({ message: err.message });
  }
};

const editRecipe = async (req, res) => {
    const { title, ingredients, instructions, time, coverImage } = req.body;
  try {
    const updatedRecipe = await Recipes.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedRecipe);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteRecipe = async (req, res) => {
  try {
    await Recipes.findByIdAndDelete(req.params.id);
    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getRecipes,
  getRecipe,
  addRecipe,
  editRecipe,
  deleteRecipe,
  upload
};
