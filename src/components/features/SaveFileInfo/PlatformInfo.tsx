import { useState, type JSX, type ReactNode } from "react";
import { Button, Separator } from "@/components/ui";
import { cn } from "@/utils";

import { PLATFORM_OPTIONS, type PlatformId, type PlatformOption } from "./PlatformOptions";

interface PlatformPathProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const platformPathStyles = {
  base: "block bg-gray-900/50 rounded px-3 py-2 text-xs text-blue-300 font-mono break-all cursor-pointer hover:bg-gray-800/50 transition-colors",
} as const;

function PlatformPath({ children, onClick, className, ...props }: PlatformPathProps) {
  return (
    <code onClick={onClick} className={cn(platformPathStyles.base, className)} {...props}>
      {children}
    </code>
  );
}

interface PlatformInfoProps {
  onCopyPath: (path: string) => void;
}

export function PlatformInfo({ onCopyPath }: PlatformInfoProps) {
  const [activePlatformId, setActivePlatformId] = useState<PlatformId>("Windows");
  const [copiedId, setCopiedId] = useState<PlatformId | null>(null);

  const activePlatform = PLATFORM_OPTIONS.find(platform => platform.id === activePlatformId) ?? PLATFORM_OPTIONS[0];

  const handleCopyPath = (activePlatform: PlatformOption) => {
    if (!activePlatform.saveFilePath) return;
    onCopyPath(activePlatform.saveFilePath);
    setCopiedId(activePlatform.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const getPlatformInfoMarkup = (
    activePlatform: PlatformOption,
    handleCopyPath: (activePlatform: PlatformOption) => void,
    customHeaderLabel?: ReactNode
  ): JSX.Element | null => {
    if (!activePlatform.saveFilePath) return null;

    return (
      <div className="space-y-3">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wider flex items-center gap-1.5">
              {customHeaderLabel ? (
                <span>{customHeaderLabel}</span>
              ) : (
                <>
                  <span>{activePlatform.icon}</span> <span>Save File Location</span>
                </>
              )}
            </h3>
            {copiedId === activePlatform.id && <span className="text-xs text-green-400">✓ Copied!</span>}
          </div>
          <PlatformPath onClick={() => handleCopyPath(activePlatform)}>{activePlatform.saveFilePath}</PlatformPath>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
        {PLATFORM_OPTIONS.map(platform => {
          const isActive = platform.id === activePlatform.id;

          return (
            <Button
              key={platform.id}
              type="button"
              onClick={() => setActivePlatformId(platform.id)}
              className={cn(
                "flex items-center gap-1.5 px-2 py-1.5 rounded-md border font-medium text-xs transition-colors duration-200 cursor-pointer",
                isActive
                  ? "bg-blue-500/20 text-white border-blue-500/50"
                  : "bg-gray-800/40 text-gray-400 border-gray-700/50 hover:text-gray-300 hover:bg-gray-700/40"
              )}
              aria-pressed={isActive}
            >
              <span className="text-sm">{platform.icon}</span>
              <span className="flex-1 text-left text-xs">{platform.label}</span>
            </Button>
          );
        })}
      </div>

      {activePlatform.saveFilePath && <Separator className="my-8" />}

      {getPlatformInfoMarkup(activePlatform, handleCopyPath)}
      {activePlatform.sections?.map((section, index) => (
        <div key={section.id}>
          <Separator className={index === 0 ? "my-8" : "my-4 hidden"} />
          {getPlatformInfoMarkup(
            section,
            handleCopyPath,
            <>
              <span>{section.icon}</span> <span>{section.label}</span>
              {/* <span>{section.label} · Save File Location</span> */}
            </>
          )}
        </div>
      ))}
      {activePlatform.note && (
        <>
          <Separator className="my-4" />
          <p className="text-xs text-gray-400 leading-relaxed">{activePlatform.note}</p>
        </>
      )}
    </div>
  );
}
