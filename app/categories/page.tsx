"use client";

import { useUserContext } from "@/contexts/UserContext";
import { useEffect, useState } from "react";
import Link from "next/link";
import { getCategories } from "@/lib/api";
import { CategoryType } from "@/types/category";

export default function Home() {
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
    <section className="p-4">
      <h2 className="text-2xl font-bold">Hi {user?.username}</h2>

      {categories.length === 0 && <p>Loading categories...</p>}

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const isFavourite = user?.favouriteCategory === category.strCategory;

          return (
            <li
              key={category.idCategory}
              className="border rounded p-3 flex flex-col gap-2"
            >
              <Link href={`/categories/${category.strCategory}`}>
                <img
                  src={category.strCategoryThumb}
                  alt={category.strCategory}
                  className="w-full"
                />
                <h3 className="font-bold">{category.strCategory}</h3>
              </Link>

              <button
                onClick={() => handleFavourite(category.strCategory)}
                className="border rounded px-2 py-1"
              >
                {isFavourite ? "* Favourite" : "☆ Set as favourite"}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
