import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-semibold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-primary text-white shadow-brand hover:shadow-warm active:scale-95",
        destructive:
          "bg-red-600 text-white shadow-sm hover:bg-red-700 active:scale-95",
        outline:
          "border-2 border-brand-400 bg-white/80 text-brand-700 shadow-brand hover:bg-brand-100 hover:border-brand-500 active:scale-95 backdrop-blur-sm",
        secondary:
          "bg-brand-200/80 text-brand-800 shadow-brand hover:bg-brand-300/80 active:scale-95 backdrop-blur-sm",
        ghost: "hover:bg-brand-100/60 hover:text-brand-800 text-brand-700 active:scale-95",
        link: "text-brand-600 underline-offset-4 hover:underline hover:text-brand-700",
      },
      size: {
        default: "h-11 px-6 py-3",
        sm: "h-9 px-4 text-sm",
        lg: "h-14 px-10 text-lg font-bold",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }