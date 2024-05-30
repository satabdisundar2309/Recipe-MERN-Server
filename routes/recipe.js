const express = require('express')
const {
  add,
  getAllRecipe,
  getRecipeById,
  getRecipeByUserId,
  getSavedRecipe,
  savedRecipeById,
} = require("../controllers/recipe.js");

const { Authenticate } = require("../middlewares/auth.js");

const recipeRouter = express.Router();

// create recipe
recipeRouter.post("/add", Authenticate, add);

// get all recipe
recipeRouter.get("/", getAllRecipe);

// get all saved Recipe
recipeRouter.get("/saved", getSavedRecipe);

// get recipe by Id
recipeRouter.get("/:id", getRecipeById);

// get recipe by userId
recipeRouter.get("/user/:id", getRecipeByUserId);

// saved Recipe by Id
recipeRouter.post("/:id", Authenticate, savedRecipeById);

module.exports = { recipeRouter };
