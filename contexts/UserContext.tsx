"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { UserType } from "@/types/user";

const STORAGE_KEY = "bar-user";

export type UserContextType = {
  user: UserType | null;
  setUser: (user: UserType | null) => void;
  isReady: boolean;
};

export const UserContext = createContext<UserContextType | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UserType | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem(STORAGE_KEY);
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    if (user) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user, isReady]);

  return (
    <UserContext.Provider value={{ user, setUser, isReady }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used inside UserProvider");
  }
  return context;
};
