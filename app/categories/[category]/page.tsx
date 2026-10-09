"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import RecipeCard from "@/components/RecipeCard";
import { getRecipesByCategory } from "@/lib/api";
import { RecipeSummary } from "@/types/recipe";

export default function CategoryPage() {
  const { category } = useParams<{ category: string }>();
  const [recipes, setRecipes] = useState<RecipeSummary[]>([]);

  useEffect(() => {
    const loadRecipes = async () => {
        const result = await getRecipesByCategory(category)
        setRecipes(result)
    }
    loadRecipes()
  },[category])


  return(
    <section className="p-4">
        <Link href="/categories" className="underline">
        ← Back to categories
        </Link>

        <h2 className="text-2xl font-bold my-4">{category}</h2>

        {recipes.length === 0 && <p>Loading recipes...</p>}

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {recipes.map((recipe) => (
                <li key={recipe.idMeal}>
                    <RecipeCard recipe={recipe} />
                </li>
            ))}

        </ul>

    </section>
  )
}
