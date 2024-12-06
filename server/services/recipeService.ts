import { ResponseDTO } from '../dtos/responseDto';
import * as recipeData from '../data/recipeData';
import { RecipeDTO } from '../data/recipeDto';

export const getAllRecipes = async () => {
  try {
    const response = await recipeData.getAllRecipes();
    return new ResponseDTO('Success', 200, '', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error accessing database', e.stack);
  }
};

export const getRecipeById = async (id: string) => {
  try {
    const response = await recipeData.getRecipeById(id);
    if (!response) {
      return new ResponseDTO('Error', 404, 'Recipe not found');
    }
    return new ResponseDTO('Success', 200, '', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error accessing database', e.stack);
  }
};

export const changeFavoriteRecipe = async (data: {id: string, isFavorite: boolean}) => {
  try {
    const response = await recipeData.changeFavoriteRecipe(data);
    return new ResponseDTO('Success', 200, 'Recipe saved as favorite', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error accessing database', e.stack);
  }
};


export const addRecipe = async (data: RecipeDTO) => {
  try {
    const response = await recipeData.addRecipe(data);
    return new ResponseDTO('Success', 200, 'Recipe saved as favorite', response);
  } catch (e: any) {
    return new ResponseDTO('Error', 500, 'Error accessing database', e.stack);
  }
};