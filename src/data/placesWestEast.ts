import { PlaceDossier } from "../types";
import {
  IMG_CRAFTS_ODOP,
  IMG_ORCHHA_CHHATRIS,
  IMG_TEMPLE_CARVING,
} from "./placesNorthCentral";

export const PLACES_WEST_EAST: PlaceDossier[] = [
  {
    id: "jaipur-rj",
    name: "Jaipur",
    displayName: "Jaipur (Rajasthan)",
    state: "Rajasthan",
    group: "heritage_city",
    regionCategory: "UNESCO Walled Heritage City",
    tagline: "1727 CE Vastu-planned Pink City, Jantar Mantar astronomy, and Blue Pottery",
    overview:
      "Founded in 1727 CE by Sawai Jai Singh II and architect Vidyadhar Bhattacharya on Vastu grid geometry, Jaipur pairs terracotta-pink bazaars with astronomical precision and living crafts.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "In 1727 CE, Kachwaha ruler Sawai Jai Singh II shifted his capital from hilltop Amer onto the plains, collaborating with Bengali architect Vidyadhar Bhattacharya to lay out nine rectangular sectors on Shilpa Shastra Vastu principles. In 1734 CE he completed the UNESCO Jantar Mantar observatory, and Sawai Pratap Singh added Hawa Mahal in 1799 CE.",
      originLegends:
        "Jaipur's signature terracotta-pink paint dates to 1876 CE under Sawai Ram Singh II—chosen to welcome Prince Albert because pink symbolized warmth and hospitality in Rajputana court tradition.",
      turningPoints: [
        { era: "1727 CE", milestone: "Sawai Jai Singh II founds Jaipur as India's first grid-planned modern city." },
        { era: "1734 – 1799 CE", milestone: "Jantar Mantar astronomical park and 953-window Hawa Mahal completed." },
        { era: "2019 CE", milestone: "Walled City of Jaipur inscribed as a UNESCO World Heritage Site." },
      ],
    },
    samplePrompts: [
      "How does Jantar Mantar's Samrat Yantra tell time to 2 seconds?",
      "Tell me about Panna Meena Ka Kund stepwell in Amer",
      "Explain Jaipur Blue Pottery and Sanganer block prints",
    ],
    featuredGuide: {
      title: "Hawa Mahal & Jantar Mantar Observatory · हवा महल व जंतर मंतर",
      recordedHistoryAndFacts:
        "Built in 1734 CE, Jantar Mantar houses 19 masonry astronomical instruments including the 27-metre Samrat Yantra sundial accurate to two seconds. Nearby Hawa Mahal (1799 CE) uses 953 jharokha windows to cool chambers via Venturi airflow.",
      folkloreAndLocalTradition:
        "Painted terracotta-pink in 1876 CE as a gesture of royal hospitality, Jaipur's arcades let royal court ladies watch Teej and Gangaur processions unseen.",
      accessibilityNotes:
        "Jantar Mantar features broad flat sandstone pathways; Hawa Mahal uses interior ramps instead of stairs on lower levels.",
      practicalTips:
        "Buy the Rajasthan Composite Ticket covering Amer, Hawa Mahal, Jantar Mantar, and Albert Hall.",
    },
    sightseeingSpots: [
      {
        name: "Jantar Mantar & City Palace",
        spotType: "UNESCO Astronomical Park",
        description: "18th-century stone sundials beside royal Mubarak Mahal textile galleries.",
        bestTime: "9:00 AM – 11:30 AM",
        entryFee: "₹50 Indian · ₹200 Foreign (Jantar Mantar)",
        duration: "1 hr 30 mins",
        routeDirections: "4.5 km east of Jaipur Junction via MI Road and Tripolia Bazaar.",
        transportTip: "Jaipur Metro to Badi Chaupar Station, then 3-min walk.",
        mapQuery: "Jantar Mantar Jaipur Rajasthan",
      },
      {
        name: "Amer Fort & Panna Meena Ka Kund",
        spotType: "Hill Palace & Octagonal Stepwell",
        description: "16th-century Rajput-Mughal hill fort overlooking Maota Lake and geometric Amer stepwell.",
        bestTime: "8:00 AM – 11:00 AM",
        entryFee: "₹100 Indian · ₹500 Foreign",
        duration: "2 hrs",
        routeDirections: "11 km north of Walled City on Amer Road.",
        transportTip: "AC low-floor bus or cab to Amer Suraj Pol.",
        mapQuery: "Amer Fort Jaipur Rajasthan",
      },
      {
        name: "Hawa Mahal",
        spotType: "1799 CE Honeycomb Facade",
        description: "Five-storey pink-sandstone crown with 953 ventilated jharokhas.",
        bestTime: "8:30 AM (morning sun hits east facade)",
        entryFee: "₹50 Indian · ₹200 Foreign",
        duration: "45 mins",
        routeDirections: "200 m north of Badi Chaupar Metro Station.",
        transportTip: "Level sidewalk viewing across Sireh Deori Bazaar.",
        mapQuery: "Hawa Mahal Jaipur",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Badi Chaupar to Jantar Mantar & Tripolia Bazaar",
        walkTime: "Start · 35 min",
        summary: "Walk beneath Jaipur's 1727 covered pink colonnades.",
        audioStory: "Watch the shadow glide smoothly across the Samrat Yantra marble quadrant.",
        accessibilityNote: "Wheelchair-accessible flat walkways.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Amer Fort, Panna Meena Stepwell & Johari Bazaar",
        walkTime: "Morning · 3.5 hrs",
        summary: "Pair Amer's hill fortress with afternoon bazaar walks.",
        audioStory: "Compare Rajputana mirror-work in Sheesh Mahal with Sanganeri block prints.",
        accessibilityNote: "Vehicle access up to Amer upper court.",
      },
    ],
    famousFoods: [
      {
        dishName: "Pyaaz Kachori & Malai Ghevar",
        dietary: "Veg",
        priceRange: "₹50 – ₹180",
        bestTimeOfDay: "Morning & Evening",
        description: "Flaky spiced onion kachori paired with honeycomb-crisp milk-cream Ghevar.",
        iconicSpot: "Rawat Mishthan Bhandar & LMB (Johari Bazaar)",
        foodStreetArea: "Johari Bazaar & Station Road",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Laxmi Misthan Bhandar Johari Bazaar Jaipur",
      },
      {
        dishName: "Dal Baati Churma",
        dietary: "Veg",
        priceRange: "₹220 – ₹450",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Charcoal-baked wheat baatis soaked in ghee with five-lentil panchmel dal and sweet churma.",
        iconicSpot: "Santosh Bhojanalaya & Chokhi Dhani",
        foodStreetArea: "Sindhi Camp & Tonk Road",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        mapQuery: "Johari Bazaar Jaipur",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Johari Bazaar, Bapu Bazaar & Sanganer",
        famousFor: "Jaipur Blue Pottery (ODOP), Lac Bangles & Sanganeri Block Prints",
        odopOrCraftLabel: "GI Certified · Jaipur ODOP",
        timings: "10:30 AM – 9:00 PM",
        closedDay: "Sundays (some wholesale shops)",
        authenticityTip: "Buy quartz-paste Blue Pottery from Neerja or Rajasthali emporium; expect mild bargaining on textiles.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Johari Bazaar Jaipur Rajasthan",
      },
    ],
    localHighlights: [
      {
        title: "Teej & Gangaur Heritage Processions",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "Monsoon & Spring Festivals",
        description: "Traditional royal processions passing Tripolia Gate with folk musicians.",
        whereToFind: "Tripolia Bazaar.",
        mapQuery: "Tripolia Gate Jaipur",
      },
    ],
    nearestHospital: {
      name: "Sawai Man Singh (SMS) Hospital",
      area: "JLN Marg, Central Jaipur",
      phone: "0141-2518222",
      note: "24x7 apex trauma care (108 / 112).",
    },
    facilities: [
      { name: "Jantar Mantar Visitor Restrooms", type: "Public Toilets", landmark: "Ticket Courtyard", hours: "9:00 AM – 5:00 PM", accessibility: "Wheelchair accessible" },
      { name: "Badi Chaupar Metro Water", type: "Drinking Water", landmark: "Concourse Level", hours: "6:00 AM – 10:30 PM", accessibility: "Elevators" },
    ],
  },
  {
    id: "bundi-rj",
    name: "Bundi",
    displayName: "Bundi (Rajasthan)",
    state: "Rajasthan",
    group: "small_town",
    regionCategory: "Small Stepwell & Mural Town · Hadoti",
    tagline: "50+ carved stepwells, Garh Palace Bundi miniatures, and blue-washed lanes",
    overview:
      "Nestled in a narrow Aravalli gorge in Hadoti, Bundi preserves over fifty medieval stepwells (baolis), Taragarh Fort, and turquoise-and-gold Bundi school murals.",
    heroImage: IMG_TEMPLE_CARVING,
    storyOfOrigin: {
      howItBegan:
        "Founded in 1342 CE by Rao Deva Hada Chauhan after taking the valley from Meena chieftains, Bundi grew into the capital of Hadoti. Between the 16th and 18th centuries, Hada rulers built Garh Palace—famed for its Chitrashala mural gallery—and Queens like Nathavati commissioned Raniji ki Baori (1699 CE).",
      originLegends:
        "Named after Meena chieftain Bunda Meena, Bundi also inspired Rudyard Kipling during his stay at Sukh Mahal beside Jait Sagar Lake.",
      turningPoints: [
        { era: "1342 CE", milestone: "Rao Deva establishes Hada Rajput rule and Taragarh hill fortifications." },
        { era: "1607 – 1773 CE", milestone: "Chhatra Mahal and Chitrashala murals define the Bundi school of Rajasthani painting." },
        { era: "1699 CE", milestone: "Queen Nathavati constructs the 46-metre-deep Raniji ki Baori stepwell." },
      ],
    },
    samplePrompts: [
      "Tell me about Raniji ki Baori and Bundi's 50 stepwells",
      "What is unique about Bundi's Chitrashala wall paintings?",
      "Explain Taragarh Fort and Sukh Mahal",
    ],
    featuredGuide: {
      title: "Raniji Ki Baori & Chitrashala · रानीजी की बावड़ी, बूंदी",
      recordedHistoryAndFacts:
        "Constructed in 1699 CE by Queen Nathavati during Rao Raja Anirudh Singh's reign, Raniji ki Baori descends 46 metres through pillared pavilions and carved elephant toranas. Above town, Garh Palace's Chitrashala preserves 18th-century frescoes.",
      folkloreAndLocalTradition:
        "Hadoti elders recall Bundi's stepwells not merely as cisterns but cool summer resting shelters where travellers shared water across communities.",
      accessibilityNotes:
        "Raniji ki Baori is viewable safely from the street-level entrance pavilion; Garh Palace has steep cobbled ramps.",
      practicalTips:
        "Buy the combined stepwell ticket covering Raniji ki Baori, Sukh Mahal, and 84 Pillared Cenotaph.",
    },
    sightseeingSpots: [
      {
        name: "Raniji Ki Baori (Queen's Stepwell)",
        spotType: "1699 CE Carved Stepwell",
        description: "46-metre-deep multi-storey sandstone stepwell adorned with carved arches.",
        bestTime: "8:30 AM – 11:00 AM",
        entryFee: "₹25 Indian · ₹200 Foreign",
        duration: "35 mins",
        routeDirections: "4 km north of Bundi Railway Station in Sadar Bazaar.",
        transportTip: "Auto-rickshaw drops directly at Baori gate.",
        mapQuery: "Raniji Ki Baori Bundi Rajasthan",
      },
      {
        name: "Garh Palace & Chitrashala",
        spotType: "Hillside Mural Palace",
        description: "Rajasthani miniature frescoes painted across shaded palace verandahs.",
        bestTime: "9:00 AM – 4:30 PM",
        entryFee: "₹100 Indian",
        duration: "1 hr 15 mins",
        routeDirections: "500 m uphill from Sadar Bazaar.",
        transportTip: "Steep cobbled ramp—wear gripping footwear.",
        mapQuery: "Garh Palace Chitrashala Bundi",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Raniji Ki Baori to Dhabhai Kund",
        walkTime: "Start · 25 min",
        summary: "Compare two monumental Hadoti stepwells along quiet blue-washed streets.",
        audioStory: "Look down the rhythmic rows of steps engineered to retain monsoon water year-round.",
        accessibilityNote: "Level street views at both stepwells.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Chitrashala, Nawal Sagar & 84 Pillared Cenotaph",
        walkTime: "Morning · 2.5 hrs",
        summary: "Explore frescoed murals and the 1683 CE 84-pillared sandstone chhatri.",
        audioStory: "Count the finely carved sandstone columns supporting the massive two-tiered dome.",
        accessibilityNote: "Auto connects lakeside and cenotaph effortlessly.",
      },
    ],
    famousFoods: [
      {
        dishName: "Kadhi Kachori & Dal Baati",
        dietary: "Veg",
        priceRange: "₹35 – ₹160",
        bestTimeOfDay: "Morning & Lunch",
        description: "Crisp urad-dal kachori soaked in warm spiced gram-flour kadhi.",
        iconicSpot: "Sadar Bazaar & Khoja Gate Stalls",
        foodStreetArea: "Sadar Bazaar, Bundi",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Sadar Bazaar Bundi Rajasthan",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Sadar Bazaar & Kota Doria / Miniature Studios",
        famousFor: "Bundi-school miniature paintings & nearby Kaithoon Kota Doria weaves",
        odopOrCraftLabel: "Hadoti Artisan Craft",
        timings: "10:00 AM – 8:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Look for natural stone-pigment miniatures painted on handmade wasli paper.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Sadar Bazaar Bundi",
      },
    ],
    localHighlights: [
      {
        title: "Bundi Utsav & Kajli Teej",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "November / August",
        description: "Stepwell lamp lighting and folk music at Nawal Sagar.",
        whereToFind: "Bundi Town.",
        mapQuery: "Nawal Sagar Lake Bundi",
      },
    ],
    nearestHospital: {
      name: "Maharao Ummed Singh District Hospital",
      area: "Hospital Road, Bundi",
      phone: "0747-2442022",
      note: "24x7 emergency & ambulance (108).",
    },
    facilities: [
      { name: "Raniji Ki Baori Restrooms", type: "Public Toilets", landmark: "Gate Courtyard", hours: "8:00 AM – 5:30 PM", accessibility: "Ground level" },
    ],
  },
  {
    id: "patan-gj",
    name: "Patan",
    displayName: "Patan (Gujarat)",
    state: "Gujarat",
    group: "small_town",
    regionCategory: "UNESCO Stepwell & Weaver Town · North Gujarat",
    tagline: "11th-century Rani ki Vav stepwell and 900-year-old double-ikat Patola silk",
    overview:
      "Once the medieval Solanki capital of Gujarat (Anhilwad Patan), Patan safeguards the UNESCO Rani ki Vav subterranean stepwell and the rare Patan Patola double-ikat weaving lineage.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Founded in 746 CE as Anhilpur Patan by Chavda ruler Vanraj Chavda, Patan flourished as Gujarat's capital under the Solanki (Chaulukya) dynasty (10th–13th century CE). Queen Udayamati commissioned Rani ki Vav around 1063 CE as a seven-storey inverted temple honouring water, while Salvi weavers settled here under Kumarpal Solanki.",
      originLegends:
        "Solanki chroniclers remember Queen Udayamati building Rani ki Vav in loving memory of King Bhimdev I, and folklore claims a subterranean tunnel once linked the lowest gallery to nearby Sidhpur.",
      turningPoints: [
        { era: "746 CE", milestone: "Vanraj Chavda establishes Anhilwad Patan." },
        { era: "c. 1063 CE", milestone: "Queen Udayamati commissions the Maru-Gurjara sculpted Rani ki Vav." },
        { era: "2014 CE", milestone: "Rani ki Vav inscribed on the UNESCO World Heritage List; featured on India's ₹100 note." },
      ],
    },
    samplePrompts: [
      "How was Rani ki Vav engineered seven storeys underground?",
      "Explain the double-ikat Patan Patola weaving technique",
      "Tell me about Sahastralinga Talao nearby",
    ],
    featuredGuide: {
      title: "Rani Ki Vav & Patola Museum · રાણી की વાવ, પાટણ",
      recordedHistoryAndFacts:
        "Built in the late 11th century CE in Maru-Gurjara style by Queen Udayamati, Rani ki Vav descends seven levels with over 500 major stone sculptures of Vishnu's Dashavatara and celestial apsaras.",
      folkloreAndLocalTradition:
        "Silted over for centuries by Saraswati floods, local elders preserved memories of the buried 'Queen's Stepwell' until ASI excavations unveiled its pristine carvings in the 1980s.",
      accessibilityNotes:
        "Wheelchair users can access the landscaped upper lawn and view the dramatic sunken terraces from the broad rim parapet without descending steep steps.",
      practicalTips:
        "Visit at 8:30 AM before midday sun; pair with the Salvi Patola Heritage Museum 2 km away.",
    },
    sightseeingSpots: [
      {
        name: "Rani Ki Vav (UNESCO Stepwell)",
        spotType: "11th-Century Stepwell",
        description: "Seven-level subterranean sculpted stepwell featured on India's ₹100 banknote.",
        bestTime: "8:00 AM – 10:30 AM",
        entryFee: "₹40 Indian · ₹600 Foreign",
        duration: "1 hr 15 mins",
        routeDirections: "3 km northwest of Patan Railway Station via Rajmahel Road.",
        transportTip: "Auto from Patan Station (10 mins).",
        mapQuery: "Rani Ki Vav Patan Gujarat",
      },
      {
        name: "Patan Patola Heritage Museum",
        spotType: "Living Weaver Museum",
        description: "Watch Salvi family master weavers tie-dye both warp and weft before weaving.",
        bestTime: "10:00 AM – 5:30 PM",
        entryFee: "₹150",
        duration: "45 mins",
        routeDirections: "Near Salviwada, 2 km south of Rani ki Vav.",
        transportTip: "Short auto ride; ground-floor loom hall.",
        mapQuery: "Patan Patola Heritage Museum Gujarat",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Rani Ki Vav Upper Lawn & Terraces",
        walkTime: "Start · 35 min",
        summary: "Explore the subterranean galleries and sculpted Dashavatara panels.",
        audioStory: "Designed as an inverted temple honouring water's sanctity in arid North Gujarat.",
        accessibilityNote: "Flat lawn rim viewing for wheelchair users.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Rani Ki Vav, Sahastralinga Talao & Patola Looms",
        walkTime: "Morning · 3 hrs",
        summary: "Link Solanki hydraulic reservoirs with Salviwada's 900-year-old silk looms.",
        audioStory: "A single Patan Patola saree can take four to six months of precision tie-dyeing.",
        accessibilityNote: "Auto connects all three stops.",
      },
    ],
    famousFoods: [
      {
        dishName: "Patan Devda Sweet & Gujarati Farsan",
        dietary: "Veg",
        priceRange: "₹60 – ₹180",
        bestTimeOfDay: "Morning & Afternoon",
        description: "Cardamom-nutmeg crisp flour-and-khoya sweet unique to Patan alongside crisp Khaman and Fafda.",
        iconicSpot: "Hinglaj Chachar Sweet Shops",
        foodStreetArea: "Hinglaj Chachar / Station Road",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Hinglaj Chachar Patan Gujarat",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Salviwada Patola Weavers & Patan Bazaar",
        famousFor: "GI-tagged Double-Ikat Patan Patola Silk & Mashru textiles",
        odopOrCraftLabel: "GI Certified · Patan Craft",
        timings: "10:00 AM – 7:00 PM",
        closedDay: "Sundays (Museum closed)",
        authenticityTip: "True double-ikat Patola looks identical on both front and back faces.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Salviwada Patan Gujarat",
      },
    ],
    localHighlights: [
      {
        title: "Modhera Sun Temple",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "35 km South · 1026 CE Solanki Monument",
        description: "Monumental Surya Kund stepped tank and carved Sabhamandapa.",
        whereToFind: "Modhera, Mehsana.",
        mapQuery: "Modhera Sun Temple Gujarat",
      },
    ],
    nearestHospital: {
      name: "General Hospital Patan / GMERS Dharpur",
      area: "Patan–Unjha Highway",
      phone: "108",
      note: "24x7 emergency & ambulance (108).",
    },
    facilities: [
      { name: "Rani Ki Vav ASI Restrooms & Water", type: "Public Toilets", landmark: "Ticket Garden Gate", hours: "8:00 AM – 6:00 PM", accessibility: "Wheelchair ramps" },
    ],
  },
  {
    id: "pune-mh",
    name: "Pune",
    displayName: "Pune (Maharashtra)",
    state: "Maharashtra",
    group: "heritage_city",
    regionCategory: "Maratha Heritage & Cultural Capital",
    tagline: "Shaniwar Wada, 8th-century Pataleshwar cave, and Sahyadri hill forts",
    overview:
      "At the confluence of the Mula and Mutha rivers, Pune bridges Rashtrakuta rock-cut caves, Shivaji Maharaj's Lal Mahal childhood heritage, Peshwa wadas, and vibrant Marathi culinary lanes.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    storyOfOrigin: {
      howItBegan:
        "Copper-plate inscriptions from 758 CE and 768 CE under Rashtrakuta rule name the settlement 'Punyavishaya', and the rock-cut Pataleshwar cave temple dates to the 8th century CE. In the 17th century, Jijabai and young Shivaji Maharaj revived Kasba Peth from Lal Mahal, followed by Peshwa Bajirao I constructing Shaniwar Wada in 1732 CE.",
      originLegends:
        "Local lore connects Pune's name ('Punyanagari') to the sacred confluence of the Mula and Mutha rivers, while Peshwa chronicles preserve tales of the massive teak-and-stone Delhi Darwaza resisting war elephants.",
      turningPoints: [
        { era: "8th Century CE", milestone: "Pataleshwar monolithic basalt cave excavated near the Mutha river." },
        { era: "1630 – 1645 CE", milestone: "Jijabai and Shivaji Maharaj rebuild Pune's Kasba Ganpati and Lal Mahal." },
        { era: "1732 CE", milestone: "Peshwa Bajirao I inaugurates Shaniwar Wada as the Maratha Confederacy's administrative seat." },
      ],
    },
    samplePrompts: [
      "Tell me about Shaniwar Wada and Lal Mahal",
      "What is the history of 8th-century Pataleshwar Cave Temple?",
      "Explain Pune's iconic Tulsi Baug and Laxmi Road markets",
    ],
    featuredGuide: {
      title: "Shaniwar Wada & Kasba Peth · शनिवार वाडा, पुणे",
      recordedHistoryAndFacts:
        "Completed in 1732 CE as the fortified residence of the Peshwas, Shaniwar Wada preserves its monumental spiked teak Dilli Darwaza, stone plinths, and lotus-shaped Hazari Karanje fountain after an 1828 fire destroyed upper timber storeys.",
      folkloreAndLocalTradition:
        "Kasba Ganpati nearby remains Pune's revered 'Gramdaivat' (first honoured Ganesha) since Jijabai's 17th-century consecration, anchoring the annual Ganeshotsav tradition.",
      accessibilityNotes:
        "Shaniwar Wada's landscaped garden plinths and Pataleshwar's flat courtyard are wheelchair accessible.",
      practicalTips:
        "Pair morning Kasba Peth heritage walks with breakfast Misal or Sabudana Khichdi on Laxmi Road.",
    },
    sightseeingSpots: [
      {
        name: "Shaniwar Wada & Lal Mahal",
        spotType: "18th-Century Maratha Citadel",
        description: "Historic Peshwa stone fortification gates, fountain courtyards, and reconstructed Lal Mahal.",
        bestTime: "8:30 AM – 11:00 AM",
        entryFee: "₹25 Indian · ₹300 Foreign",
        duration: "1 hr",
        routeDirections: "3 km west of Pune Junction Railway Station in Shaniwar Peth.",
        transportTip: "Pune Metro to PMC or Kasba Peth station (5-min walk).",
        mapQuery: "Shaniwar Wada Pune Maharashtra",
      },
      {
        name: "Pataleshwar Rock-Cut Cave Temple",
        spotType: "8th-Century Basalt Cave",
        description: "Monolithic Rashtrakuta-era Shiva cave temple with circular Nandi pavilion right inside the city.",
        bestTime: "8:00 AM – 5:30 PM",
        entryFee: "Free",
        duration: "35 mins",
        routeDirections: "1.5 km northwest of Shaniwar Wada on Jangli Maharaj Road.",
        transportTip: "Auto from Shivajinagar Station (5 mins).",
        mapQuery: "Pataleshwar Cave Temple Pune",
      },
      {
        name: "Raja Dinkar Kelkar Museum",
        spotType: "Folk & Everyday Craft Museum",
        description: "Extraordinary 20,000-piece collection of Indian lamps, nutcrackers, musical instruments, and Mastani Mahal.",
        bestTime: "10:00 AM – 5:30 PM",
        entryFee: "₹80",
        duration: "1 hr 30 mins",
        routeDirections: "1.2 km south of Shaniwar Wada on Bajirao Road.",
        transportTip: "Auto to Shukrawar Peth.",
        mapQuery: "Raja Dinkar Kelkar Museum Pune",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Kasba Peth, Lal Mahal & Shaniwar Wada",
        walkTime: "Start · 35 min",
        summary: "Walk Pune's oldest civic core from 17th-century shrines to Dilli Darwaza.",
        audioStory: "Observe the 72 iron spikes on Dilli Darwaza designed to repel elephant charges.",
        accessibilityNote: "Level city sidewalks and garden plaza.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Pataleshwar Cave, Shaniwar Wada & Kelkar Museum",
        walkTime: "Morning · 3 hrs",
        summary: "Journey from 8th-century basalt carving to Maratha folk artistry.",
        audioStory: "Explore thousands of handcrafted everyday Indian objects inside Kelkar Museum.",
        accessibilityNote: "Metro & auto connections throughout.",
      },
    ],
    famousFoods: [
      {
        dishName: "Puneri Misal Pav, Kanda Pohe & Mastani",
        dietary: "Veg",
        priceRange: "₹80 – ₹180",
        bestTimeOfDay: "Morning & Evening",
        description: "Spiced sprouted-moth curry topped with crunchy farsan beside thick mango-ice-cream Mastani.",
        iconicSpot: "Bedekar Misal, Katakir & Sujata Mastani",
        foodStreetArea: "Narayan Peth & Sadashiv Peth",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Bedekar Misal Narayan Peth Pune",
      },
      {
        dishName: "Puran Poli & Bhakarwadi",
        dietary: "Veg",
        priceRange: "₹60 – ₹220",
        bestTimeOfDay: "All Day",
        description: "Warm jaggery-lentil stuffed flatbread and crisp spiced Chitale Bandhu Bhakarwadi spirals.",
        iconicSpot: "Chitale Bandhu Mithaiwale",
        foodStreetArea: "Bajirao Road / Deccan",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Chitale Bandhu Bajirao Road Pune",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Laxmi Road & Tulsi Baug Heritage Market",
        famousFor: "Paithani & Narayanpeth Sarees, copperware & Kolhapuri chappals",
        odopOrCraftLabel: "Maharashtra Handloom Hub",
        timings: "10:00 AM – 9:00 PM",
        closedDay: "Mondays (some shops)",
        authenticityTip: "Visit Narayan Peth weavers or established Laxmi Road stores for pure silk Paithani.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Laxmi Road Pune",
      },
    ],
    localHighlights: [
      {
        title: "Sinhagad Hill Fort",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "30 km Southwest · Sahyadri Fort",
        description: "Dramatic ridge fort linked to Tanaji Malusare's 1670 CE campaign.",
        whereToFind: "Donje / Sinhagad Ghat Road.",
        mapQuery: "Sinhagad Fort Pune",
      },
    ],
    nearestHospital: {
      name: "Sassoon General Hospital / Deenanath Mangeshkar Hospital",
      area: "Near Pune Railway Station / Erandwane",
      phone: "020-26128000",
      note: "24x7 trauma care (108 / 112).",
    },
    facilities: [
      { name: "Shaniwar Wada Visitor Restrooms", type: "Public Toilets", landmark: "Main Ticket Gate", hours: "8:00 AM – 6:30 PM", accessibility: "Ground level" },
      { name: "PMC Metro Station Water & Lifts", type: "Drinking Water", landmark: "Near Mutha Bridge", hours: "6:00 AM – 10:00 PM", accessibility: "Elevators" },
    ],
  },
  {
    id: "bishnupur-wb",
    name: "Bishnupur",
    displayName: "Bishnupur (West Bengal)",
    state: "West Bengal",
    group: "small_town",
    regionCategory: "Small Heritage Town · Bankura",
    tagline: "17th-century terracotta temples, Baluchari silk looms, and Dhrupad music",
    overview:
      "Capital of the Malla dynasty (16th–18th century), Bishnupur is celebrated across India for burnt-clay terracotta temples, Panchmura pottery, and classical Bishnupur Gharana music.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Ruled by the Malla dynasty from medieval times through the 18th century, Bishnupur flourished culturally under King Bir Hambir (c. 1587–1620 CE) and Raghunatha Singha. Lacking abundant hard granite in Bankura's laterite plains, Malla builders perfected fine carved terracotta plaques fired onto brick temples such as Rasmancha (1600 CE), Shyamrai (1643 CE), and Jor Bangla (1655 CE).",
      originLegends:
        "Named after Lord Vishnu ('Bishnupur') following Bir Hambir's embrace of Gaudiya Vaishnavism, local tradition also credits Goddess Chhinnamasta with firing the Mallas' Dalmadal iron cannon to defend the town.",
      turningPoints: [
        { era: "1600 CE", milestone: "Bir Hambir builds Rasmancha's unique 108-arch pyramidal festival pavilion." },
        { era: "1643 – 1655 CE", milestone: "Shyamrai and Jor Bangla set the apex of Bengali terracotta relief storytelling." },
        { era: "18th – 21st Century", milestone: "Bishnupur Gharana Dhrupad music and GI-tagged Baluchari silk gain national renown." },
      ],
    },
    samplePrompts: [
      "Explain the terracotta carvings on Shyamrai and Jor Bangla Temples",
      "What is the history of Rasmancha?",
      "Tell me about Baluchari silk weaving in Bishnupur",
    ],
    featuredGuide: {
      title: "Rasmancha & Shyamrai Terracotta Temples · রাসমঞ্চ ও শ্যামরায়",
      recordedHistoryAndFacts:
        "Built around 1600 CE by Bir Hambir, Rasmancha is a pyramidal brick monument ringed by 108 pointed arches. Nearby Shyamrai Temple (1643 CE) is Bengal's earliest surviving Pancharatna terracotta temple.",
      folkloreAndLocalTradition:
        "During the Malla-era Rasa festival, idols from every shrine in Bishnupur gathered inside Rasmancha's central altar.",
      accessibilityNotes:
        "ASI lawns around Rasmancha and Shyamrai have flat red-brick walkways comfortable for wheelchairs.",
      practicalTips:
        "Morning light (7:30–9:30 AM) highlights sharp terracotta wall reliefs.",
    },
    sightseeingSpots: [
      {
        name: "Rasmancha & Jor Bangla Temple",
        spotType: "17th-Century Terracotta Monuments",
        description: "Iconic 1600 CE pyramidal pavilion and twin-hut roofed 1655 CE Jor Bangla shrine.",
        bestTime: "7:30 AM – 10:30 AM",
        entryFee: "₹25 Indian · ₹300 Foreign (ASI Composite)",
        duration: "1 hr 15 mins",
        routeDirections: "2 km south of Bishnupur Railway Station via Chowk Bazaar.",
        transportTip: "Cycle-rickshaw or toto (e-rickshaw) connects all temples easily (₹150–₹250 half day).",
        mapQuery: "Rasmancha Bishnupur Bankura West Bengal",
      },
      {
        name: "Shyamrai & Madanmohan Temples",
        spotType: "Pancharatna & Ekaratna Shrines",
        description: "1643 CE five-spired temple with circular Rasa-mandala carvings and 1694 CE Madanmohan shrine.",
        bestTime: "8:30 AM – 4:30 PM",
        entryFee: "Composite ASI Ticket",
        duration: "1 hr",
        routeDirections: "500 m north of Jor Bangla inside old fort moat.",
        transportTip: "Toto-rickshaw drop right at lawn gate.",
        mapQuery: "Shyamrai Temple Bishnupur",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Rasmancha to Jor Bangla & Shyamrai",
        walkTime: "Start · 35 min",
        summary: "Explore three distinct Bengali temple geometries in one short loop.",
        audioStory: "Notice Jor Bangla's curved cornice mimicking bamboo village cottages in fired clay.",
        accessibilityNote: "Flat brick garden pathways.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Terracotta Circuit & Sankhari Baluchari Looms",
        walkTime: "Morning · 3 hrs",
        summary: "Pair Malla temples and Dalmadal Cannon with live silk-weaving homes.",
        audioStory: "A single Baluchari silk pallu takes two to three weeks of jacquard handloom weaving.",
        accessibilityNote: "Toto-rickshaws make movement effortless for seniors.",
      },
    ],
    famousFoods: [
      {
        dishName: "Mecha Sandesh & Posto Bora",
        dietary: "Veg",
        priceRange: "₹40 – ₹160",
        bestTimeOfDay: "Afternoon & Lunch",
        description: "Roasted gram-flour cardamom sweet unique to Bankura, plus crisp poppy-seed fritters.",
        iconicSpot: "Chowk Bazaar Old Sweet Shops",
        foodStreetArea: "Chowk Bazaar & Madanmohanpara",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Chowk Bazaar Bishnupur West Bengal",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Bishnupur Artisans' Haat & Sankhari Bazaar",
        famousFor: "GI-tagged Baluchari Silk Sarees & Bankura Terracotta Horses",
        odopOrCraftLabel: "Bankura GI Craft Hub",
        timings: "10:00 AM – 8:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Look for Panchmura village clay horses and Silk Mark certified Baluchari weaves.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Sankhari Bazaar Bishnupur",
      },
    ],
    localHighlights: [
      {
        title: "Bishnupur Mela & Terracotta Fair",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "December Cultural Fair",
        description: "Bankura crafts, Dhrupad classical music, and Baul folk songs beside Lalbandh.",
        whereToFind: "High School Grounds & Lalbandh.",
        mapQuery: "Lalbandh Bishnupur",
      },
    ],
    nearestHospital: {
      name: "Bishnupur Super Speciality Hospital",
      area: "Station Road",
      phone: "03244-252044",
      note: "24x7 emergency & ambulance (102 / 112).",
    },
    facilities: [
      { name: "ASI Complex Public Toilet", type: "Public Toilets", landmark: "Rasmancha Gate", hours: "7:00 AM – 6:00 PM", accessibility: "Ground level" },
      { name: "Chowk Bazaar Water Point", type: "Drinking Water", landmark: "Bus Terminus", hours: "24 Hours", accessibility: "Step-free" },
    ],
  },
  {
    id: "puri-od",
    name: "Puri",
    displayName: "Puri (Odisha)",
    state: "Odisha",
    group: "heritage_city",
    regionCategory: "Char Dham & Kalinga Heritage Coast",
    tagline: "12th-century Jagannath Kalinga architecture, Raghurajpur Pattachitra, and Mahaprasad",
    overview:
      "Along the Bay of Bengal, Puri combines the 12th-century Kalinga-style Jagannath Temple, Bada Danda chariot boulevard, and Raghurajpur heritage craft village.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "In the 12th century CE, Eastern Ganga king Anantavarman Chodaganga Deva initiated construction of the monumental 65-metre Kalinga Rekha Deul Shri Jagannath Temple, completed under Anangabhima Deva III. In the 18th century, the monolithic chlorite Aruna Stambha was relocated from Konark to Singhadwara.",
      originLegends:
        "Odisha tradition tells of King Indradyumna commissioning the sacred wooden Daru Brahma idols of Jagannath, Balabhadra, and Subhadra—renewed ceremonially during Nabakalebara.",
      turningPoints: [
        { era: "12th Century CE", milestone: "Eastern Ganga rulers construct the towering Shri Jagannath Temple." },
        { era: "13th Century CE", milestone: "Atharanala 18-arch laterite bridge built at Puri's entrance." },
        { era: "18th Century CE – Present", milestone: "Annual Rath Yatra down Bada Danda becomes one of India's grandest living processions." },
      ],
    },
    samplePrompts: [
      "Tell me about the Kalinga architecture of Shri Jagannath Temple",
      "What is Pattachitra painting in Raghurajpur village?",
      "Explain the history of Konark Sun Temple nearby",
    ],
    featuredGuide: {
      title: "Shri Jagannath Temple & Bada Danda · श्री जगन्नाथ मंदिर",
      recordedHistoryAndFacts:
        "Commenced in the 12th century CE by Chodaganga Deva, the Jagannath Temple exemplifies Kalinga Rekha Deul architecture. Note inner sanctum entry is traditionally restricted to practising Hindus, while all visitors admire Singhadwara and Bada Danda.",
      folkloreAndLocalTradition:
        "During Rath Yatra, the three wooden deities travel down Bada Danda on newly handcrafted wooden chariots built without iron nails.",
      accessibilityNotes:
        "Bada Danda is flat and wide; free battery carts and wheelchairs operate between parking zones and Singhadwara.",
      practicalTips:
        "Pair coastal Puri with Raghurajpur Artisan Village (14 km).",
    },
    sightseeingSpots: [
      {
        name: "Singhadwara (Lion's Gate) & Bada Danda",
        spotType: "12th-Century Kalinga Temple Plaza",
        description: "Grand eastern temple facade featuring the 13th-century Konark Aruna Pillar.",
        bestTime: "6:00 AM – 9:30 AM or 6:00 PM – 8:30 PM",
        entryFee: "Free",
        duration: "1 hr",
        routeDirections: "2.5 km southwest of Puri Railway Station along Grand Road.",
        transportTip: "Auto or battery shuttle from Jagannath Ballav parking.",
        mapQuery: "Shri Jagannath Temple Puri Odisha",
      },
      {
        name: "Atharanala 13th-Century Bridge",
        spotType: "Medieval Laterite Bridge",
        description: "18-arch corbelled stone bridge dating to c. 1290 CE at Puri's historic entrance.",
        bestTime: "8:00 AM – 5:00 PM",
        entryFee: "Free",
        duration: "25 mins",
        routeDirections: "3 km north of Puri Station on Bhubaneswar Highway.",
        transportTip: "Quick stop en route to Raghurajpur.",
        mapQuery: "Atharanala Bridge Puri",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Singhadwara to Bada Danda",
        walkTime: "Start · 25 min",
        summary: "Walk the broad paved Grand Road chariot boulevard.",
        audioStory: "Admire the 16-sided monolithic chlorite Aruna Stambha relocated from Konark.",
        accessibilityNote: "Wide flat pedestrian plaza.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Singhadwara, Atharanala & Raghurajpur Village",
        walkTime: "Morning · 3 hrs",
        summary: "Combine temple boulevard architecture with living Pattachitra craft homes.",
        audioStory: "Watch Raghurajpur artists grind conch-shell white and lampblack pigments on stone.",
        accessibilityNote: "Flat shaded village street.",
      },
    ],
    famousFoods: [
      {
        dishName: "Puri Khaja, Dalma & Chhena Poda",
        dietary: "Veg",
        priceRange: "₹50 – ₹180",
        bestTimeOfDay: "All Day",
        description: "Crisp layered sugar-glazed Khaja pastries, mild lentil Dalma, and caramelized baked cottage-cheese cake.",
        iconicSpot: "Grand Road Sweet Shops & Dalma Restaurant",
        foodStreetArea: "Bada Danda & VIP Road",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Bada Danda Puri Odisha",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Raghurajpur Crafts Village & Swargadwar Bazaar",
        famousFor: "GI-tagged Pattachitra scrolls, palm-leaf etchings & Pipili applique",
        odopOrCraftLabel: "GI Certified · Puri Craft",
        timings: "9:00 AM – 6:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Buy directly inside Raghurajpur family studios to watch palm-leaf etching live.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Raghurajpur Heritage Crafts Village Puri",
      },
    ],
    localHighlights: [
      {
        title: "Chilika Lake & Konark Marine Drive",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "35 km East / 50 km South",
        description: "Scenic casuarina coastal drive to Konark Sun Temple.",
        whereToFind: "Puri–Konark Marine Drive.",
        mapQuery: "Konark Sun Temple Odisha",
      },
    ],
    nearestHospital: {
      name: "District Headquarters Hospital, Puri",
      area: "Medical Square, Grand Road",
      phone: "06752-222062",
      note: "24x7 emergency (108 / 112).",
    },
    facilities: [
      { name: "Singhadwara Pilgrim Utility Block", type: "Public Toilets", landmark: "East Plaza", hours: "24 Hours", accessibility: "Wheelchair accessible" },
      { name: "Bada Danda RO Water Kiosks", type: "Drinking Water", landmark: "Grand Road", hours: "24 Hours", accessibility: "Step-free" },
    ],
  },
  {
    id: "konark-od",
    name: "Konark & Raghurajpur",
    displayName: "Konark & Raghurajpur (Odisha)",
    state: "Odisha",
    group: "small_town",
    regionCategory: "UNESCO Sun Chariot & Heritage Craft Village",
    tagline: "13th-century Surya chariot stone wheels and India's living Pattachitra craft village",
    overview:
      "Along Odisha's coastal casuarina belt, Konark's monumental 13th-century Sun Temple pairs naturally with Raghurajpur—where every household crafts Pattachitra scrolls and palm-leaf manuscripts.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Built c. 1250 CE by Eastern Ganga King Narasimhadeva I, the Konark Sun Temple was conceived as a colossal stone chariot of Surya drawn by seven horses on 24 intricately carved khondalite wheels that also act as sundials. Inland near Puri, Raghurajpur evolved as a hereditary Chitrakar (painter) guild supplying ritual pattas for Jagannath festivals.",
      originLegends:
        "Odisha folklore tells of young artisan Dharmapada completing the crowning lotus finial overnight to save his father Bishu Maharana's guild of 1,200 sculptors.",
      turningPoints: [
        { era: "c. 1250 CE", milestone: "Narasimhadeva I completes the Kalinga Sun Chariot temple at Konark." },
        { era: "1903 CE", milestone: "Sand-filling conservation stabilizes the Jagamohana audience hall." },
        { era: "1984 CE – Present", milestone: "Konark inscribed as UNESCO World Heritage; Raghurajpur designated Heritage Crafts Village." },
      ],
    },
    samplePrompts: [
      "How do the 24 stone chariot wheels at Konark act as sundials?",
      "Tell me the legend of young sculptor Dharmapada",
      "How are Pattachitra scrolls painted in Raghurajpur?",
    ],
    featuredGuide: {
      title: "Konark Sun Temple · कोणार्क सूर्य मंदिर",
      recordedHistoryAndFacts:
        "Commissioned c. 1250 CE by Narasimhadeva I, Konark's Jagamohana stands on a high plinth carved with 24 monumental wheels whose spokes mark local solar time.",
      folkloreAndLocalTradition:
        "Folk legend honours boy-architect Dharmapada for completing the temple crown when master builders faltered.",
      accessibilityNotes:
        "Konark's ASI garden paths are smooth and flat with wheelchair ramps up to viewing terraces.",
      practicalTips:
        "Arrive at sunrise (6:30 AM) for soft golden glow on the eastern Natamandira hall.",
    },
    sightseeingSpots: [
      {
        name: "Konark Sun Temple Complex",
        spotType: "UNESCO Kalinga Monument",
        description: "Colossal 13th-century carved stone chariot with sundial wheels and Natamandira.",
        bestTime: "6:30 AM – 9:30 AM",
        entryFee: "₹40 Indian · ₹600 Foreign",
        duration: "1 hr 30 mins",
        routeDirections: "35 km east of Puri via Marine Drive; 65 km southeast of Bhubaneswar.",
        transportTip: "OTDC bus or cab from Puri (45 mins).",
        mapQuery: "Konark Sun Temple Odisha",
      },
      {
        name: "Raghurajpur Heritage Crafts Village",
        spotType: "Living Artisan Village",
        description: "Pedestrian village street where every home paints Pattachitra, tusser, and palm-leaf etchings.",
        bestTime: "9:30 AM – 4:30 PM",
        entryFee: "Free",
        duration: "1 hr 15 mins",
        routeDirections: "14 km north of Puri off NH-316 near Chandanpur.",
        transportTip: "Auto from Puri (25 mins).",
        mapQuery: "Raghurajpur Heritage Crafts Village Odisha",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Konark Natamandira & Chariot Wheels",
        walkTime: "Start · 35 min",
        summary: "Inspect the eastern dance hall and south-wall sundial wheels.",
        audioStory: "Place a finger at the hub of a Konark wheel to see its shadow fall accurately across carved spokes.",
        accessibilityNote: "Smooth ASI lawns and ramps.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Konark Sun Temple & Chandrabhaga Coast",
        walkTime: "Morning · 2 hrs",
        summary: "Explore the temple complex and ASI Archaeological Museum.",
        audioStory: "See surviving colossal sculptures preserved inside the nearby museum.",
        accessibilityNote: "Flat garden grounds.",
      },
    ],
    famousFoods: [
      {
        dishName: "Poda Pitha & Coastal Veg Thali",
        dietary: "Veg",
        priceRange: "₹80 – ₹180",
        bestTimeOfDay: "Lunch",
        description: "Slow-baked jaggery-coconut rice cake and subtle mustard-tempered Odia curries.",
        iconicSpot: "OTDC Yatri Nivas & Raghurajpur Homestays",
        foodStreetArea: "Konark Market Square",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Konark Market Odisha",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Raghurajpur Studios & Pipili Applique Market",
        famousFor: "Pattachitra cloth scrolls, palm-leaf talapatra & Pipili Chandua patchwork",
        odopOrCraftLabel: "Odisha GI Crafts",
        timings: "9:00 AM – 6:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Natural-pigment Pattachitra uses conch-shell white and stone ochre—avoid synthetic glitter.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Pipili Applique Market Odisha",
      },
    ],
    localHighlights: [
      {
        title: "Konark Dance & Sand Art Festival",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "December 1–5 Annually",
        description: "Odissi and classical dance recitals beneath the illuminated Sun Temple.",
        whereToFind: "Konark Open-Air Amphitheatre.",
        mapQuery: "Konark Amphitheatre Odisha",
      },
    ],
    nearestHospital: {
      name: "CHC Gop / District Hospital Puri",
      area: "Konark–Gop Road (8 km)",
      phone: "108",
      note: "Emergency stabilization at Gop CHC; full hospital in Puri.",
    },
    facilities: [
      { name: "ASI Konark Visitor Toilets", type: "Public Toilets", landmark: "Entrance Plaza", hours: "6:00 AM – 7:00 PM", accessibility: "Wheelchair accessible" },
    ],
  },
  {
    id: "nalanda-br",
    name: "Nalanda & Rajgir",
    displayName: "Nalanda & Rajgir (Bihar)",
    state: "Bihar",
    group: "small_town",
    regionCategory: "UNESCO Ancient University & Magadha Valley",
    tagline: "5th-century Mahavihara brick ruins, Rajgir hills, and Madhubani/Tussar crafts",
    overview:
      "In south-central Bihar, Nalanda's UNESCO monastic university ruins pair with Rajgir—the ancient first capital of the Magadha Empire ringed by five hills.",
    heroImage: IMG_TEMPLE_CARVING,
    storyOfOrigin: {
      howItBegan:
        "Rajgir (ancient Rajagriha) served as Magadha's fortified capital by the 6th–5th century BCE under King Bimbisara and Ajatashatru, hosting both the Buddha and Mahavira. Fifteen kilometres north, Gupta Emperor Kumaragupta I founded Nalanda Mahavihara in the 5th century CE—growing into an international residential university visited by Xuanzang and Yijing until the late 12th century.",
      originLegends:
        "Tradition holds Nalanda took its name from a peaceful Naga spirit or from 'Na-alam-da' (the charity that never ceases), while Rajgir's hot springs at Brahmakund are revered across Hindu, Buddhist, and Jain pilgrimages.",
      turningPoints: [
        { era: "6th – 5th Century BCE", milestone: "Rajagriha thrives as Magadha capital; First Buddhist Council held at Saptaparni Cave." },
        { era: "5th – 8th Century CE", milestone: "Gupta and Harshavardhana patronage builds Nalanda's eleven brick monasteries and great stupa." },
        { era: "2016 CE", milestone: "Nalanda Mahavihara inscribed as a UNESCO World Heritage Site." },
      ],
    },
    samplePrompts: [
      "What was daily student life like at 5th-century Nalanda Mahavihara?",
      "Tell me about Rajgir's Cyclopean Wall and Griddhakuta Hill",
      "Explain the history of Xuanzang Memorial Hall",
    ],
    featuredGuide: {
      title: "Nalanda Mahavihara Ruins · नालंदा महाविहार",
      recordedHistoryAndFacts:
        "Founded in the 5th century CE under Gupta patronage, Nalanda Mahavihara covers 23 hectares of red-brick monasteries, lecture courtyards, and the towering Sariputra Stupa (Temple Site 3) preserving stucco Gupta Buddha niches.",
      folkloreAndLocalTradition:
        "Accounts by Chinese scholar Xuanzang (7th century CE) describe rigorous oral debates at Nalanda's gatehouse and a multi-storey library complex known as Dharmaganja.",
      accessibilityNotes:
        "Nalanda's ASI archaeological park has wide, flat paved paths and manicured lawns suitable for wheelchairs and seniors.",
      practicalTips:
        "Visit the ASI Nalanda Museum directly opposite the ruins first for sculptural context (closed Fridays).",
    },
    sightseeingSpots: [
      {
        name: "Nalanda Mahavihara UNESCO Ruins",
        spotType: "5th-Century Brick University",
        description: "Eleven monastic quadrangles, courtyard wells, and Sariputra Great Stupa.",
        bestTime: "8:00 AM – 11:00 AM",
        entryFee: "₹40 Indian · ₹600 Foreign",
        duration: "1 hr 45 mins",
        routeDirections: "3 km west of Nalanda Railway Station; 15 km north of Rajgir.",
        transportTip: "Tonga or e-rickshaw from Nalanda Bus Stand.",
        mapQuery: "Nalanda University Ruins Bihar",
      },
      {
        name: "Rajgir Vishwa Shanti Stupa & Venuvana",
        spotType: "Magadha Hilltop & Monastery Park",
        description: "Peace Pagoda atop Ratnagiri Hill (chairlift/ropeway) and King Bimbisara's bamboo grove.",
        bestTime: "8:30 AM – 4:30 PM",
        entryFee: "Free (Ropeway ₹120)",
        duration: "1 hr 30 mins",
        routeDirections: "3 km south of Rajgir Railway Station.",
        transportTip: "Ropeway cabin seats elderly visitors comfortably up Ratnagiri Hill.",
        mapQuery: "Vishwa Shanti Stupa Rajgir Bihar",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Sariputra Stupa & Monastery Quadrangles",
        walkTime: "Start · 40 min",
        summary: "Walk the central brick avenue separating ancient residential viharas from temples.",
        audioStory: "Imagine ten thousand students from across Asia debating logic, medicine, and astronomy inside these brick courtyards.",
        accessibilityNote: "Flat paved lawns and shaded rest benches.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Nalanda Ruins, ASI Museum & Rajgir Venuvana",
        walkTime: "Morning · 3.5 hrs",
        summary: "Pair Gupta brick monastic architecture with Rajgir's tranquil Magadha valley.",
        audioStory: "Explore Bimbisara's ancient stone jail ruins and the soothing bamboo grove of Venuvana.",
        accessibilityNote: "Toto or cab connects Nalanda and Rajgir in 20 mins.",
      },
    ],
    famousFoods: [
      {
        dishName: "Silao Khaja & Litti Chokha",
        dietary: "Veg",
        priceRange: "₹50 – ₹160",
        bestTimeOfDay: "All Day",
        description: "GI-tagged 52-layer crisp puff pastry from nearby Silao village alongside wood-roasted gram-flour stuffed Litti.",
        iconicSpot: "Silao Village Khaja Stalls",
        foodStreetArea: "Silao Bazaar (between Rajgir & Nalanda)",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Silao Khaja Market Bihar",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Nalanda Craft Stalls & Bihar Emporium",
        famousFor: "GI-tagged Silao Khaja, Madhubani paintings & Bhagalpuri Tussar silk",
        odopOrCraftLabel: "GI Certified · Bihar Heritage",
        timings: "9:30 AM – 7:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Stop at Silao village right on the Rajgir–Nalanda road for oven-warm GI-tagged Khaja.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Nalanda Market Bihar",
      },
    ],
    localHighlights: [
      {
        title: "Rajgir Mahotsav & Kundalpur Jain Tirth",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "Winter Cultural Season",
        description: "Classical dance, folk arts, and nearby Pawapuri Jal Mandir.",
        whereToFind: "Rajgir & Pawapuri.",
        mapQuery: "Pawapuri Jal Mandir Bihar",
      },
    ],
    nearestHospital: {
      name: "Sub-Divisional Hospital Rajgir / VIMS Pawapuri",
      area: "Rajgir Main Road · Pawapuri (18 km)",
      phone: "102",
      note: "24x7 emergency & medical college at Pawapuri.",
    },
    facilities: [
      { name: "ASI Nalanda Visitor Restrooms & Water", type: "Public Toilets", landmark: "Main Entrance Lawn", hours: "8:00 AM – 6:00 PM", accessibility: "Wheelchair accessible" },
    ],
  },
  {
    id: "state-rajasthan",
    name: "Rajasthan",
    displayName: "Rajasthan",
    state: "Rajasthan",
    group: "state_ut",
    regionCategory: "State Heritage Trail",
    tagline: "Hill forts, Chand Baori stepwells, Shekhawati painted havelis, and desert crafts",
    overview:
      "From Jaipur and Bundi's stepwells to Mandawa's frescoed havelis and Kumbhalgarh's 36-km wall, Rajasthan safeguards remarkable water engineering and desert craft traditions.",
    heroImage: IMG_TEMPLE_CARVING,
    storyOfOrigin: {
      howItBegan:
        "Archaeological sites like Kalibangan reveal Harappan urban planning in northern Rajasthan, followed by Pratihara stepwells like Chand Baori (8th–9th century CE), Mewar and Rajputana hill forts (Chittorgarh, Kumbhalgarh, Amber), and 19th-century Shekhawati merchant havelis.",
      originLegends:
        "Bardic ballads of Charans and Bhats celebrate Rajput chivalry, Mirabai's Bhakti poetry in Merta and Chittor, and Pabuji-ki-Phad painted scroll epics.",
      turningPoints: [
        { era: "8th – 9th Century CE", milestone: "Chand Baori at Abhaneri sets the benchmark for desert stepwell engineering." },
        { era: "1448 – 1568 CE", milestone: "Rana Kumbha builds Kumbhalgarh's 36-km Aravalli fortress wall." },
        { era: "2013 – 2019 CE", milestone: "Six Hill Forts of Rajasthan and Jaipur Walled City earn UNESCO status." },
      ],
    },
    samplePrompts: [
      "Tell me about Abhaneri's Chand Baori stepwell",
      "What are Shekhawati's open-air frescoed havelis?",
      "Explain Rajasthan's block printing and Kota Doria crafts",
    ],
    featuredGuide: {
      title: "Chand Baori Stepwell & Shekhawati · आभानेरी चाँद बावड़ी",
      recordedHistoryAndFacts:
        "Dating from the 8th–9th century CE under Nikumbha rulers, Chand Baori at Abhaneri features 3,500 symmetrical steps descending 13 storeys to harvest desert groundwater.",
      folkloreAndLocalTradition:
        "Villagers share tales that Chand Baori was built overnight and that no dropped coin can be retrieved by the same stair flight.",
      accessibilityNotes:
        "Visitors view Chand Baori clearly from the flat stone upper gallery.",
      practicalTips:
        "Pair Abhaneri with Bundi or Mandawa for offbeat small-town Rajasthan.",
    },
    sightseeingSpots: [
      {
        name: "Chand Baori Stepwell (Abhaneri)",
        spotType: "9th-Century Stepwell",
        description: "13-storey symmetrical stepwell beside Pratihara-era Harshat Mata carvings.",
        bestTime: "8:00 AM – 11:00 AM",
        entryFee: "Free / ASI Nominal",
        duration: "45 mins",
        routeDirections: "95 km east of Jaipur along Agra NH-21 via Sikandra.",
        transportTip: "Easy stop between Jaipur and Agra/Mathura.",
        mapQuery: "Chand Baori Abhaneri Rajasthan",
      },
      {
        name: "Kumbhalgarh Fort",
        spotType: "UNESCO Hill Fortress",
        description: "36-km perimeter Aravalli fortress wall and panoramic Badal Mahal.",
        bestTime: "8:30 AM – 11:30 AM",
        entryFee: "₹40 Indian · ₹600 Foreign",
        duration: "2 hrs",
        routeDirections: "84 km north of Udaipur through Aravalli ghats.",
        transportTip: "Cab from Udaipur (2 hrs).",
        mapQuery: "Kumbhalgarh Fort Rajasthan",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Chand Baori Upper Gallery",
        walkTime: "Start · 30 min",
        summary: "9th-century water engineering and Pratihara temple plinth.",
        audioStory: "Ambient air temperature drops 5–6°C near the lower baoli levels.",
        accessibilityNote: "Flat upper stone gallery.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Shekhawati Frescoed Havelis (Mandawa)",
        walkTime: "Morning · 2.5 hrs",
        summary: "Walk open-air painted merchant lanes.",
        audioStory: "Spot locomotives and telephones painted beside epics.",
        accessibilityNote: "Flat town lanes.",
      },
    ],
    famousFoods: [
      {
        dishName: "Ker Sangri, Bajra Roti & Mirchi Vada",
        dietary: "Veg",
        priceRange: "₹80 – ₹280",
        bestTimeOfDay: "Lunch & Evening",
        description: "Foraged desert berries and pods cooked with millet rotis.",
        iconicSpot: "Traditional Bhojanalayas",
        foodStreetArea: "Jaipur / Jodhpur / Bundi Chowks",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Sardar Market Jodhpur Rajasthan",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Rajasthali Emporium & Bagru Craft Village",
        famousFor: "Kota Doria, Bagru Dabu mud-resist prints & Mojari footwear",
        odopOrCraftLabel: "Rajasthan GI Crafts",
        timings: "10:00 AM – 8:00 PM",
        closedDay: "Sundays (some)",
        authenticityTip: "Look for government-run Rajasthali showrooms for fixed-price crafts.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Rajasthali Emporium MI Road Jaipur",
      },
    ],
    localHighlights: [
      {
        title: "Pushkar Fair & Desert Festival",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "November / February",
        description: "Traditional folk performances and desert craft fairs.",
        whereToFind: "Pushkar & Jaisalmer.",
        mapQuery: "Pushkar Rajasthan",
      },
    ],
    nearestHospital: {
      name: "SMS Hospital Jaipur / AIIMS Jodhpur",
      area: "Statewide 108 Network",
      phone: "108",
      note: "24x7 emergency ambulance statewide.",
    },
    facilities: [
      { name: "RTDC Heritage Midway Rest Stops", type: "Food Outlets", landmark: "Heritage Highways", hours: "7:00 AM – 10:00 PM", accessibility: "Step-free restrooms" },
    ],
  },
  {
    id: "state-maharashtra",
    name: "Chhatrapati Sambhajinagar (Ellora)",
    displayName: "Chhatrapati Sambhajinagar & Ellora (Maharashtra)",
    state: "Maharashtra",
    group: "state_ut",
    regionCategory: "UNESCO Rock-Cut Caves & Craft Hub",
    tagline: "Ajanta-Ellora rock-cut caves, Daulatabad Fort, and GI-tagged Himroo & Paithani",
    overview:
      "Gateway to UNESCO Ajanta and Ellora caves, this Deccan plateau region unites 6th–10th century rock-cut temples with Himroo silk-cotton weaving.",
    heroImage: IMG_TEMPLE_CARVING,
    storyOfOrigin: {
      howItBegan:
        "From the 2nd century BCE at Ajanta and 6th–10th centuries CE at Ellora, artisan guilds chiseled Buddhist, Hindu, and Jain cave monasteries directly into Deccan basalt cliffs—culminating in Cave 16 (Kailasa Temple) carved top-down under Rashtrakuta King Krishna I in the 8th century CE.",
      originLegends:
        "Marathi folk stories narrate that a queen vowed to fast until she saw a temple shikhara, inspiring master sculptor Kokasa to carve Kailasa from the summit downward.",
      turningPoints: [
        { era: "2nd Century BCE – 5th CE", milestone: "Vakataka patrons paint the Buddhist mural caves at Ajanta." },
        { era: "8th Century CE", milestone: "Rashtrakuta builders chisel monolithic Kailasa Temple out of 200,000 tonnes of basalt." },
        { era: "1983 CE", milestone: "Both Ajanta and Ellora inscribed among India's very first UNESCO World Heritage Sites." },
      ],
    },
    samplePrompts: [
      "How was Ellora's Kailasa Temple carved top-down from one rock?",
      "Tell me about Paithani and Himroo weaving",
      "Explain Daulatabad Fort's medieval defenses",
    ],
    featuredGuide: {
      title: "Ellora Caves (Kailasa Cave 16) · वेरूळ कैलास लेणी",
      recordedHistoryAndFacts:
        "Excavated top-down out of a single basalt cliff in the 8th century CE under Rashtrakuta King Krishna I, Cave 16 sits beside 33 Buddhist, Hindu, and Jain rock-cut caves.",
      folkloreAndLocalTradition:
        "Folk lore honours master sculptor Kokasa for carving the pinnacle downward first so the queen could break her fast.",
      accessibilityNotes:
        "Ellora provides paved walkways, ramps into Cave 16's lower courtyard, and battery shuttle vans.",
      practicalTips:
        "Ellora is closed Tuesdays; Ajanta is closed Mondays. Start at 8:00 AM.",
    },
    sightseeingSpots: [
      {
        name: "Ellora Caves & Kailasa Temple",
        spotType: "UNESCO Basalt Caves",
        description: "34 Buddhist, Hindu, and Jain caves anchored by monolithic Cave 16.",
        bestTime: "8:00 AM – 11:30 AM (Closed Tuesdays)",
        entryFee: "₹40 Indian · ₹600 Foreign",
        duration: "3 hrs",
        routeDirections: "30 km northwest of Chhatrapati Sambhajinagar Station.",
        transportTip: "MSRTC bus or cab (45 mins); electric shuttle inside park.",
        mapQuery: "Ellora Caves Maharashtra",
      },
      {
        name: "Daulatabad (Devagiri) Fort",
        spotType: "12th-Century Hill Fortress",
        description: "Yadava-era conical hill citadel with dry moats and Chand Minar.",
        bestTime: "8:30 AM – 4:30 PM",
        entryFee: "₹25 Indian",
        duration: "1 hr 30 mins",
        routeDirections: "16 km northwest en route to Ellora.",
        transportTip: "Lower courtyard easy; summit involves steep rock steps.",
        mapQuery: "Daulatabad Fort Maharashtra",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Kailasa Monolithic Courtyard (Cave 16)",
        walkTime: "Start · 35 min",
        summary: "Walk around life-size stone elephants supporting the monolithic temple.",
        audioStory: "Nothing here was stacked brick by brick—everything was chiseled out of one solid cliff.",
        accessibilityNote: "Level courtyard entry.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Ellora Caves 10, 16 & 32 Circuit",
        walkTime: "Morning · 3 hrs",
        summary: "Witness four centuries of shared artisanal guilds across three Indian traditions.",
        audioStory: "Compare Vishvakarma Chaitya acoustics with Indra Sabha's delicate ceilings.",
        accessibilityNote: "Shuttle bus connects Cave 16 to Cave 30–34.",
      },
    ],
    famousFoods: [
      {
        dishName: "Naan Qalia & Puran Poli",
        dietary: "Non-Veg",
        priceRange: "₹140 – ₹280",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Slow-simmered Deccan spiced mutton stew served with tandoor flatbread (veg Puran Poli widely available).",
        iconicSpot: "Bhoj & Great Sagar / Local Thali Homes",
        foodStreetArea: "Nirala Bazaar & Shahgunj",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Nirala Bazaar Chhatrapati Sambhajinagar",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Zaffar Gate Himroo Factory & Paithan Looms",
        famousFor: "Himroo cotton-silk shawls & GI-tagged Paithani silk sarees",
        odopOrCraftLabel: "Maharashtra GI Crafts",
        timings: "10:00 AM – 8:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Visit Paithan (50 km) or Yeola directly for handwoven peacock-border Paithani.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Himroo Factory Chhatrapati Sambhajinagar",
      },
    ],
    localHighlights: [
      {
        title: "Ajanta Caves",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "100 km North · UNESCO Murals",
        description: "Horse-shoe gorge preserving 2nd century BCE–5th century CE Buddhist frescoes.",
        whereToFind: "Fardapur, Jalgaon Road.",
        mapQuery: "Ajanta Caves Maharashtra",
      },
    ],
    nearestHospital: {
      name: "Government Medical College (GHATI)",
      area: "Panchakki Road",
      phone: "108",
      note: "24x7 emergency care (108 / 112).",
    },
    facilities: [
      { name: "Ellora Visitor Centre Toilets", type: "Public Toilets", landmark: "Shuttle Plaza", hours: "6:00 AM – 6:00 PM", accessibility: "Wheelchair ramps" },
    ],
  },
  {
    id: "state-assam",
    name: "Sivasagar & Majuli",
    displayName: "Sivasagar & Majuli (Assam)",
    state: "Assam",
    group: "state_ut",
    regionCategory: "Ahom Heritage & Brahmaputra River Island",
    tagline: "1746 CE Rang Ghar, Majuli Satra bamboo masks, and golden Muga silk",
    overview:
      "In Upper Assam, Sivasagar preserves Ahom brick amphitheatres and Joysagar tanks while Majuli river island safeguards Neo-Vaishnavite Satras and mask-making.",
    heroImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Sivasagar (Rangpur) served as the 18th-century capital of the Ahom Kingdom, which ruled the Brahmaputra valley for 600 years; King Pramatta Singha built Rang Ghar in 1746 CE using rice-paste and duck-egg 'karal' mortar. On Majuli island, saint-reformer Srimanta Sankardev established Satra monasteries in the 15th–16th century.",
      originLegends:
        "Assamese Bihu songs and Xattriya traditions celebrate the seasonal pulse of the Brahmaputra and honor guests with handwoven white-and-red Gamosa.",
      turningPoints: [
        { era: "15th – 16th Century CE", milestone: "Srimanta Sankardev pioneers Neo-Vaishnavite Satra monasteries and Bhaona theatre." },
        { era: "1746 CE", milestone: "Ahom King Pramatta Singha constructs Rang Ghar royal amphitheatre." },
        { era: "2007 – Present", milestone: "Assam's golden Muga silk and Majuli masks earn GI protection." },
      ],
    },
    samplePrompts: [
      "Tell me about Rang Ghar and Talatal Ghar in Sivasagar",
      "What are the Satras and mask-making crafts of Majuli?",
      "Explain Assam's golden Muga silk in Sualkuchi",
    ],
    featuredGuide: {
      title: "Rang Ghar & Majuli Satras · ৰংঘৰ আৰু মাজুলী",
      recordedHistoryAndFacts:
        "Built in 1746 CE using thin bricks bonded with organic karal mortar, Rang Ghar is one of Asia's oldest surviving royal amphitheatres. On Majuli, Neo-Vaishnavite Satras preserve Bhaona theatre and manuscripts.",
      folkloreAndLocalTradition:
        "Bihu melodies and Xattriya dances celebrate Brahmaputra harvests and unity.",
      accessibilityNotes:
        "Rang Ghar sits on flat lawns; Majuli ferries from Nimati Ghat involve short ramp walks.",
      practicalTips:
        "Check Brahmaputra ferry schedules in advance when crossing to Majuli.",
    },
    sightseeingSpots: [
      {
        name: "Rang Ghar & Talatal Ghar (Sivasagar)",
        spotType: "18th-Century Ahom Palaces",
        description: "Inverted-boat-roofed amphitheatre and multi-level brick palace with secret passages.",
        bestTime: "8:00 AM – 4:30 PM",
        entryFee: "₹25 Indian · ₹300 Foreign",
        duration: "1 hr 30 mins",
        routeDirections: "3 km from Sivasagar Town Railway Station.",
        transportTip: "Auto or cab along Joysagar Road.",
        mapQuery: "Rang Ghar Sivasagar Assam",
      },
      {
        name: "Samaguri & Auniati Satras (Majuli)",
        spotType: "River Island Monasteries",
        description: "Living Satra monasteries famed for split-bamboo Bhaona masks and manuscripts.",
        bestTime: "9:00 AM – 4:00 PM",
        entryFee: "Free (Workshop demo donation appreciated)",
        duration: "1 hr 30 mins",
        routeDirections: "Ferry from Nimati Ghat (Jorhat) to Kamalabari Ghat, then 20-min auto.",
        transportTip: "Level bamboo courtyard at Samaguri.",
        mapQuery: "Samaguri Satra Majuli Assam",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Rang Ghar Lawn & Pavilion",
        walkTime: "Start · 25 min",
        summary: "Walk around the 1746 CE Ahom royal pavilion.",
        audioStory: "Spot the carved crocodiles adorning the curved roof ridge.",
        accessibilityNote: "Flat manicured lawn.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Majuli Satra Mask Workshop & Pottery Village",
        walkTime: "Morning · 2.5 hrs",
        summary: "Watch monks craft Bhaona masks from bamboo and river clay.",
        audioStory: "Natural hengul and haital pigments bring epic characters alive.",
        accessibilityNote: "Level village lanes.",
      },
    ],
    famousFoods: [
      {
        dishName: "Joha Rice, Khar & Masor Tenga",
        dietary: "Non-Veg",
        priceRange: "₹140 – ₹280",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Fragrant short-grain Joha rice, alkaline Khar starter, and tangy river-fish stew (veg thalis widely served).",
        iconicSpot: "Majuli Satra Homestays & Sivasagar Kitchens",
        foodStreetArea: "Kamalabari & Sivasagar Central Market",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Kamalabari Majuli Assam",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Sualkuchi Silk Village & Samaguri Mask Studios",
        famousFor: "GI-tagged Golden Muga Silk, Gamosa & Majuli Masks",
        odopOrCraftLabel: "Assam GI Craft Heritage",
        timings: "9:30 AM – 6:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Natural golden Muga silk retains its warm sheen across washes.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Sualkuchi Silk Village Assam",
      },
    ],
    localHighlights: [
      {
        title: "Raas Mahotsav (Majuli)",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "November Full Moon",
        description: "Masked nocturnal Bhaona theatre across Majuli Satras.",
        whereToFind: "Majuli Island.",
        mapQuery: "Majuli Island Assam",
      },
    ],
    nearestHospital: {
      name: "Sivasagar Civil Hospital / Kamalabari CHC",
      area: "Joysagar / Kamalabari",
      phone: "108",
      note: "24x7 Mrityunjoy 108 ambulance.",
    },
    facilities: [
      { name: "Sivasagar ASI Park Restrooms", type: "Public Toilets", landmark: "Rang Ghar Gate", hours: "6:00 AM – 6:00 PM", accessibility: "Ground floor" },
    ],
  },
  {
    id: "ziro-ar",
    name: "Ziro",
    displayName: "Ziro (Arunachal Pradesh)",
    state: "Arunachal Pradesh",
    group: "small_town",
    regionCategory: "Small Highland Valley · Lower Subansiri",
    tagline: "Apatani paddy-cum-fish terraces, bamboo crafts, and pine-ringed plateau",
    overview:
      "At 1,500 metres in Arunachal Pradesh, Ziro Valley is home to the Apatani community—celebrated for zero-machinery wet-rice and fish farming.",
    heroImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Inscribed on India's UNESCO Tentative List, the Apatani Cultural Landscape covers 32 sq km of valley floor where Apatani communities engineered bamboo sluice channels integrating paddy cultivation with fish farming and sacred bamboo groves without plough animals.",
      originLegends:
        "Apatani oral traditions trace lineage to forefather Abo Tani and celebrate Dree and Myoko festivals to bless harvests and honour sun-moon nature spirits.",
      turningPoints: [
        { era: "Traditional Era", milestone: "Apatani clans establish Hong, Hari, and Bulla as dense eco-sustainable villages." },
        { era: "2012 – Present", milestone: "Ziro Festival of Music and UNESCO-tentative cultural tourism highlight zero-waste heritage." },
      ],
    },
    samplePrompts: [
      "How does the Apatani rice-and-fish farming system work?",
      "Tell me about Hong and Hari heritage villages",
      "What is the story behind Meghna Cave Temple?",
    ],
    featuredGuide: {
      title: "Apatani Cultural Landscape, Ziro · ज़ीरो",
      recordedHistoryAndFacts:
        "The Apatani system integrates wet-rice terraces and fish breeding using bamboo aqueducts and organic nutrient cycling.",
      folkloreAndLocalTradition:
        "Oral traditions trace ancestry to Abo Tani, celebrated during July Dree and March Myoko festivals.",
      accessibilityNotes:
        "Valley floor roads linking Hapoli, Hong, and Hari villages are largely flat and paved.",
      practicalTips:
        "Obtain an Inner Line Permit (ILP) before entering Arunachal Pradesh.",
    },
    sightseeingSpots: [
      {
        name: "Hong & Hari Heritage Villages",
        spotType: "Living Indigenous Villages",
        description: "Stilted bamboo homes, wooden Lapang council platforms, and paddy-fish bunds.",
        bestTime: "8:00 AM – 4:00 PM",
        entryFee: "Free",
        duration: "1 hr 30 mins",
        routeDirections: "7 km from Hapoli Bus Stand.",
        transportTip: "Shared sumo or cab from Hapoli.",
        mapQuery: "Hong Village Ziro Arunachal Pradesh",
      },
      {
        name: "Kile Pakho Ridge & Tarin Fish Farm",
        spotType: "Valley Panorama & Eco-Farm",
        description: "High-altitude fish breeding pond and viewpoint over the entire plateau.",
        bestTime: "7:00 AM – 10:00 AM",
        entryFee: "Free",
        duration: "45 mins",
        routeDirections: "5 km west of Old Ziro.",
        transportTip: "Drive straight up to ridge parking.",
        mapQuery: "Kile Pakho Ziro",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Hong Village Bamboo & Terrace Walk",
        walkTime: "Start · 25 min",
        summary: "Walk past raised wooden Lapang platforms and bamboo irrigation sluices.",
        audioStory: "Fish swim freely among rice stalks, naturally controlling pests.",
        accessibilityNote: "Flat village lanes.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Hong, Hari & Kile Pakho Circuit",
        walkTime: "Morning · 2.5 hrs",
        summary: "Discover Apatani bamboo groves and ridge vistas.",
        audioStory: "Every pine and bamboo grove is zoned by clan stewardship.",
        accessibilityNote: "Car access at village edges.",
      },
    ],
    famousFoods: [
      {
        dishName: "Bamboo-Shoot Curry, Sticky Rice & Tapyo",
        dietary: "Veg",
        priceRange: "₹140 – ₹280",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Steamed red sticky rice, fresh bamboo shoots, and traditional plant-ash salt (non-veg smoked meats also local).",
        iconicSpot: "Apatani Homestays & Hapoli Eateries",
        foodStreetArea: "Hapoli Main Bazaar",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Hapoli Market Ziro",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Hapoli Craft Emporium & Hong Weaver Co-ops",
        famousFor: "Apatani backstrap-loom shawls (Jilan) & woven bamboo rain-shields",
        odopOrCraftLabel: "Lower Subansiri Craft",
        timings: "9:30 AM – 6:30 PM",
        closedDay: "Sundays",
        authenticityTip: "Look for authentic geometric backstrap-loom weaves made inside village homes.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Hapoli Ziro Arunachal Pradesh",
      },
    ],
    localHighlights: [
      {
        title: "Ziro Festival of Music & Myoko",
        category: "Nearby Sites & Festivals",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "September / March",
        description: "Zero-plastic bamboo amphitheatre music fest amidst harvest paddies.",
        whereToFind: "Biirii Grounds, Ziro.",
        mapQuery: "Ziro Valley Arunachal Pradesh",
      },
    ],
    nearestHospital: {
      name: "Gyati Takka General Hospital",
      area: "Hapoli–Old Ziro Road",
      phone: "03788-224235",
      note: "24x7 district hospital (108 / 112).",
    },
    facilities: [
      { name: "Hapoli Market Toilets", type: "Public Toilets", landmark: "Taxi Stand", hours: "6:00 AM – 8:30 PM", accessibility: "Ground level" },
    ],
  },
];
