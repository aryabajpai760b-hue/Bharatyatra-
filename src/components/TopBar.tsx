import { Check, ChevronDown, Download, Globe2, MapPin, Type as TypeIcon } from "lucide-react";
import { IndianLanguage } from "../types";
import { ALL_LANGUAGES, UIStrings } from "../data/translations";

interface TopBarProps {
  activePlaceName: string;
  onOpenPlaceSelector: () => void;
  language: IndianLanguage;
  onChangeLanguage: (lang: IndianLanguage) => void;
  largeText: boolean;
  onToggleLargeText: () => void;
  isOfflineSaved: boolean;
  isDownloadingOffline: boolean;
  onDownloadOffline: () => void;
  strings: UIStrings;
}

export function TopBar({
  activePlaceName,
  onOpenPlaceSelector,
  language,
  onChangeLanguage,
  largeText,
  onToggleLargeText,
  isOfflineSaved,
  isDownloadingOffline,
  onDownloadOffline,
  strings,
}: TopBarProps) {
  return (
    <header className="sticky top-0 z-40 bg-[#FBF7F0]/95 backdrop-blur-md border-b border-[#E2D5C1]">
      <div className="max-w-6xl mx-auto px-3 sm:px-6 h-14 flex items-center justify-between gap-2 sm:gap-4">
        {/* Brand Wordmark */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="font-display text-lg sm:text-xl font-bold tracking-tight text-[#1A2342] whitespace-nowrap">
            BharatYatra AI
          </span>
        </div>

        {/* Interactive Place, Language & Accessibility Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2.5 min-w-0">
          {/* India Place Selector Trigger */}
          <button
            type="button"
            onClick={onOpenPlaceSelector}
            aria-label={strings.placeSelectorTitle}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 min-h-[40px] rounded-xl bg-white border border-[#DFCFAE] hover:border-[#C85A17] text-[#1A2342] text-xs sm:text-sm font-semibold transition-colors max-w-[140px] sm:max-w-[230px] cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A17]"
          >
            <MapPin className="w-3.5 h-3.5 text-[#C85A17] shrink-0" />
            <span className="truncate">{activePlaceName}</span>
            <ChevronDown className="w-3.5 h-3.5 text-[#525B76] shrink-0" />
          </button>

          {/* Indian Language Selector */}
          <div className="relative inline-flex items-center shrink-0">
            <Globe2 className="w-3.5 h-3.5 text-[#525B76] pointer-events-none absolute left-2.5 hidden sm:block" />
            <select
              aria-label="Select Indian Language"
              value={language}
              onChange={(e) => onChangeLanguage(e.target.value as IndianLanguage)}
              className="appearance-none min-h-[40px] pl-2.5 sm:pl-8 pr-6 sm:pr-7 rounded-xl bg-white border border-[#DFCFAE] hover:border-[#1A2342] text-[#1A2342] text-xs font-semibold cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A17] max-w-[106px] sm:max-w-[145px] truncate"
            >
              {ALL_LANGUAGES.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.native}
                </option>
              ))}
            </select>
            <ChevronDown className="w-3 h-3 text-[#525B76] pointer-events-none absolute right-2" />
          </div>

          {/* Large Text Toggle */}
          <button
            type="button"
            onClick={onToggleLargeText}
            aria-pressed={largeText}
            title={strings.largeText}
            className={`inline-flex items-center gap-1.5 px-2.5 min-h-[40px] rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A17] ${
              largeText
                ? "bg-[#1A2342] text-white border-[#1A2342]"
                : "bg-white text-[#1A2342] border-[#DFCFAE] hover:border-[#1A2342]"
            }`}
          >
            <TypeIcon className="w-3.5 h-3.5 shrink-0" />
            <span className="hidden md:inline">{strings.largeText}</span>
          </button>

          {/* Offline Pack Button */}
          <button
            type="button"
            onClick={onDownloadOffline}
            disabled={isDownloadingOffline}
            aria-pressed={isOfflineSaved}
            title={isOfflineSaved ? strings.offlineSaved : strings.offlinePack}
            className={`inline-flex items-center gap-1.5 px-2.5 sm:px-3 min-h-[40px] rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A17] ${
              isOfflineSaved
                ? "bg-[#ECF6EF] text-[#1D5E34] border-[#B6DBC2]"
                : "bg-[#C85A17] text-white border-[#C85A17] hover:bg-[#AE4B10]"
            }`}
          >
            {isOfflineSaved ? (
              <Check className="w-3.5 h-3.5 shrink-0" />
            ) : (
              <Download className={`w-3.5 h-3.5 shrink-0 ${isDownloadingOffline ? "animate-bounce" : ""}`} />
            )}
            <span className="hidden sm:inline">
              {isDownloadingOffline
                ? "Saving..."
                : isOfflineSaved
                ? strings.offlineSaved
                : strings.offlinePack}
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
