"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import DrinkCard from "@/components/DrinkCard";
import { getDrinksByCategory } from "@/lib/api";
import { DrinkSummary } from "@/types/drink";
import FeaturedDrink from "@/components/FeaturedDrink";
import BackButton from "@/components/BackButton"

export default function CategoryPage() {
  const params = useParams<{ category: string }>();

  const category = decodeURIComponent(params.category);
  const [drinks, setDrinks] = useState<DrinkSummary[]>([]);

  useEffect(() => {
    const loadDrinks = async () => {
      const result = await getDrinksByCategory(category);
      setDrinks(result);
    };
    loadDrinks();
  }, [category]);

  return (
    <section className="flex flex-col gap-6">
      <BackButton label ="Back to categories" />

      <h2 className="font-heading text-xl leading-relaxed text-neon-yellow">
        {category.toUpperCase()}
      </h2>

      {drinks.length === 0 && <p>Loading drinks...</p>}

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {drinks.map((drink) => (
          <li key={drink.idDrink}>
            <DrinkCard drink={drink} />
          </li>
        ))}
      </ul>
    </section>
  );
}
