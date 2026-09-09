import { lazy, Suspense } from "react";
import type { SaveFileObj } from "@/hooks/useSaveFile";
const Editor = lazy(() => import("@monaco-editor/react"));
export function SaveEditor({ save }: { save: SaveFileObj }) {
  return (
    <>
      <p>
        Ctrl+F / Cmd+F to search. <strong>{save.state.isValidJson ? "Valid JSON" : "Invalid JSON"}</strong>
      </p>
      {save.state.errorMessage && <p role="status">{save.state.errorMessage}</p>}
      <div className="editor-resize">
        <Suspense fallback={<p>Loading editor...</p>}>
          <Editor
            height="100%"
            defaultLanguage="json"
            value={save.state.jsonText}
            onChange={value => save.handlers.setJsonText(value ?? "")}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              lineNumbers: "on",
              renderWhitespace: "selection",
              automaticLayout: true,
              formatOnPaste: true,
              formatOnType: false,
              wordWrap: "on",
              tabSize: 2,
              insertSpaces: true,
              bracketPairColorization: { enabled: true },
              folding: true,
              foldingHighlight: true,
              showFoldingControls: "mouseover",
              matchBrackets: "always",
              contextmenu: true,
              find: {
                addExtraSpaceOnTop: false,
                autoFindInSelection: "never",
                seedSearchStringFromSelection: "always",
              },
            }}
          />
        </Suspense>
      </div>
      <div className="controls">
        <button
          type="button"
          onClick={save.handlers.saveEncrypted}
          disabled={!save.state.canExportEncrypted}
          title={save.state.errorMessage || undefined}
        >
          Download as (encrypted) .dat
        </button>
        <button type="button" onClick={save.handlers.savePlain}>
          Download as (plain) .json
        </button>
      </div>
    </>
  );
}
