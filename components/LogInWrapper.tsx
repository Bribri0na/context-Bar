"use client";

import { useUserContext } from "@/contexts/UserContext";
import LogIn from "./LogIn";
import Header from "./Header";
import FeaturedRecipe from "./FeaturedRecipe";

export default function LoginWrapper({
    children,
}:{
    children: React.ReactNode;
}) {
    const { user } = useUserContext();

    if(!user){
        return(
            <main className="max-auto max-w-6xl">
                {children}
                <LogIn />
                <FeaturedRecipe category={null} />
            </main>           
        )
        
    }

    return(
        <>
        <Header />
        <main>{children}</main>
        </>
    )
}