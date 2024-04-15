import React from "react";

interface MenuMobileProps extends React.ComponentProps<"menu"> {
  isOpen: boolean;
}

export function MenuMobile({ children, isOpen, ...props }: MenuMobileProps) {
  return (
    <menu
      className={`absolute right-0 top-14 z-50 flex flex-col items-start gap-1 rounded bg-[#ececec] p-2 transition-all sm:hidden ${isOpen ? "translate-x-0 opacity-100" : "translate-x-[200px]"}`}
      {...props}
    >
      {children}
    </menu>
  );
}
