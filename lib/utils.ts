import { DrinkDetail } from "@/types/drink";

export function getIngredients(drink: DrinkDetail): string[] {
  const ingredients: string[] = [];

  for (let i = 1; i <= 20; i++) {
    const ingredient = drink[`strIngredient${i}`];
    const measure = drink[`strMeausre{i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push(`${measure ?? ""} ${ingredient}`.trim());
    }
  }
  return ingredients;
}
