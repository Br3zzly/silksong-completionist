import { useState, useRef, useEffect, lazy, Suspense, type ReactElement } from "react";
import type { SaveFileObj } from "@/hooks";
import { Button } from "@/components/ui";
import { cn } from "@/utils";

const Editor = lazy(() => import("@monaco-editor/react"));

function EditorStatusBar({ isValidJson }: { isValidJson: boolean }) {
  return (
    <div className="bg-gray-800/50 border-gray-600/30 px-4 border-t-0 min-h-[44px] flex items-center border-b-0">
      <div className="flex justify-between items-center text-xs text-gray-300 w-full">
        <p className="text-gray-400">
          Use <span className="font-mono text-blue-400">Ctrl+F</span>
          <span className="text-gray-500 mx-1">or</span>
          <span className="font-mono text-blue-400">⌘+F</span> to search within the editor.
        </p>
        <span
          className={`inline-flex items-center justify-center font-semibold text-[10px] text-white border-2 px-2 py-1 rounded-lg ${
            isValidJson ? "border-emerald-500 bg-emerald-600" : "border-orange-500 bg-orange-600"
          }`}
        >
          {isValidJson ? "✓ Valid JSON" : "✗ Invalid JSON"}
        </span>
      </div>
    </div>
  );
}

function EditorResizeHandle({
  isDragging,
  onMouseDown,
}: {
  isDragging: boolean;
  onMouseDown: (e: React.MouseEvent) => void;
}) {
  return (
    <div
      onMouseDown={onMouseDown}
      className={cn(
        "group h-2 transition-all duration-200 select-none cursor-ns-resize bg-transparent hover:bg-transparent"
      )}
    >
      <div className="h-full flex items-center justify-center pointer-events-none">
        <div
          className={cn(
            "w-8 h-0.5 bg-gray-500/60 rounded-full transition-all duration-200",
            "group-hover:w-12 group-hover:h-0.5 group-hover:bg-blue-400/80",
            isDragging && "w-12 h-0.5 bg-blue-400"
          )}
        />
      </div>
    </div>
  );
}

function DownloadButton({
  children,
  onClick,
  className,
  ...props
}: {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  disabled?: boolean;
  title?: string;
}) {
  return (
    <Button
      onClick={onClick}
      className={cn(
        "bg-gray-700/30 text-gray-400 border border-gray-600/30 hover:border-gray-500/50 hover:text-gray-300 font-semibold py-2 px-4 rounded transition-all duration-200 flex-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </Button>
  );
}

function DownloadButtons({ saveFileObj }: { saveFileObj: SaveFileObj }) {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <DownloadButton
        onClick={() => saveFileObj.handlers.saveEncrypted()}
        disabled={!saveFileObj.state.canExportEncrypted}
        title={!saveFileObj.state.canExportEncrypted ? saveFileObj.state.errorMessage : undefined}
      >
        💾 Download as (encrypted) .dat
      </DownloadButton>
      <DownloadButton onClick={() => saveFileObj.handlers.savePlain()}>📃 Download as (plain) .json</DownloadButton>
    </div>
  );
}

function LazyEditor({
  saveFileObj,
  editorHeight,
  handleChange,
}: {
  saveFileObj: SaveFileObj;
  editorHeight: number;
  handleChange: (value: string) => void;
}) {
  const LoadingComponent = () => (
    <div
      style={{ width: "100%", height: `${editorHeight}px` }}
      className="flex items-center justify-center bg-[#1e1e1e] text-gray-400 text-center"
    >
      Loading editor...
    </div>
  );

  return (
    <div className="mb-0 bg-gradient-to-br from-gray-800/40 to-gray-800/20 rounded-lg border-2 border-gray-600/30 overflow-hidden">
      <div className="relative">
        <EditorStatusBar isValidJson={saveFileObj.state.isValidJson} />
        <Suspense fallback={<LoadingComponent />}>
          <Editor
            loading={<LoadingComponent />}
            height={`${editorHeight}px`}
            defaultLanguage="json"
            value={saveFileObj.state.jsonText || ""}
            onChange={(value: string | undefined) => handleChange(value || "")}
            theme="vs-dark"
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
    </div>
  );
}

export function EditorContainer({ saveFileObj }: { saveFileObj: SaveFileObj }): ReactElement {
  const [editorHeight, setEditorHeight] = useState(400);
  const [isDragging, setIsDragging] = useState(false);
  const startYRef = useRef<number>(0);
  const startHeightRef = useRef<number>(0);

  useEffect(() => {
    if (!isDragging) return;

    document.body.style.cursor = "ns-resize";
    document.body.style.userSelect = "none";

    const handleMouseMove = (e: MouseEvent) => {
      e.preventDefault();
      const deltaY = e.clientY - startYRef.current;
      const newHeight = Math.max(200, Math.min(600, startHeightRef.current + deltaY));
      setEditorHeight(newHeight);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsDragging(true);
    startYRef.current = e.clientY;
    startHeightRef.current = editorHeight;
  };

  const handleChange = (value: string) => {
    saveFileObj.handlers.setJsonText(value);
  };

  return (
    <div className="space-y-4">
      {/* Fullscreen overlay while dragging to maintain cursor */}
      {isDragging && <div className="fixed inset-0 z-[9999] cursor-ns-resize" style={{ pointerEvents: "all" }} />}

      <LazyEditor saveFileObj={saveFileObj} editorHeight={editorHeight} handleChange={handleChange} />

      <EditorResizeHandle isDragging={isDragging} onMouseDown={handleMouseDown} />

      <DownloadButtons saveFileObj={saveFileObj} />
    </div>
  );
}
