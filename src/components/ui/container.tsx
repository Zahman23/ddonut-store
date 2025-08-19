"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "min-h-screen max-w-7xl bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
