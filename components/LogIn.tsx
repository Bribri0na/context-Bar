"use client";

import { useState } from "react";
import { users } from "@/data/users";
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
    <form 
    onSubmit={handleLogIn} 
    className="pixel-box flex w-full flex-col gap-4 bg-neight p-6">
        <h2 className="font-heading text-xs leading-relaxed text-neon-cyon">INSER COIN TO ENTER</h2>

        <label className="flex flex-col gap-1">
            Username
            <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border-4 border-black bg-cream px-2 py-1 text-night outline-none focus:border-neon-cyan"
            />
        </label>

        <label className="flex flex-col gap-1">
            Password
            <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border-4 border-black bg-cream px-2 py-1 text-night outline-none focus:border-neon-cyan"
            />
        </label>

        {/* only show when its error */}
        {error && <p className="text-neon-yellow">{error}</p>}

        <button type="submit" className="pixel-button bg-neon-yellow text-night">
            START
        </button>      
    </form>
)
}