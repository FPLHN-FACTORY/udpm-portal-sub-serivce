import {useState} from "react";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

import {GitHubLogoIcon} from "@radix-ui/react-icons";
import {buttonVariants} from "./ui/button";
import {Menu} from "lucide-react";
import {ModeToggle} from "./mode-toggle";
import {LogoIcon} from "./Icons";
import {Link} from "react-router-dom";

interface RouteProps {
    href: string;
    label: string;
}

const routeList: RouteProps[] = [
    {
        href: "#main",
        label: "Trang chủ",
    },
    {
        href: "#about",
        label: "Giới thiệu xưởng",
    },
    {
        href: "#opportunity",
        label: "Cơ hội",
    },
    {
        href: "#recruiment-form",
        label: "Tuyển dụng",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const NavbarMain = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const productsRedirect = "products/"
    return (
        <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
            <NavigationMenu className="mx-auto">
                <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
                    <NavigationMenuItem className="font-bold flex">
                        <Link
                            to={"/"}
                            rel="noreferrer noopener"
                            className="ml-2 font-bold text-xl cursor-pointer select-none grid justify-center align-middle gap-2 grid-flow-col"
                        >
                            <LogoIcon/>
                            FPLHN-FACTORY
                        </Link>
                    </NavigationMenuItem>

                    {/* mobile */}
                    <span className="flex lg:hidden">
                        <ModeToggle/>

                        <Sheet
                            open={isOpen}
                            onOpenChange={setIsOpen}
                        >
                          <SheetTrigger className="">
                            <Menu
                                className="flex lg:hidden h-5 w-5"
                                onClick={() => setIsOpen(true)}
                            >
                              <span className="sr-only">Menu Icon</span>
                            </Menu>
                          </SheetTrigger>

                          <SheetContent side={"left"}>
                            <SheetHeader>
                              <SheetTitle className="font-bold text-center text-xl">
                                FPLHN-FACTORY / Landing Page
                              </SheetTitle>
                            </SheetHeader>
                              <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                                  {routeList.map(({href, label}) => (
                                      <a
                                          key={label}
                                          href={href}
                                          onClick={() => {
                                              setIsOpen(false);
                                          }}
                                          className={buttonVariants({variant: 'ghost'})}
                                      >
                                          {label}
                                      </a>
                                  ))}
                                  <Link
                                      to={productsRedirect}
                                      className={`w-[120px] border ${buttonVariants({variant: 'secondary'})}`}
                                  >
                                    <GitHubLogoIcon className="w-5 h-5 mr-2"/>
                                    Sản phẩm
                                  </Link>
                                </nav>
                          </SheetContent>
                        </Sheet>
                    </span>
                    {/* desktop */}
                    <nav className="hidden lg:flex gap-2">
                        {routeList.map((route: RouteProps) => (
                            <a
                                key={route.label}
                                href={route.href}
                                rel="noreferrer noopener"
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden lg:flex gap-2">
                        <Link
                            to={productsRedirect}
                            className={`w-[120px] border ${buttonVariants({variant: 'secondary'})}`}
                        >
                            <GitHubLogoIcon className="w-5 h-5 mr-2"/>
                            Sản phẩm
                        </Link>
                        <ModeToggle/>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};
