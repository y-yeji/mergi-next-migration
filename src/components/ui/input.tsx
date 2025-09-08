import * as React from "react";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const inputVariants = cva("", {
  variants: {
    customType: {
      long: "w-[510px] h-[46px] py-[12.5px] px-4 rounded-lg input-shadow placeholder:text-gray-40 body-r focus:placeholder:text-transparent",
      font: "h3-b",
    },
  },
  defaultVariants: {
    customType: "long",
  },
});

function Input({
  className,
  type = "text",
  customType,
  ...props
}: React.ComponentProps<"input"> & VariantProps<typeof inputVariants>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(inputVariants({ customType }), className)}
      {...props}
    />
  );
}

export { Input };
