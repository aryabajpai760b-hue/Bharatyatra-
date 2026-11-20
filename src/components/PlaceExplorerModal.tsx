import { useMemo, useState } from "react";
import {
  ArrowLeft,
  ChevronRight,
  Compass,
  Loader2,
  MapPin,
  Search,
  Sparkles,
  X,
} from "lucide-react";
import { PlaceDossier, StateCityEntry, StateDirectoryItem } from "../types";
import {
  CURATED_PLACES,
  INDIA_STATES_AND_UTS_DIRECTORY,
} from "../data/placesCatalog";
import { UIStrings } from "../data/translations";

interface PlaceExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePlaceId: string;
  activeStateName?: string;
  onSelectCuratedPlace: (place: PlaceDossier) => void;
  onExploreCustomPlace: (query: string) => Promise<void>;
  isLoadingCustom: boolean;
  customError: string | null;
  strings: UIStrings;
}

type RegionFilter =
  | "All"
  | "North"
  | "Central"
  | "West"
  | "South"
  | "East"
  | "Northeast"
  | "Islands & Himalayas";

const REGION_FILTERS: RegionFilter[] = [
  "All",
  "North",
  "Central",
  "West",
  "South",
  "East",
  "Northeast",
  "Islands & Himalayas",
];

const QUICK_FEATURED_IDS = [
  "mathura-up",
  "orchha-mp",
  "bishnupur-wb",
  "hampi-ka",
  "jaipur-rj",
  "madurai-tn",
  "patan-gj",
  "ziro-ar",
];

