"use client";

import Link from "next/link";
import { Logo } from "./icon/logo";
import { usePathname } from "next/navigation";

export function Header() {
  const pathname = usePathname();

  if (pathname.includes("account")) return null;
  return (
    <header className="border-b border-[#e6e6e6]">
      <nav className="container flex animate-fade-bottom items-center justify-between py-4">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/account/login" className="font-body">
          Criar / Entrar
        </Link>
      </nav>
    </header>
  );
}
