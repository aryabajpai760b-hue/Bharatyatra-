import { useState } from "react";
import { AlertCircle, BarChart3, Globe2, MapPin, Volume2 } from "lucide-react";
import { INSIGHTS_REGIONS } from "../data/insightsData";
import { UIStrings } from "../data/translations";

interface InsightsDashboardTabProps {
  strings: UIStrings;
}

export function InsightsDashboardTab({ strings }: InsightsDashboardTabProps) {
  const [selectedRegion, setSelectedRegion] = useState<string>(INSIGHTS_REGIONS[0].region);

  const data =
    INSIGHTS_REGIONS.find((r) => r.region === selectedRegion) || INSIGHTS_REGIONS[0];

  const maxPlaceVisits = Math.max(...data.popularPlaces.map((p) => p.visits), 1);

  return (
    <div className="space-y-6">
      {/* Header & Region Selector */}
      <section className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
        <div className="space-y-1">
          <div className="text-xs text-[#525B76]">
            <span>Anonymized Synthetic Visitor Telemetry</span>
            <span className="mx-1.5" aria-hidden="true">·</span>
            <span>Heritage &amp; Small-Town Analytics</span>
          </div>
          <h1 className="font-display text-2xl font-bold text-[#1A2342]">
            {strings.insightsTitle}
          </h1>
          <p className="text-sm text-[#525B76] max-w-2xl">
            {strings.insightsSubtitle}
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Insights Region Filter">
          {INSIGHTS_REGIONS.map((item) => {
            const active = item.region === selectedRegion;
            return (
              <button
                key={item.region}
                type="button"
                onClick={() => setSelectedRegion(item.region)}
                aria-pressed={active}
                className={`min-h-[40px] px-3.5 py-2 rounded-xl border text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                  active
                    ? "bg-[#1A2342] text-white border-[#1A2342]"
                    : "bg-[#FBF7F0] text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                }`}
              >
                {item.region}
              </button>
            );
          })}
        </div>
      </section>

      {/* 4 KPI Summary Cards */}
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-3.5">
        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-1">
          <p className="text-xs font-semibold text-[#525B76]">Total Heritage Queries</p>
          <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#1A2342]">
            {data.totalQueries.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-[#1D5E34]">Fact vs. Folklore guided</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-1">
          <p className="text-xs font-semibold text-[#525B76]">Small-Town &amp; Qasba Share</p>
          <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#C85A17]">
            {data.smallTownShare}%
          </p>
          <p className="text-xs text-[#525B76]">Orchha, Bishnupur, Ziro, Kalpa</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-1">
          <p className="text-xs font-semibold text-[#525B76]">Indian Language Share</p>
          <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#1A2342]">
            {data.regionalLangShare}%
          </p>
          <p className="text-xs text-[#525B76]">Non-English / Bilingual queries</p>
        </div>

        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-1">
          <p className="text-xs font-semibold text-[#525B76]">Audio Story Plays</p>
          <p className="font-mono-tabular text-2xl sm:text-3xl font-bold text-[#1A2342]">
            {data.audioPlayCount.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-[#525B76] inline-flex items-center gap-1">
            <Volume2 className="w-3.5 h-3.5 text-[#C85A17]" />
            Read Aloud &amp; Walks
          </p>
        </div>
      </section>

      {/* Main Analytics Grid */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5">
        {/* Top Visitor Questions */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2D5C1] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-[#1A2342] flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-[#C85A17]" />
              <span>Top Visitor Questions</span>
            </h2>
            <span className="text-xs text-[#525B76]">Query volume</span>
          </div>

          <div className="divide-y divide-[#EFE6D8]">
            {data.topQuestions.map((q) => (
              <div key={q.question} className="py-3 first:pt-0 last:pb-0 flex items-start justify-between gap-4">
                <div className="space-y-0.5 min-w-0">
                  <p className="text-sm font-semibold text-[#1A2342]">{q.question}</p>
                  <p className="text-xs text-[#525B76]">
                    {q.place} · {q.mode}
                  </p>
                </div>
                <span className="font-mono-tabular text-sm font-bold text-[#C85A17] shrink-0">
                  {q.count.toLocaleString("en-IN")}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Indian Languages Used */}
        <div className="lg:col-span-5 bg-white rounded-2xl border border-[#E2D5C1] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-[#1A2342] flex items-center gap-2">
              <Globe2 className="w-4 h-4 text-[#1A2342]" />
              <span>Indian Languages Used</span>
            </h2>
            <span className="text-xs text-[#525B76]">Share %</span>
          </div>

          <div className="space-y-3">
            {data.languagesUsed.map((lang) => (
              <div key={lang.language} className="space-y-1">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#1A2342]">{lang.language}</span>
                  <span className="font-mono-tabular text-[#525B76]">
                    {lang.share}% ({lang.queries.toLocaleString("en-IN")})
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-[#F4EDE1] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1A2342]"
                    style={{ width: `${lang.share}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Cities & Small Towns */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E2D5C1] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-[#1A2342] flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#C85A17]" />
              <span>Popular Cities &amp; Small Towns</span>
            </h2>
            <span className="text-xs text-[#525B76]">Active guides</span>
          </div>

          <div className="space-y-3">
            {data.popularPlaces.map((pl) => {
              const pct = Math.round((pl.visits / maxPlaceVisits) * 100);
              return (
                <div key={pl.name} className="space-y-1">
                  <div className="flex items-center justify-between gap-2 text-xs">
                    <span className="font-semibold text-[#1A2342]">
                      {pl.name}{" "}
                      <span className="font-normal text-[#525B76]">
                        · {pl.state} · {pl.type}
                      </span>
                    </span>
                    <span className="font-mono-tabular font-semibold text-[#1A2342] shrink-0">
                      {pl.visits.toLocaleString("en-IN")}
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-[#F4EDE1] overflow-hidden">
                    <div
                      className={`h-full rounded-full ${
                        pl.type === "Small Town / Qasba" ? "bg-[#C85A17]" : "bg-[#1A2342]"
                      }`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Most-Searched Facilities */}
        <div className="lg:col-span-6 bg-white rounded-2xl border border-[#E2D5C1] p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-bold text-[#1A2342]">
              Most-Searched Local Facilities
            </h2>
            <span className="text-xs text-[#525B76]">Searches &amp; Availability</span>
          </div>

          <div className="divide-y divide-[#EFE6D8]">
            {data.mostSearchedFacilities.map((f) => (
              <div key={f.facility} className="py-3 first:pt-0 last:pb-0 space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <span className="font-semibold text-[#1A2342]">{f.facility}</span>
                  <span className="font-mono-tabular text-[#525B76]">
                    {f.searches.toLocaleString("en-IN")} searches · {f.satisfactionPct}% found nearby
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-[#F4EDE1] overflow-hidden">
                  <div
                    className="h-full rounded-full bg-[#1D5E34]"
                    style={{ width: `${f.satisfactionPct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content & Signage Gaps Across States */}
      <section className="bg-white rounded-2xl border border-[#E2D5C1] p-5 space-y-4">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-lg font-bold text-[#1A2342] flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-[#C85A17]" />
            <span>Content &amp; Signage Gaps Across States</span>
          </h2>
          <span className="text-xs text-[#525B76]">Conservation &amp; wayfinding priorities</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-[#E2D5C1] text-[#525B76]">
                <th className="py-2.5 pr-4 font-semibold">State / Circuit</th>
                <th className="py-2.5 pr-4 font-semibold">Monument Category</th>
                <th className="py-2.5 pr-4 font-semibold">Identified Gap</th>
                <th className="py-2.5 font-semibold text-right">Priority</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#EFE6D8]">
              {data.signageGaps.map((gap) => (
                <tr key={`${gap.state}-${gap.siteType}`}>
                  <td className="py-3 pr-4 font-semibold text-[#1A2342] align-top">
                    {gap.state}
                  </td>
                  <td className="py-3 pr-4 text-[#525B76] align-top whitespace-nowrap">
                    {gap.siteType}
                  </td>
                  <td className="py-3 pr-4 text-[#2C334A] align-top leading-relaxed">
                    {gap.gapDescription}
                  </td>
                  <td className="py-3 text-right align-top font-semibold whitespace-nowrap">
                    <span className={gap.priority === "High" ? "text-[#9A3412]" : "text-[#1A2342]"}>
                      {gap.priority}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
