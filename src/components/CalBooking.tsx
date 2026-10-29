"use client";

import { useEffect, useRef, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  CalendarDays,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";

// Single stable namespace — using one namespace for both tabs avoids the
// blank-embed bug caused by switching between a named namespace and the
// default (undefined) namespace on remount.
const NAMESPACE = "booking";

const CAL_EVENT_LINK = "glen-monteiro/15-min-meeting";
const CAL_PROFILE_LINK = "glen-monteiro";

// How long to wait for the Cal iframe to finish loading before offering
// the direct-link fallback (ad-blockers / tracking protection can stall it).
const EMBED_TIMEOUT_MS = 15000;

export default function CalBooking() {
  const [activeType, setActiveType] = useState<"event" | "profile">("event");
  const [embedState, setEmbedState] = useState<"loading" | "loaded" | "failed">(
    "loading"
  );
  const [embedKey, setEmbedKey] = useState(0);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    (async function () {
      try {
        const cal = await getCalApi({ namespace: NAMESPACE });
        if (cancelled) return;
        cal("ui", {
          hideEventTypeDetails: false,
          layout: "month_view",
          styles: {
            branding: {
              brandColor: "#292929",
            },
          },
        });
      } catch (err) {
        console.error("Failed to initialize Cal.com embed API:", err);
        if (!cancelled) setEmbedState("failed");
      }
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Watch the real iframe `load` event (not just its presence). If the
  // embed script is blocked (ad-blocker, tracking protection, offline) no
  // iframe ever appears and we fall back to a direct Cal.com link instead
  // of spinning forever.
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    setEmbedState("loading");
    let settled = false;
    let observer: MutationObserver | null = null;

    const cleanup = () => {
      window.clearTimeout(timer);
      observer?.disconnect();
    };
    const markLoaded = () => {
      if (settled) return;
      settled = true;
      setEmbedState("loaded");
      cleanup();
    };
    const markFailed = () => {
      if (settled) return;
      settled = true;
      setEmbedState("failed");
      cleanup();
    };

    const watchIframe = (iframe: HTMLIFrameElement) => {
      if ((iframe as HTMLIFrameElement & { __calWatched?: boolean }).__calWatched)
        return;
      (iframe as HTMLIFrameElement & { __calWatched?: boolean }).__calWatched = true;
      // If the iframe already finished loading, `load` won't fire again.
      // Treat an iframe with a real (non-blank) src as loaded; otherwise
      // wait for its load event.
      const src = iframe.getAttribute("src") ?? "";
      if (src && !src.startsWith("about:")) {
        markLoaded();
        return;
      }
      iframe.addEventListener("load", markLoaded, { once: true });
    };

    const existing = el.querySelector("iframe");
    if (existing) watchIframe(existing as HTMLIFrameElement);

    observer = new MutationObserver(() => {
      const found = el.querySelector("iframe");
      if (found) watchIframe(found as HTMLIFrameElement);
    });
    observer.observe(el, { childList: true, subtree: true, attributes: true });

    const timer = window.setTimeout(markFailed, EMBED_TIMEOUT_MS);

    return () => {
      settled = true;
      cleanup();
    };
  }, [activeType, embedKey]);

  const calLink = activeType === "event" ? CAL_EVENT_LINK : CAL_PROFILE_LINK;

  const directUrl = `https://cal.com/${calLink}`;

  const retryEmbed = () => {
    setEmbedKey((k) => k + 1);
  };

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
            Select a convenient 15-minute consultation or procedure slot below.
          </p>
        </div>

        {/* Action pills & External link */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="inline-flex rounded-xl bg-slate-100 p-1">
            <button
              type="button"
              onClick={() => setActiveType("event")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                activeType === "event"
                  ? "bg-white text-slate-900 shadow-sm"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              15-Min Visit
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
      <div
        ref={wrapperRef}
        className="cal-embed-wrapper relative min-h-[680px] w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm"
      >
        <Cal
          key={`${activeType}-${embedKey}`}
          namespace={NAMESPACE}
          calLink={calLink}
          style={{ width: "100%", height: "100%", minHeight: "680px", overflow: "scroll" }}
          config={{
            layout: "month_view",
            useSlotsViewOnSmallScreen: "true",
          }}
        />

        {/* Loading skeleton — sits behind the iframe until it renders */}
        {embedState === "loading" && (
          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-3 bg-white p-8 text-center">
            <div className="h-10 w-10 animate-spin rounded-full border-2 border-slate-200 border-t-brand-600" />
            <p className="text-sm font-medium text-slate-600">
              Loading live availability…
            </p>
            <p className="text-xs text-slate-400">
              If this takes too long,{" "}
              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pointer-events-auto font-semibold text-brand-700 hover:underline"
              >
                open booking on Cal.com
              </a>
            </p>
          </div>
        )}

        {/* Fallback — shown if the embed is blocked or stalls */}
        {embedState === "failed" && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-white p-8 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
              <CalendarDays size={22} />
            </div>
            <div>
              <p className="font-display text-lg font-bold text-slate-900">
                Booking didn&apos;t load inline
              </p>
              <p className="mx-auto mt-1 max-w-sm text-sm text-slate-600">
                Your browser or an ad-blocker may be blocking the embedded
                calendar. Book directly on Cal.com — it takes seconds and
                needs no advance payment.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href={directUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition hover:bg-brand-700"
              >
                <ExternalLink size={16} />
                Book on Cal.com — {calLink}
              </a>
              <button
                type="button"
                onClick={retryEmbed}
                className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-brand-400 hover:text-brand-700"
              >
                <RefreshCw size={15} />
                Retry inline
              </button>
            </div>
            <p className="text-xs text-slate-400">
              Or call us at{" "}
              <a href="tel:+919353678546" className="font-semibold text-brand-700 hover:underline">
                93536 78546
              </a>
            </p>
          </div>
        )}
      </div>

      {/* Direct link footer */}
      <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-slate-500 sm:flex-row">
        <p className="flex items-center gap-1.5">
          <CalendarDays size={14} className="text-brand-600" />
          <span>
            Connected to <strong>cal.com/glen-monteiro</strong>
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
