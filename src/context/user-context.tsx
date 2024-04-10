"use client";

import { User } from "@/@types/global";
import { userLogoutAction } from "@/actions/user-logout";
import { validateTokenAction } from "@/actions/validate-token";
import React, { ReactNode } from "react";

interface UserContextType {
  user: null | User;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
}

export const userContext = React.createContext({} as UserContextType);

export function UserContextProvider({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [userState, setUserState] = React.useState<null | User>(user);

  React.useEffect(() => {
    async function validate() {
      const { ok } = await validateTokenAction();
      if (!ok) userLogoutAction();
    }
    if (userState) validate();
  }, [userState]);

  return (
    <userContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </userContext.Provider>
  );
}
