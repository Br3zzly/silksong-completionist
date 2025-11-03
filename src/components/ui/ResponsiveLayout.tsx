import type { ReactNode } from "react";
import { cn } from "@/utils";

interface ResponsiveLayoutProps {
  children: ReactNode;
  className?: string;
}

export function ResponsiveLayout({ children, className }: ResponsiveLayoutProps) {
  return <div className={cn("responsive-layout w-full", className)}>{children}</div>;
}

interface ResponsiveComponentProps {
  mobileComponent: ReactNode;
  desktopComponent: ReactNode;
  breakpoint?: "md" | "lg";
}

export function ResponsiveComponent({
  mobileComponent,
  desktopComponent,
  breakpoint = "md",
}: ResponsiveComponentProps) {
  return (
    <>
      <div className={`block ${breakpoint}:hidden`}>{mobileComponent}</div>
      <div className={`hidden ${breakpoint}:block`}>{desktopComponent}</div>
    </>
  );
}
