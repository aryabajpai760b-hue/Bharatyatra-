export type TabId = "ask" | "walks" | "local" | "facilities" | "insights";

export type VisitorStyleMode =
  | "Pilgrim / Devotional"
  | "History & Architecture"
  | "Kids Story Mode"
  | "Quick Summary";

export type IndianLanguage =
  | "English | हिंदी"
  | "English"
  | "हिंदी"
  | "मराठी"
  | "தமிழ்"
  | "తెలుగు"
  | "বাংলা"
  | "ગુજરાતી"
  | "ಕನ್ನಡ"
  | "മലയാളം"
  | "ଓଡ଼ିଆ"
  | "ਪੰਜਾਬੀ"
  | "অসমীয়া";

export type PlaceGroup = "small_town" | "heritage_city" | "state_ut" | "custom";

export type CompanionType = "All" | "Solo" | "Family with Kids" | "Elderly Parents";

export type LocalCategory =
  | "All"
  | "Local Food"
  | "Crafts & ODOP"
  | "Nearby Sites & Festivals";

export type FacilityCategory =
  | "All"
  | "Public Toilets"
  | "Drinking Water"
  | "Parking"
  | "Medical Centres"
  | "Food Outlets";

export interface GuideResponse {
  id?: string;
  question?: string;
  styleMode?: VisitorStyleMode;
  imagePreview?: string;
  title: string;
  recordedHistoryAndFacts: string;
  folkloreAndLocalTradition: string;
  accessibilityNotes: string;
  practicalTips: string;
  followUpSuggestions?: string[];
  timestamp?: string;
}

export interface WalkStop {
  stopNumber: number;
  name: string;
  walkTime: string;
  summary: string;
  audioStory: string;
  accessibilityNote: string;
}

export interface LocalHighlight {
  title: string;
  category: Exclude<LocalCategory, "All">;
  companionFit: Exclude<CompanionType, "All">[];
  originLabel: string;
  description: string;
  whereToFind: string;
}

export interface FacilityItem {
  name: string;
  type: Exclude<FacilityCategory, "All">;
  landmark: string;
  hours: string;
  accessibility: string;
}

export interface NearestHospital {
  name: string;
  area: string;
  phone: string;
  note: string;
}

export interface PlaceDossier {
  id: string;
  name: string;
  displayName: string;
  state: string;
  group: PlaceGroup;
  regionCategory: string;
  tagline: string;
  overview: string;
  heroImage?: string;
  secondaryImage?: string;
  samplePrompts: string[];
  featuredGuide: GuideResponse;
  expressWalk: WalkStop[];
  halfDayWalk: WalkStop[];
  localHighlights: LocalHighlight[];
  nearestHospital: NearestHospital;
  facilities: FacilityItem[];
}
