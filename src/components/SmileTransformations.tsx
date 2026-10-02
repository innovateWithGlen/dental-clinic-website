"use client";

import { useState } from "react";
import { MoveHorizontal, CheckCircle2 } from "lucide-react";
import BeforeAfterSlider, { BEFORE_AFTER_CASES } from "./BeforeAfterSlider";

export default function SmileTransformations() {
  const [activeId, setActiveId] = useState(BEFORE_AFTER_CASES[0].id);
  const activeCase =
    BEFORE_AFTER_CASES.find((c) => c.id === activeId) ?? BEFORE_AFTER_CASES[0];

  return (
    <div className="mt-14">
      {/* Case tabs */}
      <div className="flex flex-wrap justify-center gap-2">
        {BEFORE_AFTER_CASES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setActiveId(c.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              c.id === activeId
                ? "bg-brand-600 text-white shadow-md shadow-brand-600/25"
                : "border border-slate-200 bg-white text-slate-600 hover:border-brand-400 hover:text-brand-700"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-5">
        <div className="lg:col-span-3" key={activeCase.id}>
          <BeforeAfterSlider activeCase={activeCase} />
          <p className="mt-3 flex items-center justify-center gap-1.5 text-xs text-slate-500">
            <MoveHorizontal size={14} className="text-brand-600" />
            Drag the handle or use the slider to compare before &amp; after
          </p>
        </div>
        <div className="lg:col-span-2">
          <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-display text-xl font-bold text-slate-900">
              {activeCase.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {activeCase.desc}
            </p>
            <div className="mt-4 space-y-2">
              {activeCase.afterPoints.map((p) => (
                <p key={p} className="flex items-start gap-2 text-sm text-slate-700">
                  <CheckCircle2 size={16} className="mt-0.5 flex-shrink-0 text-emerald-500" />
                  {p}
                </p>
              ))}
            </div>
            <a
              href="#booking"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Book this treatment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
