"use client"

import Link from "next/link";
import { useUserContext } from "@/contexts/UserContext"

export default function Header(){
    const {setUser } = useUserContext();

    return(
        <header className="flex flex-col gap-3 p-4 border-b sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-2xl font-bold">Recipe Finder</h1>
            <nav className="flex gap-4">
                <Link href="/">Home</Link>
                <Link href="/categories">Categories</Link>
                <Link href="/profile">Profile</Link>
            </nav>

            <button onClick={() => setUser(null)} className="border rounded px-2 py-1">
                Log out
            </button>
        </header>
    )
}