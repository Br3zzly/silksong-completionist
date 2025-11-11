import { useState } from "react";
import type { MouseEvent } from "react";
import { Button, Modal } from "@/components/ui";
import { PlatformInfo } from "./PlatformInfo";

interface SaveFileInfoProps {
  onCopyPath: (path: string) => void;
}

export function SaveFileInfo({ onCopyPath }: SaveFileInfoProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <div className="flex justify-end pr-2 mb-0">
        <Button
          onClick={(e: MouseEvent) => {
            e.stopPropagation();
            setIsModalOpen(true);
          }}
          className="cursor-pointer text-xs text-gray-500 hover:text-blue-400 transition-colors underline decoration-dotted"
          aria-label="Open help modal about save file locations"
        >
          Where can I find my save file?
        </Button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Where can I find my save file?"
        className="min-h-[600px]"
      >
        <PlatformInfo onCopyPath={onCopyPath} />
      </Modal>
    </>
  );
}
