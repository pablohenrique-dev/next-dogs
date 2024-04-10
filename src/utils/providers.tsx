"use client";

import React from "react";
import { UserContextProvider } from "@/context/user-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { User } from "@/@types/global";

const queryClient = new QueryClient();

export function Providers({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider user={user}>{children}</UserContextProvider>
    </QueryClientProvider>
  );
}
