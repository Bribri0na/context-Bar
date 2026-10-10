"use client"

import { useEffect, useState } from "react";
import DrinkCard from "./DrinkCard"
import { DrinkSummary } from "@/types/drink"
import { getDrinkFromCategory, getRandomDrink } from "@/lib/api"

type FeatuedDrinkProps = {
    category:string | null;
}

export default function FeaturedDrink({ category }:FeatuedDrinkProps){
    const [drink, setDrink] = useState<DrinkSummary | null>(null);

    useEffect(() => {
        const loadDrink = async () => {
            const result = category
            ? await getDrinkFromCategory(category)
            : await getRandomDrink();
            setDrink(result)
        }
        
        loadDrink()
    },[category])
    
    if(!drink){
        return<p>Loading drink</p>
    }

    return(
        <div className="max-w-xs">
            <DrinkCard drink={drink} />
        </div>
    )
    
}