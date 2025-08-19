"use client";

import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const titleVariant = cva("font-heading text-center text-primary", {
  variants: {
    variant: {
      h1: "text-6xl md:text-8xl font-bold text-shadow-2xs text-shadow-secondary",
      h2: "text-4xl font-bold text-shadow-2xs text-shadow-secondary",
      h3: "text-lg font-semibold text-shadow-2xs text-shadow-secondary",
    },
  },
  defaultVariants: {
    variant: "h1",
  },
});

interface TitleProps {
  variant?: "h1" | "h2" | "h3";
  className?: string;
  children: React.ReactNode;
}

const Title = ({ variant = "h1", children, className }: TitleProps) => {
  switch (variant) {
    case "h1":
      return (
        <h1 className={titleVariant({ variant, className })}>{children}</h1>
      );
    case "h2":
      return (
        <h2 className={titleVariant({ variant, className })}>{children}</h2>
      );
    case "h3":
      return (
        <h2 className={titleVariant({ variant, className })}>{children}</h2>
      );
    default:
      return (
        <h1 className={titleVariant({ variant: "h1", className })}>
          {children}
        </h1>
      );
  }
};

export default Title;
