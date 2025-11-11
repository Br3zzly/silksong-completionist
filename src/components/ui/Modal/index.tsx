import { useEffect } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/utils";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when modal is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalClassName = cn(
    "relative w-full max-w-2xl max-h-[90vh] min-h-[320px] overflow-hidden bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl",
    className
  );

  const modalContent = (
    <div
      className="mb-0 rounded-lg fixed z-[9999] bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
      onClick={onClose}
      style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, margin: 0, padding: "1rem" }}
    >
      <div className={modalClassName} onClick={e => e.stopPropagation()}>
        <Button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded hover:bg-gray-800/50 cursor-pointer"
          aria-label="Close modal"
        >
          ×
        </Button>

        <div className="overflow-y-auto h-full p-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-6">{title}</h2>
          {children}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
