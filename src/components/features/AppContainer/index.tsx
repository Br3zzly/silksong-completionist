import { useState, useEffect, type ReactNode } from "react";
import Background from "@/assets/backgrounds/Original.webp";
import MothleafLagnia from "@/assets/MothleafLagnia.png";
import { Button } from "@/components/ui";

interface AppContainerProps {
  children: ReactNode;
}

export function AppContainer({ children }: AppContainerProps) {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show the scroll to top button after scrolling down 400px
      setShowScrollToTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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

      {/* Scroll to top button */}
      {showScrollToTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-16 h-16 transition-all duration-300 hover:scale-110 cursor-pointer z-50 animate-[float_3s_ease-in-out_infinite]"
          aria-label="Scroll to top"
          title="Scroll to top"
          style={{
            animation: "float 3s ease-in-out infinite",
          }}
        >
          <img
            src={MothleafLagnia}
            alt="Scroll to top"
            className="w-full h-full object-contain transition-all duration-300 hover:[filter:drop-shadow(0_0_2px_rgba(255,255,255,0.6))_drop-shadow(0_0_2px_rgba(255,255,255,0.6))]"
          />
        </Button>
      )}
    </>
  );
}
