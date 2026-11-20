import { useCallback, useEffect, useState } from "react";
import {
  BarChart2,
  Camera,
  Footprints,
  LifeBuoy,
  UtensilsCrossed,
} from "lucide-react";
import {
  GuideResponse,
  IndianLanguage,
  PlaceDossier,
  TabId,
  VisitorStyleMode,
} from "./types";
import { CURATED_PLACES, IMG_TEMPLE_CARVING } from "./data/placesCatalog";
import { getUIStrings } from "./data/translations";
import { TopBar } from "./components/TopBar";
import { PlaceExplorerModal } from "./components/PlaceExplorerModal";
import { AskGuideTab } from "./components/AskGuideTab";
import { WalksTab } from "./components/WalksTab";
import { LocalFoodOdopTab } from "./components/LocalFoodOdopTab";
import { FacilitiesEmergencyTab } from "./components/FacilitiesEmergencyTab";
import { InsightsDashboardTab } from "./components/InsightsDashboardTab";

const OFFLINE_STORAGE_KEY = "bharatyatra_offline_packs_v1";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>("ask");
  const [activePlace, setActivePlace] = useState<PlaceDossier>(CURATED_PLACES[0]);
  const [customPlaces, setCustomPlaces] = useState<Record<string, PlaceDossier>>({});
  const [language, setLanguage] = useState<IndianLanguage>("English | हिंदी");
  const [styleMode, setStyleMode] = useState<VisitorStyleMode>("History & Architecture");
  const [largeText, setLargeText] = useState(false);

  const [isPlaceModalOpen, setIsPlaceModalOpen] = useState(false);
  const [isLoadingCustomPlace, setIsLoadingCustomPlace] = useState(false);
  const [customPlaceError, setCustomPlaceError] = useState<string | null>(null);

  const [guideHistoryByPlace, setGuideHistoryByPlace] = useState<
    Record<string, GuideResponse[]>
  >({});
  const [prefilledQuestion, setPrefilledQuestion] = useState("");

  const [offlinePackIds, setOfflinePackIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem(OFFLINE_STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as Record<string, PlaceDossier>;
        return Object.keys(parsed);
      }
    } catch {
      // Ignore storage read issues
    }
    return [];
  });
  const [isDownloadingOffline, setIsDownloadingOffline] = useState(false);
  const [offlineToast, setOfflineToast] = useState<string | null>(null);

  const strings = getUIStrings(language);

  useEffect(() => {
    document.documentElement.classList.toggle("large-text", largeText);
  }, [largeText]);

  const handleSelectCuratedPlace = (place: PlaceDossier) => {
    setActivePlace(place);
    setCustomPlaceError(null);
  };

  const handleExploreCustomPlace = async (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) return;

    const existingCurated = CURATED_PLACES.find(
      (p) =>
        p.name.toLowerCase() === trimmed.toLowerCase() ||
        p.displayName.toLowerCase() === trimmed.toLowerCase()
    );
    if (existingCurated) {
      setActivePlace(existingCurated);
      setIsPlaceModalOpen(false);
      return;
    }

    const cacheKey = trimmed.toLowerCase();
    if (customPlaces[cacheKey]) {
      setActivePlace(customPlaces[cacheKey]);
      setIsPlaceModalOpen(false);
      return;
    }

    setCustomPlaceError(null);
    setIsLoadingCustomPlace(true);
    try {
      const res = await fetch("/api/place/explore", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ place: trimmed, language }),
      });
      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to load destination dossier.");
      }

      const generatedDossier: PlaceDossier = {
        id: `custom-${cacheKey.replace(/[^a-z0-9]+/g, "-")}`,
        name: data.name || trimmed,
        displayName:
          data.state && !String(data.name).includes(data.state)
            ? `${data.name} (${data.state})`
            : data.name || trimmed,
        state: data.state || "India",
        group: "custom",
        regionCategory: data.regionCategory || "Pan-India Heritage Destination",
        tagline: data.tagline || "Fact vs. Folklore heritage & local companion",
        overview: data.overview || "",
        heroImage: IMG_TEMPLE_CARVING,
        samplePrompts:
          Array.isArray(data.samplePrompts) && data.samplePrompts.length >= 3
            ? data.samplePrompts.slice(0, 3)
            : [
                `Tell me the recorded history of ${trimmed}`,
                `What local folklore or traditions exist in ${trimmed}?`,
                `Explain heritage carvings or crafts of ${trimmed}`,
              ],
        featuredGuide: data.featuredGuide,
        expressWalk: data.expressWalk || [],
        halfDayWalk: data.halfDayWalk || [],
        localHighlights: data.localHighlights || [],
        nearestHospital: data.nearestHospital || {
          name: "Nearest District Government Hospital",
          area: trimmed,
          phone: "108",
          note: "Dial 108 or 112 for 24x7 ambulance dispatch.",
        },
        facilities: data.facilities || [],
      };

      setCustomPlaces((prev) => ({ ...prev, [cacheKey]: generatedDossier }));
      setActivePlace(generatedDossier);
      setIsPlaceModalOpen(false);
    } catch (err: unknown) {
      setCustomPlaceError(
        err instanceof Error ? err.message : "Could not generate destination guide."
      );
    } finally {
      setIsLoadingCustomPlace(false);
    }
  };

  const handleDownloadOfflinePack = () => {
    setIsDownloadingOffline(true);
    setTimeout(() => {
      try {
        const existingRaw = localStorage.getItem(OFFLINE_STORAGE_KEY);
        const existing: Record<string, PlaceDossier> = existingRaw ? JSON.parse(existingRaw) : {};
        existing[activePlace.id] = activePlace;
        localStorage.setItem(OFFLINE_STORAGE_KEY, JSON.stringify(existing));
        setOfflinePackIds(Object.keys(existing));
        setOfflineToast(
          `${activePlace.displayName} Offline Pack cached (Walks, Fact-vs-Folklore guide, ODOP & 112 Emergency).`
        );
      } catch {
        setOfflinePackIds((prev) =>
          prev.includes(activePlace.id) ? prev : [...prev, activePlace.id]
        );
        setOfflineToast(`${activePlace.displayName} Offline Pack ready in session memory.`);
      } finally {
        setIsDownloadingOffline(false);
        setTimeout(() => setOfflineToast(null), 4000);
      }
    }, 350);
  };

  const handleAddGuideResponse = (resp: GuideResponse) => {
    setGuideHistoryByPlace((prev) => {
      const current = prev[activePlace.id] || [];
      return {
        ...prev,
        [activePlace.id]: [resp, ...current],
      };
    });
  };

  const handleAskAboutStop = useCallback((stopPrompt: string) => {
    setPrefilledQuestion(stopPrompt);
    setActiveTab("ask");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const clearPrefill = useCallback(() => {
    setPrefilledQuestion("");
  }, []);

  const isOfflineSaved = offlinePackIds.includes(activePlace.id);
  const currentResponses = guideHistoryByPlace[activePlace.id] || [];

  const navItems: { id: TabId; label: string; icon: typeof Camera }[] = [
    { id: "ask", label: strings.tabAsk, icon: Camera },
    { id: "walks", label: strings.tabWalks, icon: Footprints },
    { id: "local", label: strings.tabLocal, icon: UtensilsCrossed },
    { id: "facilities", label: strings.tabFacilities, icon: LifeBuoy },
    { id: "insights", label: strings.tabInsights, icon: BarChart2 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#FBF7F0] text-[#1A2342]">
      <TopBar
        activePlaceName={activePlace.displayName}
        onOpenPlaceSelector={() => setIsPlaceModalOpen(true)}
        language={language}
        onChangeLanguage={setLanguage}
        largeText={largeText}
        onToggleLargeText={() => setLargeText((prev) => !prev)}
        isOfflineSaved={isOfflineSaved}
        isDownloadingOffline={isDownloadingOffline}
        onDownloadOffline={handleDownloadOfflinePack}
        strings={strings}
      />

      {/* Offline Pack Confirmation Toast */}
      {offlineToast && (
        <div
          role="status"
          className="max-w-6xl mx-auto w-full px-3 sm:px-6 pt-3"
        >
          <div className="rounded-xl bg-[#ECF6EF] border border-[#B6DBC2] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1D5E34] flex items-center justify-between gap-3">
            <span>{offlineToast}</span>
            <button
              type="button"
              onClick={() => setOfflineToast(null)}
              className="text-xs font-bold underline cursor-pointer shrink-0"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Content Container */}
      <main className="flex-1 w-full max-w-6xl mx-auto px-3 sm:px-6 pt-4 sm:pt-6 pb-24">
        {activeTab === "ask" && (
          <AskGuideTab
            place={activePlace}
            language={language}
            strings={strings}
            styleMode={styleMode}
            onChangeStyleMode={setStyleMode}
            responses={currentResponses}
            onAddResponse={handleAddGuideResponse}
            prefilledQuestion={prefilledQuestion}
            onClearPrefill={clearPrefill}
            offlineMode={isOfflineSaved}
          />
        )}

        {activeTab === "walks" && (
          <WalksTab
            place={activePlace}
            language={language}
            strings={strings}
            offlineMode={isOfflineSaved}
            onAskAboutStop={handleAskAboutStop}
          />
        )}

        {activeTab === "local" && <LocalFoodOdopTab place={activePlace} />}

        {activeTab === "facilities" && (
          <FacilitiesEmergencyTab place={activePlace} strings={strings} />
        )}

        {activeTab === "insights" && <InsightsDashboardTab strings={strings} />}
      </main>

      {/* Bottom Navigation Bar (5 Tabs) */}
      <nav
        aria-label="Primary Navigation"
        className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-[#E2D5C1] pb-safe"
      >
        <div className="max-w-3xl mx-auto grid grid-cols-5 h-16">
          {navItems.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTab(tab.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center justify-center gap-1 min-h-[44px] px-1 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A17] ${
                  active
                    ? "text-[#C85A17] font-bold"
                    : "text-[#525B76] hover:text-[#1A2342] font-medium"
                }`}
              >
                <Icon
                  className={`w-5 h-5 shrink-0 ${
                    active ? "stroke-[2.4]" : "stroke-[1.9]"
                  }`}
                />
                <span className="text-[11px] leading-none truncate max-w-full">
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Place & State Explorer Modal */}
      <PlaceExplorerModal
        isOpen={isPlaceModalOpen}
        onClose={() => setIsPlaceModalOpen(false)}
        activePlaceId={activePlace.id}
        onSelectCuratedPlace={handleSelectCuratedPlace}
        onExploreCustomPlace={handleExploreCustomPlace}
        isLoadingCustom={isLoadingCustomPlace}
        customError={customPlaceError}
        strings={strings}
      />
    </div>
  );
}
