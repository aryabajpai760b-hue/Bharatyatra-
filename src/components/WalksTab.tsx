import { useState } from "react";
import {
  Accessibility,
  Clock,
  ExternalLink,
  Footprints,
  Landmark,
  MapPin,
  MessageSquare,
  Navigation,
  Ticket,
} from "lucide-react";
import { IndianLanguage, PlaceDossier } from "../types";
import { UIStrings } from "../data/translations";
import { AudioPlayerButton } from "./AudioPlayerButton";

interface WalksTabProps {
  place: PlaceDossier;
  language: IndianLanguage;
  strings: UIStrings;
  offlineMode: boolean;
  onAskAboutStop: (stopName: string) => void;
}

type ExploreViewMode = "all" | "sightseeing" | "walks";

function buildMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function WalksTab({
  place,
  language,
  strings,
  offlineMode,
  onAskAboutStop,
}: WalksTabProps) {
  const [viewMode, setViewMode] = useState<ExploreViewMode>("all");
  const [duration, setDuration] = useState<"express" | "halfDay">("express");

  const stops = duration === "express" ? place.expressWalk : place.halfDayWalk;
  const spots = place.sightseeingSpots || [];

  return (
    <div className="space-y-6">
      {/* Header & View Mode Selector */}
      <section className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <div className="text-xs text-[#525B76]">
              <span>{place.displayName}</span>
              <span className="mx-1.5" aria-hidden="true">·</span>
              <span>Sightseeing, Directions &amp; Walking Routes</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1A2342] text-balance">
              Places to Visit &amp; Heritage Walks
            </h1>
            <p className="text-sm text-[#525B76] max-w-2xl">
              Curated monuments, ghats, forts, and museums with step-by-step local route directions, live Google Maps navigation, and audio-guided walks.
            </p>
          </div>

          <div
            className="inline-flex p-1 rounded-xl bg-[#F4EDE1] border border-[#DFCFAE] self-start shrink-0"
            role="group"
            aria-label="Explore View"
          >
            {[
              { id: "all" as const, label: "All Sites & Walks" },
              { id: "sightseeing" as const, label: `Places (${spots.length})` },
              { id: "walks" as const, label: "Walking Trails" },
            ].map((item) => {
              const active = viewMode === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setViewMode(item.id)}
                  aria-pressed={active}
                  className={`min-h-[42px] px-3 sm:px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-[#1A2342] text-white"
                      : "text-[#1A2342] hover:bg-white/60"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 1: Sightseeing & Places to Visit (with Live Directions) */}
      {(viewMode === "all" || viewMode === "sightseeing") && spots.length > 0 && (
        <section aria-labelledby="sightseeing-heading" className="space-y-4">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <div>
              <h2
                id="sightseeing-heading"
                className="font-display text-xl sm:text-2xl font-bold text-[#1A2342]"
              >
                Sightseeing &amp; Places to Visit
              </h2>
              <p className="text-xs sm:text-sm text-[#525B76]">
                Entry timings, fees, local route instructions, and direct Google Maps links
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {spots.map((spot) => {
              const mapsHref = buildMapsUrl(
                spot.mapQuery || `${spot.name}, ${place.displayName}`
              );
              return (
                <article
                  key={`${place.id}-spot-${spot.name}`}
                  className="bg-white rounded-2xl border border-[#E2D5C1] p-5 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between gap-2 text-xs text-[#525B76]">
                      <span className="font-semibold text-[#C85A17] inline-flex items-center gap-1.5">
                        <Landmark className="w-3.5 h-3.5 shrink-0" />
                        <span>{spot.spotType}</span>
                      </span>
                      <span className="font-mono-tabular">{spot.duration}</span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A2342] text-balance">
                      {spot.name}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#2C334A]">
                      {spot.description}
                    </p>

                    {/* Timings & Entry Fee */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
                      <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] px-3 py-2 flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#C85A17] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#1A2342] block">
                            Best Time
                          </span>
                          <span className="text-[#394158]">{spot.bestTime}</span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] px-3 py-2 flex items-start gap-2">
                        <Ticket className="w-3.5 h-3.5 text-[#1A2342] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#1A2342] block">
                            Entry Fee
                          </span>
                          <span className="text-[#394158]">{spot.entryFee}</span>
                        </div>
                      </div>
                    </div>

                    {/* Local Step-by-Step Route Directions */}
                    <div className="rounded-xl bg-[#F3F5FA] border border-[#D4DCEB] p-3.5 space-y-1.5 text-xs">
                      <div className="flex items-start gap-2 text-[#1A2342]">
                        <Navigation className="w-3.5 h-3.5 text-[#1A2342] shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          <strong className="font-bold">How to Reach: </strong>
                          {spot.routeDirections}
                        </p>
                      </div>
                      <div className="flex items-start gap-2 text-[#394158]">
                        <MapPin className="w-3.5 h-3.5 text-[#C85A17] shrink-0 mt-0.5" />
                        <p className="leading-relaxed">
                          <strong className="font-semibold text-[#1A2342]">
                            Local Transport:{" "}
                          </strong>
                          {spot.transportTip}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Actions: Get Directions (Google Maps) & Ask Guide */}
                  <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#EFE6D8]">
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] flex-1 px-4 py-2 rounded-xl bg-[#C85A17] hover:bg-[#AE4B10] text-white text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap transition-colors"
                    >
                      <Navigation className="w-4 h-4 shrink-0" />
                      <span>Get Directions (Google Maps)</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-90" />
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        onAskAboutStop(
                          `Tell me the recorded history, architecture, and folklore of ${spot.name} in ${place.name}`
                        )
                      }
                      className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white hover:bg-[#FBF7F0] border border-[#DFCFAE] text-[#1A2342] text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C85A17]" />
                      <span>Ask Guide</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Section 2: Guided Walking & Explore Routes */}
      {(viewMode === "all" || viewMode === "walks") && (
        <section aria-labelledby="walking-trails-heading" className="space-y-4">
          <div className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h2
                id="walking-trails-heading"
                className="font-display text-xl font-bold text-[#1A2342]"
              >
                Walking &amp; Explore Routes
              </h2>
              <p className="text-xs sm:text-sm text-[#525B76]">
                Stop-by-stop paced itineraries with audio stories and shaded rest guidance
              </p>
            </div>

            <div
              className="inline-flex p-1 rounded-xl bg-[#F4EDE1] border border-[#DFCFAE] self-start"
              role="group"
              aria-label="Route Duration"
            >
              <button
                type="button"
                onClick={() => setDuration("express")}
                aria-pressed={duration === "express"}
                className={`min-h-[42px] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  duration === "express"
                    ? "bg-[#1A2342] text-white"
                    : "text-[#1A2342] hover:bg-white/60"
                }`}
              >
                {strings.expressWalk}
              </button>
              <button
                type="button"
                onClick={() => setDuration("halfDay")}
                aria-pressed={duration === "halfDay"}
                className={`min-h-[42px] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                  duration === "halfDay"
                    ? "bg-[#1A2342] text-white"
                    : "text-[#1A2342] hover:bg-white/60"
                }`}
              >
                {strings.halfDayWalk}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {stops.map((stop) => (
              <article
                key={`${place.id}-${duration}-${stop.stopNumber}`}
                className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-6 flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#1A2342] text-white font-mono-tabular text-sm font-bold flex items-center justify-center shrink-0">
                      {String(stop.stopNumber).padStart(2, "0")}
                    </div>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-xs font-medium text-[#C85A17]">
                        <Clock className="w-3.5 h-3.5 shrink-0" />
                        <span className="font-mono-tabular">{stop.walkTime}</span>
                      </div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A2342]">
                        {stop.name}
                      </h3>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-2">
                    <AudioPlayerButton
                      text={`${stop.name}. ${stop.audioStory}`}
                      language={language}
                      label={strings.playStory}
                      stopLabel={strings.stopAudio}
                      offlineMode={offlineMode}
                    />
                    <a
                      href={buildMapsUrl(`${stop.name}, ${place.displayName}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-3.5 py-2 rounded-xl bg-[#FBF7F0] hover:bg-[#F4EDE1] border border-[#DFCFAE] text-[#1A2342] text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C85A17]" />
                      <span>Maps</span>
                    </a>
                    <button
                      type="button"
                      onClick={() =>
                        onAskAboutStop(
                          `Tell me the history and folklore of ${stop.name} in ${place.name}`
                        )
                      }
                      className="min-h-[44px] px-3.5 py-2 rounded-xl bg-white hover:bg-[#FBF7F0] border border-[#DFCFAE] text-[#1A2342] text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                    >
                      <MessageSquare className="w-3.5 h-3.5 text-[#C85A17]" />
                      <span>Ask Guide</span>
                    </button>
                  </div>
                </div>

                <p className="text-sm leading-relaxed text-[#2C334A]">
                  {stop.summary}
                </p>

                <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] px-4 py-3 flex items-start gap-2.5">
                  <Accessibility className="w-4 h-4 text-[#1D5E34] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-[#394158]">
                    <span className="font-semibold text-[#1A2342]">
                      Rest &amp; Access:{" "}
                    </span>
                    {stop.accessibilityNote}
                  </p>
                </div>
              </article>
            ))}

            <div className="rounded-2xl bg-[#F4EDE1] border border-[#DFCFAE] p-4 flex items-center gap-3 text-xs sm:text-sm text-[#1A2342]">
              <Footprints className="w-5 h-5 text-[#C85A17] shrink-0" />
              <span>
                Tip for families &amp; seniors: E-rickshaws and battery carts are available between major stops in most heritage quarters.
              </span>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
