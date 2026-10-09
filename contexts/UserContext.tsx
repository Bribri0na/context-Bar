"use client"

import { createContext, useContext, useState } from "react";
import { UserType } from "@/types/user";

export type UserContextType = {
    user: UserType | null;
    setUser:(user: UserType | null) => void;
}

export const UserContext = createContext< UserContextType | null>(null)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<UserType | null>(null);

    return(
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => {
    const context = useContext(UserContext);
    if(!context){
        throw new Error("useUserContext must be used inside UserProvider")
    } 
    return context

}