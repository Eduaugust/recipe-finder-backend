import express from 'express';
import { getAllRecipes, getRecipeById, addRecipe, changeFavoriteRecipe } from '../controllers/recipesController';
import {  } from '../data/recipeData';


const router = express.Router();

router.get('/', getAllRecipes);

router.get('/:id', getRecipeById);

router.post('/create', addRecipe);

router.post('/favorite', changeFavoriteRecipe);


export default router;