import { RecipeDetail, RecipeSummary } from "@/types/recipe";
import { CategoryType } from "@/types/category";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export async function getRandomRecipe(): Promise<RecipeSummary> {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data = await res.json();
  return data.meals[0];
}

export async function getRecipeFromCategory(
  category: string,
): Promise<RecipeSummary> {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();
  const randomIndex = Math.floor(Math.random() * data.meals.length);
  return data.meals[randomIndex];
}

export async function getCategories(): Promise<CategoryType[]> {
  const res = await fetch(`${BASE_URL}/categories.php`);
  const data = await res.json();
  return data.categories;
}

export async function getRecipesByCategory(
  category: string,
): Promise<RecipeSummary[]> {
  const res = await fetch(`${BASE_URL}/filter.php?c=${category}`);
  const data = await res.json();
  return data.meals;
}

export async function getRecipeById(id: string): Promise<RecipeDetail> {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.meals[0];
}
