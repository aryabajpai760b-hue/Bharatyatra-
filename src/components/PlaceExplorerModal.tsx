import { useState } from "react";
import { Compass, Loader2, MapPin, Search, X } from "lucide-react";
import { PlaceDossier } from "../types";
import { ALL_INDIAN_STATES_AND_UTS, CURATED_PLACES } from "../data/placesCatalog";
import { UIStrings } from "../data/translations";

interface PlaceExplorerModalProps {
  isOpen: boolean;
  onClose: () => void;
  activePlaceId: string;
  onSelectCuratedPlace: (place: PlaceDossier) => void;
  onExploreCustomPlace: (query: string) => Promise<void>;
  isLoadingCustom: boolean;
  customError: string | null;
  strings: UIStrings;
}

export function PlaceExplorerModal({
  isOpen,
  onClose,
  activePlaceId,
  onSelectCuratedPlace,
  onExploreCustomPlace,
  isLoadingCustom,
  customError,
  strings,
}: PlaceExplorerModalProps) {
  const [searchText, setSearchText] = useState("");
  const [showAllStates, setShowAllStates] = useState(false);

  if (!isOpen) return null;

  const smallTowns = CURATED_PLACES.filter((p) => p.group === "small_town");
  const heritageCities = CURATED_PLACES.filter((p) => p.group === "heritage_city");
  const statesAndUTs = CURATED_PLACES.filter((p) => p.group === "state_ut");

  const handleCustomSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchText.trim()) return;
    await onExploreCustomPlace(searchText.trim());
  };

  const filteredStates = searchText.trim()
    ? ALL_INDIAN_STATES_AND_UTS.filter((s) =>
        s.toLowerCase().includes(searchText.trim().toLowerCase())
      )
    : ALL_INDIAN_STATES_AND_UTS;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#1A2342]/60 backdrop-blur-xs p-0 sm:p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="place-selector-title"
    >
      <div className="w-full max-w-3xl max-h-[88vh] bg-[#FBF7F0] rounded-t-3xl sm:rounded-2xl border border-[#DFCFAE] shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-5 py-4 bg-white border-b border-[#E2D5C1] flex items-center justify-between gap-4">
          <div>
            <h2 id="place-selector-title" className="font-display text-lg sm:text-xl font-bold text-[#1A2342]">
              {strings.placeSelectorTitle}
            </h2>
            <p className="text-xs text-[#525B76]">
              Small towns, qasbas, major heritage cities, and all 36 Indian States & Union Territories
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close place selector"
            className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl border border-[#E2D5C1] bg-[#FBF7F0] text-[#1A2342] hover:bg-[#EFE5D5] cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search / Custom Pan-India Input */}
        <div className="p-4 sm:p-5 bg-[#F4EDE1]/70 border-b border-[#E2D5C1]">
          <form onSubmit={handleCustomSubmit} className="flex flex-col sm:flex-row gap-2.5">
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
                  <span>Loading Guide...</span>
                </>
              ) : (
                <>
                  <Compass className="w-4 h-4" />
                  <span>Explore Any Spot</span>
                </>
              )}
            </button>
          </form>
          {customError && (
            <p className="mt-2 text-xs text-[#9A3412] font-medium">{customError}</p>
          )}
        </div>

        {/* Curated Quick Selection Lists */}
        <div className="overflow-y-auto p-5 space-y-6">
          {/* Small Towns & Lesser-Known Gems */}
          <section>
            <div className="flex items-baseline justify-between mb-2.5">
              <h3 className="text-sm font-bold text-[#1A2342]">
                Small Towns & Lesser-Known Gems
              </h3>
              <span className="text-xs text-[#525B76]">Offbeat qasbas & heritage villages</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {smallTowns.map((place) => {
                const active = place.id === activePlaceId;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => {
                      onSelectCuratedPlace(place);
                      onClose();
                    }}
                    className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                      active
                        ? "bg-[#1A2342] text-white border-[#1A2342]"
                        : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 shrink-0 ${active ? "text-[#F4A261]" : "text-[#C85A17]"}`} />
                    <span>{place.displayName}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Major Heritage & Pilgrimage Cities */}
          <section>
            <div className="flex items-baseline justify-between mb-2.5">
              <h3 className="text-sm font-bold text-[#1A2342]">
                Major Heritage & Pilgrimage Cities
              </h3>
              <span className="text-xs text-[#525B76]">Iconic cultural centres</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {heritageCities.map((place) => {
                const active = place.id === activePlaceId;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => {
                      onSelectCuratedPlace(place);
                      onClose();
                    }}
                    className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors inline-flex items-center gap-1.5 cursor-pointer ${
                      active
                        ? "bg-[#1A2342] text-white border-[#1A2342]"
                        : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                    }`}
                  >
                    <MapPin className={`w-3.5 h-3.5 shrink-0 ${active ? "text-[#F4A261]" : "text-[#C85A17]"}`} />
                    <span>{place.displayName}</span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* Featured States & UTs */}
          <section>
            <div className="flex items-baseline justify-between mb-2.5">
              <h3 className="text-sm font-bold text-[#1A2342]">States & Union Territories</h3>
              <button
                type="button"
                onClick={() => setShowAllStates((prev) => !prev)}
                className="text-xs font-semibold text-[#C85A17] hover:underline cursor-pointer"
              >
                {showAllStates ? "Show featured 7" : "Browse all 36 States & UTs"}
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {statesAndUTs.map((place) => {
                const active = place.id === activePlaceId;
                return (
                  <button
                    key={place.id}
                    type="button"
                    onClick={() => {
                      onSelectCuratedPlace(place);
                      onClose();
                    }}
                    className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      active
                        ? "bg-[#1A2342] text-white border-[#1A2342]"
                        : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                    }`}
                  >
                    {place.displayName}
                  </button>
                );
              })}
            </div>

            {showAllStates && (
              <div className="mt-4 pt-4 border-t border-[#E2D5C1]">
                <p className="text-xs text-[#525B76] mb-2.5">
                  Tap any Indian State or Union Territory to generate a dedicated heritage trail & local guide:
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {filteredStates.map((stateName) => (
                    <button
                      key={stateName}
                      type="button"
                      disabled={isLoadingCustom}
                      onClick={() => onExploreCustomPlace(stateName)}
                      className="min-h-[40px] px-3 py-1.5 rounded-lg bg-white border border-[#E2D5C1] hover:border-[#C85A17] text-left text-xs font-medium text-[#1A2342] truncate cursor-pointer"
                    >
                      {stateName}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
