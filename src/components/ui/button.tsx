import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        commonPagination:
          "w-full py-1 px-3 rounded-sm body-large-m text-primary-2 bg-white input-shadow",
        commonPaginationActive:
          "w-full py-1 px-3 rounded-sm body-large-m text-white bg-primary-2 input-shadow",
        applicationCancelWarning:
          "w-[76px] h-[33px] border border-accent-error text-accent-error bg-white hover:bg-white cursor-pointer",
        applicationCancelDone:
          "w-[76px] h-[33px] border border-gray-30 text-gray-30 bg-white hover:bg-white cursor-pointer",
        position: "bg-white body-large-m text-gray-80 rounded-lg input-shadow",
        positionActive:
          "bg-secondary-2 body-large-m text-primary-3 border border-parimary-3 rounded-lg input-shadow",
        short: "w-10 h-10 py-[2px] px-3",
        small: "w-[66px] h-[30px] py-[6px] px-3 rounded-sm",
        middle: "w-[294px] h-11 py-[10px] rounded-lg",
        large: "w-[534px] h-[52px] py-[14px] rounded-lg",
        custom: "",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
        custom: "",
      },
      color: {
        primary: "bg-primary-1 text-white hover:bg-primary-hover",
        secondary:
          " bg-white hover:bg-gray-20 text-primary-1 border border-solid border-primary-1",
        disabled: "bg-gray-30 text-white",
        disabled2: "bg-white text-gray-30 border border-solid border-gray-30",
      },
    },
    defaultVariants: {
      variant: "custom",
      size: "custom",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  color,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className, color }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
