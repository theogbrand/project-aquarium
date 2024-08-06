import { useState } from "react";
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

import { Github, Database } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import DropDown from "./ui/dropdown";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  // {
  //   href: "https://arxiv.org/pdf/2406.10118",
  //   label: "Publication",
  // },
  // {
  //   href: "https://docs.google.com/spreadsheets/d/1ibbywsC1tQ_sLPX8bUAjC-vrTrUqZgZA46W_sxWw4Ss/edit?usp=sharing",
  //   label: "Catalogue (CSV)",
  // },
  // {
  //   href: "https://github.com/SEACrowd/seacrowd-datahub/",
  //   label: "Data Hub",
  // },
  // {
  //   href: "https://github.com/SEACrowd/seacrowd-experiments/",
  //   label: "Experiments",
  // },
  // {
  //   href: "/contributors",
  //   label: "Contributors",
  // },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const renderLogo = () => {
    return (
      <Link href="/" className="ml-2 font-bold text-xl flex items-center">
        <h1>Project Aquarium</h1>
        {/* <Image
          src={"/lib/logo.jpeg"}
          alt="logo"
          width={186}
          height={32}
        /> */}
      </Link>
    );
  };

  const renderMenu = () => {
    return (
      <>
        {routeList.map((route: RouteProps, i) => (
          <Link
            href={route.href}
            key={i}
            className={`text-[17px] ${buttonVariants({
              variant: "ghost",
            })}`}
          >
            {route.label}
          </Link>
        ))}
        {/* <a
          href="https://github.com/SEACrowd/"
          target="_blank"
          className={`border ${buttonVariants({ variant: "default" })}`}
        >
          <Github className="mr-2 w-5 h-5" />
          Github
        </a> */}
        <DropDown />
      </>
    );
  };

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            {renderLogo()}
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
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
                  <SheetTitle className="font-bold text-xl">
                    {renderLogo()}
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {renderMenu()}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <div className="hidden md:flex gap-2">{renderMenu()}</div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
