import { type ReactNode } from "react";

export type PlatformId = "Windows" | "macOS" | "Linux" | "GamePass" | "SteamDeck" | "Switch";

export type PlatformOption = {
  id: PlatformId;
  label: string;
  icon: string;
  saveFilePath: string;
  note?: ReactNode;
  sections?: PlatformOption[];
};

const genericNote = (
  <>
    <span>
      For Steam, your save files (<span className="text-orange-400 font-mono">user_.dat</span>) will be in a sub-folder
      of your <span className="text-orange-400 font-mono">SteamUserID</span>, a.k.a.{" "}
      <a
        href="https://steamcommunity.com/my/friends/add"
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Your Friend Code
      </a>
      . You can also find your saves on{" "}
      <a
        href="https://store.steampowered.com/account/remotestorageapp/?appid=1030300"
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Steam Cloud
      </a>
      , if it is enabled.
      <br />
      <br />
      For non-Steam builds, save files will be in a <span className="text-orange-400 font-mono">default</span>{" "}
      sub-folder.
    </span>
  </>
);

const gamePassNote = (
  <>
    <span>
      Open a folder with a really-long name inside the <span className="text-orange-400 font-mono">wgs</span> folder,
      and you'll find even more folders within that folder. Your save files should be in these folders. Save files also
      have really-long (
      <a
        href="https://en.wikipedia.org/wiki/Universally_unique_identifier"
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        GUID-like
      </a>
      ) names, without a file extension.
    </span>
  </>
);

export const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    id: "Windows",
    label: "Windows",
    icon: "🪟",
    saveFilePath: "%USERPROFILE%/AppData/LocalLow/Team Cherry/Hollow Knight Silksong/",
    note: genericNote,
    sections: [
      {
        id: "GamePass",
        label: "Game Pass (PC)",
        icon: "💻",
        saveFilePath: "%LOCALAPPDATA%/Packages/TeamCherry.HollowKnightSilksong_y4jvztpgccj42/SystemAppData/wgs/",
        note: gamePassNote,
      },
    ],
  },
  {
    id: "macOS",
    label: "macOS",
    icon: "🍎",
    saveFilePath: "~/Library/Application Support/unity.Team-Cherry.Silksong/",
    note: genericNote,
  },
  {
    id: "Linux",
    label: "Linux",
    icon: "🐧",
    saveFilePath: "~/.config/unity3d/Team Cherry/Hollow Knight Silksong/",
    note: genericNote,
  },
  {
    id: "Switch",
    label: "Nintendo Switch",
    icon: "🍄",
    saveFilePath: "sdmc:/atmosphere/contents/<title-id>/saves/hollow_knight_silksong/",
    note: (
      <>
        Not a simple process! This requires Homebrew and JKSV. Here's a{" "}
        <a
          className="text-blue-400 hover:text-blue-300 underline"
          href="https://www.reddit.com/r/HollowKnight/comments/1dacmy1/gamesave_from_switch_to_steam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Reddit guide
        </a>
        .
      </>
    ),
  },
];
