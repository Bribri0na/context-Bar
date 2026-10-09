import { RecipeDetail } from "@/types/recipe";

export function getIngredients(recipe: RecipeDetail): string[] {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeausre{i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ?? ""} ${ingredient}`.trim());
    }
  }
  return ingredients;
}
