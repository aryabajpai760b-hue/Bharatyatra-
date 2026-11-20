import { useState } from "react";
import { Accessibility, Clock, Footprints, MessageSquare } from "lucide-react";
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

export function WalksTab({
  place,
  language,
  strings,
  offlineMode,
  onAskAboutStop,
}: WalksTabProps) {
  const [duration, setDuration] = useState<"express" | "halfDay">("express");
  const stops = duration === "express" ? place.expressWalk : place.halfDayWalk;

  return (
    <div className="space-y-6">
      {/* Header & Duration Selector */}
      <section className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs text-[#525B76]">
            <span>{place.displayName}</span>
            <span className="mx-1.5" aria-hidden="true">·</span>
            <span>Curated Heritage Trail</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-[#1A2342]">
            Walking &amp; Explore Routes
          </h1>
          <p className="text-sm text-[#525B76] max-w-2xl">
            Step-by-step itineraries paced for outdoor comfort, with stop-by-stop audio stories and shaded rest guidance.
          </p>
        </div>

        {/* Duration Toggle */}
        <div
          className="inline-flex p-1 rounded-xl bg-[#F4EDE1] border border-[#DFCFAE] self-start"
          role="group"
          aria-label="Route Duration"
        >
          <button
            type="button"
            onClick={() => setDuration("express")}
            aria-pressed={duration === "express"}
            className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
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
            className={`min-h-[44px] px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-colors whitespace-nowrap cursor-pointer ${
              duration === "halfDay"
                ? "bg-[#1A2342] text-white"
                : "text-[#1A2342] hover:bg-white/60"
            }`}
          >
            {strings.halfDayWalk}
          </button>
        </div>
      </section>

      {/* Step-by-Step Route Timeline */}
      <section className="space-y-4">
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
                  <h2 className="font-display text-lg sm:text-xl font-bold text-[#1A2342]">
                    {stop.name}
                  </h2>
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
                <button
                  type="button"
                  onClick={() => onAskAboutStop(`Tell me the history and folklore of ${stop.name} in ${place.name}`)}
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
                <span className="font-semibold text-[#1A2342]">Rest &amp; Access: </span>
                {stop.accessibilityNote}
              </p>
            </div>
          </article>
        ))}

        <div className="rounded-2xl bg-[#F4EDE1] border border-[#DFCFAE] p-4 flex items-center gap-3 text-xs sm:text-sm text-[#1A2342]">
          <Footprints className="w-5 h-5 text-[#C85A17] shrink-0" />
          <span>
            Tip for families &amp; seniors: E-rickshaws and battery carts are available between major stops in most old heritage quarters.
          </span>
        </div>
      </section>
    </div>
  );
}
