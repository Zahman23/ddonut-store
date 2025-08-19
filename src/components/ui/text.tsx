import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const textVariants = cva("font-body text-muted-foreground text-center", {
  variants: {
    size: {
      default: "",
      sm: "text-sm",
      lg: "text-lg",
      xl: "text-xl md:text-2xl",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

const Text = ({
  className,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"p"> &
  VariantProps<typeof textVariants> & { asChild?: boolean }) => {
  const Comp = asChild ? Slot : "p";

  return (
    <Comp
      data-slot="p"
      className={cn(textVariants({ size, className }))}
      {...props}
    />
  );
};

export default Text;
