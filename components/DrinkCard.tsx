import Link from "next/link"
import { DrinkSummary } from "@/types/drink"

type DrinkCardProps ={
    drink:DrinkSummary
}

export default function DrinkCard({ drink }: DrinkCardProps ){
    return(
        <Link
        href= {`/drink/${drink.idDrink}`}
        className="pixel-box block bg-cream text-night transition-transform hover:-trnaslate-y-1"
        >
            <img
            src={drink.strDrinkThumb}
            alt={drink.strDrink}
            className="aspect-square w-full border-b-4 border-black object-cover"
            />
            <h3 className="p-3 text-2xl leading-tight">{drink.strDrink}</h3>
        </Link>
    )
}