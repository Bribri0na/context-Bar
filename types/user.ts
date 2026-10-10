import { DrinkSummary } from "./drink";

export type UserType = {
  username: string;
  password: string;
  favouriteCategory: string | null;
  savedDrinks: DrinkSummary[];
};
