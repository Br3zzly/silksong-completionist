import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { ReactNode } from "react";

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
      className="modal"
    >
      <span data-focus-guard tabIndex={0} className="sr-only" onFocus={() => focusBoundary(true)} />
      <div className={"modal-panel " + (className ?? "")}>
        <div className="panel-frame" aria-hidden="true">
          <span className="panel-corner panel-corner-top-left" />
          <span className="panel-corner panel-corner-top-right" />
          <span className="panel-corner panel-corner-bottom-left" />
          <span className="panel-corner panel-corner-bottom-right" />
        </div>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          className="modal-close"
          aria-label="Close modal"
          title="Close"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="m5 5 14 14M19 5 5 19" />
          </svg>
        </button>
        <div className="modal-heading">
          <h2 id={titleId}>{title}</h2>
        </div>
        <div className="modal-content">{children}</div>
      </div>
      <span data-focus-guard tabIndex={0} className="sr-only" onFocus={() => focusBoundary(false)} />
    </dialog>,
    document.body
  );
}
