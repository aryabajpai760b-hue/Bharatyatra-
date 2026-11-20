export interface InsightRegionData {
  region: string;
  totalQueries: number;
  smallTownShare: number;
  regionalLangShare: number;
  audioPlayCount: number;
  topQuestions: { question: string; place: string; count: number; mode: string }[];
  languagesUsed: { language: string; share: number; queries: number }[];
  popularPlaces: { name: string; state: string; type: "Small Town / Qasba" | "Heritage City"; visits: number }[];
  mostSearchedFacilities: { facility: string; searches: number; satisfactionPct: number }[];
  signageGaps: { state: string; siteType: string; gapDescription: string; priority: "High" | "Medium" }[];
}

export const INSIGHTS_REGIONS: InsightRegionData[] = [
  {
    region: "All India",
    totalQueries: 148920,
    smallTownShare: 38,
    regionalLangShare: 64,
    audioPlayCount: 52410,
    topQuestions: [
      {
        question: "Separated Fact vs. Folklore on Vishram Ghat & Janmasthan mound",
        place: "Mathura, UP",
        count: 6840,
        mode: "History & Architecture",
      },
      {
        question: "Step-free darshan & evening aarti viewing spots for elderly parents",
        place: "Varanasi & Mathura, UP",
        count: 5490,
        mode: "Pilgrim / Devotional",
      },
      {
        question: "Why Ram Raja is worshipped as a king in a palace courtyard",
        place: "Orchha, MP",
        count: 4120,
        mode: "Kids Story Mode",
      },
      {
        question: "Identifying Ramayana scenes on 17th-century terracotta panels",
        place: "Bishnupur, WB",
        count: 3780,
        mode: "Camera Scan",
      },
      {
        question: "Where to buy authentic GI-tagged ODOP crafts directly from weavers",
        place: "Chanderi & Madurai",
        count: 3290,
        mode: "Quick Summary",
      },
    ],
    languagesUsed: [
      { language: "हिंदी (Hindi)", share: 34, queries: 50630 },
      { language: "English | हिंदी (Bilingual)", share: 26, queries: 38720 },
      { language: "मराठी (Marathi)", share: 9, queries: 13400 },
      { language: "தமிழ் (Tamil)", share: 8, queries: 11910 },
      { language: "বাংলা (Bengali)", share: 7, queries: 10420 },
      { language: "ગુજરાતી (Gujarati)", share: 6, queries: 8935 },
      { language: "తెలుగు / ಕನ್ನಡ / Others", share: 10, queries: 14905 },
    ],
    popularPlaces: [
      { name: "Mathura", state: "Uttar Pradesh", type: "Heritage City", visits: 24800 },
      { name: "Varanasi", state: "Uttar Pradesh", type: "Heritage City", visits: 22150 },
      { name: "Jaipur", state: "Rajasthan", type: "Heritage City", visits: 18940 },
      { name: "Orchha", state: "Madhya Pradesh", type: "Small Town / Qasba", visits: 11620 },
      { name: "Bishnupur", state: "West Bengal", type: "Small Town / Qasba", visits: 8940 },
      { name: "Chanderi", state: "Madhya Pradesh", type: "Small Town / Qasba", visits: 6810 },
      { name: "Pattadakal", state: "Karnataka", type: "Small Town / Qasba", visits: 6190 },
      { name: "Ziro", state: "Arunachal Pradesh", type: "Small Town / Qasba", visits: 4720 },
    ],
    mostSearchedFacilities: [
      { facility: "Drinking Water & RO Booths", searches: 31240, satisfactionPct: 74 },
      { facility: "Clean Public Toilets", searches: 28910, satisfactionPct: 62 },
      { facility: "Step-Free / E-Rickshaw Access", searches: 19450, satisfactionPct: 58 },
      { facility: "Verified Parking & Shuttle Hubs", searches: 15820, satisfactionPct: 68 },
      { facility: "Nearest Medical / First-Aid Post", searches: 8340, satisfactionPct: 81 },
    ],
    signageGaps: [
      {
        state: "Madhya Pradesh (Orchha, Mandu, Chanderi)",
        siteType: "Stepwells (Baolis) & Chhatris",
        gapDescription: "Missing multilingual audio QR plaques in Marathi, Gujarati, and Bengali; weak cellular signal inside fort basements.",
        priority: "High",
      },
      {
        state: "Uttar Pradesh (Mathura, Bateshwar, Kalinjar)",
        siteType: "Riverfront Ghats & Old Town Lanes",
        gapDescription: "Lack of clear directional signage to step-free upper viewing terraces and elderly rest benches.",
        priority: "High",
      },
      {
        state: "West Bengal (Bishnupur & Bankura)",
        siteType: "Terracotta Temples",
        gapDescription: "High visitor demand for close-up panel explanations distinguishing Ramayana vs. folk scenes without touching clay reliefs.",
        priority: "Medium",
      },
      {
        state: "Arunachal & Himachal (Ziro, Kalpa)",
        siteType: "Living Heritage Villages & Gompas",
        gapDescription: "Low-bandwidth connectivity creates strong reliance on pre-cached Offline Packs and cultural etiquette cards.",
        priority: "High",
      },
      {
        state: "Karnataka (Pattadakal & Aihole)",
        siteType: "Early Chalukyan Shrines",
        gapDescription: "Limited Kannada/Hindi/Telugu comparative diagrams explaining Nagara vs. Dravida spire evolution.",
        priority: "Medium",
      },
    ],
  },
  {
    region: "Uttar Pradesh",
    totalQueries: 46200,
    smallTownShare: 24,
    regionalLangShare: 72,
    audioPlayCount: 18420,
    topQuestions: [
      {
        question: "Recorded history of Vishram Ghat vs. Yamuna Aarti tradition",
        place: "Mathura",
        count: 6840,
        mode: "History & Architecture",
      },
      {
        question: "Kushan-era sculptures at Government Museum Mathura",
        place: "Mathura",
        count: 4120,
        mode: "History & Architecture",
      },
      {
        question: "Step-free ghat access at Namo Ghat & Assi Ghat",
        place: "Varanasi",
        count: 3890,
        mode: "Pilgrim / Devotional",
      },
      {
        question: "Authentic Braj Peda & ODOP Zari Poshak craft clusters",
        place: "Mathura & Vrindavan",
        count: 3110,
        mode: "Quick Summary",
      },
    ],
    languagesUsed: [
      { language: "हिंदी (Hindi)", share: 48, queries: 22176 },
      { language: "English | हिंदी (Bilingual)", share: 27, queries: 12474 },
      { language: "मराठी (Marathi)", share: 8, queries: 3696 },
      { language: "ગુજરાતી (Gujarati)", share: 7, queries: 3234 },
      { language: "বাংলা / தமிழ் / Others", share: 10, queries: 4620 },
    ],
    popularPlaces: [
      { name: "Mathura", state: "Uttar Pradesh", type: "Heritage City", visits: 24800 },
      { name: "Varanasi", state: "Uttar Pradesh", type: "Heritage City", visits: 22150 },
      { name: "Sarnath", state: "Uttar Pradesh", type: "Small Town / Qasba", visits: 7420 },
      { name: "Bateshwar", state: "Uttar Pradesh", type: "Small Town / Qasba", visits: 2950 },
    ],
    mostSearchedFacilities: [
      { facility: "Drinking Water & RO Booths", searches: 11200, satisfactionPct: 76 },
      { facility: "Clean Public Toilets", searches: 10450, satisfactionPct: 64 },
      { facility: "E-Rickshaw & Senior Access", searches: 7900, satisfactionPct: 61 },
      { facility: "Cloakrooms & Shoe Stands", searches: 6150, satisfactionPct: 72 },
    ],
    signageGaps: [
      {
        state: "Mathura–Vrindavan Braj Circuit",
        siteType: "Old City & Kunds",
        gapDescription: "Need clear bilingual directions to accessible upper-level aarti viewing zones and genuine ODOP Sanjhi artisans.",
        priority: "High",
      },
      {
        state: "Bundelkhand UP (Kalinjar & Mahoba)",
        siteType: "Hill Forts & Chandela Tanks",
        gapDescription: "Minimal trail markers and drinking water stations along uphill fort approaches.",
        priority: "High",
      },
    ],
  },
  {
    region: "Madhya Pradesh",
    totalQueries: 28400,
    smallTownShare: 68,
    regionalLangShare: 61,
    audioPlayCount: 11280,
    topQuestions: [
      {
        question: "Bundela-Mughal fusion in Orchha Chhatris & Jahangir Mahal",
        place: "Orchha",
        count: 4120,
        mode: "History & Architecture",
      },
      {
        question: "How Jahaz Mahal harvested monsoon water between twin lakes",
        place: "Mandu",
        count: 3480,
        mode: "History & Architecture",
      },
      {
        question: "Visiting Pranpur weaver village and Battisi Baoli",
        place: "Chanderi",
        count: 2790,
        mode: "Quick Summary",
      },
    ],
    languagesUsed: [
      { language: "हिंदी (Hindi)", share: 41, queries: 11644 },
      { language: "English | हिंदी (Bilingual)", share: 31, queries: 8804 },
      { language: "मराठी (Marathi)", share: 14, queries: 3976 },
      { language: "ગુજરાતી (Gujarati)", share: 8, queries: 2272 },
      { language: "Others", share: 6, queries: 1704 },
    ],
    popularPlaces: [
      { name: "Orchha", state: "Madhya Pradesh", type: "Small Town / Qasba", visits: 11620 },
      { name: "Mandu", state: "Madhya Pradesh", type: "Small Town / Qasba", visits: 7940 },
      { name: "Chanderi", state: "Madhya Pradesh", type: "Small Town / Qasba", visits: 6810 },
    ],
    mostSearchedFacilities: [
      { facility: "Shaded Seating & Drinking Water", searches: 7420, satisfactionPct: 68 },
      { facility: "Public Toilets near Fort Gates", searches: 6180, satisfactionPct: 59 },
      { facility: "Verified Handloom Cooperatives", searches: 4920, satisfactionPct: 83 },
    ],
    signageGaps: [
      {
        state: "Orchha & Chanderi",
        siteType: "Fort Murals & Stepwells",
        gapDescription: "Visitors request Marathi and English audio guides for Lakshmi Narayan murals and Battisi Baoli.",
        priority: "High",
      },
      {
        state: "Mandu Plateau",
        siteType: "Sprawling Royal Enclaves",
        gapDescription: "Inter-monument e-auto fare boards and seasonal drinking water stops needed during summer.",
        priority: "Medium",
      },
    ],
  },
  {
    region: "South & East India",
    totalQueries: 39600,
    smallTownShare: 41,
    regionalLangShare: 69,
    audioPlayCount: 14950,
    topQuestions: [
      {
        question: "Nagara vs. Dravida spire differences inside Pattadakal complex",
        place: "Pattadakal, KA",
        count: 3540,
        mode: "History & Architecture",
      },
      {
        question: "Decoding terracotta Ramayana plaques at Shyamrai Temple",
        place: "Bishnupur, WB",
        count: 3780,
        mode: "Camera Scan",
      },
      {
        question: "Raghurajpur Pattachitra workshop etiquette & Konark timings",
        place: "Puri, OD",
        count: 3190,
        mode: "Quick Summary",
      },
    ],
    languagesUsed: [
      { language: "தமிழ் (Tamil)", share: 24, queries: 9504 },
      { language: "বাংলা (Bengali)", share: 21, queries: 8316 },
      { language: "English | हिंदी", share: 22, queries: 8712 },
      { language: "ಕನ್ನಡ (Kannada)", share: 16, queries: 6336 },
      { language: "ଓଡ଼ିଆ / తెలుగు / മലയാളം", share: 17, queries: 6732 },
    ],
    popularPlaces: [
      { name: "Madurai", state: "Tamil Nadu", type: "Heritage City", visits: 12450 },
      { name: "Puri", state: "Odisha", type: "Heritage City", visits: 11800 },
      { name: "Bishnupur", state: "West Bengal", type: "Small Town / Qasba", visits: 8940 },
      { name: "Pattadakal", state: "Karnataka", type: "Small Town / Qasba", visits: 6190 },
    ],
    mostSearchedFacilities: [
      { facility: "Clean Footwear & Cloakrooms", searches: 9840, satisfactionPct: 71 },
      { facility: "Drinking Water & Shade", searches: 9120, satisfactionPct: 74 },
      { facility: "Wheelchair & Battery Carts", searches: 6250, satisfactionPct: 79 },
    ],
    signageGaps: [
      {
        state: "Bishnupur & Raghurajpur",
        siteType: "Terracotta & Living Craft Villages",
        gapDescription: "Multi-language audio stories in Bengali, Odia, and Hindi boost small-town dwell time by 45%.",
        priority: "Medium",
      },
      {
        state: "Pattadakal & Badami",
        siteType: "Chalukyan Architecture",
        gapDescription: "Need tactile maps and Telugu/Hindi signage near Malaprabha riverside temples.",
        priority: "Medium",
      },
    ],
  },
];
