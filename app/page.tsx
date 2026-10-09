"use client"

import { useUserContext } from "@/contexts/UserContext";
import FeaturedRecipe from "@/components/FeaturedRecipe"


export default function Home(){
  const { user } = useUserContext()

  return (
  <section className="flex flex-col gap-4 p-4">
    <h2 className="text-2xl font-bold">Hi {user?.username}!</h2>

    <p>
      {user?.favouriteCategory
      ?`Today's pick from your favourite category: ${user.favouriteCategory}`
      : "Here is a random recipe for you"}
    </p>

    <FeaturedRecipe category={user?.favouriteCategory ?? null} />
  </section>
  )
}