export function PlaceExplorerModal({
  isOpen,
  onClose,
  activePlaceId,
  activeStateName,
  onSelectCuratedPlace,
  onExploreCustomPlace,
  isLoadingCustom,
  customError,
  strings,
}: PlaceExplorerModalProps) {
  const [searchText, setSearchText] = useState("");
  const [regionFilter, setRegionFilter] = useState<RegionFilter>("All");
  const [selectedStateName, setSelectedStateName] = useState<string | null>(
    activeStateName || "Uttar Pradesh"
  );
  const [mobileStep, setMobileStep] = useState<"states" | "cities">("states");

  const curatedMap = useMemo(() => {
    const map = new Map<string, PlaceDossier>();
    for (const p of CURATED_PLACES) {
      map.set(p.id, p);
    }
    return map;
  }, []);

  const quickFeatured = useMemo(
    () =>
      QUICK_FEATURED_IDS.map((id) => curatedMap.get(id)).filter(
        (p): p is PlaceDossier => Boolean(p)
      ),
    [curatedMap]
  );

  const query = searchText.trim().toLowerCase();

  const filteredDirectory = useMemo(() => {
    return INDIA_STATES_AND_UTS_DIRECTORY.filter((entry) => {
      const matchesRegion =
        regionFilter === "All" || entry.region === regionFilter;
      if (!matchesRegion) return false;
      if (!query) return true;
      const stateMatch = entry.state.toLowerCase().includes(query);
      const cityMatch = entry.places.some(
        (city) =>
          city.name.toLowerCase().includes(query) ||
          city.highlight.toLowerCase().includes(query)
      );
      return stateMatch || cityMatch;
    });
  }, [regionFilter, query]);

  const activeStateItem: StateDirectoryItem | undefined = useMemo(() => {
    if (selectedStateName) {
      const found = filteredDirectory.find((s) => s.state === selectedStateName);
      if (found) return found;
    }
    return filteredDirectory[0];
  }, [filteredDirectory, selectedStateName]);

  const searchCityMatches = useMemo(() => {
    if (!query) return [];
    const results: { stateItem: StateDirectoryItem; city: StateCityEntry }[] = [];
    for (const st of INDIA_STATES_AND_UTS_DIRECTORY) {
      for (const city of st.places) {
        if (
          city.name.toLowerCase().includes(query) ||
          city.highlight.toLowerCase().includes(query) ||
          st.state.toLowerCase().includes(query)
        ) {
          results.push({ stateItem: st, city });
        }
      }
    }
    return results.slice(0, 14);
  }, [query]);

  if (!isOpen) return null;

  const handleCitySelect = async (
    stateName: string,
    city: StateCityEntry
  ) => {
    if (city.curatedId && curatedMap.has(city.curatedId)) {
      onSelectCuratedPlace(curatedMap.get(city.curatedId)!);
      onClose();
      return;
    }
    await onExploreCustomPlace(`${city.name}, ${stateName}`);
  };

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    await onExploreCustomPlace(searchText.trim());
  };

  const majorCities =
    activeStateItem?.places.filter((c) => c.kind === "Major City") || [];
  const smallTowns =
    activeStateItem?.places.filter((c) => c.kind === "Small Town / Qasba") || [];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1A2342]/65 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-selector-title"
    >
      <div className="w-full max-w-4xl max-h-[90vh] bg-[#FBF7F0] rounded-t-3xl sm:rounded-2xl border border-[#DFCFAE] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 bg-white border-b border-[#E2D5C1] flex items-center justify-between gap-4 shrink-0">
          <div>
            <h2
              id="place-selector-title"
              className="font-display text-lg sm:text-xl font-bold text-[#1A2342]"
            >
              {strings.placeSelectorTitle}
            </h2>
            <p className="text-xs text-[#525B76]">
              28 Indian States &amp; 8 Union Territories · Major Heritage Cities, Small Towns &amp; Any Custom Spot
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close destination explorer"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-[#E2D5C1] bg-[#FBF7F0] text-[#1A2342] hover:bg-[#EFE5D5] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search / Custom Pan-India Input + Region Filter */}
        <div className="p-4 sm:px-6 bg-[#F4EDE1]/80 border-b border-[#E2D5C1] space-y-3 shrink-0">
          <form
            onSubmit={handleCustomSubmit}
            className="flex flex-col sm:flex-row gap-2.5"
          >
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#525B76] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder={strings.searchPlacePlaceholder}
                className="w-full min-h-[44px] pl-10 pr-4 py-2 rounded-xl bg-white border border-[#DFCFAE] text-sm text-[#1A2342] placeholder:text-[#788099] focus:outline-2 focus:outline-[#C85A17]"
              />
            </div>
            <button
              type="submit"
              disabled={!searchText.trim() || isLoadingCustom}
              className="min-h-[44px] px-5 py-2 rounded-xl bg-[#C85A17] hover:bg-[#AE4B10] disabled:opacity-50 text-white text-sm font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap shrink-0 cursor-pointer"
            >
              {isLoadingCustom ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Building Guide...</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4" />
                  <span>Explore Any Village / Site</span>
                </>
              )}
            </button>
          </form>

          {customError && (
            <p className="text-xs text-[#9A3412] font-medium bg-[#FEF2F2] border border-[#FECACA] rounded-lg px-3 py-2">
              {customError}
            </p>
          )}

          {/* Region Filter Strip */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-0.5">
            {REGION_FILTERS.map((region) => {
              const active = regionFilter === region;
              return (
                <button
                  key={region}
                  type="button"
                  onClick={() => {
                    setRegionFilter(region);
                    setMobileStep("states");
                  }}
                  aria-pressed={active}
                  className={`min-h-[36px] px-3 py-1 rounded-lg border text-xs font-semibold whitespace-nowrap cursor-pointer transition-colors ${
                    active
                      ? "bg-[#1A2342] text-white border-[#1A2342]"
                      : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                  }`}
                >
                  {region === "All" ? "All India (36)" : region}
                </button>
              );
            })}
          </div>
        </div>

        {/* Explorer Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5">
          {/* Instant Quick-Test Pre-Loaded Destinations */}
          {!query && (
            <section className="space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#525B76]">
                  Instant Pre-Loaded Heritage Highlights
                </h3>
                <span className="text-xs text-[#525B76]">
                  Full Origin Story · Food · Markets · Maps
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {quickFeatured.map((place) => {
                  const active = place.id === activePlaceId;
                  return (
                    <button
                      key={place.id}
                      type="button"
                      onClick={() => {
                        onSelectCuratedPlace(place);
                        onClose();
                      }}
                      className={`min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition-colors ${
                        active
                          ? "bg-[#1A2342] text-white border-[#1A2342]"
                          : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                      }`}
                    >
                      <MapPin
                        className={`w-3.5 h-3.5 shrink-0 ${
                          active ? "text-[#F4A261]" : "text-[#C85A17]"
                        }`}
                      />
                      <span>{place.displayName}</span>
                    </button>
                  );
                })}
              </div>
            </section>
          )}

          {/* Live Matching Cities Across India When Searching */}
          {query && (
            <section className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm font-bold text-[#1A2342]">
                  Matching Cities, Towns &amp; States ({searchCityMatches.length})
                </h3>
                <span className="text-xs text-[#525B76]">
                  Or press &ldquo;Explore Any Village / Site&rdquo; above
                </span>
              </div>

              {searchCityMatches.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {searchCityMatches.map(({ stateItem, city }) => {
                    const isCurated = Boolean(
                      city.curatedId && curatedMap.has(city.curatedId)
                    );
                    const isActive = city.curatedId === activePlaceId;
                    return (
                      <button
                        key={`${stateItem.state}-${city.name}`}
                        type="button"
                        disabled={isLoadingCustom}
                        onClick={() => handleCitySelect(stateItem.state, city)}
                        className={`min-h-[56px] p-3 rounded-xl border text-left transition-colors cursor-pointer flex items-start justify-between gap-2 ${
                          isActive
                            ? "bg-[#1A2342] text-white border-[#1A2342]"
                            : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                        }`}
                      >
                        <div className="space-y-0.5 min-w-0">
                          <div className="text-sm font-bold truncate">
                            {city.name}, {stateItem.state}
                          </div>
                          <div
                            className={`text-xs truncate ${
                              isActive ? "text-[#F7D7B5]" : "text-[#525B76]"
                            }`}
                          >
                            {city.kind} · {city.highlight}
                          </div>
                        </div>
                        <span
                          className={`text-[11px] font-semibold shrink-0 mt-0.5 ${
                            isActive
                              ? "text-[#F4A261]"
                              : isCurated
                              ? "text-[#1D5E34]"
                              : "text-[#C85A17]"
                          }`}
                        >
                          {isCurated ? "Instant" : "AI Guide"}
                        </span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-xl border border-[#DFCFAE] p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-sm font-semibold text-[#1A2342]">
                      &ldquo;{searchText.trim()}&rdquo; isn&apos;t in the quick directory yet.
                    </p>
                    <p className="text-xs text-[#525B76]">
                      Generate a live BharatYatra dossier with Origin Story, Sightseeing &amp; Directions, Food &amp; Markets.
                    </p>
                  </div>
                  <button
                    type="button"
                    disabled={isLoadingCustom}
                    onClick={() => onExploreCustomPlace(searchText.trim())}
                    className="min-h-[44px] px-4 py-2 rounded-xl bg-[#C85A17] hover:bg-[#AE4B10] text-white text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap cursor-pointer"
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>Explore &ldquo;{searchText.trim()}&rdquo;</span>
                  </button>
                </div>
              )}
            </section>
          )}

          {/* Two-Step State -> City/Town Picker */}
          <section className="grid grid-cols-1 md:grid-cols-12 gap-4 items-start">
            {/* Step 1: States & UTs Column */}
            <div
              className={`md:col-span-5 bg-white rounded-2xl border border-[#E2D5C1] overflow-hidden ${
                mobileStep === "cities" ? "hidden md:block" : "block"
              }`}
            >
              <div className="px-4 py-3 bg-[#F4EDE1]/60 border-b border-[#E2D5C1] flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-[#1A2342]">
                  Step 1 · Select State or UT ({filteredDirectory.length})
                </h3>
                <span className="text-[11px] text-[#525B76]">
                  All 28 States + 8 UTs
                </span>
              </div>
              <div className="max-h-[340px] overflow-y-auto divide-y divide-[#EFE6D8]">
                {filteredDirectory.map((item) => {
                  const selected = activeStateItem?.state === item.state;
                  const curatedCount = item.places.filter(
                    (c) => c.curatedId && curatedMap.has(c.curatedId)
                  ).length;
                  return (
                    <button
                      key={item.state}
                      type="button"
                      onClick={() => {
                        setSelectedStateName(item.state);
                        setMobileStep("cities");
                      }}
                      className={`w-full min-h-[48px] px-4 py-2.5 text-left flex items-center justify-between gap-2 transition-colors cursor-pointer ${
                        selected
                          ? "bg-[#1A2342] text-white"
                          : "bg-white hover:bg-[#FBF7F0] text-[#1A2342]"
                      }`}
                    >
                      <div className="min-w-0">
                        <div className="text-sm font-semibold truncate">
                          {item.state}
                        </div>
                        <div
                          className={`text-[11px] ${
                            selected ? "text-[#F7D7B5]" : "text-[#525B76]"
                          }`}
                        >
                          {item.type} · {item.region} · {item.places.length} places
                          {curatedCount > 0 ? ` · ${curatedCount} pre-loaded` : ""}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 ${
                          selected ? "text-[#F4A261]" : "text-[#788099]"
                        }`}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Cities & Small Towns under Selected State */}
            <div
              className={`md:col-span-7 bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 space-y-4 ${
                mobileStep === "states" ? "hidden md:block" : "block"
              }`}
            >
              {activeStateItem ? (
                <>
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-[#EFE6D8]">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setMobileStep("states")}
                        className="md:hidden min-h-[40px] px-2.5 py-1 rounded-lg bg-[#F4EDE1] text-[#1A2342] text-xs font-semibold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        <span>States</span>
                      </button>
                      <div>
                        <p className="text-[11px] font-semibold text-[#C85A17]">
                          Step 2 · {activeStateItem.type} · {activeStateItem.region} India
                        </p>
                        <h3 className="font-display text-lg font-bold text-[#1A2342]">
                          {activeStateItem.state}
                        </h3>
                      </div>
                    </div>

                    <button
                      type="button"
                      disabled={isLoadingCustom}
                      onClick={() => onExploreCustomPlace(activeStateItem.state)}
                      className="min-h-[40px] px-3 py-1.5 rounded-xl bg-[#FBF7F0] hover:bg-[#F4EDE1] border border-[#DFCFAE] text-xs font-semibold text-[#1A2342] cursor-pointer"
                    >
                      Explore Full {activeStateItem.state}
                    </button>
                  </div>

                  {/* Famous Cities */}
                  {majorCities.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#525B76]">
                        Major Cities &amp; Capitals
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {majorCities.map((city) => {
                          const isCurated = Boolean(
                            city.curatedId && curatedMap.has(city.curatedId)
                          );
                          const isActive = city.curatedId === activePlaceId;
                          return (
                            <button
                              key={city.name}
                              type="button"
                              disabled={isLoadingCustom}
                              onClick={() =>
                                handleCitySelect(activeStateItem.state, city)
                              }
                              className={`min-h-[52px] p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                isActive
                                  ? "bg-[#1A2342] text-white border-[#1A2342]"
                                  : "bg-[#FBF7F0] hover:bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                              }`}
                            >
                              <div className="min-w-0">
                                <div className="text-sm font-bold flex items-center gap-1.5">
                                  <MapPin
                                    className={`w-3.5 h-3.5 shrink-0 ${
                                      isActive ? "text-[#F4A261]" : "text-[#C85A17]"
                                    }`}
                                  />
                                  <span>{city.name}</span>
                                </div>
                                <p
                                  className={`text-xs mt-0.5 ${
                                    isActive ? "text-[#F7D7B5]" : "text-[#525B76]"
                                  }`}
                                >
                                  {city.highlight}
                                </p>
                              </div>
                              <span
                                className={`text-[11px] font-semibold shrink-0 ${
                                  isActive
                                    ? "text-[#F4A261]"
                                    : isCurated
                                    ? "text-[#1D5E34]"
                                    : "text-[#C85A17]"
                                }`}
                              >
                                {isCurated ? "Instant Pack" : "Generate AI"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* Small Heritage Towns / Qasbas */}
                  {smallTowns.length > 0 && (
                    <div className="space-y-2">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-[#525B76]">
                        Small Heritage Towns &amp; Offbeat Qasbas
                      </h4>
                      <div className="grid grid-cols-1 gap-2">
                        {smallTowns.map((city) => {
                          const isCurated = Boolean(
                            city.curatedId && curatedMap.has(city.curatedId)
                          );
                          const isActive = city.curatedId === activePlaceId;
                          return (
                            <button
                              key={city.name}
                              type="button"
                              disabled={isLoadingCustom}
                              onClick={() =>
                                handleCitySelect(activeStateItem.state, city)
                              }
                              className={`min-h-[52px] p-3 rounded-xl border text-left flex items-center justify-between gap-3 transition-colors cursor-pointer ${
                                isActive
                                  ? "bg-[#1A2342] text-white border-[#1A2342]"
                                  : "bg-[#FBF7F0] hover:bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                              }`}
                            >
                              <div className="min-w-0">
                                <div className="text-sm font-bold flex items-center gap-1.5">
                                  <Compass
                                    className={`w-3.5 h-3.5 shrink-0 ${
                                      isActive ? "text-[#F4A261]" : "text-[#C85A17]"
                                    }`}
                                  />
                                  <span>{city.name}</span>
                                </div>
                                <p
                                  className={`text-xs mt-0.5 ${
                                    isActive ? "text-[#F7D7B5]" : "text-[#525B76]"
                                  }`}
                                >
                                  {city.highlight}
                                </p>
                              </div>
                              <span
                                className={`text-[11px] font-semibold shrink-0 ${
                                  isActive
                                    ? "text-[#F4A261]"
                                    : isCurated
                                    ? "text-[#1D5E34]"
                                    : "text-[#C85A17]"
                                }`}
                              >
                                {isCurated ? "Instant Pack" : "Generate AI"}
                              </span>
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                <p className="text-sm text-[#525B76]">
                  No states matched your filter. Try searching for any city, village, or monument above.
                </p>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
