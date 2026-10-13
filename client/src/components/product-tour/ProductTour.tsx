import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  useSyncExternalStore,
  type CSSProperties,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import type {
  TooltipPlacement,
  TourCardStep,
  TourHotspot,
  TourImageStep,
  TourMediaStep,
  TourStep,
  TourVideoStep,
} from "./types";

export type { TourStep } from "./types";

const BRAND = "#2142E7";
const TOOLTIP_GAP = 22;
const EDGE_MARGIN = 8;

export interface ProductTourProps {
  steps: TourStep[];
  /** Width / height of the media frame. */
  aspectRatio?: number;
  /** Accessible name for the tour region. */
  label?: string;
  initialStep?: number;
  onStepChange?: (index: number) => void;
  className?: string;
}

export function ProductTour({
  steps,
  aspectRatio = 16 / 10,
  label = "Product tour",
  initialStep = 0,
  onStepChange,
  className,
}: ProductTourProps) {
  const [index, setIndex] = useState(() => clampIndex(initialStep, steps.length));
  const [videoToggle, setVideoToggle] = useState<{ id: string; playing: boolean } | null>(null);
  const rootRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stage = useElementSize(stageRef);
  const reduceMotion = usePrefersReducedMotion();
  const sheetRef = useRef<HTMLDivElement>(null);
  const sheetFontReady = useFontReady(sheetRef);

  const step = steps[index];
  const total = steps.length;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  const videoPlaying =
    step?.type === "video" && videoToggle?.id === step.id ? videoToggle.playing : !reduceMotion;

  const goTo = useCallback(
    (next: number) => {
      const target = clampIndex(next, steps.length);
      setIndex(target);
      onStepChange?.(target);
    },
    [steps.length, onStepChange],
  );
  const next = useCallback(() => goTo(index + 1), [goTo, index]);
  const back = useCallback(() => goTo(index - 1), [goTo, index]);

  // Advancing unmounts the control that was clicked; keep focus in the tour so arrow keys keep working.
  const advanceFromStage = useCallback(() => {
    rootRef.current?.focus({ preventScroll: true });
    next();
  }, [next]);

  // Only advance from the step the video belongs to, in case the user already moved on.
  const stepIdRef = useRef(step?.id);
  stepIdRef.current = step?.id;
  const onVideoEnded = useCallback(
    (id: string) => {
      if (stepIdRef.current === id) next();
    },
    [next],
  );

  // The media actually on screen. It lags `step` until the new frame has decoded, and the zoom
  // and hotspot follow it so they never move ahead of the picture.
  const [shownId, setShownId] = useState<string | null>(null);
  const mediaIndex = step?.type === "card" ? nearbyMediaIndex(steps, index) : index;
  const mediaTarget = mediaIndex === -1 ? undefined : (steps[mediaIndex] as TourMediaStep);
  const upcomingMedia = mediaIndex === -1 ? undefined : nextMedia(steps, mediaIndex);
  const shownStep = steps.find((s) => s.id === shownId);
  const showing = step && shownId === step.id;

  // The intro/closing card stays mounted and fades as an overlay, so its images are never reloaded.
  const lastCardRef = useRef<TourCardStep | undefined>(undefined);
  if (step?.type === "card") lastCardRef.current = step;
  const card = lastCardRef.current ?? steps.find((s): s is TourCardStep => s.type === "card");
  const cardVisible = step?.type === "card";

  useEffect(() => {
    for (const neighbour of [steps[index + 1], steps[index + 2], steps[index - 1]]) {
      const src = neighbour && previewSource(neighbour);
      if (src) warmImage(src);
    }
  }, [index, steps]);

  const onKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.altKey || event.ctrlKey || event.metaKey) return;
    const keyActions: Record<string, () => void> = {
      ArrowRight: next,
      ArrowLeft: back,
      Home: () => goTo(0),
      End: () => goTo(total - 1),
    };
    const action = keyActions[event.key];
    if (action) {
      event.preventDefault();
      action();
    }
  };

  if (!step) return null;

  const sheetText = step.type === "card" ? step.subtitle : step.type === "image" ? step.caption : undefined;

  return (
    <div
      ref={rootRef}
      role="region"
      aria-roledescription="product tour"
      aria-label={label}
      tabIndex={0}
      onKeyDown={onKeyDown}
      className={cn(
        "relative w-full bg-white text-[#0B1220] outline-none focus-visible:ring-2 focus-visible:ring-[#2142E7] focus-visible:ring-offset-2",
        className,
      )}
    >
      <div
        ref={stageRef}
        className="relative w-full overflow-hidden bg-white select-none"
        style={{ aspectRatio }}
      >
        {/* One camera for all media, so the view pans from one step's framing to the next. A CSS
            transform (not framer-motion) so the new framing is committed in the same paint as the
            frame swap; with reduced motion there's no transition, so no in-between frame. */}
        <div
          className="absolute inset-0 origin-top-left transition-transform duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] motion-reduce:transition-none"
          style={{ transform: zoomTransform(step.type === "card" ? undefined : shownStep) }}
        >
          {mediaTarget && (
            <MediaStage
              target={mediaTarget}
              upcoming={upcomingMedia}
              playing={step.type === "video" && videoPlaying}
              onShown={setShownId}
              onVideoEnded={onVideoEnded}
              onPlayFailed={(id) => setVideoToggle({ id, playing: false })}
            />
          )}
        </div>

        {card && (
          <div
            className="absolute inset-0 z-10 transition-opacity duration-[350ms]"
            style={{ opacity: cardVisible ? 1 : 0, pointerEvents: cardVisible ? "auto" : "none" }}
            aria-hidden={!cardVisible}
            inert={!cardVisible}
          >
            <CardLayer
              step={card}
              isLast={isLast}
              onAdvance={advanceFromStage}
              onRestart={() => {
                rootRef.current?.focus({ preventScroll: true });
                goTo(0);
              }}
            />
          </div>
        )}

        {showing && step.type === "image" && step.hotspot && step.caption && (
          <HotspotLayer
            key={step.id}
            step={step}
            hotspot={step.hotspot}
            caption={step.caption}
            stage={stage}
            reduceMotion={reduceMotion}
            onActivate={advanceFromStage}
          />
        )}

        {showing && step.type === "video" && (
          <button
            type="button"
            onClick={() => setVideoToggle({ id: step.id, playing: !videoPlaying })}
            aria-label={videoPlaying ? "Pause video" : "Play video"}
            className="absolute bottom-2 left-2 z-20 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1220]/70 text-white transition-colors hover:bg-[#0B1220]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-3 sm:left-3"
          >
            {videoPlaying ? (
              <Pause className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Play className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        )}
      </div>

      {/* Fixed height so the page doesn't jump on steps without a caption. The text waits for the
          caption font (as the desktop bubble does), so it isn't drawn in a fallback font first. */}
      <div
        ref={sheetRef}
        className="md:hidden flex min-h-[5.875rem] items-stretch border-t border-[#0B1220]/10 bg-white"
      >
        {sheetText &&
          (isLast ? (
            <p className={cn("px-4 py-3 text-sm leading-relaxed text-[#0B1220]", !sheetFontReady && "invisible")}>
              <RichText text={sheetText} />
            </p>
          ) : (
            // The Next button is the keyboard and screen-reader route; this is a larger touch target.
            <button
              type="button"
              tabIndex={-1}
              aria-hidden="true"
              onClick={advanceFromStage}
              className={cn(
                "flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm leading-relaxed text-[#0B1220] transition-colors active:bg-[#2142E7]/5",
                !sheetFontReady && "invisible",
              )}
            >
              <span className="flex-1">
                <RichText text={sheetText} />
              </span>
              <ArrowRight className="h-4 w-4 shrink-0" style={{ color: BRAND }} />
            </button>
          ))}
      </div>

      <ControlBar
        index={index}
        total={total}
        isFirst={isFirst}
        isLast={isLast}
        onBack={back}
        onNext={isLast ? () => goTo(0) : next}
      />

      <p className="sr-only" aria-live="polite" aria-atomic="true">
        {`Step ${index + 1} of ${total}. ${announcement(step)}`}
      </p>
    </div>
  );
}

function CardLayer({
  step,
  isLast,
  onAdvance,
  onRestart,
}: {
  step: TourCardStep;
  isLast: boolean;
  onAdvance: () => void;
  onRestart: () => void;
}) {
  const { action } = step;
  const light = step.theme === "light";
  const buttonClass = cn(
    "inline-flex items-center gap-2 rounded-[8px] px-4 py-2 text-xs font-semibold text-white shadow-lg transition-opacity hover:opacity-90 sm:px-5 sm:py-3 sm:text-sm md:text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    light
      ? "focus-visible:ring-[#2142E7] focus-visible:ring-offset-white"
      : "focus-visible:ring-white focus-visible:ring-offset-[#0B1220]",
  );

  return (
    <div className="absolute inset-0 overflow-hidden bg-white">
      {step.backgroundImage && (
        <img
          src={step.backgroundImage}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute inset-0 h-full w-full scale-110 object-cover blur-[6px]"
        />
      )}
      <div
        className={
          light
            ? "absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_50%,rgba(255,255,255,0.8)_100%)]"
            : "absolute inset-0 bg-[linear-gradient(135deg,rgba(11,18,32,0.95)_0%,rgba(11,18,32,0.84)_55%,rgba(33,66,231,0.7)_100%)]"
        }
      />
      {step.previewImage && (
        <img
          src={step.previewImage}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute left-1/2 top-[19%] hidden w-[85%] max-w-none animate-tour-slide-in rounded-tl-lg border border-[#0B1220]/10 bg-white shadow-[0_16px_48px_rgba(11,18,32,0.18)] motion-reduce:animate-none sm:block"
        />
      )}
      <div
        className={cn(
          "relative flex h-full animate-tour-rise-in flex-col justify-center gap-3 px-[5%] motion-reduce:animate-none sm:gap-4",
          step.previewImage ? "max-w-full sm:max-w-[47%]" : "max-w-3xl px-[7%]",
        )}
      >
        <h2
          className={cn(
            "font-bold leading-tight tracking-tight",
            light ? "text-[#0B1220]" : "text-white",
            step.previewImage ? "text-base sm:text-lg md:text-2xl lg:text-[1.75rem]" : "text-lg sm:text-3xl lg:text-5xl",
          )}
        >
          {step.title}
        </h2>
        {step.subtitle && (
          <p
            className={cn(
              "hidden max-w-xl leading-relaxed md:block",
              light ? "text-sm text-[#0B1220]/80 lg:text-base" : "text-base text-white/80 lg:text-lg",
            )}
          >
            {step.subtitle}
          </p>
        )}
        <div className="mt-1 flex flex-wrap items-center gap-3 sm:mt-2">
          {action.href ? (
            <a
              href={action.href}
              target="_blank"
              rel="noopener noreferrer"
              className={buttonClass}
              style={{ backgroundColor: BRAND }}
            >
              {action.label}
            </a>
          ) : (
            <button
              type="button"
              onClick={onAdvance}
              className={buttonClass}
              style={{ backgroundColor: BRAND }}
            >
              {action.label}
            </button>
          )}
          {isLast && (
            <button
              type="button"
              onClick={onRestart}
              className={cn(
                "inline-flex items-center gap-2 rounded-[8px] border px-4 py-2 text-xs font-semibold transition-colors sm:px-5 sm:py-3 sm:text-sm md:text-base focus-visible:outline-none focus-visible:ring-2",
                light
                  ? "border-[#0B1220]/20 text-[#0B1220] hover:bg-[#0B1220]/5 focus-visible:ring-[#2142E7]"
                  : "border-white/40 text-white hover:bg-white/10 focus-visible:ring-white",
              )}
            >
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Replay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

type MediaLayer = 0 | 1 | "video";

/**
 * Two image slots and one video, mounted once and never keyed. The next screen is loaded and
 * decoded into a hidden slot ahead of time, and a slot is only brought to the front (by z-index,
 * never by opacity) once it has decoded pixels, so the previous frame stays up until then.
 * `src` is set imperatively; React never touches it, so a re-render can't trigger a reload.
 */
function MediaStage({
  target,
  upcoming,
  playing,
  onShown,
  onVideoEnded,
  onPlayFailed,
}: {
  target: TourMediaStep;
  upcoming?: TourMediaStep;
  playing: boolean;
  onShown: (id: string) => void;
  onVideoEnded: (id: string) => void;
  onPlayFailed: (id: string) => void;
}) {
  const imageRefs = [useRef<HTMLImageElement>(null), useRef<HTMLImageElement>(null)] as const;
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shown, setShown] = useState<{ step: TourMediaStep; layer: MediaLayer } | null>(null);
  const shownRef = useRef(shown);
  shownRef.current = shown;
  const callbacks = useRef({ onShown, onVideoEnded, onPlayFailed });
  callbacks.current = { onShown, onVideoEnded, onPlayFailed };

  useEffect(() => {
    const slots = [imageRefs[0].current!, imageRefs[1].current!];
    const video = videoRef.current!;
    const front = shownRef.current?.layer ?? null;
    let cancelled = false;
    let cleanup = () => {};

    const reveal = (layer: MediaLayer) => {
      if (cancelled) return;
      if (target.type === "video") video.playbackRate = target.playbackRate ?? 1;
      setShown({ step: target, layer });
      callbacks.current.onShown(target.id);
    };

    if (target.type === "image") {
      if ((front === 0 || front === 1) && slots[front].getAttribute("src") === target.image) {
        reveal(front);
      } else {
        const layer = front === 0 ? 1 : 0;
        const slot = slots[layer];
        if (slot.getAttribute("src") !== target.image) slot.src = target.image;
        // A failed decode (e.g. a 404) still reveals, so the tour can't get stuck on the old frame.
        slot.decode().then(
          () => reveal(layer),
          () => reveal(layer),
        );
      }
    } else {
      loadVideo(video, target);
      const showFirstFrame = () => {
        if (video.currentTime === 0) return reveal("video");
        video.addEventListener("seeked", () => reveal("video"), { once: true });
        video.currentTime = 0;
      };
      if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
        showFirstFrame();
      } else {
        video.addEventListener("loadeddata", showFirstFrame, { once: true });
        cleanup = () => video.removeEventListener("loadeddata", showFirstFrame);
      }
    }
    return () => {
      cancelled = true;
      cleanup();
    };
  }, [target]);

  // Load the next screen into a hidden slot. This runs after the swap has been committed: touching
  // a slot's src before then could repaint the slot that is still on top.
  useEffect(() => {
    if (!upcoming || shown?.step.id !== target.id) return;
    if (upcoming.type === "image") {
      const slot = imageRefs[shown.layer === 0 ? 1 : 0].current!;
      if (slot.getAttribute("src") !== upcoming.image) {
        slot.src = upcoming.image;
        slot.decode().catch(() => {});
      }
    } else if (shown.layer !== "video") {
      loadVideo(videoRef.current!, upcoming);
    }
  }, [shown, target, upcoming]);

  useEffect(() => {
    const video = videoRef.current!;
    if (shown?.layer === "video" && playing) {
      if (video.ended) video.currentTime = 0;
      video.play().catch(() => callbacks.current.onPlayFailed(shown.step.id));
    } else {
      video.pause();
    }
  }, [shown, playing]);

  const layerProps = (layer: MediaLayer) => ({
    "aria-hidden": shown?.layer !== layer,
    draggable: false,
    className: cn("absolute inset-0 h-full w-full object-cover", shown?.layer === layer ? "z-[2]" : "z-[1]"),
  });
  const shownAlt = shown?.step.type === "image" ? shown.step.alt : "";

  return (
    <>
      <img ref={imageRefs[0]} alt={shown?.layer === 0 ? shownAlt : ""} {...layerProps(0)} />
      <img ref={imageRefs[1]} alt={shown?.layer === 1 ? shownAlt : ""} {...layerProps(1)} />
      <video
        ref={videoRef}
        muted
        playsInline
        preload="auto"
        onEnded={() => {
          const current = shownRef.current;
          if (current?.layer === "video") callbacks.current.onVideoEnded(current.step.id);
        }}
        {...layerProps("video")}
        aria-hidden="true"
      />
    </>
  );
}

function loadVideo(video: HTMLVideoElement, step: TourVideoStep) {
  if (video.getAttribute("src") === step.video) return;
  video.defaultPlaybackRate = step.playbackRate ?? 1;
  video.src = step.video;
}

function HotspotLayer({
  step,
  hotspot,
  caption,
  stage,
  reduceMotion,
  onActivate,
}: {
  step: TourImageStep;
  hotspot: TourHotspot;
  caption: string;
  stage: Size;
  reduceMotion: boolean;
  onActivate: () => void;
}) {
  const { x, y } = displayedHotspot(hotspot, step.zoom);
  // Let the zoom settle before the hotspot appears at its final position.
  const delay = reduceMotion ? 0 : step.zoom ? 650 : 250;
  const bubbleRef = useRef<HTMLButtonElement>(null);
  // Fade in once the caption font is ready, so the bubble renders once at its final size.
  const fontReady = useFontReady(bubbleRef);

  return (
    // CSS fade, not framer-motion: when its WAAPI fade finishes it cancels the animation before
    // writing the final opacity, which can paint one frame at opacity 0. `will-change` keeps the
    // layer composited for its whole life, so the text isn't re-rasterized when the fade ends.
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 will-change-[opacity]",
        fontReady ? "animate-tour-fade-in motion-reduce:animate-none" : "opacity-0",
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <button
        type="button"
        onClick={onActivate}
        aria-label={`Next step: ${plainText(caption)}`}
        className="group pointer-events-auto absolute flex h-8 w-8 -translate-x-1/2 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full focus-visible:outline-none md:h-10 md:w-10"
        style={{ left: `${x * 100}%`, top: `${y * 100}%` }}
      >
        <span
          aria-hidden="true"
          className="absolute inset-0 rounded-full opacity-60 motion-safe:animate-ping"
          style={{ backgroundColor: BRAND }}
        />
        <span
          aria-hidden="true"
          className="absolute inset-[18%] rounded-full opacity-30"
          style={{ backgroundColor: BRAND }}
        />
        <span
          aria-hidden="true"
          className="relative h-3.5 w-3.5 rounded-full border-2 border-white shadow-[0_0_0_2px_rgba(33,66,231,0.35),0_4px_12px_rgba(11,18,32,0.35)] transition-transform group-hover:scale-125 group-focus-visible:ring-2 group-focus-visible:ring-white group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-[#2142E7] motion-reduce:transition-none md:h-4 md:w-4"
          style={{ backgroundColor: BRAND }}
        />
      </button>

      {stage.width > 0 && (
        <Tooltip
          caption={caption}
          anchor={{ x: x * stage.width, y: y * stage.height }}
          stage={stage}
          preferred={hotspot.placement}
          onActivate={onActivate}
          bubbleRef={bubbleRef}
        />
      )}
    </div>
  );
}

function Tooltip({
  caption,
  anchor,
  stage,
  preferred,
  onActivate,
  bubbleRef: ref,
}: {
  caption: string;
  anchor: { x: number; y: number };
  stage: Size;
  preferred?: TooltipPlacement;
  onActivate: () => void;
  bubbleRef: RefObject<HTMLButtonElement | null>;
}) {
  const size = useElementSize(ref);
  const layout = layoutTooltip(anchor, size, stage, preferred);

  return (
    // The hotspot button is the keyboard and screen-reader route; the bubble is an extra click target.
    <button
      ref={ref}
      type="button"
      tabIndex={-1}
      aria-hidden="true"
      onClick={onActivate}
      className="pointer-events-auto absolute hidden w-max max-w-[min(20rem,42%)] cursor-pointer rounded-[6px] px-4 py-3 text-left text-sm font-medium leading-snug text-white shadow-[0_12px_32px_rgba(11,18,32,0.3)] md:block"
      style={{
        backgroundColor: BRAND,
        left: layout.left,
        top: layout.top,
        visibility: size.width ? "visible" : "hidden",
      }}
    >
      <RichText text={caption} />
      <span
        className="absolute h-3 w-3 rotate-45"
        style={{ backgroundColor: BRAND, ...layout.arrow }}
      />
    </button>
  );
}

function ControlBar({
  index,
  total,
  isFirst,
  isLast,
  onBack,
  onNext,
}: {
  index: number;
  total: number;
  isFirst: boolean;
  isLast: boolean;
  onBack: () => void;
  onNext: () => void;
}) {
  const progress = ((index + 1) / total) * 100;
  const buttonClass =
    "inline-flex h-8 items-center gap-1.5 rounded-[6px] px-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2142E7]";

  return (
    <div className="relative border-t border-[#0B1220]/10 bg-white">
      <div
        role="progressbar"
        aria-label="Tour progress"
        aria-valuemin={1}
        aria-valuemax={total}
        aria-valuenow={index + 1}
        aria-valuetext={`Step ${index + 1} of ${total}`}
        className="absolute inset-x-0 top-0 h-[3px] -translate-y-full bg-[#0B1220]/10"
      >
        <div
          className="h-full transition-[width] duration-500 ease-out motion-reduce:transition-none"
          style={{ width: `${progress}%`, backgroundColor: BRAND }}
        />
      </div>
      <div className="flex h-[41px] items-center justify-between gap-2 px-2 sm:px-3">
        <button
          type="button"
          onClick={onBack}
          disabled={isFirst}
          className={cn(buttonClass, "text-[#0B1220] hover:bg-[#0B1220]/5")}
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back
        </button>
        <span className="text-xs font-medium tabular-nums text-[#0B1220]/60">
          {index + 1} / {total}
        </span>
        <button
          type="button"
          onClick={onNext}
          className={cn(buttonClass, "text-white hover:opacity-90")}
          style={{ backgroundColor: BRAND }}
        >
          {isLast ? (
            <>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Replay
            </>
          ) : (
            <>
              Next
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

/** Renders Arcade's **bold** markup. */
function RichText({ text }: { text: string }) {
  return (
    <>
      {text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
        i % 2 ? (
          <strong key={i} className="font-bold">
            {part}
          </strong>
        ) : (
          part
        ),
      )}
    </>
  );
}

function plainText(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

function announcement(step: TourStep) {
  if (step.type === "card") return step.title;
  if (step.type === "image") return plainText(step.caption ?? step.alt);
  return "";
}

interface Size {
  width: number;
  height: number;
}

const REDUCED_MOTION_QUERY = "(prefers-reduced-motion: reduce)";

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const query = window.matchMedia(REDUCED_MOTION_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    () => window.matchMedia(REDUCED_MOTION_QUERY).matches,
    () => false,
  );
}

/** Never hold the caption back longer than this if the web font is slow or fails. */
const FONT_WAIT_MS = 3000;

/** True once the element's font face has loaded (immediately, before paint, if it already has). */
function useFontReady(ref: RefObject<HTMLElement | null>) {
  const [ready, setReady] = useState(false);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el || !document.fonts) return setReady(true);
    const { fontStyle, fontWeight, fontSize, fontFamily } = getComputedStyle(el);
    const font = `${fontStyle} ${fontWeight} ${fontSize} ${fontFamily}`;
    if (document.fonts.check(font)) return setReady(true);
    let live = true;
    const timeout = new Promise((resolve) => setTimeout(resolve, FONT_WAIT_MS));
    Promise.race([document.fonts.load(font), timeout])
      .catch(() => {})
      .finally(() => live && setReady(true));
    return () => {
      live = false;
    };
  }, [ref]);

  return ready;
}

function useElementSize(ref: RefObject<HTMLElement | null>): Size {
  const [size, setSize] = useState<Size>({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    const update = () => setSize({ width: el.offsetWidth, height: el.offsetHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  return size;
}

function clampIndex(index: number, length: number) {
  return Math.min(Math.max(index, 0), Math.max(length - 1, 0));
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), Math.max(min, max));
}

function zoomTransform(step: TourStep | undefined) {
  const zoom = step?.type === "image" ? step.zoom : undefined;
  if (!zoom) return "translate(0%, 0%) scale(1)";
  return `translate(${zoom.left * 100}%, ${zoom.top * 100}%) scale(${zoom.level})`;
}

function nextMedia(steps: TourStep[], index: number) {
  return steps.slice(index + 1).find((s): s is TourMediaStep => s.type !== "card");
}

/** The media to keep ready under a card: the step after it, or the one before at the end of a tour. */
function nearbyMediaIndex(steps: TourStep[], index: number) {
  const after = steps.findIndex((s, i) => i > index && s.type !== "card");
  if (after !== -1) return after;
  return steps.findLastIndex((s, i) => i < index && s.type !== "card");
}

/** Fetch and decode ahead of time, so showing the image later doesn't wait on the network or decoder. */
function warmImage(src: string) {
  const img = new Image();
  img.src = src;
  img.decode().catch(() => {});
}

function previewSource(step: TourStep) {
  if (step.type === "card") return step.backgroundImage;
  return step.type === "image" ? step.image : undefined;
}

/** Hotspot position within the frame once the step's zoom is applied. */
function displayedHotspot({ x, y }: TourHotspot, zoom: TourImageStep["zoom"]) {
  if (!zoom) return { x, y };
  return {
    x: clamp(x * zoom.level + zoom.left, 0, 1),
    y: clamp(y * zoom.level + zoom.top, 0, 1),
  };
}

function fits(placement: TooltipPlacement, anchor: { x: number; y: number }, tip: Size, stage: Size) {
  switch (placement) {
    case "right":
      return anchor.x + TOOLTIP_GAP + tip.width <= stage.width - EDGE_MARGIN;
    case "left":
      return anchor.x - TOOLTIP_GAP - tip.width >= EDGE_MARGIN;
    case "bottom":
      return anchor.y + TOOLTIP_GAP + tip.height <= stage.height - EDGE_MARGIN;
    case "top":
      return anchor.y - TOOLTIP_GAP - tip.height >= EDGE_MARGIN;
  }
}

const OPPOSITE: Record<TooltipPlacement, TooltipPlacement> = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left",
};

function layoutTooltip(
  anchor: { x: number; y: number },
  tip: Size,
  stage: Size,
  preferred?: TooltipPlacement,
) {
  const order: TooltipPlacement[] = preferred
    ? [preferred, OPPOSITE[preferred], "right", "left", "bottom", "top"]
    : ["right", "left", "bottom", "top"];
  const placement = order.find((p) => fits(p, anchor, tip, stage)) ?? order[0];

  let left: number;
  let top: number;
  if (placement === "right" || placement === "left") {
    left = placement === "right" ? anchor.x + TOOLTIP_GAP : anchor.x - TOOLTIP_GAP - tip.width;
    top = anchor.y - tip.height / 2;
  } else {
    left = anchor.x - tip.width / 2;
    top = placement === "bottom" ? anchor.y + TOOLTIP_GAP : anchor.y - TOOLTIP_GAP - tip.height;
  }
  left = Math.round(clamp(left, EDGE_MARGIN, stage.width - tip.width - EDGE_MARGIN));
  top = Math.round(clamp(top, EDGE_MARGIN, stage.height - tip.height - EDGE_MARGIN));

  const arrowInset = 14;
  const arrow: CSSProperties =
    placement === "right" || placement === "left"
      ? {
          top: clamp(anchor.y - top, arrowInset, tip.height - arrowInset) - 6,
          [placement === "right" ? "left" : "right"]: -6,
        }
      : {
          left: clamp(anchor.x - left, arrowInset, tip.width - arrowInset) - 6,
          [placement === "bottom" ? "top" : "bottom"]: -6,
        };

  return { left, top, arrow };
}
