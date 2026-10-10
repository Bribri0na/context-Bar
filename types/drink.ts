export type DrinkSummary = {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
};

export type DrinkDetail = DrinkSummary & {
  strCategory: string;
  strAlcholic: string;
  strGlass: string;
  strInstructions: string;
  [key: string]: string | null;
};
