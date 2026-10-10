"use client"

import { useUserContext } from "@/contexts/UserContext";
import FeaturedDrink from "@/components/FeaturedDrink"


export default function Home(){
  const { user } = useUserContext()

  return (
  <section className="flex flex-col p-4">
    <h2 className="font-heading text-xl leading-relaxed text-neon-yellow">
      Hi {user?.username.toUpperCase()}!
    </h2>

    <p className="text-2xl">
      {user?.favouriteCategory
      ?`Tonight's pick from your favourite category: ${user.favouriteCategory}`
      : "Here is a random drink for you"}
    </p>

    <FeaturedDrink category={user?.favouriteCategory ?? null} />
  </section>
  )
}