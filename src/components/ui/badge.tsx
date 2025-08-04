import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1 [&>svg]:pointer-events-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive transition-[color,box-shadow] overflow-hidden",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground [a&]:hover:bg-primary/90",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground [a&]:hover:bg-secondary/90",
        destructive:
          "border-transparent bg-destructive text-white [a&]:hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "text-foreground [a&]:hover:bg-accent [a&]:hover:text-accent-foreground",
        position:
          "w-full px-[10px] py-[3px] caption-b rounded-md text-primary-2 bg-gray-5",
        success:
          "max-w-full h-6 py-[3px] px-[10px] border-[#4AB556] rounded-[50px] bg-[#F2FFF3] text-[#4AB556] caption-b",
        warning:
          "max-w-full h-6 py-[3px] px-[10px] border-[#FFB908] rounded-[50px] bg-[#FFFAEE] text-[#FFB908] caption-b",
        danger:
          "max-w-full h-6 py-[3px] px-[10px] border-[#FF4242] rounded-[50px] bg-[#FFFAEE] text-[#FF4242] caption-b",

        done: "max-w-full h-6 py-[3px] px-[10px] border-gray-50 rounded-[50px] bg-gray-5 text-gray-50 caption-b",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
