import { useRef, useState } from "react";
import type { SaveFileObj } from "@/hooks/useSaveFile";
import { Modal } from "./ui/Modal";
import { SaveEditor } from "./SaveEditor";
import { SaveLocations } from "./SaveLocations";

export function SaveControls({ save }: { save: SaveFileObj }) {
  const input = useRef<HTMLInputElement>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <>
      <div
        className="save-controls controls"
        onDrop={save.handlers.handleDrop}
        onDragOver={save.handlers.handleDragOver}
      >
        <button type="button" aria-label="Browse for a save file" onClick={() => input.current?.click()}>
          {save.state.fileName ? "Replace save" : "Load save"}
        </button>
        <input
          ref={input}
          hidden
          type="file"
          aria-label="Upload save file"
          onChange={event => {
            const file = event.target.files?.[0];
            if (file) save.handlers.handleFile(file);
            event.target.value = "";
          }}
        />
        <span>{save.state.fileName || "Choose a file or drop it here."}</span>
        {save.state.isSaveFileDecrypted && (
          <button type="button" aria-label="Edit save file" onClick={() => setEditorOpen(true)}>
            Edit save
          </button>
        )}
        {save.state.fileName && (
          <button type="button" aria-label="Remove file" onClick={save.handlers.clearFile}>
            Clear
          </button>
        )}
        <button type="button" aria-label="Open help modal about save file locations" onClick={() => setHelpOpen(true)}>
          Save locations
        </button>
      </div>
      <p role="status">{save.state.errorMessage}</p>
      <Modal isOpen={editorOpen} onClose={() => setEditorOpen(false)} title="Save File Editor">
        <SaveEditor save={save} />
      </Modal>
      <Modal isOpen={helpOpen} onClose={() => setHelpOpen(false)} title="Where can I find my save file?">
        <SaveLocations />
      </Modal>
    </>
  );
}
