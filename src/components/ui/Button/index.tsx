import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, disabled, type = "button", ...props }, ref) => {
    return (
      <button ref={ref} type={type} className={className} disabled={disabled} aria-disabled={disabled} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
