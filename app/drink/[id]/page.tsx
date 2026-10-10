"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useUserContext } from "@/contexts/UserContext";
import { getDrinkById } from "@/lib/api";
import { getIngredients } from "@/lib/utils";
import { DrinkDetail, DrinkSummary } from "@/types/drink";
import BackButton from "@/components/BackButton";

export default function DrinkPage() {
  const { id } = useParams<{ id: string }>();
  const { user, setUser } = useUserContext();
  const [drink, setDrink] = useState<DrinkDetail | null>(null);

  useEffect(() => {
    const loadDrink = async () => {
      const result = await getDrinkById(id);
      setDrink(result);
    };
    loadDrink();
  }, [id]);

  if (!drink) {
    return <p>Loading drink...</p>;
  }

  const isSaved =
    user?.savedDrinks.some((saved) => saved.idDrink === drink.idDrink) ?? false;

  const handleToggleSave = () => {
    if (!user) return;

    const summary: DrinkSummary = {
      idDrink: drink.idDrink,
      strDrink: drink.strDrink,
      strDrinkThumb: drink.strDrinkThumb,
    };

    const updatedSavedDrinks = isSaved
      ? user.savedDrinks.filter((saved) => saved.idDrink !== drink.idDrink)
      : [...user.savedDrinks, summary];

    setUser({ ...user, savedDrinks: updatedSavedDrinks });
  };

  return (
    <div>
      <BackButton />
      <article className="grid gap-8 md:grid-cols-2">
      <img
        src={drink.strDrinkThumb}
        alt={drink.strDrink}
        className="pixel-box w-full"
      />

      <div className="flex flex-col gap-4">
        <h2 className="break-words font-heading text-lg leading-relaxed text-neon-yellow md:text-xl">
          {drink.strDrink}
        </h2>
        <p className="text-2xl text-neon-cyan">
          {drink.strCategory} · {drink.strAlcoholic} · {drink.strGlass}
        </p>

        <button
          onClick={handleToggleSave}
          className={`pixel-button w-fit text-night ${
            isSaved ? "bg-neon-pink" : "bg-neon-yellow"
          }`}
        >
          {isSaved ? "♥ SAVED" : "♡ SAVE DRINK"}
        </button>

        <h3 className="font-heading text-sm text-neon-pink">INGREDIENTS</h3>
        <ul className="list-disc pl-6 text-2xl">
          {getIngredients(drink).map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <h3 className="font-heading text-sm text-neon-pink">HOW TO MAKE</h3>
        <p className="text-2xl">{drink.strInstructions}</p>
      </div>
    </article>
    </div>
    
    
  );
}
