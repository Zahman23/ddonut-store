"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { LucideProps } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type Link = {
  id: number;
  href: string;
  label: string;
  icon: React.ReactNode;
};

interface NavigationGadgetProps {
  navLinks: Link[];
}

const NavigationGadget: React.FC<NavigationGadgetProps> = ({ navLinks }) => {
  const [navActive, setNavActive] = useState<string>("Home");

  const getLink = (link: string) => {
    setNavActive(link);
  };

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="hover:bg-transparent">
            {navActive}
          </NavigationMenuTrigger>
          <NavigationMenuContent className="w-[150px] py-2 absolute -left-15">
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <Button
                    asChild
                    onClick={() => getLink(link.label)}
                    variant="ghost"
                    size="icon"
                    className={cn(
                      "flex w-full justify-items-center py-2 rounded-none hover:bg-primary",
                      navActive === link.label ? "bg-primary text-white" : ""
                    )}
                  >
                    <Link
                      href={link.href}
                      className="transition-colors w-full font-body "
                    >
                      {link.icon}
                      {link.label}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationGadget;
