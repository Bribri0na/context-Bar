"use client";


import Link from "next/link";
import{ useUserContext } from "@/contexts/UserContext";
import RecipeCard from "@/components/RecipeCard";


export default function ProfilePage(){

    const { user, setUser } = useUserContext()
    
    if(!user)return null;

    const handleRemove = (idMeal: string) => {
        setUser({
            ...user,
            savedRecipes: user.savedRecipes.filter(
                (recipe) => recipe.idMeal !== idMeal
            )
        })
    }
    return (
        <section className="p-4 flex flex-col gap-6">
            <div>
                <h2 className="text-2xl font-bold">My profile</h2>
                <p>Favourite category: {user.favouriteCategory ?? "Not chosen yet"}</p>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">
                    Saved recipes({ user.savedRecipes.length})
                </h3>

                {user.savedRecipes.length ===0 ? (
                    <p>
                        You have no saved recipes yet.{""}
                        <Link href="/categories" className="underline">
                        Find some recipes
                        </Link>
                    </p>
                ) :(
                    <ul className="grid grid-cols-2 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {user.savedRecipes.map((recipe) => (
                            <li key={recipe.idMeal} className="flex flex-col gap-2">
                                <RecipeCard recipe={recipe} />
                                <button
                                onClick={() => handleRemove(recipe.idMeal)}
                                className="border rounded px-2 py-1"
                                >
                                    Remove
                                </button>
                            </li>
                        ))}

                    </ul>
                )}
            </div>
        </section>
    )
}