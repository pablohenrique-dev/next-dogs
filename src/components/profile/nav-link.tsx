import Link, { LinkProps } from "next/link";
import React from "react";

interface NavLinkProps extends LinkProps {
  children: React.ReactNode;
  isActive: boolean;
}

export function NavLink({ href, children, isActive, ...props }: NavLinkProps) {
  return (
    <Link
      href={href}
      {...props}
      className={`flex w-full items-center justify-start gap-2 rounded border-2 px-2 py-1 hover:border-primary-dark sm:aspect-square sm:w-fit sm:p-[2px] ${isActive ? "border-primary bg-primary" : "border-[#ececec] bg-[#ececec] hover:bg-primary"}`}
    >
      {children}
    </Link>
  );
}
