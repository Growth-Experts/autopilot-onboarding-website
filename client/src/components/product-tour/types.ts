export type TooltipPlacement = "top" | "bottom" | "left" | "right";

/** Hotspot position as a fraction (0–1) of the original, un-zoomed media. */
export interface TourHotspot {
  x: number;
  y: number;
  placement?: TooltipPlacement;
}

/**
 * Zoom applied to the media. `left`/`top` are the offsets of the scaled media
 * as a fraction of the frame size (normally ≤ 0), matching Arcade's panAndZoom.
 */
export interface TourZoom {
  level: number;
  left: number;
  top: number;
}

interface TourStepBase {
  id: string;
}

export interface TourCardAction {
  label: string;
  /** Omit to advance to the next step. */
  href?: string;
}

export interface TourCardStep extends TourStepBase {
  type: "card";
  /** "dark" (default): white text over a dark gradient. "light": dark text over a white wash. */
  theme?: "light" | "dark";
  title: string;
  subtitle?: string;
  action: TourCardAction;
  /** Blurred behind the card. */
  backgroundImage?: string;
  /** Shown beside the text from the `sm` breakpoint up, like Arcade's preview image. */
  previewImage?: string;
}

export interface TourImageStep extends TourStepBase {
  type: "image";
  image: string;
  alt: string;
  /** Supports **bold**. Steps without a caption have no hotspot, like Arcade's final screen. */
  caption?: string;
  hotspot?: TourHotspot;
  zoom?: TourZoom;
}

/** Plays once, then advances to the next step (Arcade's video step behaviour). */
export interface TourVideoStep extends TourStepBase {
  type: "video";
  video: string;
  poster?: string;
  playbackRate?: number;
}

export type TourStep = TourCardStep | TourImageStep | TourVideoStep;
export type TourMediaStep = TourImageStep | TourVideoStep;
