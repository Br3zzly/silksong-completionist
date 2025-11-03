import type { NormalizedItem } from "@/dictionary";
import { getHoverBlurClassNames, cn } from "@/utils";
import { MapButton } from "@/components/ui";

interface MobileItemCardProps {
  item: NormalizedItem;
  showSpoilers: boolean;
  categoryName: string;
  sectionName?: string;
}

export function MobileItemCard({ item, showSpoilers, categoryName, sectionName }: MobileItemCardProps) {
  const blurClasses = getHoverBlurClassNames({
    shouldBlur: !item.saveMeta?.unlocked && !showSpoilers,
  });

  const parts = [categoryName];
  if (sectionName) {
    parts.push(sectionName);
  }
  parts.push(item.name);
  const fullName = parts.join(" · ");

  return (
    <div className="bg-gray-800/50 border border-gray-600/30 rounded-lg p-4 mb-3">
      <div className="flex items-center justify-between mb-2">
        <span className={item.saveMeta?.unlocked ? "text-green-400" : "text-red-400"}>
          {item.saveMeta?.unlocked ? "✓" : "○"}
        </span>
        <h3 className={cn("text-lg font-semibold flex-1 mx-3", blurClasses)}>{item.name}</h3>
        {item.completionPercent && (
          <span className="text-xs text-blue-200 bg-blue-600/20 px-2 py-1 rounded">+{item.completionPercent}%</span>
        )}
        <span className="text-xs bg-gray-600 px-2 py-1 rounded ml-2">Act {item.whichAct}</span>
      </div>

      <p className={cn("text-sm text-gray-300 mb-3 leading-relaxed", blurClasses)}>{item.completionDetails}</p>

      <div className="flex justify-center">
        <MapButton mapLink={item.mapLink} titleName={fullName} className="w-full justify-center" />
      </div>
    </div>
  );
}
