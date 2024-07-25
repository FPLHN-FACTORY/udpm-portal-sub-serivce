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
import {buttonVariants} from "@/components/ui/button";
import {Menu} from "lucide-react";
import {ModeToggle} from "@/components/mode-toggle";
import {LogoIcon} from "@/components/Icons";
import {Link, useNavigate} from "react-router-dom";

interface RouteProps {
    href: string;
    label: string;
}

const env = import.meta.env;

const routeList: RouteProps[] = [
    {
        href: env.VITE_APP_BASE,
        label: "Trang chủ",
    },
    {
        href: "#products",
        label: "Sản phẩm",
    },
    {
        href: "#products-new",
        label: "Phát triển",
    },
    {
        href: "#recruiment-form",
        label: "Ứng tuyển",
    },
    {
        href: "#faq",
        label: "FAQ",
    },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const navigation = useNavigate();

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
                    <span className="flex md:hidden">
            <ModeToggle/>

            <Sheet
                open={isOpen}
                onOpenChange={setIsOpen}
            >
              <SheetTrigger className="px-2">
                <Menu
                    className="flex md:hidden h-5 w-5"
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
                  {routeList.map(({href, label}: RouteProps) => (
                      <a
                          rel="noreferrer noopener"
                          key={label}
                          onClick={() => {
                              setIsOpen(false)
                              navigation(href);
                          }}
                          className={buttonVariants({variant: "ghost"})}
                      >
                          {label}
                      </a>
                  ))}
                    <button
                        rel="noreferrer noopener"
                        className={`border ${buttonVariants({variant: "secondary"})}`}
                        onClick={() => navigation("/products")}
                    >
                            <GitHubLogoIcon className="mr-2 w-5 h-5"/>
                            Sản phẩm
                    </button>
                </nav>
              </SheetContent>
            </Sheet>
          </span>
                    {/* desktop */}
                    <nav className="hidden md:flex gap-2">
                        {routeList.map((route: RouteProps, i) => (
                            <a
                                rel="noreferrer noopener"
                                href={route.href}
                                key={i}
                                className={`text-[17px] ${buttonVariants({
                                    variant: "ghost",
                                })}`}
                            >
                                {route.label}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex gap-2">
                        <button
                            rel="noreferrer noopener"
                            className={`border ${buttonVariants({variant: "secondary"})}`}
                            onClick={() => navigation("/products")}
                        >
                            <GitHubLogoIcon className="mr-2 w-5 h-5"/>
                            Sản phẩm
                        </button>
                        <ModeToggle/>
                    </div>
                </NavigationMenuList>
            </NavigationMenu>
        </header>
    );
};
