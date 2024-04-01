"use client";

import { User } from "@/@types/globald";
import React from "react";

interface UserContextType {
  user: null | User;
  isLogged: boolean;
  error: null | string;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export const userContext = React.createContext({} as UserContextType);

export function UserContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = React.useState<null | User>(null);
  const [isLogged, setIsLogged] = React.useState(false);
  const [error, setError] = React.useState<null | string>(null);

  return (
    <userContext.Provider
      value={{ user, isLogged, error, setUser, setIsLogged, setError }}
    >
      {children}
    </userContext.Provider>
  );
}
