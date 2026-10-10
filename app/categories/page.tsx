"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useUserContext } from "@/contexts/UserContext";
import { getCategories } from "@/lib/api";
import { CategoryType } from "@/types/category";
import { categoryIcons } from "@/data/categoryIcons";

export default function CategoriesPage() {
  const { user, setUser } = useUserContext();
  const [categories, setCategories] = useState<CategoryType[]>([]);

  useEffect(() => {
    const loadCategories = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    loadCategories();
  }, []);

  const handleFavourite = (categoryName: string) => {
    if (!user) return;
    setUser({ ...user, favouriteCategory: categoryName });
  };

  return (
    <section className="flex flex-col gap-6">
      <h2 className="font-heading text-xl text-neon-yellow">CATEGORIES</h2>

      {categories.length === 0 && <p>Loading categories...</p>}

      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => {
          const name = category.strCategory;
          const isFavourite = user?.favouriteCategory === name;

          return (
            <li
              key={name}
              className="pixel-box flex flex-col gap-4 bg-cream p-4 text-night"
            >
              <Link
                href={`/categories/${encodeURIComponent(name)}`}
                className="flex items-center gap-3 text-2xl hover:text-neon-pink"
              >
                <span className="text-4xl">{categoryIcons[name] ?? "🍸"}</span>
                {name}              
              </Link>

              <button
                onClick={() => handleFavourite(name)}
                className={`pixel-button text-night ${
                  isFavourite ? "bg-neon-yellow" : "bg-cream"
                }`}
              >
                {isFavourite ? "★ Favourite" : "☆ Set as favourite"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
