import { useEffect, useLayoutEffect, useRef, useState } from "react";
import hornetPoster from "@/assets/backgrounds/hornet-menu.webp";
import hornetDesktop from "@/assets/backgrounds/hornet-menu.mp4";
import hornetMobile from "@/assets/backgrounds/hornet-menu-mobile.mp4";
import songPoster from "@/assets/backgrounds/song-menu.webp";
import songDesktop from "@/assets/backgrounds/song-menu.mp4";
import songMobile from "@/assets/backgrounds/song-menu-mobile.mp4";

const backgrounds = {
  hornet: { label: "Hornet", poster: hornetPoster, desktop: hornetDesktop, mobile: hornetMobile },
  song: { label: "Song", poster: songPoster, desktop: songDesktop, mobile: songMobile },
};
type BackgroundStyle = keyof typeof backgrounds;
const storageKey = "menu-background-style";

export function MenuBackground() {
  const [animate, setAnimate] = useState(false);
  const [style, setStyle] = useState<BackgroundStyle>(() => {
    try {
      return localStorage.getItem(storageKey) === "song" ? "song" : "hornet";
    } catch {
      return "hornet";
    }
  });
  const videoRef = useRef<HTMLVideoElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const background = backgrounds[style];

  useLayoutEffect(() => {
    const layer = layerRef.current;
    if (!layer) return;
    const touchViewport = window.matchMedia?.("(hover: none) and (pointer: coarse)");
    const viewport = window.visualViewport;
    let previousWidth = 0;
    let height = 0;
    let frame = 0;
    const resize = () => {
      const mobile = !!touchViewport?.matches;
      const scale = mobile ? viewport?.scale || 1 : 1;
      // Use layout dimensions, not a zoomed bounding rect. Reserve the whole
      // phone screen so retracting browser bars reveal more of the same scene.
      const width = mobile ? document.documentElement.clientWidth : window.innerWidth;
      const layoutHeight = document.documentElement.clientHeight;
      const screenHeight =
        width > layoutHeight ? Math.min(screen.width, screen.height) : Math.max(screen.width, screen.height);
      const neededHeight = Math.ceil(
        Math.max(layoutHeight, (viewport?.height || 0) * scale, mobile ? screenHeight : 0)
      );
      height = mobile && width === previousWidth ? Math.max(height, neededHeight) : neededHeight;
      previousWidth = width;
      layer.style.setProperty("--background-width", `${width}px`);
      layer.style.setProperty("--background-height", `${height}px`);
      // Keep the decorative layer on screen while the user zooms/pans content.
      layer.style.transform =
        mobile && viewport
          ? `translate3d(${viewport.offsetLeft}px, ${viewport.offsetTop}px, 0) scale(${1 / scale})`
          : "translateZ(0)";
    };
    const scheduleResize = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(resize);
    };
    resize();
    window.addEventListener("resize", scheduleResize);
    viewport?.addEventListener("resize", scheduleResize);
    viewport?.addEventListener("scroll", scheduleResize);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", scheduleResize);
      viewport?.removeEventListener("resize", scheduleResize);
      viewport?.removeEventListener("scroll", scheduleResize);
    };
  }, []);

  const changeStyle = (value: BackgroundStyle) => {
    setStyle(value);
    try {
      localStorage.setItem(storageKey, value);
    } catch {
      // Switching still works when browser storage is unavailable.
    }
  };

  useEffect(() => {
    if (!window.matchMedia) return;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!preference.matches);
    update();
    preference.addEventListener("change", update);
    return () => preference.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    video.defaultMuted = true;
    video.playbackRate = 1; // Slow motion is already captured in the source frames.
    const update = () => {
      if (document.hidden) video.pause();
      else void video.play().catch(() => {}); // The poster remains if autoplay is unavailable.
    };
    // Reuse the player when switching styles and explicitly reload its sources.
    // Mobile browsers can suspend playback while their native selector is open.
    video.addEventListener("canplay", update);
    window.addEventListener("focus", update);
    window.addEventListener("pageshow", update);
    video.load();
    update();
    document.addEventListener("visibilitychange", update);
    return () => {
      video.removeEventListener("canplay", update);
      window.removeEventListener("focus", update);
      window.removeEventListener("pageshow", update);
      document.removeEventListener("visibilitychange", update);
    };
  }, [animate, style]);

  return (
    <>
      <div ref={layerRef} className="menu-background-layer" aria-hidden="true">
        <div
          className="menu-background-poster"
          style={{ backgroundImage: `url(${background.poster})` }}
          aria-hidden="true"
        />
        {animate && (
          <video
            ref={videoRef}
            className="menu-background"
            poster={background.poster}
            muted
            autoPlay
            loop
            playsInline
            preload="none"
            disablePictureInPicture
            aria-hidden="true"
            tabIndex={-1}
          >
            <source src={background.mobile} type="video/mp4" media="(max-width: 600px)" />
            <source src={background.desktop} type="video/mp4" />
          </video>
        )}
      </div>
      <label className="background-picker">
        Background
        <select value={style} onChange={event => changeStyle(event.target.value as BackgroundStyle)}>
          {Object.entries(backgrounds).map(([value, { label }]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </label>
    </>
  );
}
