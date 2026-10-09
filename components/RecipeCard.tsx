import Link from "next/link";
import { RecipeSummary } from "@/types/recipe";

type RecipeCardProps = {
  recipe: RecipeSummary;
};

export default function RecipeCard({ recipe }: RecipeCardProps) {
  return (
    <Link
      href={`/recipe/${recipe.idMeal}`}
      className="block border rounded overflow-hidden hover:shadow-lg"
    >
      <img src={recipe.strMealThumb} alt={recipe.strMeal} className="w-full" />
      <h3 className="p-3 font-bold">{recipe.strMeal}</h3>
    </Link>
  );
}
