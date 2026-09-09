import { useState, type ReactNode } from "react";
import { Modal } from "../Modal";
export function MapButton({
  mapLink,
  disabled,
  titleName,
  children,
  className,
}: {
  mapLink?: string;
  disabled?: boolean;
  titleName?: string;
  children?: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  if (!mapLink) return null;
  const url = mapLink.includes("mapgenie") ? mapLink + (mapLink.includes("?") ? "&" : "?") + "embed=light" : mapLink;
  return (
    <>
      <button
        type="button"
        className={className}
        disabled={disabled}
        aria-label={disabled ? "Map location not available" : "Open map location"}
        onClick={() => {
          setLoading(true);
          setOpen(true);
        }}
      >
        {children || "Map"}
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title={titleName || "Map location"}>
        <p>
          <a href={url} target="_blank" rel="noopener noreferrer">
            Open this in a new tab
          </a>
        </p>
        {loading && <p role="status">Loading map...</p>}
        <iframe
          src={url}
          title="Map Location"
          sandbox="allow-scripts allow-same-origin"
          onLoad={() => setLoading(false)}
        />
      </Modal>
    </>
  );
}
