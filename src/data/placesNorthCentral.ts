import { PlaceDossier } from "../types";

export const IMG_MATHURA_GHAT = "/src/assets/images/hero_mathura_ghat_1795175693501.jpg";
export const IMG_ORCHHA_CHHATRIS = "/src/assets/images/heritage_orchha_cenotaphs_1795175693981.jpg";
export const IMG_CRAFTS_ODOP = "/src/assets/images/crafts_odop_indian_1795175695142.jpg";
export const IMG_TEMPLE_CARVING = "/src/assets/images/heritage_temple_carving_1795175695286.jpg";

export const PLACES_NORTH_CENTRAL: PlaceDossier[] = [
  {
    id: "mathura-up",
    name: "Mathura",
    displayName: "Mathura, Uttar Pradesh",
    state: "Uttar Pradesh",
    group: "heritage_city",
    regionCategory: "Major Pilgrimage & Archaeological City",
    tagline: "Yamuna ghats, Kushan-era sculpture, and living Braj craft traditions",
    overview:
      "Located on the western bank of the Yamuna, Mathura is one of South Asia's oldest continuously inhabited urban centres—once a southern capital of the Kushan Empire (1st–3rd century CE) and the cultural heart of Braj.",
    heroImage: IMG_MATHURA_GHAT,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Excavations at Sonkh and Katra Keshavdev confirm urban settlement in Mathura from Painted Grey Ware and Northern Black Polished Ware periods (c. 6th century BCE) as capital of the Surasena Mahajanapada. Under the Kushan Empire (1st–3rd century CE), Mathura pioneered iconic red-sandstone sculptures of Buddha, Jain Tirthankaras, and Hindu deities.",
      originLegends:
        "In Puranic tradition, Mathura was cleared from Madhuvana forest by Shatrughna and revered as the birthplace of Lord Krishna. Devotees remember Vishram Ghat as the Yamuna bend where Krishna and Balarama rested after defeating King Kansa.",
      turningPoints: [
        { era: "c. 6th Century BCE", milestone: "Emerged as the fortified capital of the Surasena Mahajanapada along the Yamuna." },
        { era: "1st – 3rd Century CE", milestone: "Flourished under Kushan rulers, creating the Mathura School of red-sandstone art." },
        { era: "16th – 19th Century CE", milestone: "Bhakti saints revitalized Braj circuits while Maratha and regional patrons rebuilt riverfront ghats." },
        { era: "1874 CE – Present", milestone: "Government Museum Mathura founded to preserve thousands of Kushan and Gupta sculptures." },
      ],
    },
    samplePrompts: [
      "Tell me about Vishram Ghat",
      "What is the history of Shri Krishna Janmasthan?",
      "Explain this Indian monument or carving",
    ],
    featuredGuide: {
      title: "Vishram Ghat, Yamuna Riverfront · विश्राम घाट",
      recordedHistoryAndFacts:
        "Vishram Ghat is the central riverfront terrace among Mathura's 25 traditional ghats along the Yamuna. Historical records indicate its red-sandstone pavilions and steps were extensively rebuilt between the 16th and 19th centuries by regional patrons and Maratha rulers.",
      folkloreAndLocalTradition:
        "Braj devotional tradition holds that Krishna and Balarama rested ('Vishram') at this bend after slaying Kansa. Every evening at dusk, priests perform the Yamuna Aarti with multi-tiered brass lamps.",
      accessibilityNotes:
        "E-rickshaws drop visitors within 50 m via Chhatta Bazaar. Elderly visitors and wheelchair users can view the evening aarti comfortably from the level upper sandstone verandah.",
      practicalTips:
        "Arrive 25 minutes before sunset for the evening aarti and store footwear at manned stalls near the archway.",
      followUpSuggestions: [
        "What Kushan sculptures can I see at Government Museum Mathura?",
        "How do I reach Kusum Sarovar and Govardhan from here?",
        "Where is the oldest Sanjhi paper-stencil craft still practiced?",
      ],
    },
    sightseeingSpots: [
      {
        name: "Vishram Ghat & Yamuna Aarti",
        spotType: "Riverfront Ghat",
        description: "Central ceremonial ghat of Mathura framed by carved red-sandstone chhatris and dusk river aarti.",
        bestTime: "5:30 AM – 8:00 AM & 5:30 PM – 7:30 PM",
        entryFee: "Free (Boat rides ₹100–₹200)",
        duration: "45 mins",
        routeDirections: "3.2 km east of Mathura Junction Railway Station via Holi Gate and Chhatta Bazaar.",
        transportTip: "Take a shared e-rickshaw from Mathura Junction to Holi Gate (₹20), then walk 400 m.",
        mapQuery: "Vishram Ghat Mathura Uttar Pradesh",
      },
      {
        name: "Government Museum, Dampier Nagar",
        spotType: "Archaeological Museum",
        description: "Founded in 1874 CE; houses unmatched Kushan-era Kanishka portraits and Gupta Buddhas.",
        bestTime: "10:30 AM – 4:30 PM (Closed Mondays)",
        entryFee: "₹20 Indian · ₹100 Foreign",
        duration: "1 hr 15 mins",
        routeDirections: "1.8 km north of Mathura Junction along Dampier Nagar Park Road.",
        transportTip: "5-min auto directly to Museum Gate; wheelchair ramp available.",
        mapQuery: "Government Museum Mathura Dampier Nagar",
      },
      {
        name: "Shri Krishna Janmasthan Complex",
        spotType: "Pilgrimage & Mound Site",
        description: "Sacred temple complex atop the ancient Katra Keshavdev archaeological mound.",
        bestTime: "6:30 AM – 11:00 AM & 4:30 PM – 8:00 PM",
        entryFee: "Free (Lockers ₹20)",
        duration: "1 hr",
        routeDirections: "2.5 km north of Mathura Junction via Deeg Gate Chauraha.",
        transportTip: "Direct e-rickshaw to Gate 3; deposit phones and bags at official cloakrooms.",
        mapQuery: "Shri Krishna Janmasthan Temple Mathura",
      },
      {
        name: "Dwarkadhish Temple",
        spotType: "1814 CE Heritage Temple",
        description: "Famous for painted Rajasthani-style courtyard ceilings and vibrant morning darshan.",
        bestTime: "7:30 AM – 10:30 AM",
        entryFee: "Free",
        duration: "40 mins",
        routeDirections: "300 m west of Vishram Ghat inside Chhatta Bazaar.",
        transportTip: "Walkable from Vishram Ghat; narrow bazaar lane.",
        mapQuery: "Dwarkadhish Temple Mathura",
      },
      {
        name: "Kusum Sarovar (Govardhan Road)",
        spotType: "Hidden Sandstone Gem",
        description: "Monumental 18th-century sandstone stepped tank and chhatri pavilions built by Bharatpur rulers.",
        bestTime: "4:00 PM – 6:30 PM",
        entryFee: "Free",
        duration: "45 mins",
        routeDirections: "24 km west of Mathura Junction on Govardhan–Radha Kund Road.",
        transportTip: "Cab or Govardhan tempo from Bhuteshwar Stand (45 mins).",
        mapQuery: "Kusum Sarovar Govardhan Mathura",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Vishram Ghat Sandstone Archway",
        walkTime: "Start · 0 min",
        summary: "Begin at the central riverfront terrace overlooking the Yamuna.",
        audioStory: "Look closely at the carved red sandstone arches supporting the chhatri domes above Vishram Ghat.",
        accessibilityNote: "Level upper terrace with stone ledges; e-rickshaw drop-off 50 m away.",
      },
      {
        stopNumber: 2,
        name: "Dwarkadhish Temple & Chhatta Bazaar",
        walkTime: "6 min walk (420 m)",
        summary: "1814 CE temple courtyard followed by traditional Mathura Peda halwais.",
        audioStory: "In Chhatta Bazaar, halwais simmer buffalo-milk khoya in iron kadhais until deep caramel brown.",
        accessibilityNote: "Shaded marble courtyard inside temple; walk before 11 AM.",
      },
      {
        stopNumber: 3,
        name: "Kans Qila Ramparts Viewpoint",
        walkTime: "8 min walk (650 m)",
        summary: "16th-century Mughal-Rajput brick-and-stone bastion along the northern river bend.",
        audioStory: "Architectural surveys show the standing ramparts date to Raja Man Singh I's 16th-century reconstruction.",
        accessibilityNote: "Viewable from lower riverside road.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Government Museum, Dampier Nagar",
        walkTime: "Start · 45 min",
        summary: "World-renowned Kushan & Gupta red-sandstone sculpture galleries.",
        audioStory: "See the headless inscribed portrait of Kushan Emperor Kanishka.",
        accessibilityNote: "Wheelchair ramp and level ground galleries.",
      },
      {
        stopNumber: 2,
        name: "Shri Krishna Janmasthan & Potra Kund",
        walkTime: "10 min e-rickshaw · 60 min",
        summary: "Katra Keshavdev mound paired with the red sandstone stepped tank.",
        audioStory: "Compare the ancient urban mound with the 19th-century restored tank.",
        accessibilityNote: "Paved pedestrian plaza.",
      },
      {
        stopNumber: 3,
        name: "Vishram Ghat Sunset Aarti",
        walkTime: "12 min e-rickshaw · 45 min",
        summary: "Conclude beside the Yamuna at dusk.",
        audioStory: "End your walk as brass aarti lamps reflect across the Yamuna.",
        accessibilityNote: "Step-free upper arcade benches.",
      },
    ],
    famousFoods: [
      {
        dishName: "Mathura Peda (Caramelized Khoya Sweet)",
        dietary: "Veg",
        priceRange: "₹450 – ₹620 / kg (₹60 box)",
        bestTimeOfDay: "All Day",
        description: "Slow-roasted buffalo-milk khoya sweetened with bura sugar and green cardamom; stays fresh 5–7 days.",
        iconicSpot: "Brijwasi Mithai Wala & Radhey Shyam Halwai",
        foodStreetArea: "Holi Gate & Chhatta Bazaar",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Brijwasi Mithai Wala Holi Gate Mathura",
      },
      {
        dishName: "Bedai, Dubki Wale Aloo & Hing Kachori",
        dietary: "Veg",
        priceRange: "₹40 – ₹90 per plate",
        bestTimeOfDay: "Morning (7:00 AM – 11:00 AM)",
        description: "Crisp lentil-stuffed puffed flatbread served with tangy asafoetida potato curry and saffron jalebi.",
        iconicSpot: "Oma Pehelwan Kachori & Shankar Mithai Wala",
        foodStreetArea: "Holi Gate & Tilak Dwar",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Holi Gate Mathura Breakfast",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Holi Gate & Tilak Dwar Heritage Bazaar",
        famousFor: "Thakurji Zari Poshak (ODOP), brass Laddu Gopal idols & Mathura Peda",
        odopOrCraftLabel: "ODOP Mathura District",
        timings: "10:00 AM – 9:30 PM",
        closedDay: "Tuesdays (partial)",
        authenticityTip: "Look for hand-embroidered silk-velvet poshak from local zardozi workshops.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Holi Gate Market Mathura",
      },
      {
        marketName: "Chhatta Bazaar & Sanjhi Art Lane",
        famousFor: "Hand-cut Sanjhi paper stencils, tulsi prayer beads & incense",
        odopOrCraftLabel: "Living Braj Folk Craft",
        timings: "9:30 AM – 8:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Ask near Bhattji temple lane for genuine hand-scissored Sanjhi paper stencils.",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Chhatta Bazaar Mathura Uttar Pradesh",
      },
    ],
    localHighlights: [
      {
        title: "Kusum Sarovar & Govardhan Parikrama",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "24 km West · 18th Century Complex",
        description: "Sandstone stepped tank with evening lamps; atmospheric during Sharad Purnima and Kartik Deepotsav.",
        whereToFind: "Govardhan–Radha Kund Road.",
        mapQuery: "Kusum Sarovar Govardhan Mathura",
      },
    ],
    nearestHospital: {
      name: "District Hospital (MDS) & KD Medical",
      area: "Civil Lines / NH-19",
      phone: "0565-2403011",
      note: "24x7 emergency & cardiac care (108 / 112).",
    },
    facilities: [
      { name: "Vishram Ghat Swachh Restroom", type: "Public Toilets", landmark: "30 m left of Main Arch", hours: "5:30 AM – 10:00 PM", accessibility: "Ground-level entry" },
      { name: "Janmasthan Gate 3 Water Kiosk", type: "Drinking Water", landmark: "Opposite Cloakroom", hours: "24 Hours", accessibility: "Step-free plaza" },
      { name: "Jubilee Park Multi-Vehicle Parking", type: "Parking", landmark: "Dampier Nagar", hours: "6:00 AM – 10:00 PM", accessibility: "E-rickshaw hub" },
      { name: "Janmasthan First-Aid Post", type: "Medical Centres", landmark: "Gate 1 Courtyard", hours: "6:00 AM – 9:30 PM", accessibility: "Wheelchairs on site" },
      { name: "Brijwasi Bhojanalaya", type: "Food Outlets", landmark: "Holi Gate Square", hours: "8:00 AM – 10:30 PM", accessibility: "Ground-floor dining" },
    ],
  },
  {
    id: "varanasi-up",
    name: "Varanasi",
    displayName: "Varanasi (Uttar Pradesh)",
    state: "Uttar Pradesh",
    group: "heritage_city",
    regionCategory: "Major Pilgrimage & Living Heritage City",
    tagline: "84 Ganga ghats, Banarasi silk handlooms, and Sarnath's Buddhist stupas",
    overview:
      "Resting along a crescent sweep of the Ganga, Varanasi unites 18th-century Chunar-sandstone ghats, Banarasi brocade weavers, classical music gharanas, and ancient Sarnath nearby.",
    heroImage: IMG_MATHURA_GHAT,
    secondaryImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Excavations at Rajghat confirm urban settlement from c. 800 BCE as Kashi Mahajanapada. At Sarnath 10 km north, Ashoka erected a Lion-Capital pillar in the 3rd century BCE marking the Buddha's first sermon. Most surviving sandstone ghats were built in the 18th–19th centuries by Maratha patrons.",
      originLegends:
        "Revered as Kashi ('City of Light'), tradition links the name Varanasi to the Varuna and Asi rivers framing the city, and Dashashwamedh Ghat to Brahma's ten-horse sacrifice.",
      turningPoints: [
        { era: "c. 800 – 500 BCE", milestone: "Rajghat urban fortification rises; Buddha delivers first sermon at Sarnath." },
        { era: "5th Century CE", milestone: "Gupta builders construct the carved Dhamek Stupa at Sarnath." },
        { era: "18th Century CE", milestone: "Maratha queens and Peshwas build the Chunar-sandstone crescent of riverfront ghats." },
      ],
    },
    samplePrompts: [
      "Tell me about Dashashwamedh and Assi Ghat",
      "What is the history of Sarnath's Dhamek Stupa?",
      "Explain how Banarasi Kadhwa brocade is woven",
    ],
    featuredGuide: {
      title: "Dashashwamedh & Ganga Crescent Ghats · दशाश्वमेध घाट",
      recordedHistoryAndFacts:
        "Urban life at Rajghat dates from c. 800 BCE, while most riverfront sandstone ghats were built in the 18th–19th centuries by Maratha patrons such as Ahilyabai Holkar.",
      folkloreAndLocalTradition:
        "Tradition associates Dashashwamedh Ghat with Brahma's ten-horse sacrifice; nightly Ganga Aarti lights up the steps with brass lamps.",
      accessibilityNotes:
        "Assi Ghat and Namo Ghat provide wide, flat, step-free stone promenades ideal for wheelchairs and seniors.",
      practicalTips:
        "Board sunrise boats from Assi Ghat; use Namo Ghat for easy parking and accessible evening walks.",
    },
    sightseeingSpots: [
      {
        name: "Sarnath Dhamek Stupa & Museum",
        spotType: "Buddhist Heritage Site",
        description: "Site of the Buddha's first sermon featuring the 5th-century Dhamek Stupa and Ashokan Lion Capital.",
        bestTime: "8:30 AM – 11:30 AM (Museum closed Fridays)",
        entryFee: "₹25 Park · ₹5 Museum (Indian)",
        duration: "1 hr 45 mins",
        routeDirections: "10 km northeast of Varanasi Cantt Station via Pandeypur Road.",
        transportTip: "Auto or cab from Varanasi Cantt (25 mins, ₹200–₹300).",
        mapQuery: "Dhamek Stupa Sarnath Varanasi",
      },
      {
        name: "Dashashwamedh Ghat",
        spotType: "Ceremonial Riverfront Ghat",
        description: "Central ghat famed for 18th-century sandstone balconies and nightly Ganga Aarti.",
        bestTime: "5:30 AM or 5:45 PM – 7:30 PM",
        entryFee: "Free",
        duration: "1 hr",
        routeDirections: "4.5 km southeast of Varanasi Cantt via Godowlia Crossing.",
        transportTip: "Auto to Godowlia Chowk, then 450 m pedestrian walk.",
        mapQuery: "Dashashwamedh Ghat Varanasi",
      },
      {
        name: "Namo Ghat",
        spotType: "Accessible Promenade",
        description: "Spacious step-free riverfront plaza with 'Namaste' arches, food courts, and water taxis.",
        bestTime: "5:00 PM – 8:30 PM",
        entryFee: "Free",
        duration: "50 mins",
        routeDirections: "6 km east of Varanasi Junction near Rajghat.",
        transportTip: "Direct cab drop inside parking; golf carts for seniors.",
        mapQuery: "Namo Ghat Varanasi",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Assi Ghat & Tulsi Ghat Promenade",
        walkTime: "Start · 25 min",
        summary: "Wide paved southern riverfront terrace linking historic akharas.",
        audioStory: "Begin at Assi Ghat where the riverfront opens into a step-free promenade.",
        accessibilityNote: "Step-free paved promenade.",
      },
      {
        stopNumber: 2,
        name: "Dashashwamedh Ghat Terrace",
        walkTime: "20 min walk / boat",
        summary: "18th-century Maratha stone balconies overlooking evening aarti.",
        audioStory: "Notice the symmetry of Chunar sandstone pavilions.",
        accessibilityNote: "Upper verandah seating available.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Sarnath Stupa & Madanpura Looms",
        walkTime: "Morning · 2.5 hrs",
        summary: "Pair Mauryan heritage with live Kadhwa silk brocade handlooms.",
        audioStory: "Watch naksha-bandha artisans punch design cards for handloom silk.",
        accessibilityNote: "Flat park lawns and ground-floor workshops.",
      },
    ],
    famousFoods: [
      {
        dishName: "Tamatar Chaat & Kachori Sabzi",
        dietary: "Veg",
        priceRange: "₹40 – ₹90",
        bestTimeOfDay: "Morning (Kachori) & Evening (Chaat)",
        description: "Spiced mashed tomato chaat served in earthen kulhads alongside crisp morning hing kachori.",
        iconicSpot: "Kashi Chat Bhandar & Ram Bhandar",
        foodStreetArea: "Godowlia & Thatheri Bazaar",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Kashi Chat Bhandar Godowlia Varanasi",
      },
      {
        dishName: "Blue Lassi & Winter Malaiyo",
        dietary: "Veg",
        priceRange: "₹60 – ₹120",
        bestTimeOfDay: "Afternoon / Winter Dawn",
        description: "Thick clay-cup churned fruit lassi or airy saffron milk-foam.",
        iconicSpot: "Blue Lassi Shop",
        foodStreetArea: "Kachauri Gali, Chowk",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Blue Lassi Shop Varanasi",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Madanpura & Sarai Mohana Weaver Lanes",
        famousFor: "Authentic Kadhwa Banarasi Silk Sarees & Brocade Stoles",
        odopOrCraftLabel: "GI Certified · Varanasi ODOP",
        timings: "10:30 AM – 8:00 PM",
        closedDay: "Fridays (partial)",
        authenticityTip: "Look for Silk Mark & Handloom Mark; check reverse-side handloom warp floats.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Madanpura Banarasi Saree Market Varanasi",
      },
    ],
    localHighlights: [
      {
        title: "Dev Deepawali & Ganga Mahotsav",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "Kartik Purnima (November)",
        description: "All 84 ghats lit by over a million earthen lamps.",
        whereToFind: "Namo Ghat to Assi Ghat.",
        mapQuery: "Assi Ghat Varanasi",
      },
    ],
    nearestHospital: {
      name: "Sir Sunderlal Hospital (BHU)",
      area: "Lanka, Varanasi",
      phone: "0542-2369024",
      note: "24x7 emergency trauma care (108 / 112).",
    },
    facilities: [
      { name: "Namo Ghat Accessible Washrooms", type: "Public Toilets", landmark: "Namo Ghat Promenade", hours: "5:00 AM – 11:00 PM", accessibility: "Wheelchair ramps" },
      { name: "Vishwanath Corridor RO Water", type: "Drinking Water", landmark: "Corridor Plaza", hours: "24 Hours", accessibility: "Step-free" },
    ],
  },
  {
    id: "ayodhya-up",
    name: "Ayodhya",
    displayName: "Ayodhya (Uttar Pradesh)",
    state: "Uttar Pradesh",
    group: "heritage_city",
    regionCategory: "Ancient Riverfront Pilgrimage City",
    tagline: "Sarayu ghats, Nagara temple craftsmanship, and classical Kosala history",
    overview:
      "Along the Sarayu River, Ayodhya (ancient Saketa) holds deep significance across Hindu, Buddhist, and Jain traditions.",
    heroImage: IMG_MATHURA_GHAT,
    storyOfOrigin: {
      howItBegan:
        "Archaeological finds identify Ayodhya (ancient Saketa) with Northern Black Polished Ware urban settlements (c. 6th century BCE) in the Kosala Mahajanapada. Pali texts record Buddha residing at Saketa, while Jain chronicles honour it as birthplace of five Tirthankaras. From the 18th century, regional rulers and Nawabs patronized ghats, Hanuman Garhi, and Kanak Bhawan.",
      originLegends:
        "In the Valmiki Ramayana, Ayodhya was founded by Manu on the Sarayu banks and ruled by the Ikshvaku solar dynasty of King Dasharatha and Lord Rama.",
      turningPoints: [
        { era: "c. 6th – 2nd Century BCE", milestone: "Saketa flourishes as a premier city of Kosala." },
        { era: "18th – 19th Century CE", milestone: "Construction of Hanuman Garhi and Bundela-gifted Kanak Bhawan." },
        { era: "2024 CE", milestone: "Nagara-style pink-sandstone Shri Ram Janmabhoomi Mandir opens with stepped pedestrian corridors." },
      ],
    },
    samplePrompts: [
      "Tell me about the Nagara architecture of Ram Mandir Ayodhya",
      "What is the history of Hanuman Garhi and Kanak Bhawan?",
      "Explain Ayodhya's Jain and Buddhist heritage",
    ],
    featuredGuide: {
      title: "Ram Ki Paidi & Sarayu Ghats · राम की पैड़ी, अयोध्या",
      recordedHistoryAndFacts:
        "Ayodhya (ancient Saketa) emerged in Kosala by the mid-first millennium BCE. Along the Sarayu, Ram Ki Paidi and Hanuman Garhi reflect 18th–20th century architectural patronage.",
      folkloreAndLocalTradition:
        "Deepotsav illuminates Ram Ki Paidi with millions of diyas celebrating Rama's return to Ayodhya.",
      accessibilityNotes:
        "Janmabhoomi Path offers shaded canopies, drinking water, free wheelchairs, and level stone paving.",
      practicalTips:
        "Store phones in official lockers before entering main temple security.",
    },
    sightseeingSpots: [
      {
        name: "Shri Ram Janmabhoomi Mandir",
        spotType: "Nagara Sandstone Temple",
        description: "Three-storey Bansi Paharpur pink-sandstone temple built with interlocking stone joinery.",
        bestTime: "7:00 AM – 10:30 AM",
        entryFee: "Free",
        duration: "1 hr 30 mins",
        routeDirections: "3 km northeast of Ayodhya Dham Junction along Ram Path.",
        transportTip: "Electric city buses and e-rickshaws drop at Janmabhoomi Path entry.",
        mapQuery: "Shri Ram Janmabhoomi Mandir Ayodhya",
      },
      {
        name: "Ram Ki Paidi & Naya Ghat",
        spotType: "Riverfront Ghats",
        description: "Stepped Sarayu bathing channels famed for evening Deepotsav and sunset aarti.",
        bestTime: "5:30 PM – 7:30 PM",
        entryFee: "Free",
        duration: "45 mins",
        routeDirections: "4.5 km east of Ayodhya Dham Junction near Lata Mangeshkar Chowk.",
        transportTip: "Direct e-rickshaw along Ram Path.",
        mapQuery: "Ram Ki Paidi Ayodhya",
      },
      {
        name: "Kanak Bhawan & Guptar Ghat",
        spotType: "Heritage Shrine & Quiet Ghat",
        description: "Palatial Bundela-gifted courtyard shrine and quiet 19th-century river ghat.",
        bestTime: "8:00 AM or 5:00 PM",
        entryFee: "Free",
        duration: "1 hr",
        routeDirections: "Kanak Bhawan 1.2 km from station; Guptar Ghat 9 km west in Cantt.",
        transportTip: "Level inner courtyard at Kanak Bhawan.",
        mapQuery: "Kanak Bhawan Ayodhya",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Lata Mangeshkar Chowk & Ram Ki Paidi",
        walkTime: "Start · 25 min",
        summary: "Walk beside calm Sarayu river channels and chhatris.",
        audioStory: "Admire the evening illumination reflected across Sarayu water channels.",
        accessibilityNote: "Level upper promenade.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Janmabhoomi Path, Kanak Bhawan & Naya Ghat",
        walkTime: "Morning · 2.5 hrs",
        summary: "Complete temple corridor, palace courtyard, and riverfront circuit.",
        audioStory: "Notice intricately carved pillars in pink Rajasthani sandstone.",
        accessibilityNote: "Free battery carts and wheelchairs for seniors.",
      },
    ],
    famousFoods: [
      {
        dishName: "Bedmi Poori, Aloo Jhol & Khoya Laddoo",
        dietary: "Veg",
        priceRange: "₹40 – ₹120",
        bestTimeOfDay: "Morning & All Day",
        description: "Crisp spiced pooris with runny cumin potato curry and rich khoya prasad sweets.",
        iconicSpot: "Hanuman Garhi Lane & Naya Ghat Halwais",
        foodStreetArea: "Ram Path / Hanuman Garhi Chowk",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Hanuman Garhi Ayodhya",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Ram Path & Tedhi Bazaar Heritage Shops",
        famousFor: "Ayodhya Jaggery (ODOP), wooden Ram Darbar carvings & brass diyas",
        odopOrCraftLabel: "ODOP Ayodhya District",
        timings: "9:30 AM – 9:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Look for spiced organic local jaggery alongside certified woodcraft.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Tedhi Bazaar Ayodhya",
      },
    ],
    localHighlights: [
      {
        title: "Ayodhya Deepotsav",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "October–November",
        description: "Riverfront illumination across Ram Ki Paidi and classical Ramlila.",
        whereToFind: "Ram Ki Paidi.",
        mapQuery: "Ram Ki Paidi Ayodhya",
      },
    ],
    nearestHospital: {
      name: "Rajarshi Dashrath Medical College / Shri Ram Hospital",
      area: "Darshan Nagar / Ramkot",
      phone: "05278-232020",
      note: "24x7 emergency & ambulance (108 / 112).",
    },
    facilities: [
      { name: "Janmabhoomi Path Facilitation Centre", type: "Public Toilets", landmark: "Birla Dharmshala Entry", hours: "5:00 AM – 10:30 PM", accessibility: "Wheelchair ramps" },
      { name: "Ram Ki Paidi Water Booths", type: "Drinking Water", landmark: "Naya Ghat", hours: "24 Hours", accessibility: "Step-free" },
    ],
  },
  {
    id: "lucknow-up",
    name: "Lucknow",
    displayName: "Lucknow (Uttar Pradesh)",
    state: "Uttar Pradesh",
    group: "heritage_city",
    regionCategory: "Nawabi Architectural & Craft Capital",
    tagline: "Lakhori-brick Imambaras, Chikankari embroidery, and Awadhi culinary heritage",
    overview:
      "Along the Gomti River, Lucknow showcases 18th–19th century Awadhi lime-stucco architecture, refined Chikankari needlework, and legendary royal kitchens.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    storyOfOrigin: {
      howItBegan:
        "Centred around Lakshmana Tila on the Gomti, Lucknow rose in 1775 CE when Nawab Asaf-ud-Daula shifted Awadh's capital here from Faizabad, commissioning Bara Imambara (1784 CE) and Rumi Darwaza.",
      originLegends:
        "Regional tradition links 'Lakshmanapuri' to Rama's brother Lakshmana, while popular lore recalls Bara Imambara as a noble famine-relief project built by day and repaired by aristocrats at night.",
      turningPoints: [
        { era: "1775 CE", milestone: "Asaf-ud-Daula makes Lucknow the capital of Awadh." },
        { era: "1784 CE", milestone: "Architect Kifayatullah completes Bara Imambara's pillarless vaulted hall." },
        { era: "1857 CE", milestone: "The Residency becomes a landmark of the 1857 uprising." },
      ],
    },
    samplePrompts: [
      "How was Bara Imambara built without iron beams?",
      "Where can I buy authentic hand-stitched Lucknow Chikankari?",
      "Explain Lucknow's Basket Chaat and Galouti Kebab heritage",
    ],
    featuredGuide: {
      title: "Bara Imambara & Rumi Darwaza · बड़ा इमामबाड़ा",
      recordedHistoryAndFacts:
        "Completed in 1784 CE by Kifayatullah, Bara Imambara's central hall spans 50 by 16 metres unsupported by pillars or iron girders using interlocking Lakhori bricks.",
      folkloreAndLocalTradition:
        "Popular lore remembers the monument as a charitable famine-relief project allowing dignified families to earn wages discreetly.",
      accessibilityNotes:
        "Grassy gardens and Shahi Baoli outer courtyard are flat and wheelchair friendly.",
      practicalTips:
        "Buy the composite heritage ticket covering Chota Imambara and Picture Gallery.",
    },
    sightseeingSpots: [
      {
        name: "Bara Imambara & Rumi Darwaza",
        spotType: "1784 CE Awadhi Monument",
        description: "Pillarless vaulted hall, Shahi Baoli stepwell, and ornate 60-foot gateway.",
        bestTime: "8:00 AM – 11:00 AM",
        entryFee: "₹50 Indian · ₹500 Foreign",
        duration: "1 hr 30 mins",
        routeDirections: "5.5 km northwest of Charbagh Railway Station via Chowk.",
        transportTip: "Metro to Charbagh, then auto/cab to Husainabad (20 mins).",
        mapQuery: "Bara Imambara Lucknow",
      },
      {
        name: "The Residency Museum",
        spotType: "1857 Heritage Complex",
        description: "Shaded garden ruins and museum chronicling 1857.",
        bestTime: "9:00 AM – 4:30 PM (Closed Mondays)",
        entryFee: "₹25 Indian",
        duration: "1 hr",
        routeDirections: "4 km north of Charbagh along MG Marg.",
        transportTip: "Flat shaded lawns ideal for seniors.",
        mapQuery: "The Residency Lucknow",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Bara Imambara to Clock Tower Boulevard",
        walkTime: "Start · 30 min",
        summary: "Walk through Rumi Darwaza to the 1881 Husainabad Clock Tower.",
        audioStory: "Spot the twin-fish Mahi-Maratib emblem sculpted atop the arches.",
        accessibilityNote: "Wide level promenade.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Husainabad & Chowk Chikankari Trail",
        walkTime: "Morning · 2.5 hrs",
        summary: "Combine Imambara architecture with Chowk hand-embroidery lanes.",
        audioStory: "Explore 36 traditional stitches of Lucknowi Chikankari.",
        accessibilityNote: "Level bazaar roads.",
      },
    ],
    famousFoods: [
      {
        dishName: "Tunday Galouti Kebab & Ulta Tawa Paratha",
        dietary: "Non-Veg",
        priceRange: "₹120 – ₹220",
        bestTimeOfDay: "Evening & Dinner",
        description: "Tender minced kebab tempered with 100+ aromatics and saffron-brushed flatbread.",
        iconicSpot: "Tunday Kababi (Akbari Gate & Aminabad)",
        foodStreetArea: "Chowk & Aminabad",
        companionFit: ["Solo", "Family with Kids"],
        mapQuery: "Tunday Kababi Chowk Lucknow",
      },
      {
        dishName: "Tokri (Basket) Chaat",
        dietary: "Veg",
        priceRange: "₹140 – ₹200",
        bestTimeOfDay: "Evening",
        description: "Crisp grated-potato basket topped with curd, tamarind chutney, and bhalla.",
        iconicSpot: "Royal Cafe",
        foodStreetArea: "Hazratganj",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Royal Cafe Hazratganj Lucknow",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Chowk Bazaar & SEWA Chikankari",
        famousFor: "Hand-embroidered Lucknowi Chikankari & Zardozi",
        odopOrCraftLabel: "GI Certified · Lucknow ODOP",
        timings: "11:00 AM – 9:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Visit SEWA Chikankari in Chowk for authentic hand-stitched cotton and georgette.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "SEWA Chikankari Chowk Lucknow",
      },
    ],
    localHighlights: [
      {
        title: "Lucknow Mahotsav & Kathak Heritage",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "Winter Season",
        description: "Classical Lucknow Gharana Kathak and craft exhibitions.",
        whereToFind: "Bhatkhande University & Sanatgada.",
        mapQuery: "Hazratganj Lucknow",
      },
    ],
    nearestHospital: {
      name: "KGMU Trauma Centre",
      area: "Chowk, Lucknow",
      phone: "0522-2257540",
      note: "24x7 emergency care (108 / 112).",
    },
    facilities: [
      { name: "Bara Imambara Washrooms", type: "Public Toilets", landmark: "Ticket Lawn", hours: "6:00 AM – 5:30 PM", accessibility: "Ramp access" },
      { name: "Hazratganj Metro Water", type: "Drinking Water", landmark: "Gate 2", hours: "6:00 AM – 10:00 PM", accessibility: "Elevators" },
    ],
  },
  {
    id: "chunar-up",
    name: "Chunar",
    displayName: "Chunar (Uttar Pradesh)",
    state: "Uttar Pradesh",
    group: "small_town",
    regionCategory: "Small Fort & Pottery Town · Mirzapur",
    tagline: "Ganga-bend sandstone hill fort, Mauryan quarries, and GI-tagged clay pottery",
    overview:
      "Overlooking a sharp bend of the Ganga 38 km southwest of Varanasi, Chunar supplied the buff sandstone used for Ashokan Pillars and preserves a historic hill fort and clay pottery guilds.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    storyOfOrigin: {
      howItBegan:
        "From the 3rd century BCE, Chunar sandstone quarries supplied monolithic stone for Mauryan Ashokan Pillars. Strategic Chunar Fort saw expansions under Gurjara-Pratiharas, Sher Shah Suri (1530s), and Akbar (1575 CE).",
      originLegends:
        "Local lore connects the hill ('Charanadri') to Vishnu's Vamana avatar and remembers poet-king Bhartrihari meditating inside the fort.",
      turningPoints: [
        { era: "3rd Century BCE", milestone: "Chunar quarries furnish stone for polished Ashokan Pillars." },
        { era: "1532 – 1575 CE", milestone: "Sher Shah Suri and Akbar fortify Chunar above the Ganga." },
        { era: "20th – 21st Century", milestone: "Chunar glazed clay pottery earns GI recognition." },
      ],
    },
    samplePrompts: [
      "How did Chunar quarries supply Ashokan Pillars?",
      "Tell me about Chunar Fort's Sonwa Mandap",
      "Where can I visit Chunar's clay pottery artisans?",
    ],
    featuredGuide: {
      title: "Chunar Fort & Ashokan Quarries · चुनार का किला",
      recordedHistoryAndFacts:
        "Petrological studies confirm Mauryan Ashokan Pillars across North India were carved from Chunar buff sandstone. The hilltop fort preserves Sher Shah Suri ramparts and Akbar's Sonwa Mandap.",
      folkloreAndLocalTradition:
        "Devotees revere Bhartrihari's samadhi inside the fort, and Hindi classic Chandrakanta drew inspiration from Chunargarh.",
      accessibilityNotes:
        "Vehicles drive up the paved ramp straight into the fort's central courtyard.",
      practicalTips:
        "Pair Chunar Fort with potter workshops in Tekaur / Balughat.",
    },
    sightseeingSpots: [
      {
        name: "Chunar Hill Fort & Sonwa Mandap",
        spotType: "Riverfront Hill Fort",
        description: "Sandstone fort overlooking the Ganga bend with 28-pillar Sonwa Mandap.",
        bestTime: "7:00 AM – 10:30 AM or 4:00 PM – 6:00 PM",
        entryFee: "Free",
        duration: "1 hr 15 mins",
        routeDirections: "3 km north of Chunar Junction Railway Station.",
        transportTip: "Auto takes 10 mins straight up to the courtyard.",
        mapQuery: "Chunar Fort Mirzapur Uttar Pradesh",
      },
      {
        name: "Chunar Pottery Craft Mohalla",
        spotType: "Artisan Pottery Quarter",
        description: "Watch fifth-generation potters craft and glaze red-and-black terracotta.",
        bestTime: "10:00 AM – 4:00 PM",
        entryFee: "Free",
        duration: "45 mins",
        routeDirections: "1.5 km from Chunar Station near Tekaur.",
        transportTip: "Short e-rickshaw ride.",
        mapQuery: "Chunar Pottery Mirzapur Uttar Pradesh",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Chunar Fort Bastion & Sonwa Mandap",
        walkTime: "Start · 30 min",
        summary: "Explore Ganga viewpoints and carved 16th-century sandstone pavilions.",
        audioStory: "Barges below once loaded sandstone blocks destined for Mauryan capitals.",
        accessibilityNote: "Car drop inside outer gate.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Chunar Fort & Pottery Kilns",
        walkTime: "Morning · 2 hrs",
        summary: "Combine fort ramparts with live clay-glazing kilns.",
        audioStory: "See how natural mineral slips create Chunar's warm terracotta sheen.",
        accessibilityNote: "Level courtyard and street lanes.",
      },
    ],
    famousFoods: [
      {
        dishName: "Chhena Dahi Vada & Baati Chokha",
        dietary: "Veg",
        priceRange: "₹40 – ₹100",
        bestTimeOfDay: "Evening",
        description: "Soft cottage-cheese vadas in spiced curd and wood-roasted wheat baatis.",
        iconicSpot: "Sadar Bazaar Chowk Stalls",
        foodStreetArea: "Chunar Main Market",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Chunar Bazaar Mirzapur",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Chunar Pottery & Clay Craft Market",
        famousFor: "Glazed Chunar clay pottery, kulhads & sandstone lamps",
        odopOrCraftLabel: "GI Certified Craft",
        timings: "9:30 AM – 7:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Visit kilns along Tekaur/Qila Road for direct artisan prices.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Chunar Pottery Market Uttar Pradesh",
      },
    ],
    localHighlights: [
      {
        title: "Lakhania Dari Falls",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "30 km South · Vindhya Plateau",
        description: "Scenic sandstone cascades and rock-art shelters.",
        whereToFind: "Ahraura Road.",
        mapQuery: "Lakhania Dari Waterfall Mirzapur",
      },
    ],
    nearestHospital: {
      name: "CHC Chunar",
      area: "Station Road",
      phone: "108",
      note: "Emergency stabilization; trauma care in Varanasi (38 km).",
    },
    facilities: [
      { name: "Chunar Fort Restroom", type: "Public Toilets", landmark: "Fort Gate", hours: "7:00 AM – 6:00 PM", accessibility: "Ground level" },
    ],
  },
  {
    id: "orchha-mp",
    name: "Orchha",
    displayName: "Orchha (Madhya Pradesh)",
    state: "Madhya Pradesh",
    group: "small_town",
    regionCategory: "Small Heritage Town · Bundelkhand",
    tagline: "16th-century Bundela palaces, Betwa riverfront chhatris, and Ram Raja heritage",
    overview:
      "Founded in 1531 CE by Bundela chief Rudra Pratap Singh on the Betwa River, Orchha preserves medieval palaces, mineral-pigment murals, and towering cenotaphs.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    secondaryImage: IMG_TEMPLE_CARVING,
    storyOfOrigin: {
      howItBegan:
        "Founded in 1531 CE by Bundela Rajput chief Rudra Pratap Singh along a rocky island of the Betwa River, Orchha flourished under Madhukar Shah and Bir Singh Deo (1605–1627 CE), who built Raja Mahal and Jahangir Mahal.",
      originLegends:
        "Queen Ganesh Kunwari brought Lord Rama's idol on foot from Ayodhya; because the deity stayed inside her palace rather than moving to Chaturbhuj Temple, Orchha reveres Ram Raja as its reigning king.",
      turningPoints: [
        { era: "1531 CE", milestone: "Rudra Pratap Singh establishes Orchha beside the Betwa." },
        { era: "1605 – 1627 CE", milestone: "Bir Singh Deo constructs Jahangir Mahal with turquoise tiles and murals." },
        { era: "1783 CE", milestone: "Capital shifts to Tikamgarh, preserving Orchha's palaces intact." },
      ],
    },
    samplePrompts: [
      "Tell me about the Royal Chhatris on Betwa River",
      "What is the history of Jahangir Mahal and Bundela murals?",
      "Explain why Ram Raja Temple is worshipped as a king",
    ],
    featuredGuide: {
      title: "Orchha Chhatris (Bundela Cenotaphs) · ओरछा छतरियाँ",
      recordedHistoryAndFacts:
        "Standing along Kanchan Ghat on the Betwa River, these 14 cenotaphs were erected from the late 16th to 18th centuries combining Nagara shikharas with corner domes.",
      folkloreAndLocalTradition:
        "Residents call Ram Raja 'Sarkar' (King), and Madhya Pradesh Police accord him a daily ceremonial guard of honour.",
      accessibilityNotes:
        "The Chhatri garden has flat stone pathways suitable for wheelchairs and seniors.",
      practicalTips:
        "Visit at 6:30 AM or 5:00 PM for warm sandstone light and to spot Indian vultures on the spires.",
    },
    sightseeingSpots: [
      {
        name: "Orchha Fort Complex (Jahangir & Raja Mahal)",
        spotType: "16th–17th Century Palaces",
        description: "Bundela palaces featuring preserved natural-pigment murals and hanging jharokhas.",
        bestTime: "8:30 AM – 11:30 AM",
        entryFee: "₹10 Indian · ₹250 Foreign",
        duration: "1 hr 45 mins",
        routeDirections: "500 m east of Ram Raja Chowk; 18 km from Jhansi Junction.",
        transportTip: "Auto from Jhansi Station (30 mins); level bridge to fort gate.",
        mapQuery: "Jahangir Mahal Orchha Madhya Pradesh",
      },
      {
        name: "Kanchan Ghat Royal Chhatris",
        spotType: "Riverfront Cenotaphs",
        description: "14 serene Bundela sandstone cenotaphs beside the Betwa River.",
        bestTime: "5:00 PM – 6:30 PM",
        entryFee: "Composite Fort Ticket",
        duration: "45 mins",
        routeDirections: "800 m south of Ram Raja Temple.",
        transportTip: "3-min e-rickshaw or flat walk.",
        mapQuery: "Royal Chhatris Orchha",
      },
      {
        name: "Ram Raja & Lakshmi Narayan Temples",
        spotType: "Palace Shrine & Mural Gallery",
        description: "Palace-temple revered as sovereign king plus hilltop 18th–19th century wall murals.",
        bestTime: "8:00 AM – 4:00 PM",
        entryFee: "Free (Ram Raja) · Composite (Lakshmi Narayan)",
        duration: "1 hr",
        routeDirections: "Ram Raja in Chowk; Lakshmi Narayan 1 km west.",
        transportTip: "Auto to base of Lakshmi Narayan hillock.",
        mapQuery: "Ram Raja Temple Orchha",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Ram Raja Courtyard & Fort Bridge",
        walkTime: "Start · 25 min",
        summary: "Walk from Rani Mahal courtyard across the causeway into Jahangir Mahal.",
        audioStory: "Bir Singh Deo built Jahangir Mahal to honour Emperor Jahangir's visit.",
        accessibilityNote: "Flat courtyard and gentle ramp.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Fort Palaces, Lakshmi Narayan & Kanchan Ghat Chhatris",
        walkTime: "Morning · 3 hrs",
        summary: "Complete Bundela mural and riverfront cenotaph circuit.",
        audioStory: "End beside the Betwa River as the Chhatris glow warm amber.",
        accessibilityNote: "Flat garden walkways at Chhatris.",
      },
    ],
    famousFoods: [
      {
        dishName: "Bundeli Kadhi, Dal Bafla & Mahua Laddoo",
        dietary: "Veg",
        priceRange: "₹140 – ₹280",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Baked wheat bafla dipped in ghee with tangy kadhi and Mahua-flower laddoos.",
        iconicSpot: "Betwa Tarang & Family Kitchens",
        foodStreetArea: "Ram Raja Chowk",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Ram Raja Chowk Orchha",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Taramani Artisan Craft Centre",
        famousFor: "Lost-wax Dhokra brass art & Bundeli terracotta",
        odopOrCraftLabel: "Bundelkhand Craft Guild",
        timings: "9:30 AM – 8:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Look for solid lost-wax brass figures.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Orchha Fort Bridge Market",
      },
    ],
    localHighlights: [
      {
        title: "Orchha Wildlife Sanctuary",
        category: "Nearby Sites & Festivals",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Across Betwa Bridge",
        description: "Peaceful deciduous forest with spotted deer and 200+ bird species.",
        whereToFind: "1.5 km east across Betwa bridge.",
        mapQuery: "Orchha Wildlife Sanctuary",
      },
    ],
    nearestHospital: {
      name: "CHC Orchha / Jhansi Medical College",
      area: "Orchha Main Road · Jhansi (18 km)",
      phone: "108",
      note: "First aid at Orchha CHC; full trauma in Jhansi.",
    },
    facilities: [
      { name: "Fort Complex Restrooms", type: "Public Toilets", landmark: "ASI Ticket Counter", hours: "7:00 AM – 6:30 PM", accessibility: "Step-free path" },
      { name: "Ram Raja Chowk Water Booth", type: "Drinking Water", landmark: "Main Square", hours: "24 Hours", accessibility: "Level access" },
    ],
  },
  {
    id: "mandu-mp",
    name: "Mandu",
    displayName: "Mandu (Madhya Pradesh)",
    state: "Madhya Pradesh",
    group: "small_town",
    regionCategory: "Small Hill-Fort Town · Malwa",
    tagline: "Malwa Sultanate stone palaces, Jahaz Mahal waterworks, and baobab groves",
    overview:
      "Perched on a Vindhyan plateau in Dhar district, Mandu preserves Afghan-Malwa stone architecture and ingenious monsoon water engineering.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    storyOfOrigin: {
      howItBegan:
        "Inscriptions attest to Mandavgarh as a Paramara fortress by the 10th–11th century CE. In 1401 CE, Dilawar Khan made it capital of the Malwa Sultanate, followed by Hoshang Shah and Ghiyas-ud-din Khalji who built Jahaz Mahal and Hoshang Shah's marble tomb.",
      originLegends:
        "Malwa ballads remember Sultan Baz Bahadur and poet-singer Rani Roopmati, whose cliffside pavilion faces the distant Narmada river.",
      turningPoints: [
        { era: "10th – 11th Century CE", milestone: "Paramara rulers fortify Mandavgarh." },
        { era: "1401 – 1500 CE", milestone: "Malwa Sultans construct Jahaz Mahal and India's earliest marble mausoleum." },
        { era: "1561 CE", milestone: "Mughal annexations bring Jahangir's monsoon court visits." },
      ],
    },
    samplePrompts: [
      "How did Jahaz Mahal's water engineering work?",
      "What is the history of Hoshang Shah's marble tomb?",
      "Tell me about Baz Bahadur and Rani Roopmati",
    ],
    featuredGuide: {
      title: "Jahaz Mahal & Royal Enclave · जहाज़ महल, मांडू",
      recordedHistoryAndFacts:
        "Constructed in the late 15th century between Kapur Talao and Munj Talao, Jahaz Mahal used Persian wheels and aqueducts for natural cooling.",
      folkloreAndLocalTradition:
        "Ballads celebrate Baz Bahadur and Rani Roopmati's musical romance overlooking the Nimar plains.",
      accessibilityNotes:
        "Royal Enclave has broad, level sandstone walkways across the garden plaza.",
      practicalTips:
        "July–February offers lush green valleys and filled lakes.",
    },
    sightseeingSpots: [
      {
        name: "Jahaz Mahal & Hindola Mahal",
        spotType: "15th-Century Water Palace",
        description: "Ship-shaped palace flanked by twin lakes and sloping audience hall.",
        bestTime: "7:30 AM – 10:30 AM",
        entryFee: "₹25 Indian · ₹300 Foreign",
        duration: "1 hr 30 mins",
        routeDirections: "1 km north of Mandu Bus Stand; 35 km from Dhar.",
        transportTip: "Auto from village; flat lawns throughout.",
        mapQuery: "Jahaz Mahal Mandu Madhya Pradesh",
      },
      {
        name: "Hoshang Shah's Tomb & Rani Roopmati Pavilion",
        spotType: "Marble Mausoleum & Cliff Lookout",
        description: "1440 CE marble lattice tomb plus cliffside sunset pavilion.",
        bestTime: "4:00 PM – 6:30 PM",
        entryFee: "₹25 Indian",
        duration: "1 hr 30 mins",
        routeDirections: "Hoshang Tomb in village; Roopmati Pavilion 5.5 km south.",
        transportTip: "Cab drives right to base lot.",
        mapQuery: "Rani Roopmati Pavilion Mandu",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Jahaz Mahal & Champa Baoli",
        walkTime: "Start · 35 min",
        summary: "Walk between twin lakes and inspect subterranean cooling channels.",
        audioStory: "Malwa builders engineered cool underground retreats beside stepwells.",
        accessibilityNote: "Level lawn paths.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Royal Enclave, Jami Masjid & Roopmati Pavilion",
        walkTime: "Morning · 3 hrs",
        summary: "Compare Sultanate marble latticework with hilltop Narmada views.",
        audioStory: "Mughal architects studied Hoshang Shah's Tomb proportions.",
        accessibilityNote: "Flat courtyards.",
      },
    ],
    famousFoods: [
      {
        dishName: "Dal Paniya & Bhutta Khichdi",
        dietary: "Veg",
        priceRange: "₹120 – ₹240",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Fire-baked maize flour bread paired with spiced dal and sweet-corn khichdi.",
        iconicSpot: "MPT Malwa Resort & Chowk Dhabas",
        foodStreetArea: "Mandu Bus Stand",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Mandu Village Madhya Pradesh",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Jami Masjid Craft Stalls",
        famousFor: "Natural-dye Bagh block prints (GI) & baobab curios",
        odopOrCraftLabel: "Dhar GI Craft",
        timings: "9:00 AM – 7:00 PM",
        closedDay: "Open Daily",
        authenticityTip: "Look for earthy black-and-red alum/iron vegetable dyes.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Jami Masjid Mandu",
      },
    ],
    localHighlights: [
      {
        title: "Mandu Utsav & Baobab Groves",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "Dec–Jan Festival",
        description: "Ancient baobab trees along plateau roads.",
        whereToFind: "Mandavgarh plateau.",
        mapQuery: "Mandu Fort Madhya Pradesh",
      },
    ],
    nearestHospital: {
      name: "PHC Mandav / District Hospital Dhar",
      area: "Mandu Bus Stand · Dhar (35 km)",
      phone: "108",
      note: "Emergency at PHC; full care in Dhar.",
    },
    facilities: [
      { name: "Jahaz Mahal Restrooms", type: "Public Toilets", landmark: "Ticket Office", hours: "7:00 AM – 6:30 PM", accessibility: "Ground floor" },
    ],
  },
  {
    id: "chanderi-mp",
    name: "Chanderi",
    displayName: "Chanderi (Madhya Pradesh)",
    state: "Madhya Pradesh",
    group: "small_town",
    regionCategory: "Small Weaver & Fort Town · Ashoknagar",
    tagline: "Chanderi handloom sarees, Badal Mahal Gate, and medieval sandstone baolis",
    overview:
      "Tucked among Vindhya hills, Chanderi blends 11th–16th century forts, stepwells, and over 3,000 active handloom families.",
    heroImage: IMG_CRAFTS_ODOP,
    storyOfOrigin: {
      howItBegan:
        "Early inscriptions link Old Chanderi to 10th–11th century Pratiharas before shifting to the fortified Malwa Sultanate town featuring Koshak Mahal (1445 CE) and Battisi Baoli (1485 CE).",
      originLegends:
        "Tradition links ancient Chanderi to Mahabharata's Shishupala, while weaver lore recalls muslin fine enough to pass through a ring.",
      turningPoints: [
        { era: "11th Century CE", milestone: "Budhi Chanderi thrives as a sculptural hub." },
        { era: "1445 – 1495 CE", milestone: "Koshak Mahal, Battisi Baoli, and Kati Ghati pass built." },
        { era: "19th – 21st Century", milestone: "Chanderi silk-cotton handloom earns GI certification." },
      ],
    },
    samplePrompts: [
      "What makes Chanderi handloom weaving unique?",
      "Tell me about Koshak Mahal and Badal Mahal Gate",
      "Explain the carvings on Battisi Baoli stepwell",
    ],
    featuredGuide: {
      title: "Chanderi Handloom & Badal Mahal Gate · चंदेरी",
      recordedHistoryAndFacts:
        "15th-century Sultanate monuments like Koshak Mahal (1445 CE) and Badal Mahal Gate sit along the historic Malwa-Delhi trade route that nurtured Chanderi's weaving guild.",
      folkloreAndLocalTradition:
        "Weavers trace motifs like Asharfi and Chatai to temple stone carvings.",
      accessibilityNotes:
        "Bahar Shahar weaver lanes and Sadar Bazaar are flat and e-rickshaw accessible.",
      practicalTips:
        "Visit workshops 10 AM – 4 PM and look for GI Handloom Mark labels.",
    },
    sightseeingSpots: [
      {
        name: "Badal Mahal Gate & Battisi Baoli",
        spotType: "15th-Century Gate & Stepwell",
        description: "Double-arched Malwa sandstone gateway and 32-flight stepped well (1485 CE).",
        bestTime: "8:00 AM – 11:00 AM",
        entryFee: "Free",
        duration: "1 hr",
        routeDirections: "1 km from Chanderi Bus Stand; 36 km from Lalitpur Station.",
        transportTip: "Auto from Lalitpur (50 mins).",
        mapQuery: "Badal Mahal Gate Chanderi",
      },
      {
        name: "Chanderi Fort & Kati Ghati",
        spotType: "Hill Fort & Rock Gate",
        description: "Hilltop ramparts and 1495 CE gateway cut through solid hillside rock.",
        bestTime: "4:00 PM – 6:30 PM",
        entryFee: "Free",
        duration: "1 hr",
        routeDirections: "2 km west of Chanderi Chowk.",
        transportTip: "Cab drives up to courtyard.",
        mapQuery: "Chanderi Fort Madhya Pradesh",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Badal Mahal Gate to Bunkar Mohalla",
        walkTime: "Start · 30 min",
        summary: "Walk from 15th-century sandstone arches into active pit-loom workshops.",
        audioStory: "Watch two weavers interlace silk warp and fine cotton weft side by side.",
        accessibilityNote: "Flat town lanes.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Chanderi Fort, Koshak Mahal & Pranpur Village",
        walkTime: "Morning · 3 hrs",
        summary: "Combine hilltop views with India's first Craft Handloom Tourism Village.",
        audioStory: "Every stone-walled lane in Pranpur features working looms.",
        accessibilityNote: "Flat village lanes.",
      },
    ],
    famousFoods: [
      {
        dishName: "Chanderi Poha & Mawa Jalebi",
        dietary: "Veg",
        priceRange: "₹40 – ₹120",
        bestTimeOfDay: "Morning",
        description: "Fluffy fennel-garnished poha and dark-caramelized khoya jalebi.",
        iconicSpot: "Sadar Bazaar Halwais",
        foodStreetArea: "Sadar Bazaar",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Sadar Bazaar Chanderi",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Pranpur Craft Village & Bunkar Vikas Sanstha",
        famousFor: "GI-Tagged Chanderi Katan Silk & Tissue Sarees",
        odopOrCraftLabel: "Ashoknagar ODOP · GI",
        timings: "10:00 AM – 7:30 PM",
        closedDay: "Open Daily",
        authenticityTip: "Buy direct from weaver cooperatives for authentic Silk Mark weaves.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Pranpur Handloom Village Chanderi",
      },
    ],
    localHighlights: [
      {
        title: "Pranpur Craft Tourism Village",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "4 km East",
        description: "Living handloom tourism village amidst Vindhyan hills.",
        whereToFind: "East of Chanderi.",
        mapQuery: "Pranpur Village Chanderi",
      },
    ],
    nearestHospital: {
      name: "Civil Hospital Chanderi",
      area: "Mungaoli Road",
      phone: "108",
      note: "24x7 emergency unit.",
    },
    facilities: [
      { name: "ASI Museum Restrooms", type: "Public Toilets", landmark: "Near Bus Stand", hours: "9:00 AM – 5:30 PM", accessibility: "Step-free" },
    ],
  },
  {
    id: "kalpa-hp",
    name: "Kalpa",
    displayName: "Kalpa (Himachal Pradesh)",
    state: "Himachal Pradesh",
    group: "small_town",
    regionCategory: "Himalayan Heritage Village · Kinnaur",
    tagline: "Kath-Kuni cedar temples, apple orchards, and Kinner Kailash views",
    overview:
      "At 2,960 m in Kinnaur above the Sutlej valley, Kalpa preserves earthquake-resilient Kath-Kuni architecture and Hindu-Buddhist syncretism.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    storyOfOrigin: {
      howItBegan:
        "Historically known as Chini on the trans-Himalayan Sutlej trade route, Kalpa preserves multi-century Kath-Kuni timber-and-stone temples alongside the 1850s Hindustan-Tibet Road history.",
      originLegends:
        "Kinnauri lore reveres the 6,050 m Kinner Kailash peak across the gorge as Lord Shiva's winter abode.",
      turningPoints: [
        { era: "10th – 12th Century CE", milestone: "Rinchen Zangpo heritage shapes Hu-Bu-Lan-Kar Monastery." },
        { era: "1850s CE", milestone: "Chini serves as Lord Dalhousie's camp along the Hindustan-Tibet Road." },
        { era: "1960s – Present", milestone: "GI-tagged Kinnauri apples, shawls, and chilgoza nuts flourish." },
      ],
    },
    samplePrompts: [
      "How does earthquake-resistant Kath-Kuni architecture work?",
      "Tell me about Narayan-Nagini Temple",
      "Explain the folklore of Kinner Kailash peaks",
    ],
    featuredGuide: {
      title: "Narayan-Nagini Temple & Kath-Kuni Craft · कल्पा",
      recordedHistoryAndFacts:
        "Narayan-Nagini Temple uses alternating dressed stone and dry deodar cedar beams locked without mortar for seismic resilience.",
      folkloreAndLocalTradition:
        "Hindu village Devtas and Buddhist lamas share blessings at autumn Phulaich festivals.",
      accessibilityNotes:
        "At 2,960 m altitude, walk slowly; cars drop right near the temple courtyard.",
      practicalTips:
        "Best Kinner Kailash visibility is 6:00 AM – 8:30 AM.",
    },
    sightseeingSpots: [
      {
        name: "Narayan-Nagini Temple & Hu-Bu-Lan-Kar Gompa",
        spotType: "Kath-Kuni Heritage & Monastery",
        description: "Carved cedar pagoda temple just 350 m from an ancient Buddhist monastery.",
        bestTime: "6:30 AM – 10:00 AM",
        entryFee: "Free",
        duration: "1 hr",
        routeDirections: "8 km uphill from Reckong Peo Bus Stand.",
        transportTip: "Local cab or HRTC bus (25 mins).",
        mapQuery: "Narayan Nagini Temple Kalpa Himachal Pradesh",
      },
      {
        name: "Roghi Cliff & Suicide Point",
        spotType: "Sutlej Gorge Lookout",
        description: "Dramatic cliff view over apple orchards and the Sutlej gorge.",
        bestTime: "7:00 AM – 10:00 AM",
        entryFee: "Free",
        duration: "30 mins",
        routeDirections: "3 km west of Kalpa Chowk.",
        transportTip: "Taxi advised for seniors.",
        mapQuery: "Roghi Cliff Viewpoint Kalpa",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Narayan-Nagini Temple to Gompa Walk",
        walkTime: "Start · 25 min",
        summary: "Walk between Kinnauri cedar temple and Buddhist prayer wheels.",
        audioStory: "Wooden pins replace iron nails so timber frames flex safely in tremors.",
        accessibilityNote: "Level courtyard benches.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Old Chini Heritage Village & Orchards",
        walkTime: "Morning · 2 hrs",
        summary: "Explore carved wooden granaries and apple terraces.",
        audioStory: "Learn how families store dried apricots and walnuts.",
        accessibilityNote: "Pace slowly at high altitude.",
      },
    ],
    famousFoods: [
      {
        dishName: "Kinnauri Siddu & Chilgoza Pine Nuts",
        dietary: "Veg",
        priceRange: "₹80 – ₹220",
        bestTimeOfDay: "Lunch & Dinner",
        description: "Steamed walnut-stuffed wheat Siddu with ghee and local wild pine nuts.",
        iconicSpot: "Kalpa Homestay Kitchens",
        foodStreetArea: "Kalpa Chowk & Reckong Peo",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Kalpa Market Kinnaur",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Reckong Peo & Kalpa Women's Weaving Co-op",
        famousFor: "GI-tagged Kinnauri Woollen Shawls & Thepang Caps",
        odopOrCraftLabel: "Kinnaur GI Craft",
        timings: "9:30 AM – 7:00 PM",
        closedDay: "Sundays (some)",
        authenticityTip: "Look for geometric patterns woven into the weft rather than printed.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Reckong Peo Market Kinnaur",
      },
    ],
    localHighlights: [
      {
        title: "Phulaich (Festival of Flowers)",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "September Harvest",
        description: "Alpine flower offerings and Kinnauri Nati folk dances.",
        whereToFind: "Kalpa & Sangla.",
        mapQuery: "Kalpa Himachal Pradesh",
      },
    ],
    nearestHospital: {
      name: "Regional Hospital, Reckong Peo",
      area: "Reckong Peo (8 km)",
      phone: "01786-222234",
      note: "24x7 oxygen & emergency care.",
    },
    facilities: [
      { name: "Kalpa Chowk Public Toilet", type: "Public Toilets", landmark: "Bus Stand", hours: "6:30 AM – 8:30 PM", accessibility: "Roadside level" },
    ],
  },
  {
    id: "ut-ladakh",
    name: "Leh & Alchi",
    displayName: "Leh & Alchi (Ladakh)",
    state: "Ladakh",
    group: "state_ut",
    regionCategory: "Union Territory · Trans-Himalayan Heritage",
    tagline: "11th-century Alchi murals, Leh Palace, and Changthangi Pashmina",
    overview:
      "Along the Indus and Zanskar rivers, Ladakh preserves thousand-year-old Buddhist murals at Alchi and mud-brick Leh Old Town.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    storyOfOrigin: {
      howItBegan:
        "From the 10th–11th century CE, translator Rinchen Zangpo founded monasteries like Alchi Choskor with Indo-Kashmiri murals; in the 17th century, King Sengge Namgyal erected nine-storey Leh Palace.",
      originLegends:
        "Ladakhi chronicles describe the high passes as blessed by Padmasambhava, celebrated annually through monastic Cham mask dances.",
      turningPoints: [
        { era: "11th – 12th Century CE", milestone: "Alchi Choskor murals painted along the Indus." },
        { era: "1600 – 1642 CE", milestone: "Sengge Namgyal builds Leh Palace." },
        { era: "2019 CE – Present", milestone: "Union Territory status and Old Town restoration expand." },
      ],
    },
    samplePrompts: [
      "What makes Alchi Monastery's 11th-century murals unique?",
      "Tell me about Leh Old Town restoration",
      "Explain Ladakh's Changthangi Pashmina wool",
    ],
    featuredGuide: {
      title: "Alchi Choskor & Leh Palace · अलची व लेह पैलेस",
      recordedHistoryAndFacts:
        "Alchi Monastery (11th–12th century CE) preserves Ladakh's oldest surviving wall paintings and Kashmiri-style carved deodar woodwork.",
      folkloreAndLocalTradition:
        "Cham mask dances at Hemis and Thiksey symbolize overcoming obstacles with copper dungchen horns.",
      accessibilityNotes:
        "Rest 24–48 hours upon arrival by air (3,500 m) before climbing steep monastery stairs.",
      practicalTips:
        "Refill reusable bottles at Leh's Dzomsa glacier-water stations.",
    },
    sightseeingSpots: [
      {
        name: "Alchi Monastery Complex",
        spotType: "11th-Century Gompa",
        description: "Flat riverside monastery with thousand-year-old paintings.",
        bestTime: "9:00 AM – 4:00 PM",
        entryFee: "₹50",
        duration: "1 hr",
        routeDirections: "65 km west of Leh along NH-1.",
        transportTip: "Lower altitude (3,100 m) and flat lanes.",
        mapQuery: "Alchi Monastery Ladakh",
      },
      {
        name: "Leh Palace & Old Town",
        spotType: "17th-Century Palace",
        description: "Nine-storey mud-and-stone royal palace above Leh bazaar.",
        bestTime: "4:00 PM – 6:00 PM",
        entryFee: "₹25 Indian · ₹300 Foreign",
        duration: "1 hr",
        routeDirections: "1 km north of Leh Main Bazaar.",
        transportTip: "Cab drives to palace base.",
        mapQuery: "Leh Palace Ladakh",
      },
    ],
    expressWalk: [
      {
        stopNumber: 1,
        name: "Leh Main Bazaar & Mud-Brick Old Town",
        walkTime: "Start · 25 min",
        summary: "Gentle, flat walk through restored mud-and-timber houses.",
        audioStory: "Flat willow-twig roofs and rammed-earth walls naturally insulate homes.",
        accessibilityNote: "Level bazaar plaza.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Alchi Monastery & Indus Riverside",
        walkTime: "Morning · 2 hrs",
        summary: "Flat riverside shrines preserving 11th-century murals.",
        audioStory: "Admire jewel-like lapis blues inside Dukhang shrine.",
        accessibilityNote: "Flat pathway into courtyard.",
      },
    ],
    famousFoods: [
      {
        dishName: "Thukpa, Skyu & Sea-Buckthorn Tea",
        dietary: "Veg",
        priceRange: "₹120 – ₹280",
        bestTimeOfDay: "Lunch & Evening",
        description: "Warm hand-pulled noodle soups and golden sea-buckthorn berry infusion.",
        iconicSpot: "Alchi Kitchen & Tibetan Kitchen",
        foodStreetArea: "Fort Road, Leh",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Alchi Kitchen Leh Ladakh",
      },
    ],
    shoppingMarkets: [
      {
        marketName: "Leh Main Bazaar & Looms of Ladakh",
        famousFor: "GI-tagged Changthangi Pashmina & dried apricots",
        odopOrCraftLabel: "GI Certified Ladakh Craft",
        timings: "9:30 AM – 8:30 PM",
        closedDay: "Open Daily (Summer)",
        authenticityTip: "Buy from Looms of Ladakh women's collectives.",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        mapQuery: "Looms of Ladakh Leh",
      },
    ],
    localHighlights: [
      {
        title: "Hemis Tsechu Festival",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "Summer Calendar",
        description: "Monastic Cham mask dances and folk music.",
        whereToFind: "Hemis Monastery (45 km).",
        mapQuery: "Hemis Monastery Ladakh",
      },
    ],
    nearestHospital: {
      name: "SNM Hospital, Leh",
      area: "Skara Road, Leh",
      phone: "01982-252014",
      note: "24x7 high-altitude & oxygen care (112).",
    },
    facilities: [
      { name: "Leh Dzomsa Water & Toilets", type: "Drinking Water", landmark: "Main Bazaar", hours: "7:00 AM – 9:00 PM", accessibility: "Step-free" },
    ],
  },
];
