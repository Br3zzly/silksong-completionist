import { lazy, Suspense } from "react";
import type { SaveFileObj } from "@/hooks/useSaveFile";
import { MenuButton } from "./ui/MenuButton";
const Editor = lazy(() => import("@monaco-editor/react"));
export function SaveEditor({ save }: { save: SaveFileObj }) {
  return (
    <>
      <div className="editor-toolbar">
        <p>Ctrl+F / Cmd+F to search.</p>
        <span className="editor-validity" data-valid={save.state.isValidJson} aria-live="polite">
          {save.state.isValidJson ? "Valid JSON" : "Invalid JSON"}
        </span>
      </div>
      {save.state.errorMessage && (
        <p className="editor-error" role="status">
          {save.state.errorMessage}
        </p>
      )}
      <div className="editor-resize">
        <Suspense fallback={<p>Loading editor...</p>}>
          <Editor
            height="100%"
            defaultLanguage="json"
            theme="silksong"
            beforeMount={monaco =>
              monaco.editor.defineTheme("silksong", {
                base: "vs-dark",
                inherit: true,
                rules: [
                  { token: "string.key.json", foreground: "E4E0D9" },
                  { token: "string.value.json", foreground: "A7BEB7" },
                  { token: "number", foreground: "CBB99D" },
                  { token: "keyword", foreground: "B6B5CE" },
                ],
                colors: {
                  "editor.background": "#0B1012",
                  "editor.foreground": "#E4E0D9",
                  "editorLineNumber.foreground": "#687476",
                  "editorLineNumber.activeForeground": "#D1D6D4",
                  "editor.lineHighlightBackground": "#FFFFFF06",
                  "editor.selectionBackground": "#44595980",
                  "editorCursor.foreground": "#F2EEE5",
                  "editorWidget.background": "#151D20",
                  "editorWidget.border": "#697573",
                  "editorIndentGuide.background1": "#FFFFFF12",
                  "editorIndentGuide.activeBackground1": "#FFFFFF35",
                  "editorBracketHighlight.foreground1": "#BBC9C4",
                  "editorBracketHighlight.foreground2": "#B6B5CE",
                  "editorBracketHighlight.foreground3": "#CBB99D",
                  "editorBracketHighlight.foreground4": "#9FB7C1",
                  "editorBracketHighlight.foreground5": "#C7B5B3",
                  "editorBracketHighlight.foreground6": "#C5CBAB",
                },
              })
            }
            value={save.state.jsonText}
            onChange={value => save.handlers.setJsonText(value ?? "")}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              fontSize: 14,
              lineNumbers: "on",
              lineNumbersMinChars: 3,
              lineDecorationsWidth: 8,
              renderWhitespace: "selection",
              automaticLayout: true,
              formatOnPaste: true,
              formatOnType: false,
              wordWrap: "on",
              tabSize: 2,
              insertSpaces: true,
              padding: { top: 16, bottom: 16 },
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
      <div className="controls editor-downloads">
        <MenuButton
          type="button"
          onClick={save.handlers.saveEncrypted}
          disabled={!save.state.canExportEncrypted}
          title={save.state.errorMessage || "Encrypted game save"}
          aria-label="Download as (encrypted) .dat"
        >
          Download .dat
        </MenuButton>
        <MenuButton
          type="button"
          onClick={save.handlers.savePlain}
          title="Plain JSON"
          aria-label="Download as (plain) .json"
        >
          Download .json
        </MenuButton>
      </div>
    </>
  );
}
