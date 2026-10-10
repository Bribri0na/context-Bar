"use client";

import { useUserContext } from "@/contexts/UserContext";
import LogIn from "./LogIn";
import Header from "./Header";
import FeaturedDrink from "./FeaturedDrink";

export default function LoginWrapper({
    children,
}:{
    children: React.ReactNode;
}) {
    const { user, isReady } = useUserContext();

    if(!isReady){
        return<p className="p-4 font-heading text-xs">LOADING...</p>
    }

        if(!user){
            return (
            <main className="mx-auto flex min-h-screen max-w-4xl flex-col items-center gap-10 p-4 pt-16 md:flex-row md:items-start md:justify-center md:pt-24">
                <div className="flex w-full max-w-sm flex-col gap-6">
                    <h1 className="font-heading text-2xl leading-relaxed text-neon-prink">
                        8-Bri Bar
                    </h1>       
                    <LogIn />            
                </div>

                <div className="flex flex-col gap-3">
                    <p className="font-heading text-xs text-neon-cyan">
                        SPECIAL OF THE NIGHT
                    </p>
                    <FeaturedDrink category={null} />
                </div>
            </main>           
        )       
    }

    return(
        <>
        <Header />
        <main className="mx-auto max-w-6xl p-4">{children}</main>
        </>
    )
}