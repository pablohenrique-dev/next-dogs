"use client";

import React from "react";
import { HeadingDetail } from "../heading-detail";
import { useUser } from "@/context/user-context";
import { userLogoutAction } from "@/actions/user-logout";
import { usePathname } from "next/navigation";
import { Feed } from "../icon/feed";
import { Chart } from "../icon/chart";
import { SignOut } from "../icon/sign-out";
import { NavLink } from "./nav-link";
import { MenuDesktop } from "./menu-desktop";
import { MenuMobile } from "./menu-mobile";
import { ToggleMobileMenu } from "./toggle-mobile-menu";
import { Plus } from "../icon/plus";

const links = [
  {
    href: "/profile/",
    icon: Feed,
    text: "Minhas fotos",
    condition: (pathname: string) => pathname === "/profile",
  },
  {
    href: "/profile/statistics",
    icon: Chart,
    text: "Estatísticas",
    condition: (pathname: string) => pathname.includes("statistics"),
  },
  {
    href: "/profile/new-post",
    icon: Plus,
    text: "Adicionar foto",
    condition: (pathname: string) => pathname.includes("new-post"),
  },
];

function getTitle(pathname: string) {
  switch (pathname) {
    case "/profile/statistics":
      return "Estatísticas";
    case "/profile/new-post":
      return "Novo post";
    default:
      return "Minha conta";
  }
}

export function ProfileHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const { setUserState } = useUser();
  const pathname = usePathname();

  const NavLinks = (
    <>
      {links.map((link) => (
        <NavLink
          href={link.href}
          key={link.href}
          isActive={link.condition(pathname)}
        >
          <link.icon
            color={link.condition(pathname) ? "primaryDark" : "black"}
            size="big"
          />
          <p className="text-nowrap font-medium sm:hidden">{link.text}</p>
        </NavLink>
      ))}
      <button
        onClick={handleClick}
        className="m-0 flex h-fit w-full items-center justify-start gap-2 text-nowrap rounded border-2 border-[#ececec] bg-[#ececec] p-[2px] px-2 py-1 transition-all hover:border-primary-dark hover:bg-primary sm:aspect-square sm:w-fit sm:p-[2px]"
      >
        <SignOut size="big" color="black" />
        <p className="font-medium sm:hidden">Sair</p>
      </button>
    </>
  );

  async function handleClick() {
    await userLogoutAction();

    setUserState(null);
  }

  React.useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="flex items-center justify-between">
      <h2 className="relative animate-fade-left font-heading text-3xl sm:text-5xl">
        {getTitle(pathname)}
        <HeadingDetail />
      </h2>

      <nav className="relative">
        <MenuDesktop>{NavLinks}</MenuDesktop>

        <MenuMobile isOpen={isMobileMenuOpen}>{NavLinks}</MenuMobile>

        <ToggleMobileMenu
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </nav>
    </header>
  );
}
