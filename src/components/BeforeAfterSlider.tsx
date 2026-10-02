"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";

/* Before/after photography (free stock, Pexels license) lives in
   public/images/transformations/ — one pair per treatment. */
type BeforeAfterCase = {
  id: string;
  title: string;
  desc: string;
  beforeImage: string;
  afterImage: string;
  beforeAlt: string;
  afterAlt: string;
  beforeTag: string;
  afterTag: string;
  beforePoints: string[];
  afterPoints: string[];
};

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "root-canal",
    title: "Root Canal Treatment",
    desc: "Infected, painful tooth restored with a painless root canal and a natural-looking crown.",
    beforeImage: "/images/transformations/root-canal-before.jpeg",
    afterImage: "/images/transformations/root-canal-after.jpg",
    beforeAlt: "Severely decayed upper front teeth needing root canal treatment",
    afterAlt: "Healthy bright smile after root canal and crown",
    beforeTag: "Infected · Pain",
    afterTag: "Pain-free · Natural crown",
    beforePoints: ["Deep decay", "Sensitivity & pain", "Discoloured tooth"],
    afterPoints: ["Painless procedure", "Natural zirconia crown", "No visible difference"],
  },
  {
    id: "wisdom-tooth",
    title: "Wisdom Tooth Removal",
    desc: "Impacted wisdom tooth gently removed with a comfortable, anxiety-free recovery.",
    beforeImage: "/images/transformations/wisdom-removal-before.jpg",
    afterImage: "/images/transformations/wisdom-removal-after.jpg",
    beforeAlt: "Dentist performing a gentle wisdom tooth extraction",
    afterAlt: "Comfortable healed smile after wisdom tooth removal",
    beforeTag: "Impacted · Swollen",
    afterTag: "Removed · Comfortable",
    beforePoints: ["Impacted molar", "Jaw pain & swelling", "Difficulty chewing"],
    afterPoints: ["Gentle extraction", "Clear after-care", "Quick healing"],
  },
  {
    id: "implant",
    title: "Dental Implant",
    desc: "Missing tooth replaced with a permanent implant that looks and feels natural.",
    beforeImage: "/images/transformations/implant-before.jpg",
    afterImage: "/images/transformations/implant-after.jpg",
    beforeAlt: "Lost teeth leaving gaps needing dental implants",
    afterAlt: "Dental implant replacing a missing tooth permanently",
    beforeTag: "Missing tooth",
    afterTag: "Permanent implant",
    beforePoints: ["Gap in smile", "Trouble biting", "Low confidence"],
    afterPoints: ["Fixed & permanent", "Natural look & feel", "Eat with confidence"],
  },
  {
    id: "cavity",
    title: "Cavity Filling",
    desc: "Decayed tooth cleaned and restored with a seamless tooth-coloured filling.",
    beforeImage: "/images/transformations/cavity-before.jpg",
    afterImage: "/images/transformations/cavity-after.jpg",
    beforeAlt: "Dentist removing decay with a drill before filling the cavity",
    afterAlt: "Clean restored teeth after tooth-coloured cavity filling",
    beforeTag: "Decay · Cavity",
    afterTag: "Restored · Seamless",
    beforePoints: ["Visible cavity", "Food getting stuck", "Dull appearance"],
    afterPoints: ["Tooth-coloured filling", "Smooth finish", "Blends invisibly"],
  },
];

export default function BeforeAfterSlider({ activeCase }: { activeCase: BeforeAfterCase }) {
  const [pos, setPos] = useState(50);
  const trackRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <div className="w-full">
      <div
        ref={trackRef}
        onPointerDown={(e) => {
          dragging.current = true;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setFromClientX(e.clientX);
        }}
        onPointerMove={(e) => {
          if (dragging.current) setFromClientX(e.clientX);
        }}
        onPointerUp={() => (dragging.current = false)}
        onPointerCancel={() => (dragging.current = false)}
        className="relative h-72 w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-slate-200 shadow-inner sm:h-80"
        role="slider"
        aria-label={`${activeCase.title} before and after comparison`}
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
        }}
      >
        {/* Before photo (full) */}
        <img
          src={activeCase.beforeImage}
          alt={activeCase.beforeAlt}
          className="absolute inset-0 h-full w-full object-cover"
          draggable={false}
          loading="lazy"
        />
        {/* After photo (revealed from the right as you drag) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <img
            src={activeCase.afterImage}
            alt={activeCase.afterAlt}
            className="absolute inset-0 h-full w-full object-cover"
            draggable={false}
            loading="lazy"
          />
        </div>

        {/* Labels */}
        <span className="absolute left-3 top-3 rounded-full bg-stone-900/80 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
          Before
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-brand-600/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white backdrop-blur">
          After
        </span>
        <span className="absolute bottom-3 left-3 max-w-[45%] rounded-lg bg-black/55 px-2.5 py-1 text-[11px] font-medium text-white backdrop-blur">
          {activeCase.beforeTag}
        </span>
        <span className="absolute bottom-3 right-3 max-w-[45%] rounded-lg bg-emerald-600/90 px-2.5 py-1 text-right text-[11px] font-medium text-white backdrop-blur">
          {activeCase.afterTag}
        </span>

        {/* Divider + handle */}
        <div
          className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,0.4)]"
          style={{ left: `${pos}%` }}
        />
        <div
          className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-slate-800 shadow-xl ring-2 ring-brand-600"
          style={{ left: `${pos}%` }}
        >
          <ChevronsLeftRight size={20} />
        </div>
      </div>

      {/* Dynamic slider input (mirrors drag position) */}
      <div className="mt-4 flex items-center gap-3">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
          Before
        </span>
        <input
          type="range"
          min={4}
          max={96}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="before-after-range w-full"
          aria-label="Drag to compare before and after"
        />
        <span className="text-xs font-semibold uppercase tracking-wider text-brand-700">
          After
        </span>
      </div>
    </div>
  );
}
