"use client";

import Link from "next/link";
import { useUserContext } from "@/contexts/UserContext";
import DrinkCard from "@/components/DrinkCard";

export default function ProfilePage() {
  const { user, setUser } = useUserContext();

  if (!user) return null;


  const handleRemove = (idDrink: string) => {
    setUser({
      ...user,
      savedDrinks: user.savedDrinks.filter((drink) => drink.idDrink !== idDrink),
    });
  };

  return (
    <section className="flex flex-col gap-8">
      <div className="pixel-box flex flex-col gap-2 bg-cream p-6 text-night">
        <h2 className="font-heading text-lg">PLAYER PROFILE</h2>
        <p className="text-2xl">Username: {user.username}</p>
        <p className="text-2xl">
          Favourite category: {user.favouriteCategory ?? "Not chosen yet"}
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <h3 className="font-heading text-sm text-neon-yellow">
          SAVED DRINKS ({user.savedDrinks.length})
        </h3>

        {user.savedDrinks.length === 0 ? (
          <p className="text-2xl">
            No saved drinks yet.{" "}
            <Link href="/categories" className="text-neon-cyan underline">
              Find some drinks
            </Link>
          </p>
        ) : (
          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {user.savedDrinks.map((drink) => (
              <li key={drink.idDrink} className="flex flex-col gap-3">
                <DrinkCard drink={drink} />
                <button
                  onClick={() => handleRemove(drink.idDrink)}
                  className="pixel-button bg-neon-pink text-night"
                >
                  REMOVE
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}

