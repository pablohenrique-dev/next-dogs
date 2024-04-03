"use client";

import { User } from "@/@types/global";
import { userGet } from "@/actions/user-get";
import React from "react";

interface UserContextType {
  user: null | User;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

export const userContext = React.createContext({} as UserContextType);

export function UserContextProvider({ children }: React.PropsWithChildren) {
  const [user, setUser] = React.useState<null | User>(null);

  React.useEffect(() => {
    async function autoLogin() {
      const { data } = await userGet();
      if (data) {
        setUser({
          user_email: data.email,
          user_display_name: data.username,
          user_nicename: data.nome,
        });
      }
    }
    autoLogin();
  }, []);

  return (
    <userContext.Provider value={{ user, setUser }}>
      {children}
    </userContext.Provider>
  );
}
