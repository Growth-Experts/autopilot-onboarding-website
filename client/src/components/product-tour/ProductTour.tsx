import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type RefObject,
} from "react";
import { AnimatePresence, MotionConfig, motion, useReducedMotion } from "framer-motion";
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
const ZOOM_EASE = [0.4, 0, 0.2, 1] as const;
const ZOOM_DURATION = 0.8;
const NO_ZOOM = { x: "0%", y: "0%", scale: 1 };

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
  const reduceMotion = useReducedMotion() ?? false;

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

  // A video that is fading out can still fire `ended`; only advance from the step it belongs to.
  const stepIdRef = useRef(step?.id);
  stepIdRef.current = step?.id;
  const onVideoEnded = useCallback(
    (id: string) => {
      if (stepIdRef.current === id) next();
    },
    [next],
  );

  useEffect(() => {
    for (const neighbour of [steps[index + 1], steps[index - 1]]) {
      const src = neighbour && previewSource(neighbour);
      if (src) new Image().src = src;
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
    <MotionConfig reducedMotion="user">
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
          {/* One camera for all media, so the view pans between steps while the screens crossfade. */}
          <motion.div
            className="absolute inset-0"
            style={{ originX: 0, originY: 0 }}
            initial={false}
            animate={zoomTarget(step)}
            transition={{ duration: ZOOM_DURATION, ease: ZOOM_EASE }}
          >
            <AnimatePresence initial={false}>
              {step.type !== "card" && (
                <motion.div
                  key={layerKey(step)}
                  className="absolute inset-0"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  {step.type === "image" ? (
                    <img
                      src={step.image}
                      alt={step.alt}
                      draggable={false}
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <TourVideo
                      step={step}
                      playing={videoPlaying}
                      onPlayFailed={() => setVideoToggle({ id: step.id, playing: false })}
                      onEnded={onVideoEnded}
                    />
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          <AnimatePresence initial={false}>
            {step.type === "card" && (
              <motion.div
                key={step.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <CardLayer
                  step={step}
                  isLast={isLast}
                  onAdvance={advanceFromStage}
                  onRestart={() => {
                    rootRef.current?.focus({ preventScroll: true });
                    goTo(0);
                  }}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {step.type === "image" && step.hotspot && step.caption && (
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

          {step.type === "video" && (
            <button
              type="button"
              onClick={() => setVideoToggle({ id: step.id, playing: !videoPlaying })}
              aria-label={videoPlaying ? "Pause video" : "Play video"}
              className="absolute bottom-2 left-2 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0B1220]/70 text-white transition-colors hover:bg-[#0B1220]/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:bottom-3 sm:left-3"
            >
              {videoPlaying ? (
                <Pause className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Play className="h-4 w-4" aria-hidden="true" />
              )}
            </button>
          )}
        </div>

        {/* Fixed height so the page doesn't jump on steps without a caption. */}
        <div className="md:hidden flex min-h-[5.875rem] items-stretch border-t border-[#0B1220]/10 bg-white">
          {sheetText &&
            (isLast ? (
              <p className="px-4 py-3 text-sm leading-relaxed text-[#0B1220]">
                <RichText text={sheetText} />
              </p>
            ) : (
              // The Next button is the keyboard and screen-reader route; this is a larger touch target.
              <button
                type="button"
                tabIndex={-1}
                aria-hidden="true"
                onClick={advanceFromStage}
                className="flex w-full cursor-pointer items-center gap-3 px-4 py-3 text-left text-sm leading-relaxed text-[#0B1220] transition-colors active:bg-[#2142E7]/5"
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
    </MotionConfig>
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
        <motion.img
          src={step.previewImage}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute left-1/2 top-[19%] hidden w-[85%] max-w-none rounded-tl-lg border border-[#0B1220]/10 bg-white shadow-[0_16px_48px_rgba(11,18,32,0.18)] sm:block"
          initial={{ opacity: 0, x: 16 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
        />
      )}
      <motion.div
        className={cn(
          "relative flex h-full flex-col justify-center gap-3 px-[5%] sm:gap-4",
          step.previewImage ? "max-w-full sm:max-w-[47%]" : "max-w-3xl px-[7%]",
        )}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: 0.1 }}
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
      </motion.div>
    </div>
  );
}

function TourVideo({
  step,
  playing,
  onPlayFailed,
  onEnded,
}: {
  step: TourVideoStep;
  playing: boolean;
  onPlayFailed: () => void;
  onEnded: (id: string) => void;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const onPlayFailedRef = useRef(onPlayFailed);
  onPlayFailedRef.current = onPlayFailed;

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const rate = step.playbackRate ?? 1;
    const applyRate = () => {
      video.defaultPlaybackRate = rate;
      video.playbackRate = rate;
    };
    applyRate();
    video.addEventListener("loadedmetadata", applyRate);
    return () => video.removeEventListener("loadedmetadata", applyRate);
  }, [step]);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    if (playing) {
      if (video.ended) video.currentTime = 0;
      video.play().catch(() => onPlayFailedRef.current());
    } else {
      video.pause();
    }
  }, [playing]);

  return (
    <video
      ref={ref}
      src={step.video}
      poster={step.poster}
      muted
      playsInline
      preload="auto"
      aria-hidden="true"
      onEnded={() => onEnded(step.id)}
      className="h-full w-full object-cover"
    />
  );
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
  const delay = reduceMotion ? 0 : step.zoom ? 0.65 : 0.25;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
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
        />
      )}
    </motion.div>
  );
}

function Tooltip({
  caption,
  anchor,
  stage,
  preferred,
  onActivate,
}: {
  caption: string;
  anchor: { x: number; y: number };
  stage: Size;
  preferred?: TooltipPlacement;
  onActivate: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);
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
      className="pointer-events-auto absolute hidden w-max max-w-[min(20rem,42%)] cursor-pointer rounded-[6px] px-4 py-3 text-left text-sm font-medium leading-snug text-white shadow-[0_12px_32px_rgba(11,18,32,0.3)] transition-[filter] hover:brightness-110 md:block"
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

function zoomTarget(step: TourStep) {
  const zoom = step.type === "image" ? step.zoom : undefined;
  return zoom ? { x: `${zoom.left * 100}%`, y: `${zoom.top * 100}%`, scale: zoom.level } : NO_ZOOM;
}

/** Same element key for consecutive steps on one image, so only the zoom animates instead of a crossfade. */
function layerKey(step: TourMediaStep) {
  return step.type === "image" ? `image:${step.image}` : `video:${step.id}`;
}

function previewSource(step: TourStep) {
  if (step.type === "card") return step.backgroundImage;
  return step.type === "image" ? step.image : step.poster;
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
  left = clamp(left, EDGE_MARGIN, stage.width - tip.width - EDGE_MARGIN);
  top = clamp(top, EDGE_MARGIN, stage.height - tip.height - EDGE_MARGIN);

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
