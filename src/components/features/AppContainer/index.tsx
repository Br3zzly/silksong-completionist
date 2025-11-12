import type { ReactNode } from "react";
import Background from "@/assets/backgrounds/Original.webp";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  return (
    <>
      <div
        className="fixed inset-0 -z-10"
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="min-h-screen w-full flex justify-center items-start p-4">
        <div className="w-full max-w-4xl bg-[rgba(26,19,19,0.8)] rounded-lg shadow-lg p-5 mt-0 space-y-5 backdrop-blur-sm">
          {children}
        </div>
      </div>
    </>
  );
}
