"use client";

import React from "react";

interface ToggleMobileMenuProps extends React.ComponentProps<"button"> {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function ToggleMobileMenu({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  ...props
}: ToggleMobileMenuProps) {
  return (
    <button
      onClick={() => setIsMobileMenuOpen((state) => !state)}
      className={`flex size-10 flex-col items-center justify-center gap-[5px] rounded bg-[#ececec] p-1 transition-all sm:hidden ${isMobileMenuOpen && "origin-center rotate-90 bg-primary outline outline-1 outline-primary-dark"}`}
      {...props}
    >
      {Array.from({ length: 3 }).map((_, i) => (
        <span
          key={i}
          className={`h-[2px] w-[70%] rounded bg-primary ${isMobileMenuOpen && "bg-primary-dark"}`}
        ></span>
      ))}
    </button>
  );
}
