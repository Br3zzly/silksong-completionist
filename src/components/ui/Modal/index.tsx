import { useEffect, useId, useRef } from "react";
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
  const ref = useRef<HTMLDialogElement>(null);
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const focusBoundary = (last: boolean) => {
    const elements = Array.from(
      ref.current?.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled]), textarea:not([disabled]), select:not([disabled]), iframe, [tabindex]:not([tabindex="-1"]):not([data-focus-guard])'
      ) ?? []
    ).filter(element => element.getClientRects().length > 0);
    (last ? elements.at(-1) : elements[0])?.focus();
  };
  useEffect(() => {
    if (!isOpen || !ref.current) return;
    const dialog = ref.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;
  return createPortal(
    <dialog
      ref={ref}
      aria-labelledby={titleId}
      aria-modal="true"
      onCancel={event => {
        event.preventDefault();
        onClose();
      }}
      onClick={event => {
        event.stopPropagation();
        if (event.target === event.currentTarget) onClose();
      }}
      className="fixed inset-0 m-0 max-w-none max-h-none w-full h-full bg-black/90 backdrop-blur-md flex items-center justify-center p-4 border-0"
    >
      <span data-focus-guard tabIndex={0} className="sr-only" onFocus={() => focusBoundary(true)} />
      <div
        className={cn(
          "relative w-full max-w-2xl max-h-[90vh] min-h-[320px] overflow-hidden bg-gray-900/95 border border-gray-700/50 rounded-xl shadow-2xl",
          className
        )}
      >
        <Button
          ref={closeRef}
          onClick={onClose}
          className="absolute top-4 right-4 z-10 text-gray-400 hover:text-white transition-colors text-2xl leading-none w-8 h-8 flex items-center justify-center rounded hover:bg-gray-800/50 cursor-pointer"
          aria-label="Close modal"
        >
          &times;
        </Button>
        <div className="overflow-y-auto h-full max-h-[90vh] p-6">
          <h2 id={titleId} className="text-lg font-semibold text-gray-800 mb-6">
            {title}
          </h2>
          {children}
        </div>
      </div>
      <span data-focus-guard tabIndex={0} className="sr-only" onFocus={() => focusBoundary(false)} />
    </dialog>,
    document.body
  );
}
