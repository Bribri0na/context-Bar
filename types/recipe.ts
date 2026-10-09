export type RecipeSummary = {
    idMeal: string;
    strMeal: string;
    strMealThumb: string;
}


export type RecipeDetail = RecipeSummary & {
    strCategory: string;
    strArea: string;
    strInstructions: string;

    [key: string]: string | null
}
