export class RecipeDTO {
  title: string;
  description: string;
  ingredients: string[];
  instructions: string[];
  recipeImage: string;
  isFavorite: boolean

  constructor(
    title: string,
    description: string,
    ingredients: string[],
    instructions: string[],
    recipeImage: string,
    isFavorite: boolean
  ) {
    this.title = title;
    this.description = description;
    this.ingredients = ingredients;
    this.instructions = instructions;
    this.recipeImage = recipeImage;
    this.isFavorite = isFavorite;
  }
}