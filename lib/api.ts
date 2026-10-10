import { DrinkDetail, DrinkSummary } from "@/types/drink";
import { CategoryType } from "@/types/category";

const BASE_URL = "https://www.thecocktaildb.com/api/json/v1/1";

export async function getRandomDrink(): Promise<DrinkSummary> {
  const res = await fetch(`${BASE_URL}/random.php`);
  const data = await res.json();
  return data.drinks[0];
}

export async function getDrinksByCategory(
  category: string,
): Promise<DrinkSummary[]> {
  const res = await fetch(
    `${BASE_URL}/filter.php?c=${encodeURIComponent(category)}`,
  );
  const data = await res.json();
  return data.drinks ?? [];
}

export async function getDrinkFromCategory(
  category: string,
): Promise<DrinkSummary> {
  const drinks = await getDrinksByCategory(category);
  const randomIndex = Math.floor(Math.random() * drinks.length);
  return drinks[randomIndex];
}

export async function getCategories(): Promise<CategoryType[]> {
  const res = await fetch(`${BASE_URL}/list.php?c=list`);
  const data = await res.json();
  return data.drinks;
}

export async function getDrinkById(id: string): Promise<DrinkDetail> {
  const res = await fetch(`${BASE_URL}/lookup.php?i=${id}`);
  const data = await res.json();
  return data.drinks[0];
}
