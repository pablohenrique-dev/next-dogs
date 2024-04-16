"use client";

import { User } from "@/@types/global";
import { userLogoutAction } from "@/actions/user-logout";
import { validateTokenAction } from "@/actions/validate-token";
import React from "react";

interface UserContextProps {
  user: null | User;
  setUserState: React.Dispatch<React.SetStateAction<User | null>>;
}

const UserContext = React.createContext<null | UserContextProps>(null);

export const useUser = () => {
  const context = React.useContext(UserContext);

  if (context === null) {
    throw new Error("UseContext deve estar dentro do Provider");
  }

  return context;
};

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
    <UserContext.Provider value={{ user: userState, setUserState }}>
      {children}
    </UserContext.Provider>
  );
}
