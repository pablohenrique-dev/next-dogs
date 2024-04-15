"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./icon/logo";

export function Footer() {
  const pathname = usePathname();

  if (pathname.includes("account")) return null;

  return (
    <footer className="bg-primary">
      <div className="container flex flex-col items-center justify-center gap-4 py-8 sm:flex-row">
        <Logo color="primaryDark" displayText={false} />
        <p className="text-center font-body text-lg">
          Dogs. Alguns direitos reservados.
        </p>
      </div>
    </footer>
  );
}
