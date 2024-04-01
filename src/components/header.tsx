"use client";

import Link from "next/link";
import { Logo } from "./icon/logo";
import { usePathname } from "next/navigation";
import { use, useContext } from "react";
import { userContext } from "@/context/user-context";
import { User } from "./icon/user";

export function Header() {
  const pathname = usePathname();
  const { user } = useContext(userContext);

  if (pathname.includes("account")) return null;
  return (
    <header className="border-b border-[#e6e6e6]">
      <nav className="container flex animate-fade-bottom items-center justify-between py-4">
        <Link href="/">
          <Logo />
        </Link>
        {user ? (
          <Link href="/profile" className="flex items-center gap-2 font-body">
            {user.user_display_name}
            <User color="black" />
          </Link>
        ) : (
          <Link href="/account/login" className="font-body">
            Criar / Entrar
          </Link>
        )}
      </nav>
    </header>
  );
}
