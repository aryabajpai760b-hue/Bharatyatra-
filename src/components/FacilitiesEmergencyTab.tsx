import { useState } from "react";
import {
  Accessibility,
  AlertTriangle,
  Clock,
  Copy,
  Check,
  Hospital,
  MapPin,
  Phone,
  ShieldAlert,
} from "lucide-react";
import { FacilityCategory, PlaceDossier } from "../types";
import { UIStrings } from "../data/translations";

interface FacilitiesEmergencyTabProps {
  place: PlaceDossier;
  strings: UIStrings;
}

const FACILITY_FILTERS: FacilityCategory[] = [
  "All",
  "Public Toilets",
  "Drinking Water",
  "Parking",
  "Medical Centres",
  "Food Outlets",
];

export function FacilitiesEmergencyTab({ place, strings }: FacilitiesEmergencyTabProps) {
  const [selectedType, setSelectedType] = useState<FacilityCategory>("All");
  const [copiedNum, setCopiedNum] = useState<string | null>(null);

  const filteredFacilities = place.facilities.filter(
    (f) => selectedType === "All" || f.type === selectedType
  );

  const copyPhone = async (num: string) => {
    try {
      await navigator.clipboard.writeText(num);
      setCopiedNum(num);
      setTimeout(() => setCopiedNum(null), 1800);
    } catch {
      // Clipboard blocked in restricted iframe; fallback not required since tel: links remain clickable
    }
  };

  return (
    <div className="space-y-6">
      {/* Prominent ONE-TAP EMERGENCY HELP Banner */}
      <section
        aria-label="One-Tap Emergency Help"
        className="rounded-2xl bg-[#1A2342] text-white border border-[#2C3A66] p-5 sm:p-6 space-y-5"
      >
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 pb-4 border-b border-white/15">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#C85A17] flex items-center justify-center shrink-0">
              <AlertTriangle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="font-display text-lg sm:text-xl font-bold tracking-tight text-white">
                {strings.emergencyBanner}
              </h1>
              <p className="text-xs text-white/80">
                Active area: {place.displayName} · Works across all Indian states &amp; highways
              </p>
            </div>
          </div>
          <span className="text-xs font-medium text-[#F7D7B5]">
            24x7 Pan-India Helplines
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
          {/* Card 1: 112 India Unified Emergency */}
          <div className="rounded-xl bg-white/10 border border-white/15 p-4 flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F7D7B5]">{strings.unifiedHelpline}</span>
                <ShieldAlert className="w-4 h-4 text-[#F7D7B5]" />
              </div>
              <p className="font-mono-tabular text-3xl font-bold text-white">112</p>
              <p className="text-xs text-white/80">Police, Ambulance &amp; Fire Dispatch</p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:112"
                className="flex-1 min-h-[44px] px-3 py-2 rounded-xl bg-[#C85A17] hover:bg-[#AE4B10] text-white text-xs font-bold inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call 112</span>
              </a>
              <button
                type="button"
                onClick={() => copyPhone("112")}
                aria-label="Copy 112"
                className="min-h-[44px] min-w-[44px] rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer"
              >
                {copiedNum === "112" ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Card 2: Women & Tourist Helpline */}
          <div className="rounded-xl bg-white/10 border border-white/15 p-4 flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <span className="text-xs font-semibold text-[#F7D7B5]">
                {strings.womenTouristHelpline}
              </span>
              <p className="font-mono-tabular text-2xl font-bold text-white">
                1091 <span className="text-base font-normal text-white/70">/ 1363</span>
              </p>
              <p className="text-xs text-white/80">
                Women Safety (1091) · Tourist Helpline (1363)
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href="tel:1091"
                className="flex-1 min-h-[44px] px-3 py-2 rounded-xl bg-white text-[#1A2342] hover:bg-[#F4EDE1] text-xs font-bold inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 1091</span>
              </a>
              <a
                href="tel:1363"
                className="flex-1 min-h-[44px] px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call 1363</span>
              </a>
            </div>
          </div>

          {/* Card 3: Nearest Hospital */}
          <div className="rounded-xl bg-white/10 border border-white/15 p-4 flex flex-col justify-between gap-3">
            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-[#F7D7B5]">
                  {strings.nearestHospitalLabel}
                </span>
                <Hospital className="w-4 h-4 text-[#F7D7B5]" />
              </div>
              <p className="text-sm font-bold text-white leading-snug">
                {place.nearestHospital.name}
              </p>
              <p className="text-xs text-white/80">
                {place.nearestHospital.area} · {place.nearestHospital.note}
              </p>
            </div>
            <div className="flex items-center gap-2">
              <a
                href={`tel:${place.nearestHospital.phone}`}
                className="flex-1 min-h-[44px] px-3 py-2 rounded-xl bg-white text-[#1A2342] hover:bg-[#F4EDE1] text-xs font-bold inline-flex items-center justify-center gap-1.5"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="font-mono-tabular">Call {place.nearestHospital.phone}</span>
              </a>
              <a
                href="tel:108"
                className="min-h-[44px] px-3 py-2 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-bold inline-flex items-center justify-center whitespace-nowrap"
              >
                108 Amb
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Filterable Facilities Section */}
      <section className="space-y-4">
        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-3">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <h2 className="font-display text-xl font-bold text-[#1A2342]">
              Essential Facilities near {place.name}
            </h2>
            <span className="text-xs text-[#525B76] font-mono-tabular">
              {filteredFacilities.length} listed locations
            </span>
          </div>

          <div className="flex flex-wrap gap-2" role="group" aria-label="Facility Type Filter">
            {FACILITY_FILTERS.map((cat) => {
              const active = selectedType === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedType(cat)}
                  aria-pressed={active}
                  className={`min-h-[42px] px-3.5 py-2 rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                    active
                      ? "bg-[#1A2342] text-white border-[#1A2342]"
                      : "bg-[#FBF7F0] text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {filteredFacilities.length === 0 ? (
          <div className="bg-white rounded-2xl border border-[#E2D5C1] p-6 text-center space-y-2">
            <p className="text-sm text-[#525B76]">
              No specific {selectedType} entries saved for this regional overview yet. Try &ldquo;All&rdquo; or ask the AI Guide for nearest local spots.
            </p>
            <button
              type="button"
              onClick={() => setSelectedType("All")}
              className="min-h-[40px] px-4 py-2 rounded-xl bg-[#1A2342] text-white text-xs font-semibold cursor-pointer"
            >
              Show All Facilities
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFacilities.map((fac) => (
              <article
                key={`${place.id}-${fac.name}`}
                className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-2.5"
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span className="font-semibold text-[#C85A17]">{fac.type}</span>
                  <span className="inline-flex items-center gap-1 text-[#525B76] font-mono-tabular">
                    <Clock className="w-3.5 h-3.5" />
                    {fac.hours}
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold text-[#1A2342]">{fac.name}</h3>
                <div className="space-y-1 text-xs sm:text-sm text-[#394158]">
                  <p className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#C85A17] shrink-0 mt-0.5" />
                    <span>{fac.landmark}</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <Accessibility className="w-4 h-4 text-[#1D5E34] shrink-0 mt-0.5" />
                    <span>{fac.accessibility}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
