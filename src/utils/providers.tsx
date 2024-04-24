"use client";

import React from "react";
import { UserContextProvider } from "@/context/user-context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { User } from "@/@types/global";

export function Providers({
  children,
  user,
}: {
  children: React.ReactNode;
  user: User | null;
}) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserContextProvider user={user}>{children}</UserContextProvider>
    </QueryClientProvider>
  );
}
