import { useCallback, useMemo, useRef, useState } from "react";
import type { DragEvent } from "react";
import { decodeData, encodeData, downloadFile } from "@/utils";
import { canExportSave, validateSaveText, type SaveValidation } from "@/utils/saveValidation";

export type SaveFileObj = ReturnType<typeof useSaveFile>;

export function useSaveFile() {
  const [fileName, setFileName] = useState("");
  const [isSaveFileDecrypted, setIsSaveFileDecrypted] = useState(false);
  const [content, setContent] = useState<{ text: string; validation: SaveValidation }>(() => ({
    text: "",
    validation: validateSaveText(""),
  }));
  const [loadError, setLoadError] = useState("");
  const [loadId, setLoadId] = useState(0);
  const requestId = useRef(0);
  const { text: jsonText, validation } = content;
  const isValidJson = validation.kind !== "invalid";
  const canExportEncrypted = isSaveFileDecrypted && canExportSave(validation);
  const errorMessage = loadError || (isSaveFileDecrypted ? validation.errorMessage : "");
  const saveData = validation.kind === "silksong" ? validation.parsedJson : null;

  const setJsonText = useCallback((text: string) => {
    setContent({ text, validation: validateSaveText(text) });
  }, []);

  const handleFile = useCallback((file: File) => {
    const currentRequest = ++requestId.current;
    setFileName(file.name);
    setIsSaveFileDecrypted(false);
    setLoadError("");
    setContent({ text: "", validation: validateSaveText("") });
    const reader = new FileReader();
    const fail = () => {
      if (requestId.current === currentRequest) setLoadError("This file is in an unsupported format.");
    };
    reader.onerror = fail;
    reader.onabort = fail;
    reader.onload = () => {
      if (requestId.current !== currentRequest) return;
      try {
        if (!(reader.result instanceof ArrayBuffer)) return fail();
        const text = decodeData(new Uint8Array(reader.result));
        const result = validateSaveText(text);
        if (result.kind === "invalid") return fail();
        setContent({ text: JSON.stringify(result.parsedJson, null, 2), validation: result });
        setIsSaveFileDecrypted(true);
        setLoadId(previous => previous + 1);
      } catch {
        fail();
      }
    };
    try {
      reader.readAsArrayBuffer(file);
    } catch {
      fail();
    }
  }, []);

  const handleDrop = useCallback(
    (event: DragEvent<HTMLDivElement>) => {
      event.preventDefault();
      const file = event.dataTransfer.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const saveEncrypted = useCallback(() => {
    if (!canExportEncrypted) return;
    downloadFile(encodeData(jsonText), fileName || "save.dat");
  }, [canExportEncrypted, jsonText, fileName]);

  // Plain downloads also serve as a way to recover unfinished editor drafts.
  const savePlain = useCallback(() => {
    const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
    downloadFile(jsonText, (nameWithoutExtension || "save") + ".json");
  }, [jsonText, fileName]);

  const clearFile = useCallback(() => {
    ++requestId.current;
    setFileName("");
    setIsSaveFileDecrypted(false);
    setContent({ text: "", validation: validateSaveText("") });
    setLoadError("");
  }, []);

  return useMemo(
    () => ({
      state: {
        fileName,
        isSaveFileDecrypted,
        jsonText,
        parsedJson: validation.parsedJson,
        saveData,
        isValidJson,
        canExportEncrypted,
        errorMessage,
        loadId,
      },
      handlers: { setJsonText, handleFile, handleDrop, handleDragOver, saveEncrypted, savePlain, clearFile },
    }),
    [
      fileName,
      isSaveFileDecrypted,
      jsonText,
      validation.parsedJson,
      saveData,
      isValidJson,
      canExportEncrypted,
      errorMessage,
      loadId,
      setJsonText,
      handleFile,
      handleDrop,
      handleDragOver,
      saveEncrypted,
      savePlain,
      clearFile,
    ]
  );
}
