import { type ReactNode } from "react";

export type PlatformId = "PC" | "Windows" | "macOS" | "Linux" | "GamePass" | "Switch";

export type PlatformOption = {
  id: PlatformId;
  label: string;
  icon: string;
  saveFilePath?: string;
  sections?: PlatformOption[];
  note?: ReactNode;
};

const pcNote = (
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
    </span>
    <span>
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
    <br />
    <br />
    <span>
      If you're having trouble locating specific Game Pass save file(s), try{" "}
      <a
        href="https://github.com/saiki-k/wgs-inspector"
        className="text-blue-400 hover:text-blue-300 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        WGS Inspector
      </a>
      , an open-source tool that helps you inspect your Game Pass save files, and optionally export them to a readable
      format.
    </span>
  </>
);

export const PLATFORM_OPTIONS: PlatformOption[] = [
  {
    id: "PC",
    label: "PC (Steam & Others)",
    icon: "🖥️",
    sections: [
      {
        id: "Windows",
        label: "Windows",
        icon: "🪟",
        saveFilePath: "%USERPROFILE%/AppData/LocalLow/Team Cherry/Hollow Knight Silksong/",
      },
      {
        id: "macOS",
        label: "macOS",
        icon: "🍎",
        saveFilePath: "~/Library/Application Support/unity.Team-Cherry.Silksong/",
      },
      {
        id: "Linux",
        label: "Linux",
        icon: "🐧",
        saveFilePath: "~/.config/unity3d/Team Cherry/Hollow Knight Silksong/",
      },
    ],
    note: pcNote,
  },
  {
    id: "GamePass",
    label: "GamePass (Windows)",
    icon: "🪟",
    saveFilePath: "%LOCALAPPDATA%/Packages/TeamCherry.HollowKnightSilksong_y4jvztpgccj42/SystemAppData/wgs/",
    note: gamePassNote,
  },
  {
    id: "Switch",
    label: "Nintendo Switch",
    icon: "🍄",
    saveFilePath: "sdmc:/atmosphere/contents/<title-id>/saves/hollow_knight_silksong/",
    note: (
      <>
        Not a simple process! This requires Homebrew and JKSV. Here's a related{" "}
        <a
          className="text-blue-400 hover:text-blue-300 underline"
          href="https://www.reddit.com/r/HollowKnight/comments/1dacmy1/gamesave_from_switch_to_steam/"
          rel="noopener noreferrer"
          target="_blank"
        >
          Reddit discussion
        </a>
        .
      </>
    ),
  },
];
