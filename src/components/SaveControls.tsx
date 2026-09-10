import { useRef, useState } from "react";
import type { ReactNode } from "react";
import type { SaveFileObj } from "@/hooks/useSaveFile";
import { Modal } from "./ui/Modal";
import { SaveEditor } from "./SaveEditor";
import { SaveLocations } from "./SaveLocations";
import { MenuButton } from "./ui/MenuButton";

export function SaveControls({ save, children }: { save: SaveFileObj; children?: ReactNode }) {
  const input = useRef<HTMLInputElement>(null);
  const [editorOpen, setEditorOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  return (
    <>
      <div className="save-controls controls">
        <MenuButton type="button" aria-label="Browse for a save file" onClick={() => input.current?.click()}>
          {save.state.fileName ? "Replace save" : "Load save"}
        </MenuButton>
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
        {save.state.fileName && <span>{save.state.fileName}</span>}
        {save.state.isSaveFileDecrypted && (
          <MenuButton type="button" aria-label="Edit save file" onClick={() => setEditorOpen(true)}>
            Edit save
          </MenuButton>
        )}
        {save.state.fileName && (
          <MenuButton type="button" aria-label="Remove file" onClick={save.handlers.clearFile}>
            Clear
          </MenuButton>
        )}
        {!save.state.isSaveFileDecrypted && (
          <>
            <MenuButton
              type="button"
              aria-label="Open help modal about save file locations"
              onClick={() => setHelpOpen(true)}
            >
              Save locations
            </MenuButton>
            {children}
          </>
        )}
      </div>
      <p role="status">{save.state.errorMessage}</p>
      <Modal isOpen={editorOpen} onClose={() => setEditorOpen(false)} title="Edit save" className="modal-editor">
        <SaveEditor save={save} />
      </Modal>
      <Modal isOpen={helpOpen} onClose={() => setHelpOpen(false)} title="Where can I find my save file?">
        <SaveLocations />
      </Modal>
    </>
  );
}
