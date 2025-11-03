import React, { useState } from "react";
import { Button } from "../Button";

interface MobileStatusBarProps {
  totalFound: number;
  totalAvailable: number;
  showSpoilers?: boolean;
  onToggleSpoilers?: () => void;
  children?: React.ReactNode;
}

export const MobileStatusBar: React.FC<MobileStatusBarProps> = ({
  totalFound,
  totalAvailable,
  showSpoilers,
  onToggleSpoilers,
  children,
}) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const percentage = totalAvailable > 0 ? Math.round((totalFound / totalAvailable) * 100) : 0;

  return (
    <div className="md:hidden">
      <div className="bg-gray-900 border-b border-gray-700 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="text-sm text-gray-300">
              {totalFound}/{totalAvailable} ({percentage}%)
            </div>
            <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="h-full bg-green-500 transition-all duration-300" style={{ width: `${percentage}%` }} />
            </div>
          </div>
          <Button
            onClick={() => setIsFiltersOpen(!isFiltersOpen)}
            className="ml-3 px-3 py-1 text-sm bg-gray-700 hover:bg-gray-600 rounded"
          >
            {isFiltersOpen ? "Hide" : "Filters"}
          </Button>
        </div>

        {isFiltersOpen && (
          <div className="mt-3 pt-3 border-t border-gray-700 space-y-3">
            {showSpoilers !== undefined && onToggleSpoilers && (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-300">Show Spoilers</span>
                <Button
                  onClick={onToggleSpoilers}
                  className={`px-3 py-1 text-sm rounded ${
                    showSpoilers
                      ? "bg-green-600 hover:bg-green-700 text-white"
                      : "bg-gray-600 hover:bg-gray-500 text-gray-200"
                  }`}
                >
                  {showSpoilers ? "On" : "Off"}
                </Button>
              </div>
            )}
            {children && <div className="space-y-2">{children}</div>}
          </div>
        )}
      </div>
    </div>
  );
};
