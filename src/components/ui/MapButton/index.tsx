import { useState, type ReactNode } from "react";
import { Modal } from "../Modal";
import mapIcon from "@/assets/ui/open-map.png";
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
        className={children ? className : ["map-icon-button", className].filter(Boolean).join(" ")}
        disabled={disabled}
        aria-label={disabled ? "Map location not available" : "Open map location"}
        title={disabled ? "Map location not available" : "Open map location"}
        onClick={() => {
          setLoading(true);
          setOpen(true);
        }}
      >
        {children || <img className="map-icon" src={mapIcon} alt="" width={32} height={26} />}
      </button>
      <Modal isOpen={open} onClose={() => setOpen(false)} title={titleName || "Map location"} className="modal-map">
        <div className="map-view">
          {loading && (
            <p className="map-loading" role="status">
              Loading map...
            </p>
          )}
          <iframe
            src={url}
            title="Map Location"
            sandbox="allow-scripts allow-same-origin"
            onLoad={() => setLoading(false)}
          />
        </div>
        <div className="map-actions">
          <a href={url} target="_blank" rel="noopener noreferrer">
            Open this in a new tab <span aria-hidden="true">↗</span>
          </a>
        </div>
      </Modal>
    </>
  );
}
