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
  | "Shopping & ODOP"
  | "Nearby Sites & Festivals";

export type DietaryFilter = "All" | "Veg" | "Non-Veg";

export type FacilityCategory =
  | "All"
  | "Public Toilets"
  | "Drinking Water"
  | "Parking"
  | "Medical Centres"
  | "Food Outlets";

export interface TurningPoint {
  era: string;
  milestone: string;
}

export interface StoryOfOrigin {
  howItBegan: string;
  originLegends: string;
  turningPoints: TurningPoint[];
}

export interface SightseeingSpot {
  name: string;
  spotType: string;
  description: string;
  bestTime: string;
  entryFee: string;
  duration: string;
  routeDirections: string;
  transportTip: string;
  mapQuery: string;
}

export interface FamousFoodItem {
  dishName: string;
  dietary: "Veg" | "Non-Veg";
  priceRange: string;
  bestTimeOfDay: string;
  description: string;
  iconicSpot: string;
  foodStreetArea: string;
  companionFit: Exclude<CompanionType, "All">[];
  mapQuery: string;
}

export interface ShoppingMarket {
  marketName: string;
  famousFor: string;
  odopOrCraftLabel: string;
  timings: string;
  closedDay: string;
  authenticityTip: string;
  companionFit: Exclude<CompanionType, "All">[];
  mapQuery: string;
}

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
  category: "Nearby Sites & Festivals";
  companionFit: Exclude<CompanionType, "All">[];
  originLabel: string;
  description: string;
  whereToFind: string;
  mapQuery?: string;
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
  storyOfOrigin: StoryOfOrigin;
  samplePrompts: string[];
  featuredGuide: GuideResponse;
  sightseeingSpots: SightseeingSpot[];
  expressWalk: WalkStop[];
  halfDayWalk: WalkStop[];
  famousFoods: FamousFoodItem[];
  shoppingMarkets: ShoppingMarket[];
  localHighlights: LocalHighlight[];
  nearestHospital: NearestHospital;
  facilities: FacilityItem[];
}

export interface StateCityEntry {
  name: string;
  kind: "Major City" | "Small Town / Qasba";
  curatedId?: string;
  highlight: string;
}

export interface StateDirectoryItem {
  state: string;
  type: "State" | "Union Territory";
  region: "North" | "Central" | "West" | "South" | "East" | "Northeast" | "Islands & Himalayas";
  places: StateCityEntry[];
}
