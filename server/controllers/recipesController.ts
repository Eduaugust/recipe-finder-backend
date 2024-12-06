import { Request, Response, NextFunction } from 'express';
import * as recipeService from '../services/recipeService';
import { RecipeDTO } from '../data/recipeDto';
import multer from 'multer';

const upload = multer({ storage: multer.memoryStorage() });


export const getAllRecipes = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await recipeService.getAllRecipes();
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
};

export const getRecipeById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const response = await recipeService.getRecipeById(req.params.id);
    if (response.type === 'Success') {
      res.status(response.status).json(response.data);
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
};

export const addRecipe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const data: RecipeDTO = {
      title: req.body?.title,
      description: req.body?.description,
      ingredients: req.body?.ingredients,
      instructions: req.body?.instructions,
      recipeImage: req.file ? req.file.buffer.toString('base64') : undefined,
    };

    const response = await recipeService.addRecipe(data);
    if (response.type === 'Success') {
      res.status(response.status).json({ message: response.message, data: response.data });
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
};

export const changeFavoriteRecipe = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const favoriteRecipe = {
      id: req.body?.id,
      isFavorite: req.body?.isFavorite,
    };
    const response = await recipeService.changeFavoriteRecipe(favoriteRecipe);
    if (response.type === 'Success') {
      res.status(response.status).json({ message: response.message, data: response.data });
    } else {
      res.status(response.status).json(response);
    }
  } catch (error) {
    next(error);
  }
};