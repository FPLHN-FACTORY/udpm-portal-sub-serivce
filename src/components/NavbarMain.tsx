import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent } from "@/components/ui/sheet";

import { ModeToggle } from "./mode-toggle";
import { LogoIcon } from "./Icons";
import { Link } from "react-router-dom";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "/udpm-portal-sub-serivce/",
    label: "Trang chủ",
  },
  {
    href: "/udpm-portal-sub-serivce/aboutthefactory",
    label: "Giới thiệu",
  },
  {
    href: "/udpm-portal-sub-serivce/products",
    label: "Sản phẩm",
  },
  {
    href: "/udpm-portal-sub-serivce/recruitment",
    label: "Tuyển dụng",
  },
  {
    href: "/udpm-portal-sub-serivce/blog",
    label: "Blog",
  },
];

export const NavbarMain = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    window.location.href = href;
    console.log(href)
  };
  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background h-[100px] flex items-center justify-center ">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <Link
              to={"/"}
              rel="noreferrer noopener"
              className="ml-2 font-bold text-xl cursor-pointer select-none grid justify-center align-middle gap-2 grid-flow-col"
            >
              <LogoIcon />
              FPLHN-FACTORY
            </Link>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex lg:hidden">
            <ModeToggle />

            <Sheet>
              <SheetContent side={"left"}>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4"></nav>
              </SheetContent>
            </Sheet>
          </span>
          {/* desktop */}
          <nav className="hidden lg:flex gap-2 navbar">
            {routeList.map((route) => {
              const isActive = window.location.href === route.href;

              return (
                <Link
                  key={route.label}
                  to={route.href}
                  className={`nav-link text-[17px] bg-white  `}
                  onClick={(e) => handleClick(e, route.href)}
                >
                  <span
                    className={`text-[18px] text-black relative ${
                      isActive ? "active " : ""
                    }`} // Add 'active' class
                  >
                    {route.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex gap-2">
            <ModeToggle />
          </div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
