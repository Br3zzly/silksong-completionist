import Editor, { loader } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import EditorWorker from "monaco-editor/editor/editor.worker?worker";
import JsonWorker from "monaco-editor/language/json/json.worker?worker";

// Load the audited local editor and workers only when Edit save is opened.
self.MonacoEnvironment = {
  getWorker(_workerId, label) {
    return label === "json" ? new JsonWorker() : new EditorWorker();
  },
};
loader.config({ monaco });

export default Editor;
