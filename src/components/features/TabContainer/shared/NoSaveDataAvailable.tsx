import { useState, useRef, useEffect } from "react";
import Sherma from "@/assets/Sherma.png";
import ShermaGif from "@/assets/Sherma.gif";
import { cn, shuffleArray } from "@/utils";

type NoValidSaveVariant = "NO_SAVE_FILE" | "CORRUPTED_SAVE_DATA";

interface NoValidSaveProps {
  variant?: NoValidSaveVariant;
}

const VARIANT_CONFIG = {
  NO_SAVE_FILE: {
    defaultMessage: "No save file loaded.",
    hoverMessage: "🎵✨ Using the power of song...",
    "🐣": [
      "https://www.youtube.com/shorts/5tVYDZKOUgs", // I just need some ... SHAW!
      "https://soundcloud.com/kirkhamilton/shakras-song-remix-hollow-knight-silksong", // Shakra's Song - Kirk Hamilton Remix
      "https://www.youtube.com/watch?v=CtqbHimldIc", // Sherma x Shakra Remix
      "https://www.youtube.com/watch?v=uLswSyQ_ChE", // Lace x Sherma x Shakra Remix
    ],
  },
  CORRUPTED_SAVE_DATA: {
    defaultMessage: "Corrupted / Invalid save data.",
    hoverMessage: "🎵✨ Manifesting a fix...",
    "🐣": [
      "https://www.youtube.com/watch?v=z8_7mpKMw0M", // Myla x Sherma Remix
      "https://www.youtube.com/watch?v=RCxoDmHUpMc", // Cornifer Humming Remix
    ],
  },
} as const;

export function NoSaveDataAvailable({ variant = "NO_SAVE_FILE" }: NoValidSaveProps) {
  const [isHovered, setIsHovered] = useState(false);
  const config = VARIANT_CONFIG[variant];
  const state = useRef({ "📻": [] as string[], "🎶": 0 });

  useEffect(() => {
    state.current["📻"] = shuffleArray(config["🐣"]);
    state.current["🎶"] = 0;
  }, [config, variant]);

  const handleClick = () => {
    if (state.current["🎶"] >= state.current["📻"].length) {
      state.current["📻"] = shuffleArray(config["🐣"]);
      state.current["🎶"] = 0;
    }
    window.open(state.current["📻"][state.current["🎶"]], "_blank", "noopener,noreferrer");
    state.current["🎶"]++;
  };

  return (
    <div className="text-white text-center text-lg relative">
      {/* Invisible hover area */}
      <div
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-32 pointer-events-auto cursor-pointer hidden sm:block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={handleClick}
        aria-hidden="true"
      />
      <img
        src={!isHovered ? Sherma : ShermaGif}
        alt="Sherma"
        className={cn(
          "absolute left-1/2 top-1/2 object-contain opacity-60 drop-shadow-[0_0_60px_rgba(59,130,246,0.3)] pointer-events-none hover:opacity-80 hidden sm:block",
          !isHovered ? "-translate-y-12 -translate-x-56 w-24 h-24" : "-translate-y-17.25 -translate-x-60 w-32 h-32"
        )}
      />
      <span>{!isHovered ? config.defaultMessage : config.hoverMessage}</span>
    </div>
  );
}
