"use client";

import { useState } from "react";
import { users } from "@/data/user";
import { useUserContext } from "@/contexts/UserContext";


export default function LogIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const { setUser } = useUserContext();

    const handleLogIn = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const foundUser = users.find(
            (user)=> user.username === username && user.password === password
        );

        if(foundUser){
            setUser(foundUser);
            setError("");
        } else {
            setError("Wrong username or password")
        }
};

return(
    <form onSubmit={handleLogIn} className="flex flex-col gap-3 max-w-xs">
        <h2 className="text-xl font-bold">Welcome to Recipe Finder</h2>

        <label className="flex flex-col">
            Username
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border roundeed px-2 py-1"
            />
        </label>

        <label className="flex flex-col">
            Password
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border roundeed px-2 py-1"
             />
        </label>

        {/* only show when its error */}
        {error && <p className="text-red-600">{error}</p>}

        <button type="submit" className="border rounded px-2 py-1">
            Log in
        </button>      
    </form>
)
}