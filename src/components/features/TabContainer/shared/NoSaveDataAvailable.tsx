import { useRef, useEffect } from "react";
import Sherma from "@/assets/Sherma.png";
import ShermaGIF from "@/assets/Sherma.gif";
import { shuffleArray } from "@/utils";

type NoValidSaveVariant = "NO_SAVE_FILE" | "CORRUPTED_SAVE_DATA";

interface NoValidSaveProps {
  variant?: NoValidSaveVariant;
}

const VARIANT_CONFIG = {
  NO_SAVE_FILE: {
    defaultMessage: "No save file loaded.",
    hoverMessage: "🎵✨ Using the power of song...",
    playlist: [
      "https://www.youtube.com/shorts/5tVYDZKOUgs", // I just need some ... SHAW!
      "https://soundcloud.com/kirkhamilton/shakras-song-remix-hollow-knight-silksong", // Shakra's Song - Kirk Hamilton Remix
      "https://www.youtube.com/watch?v=CtqbHimldIc", // Sherma x Shakra Remix
      "https://www.youtube.com/watch?v=uLswSyQ_ChE", // Lace x Sherma x Shakra Remix
    ],
  },
  CORRUPTED_SAVE_DATA: {
    defaultMessage: "Corrupted / Invalid save data.",
    hoverMessage: "🎵✨ Manifesting a fix...",
    playlist: [
      "https://www.youtube.com/watch?v=z8_7mpKMw0M", // Myla x Sherma Remix
      "https://www.youtube.com/watch?v=RCxoDmHUpMc", // Cornifer Humming Remix
    ],
  },
} as const;

export function NoSaveDataAvailable({ variant = "NO_SAVE_FILE" }: NoValidSaveProps) {
  const config = VARIANT_CONFIG[variant];
  const state = useRef({ shuffledTracks: [] as string[], trackIndex: 0 });
  const shermaRef = useRef<HTMLImageElement>(null);
  const shermaGifRef = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    state.current.shuffledTracks = shuffleArray(config.playlist);
    state.current.trackIndex = 0;
  }, [config, variant]);

  const handleMouseEnter = () => {
    if (shermaRef.current && shermaGifRef.current && textRef.current) {
      shermaRef.current.classList.remove("sm:block");
      shermaGifRef.current.classList.add("sm:block");
      textRef.current.textContent = config.hoverMessage;
    }
  };

  const handleMouseLeave = () => {
    if (shermaRef.current && shermaGifRef.current && textRef.current) {
      shermaRef.current.classList.add("sm:block");
      shermaGifRef.current.classList.remove("sm:block");
      textRef.current.textContent = config.defaultMessage;
    }
  };

  const handleClick = () => {
    if (state.current.trackIndex >= state.current.shuffledTracks.length) {
      state.current.shuffledTracks = shuffleArray(config.playlist);
      state.current.trackIndex = 0;
    }
    window.open(state.current.shuffledTracks[state.current.trackIndex], "_blank", "noopener,noreferrer");
    state.current.trackIndex++;
  };

  return (
    <div className="text-white text-center text-lg relative">
      {/* Invisible hover area */}
      <div
        className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-32 pointer-events-auto cursor-pointer hidden sm:block"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
        aria-hidden="true"
      />
      <img
        ref={shermaRef}
        src={Sherma}
        alt="Sherma"
        className="absolute left-1/2 top-1/2 -translate-y-12 -translate-x-56 w-24 h-24 object-contain opacity-60 drop-shadow-[0_0_60px_rgba(59,130,246,0.3)] pointer-events-none hover:opacity-80 hidden sm:block"
      />
      <img
        ref={shermaGifRef}
        src={ShermaGIF}
        alt="Sherma animated"
        className="absolute left-1/2 top-1/2 -translate-y-17.25 -translate-x-60 w-32 h-32 object-contain opacity-60 drop-shadow-[0_0_60px_rgba(59,130,246,0.3)] pointer-events-none hover:opacity-80 hidden"
      />
      <span ref={textRef}>{config.defaultMessage}</span>
    </div>
  );
}
