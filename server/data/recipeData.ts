import { PrismaClient } from '@prisma/client';
import { RecipeDTO } from './recipeDto';

const prisma = new PrismaClient();

export const getAllRecipes = async () => {
  return await prisma.recipe.findMany();
};

export const getRecipeById = async (id: string) => {
  return await prisma.recipe.findUnique({
    where: { id: id },
  });
};

export const changeFavoriteRecipe = async (data: {id: string, isFavorite: boolean}) => {
  return await prisma.recipe.update({
    where: { id: data.id },
    data: {
      isFavorite: data.isFavorite
    },
  });
};

export const addRecipe = async (data: RecipeDTO) => {
  return await prisma.recipe.create({
    data: {
      data
    },
  });
};
