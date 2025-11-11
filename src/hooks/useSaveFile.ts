import { useCallback, useMemo, useState } from "react";
import type { DragEvent } from "react";

import { decodeData, encodeData, downloadFile } from "@/utils";

export interface SaveFileObj {
  state: {
    fileName: string;
    isSaveFileDecrypted: boolean;
    jsonText: string;
    parsedJson: unknown;
    isValidJson: boolean;
    errorMessage: string;
  };
  handlers: {
    setJsonText: (text: string) => void;
    handleFile: (file: File) => void;
    handleDrop: (event: DragEvent<HTMLDivElement>) => void;
    handleDragOver: (event: DragEvent<HTMLDivElement>) => void;
    saveEncrypted: () => void;
    savePlain: () => void;
    clearFile: () => void;
  };
}

function isValidSilksongSaveData(parsedJson: object): boolean {
  return "playerData" in parsedJson && "silk" in ((parsedJson.playerData ?? {}) as object);
}

export function useSaveFile() {
  const [fileName, setFileName] = useState("");
  const [isSaveFileDecrypted, setIsSaveFileDecrypted] = useState(false);
  const [jsonText, setJsonText] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const parsedJson = useMemo(() => {
    if (!jsonText) return null;
    try {
      return JSON.parse(jsonText);
    } catch {
      return null;
    }
  }, [jsonText]);

  const isValidJson = useMemo(() => {
    if (!jsonText) return true; // Empty text is considered valid JSON
    try {
      const parsedJson = JSON.parse(jsonText);

      /*
       ** This isValidSilksongSaveData check is, in part, to enable <SaveEditor /> to access
       ** non-Silkshong, Silksong-like (think Hollow Knight), valid, decrypted .dat files (in JSON format),
       ** while still preventing non-Silksong files from being treated as valid Silksong save data.
       **
       ** hasUploadedSaveFile for such files is true because of (fileName && isSaveFileDecrypted)
       ** and <SaveEditor /> becomes usable once hasUploadedSaveFile is true.
       **
       ** However, in such cases, hasUploadedSaveData (hasUploadedSaveFile && !errorMessage) is aptly set to false
       ** because of the errorMessage being set to a truthy value in handleFile: "This does not appear to be a Silksong save file."
       ** This prevents the rest of the app from trying to read the save data, because it !hasUploadedSaveData :D
       **
       ** To keep the above behaviour intact, even if jsonText is valid, we only clear the
       ** errorMessage here if parsedJson is valid Silksong save data too; only then hasUploadedSaveData
       ** becomes true.
       **
       ** Otherwise, without this check, the app becomes usable with any non-Silksong/Silksong-like
       ** save data, which is not desired.
       **
       ** We could have prevented all of the nonsense (and this check) by throwing an early error in
       ** handleFile, before the truthy "success" setters (setIsSaveFileDecrypted, setJsonText calls),
       ** but then we wouldn't have this nice thing, would we! :D
       */
      if (isValidSilksongSaveData(parsedJson)) setErrorMessage("");

      return true;
    } catch {
      setErrorMessage("Invalid JSON format. Please check your syntax.");
      return false;
    }
  }, [jsonText]);

  const handleFile = useCallback((file: File) => {
    setFileName(file.name);
    setErrorMessage("");
    const reader = new FileReader();
    reader.onload = e => {
      if (!e.target?.result) return;
      setIsSaveFileDecrypted(false);
      setJsonText("");
      try {
        const data = new Uint8Array(e.target.result as ArrayBuffer);
        const json = decodeData(data);
        const parsedJson = JSON.parse(json);

        const pretty = JSON.stringify(parsedJson, null, 2);
        setJsonText(pretty);
        setIsSaveFileDecrypted(true);

        if (!isValidSilksongSaveData(parsedJson)) {
          setErrorMessage("This does not appear to be a Silksong save file.");
        } else {
          setErrorMessage("");
        }
      } catch (error: unknown) {
        const errorMsg = "This file is in an unsupported format.";
        setErrorMessage(errorMsg);
        console.error(error);
      }
    };
    reader.readAsArrayBuffer(file);
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
    const encoded = encodeData(jsonText);
    downloadFile(encoded, fileName || "save.dat");
  }, [jsonText, fileName]);

  const savePlain = useCallback(() => {
    const nameWithoutExtension = fileName.replace(/\.[^/.]+$/, "");
    downloadFile(jsonText, `${nameWithoutExtension || "save"}.json`);
  }, [jsonText, fileName]);

  const clearFile = useCallback(() => {
    setFileName("");
    setIsSaveFileDecrypted(false);
    setJsonText("");
    setErrorMessage("");
  }, []);

  return useMemo(
    () => ({
      state: {
        fileName,
        isSaveFileDecrypted,
        jsonText,
        parsedJson,
        isValidJson,
        errorMessage,
      },
      handlers: {
        setJsonText,
        handleFile,
        handleDrop,
        handleDragOver,
        saveEncrypted,
        savePlain,
        clearFile,
      },
    }),
    [
      fileName,
      isSaveFileDecrypted,
      jsonText,
      parsedJson,
      isValidJson,
      errorMessage,
      handleFile,
      handleDrop,
      handleDragOver,
      saveEncrypted,
      savePlain,
      clearFile,
    ]
  );
}
