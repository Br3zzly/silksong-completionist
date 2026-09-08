import type { ReactElement } from "react";
import type { TabContentProps } from "./types";
import { CategoryHeader } from "./shared";

export function StatsContent({ tabLabel, computedData }: TabContentProps): ReactElement {
  if (!computedData || !computedData.statsItems) {
    return <div className="text-white text-center">No "Stats" data available.</div>;
  }

  const { category, statsItems } = computedData;

  return (
    <>
      <CategoryHeader title={tabLabel || category?.name || "Stats"} description={category?.description || ""} />

      <div className="bg-gray-900/50 border-2 border-gray-600/30 rounded-b-lg border-t-0 p-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {statsItems.map(item => (
            <div
              key={item.name}
              className="bg-gradient-to-br from-gray-800/60 to-gray-800/40 border border-gray-600/50 rounded-xl p-6 hover:from-gray-700/60 hover:to-gray-700/40 hover:border-blue-500/30 transition-all duration-200 shadow-lg"
              title={item.detailedValue || undefined}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-200 mb-3 tracking-tight">{item.displayValue || "—"}</div>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
