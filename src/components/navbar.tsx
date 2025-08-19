"use client";

import Link from "next/link";
import React from "react";
import { HomeIcon, DonutIcon, Menu } from "lucide-react";
import { Button } from "./ui/button";
import NavigationGadget from "./widgets/navigation-gadget";
import CartDropdown from "./widgets/cart-dropdown";

const navLinks = [
  {
    id: 1,
    href: "/",
    label: "Home",
    icon: <HomeIcon className="transition-colors" />,
  },
  {
    id: 2,
    href: "/shop",
    label: "Shop",
    icon: <DonutIcon className="transition-colors" />,
  },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/">
              <h1 className="font-heading text-2xl font-bold text-primary">
                Sweet Circles
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="md:ml-0 md:mr-12 ml-10 flex items-baseline space-x-8">
              <Link
                href="/"
                className="text-foreground hover:text-accent transition-colors font-body"
              >
                Home
              </Link>
              <Link
                href="/shop"
                className="text-foreground hover:text-accent transition-colors font-body"
              >
                Shop
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <CartDropdown />
            <div className="md:hidden block">
              <NavigationGadget navLinks={navLinks} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
