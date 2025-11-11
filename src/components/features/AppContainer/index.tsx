import type { ReactNode } from "react";
import { useEffect } from "react";
import Background from "@/assets/backgrounds/Original.webp";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  useEffect(() => {
    const originalBodyStyle = {
      backgroundImage: document.body.style.backgroundImage,
      backgroundSize: document.body.style.backgroundSize,
      backgroundPosition: document.body.style.backgroundPosition,
      backgroundRepeat: document.body.style.backgroundRepeat,
      backgroundAttachment: document.body.style.backgroundAttachment,
      margin: document.body.style.margin,
      padding: document.body.style.padding,
    };

    document.body.style.backgroundImage = `url(${Background})`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.margin = "0";
    document.body.style.padding = "0";

    return () => {
      document.body.style.backgroundImage = originalBodyStyle.backgroundImage;
      document.body.style.backgroundSize = originalBodyStyle.backgroundSize;
      document.body.style.backgroundPosition = originalBodyStyle.backgroundPosition;
      document.body.style.backgroundRepeat = originalBodyStyle.backgroundRepeat;
      document.body.style.backgroundAttachment = originalBodyStyle.backgroundAttachment;
      document.body.style.margin = originalBodyStyle.margin;
      document.body.style.padding = originalBodyStyle.padding;
    };
  }, []);

  return (
    <div className="min-h-screen w-full flex justify-center items-start p-4">
      <div className="w-full max-w-4xl bg-[rgba(26,19,19,0.8)] rounded-lg shadow-lg p-5 mt-0 space-y-5 backdrop-blur-sm">
        {children}
      </div>
    </div>
  );
}
