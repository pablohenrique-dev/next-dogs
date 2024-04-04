import React from "react";

interface MenuDesktopProps extends React.ComponentProps<"menu"> {}

export function MenuDesktop({ children, ...props }: MenuDesktopProps) {
  return (
    <menu className={`hidden animate-fade-right gap-3 sm:flex`} {...props}>
      {children}
    </menu>
  );
}
