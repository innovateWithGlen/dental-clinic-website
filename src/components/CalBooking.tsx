"use client";

import { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { CalendarDays, ExternalLink, Sparkles, CheckCircle2 } from "lucide-react";

export default function CalBooking() {
  const [activeType, setActiveType] = useState<"30min" | "profile">("30min");

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi({ namespace: "30min" });
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          styles: {
            branding: {
              brandColor: "#0891b2",
            },
          },
        });
      } catch (err) {
        console.error("Failed to initialize Cal.com embed API:", err);
      }
    })();
  }, []);

  const calLink =
    activeType === "30min"
      ? "glen-monteiro-rzha5f/30min"
      : "glen-monteiro-rzha5f";

  const directUrl = `https://cal.com/${calLink}`;

  return (
    <div className="w-full">
      {/* Header controls */}
      <div className="mb-6 flex flex-col gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-semibold text-brand-700">
              <Sparkles size={12} />
              Instant Booking
            </span>
            <span className="text-xs text-slate-500">Live Slots Available</span>
          </div>
          <h3 className="mt-1 font-display text-2xl font-bold text-slate-900">
            Book an Appointment Online
          </h3>
          <p className="mt-0.5 text-sm text-slate-600">
            Select a convenient 30-minute consultation or procedure slot below.
          </p>
        </div>

        {/* Action pills & External link */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setActiveType("30min")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeType === "30min"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              30-Min Visit
            </button>
            <button
              type="button"
              onClick={() => setActiveType("profile")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeType === "profile"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Events
            </button>
          </div>

          <a
            href={directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm transition hover:border-brand-500 hover:text-brand-700"
            title="Open booking directly on Cal.com"
          >
            <ExternalLink size={13} />
            <span>Open Cal.com</span>
          </a>
        </div>
      </div>

      {/* Quick reassurance strip */}
      <div className="mb-4 grid grid-cols-1 gap-2 rounded-xl bg-slate-50 p-3 text-xs text-slate-600 sm:grid-cols-3">
        <div className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="flex-shrink-0 text-brand-600" />
          <span>No advance payment needed</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="flex-shrink-0 text-brand-600" />
          <span>Instant calendar confirmation</span>
        </div>
        <div className="flex items-center gap-1.5">
          <CheckCircle2 size={14} className="flex-shrink-0 text-brand-600" />
          <span>Flexible free rescheduling</span>
        </div>
      </div>

      {/* Cal.com embed component */}
      <div className="cal-embed-wrapper relative min-h-[680px] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm">
        <Cal
          key={activeType}
          namespace={activeType === "30min" ? "30min" : undefined}
          calLink={calLink}
          style={{ width: "100%", height: "100%", minHeight: "680px", overflow: "scroll" }}
          config={{
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
          }}
        />
      </div>

      {/* Direct link footer */}
      <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
        <p className="flex items-center gap-1.5">
          <CalendarDays size={14} className="text-brand-600" />
          <span>
            Connected to <strong>cal.com/glen-monteiro-rzha5f</strong>
          </span>
        </p>
        <a
          href={directUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-brand-700 hover:underline"
        >
          cal.com/{calLink} &rarr;
        </a>
      </div>
    </div>
  );
}
