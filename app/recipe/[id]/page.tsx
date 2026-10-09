"use client"

import { useEffect, useState } from "react";
import { useParams } from "next/navigation"
import { useUserContext } from "@/contexts/UserContext";
import { getRecipeById } from "@/lib/api";
import { getIngredients } from "@/lib/utils";
import { RecipeDetail, RecipeSummary } from "@/types/recipe";

export default function RecipePage() {

    const { id } = useParams <{ id:string }>();
    const { user, setUser } = useUserContext()
    const [ recipe, setRecipe] = useState<RecipeDetail | null>(null);

    useEffect(() => {
        const loadRecipe = async () => {
            const result = await getRecipeById(id)
            setRecipe(result);
        }
        loadRecipe()
    },[id] )

    if (!recipe) {
        return <p className="p-4">Loading recipe...</p>
    }

    const isSaved =
    user?. savedRecipes.some((saved) => saved.idMeal === recipe.idMeal) ?? false;

    const handleToggleSave = () => {
        if(!user)return;

        const summary: RecipeSummary = {
            idMeal: recipe.idMeal,
            strMeal: recipe.strMeal,
            strMealThumb: recipe.strMealThumb,
        }

        const updatedSavedRecipes = isSaved
        ? user.savedRecipes.filter((saved) => saved.idMeal !== recipe.idMeal)
        : [...user.savedRecipes, summary]

        setUser({ ...user, savedRecipes: updatedSavedRecipes })
    }

    return(
        <article className="p-4 grid gap-6 md;grid-cols-2">
            <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
            className="w-full rounded"
            />

            <div className="flex flex-col gap-4">
                <h2 className="text-3xl font-bold">{recipe.strMeal}</h2>
                <p>
                    {recipe.strCategory} . {recipe.strArea}
                </p>

                <button
                onClick={handleToggleSave}
                className="border rounded px-3 py-2 w-fit"
                >
                    {isSaved ? "♥ Saved" : " ♡ Save recipe"}

                </button>

                <h3 className="text-xl font-bold">Ingredients</h3>
                <ul className="list-disc pl-5">
                    {getIngredients(recipe).map((item) => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
            </div>

            <section className="md:col-span-2">
                <h3 className="text-xl font-bold mb-2">Instructions</h3>
                <p className="whitespace-pre-line">{recipe.strInstructions}</p>
            </section>
        </article>
    )
}
 
