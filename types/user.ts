import { RecipeSummary } from "./recipe";

export type UserType = {
  username: string;
  password: string;
  favouriteCategory: string | null;
  savedRecipes: RecipeSummary[];
};
