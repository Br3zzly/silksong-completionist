import type { ButtonHTMLAttributes } from "react";

export function MenuButton({ children, className = "", ...props }: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className={`menu-option ${className}`}>
      <span className="menu-option-label">
        <span className="menu-option-cursor menu-option-cursor-left" aria-hidden="true" />
        {children}
        <span className="menu-option-cursor menu-option-cursor-right" aria-hidden="true" />
      </span>
    </button>
  );
}
