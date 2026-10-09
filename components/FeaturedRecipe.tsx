"use client";

import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";
import { RecipeSummary } from "@/types/recipe";
import { getRandomRecipe, getRecipeFromCategory } from "@/lib/api";

type FeaturedRecipeProps = {
  category: string | null;
};

export default function FeaturedRecipe({ category }: FeaturedRecipeProps) {
  const [recipe, setRecipe] = useState<RecipeSummary | null>(null);

  useEffect(() => {
    const loadRecipe = async () => {
      // Favourite category → recipe from that category, otherwise a random one
      const result = category
        ? await getRecipeFromCategory(category)
        : await getRandomRecipe();
      setRecipe(result);
    };

    loadRecipe();
  }, [category]);

  if (!recipe) {
    return <p>Loading recipe...</p>;
  }

  return (
    <div className="max-w-sm">
      <RecipeCard recipe={recipe} />
    </div>
  );
}
