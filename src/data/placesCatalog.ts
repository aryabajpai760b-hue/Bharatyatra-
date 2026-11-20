import { PlaceDossier } from "../types";

export const IMG_MATHURA_GHAT = "/src/assets/images/hero_mathura_ghat_1795175693501.jpg";
export const IMG_ORCHHA_CHHATRIS = "/src/assets/images/heritage_orchha_cenotaphs_1795175693981.jpg";
export const IMG_CRAFTS_ODOP = "/src/assets/images/crafts_odop_indian_1795175695142.jpg";
export const IMG_TEMPLE_CARVING = "/src/assets/images/heritage_temple_carving_1795175695286.jpg";

export const ALL_INDIAN_STATES_AND_UTS: string[] = [
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam",
  "Bihar",
  "Chhattisgarh",
  "Goa",
  "Gujarat",
  "Haryana",
  "Himachal Pradesh",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
  "Andaman & Nicobar Islands",
  "Chandigarh",
  "Dadra & Nagar Haveli and Daman & Diu",
  "Delhi (NCT)",
  "Jammu & Kashmir",
  "Ladakh",
  "Lakshadweep",
  "Puducherry",
];

export const CURATED_PLACES: PlaceDossier[] = [
  {
    id: "mathura-up",
    name: "Mathura",
    displayName: "Mathura, Uttar Pradesh",
    state: "Uttar Pradesh",
    group: "heritage_city",
    regionCategory: "Major Pilgrimage & Archaeological City",
    tagline: "Yamuna ghats, Kushan-era sculpture, and living Braj craft traditions",
    overview:
      "Located on the western bank of the Yamuna, Mathura is one of South Asia's oldest continuously inhabited urban centres—once a northern capital of the Kushan Empire (1st–3rd century CE) and the cultural heart of Braj.",
    heroImage: IMG_MATHURA_GHAT,
    secondaryImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "Tell me about Vishram Ghat",
      "What is the history of Shri Krishna Janmasthan?",
      "Explain this Indian monument or carving",
    ],
    featuredGuide: {
      title: "Vishram Ghat, Yamuna Riverfront · विश्राम घाट",
      recordedHistoryAndFacts:
        "Vishram Ghat is the central riverfront terrace among Mathura's 25 traditional ghats along the Yamuna. Historical records and travelogues indicate its sandstone pavilions, arched colonnades, and stone steps were extensively rebuilt and patronized between the 16th and 19th centuries by regional rulers, merchants, and Maratha-era patrons. Adjacent shrines such as the Mukut Temple and Govardhan Nathji shrine display classic late-medieval North Indian red sandstone masonry.",
      folkloreAndLocalTradition:
        "According to Braj devotional tradition, after slaying the tyrant king Kansa, Lord Krishna and Balarama rested ('Vishram') at this very bend of the Yamuna. Every evening at dusk, priests perform the Yamuna Aarti with multi-tiered brass lamps while devotees float leaf-diyas onto the river as a mark of gratitude.",
      accessibilityNotes:
        "The main approach lane from Chhatta Bazaar is level for e-rickshaws up to 50 metres from the ghat arch. Stone steps descend toward the water without handrails in older sections; elderly visitors and wheelchair users can view the evening Yamuna Aarti comfortably from the upper sandstone verandah.",
      practicalTips:
        "Arrive 25 minutes before sunset for the evening aarti. Keep footwear at the manned shoe stalls near the archway, and beware of monkeys near the food stalls—secure spectacles and bags.",
      followUpSuggestions: [
        "What Kushan sculptures can I see at Government Museum Mathura?",
        "How do I reach Kusum Sarovar and Govardhan from here?",
        "Where is the oldest Sanjhi paper-stencil craft still practiced?",
      ],
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Vishram Ghat Sandstone Archway",
        walkTime: "Start · 0 min",
        summary: "Begin at the central riverfront terrace where 18th–19th century red sandstone pavilions overlook the Yamuna.",
        audioStory:
          "Welcome to Vishram Ghat, the historic heart of Mathura's riverfront. Look closely at the carved red sandstone arches—sourced from Karauli and Bharatpur quarries—supporting the chhatri domes above.",
        accessibilityNote: "Level upper terrace with stone ledges for seating; e-rickshaw drop-off 50 m away.",
      },
      {
        stopNumber: 2,
        name: "Dwarkadhish Temple Courtyard",
        walkTime: "6 min walk (420 m)",
        summary: "Built in 1814 CE by Seth Gokul Das Parikh of Gwalior State, noted for its painted Rajasthani-style courtyard ceiling.",
        audioStory:
          "Just inside the bustling Chhatta Bazaar lanes stands Dwarkadhish Temple, constructed in 1814 CE. Its central mandapa features vibrant ceiling paintings depicting Braj seasonal festivals and Krishna's life.",
        accessibilityNote: "6 broad entrance steps; shaded marble courtyard inside with benches along the side colonnade.",
      },
      {
        stopNumber: 3,
        name: "Chhatta Bazaar & Traditional Peda Halwais",
        walkTime: "4 min walk (300 m)",
        summary: "Historic spice and sweet market linking the ghats to the old city core, famous for slow-caramelized Mathura Peda.",
        audioStory:
          "Walk through Chhatta Bazaar where generations of halwais simmer buffalo-milk khoya in heavy iron kadhais for hours with cardamom until it turns deep caramel brown.",
        accessibilityNote: "Narrow paved bazaar lane; best walked before 11 AM or after 4 PM to avoid peak two-wheeler traffic.",
      },
      {
        stopNumber: 4,
        name: "Kans Qila Ramparts Viewpoint",
        walkTime: "8 min walk (650 m)",
        summary: "Riverfront brick-and-stone bastion rebuilt by Raja Man Singh I of Amber and Raja Todar Mal in the late 16th century.",
        audioStory:
          "Along the northern bend rises Kans Qila. While local lore links this mound to King Kansa, architectural surveys show the standing ramparts date to Mughal-Rajput construction under Akbar's court in the 16th century.",
        accessibilityNote: "Gentle uphill approach; viewing possible from the lower riverside road for those avoiding climbs.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Government Museum, Dampier Nagar",
        walkTime: "Start · 45 min visit",
        summary: "Founded in 1874 CE by F.S. Growse; houses one of the world's finest collections of red-sandstone Kushan & Gupta sculptures.",
        audioStory:
          "Begin your half-day heritage trail at the Government Museum in Dampier Nagar. Founded in 1874, its octagonal galleries preserve headless portraits of Kushan Emperor Kanishka and early Mathura-school Buddha and Jain Tirthankara images.",
        accessibilityNote: "Wheelchair ramp at main entrance, level ground-floor galleries, clean restrooms, and garden benches.",
      },
      {
        stopNumber: 2,
        name: "Shri Krishna Janmasthan Complex (Katra Keshavdev)",
        walkTime: "10 min e-rickshaw · 50 min",
        summary: "Archaeological mound (Katra) showing layered settlements from Mauryan-Kushan eras alongside the modern 20th-century temple complex.",
        audioStory:
          "Katra Keshavdev sits atop one of Mathura's most significant ancient mounds. Excavations in the area uncovered Kushan and Gupta architectural fragments, while the present complex was constructed in the mid-20th century.",
        accessibilityNote: "Paved pedestrian plaza, cloakroom lockers for phones/bags, wheelchair assistance available at Gate 3.",
      },
      {
        stopNumber: 3,
        name: "Potra Kund Stepped Tank",
        walkTime: "5 min walk (350 m)",
        summary: "Massive red sandstone stepped kund historically restored in the 19th century, adjacent to Katra.",
        audioStory:
          "Just outside the Janmasthan sits Potra Kund, an expansive stepped water tank in warm Agra-Bharatpur sandstone, traditionally remembered as the bathing tank for infant Krishna's garments.",
        accessibilityNote: "Viewable cleanly from the street-level parapet without descending the steep steps.",
      },
      {
        stopNumber: 4,
        name: "Dwarkadhish Temple & Holi Gate Market",
        walkTime: "12 min e-rickshaw · 45 min",
        summary: "1814 CE architectural marvel followed by Braj zari poshak workshops near Holi Gate.",
        audioStory:
          "Return to the old town at Holi Gate to witness artisans hand-embroidering silk and velvet 'poshak' garments with metallic zari thread for regional shrines.",
        accessibilityNote: "Level bazaar road; plenty of tea and buttermilk stalls for shaded rest.",
      },
      {
        stopNumber: 5,
        name: "Vishram Ghat Sunset Aarti",
        walkTime: "8 min walk · 40 min",
        summary: "Conclude beside the Yamuna at dusk as brass lamps illuminate the sandstone arches.",
        audioStory:
          "End your trail at Vishram Ghat as dusk settles over the Yamuna and the evening aarti bells echo across the water.",
        accessibilityNote: "Rest on the upper stone arcade benches for an unobstructed, step-free view of the river aarti.",
      },
    ],
    localHighlights: [
      {
        title: "Mathura Peda (Caramelized Khoya Sweet)",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI-Recognized Culinary Heritage · Braj Region",
        description:
          "Slow-roasted milk solids (khoya) cooked in ghee with green cardamom and dusted with coarse bura sugar. Naturally shelf-stable for 5–7 days without refrigeration.",
        whereToFind: "Brijwasi Mithai Wala (Holi Gate) or Radhey Shyam Halwai near Chhatta Bazaar.",
      },
      {
        title: "Thakurji Zari Poshak & Sanjhi Paper Stencils",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "ODOP Mathura · Traditional Artisan Craft",
        description:
          "Mathura's One District One Product (ODOP) includes intricately embroidered ceremonial garments (poshak) with zardozi/gota-patti work, alongside Sanjhi—a rare hand-cut paper stencil art using fine scissors.",
        whereToFind: "Poshak workshops around Holi Gate & Radha Vallabh Gali (Vrindavan); Sanjhi artists near Shri Bhattji.",
      },
      {
        title: "Bedai, Dubki Wale Aloo & Hing Kachori",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Morning Braj Breakfast · Old Town",
        description:
          "Crisp lentil-stuffed puffed flatbread served with spiced, tangy potato curry tempered with asafoetida (hing), often paired with fresh earthen-cup jalebi and saffron lassi.",
        whereToFind: "Holi Gate and Tilak Dwar morning stalls (7:00 AM – 11:00 AM).",
      },
      {
        title: "Kusum Sarovar & Govardhan Sandstone Heritage",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "24 km West · 18th Century Sandstone Complex",
        description:
          "A monumental 18th-century sandstone water tank with carved chhatris commissioned by Jat rulers of Bharatpur. Particularly serene during Sharad Purnima and Kartik Deepotsav.",
        whereToFind: "Govardhan–Radha Kund road, 45 min drive from Mathura Junction.",
      },
      {
        title: "Gita Mandir & Birla Temple Gardens",
        category: "Nearby Sites & Festivals",
        companionFit: ["Elderly Parents", "Family with Kids"],
        originLabel: "Mathura–Vrindavan Road · Step-Free Courtyard",
        description:
          "Mid-20th century red sandstone temple featuring a tall Gita Stambh pillar inscribed with all 18 chapters of the Bhagavad Gita and wide, shaded lawns ideal for seniors.",
        whereToFind: "5 km north of Mathura Junction toward Vrindavan.",
      },
    ],
    nearestHospital: {
      name: "District Hospital (Maharishi Dayanand Saraswati) & KD Medical",
      area: "Civil Lines / Mathura–Delhi NH-19",
      phone: "0565-2403011",
      note: "24x7 emergency trauma & cardiac care; ambulance available via 108 or 112.",
    },
    facilities: [
      {
        name: "Vishram Ghat Swachh Public Restroom",
        type: "Public Toilets",
        landmark: "30 m left of Vishram Ghat Main Arch",
        hours: "5:30 AM – 10:00 PM",
        accessibility: "Ground-level entry; separate women's block",
      },
      {
        name: "Janmasthan Gate 3 Filtered Water Kiosk",
        type: "Drinking Water",
        landmark: "Opposite Shri Krishna Janmasthan Cloakroom",
        hours: "24 Hours",
        accessibility: "Step-free paved plaza",
      },
      {
        name: "Jubilee Park & Dampier Nagar Multi-Vehicle Parking",
        type: "Parking",
        landmark: "Near Government Museum, Dampier Nagar",
        hours: "6:00 AM – 10:00 PM",
        accessibility: "E-rickshaw transfer hub to old city",
      },
      {
        name: "Janmasthan First-Aid & Medical Post",
        type: "Medical Centres",
        landmark: "Gate 1 Reception Courtyard",
        hours: "6:00 AM – 9:30 PM",
        accessibility: "Wheelchair & stretchers on site",
      },
      {
        name: "Brijwasi Heritage Bhojanalaya (Pure Veg)",
        type: "Food Outlets",
        landmark: "Holi Gate Square",
        hours: "8:00 AM – 10:30 PM",
        accessibility: "Ground-floor family seating",
      },
    ],
  },
  {
    id: "orchha-mp",
    name: "Orchha",
    displayName: "Orchha (Madhya Pradesh)",
    state: "Madhya Pradesh",
    group: "small_town",
    regionCategory: "Small Heritage Town · Bundelkhand",
    tagline: "16th-century Bundela palaces, Betwa riverfront chhatris, and living Ram Raja heritage",
    overview:
      "Founded in 1531 CE by Bundela Rajput chief Rudra Pratap Singh on a rocky island of the Betwa River, Orchha preserves untouched medieval palaces, mural halls, and towering cenotaphs in peaceful countryside.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    secondaryImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "Tell me about the Royal Chhatris on Betwa River",
      "What is the history of Jahangir Mahal and Bundela murals?",
      "Explain why Ram Raja Temple is worshipped as a king",
    ],
    featuredGuide: {
      title: "Orchha Chhatris (Bundela Cenotaphs) · ओरछा छतरियाँ",
      recordedHistoryAndFacts:
        "Standing along the Kanchan Ghat bank of the Betwa River, these 14 stone-and-brick cenotaphs were erected between the late 16th and 18th centuries in memory of the Bundela rulers of Orchha, including Madhukar Shah, Bir Singh Deo, and Pahad Singh. Built in a distinctive Bundela-Panchayatana style, they combine multi-tiered Nagara-inspired shikharas over vaulted chambers with Mughal-influenced corner domes and wide stone chhajja eaves.",
      folkloreAndLocalTradition:
        "Local Bundelkhand oral lore celebrates the deep devotion of Queen Ganesh Kunwari, who brought Lord Rama from Ayodhya to Orchha. Residents still call Ram Raja 'Sarkar' (King), and the Madhya Pradesh Police accord him a daily ceremonial guard of honour at the temple.",
      accessibilityNotes:
        "The Chhatri complex garden has flat stone-flagged pathways suitable for wheelchairs and seniors, though entering the raised plinth chambers involves 8–12 stone steps. Benches sit under neem and banyan shade overlooking the river.",
      practicalTips:
        "Visit at 6:30 AM or 5:00 PM for warm golden light on the sandstone spires and to spot Indian vultures nesting on the upper shikharas. Entry ticket covers Fort Complex & Chhatris on the same day.",
      followUpSuggestions: [
        "What murals survive inside Lakshmi Narayan Temple?",
        "Tell me about Raja Mahal's hidden chambers",
        "What Bundelkhand food should I try in Orchha?",
      ],
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Ram Raja Temple Courtyard",
        walkTime: "Start · 0 min",
        summary: "Originally Rani Mahal (16th century), converted into India's only temple where Rama is revered as reigning monarch.",
        audioStory:
          "Notice that Ram Raja Temple looks like a royal palace rather than a traditional shikhara temple—because it was built as Queen Ganesh Kunwari's palace before becoming a shrine.",
        accessibilityNote: "Wide, flat courtyard entrance; seating benches under shaded verandahs.",
      },
      {
        stopNumber: 2,
        name: "Chaturbhuj Temple Plinth",
        walkTime: "4 min walk (280 m)",
        summary: "Monumental 16th-century temple with soaring spires and lofty vaulted ceilings resembling cathedral acoustics.",
        audioStory:
          "Built by Madhukar Shah and Bir Singh Deo between 1558 and 1573 CE, Chaturbhuj Temple was designed to house the Ram idol, though its sanctum remained vacant when the deity stayed in Rani Mahal.",
        accessibilityNote: "Steep stone steps to the main sanctum; exterior views and courtyard gardens are step-free.",
      },
      {
        stopNumber: 3,
        name: "Raja Mahal & Jahangir Mahal Bridge",
        walkTime: "6 min walk (450 m)",
        summary: "Cross the stone causeway into Orchha Fort Island, blending Bundela Rajput courtyards and turquoise tilework.",
        audioStory:
          "Completed by Raja Bir Singh Deo in the early 17th century to honour Mughal Emperor Jahangir's visit, Jahangir Mahal showcases delicate hanging balconies and blue glazed ceramic tiles.",
        accessibilityNote: "Gentle paved ramp up to Fort Gate; ground-level courtyards are easy, upper terraces have steep stairs.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Orchha Fort Complex (Raja Mahal & Jahangir Mahal)",
        walkTime: "Start · 90 min",
        summary: "Explore 16th–17th century Bundela royal chambers, subterranean summer halls, and preserved natural-pigment murals.",
        audioStory:
          "Inside Raja Mahal's royal bedchambers, look upward at vibrant 17th-century murals painted with mineral and vegetable pigments illustrating Dashavatara and royal court processions.",
        accessibilityNote: "Stone ramps at outer fort entry; shaded rest benches inside Raja Mahal courtyard.",
      },
      {
        stopNumber: 2,
        name: "Lakshmi Narayan Temple Mural Gallery",
        walkTime: "15 min walk / 5 min auto",
        summary: "Triangular hilltop shrine famed for well-preserved 18th–19th century Bundeli wall paintings, including scenes of 1857.",
        audioStory:
          "Walk or take an e-rickshaw to the low hillock west of town. Inside Lakshmi Narayan Temple's ambulatory, vivid murals depict both mythological epics and early colonial encounters.",
        accessibilityNote: "Auto-rickshaws drop right near the outer gate; 14 moderate steps lead to the main gallery.",
      },
      {
        stopNumber: 3,
        name: "Kanchan Ghat Royal Chhatris",
        walkTime: "10 min auto · 45 min",
        summary: "Sunset walk beside the 14 Bundela cenotaphs reflected in the tranquil Betwa River.",
        audioStory:
          "End your afternoon beside the Betwa River as the Chhatris glow warm amber against the forest reserve across the river.",
        accessibilityNote: "Flat garden walkways throughout the Chhatri lawns; ideal for elderly travellers.",
      },
    ],
    localHighlights: [
      {
        title: "Bundeli Kadhi, Dal Bafla & Mahua Laddoo",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Bundelkhand Kitchen Heritage",
        description:
          "Wholesome rural Bundelkhand fare featuring baked wheat bafla dipped in ghee, tangy gram-flour kadhi, and nutrient-rich Mahua flower laddoos.",
        whereToFind: "Betwa Tarang & local family homestay kitchens near Ram Raja Chowk.",
      },
      {
        title: "Bundela Bell Metal (Dhokra) & Terracotta Craft",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Niwari–Tikamgarh Regional Craft",
        description:
          "Lost-wax cast brass figurines, tribal oil lamps, and hand-painted Bundeli terracotta plaques crafted by local artisan families.",
        whereToFind: "Taramani Artisan Cooperative near Orchha Fort Bridge.",
      },
      {
        title: "Orchha Wildlife Sanctuary & Betwa River Rafting",
        category: "Nearby Sites & Festivals",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Across Betwa Bridge · Nature Trail",
        description:
          "Peaceful dry deciduous forest home to spotted deer, peacocks, and over 200 bird species right across the old stone bridge.",
        whereToFind: "Entry gate 1.5 km east across the Betwa River bridge.",
      },
    ],
    nearestHospital: {
      name: "Community Health Centre (CHC) Orchha / District Hospital Jhansi",
      area: "Orchha Main Road (CHC) · Jhansi (18 km)",
      phone: "108",
      note: "First aid at Orchha CHC; full multi-specialty trauma & ICU 25 min away at Maharani Laxmi Bai Medical College, Jhansi.",
    },
    facilities: [
      {
        name: "Fort Complex Entrance Restrooms",
        type: "Public Toilets",
        landmark: "Beside ASI Ticket Counter, Fort Gate",
        hours: "7:00 AM – 6:30 PM",
        accessibility: "Step-free path near ticket kiosk",
      },
      {
        name: "Ram Raja Chowk RO Drinking Water Booth",
        type: "Drinking Water",
        landmark: "Main Market Square near Police Chauki",
        hours: "24 Hours",
        accessibility: "Roadside level access",
      },
      {
        name: "Jahangir Mahal Tourist Parking",
        type: "Parking",
        landmark: "Fort Island Approach Bridge",
        hours: "6:00 AM – 9:00 PM",
        accessibility: "Level gravel lot",
      },
      {
        name: "Orchha Primary Health Sub-Centre",
        type: "Medical Centres",
        landmark: "Near Bus Stand Road",
        hours: "8:00 AM – 8:00 PM",
        accessibility: "Ground-floor clinic",
      },
      {
        name: "Betwa Riverside Café & Thali House",
        type: "Food Outlets",
        landmark: "Opposite Kanchan Ghat Chhatris",
        hours: "8:00 AM – 9:30 PM",
        accessibility: "Garden-level shaded tables",
      },
    ],
  },
  {
    id: "bishnupur-wb",
    name: "Bishnupur",
    displayName: "Bishnupur (West Bengal)",
    state: "West Bengal",
    group: "small_town",
    regionCategory: "Small Heritage Town · Bankura",
    tagline: "17th-century terracotta temples, Baluchari silk looms, and Hindustani Dhrupad gharana",
    overview:
      "Capital of the Malla dynasty (16th–18th century), Bishnupur in Bankura district is celebrated across India for its intricate burnt-clay terracotta temples, Panchmura pottery, and classical Bishnupur Gharana music.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "Explain the terracotta carvings on Shyamrai and Jor Bangla Temples",
      "What is the history of Rasmancha?",
      "Tell me about Baluchari silk weaving in Bishnupur",
    ],
    featuredGuide: {
      title: "Rasmancha & Shyamrai Terracotta Temples · রাসমঞ্চ ও শ্যামরায়",
      recordedHistoryAndFacts:
        "Built around 1600 CE by Malla King Bir Hambir, Rasmancha is a unique pyramidal brick monument surrounded by hut-shaped Bengali chala turrets and an outer arcade of 108 pointed arches. Nearby Shyamrai Temple (1643 CE, built by Raghunatha Singha) is among Bengal's earliest surviving Pancharatna (five-spired) terracotta temples, clad in finely sculpted baked clay plaques depicting Ramayana, Mahabharata, and everyday 17th-century court life.",
      folkloreAndLocalTradition:
        "During the Vaishnava Rasa festival in the Malla era, idols from every shrine in Bishnupur were brought to Rasmancha's central altar for a grand nocturnal celebration lit by brass torches. Bishnupur's classical Bishnupur Gharana of Hindustani vocal music also traces its local roots to court patronage by Malla kings.",
      accessibilityNotes:
        "Both Rasmancha and Shyamrai sit within manicured ASI lawn complexes with flat red-brick walkways. Wheelchair access is comfortable up to the outer archways; entering inner raised sanctums requires climbing 4–6 stone steps.",
      practicalTips:
        "Morning light (7:30–9:30 AM) highlights the sharp reliefs on the east and south terracotta walls. Buy a combined ASI monument ticket at Rasmancha.",
      followUpSuggestions: [
        "How were Bankura terracotta horses made?",
        "Where can I watch live Baluchari silk weaving?",
        "Tell me about Dalmadal Cannon's history",
      ],
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Rasmancha Pyramid Pavilion",
        walkTime: "Start · 0 min",
        summary: "Unique 1600 CE brick-and-laterite festival pavilion with a stepped pyramid tower and arched gallery.",
        audioStory:
          "Stand inside Rasmancha's outer arcade—its 108 arched bays were designed to catch cross-breezes during autumn festivals.",
        accessibilityNote: "Flat brick garden pathways and benches under shade trees.",
      },
      {
        stopNumber: 2,
        name: "Jor Bangla (Keshta Raya) Temple",
        walkTime: "7 min walk (550 m)",
        summary: "Built in 1655 CE resembling two joined thatched-roof Bengali cottages ('ek-bangla') cast permanently in brick and terracotta.",
        audioStory:
          "Notice the curved cornice mimicking bamboo village roofs—Bengal's architects translated vernacular hut geometry into timeless fired clay.",
        accessibilityNote: "Level lawn around the plinth; clear close-up viewing of wall panels without climbing.",
      },
      {
        stopNumber: 3,
        name: "Shyamrai Pancharatna Temple",
        walkTime: "4 min walk (320 m)",
        summary: "1643 CE five-towered terracotta masterpiece with intricate Rasa-mandala circular relief panels.",
        audioStory:
          "Shyamrai's octagonal central tower and richly carved walls represent the pinnacle of Malla-era terracotta storytelling.",
        accessibilityNote: "Level garden perimeter with seating benches.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Rasmancha & Dalmadal Cannon",
        walkTime: "Start · 45 min",
        summary: "1600 CE pavilion paired with the 17th-century wrought-iron Dalmadal cannon forged by Malla blacksmiths.",
        audioStory:
          "Examine the 3.8-metre wrought-iron Dalmadal cannon—remarkably free of deep rust despite centuries outdoors.",
        accessibilityNote: "Level approach at both monuments.",
      },
      {
        stopNumber: 2,
        name: "Jor Bangla, Shyamrai & Madanmohan Temples",
        walkTime: "10 min cycle-rickshaw · 75 min",
        summary: "Compare 17th-century Jor Bangla hut-roofs with the 1694 CE Madanmohan brick temple.",
        audioStory:
          "Each temple reveals subtle shifts in Malla sculptural detail, from geometric lotus medallions to dynamic hunting scenes.",
        accessibilityNote: "Cycle-rickshaws connect all temples effortlessly for elderly travellers.",
      },
      {
        stopNumber: 3,
        name: "Sankhari Bazaar & Baluchari Loom Cluster",
        walkTime: "8 min rickshaw · 45 min",
        summary: "Meet master weavers crafting mythological motifs on silk Baluchari and Swarnachari sarees.",
        audioStory:
          "Listen to the rhythmic clatter of jacquard handlooms where a single Baluchari pallu takes two to three weeks of meticulous weaving.",
        accessibilityNote: "Ground-floor weaving workshops open directly off the street.",
      },
    ],
    localHighlights: [
      {
        title: "Baluchari Silk & Bankura Terracotta Horse",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI-Tagged & Bankura ODOP Craft",
        description:
          "Iconic long-necked Panchmura terracotta horses symbolizing rural folk devotion alongside handwoven Baluchari silk sarees featuring temple-motif borders.",
        whereToFind: "Bishnupur Artisans' Haat near Chhinnamasta Temple & Sankhari Bazaar.",
      },
      {
        title: "Mecha Sandesh & Posto Bora",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Bishnupur Culinary Specialty",
        description:
          "Gram-flour roasted sweetmeat (Mecha Sandesh) flavoured with cardamom and khoya, plus crisp poppy-seed fritters served with traditional Bengali thalis.",
        whereToFind: "Old sweet shops at Chowk Bazaar & Madanmohanpara.",
      },
      {
        title: "Bishnupur Mela & Terracotta Craft Fair",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "Annual December Heritage Fair",
        description:
          "Celebrates Bankura craftspeople, classical Bishnupur Gharana vocalists, and Baul folk musicians near Lalbandh.",
        whereToFind: "High School Grounds & Lalbandh lakefront.",
      },
    ],
    nearestHospital: {
      name: "Bishnupur Super Speciality Hospital",
      area: "Station Road, Bishnupur",
      phone: "03244-252044",
      note: "24x7 emergency & ambulance service (Dial 102 / 112).",
    },
    facilities: [
      {
        name: "ASI Complex Public Toilet",
        type: "Public Toilets",
        landmark: "Near Rasmancha Entry Gate",
        hours: "7:00 AM – 6:00 PM",
        accessibility: "Ground-level pathway",
      },
      {
        name: "Chowk Bazaar Drinking Water Point",
        type: "Drinking Water",
        landmark: "Opposite Bishnupur Bus Terminus",
        hours: "24 Hours",
        accessibility: "Step-free street tap",
      },
      {
        name: "Jor Bangla Tourist Parking",
        type: "Parking",
        landmark: "Adjacent to ASI Lawns",
        hours: "6:00 AM – 7:00 PM",
        accessibility: "Flat paved bay",
      },
      {
        name: "Station Road Medical Store & Clinic",
        type: "Medical Centres",
        landmark: "500 m from Bishnupur Railway Station",
        hours: "8:00 AM – 10:00 PM",
        accessibility: "Roadside entrance",
      },
      {
        name: "Malla Heritage Bengali Kitchen",
        type: "Food Outlets",
        landmark: "Near Lalbandh Road",
        hours: "11:30 AM – 9:30 PM",
        accessibility: "Ground-floor dining",
      },
    ],
  },
  {
    id: "mandu-mp",
    name: "Mandu",
    displayName: "Mandu (Madhya Pradesh)",
    state: "Madhya Pradesh",
    group: "small_town",
    regionCategory: "Small Hill-Fort Town · Malwa Plateau",
    tagline: "Malwa Sultanate stone palaces, Jahaz Mahal waterworks, and monsoon baobab trees",
    overview:
      "Perched on a 600-metre Vindhyan plateau in Dhar district, Mandu (Mandavgarh) is an atmospheric hill-fort town celebrated for Afghan-Malwa stone architecture, ingenious rainwater harvesting, and baobab trees.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    samplePrompts: [
      "How did Jahaz Mahal's water engineering work?",
      "What is the history of Hoshang Shah's marble tomb?",
      "Tell me about Baz Bahadur and Rani Roopmati",
    ],
    featuredGuide: {
      title: "Jahaz Mahal & Royal Enclave · जहाज़ महल, मांडू",
      recordedHistoryAndFacts:
        "Constructed in the late 15th century under Sultan Ghiyas-ud-din Khalji of Malwa, Jahaz Mahal ('Ship Palace') is a 110-metre-long double-storey stone structure built on a narrow strip of land between two artificial lakes—Kapur Talao and Munj Talao. Archaeological studies highlight its ingenious network of Persian wheels, aqueducts, and open roof pavilions designed to cool the palace naturally during Malwa summers.",
      folkloreAndLocalTradition:
        "Local Malwa ballads remember Mandu for the musical romance of the 16th-century ruler Baz Bahadur and poet-singer Rani Roopmati, who is said to have built her hilltop pavilion to gaze toward the sacred Narmada river each morning.",
      accessibilityNotes:
        "The Royal Enclave has broad, level sandstone walkways between Jahaz Mahal, Hindola Mahal, and Champa Baoli. Climbing to the upper roof terrace of Jahaz Mahal involves a steep staircase with stone side walls.",
      practicalTips:
        "July–February offers lush green valleys and filled lakes; carry sunhat and water from March–June.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Jahaz Mahal Lower Arcade",
        walkTime: "Start · 20 min",
        summary: "Walk between Munj and Kapur tanks along the 15th-century ship-shaped palace.",
        audioStory: "Feel the cool breeze channelled off the twin lakes through Jahaz Mahal's vaulted lower galleries.",
        accessibilityNote: "Level lawn paths; ground-floor halls are wheelchair accessible.",
      },
      {
        stopNumber: 2,
        name: "Hindola Mahal (Swinging Palace)",
        walkTime: "3 min walk (180 m)",
        summary: "Audience hall with massive 77-degree sloping buttress walls creating the optical illusion of swaying.",
        audioStory: "Those dramatic battered walls aren't decorative—they counteract the outward thrust of huge stone roof arches.",
        accessibilityNote: "Wide, flat entrance threshold; benches outside.",
      },
      {
        stopNumber: 3,
        name: "Champa Baoli Stepwell",
        walkTime: "3 min walk (200 m)",
        summary: "Subterranean stepwell and cool underground chambers connected to Munj Talao.",
        audioStory: "Centuries before electricity, Malwa builders engineered cool underground retreats right beside stepped water channels.",
        accessibilityNote: "View safely from the upper parapet without descending steep steps.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Royal Enclave (Jahaz & Hindola Mahal)",
        walkTime: "Start · 60 min",
        summary: "Explore Malwa's finest 15th-century water palaces and audience halls.",
        audioStory: "Discover how monsoon rainwater from the plateau fed every fountain and bathhouse in the palace.",
        accessibilityNote: "Level lawn walkways throughout the main plaza.",
      },
      {
        stopNumber: 2,
        name: "Jami Masjid & Hoshang Shah's Tomb",
        walkTime: "8 min auto · 50 min",
        summary: "Monumental 15th-century Afghan sandstone mosque and India's earliest known fully marble mausoleum (1440 CE).",
        audioStory: "Inspect the marble latticework of Hoshang Shah's tomb—Mughal architects later studied its proportions before building the Taj Mahal.",
        accessibilityNote: "12 wide steps at Jami Masjid gate; marble tomb courtyard is flat.",
      },
      {
        stopNumber: 3,
        name: "Rani Roopmati Pavilion",
        walkTime: "15 min drive · 45 min",
        summary: "Southern cliffside lookout overlooking the distant Narmada plains.",
        audioStory: "Listen to the echo of Nimar valley winds from the twin domed chhatris perched on the Vindhyan escarpment.",
        accessibilityNote: "Parking right at the base; moderate sloped path up to the pavilion.",
      },
    ],
    localHighlights: [
      {
        title: "Dal Paniya & Bhutta (Corn) Khichdi",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Malwa Plateau Tribal & Local Cuisine",
        description:
          "Fire-baked maize flour bread (Paniya) paired with spiced urad-toor dal, and Monsoon sweet-corn dishes flavoured with local Malwa spices.",
        whereToFind: "Mandu Village Chowk & MPT Malwa Resort dining hall.",
      },
      {
        title: "Bagh Hand-Block Prints & Baobab Fruit Crafts",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Dhar District GI Craft",
        description:
          "Natural vegetable-dye (alum, iron, pomegranate rind) Bagh block-printed textiles from nearby Dhar district, alongside dried baobab ('Khurasani Imli') seed crafts.",
        whereToFind: "Crafts stalls near Jami Masjid Square.",
      },
      {
        title: "Mandu Utsav & Baobab Groves",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "December–January Heritage Festival",
        description:
          "Ancient African-origin baobab trees planted along Mandu's roadsides centuries ago, plus winter cultural concerts and heritage walks.",
        whereToFind: "Across Mandavgarh plateau roads.",
      },
    ],
    nearestHospital: {
      name: "Primary Health Centre Mandav / District Hospital Dhar",
      area: "Mandu Bus Stand (PHC) · Dhar (35 km)",
      phone: "108",
      note: "Basic trauma & emergency at Mandu PHC; full hospital care in Dhar.",
    },
    facilities: [
      {
        name: "Jahaz Mahal Gate Restrooms",
        type: "Public Toilets",
        landmark: "Opposite Ticket Office",
        hours: "7:00 AM – 6:30 PM",
        accessibility: "Ground-floor block",
      },
      {
        name: "Jami Masjid Square Water Kiosk",
        type: "Drinking Water",
        landmark: "Mandu Village Circle",
        hours: "7:00 AM – 9:00 PM",
        accessibility: "Step-free",
      },
      {
        name: "Royal Enclave Parking",
        type: "Parking",
        landmark: "Jahaz Mahal Entry Gate",
        hours: "6:30 AM – 7:00 PM",
        accessibility: "Level lot",
      },
      {
        name: "Mandu Primary Health Centre",
        type: "Medical Centres",
        landmark: "Near Main Bus Stand",
        hours: "9:00 AM – 5:00 PM (Emergency on call)",
        accessibility: "Ramp entrance",
      },
      {
        name: "Malwa Retreat Café",
        type: "Food Outlets",
        landmark: "Near Sagar Talao",
        hours: "8:00 AM – 9:30 PM",
        accessibility: "Step-free veranda",
      },
    ],
  },
  {
    id: "chanderi-mp",
    name: "Chanderi",
    displayName: "Chanderi (Madhya Pradesh)",
    state: "Madhya Pradesh",
    group: "small_town",
    regionCategory: "Small Weaver & Fort Town · Ashoknagar",
    tagline: "Gossamer Chanderi handloom sarees, Badal Mahal Gate, and medieval sandstone baolis",
    overview:
      "Tucked among Vindhya hills in Ashoknagar district, Chanderi blends 11th–16th century forts, intricately carved stepwells, and over 3,000 active handloom families weaving featherlight silk-cotton sarees.",
    heroImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "What makes Chanderi handloom weaving unique?",
      "Tell me about Koshak Mahal and Badal Mahal Gate",
      "Explain the carvings on Battisi Baoli stepwell",
    ],
    featuredGuide: {
      title: "Chanderi Handloom & Badal Mahal Gate · चंदेरी बुनकर व बादल महल",
      recordedHistoryAndFacts:
        "Chanderi's strategic hill fort and 15th-century Sultanate structures—such as the 1445 CE Koshak Mahal and Badal Mahal Gate—were erected in local buff sandstone under the Malwa Sultans and later Bundela rulers. Historically, Chanderi sat on the trade route connecting Malwa to Delhi and Gujarat, fostering a celebrated guild of Muslim and Hindu handloom weavers documented since Mughal chronicles.",
      folkloreAndLocalTradition:
        "Oral weaver traditions link Chanderi's famous motifs—Asharfi (gold coin), Chatai (mat), and Dandidar—to patterns inspired by temple lotus carvings and royal garments. Local families still refer to the rhythmic double-shuttle sound of the pit-loom as the heartbeat of the qasba.",
      accessibilityNotes:
        "Weaver mohallas like Bahar Shahar and Sadar Bazaar are flat and easy to explore on foot or e-rickshaw. Chanderi Fort sits atop a steep hill road accessible by car/auto right up to the main courtyard.",
      practicalTips:
        "Visit weaver workshops between 10 AM and 4 PM for natural daylight inside loom rooms. Look for the official Handloom Mark / GI tag when purchasing directly from weavers.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Badal Mahal Gate",
        walkTime: "Start · 0 min",
        summary: "15th-century carved sandstone ceremonial gateway rising dramatically without an attached palace.",
        audioStory: "Stand beneath Badal Mahal Gate's tall double arches and admire the fine stone rosettes carved in Malwa style.",
        accessibilityNote: "Flat lawn viewing; benches available.",
      },
      {
        stopNumber: 2,
        name: "Jama Masjid & Battisi Baoli",
        walkTime: "6 min walk (450 m)",
        summary: "1485 CE monumental stepwell with 32 flights of sandstone steps descending to sweet spring water.",
        audioStory: "Count the four-sided flights of steps at Battisi Baoli—an architectural marvel of community water conservation.",
        accessibilityNote: "Viewable safely from the upper rim wall.",
      },
      {
        stopNumber: 3,
        name: "Bunkar Mohalla Pit-Loom Workshop",
        walkTime: "5 min walk (380 m)",
        summary: "Watch master weavers interlace pure silk warp with fine cotton weft.",
        audioStory: "See how two weavers sit side by side on traditional pit looms to insert delicate gold-zari motifs by hand.",
        accessibilityNote: "Ground-floor courtyard workshops.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Chanderi Fort & Kati Ghati",
        walkTime: "Start · 60 min",
        summary: "Hilltop fort ramparts and the massive 1495 CE gateway cut straight through solid hillside rock.",
        audioStory: "Walk through Kati Ghati—carved out of living rock in 1495 CE to welcome Sultan Ghiyas-ud-din Khalji.",
        accessibilityNote: "Vehicle access up to fort gate; flat fort lawns.",
      },
      {
        stopNumber: 2,
        name: "Koshak Mahal & Shehzadi Ka Roza",
        walkTime: "10 min auto · 45 min",
        summary: "Symmetrical 15th-century sandstone pavilion planned in four quadrants.",
        audioStory: "Explore Koshak Mahal's cross-shaped airy corridors designed to catch summer winds.",
        accessibilityNote: "Flat courtyard and wide arches.",
      },
      {
        stopNumber: 3,
        name: "Chanderi Museum & Bunkar Co-op",
        walkTime: "10 min auto · 60 min",
        summary: "ASI sculptural collection from Budhi Chanderi followed by direct artisan visits.",
        audioStory: "End your day comparing ancient stone carvings at the museum with the exact same floral motifs woven into Chanderi silk.",
        accessibilityNote: "Wheelchair-accessible museum ground floor.",
      },
    ],
    localHighlights: [
      {
        title: "GI-Tagged Chanderi Silk & Tissue Sarees",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Ashoknagar ODOP",
        description:
          "Sheer, breathable handloom sarees in Katan silk, Chanderi cotton, and silk-by-silk woven with traditional coin and peacock borders.",
        whereToFind: "Chanderi Bunkar Vikas Sanstha & weaver homes in Bahar Shahar.",
      },
      {
        title: "Chanderi Poha, Mawa Jalebi & Bundeli Thali",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Qasba Street Specialty",
        description:
          "Fluffy flattened rice garnished with roasted peanuts and fennel, followed by rich dark-caramelized Mawa Jalebi.",
        whereToFind: "Sadar Bazaar morning stalls.",
      },
      {
        title: "Pranpur Craft Tourism Village",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "4 km East · Living Artisan Village",
        description:
          "India's first designated Craft Handloom Tourism Village where every stone-walled lane features working looms and rural hospitality.",
        whereToFind: "10 min drive east of Chanderi town.",
      },
    ],
    nearestHospital: {
      name: "Civil Hospital Chanderi",
      area: "Mungaoli Road, Chanderi",
      phone: "108",
      note: "24x7 emergency unit; referral hospital at Ashoknagar (60 km).",
    },
    facilities: [
      {
        name: "ASI Museum Restrooms",
        type: "Public Toilets",
        landmark: "Near Bus Stand / Museum Gate",
        hours: "9:00 AM – 5:30 PM",
        accessibility: "Step-free",
      },
      {
        name: "Sadar Bazaar Water Stand",
        type: "Drinking Water",
        landmark: "Main Clock Tower Chowk",
        hours: "7:00 AM – 9:00 PM",
        accessibility: "Level street access",
      },
      {
        name: "Koshak Mahal Parking",
        type: "Parking",
        landmark: "Monument Gate",
        hours: "6:00 AM – 6:30 PM",
        accessibility: "Flat gravel",
      },
      {
        name: "Chanderi Civil Hospital",
        type: "Medical Centres",
        landmark: "Mungaoli Road",
        hours: "24 Hours",
        accessibility: "Ramp entrance",
      },
      {
        name: "MPT Kila Kothi Dining",
        type: "Food Outlets",
        landmark: "Chanderi Hilltop Road",
        hours: "7:30 AM – 10:00 PM",
        accessibility: "Level patio",
      },
    ],
  },
  {
    id: "pattadakal-ka",
    name: "Pattadakal",
    displayName: "Pattadakal (Karnataka)",
    state: "Karnataka",
    group: "small_town",
    regionCategory: "UNESCO Village · Bagalkot",
    tagline: "7th–8th century Chalukyan coronation temples uniting Nagara and Dravida styles",
    overview:
      "Nestled along the Malaprabha River in northern Karnataka, Pattadakal is a serene UNESCO World Heritage village where Early Chalukya kings were crowned amidst ten sandstone temples showcasing both North and South Indian architecture.",
    heroImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "Why does Pattadakal have both Nagara and Dravida temples?",
      "Tell me about Virupaksha Temple's inscriptions",
      "Explain the Ramayana pillar carvings here",
    ],
    featuredGuide: {
      title: "Virupaksha Temple & Chalukya Synthesis · ಪಟ್ಟದಕಲ್ಲು ವಿರೂಪಾಕ್ಷ",
      recordedHistoryAndFacts:
        "Built around 740 CE by Queen Lokamahadevi to commemorate her husband Vikramaditya II's victory over the Pallavas of Kanchipuram, the Virupaksha Temple is a masterwork of Dravida stone architecture. In the same enclosed riverside complex, temples such as Papanatha (c. 680 CE) and Kashivishvanatha display North Indian Nagara curvilinear shikharas—preserving inscriptions naming master architects like Gunda Anivaritachari.",
      folkloreAndLocalTradition:
        "Known historically as Kisuvolal ('Valley of Red Soil'), Pattadakal was revered as 'Pattada-kisuvolal'—the sacred place of royal coronation ('Patta'). Locals believe the northward bend of the Malaprabha River here carries special auspiciousness during Makara Sankranti and Shivaratri.",
      accessibilityNotes:
        "The entire UNESCO fenced garden complex is unusually flat and well-maintained with smooth stone paths between all major temples. Wheelchairs are available at the ASI entrance counter; inner sanctums have 3–4 stone steps.",
      practicalTips:
        "Pair Pattadakal with nearby Aihole (13 km) and Badami caves (22 km) for the complete Chalukyan architectural triangle.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Kadasiddheshwara & Jambulingeshwara Shrines",
        walkTime: "Start · 15 min",
        summary: "Compact 7th-century Nagara-style sandstone shrines displaying early northern curvilinear spires.",
        audioStory: "Look at the horseshoe-shaped sukhanasa projection on the front of the Nagara tower—a classic early Chalukyan signature.",
        accessibilityNote: "Flat lawn path right beside the shrines.",
      },
      {
        stopNumber: 2,
        name: "Virupaksha Temple Mandapa",
        walkTime: "3 min walk (120 m)",
        summary: "740 CE grand Dravida temple filled with carved pillars telling Ramayana, Mahabharata, and Panchatantra stories.",
        audioStory: "Walk inside the pillared hall to spot the earliest Kannada inscriptions praising Queen Lokamahadevi's master builders.",
        accessibilityNote: "Wide, flat perimeter walk; shaded portico benches outside.",
      },
      {
        stopNumber: 3,
        name: "Mallikarjuna & Papanatha Shrines",
        walkTime: "5 min walk (300 m)",
        summary: "Compare Queen Trailokyamahadevi's Mallikarjuna Temple with the riverside Papanatha monument.",
        audioStory: "Notice how Papanatha blends a Nagara spire with Dravida wall niches in one bold experiment.",
        accessibilityNote: "Smooth stone walkway; ample shade trees.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Pattadakal UNESCO Temple Complex",
        walkTime: "Start · 90 min",
        summary: "Complete architectural tour across all nine Hindu shrines and the riverside Jain Narayana temple.",
        audioStory: "Trace the entire evolution of Indian temple design in a single peaceful sandstone garden.",
        accessibilityNote: "Flat terrain; drinking water and restrooms at main gate.",
      },
      {
        stopNumber: 2,
        name: "Jain Narayana Temple (Amma's Temple)",
        walkTime: "10 min walk (800 m)",
        summary: "9th-century Rashtrakuta-era Dravida temple standing peacefully amidst fields just west of the main complex.",
        audioStory: "Built in the 9th century under Rashtrakuta rule, this quiet shrine features refined life-size stone elephants at its entry.",
        accessibilityNote: "Level village lane access.",
      },
    ],
    localHighlights: [
      {
        title: "Ilkal Handloom Sarees & Guledgudda Khana",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Bagalkot GI-Tagged Weaves",
        description:
          "Traditional Ilkal sarees using red-and-white kasuti embroidery and Tope Teni weaving joinery, plus handwoven Guledgudda blouse fabrics.",
        whereToFind: "Ilkal weaver street (35 km) & Pattadakal Craft Cooperative.",
      },
      {
        title: "Jolada Rotti, Yennegai & Shenga Chutney",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "North Karnataka Heritage Meal",
        description:
          "Hand-patted sorghum flatbreads served with stuffed baby-brinjal curry, roasted peanut chutney powder, and fresh curd.",
        whereToFind: "Village khanavali (home-style eateries) opposite the ASI gate.",
      },
      {
        title: "Chalukya Utsav & Badami Cave Temples",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents"],
        originLabel: "Annual Cultural Festival · 22 km from Badami",
        description:
          "Classical dance and music hosted amidst illuminated temples alongside easy day-trips to Badami's 6th-century rock-cut caves.",
        whereToFind: "Pattadakal & Badami (Karnataka).",
      },
    ],
    nearestHospital: {
      name: "Taluk General Hospital, Badami",
      area: "Station Road, Badami (22 km)",
      phone: "108",
      note: "Primary health centre in Pattadakal village; full 24x7 emergency & ambulance in Badami.",
    },
    facilities: [
      {
        name: "ASI Complex Washrooms",
        type: "Public Toilets",
        landmark: "Near Main Entry Gate",
        hours: "6:00 AM – 6:30 PM",
        accessibility: "Wheelchair accessible ramp",
      },
      {
        name: "ASI Filtered Water Station",
        type: "Drinking Water",
        landmark: "Garden Ticket Courtyard",
        hours: "6:00 AM – 6:30 PM",
        accessibility: "Step-free",
      },
      {
        name: "Pattadakal Village Tourist Parking",
        type: "Parking",
        landmark: "Opposite Temple Entrance",
        hours: "6:00 AM – 7:00 PM",
        accessibility: "Level gravel ground",
      },
      {
        name: "Primary Health Sub-Centre",
        type: "Medical Centres",
        landmark: "Pattadakal Panchayat Road",
        hours: "9:00 AM – 4:30 PM",
        accessibility: "Ground floor",
      },
      {
        name: "KSTDC Mayura Restaurant",
        type: "Food Outlets",
        landmark: "Badami–Pattadakal Road",
        hours: "8:00 AM – 9:30 PM",
        accessibility: "Ramp & shaded hall",
      },
    ],
  },
  {
    id: "kalpa-hp",
    name: "Kalpa",
    displayName: "Kalpa (Himachal Pradesh)",
    state: "Himachal Pradesh",
    group: "small_town",
    regionCategory: "Himalayan Heritage Village · Kinnaur",
    tagline: "Wood-and-stone Kath-Kuni temples, apple orchards, and Kinner Kailash views",
    overview:
      "Situated at 2,960 metres in Kinnaur above the Sutlej valley, Kalpa blends traditional Kinnauri Kath-Kuni timber architecture, Hindu-Buddhist syncretic monasteries, and historic Hindustan-Tibet trade trail heritage.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    samplePrompts: [
      "How does earthquake-resistant Kath-Kuni architecture work?",
      "Tell me about Narayan-Nagini Temple and Hu-Bu-Lan-Kar Monastery",
      "Explain the folklore of Kinner Kailash peaks",
    ],
    featuredGuide: {
      title: "Narayan-Nagini Temple & Kath-Kuni Craft · कल्पा",
      recordedHistoryAndFacts:
        "Kalpa (historically Chini) served as a key stop along the ancient Hindustan-Tibet trade route and was visited by Lord Dalhousie in the 1850s. Its Narayan-Nagini Temple and neighbouring Hu-Bu-Lan-Kar monastery showcase Kinnaur's traditional Kath-Kuni ('wood-corner') construction—alternating layers of dressed stone and dry deodar cedar beams locked without mortar, providing remarkable seismic flexibility.",
      folkloreAndLocalTradition:
        "Kinnauri tradition regards the 6,050-metre Kinner Kailash massif across the Sutlej gorge as a winter abode of Lord Shiva, with its towering Shivling rock pillar believed to change hues across the day. Both Hindu village deities (Devtas) and Buddhist lamas share blessings at village festivals like Phulaich.",
      accessibilityNotes:
        "High altitude (2,960 m) and sloped cobbled village paths mean elderly visitors should walk slowly and hydrate well. Cars can drop visitors right near the Narayan-Nagini courtyard level.",
      practicalTips:
        "Best visibility of the Kinner Kailash massif is between 6:00 AM and 8:30 AM before afternoon valley clouds gather. Carry warm layers year-round.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Narayan-Nagini Kath-Kuni Temple",
        walkTime: "Start · 20 min",
        summary: "Exquisite deodar-wood carvings and multi-tiered slate pagoda roof facing Kinner Kailash.",
        audioStory: "Inspect the interlocking cedar beams—wooden pins replace iron nails so the structure flexes safely during Himalayan tremors.",
        accessibilityNote: "Level courtyard benches; footwear removed before inner porch.",
      },
      {
        stopNumber: 2,
        name: "Hu-Bu-Lan-Kar Monastery",
        walkTime: "5 min walk (350 m)",
        summary: "Ancient Buddhist gompa founded around the 10th–11th century period associated with Rinchen Zangpo.",
        audioStory: "Notice the peaceful coexistence of Buddhist prayer wheels alongside Kinnauri village deities just metres apart.",
        accessibilityNote: "Gentle paved path; quiet seating inside courtyard.",
      },
      {
        stopNumber: 3,
        name: "Suicide Point Cliff & Roghi Orchard Trail",
        walkTime: "10 min drive / 25 min walk",
        summary: "Dramatic Sutlej gorge vista framed by terraced apple and chilgoza pine groves.",
        audioStory: "Look down into the deep Sutlej river valley where old mule caravans carried wool, salt, and spices toward Spiti and Tibet.",
        accessibilityNote: "Roadside viewing point with low parapet; stay behind safety railings.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Old Chini Heritage Village & Narayan Temple",
        walkTime: "Start · 60 min",
        summary: "Explore timber-carved granaries (kothas), apple orchards, and village craft stalls.",
        audioStory: "Learn how Kinnauri families store dried apricots, walnuts, and winter woolens in raised wooden granaries.",
        accessibilityNote: "Take frequent breaks on sloped lanes.",
      },
      {
        stopNumber: 2,
        name: "Sapni & Chaka Meadow Viewpoint",
        walkTime: "30 min drive · 60 min",
        summary: "Scenic upper trail above Kalpa with crisp Himalayan air and glacial peaks.",
        audioStory: "Hear local shepherds' songs echoing across the pine slopes.",
        accessibilityNote: "Best reached by local cab for elderly travellers.",
      },
    ],
    localHighlights: [
      {
        title: "Kinnauri Woollen Shawls & Traditional Thepang Cap",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Kinnaur GI Craft",
        description:
          "Handwoven sheep-wool and yak-hair shawls featuring geometric borders, alongside the iconic green velvet-banded Kinnauri cap.",
        whereToFind: "Reckong Peo & Kalpa women's weaving collectives.",
      },
      {
        title: "Chilgoza Pine Nuts, Siddu & Rajma Chawal",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI-Tagged Kinnaur Forest Produce",
        description:
          "Steamed wheat Siddu stuffed with walnut-poppy paste, local Kinnauri kidney beans, and prized wild Chilgoza pine nuts.",
        whereToFind: "Kalpa village homestays & Reckong Peo dhabas.",
      },
      {
        title: "Phulaich (Festival of Flowers)",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Solo"],
        originLabel: "September Mountain Harvest Festival",
        description:
          "Villagers gather wild high-altitude flowers to honour ancestors and celebrate the harvest with circular Kinnauri Nati folk dances.",
        whereToFind: "Kalpa & Sangla villages.",
      },
    ],
    nearestHospital: {
      name: "Regional Hospital, Reckong Peo",
      area: "Reckong Peo (8 km downhill from Kalpa)",
      phone: "01786-222234",
      note: "24x7 oxygen, altitude care & emergency unit.",
    },
    facilities: [
      {
        name: "Kalpa Chowk Public Toilet",
        type: "Public Toilets",
        landmark: "Near Bus Stand Viewpoint",
        hours: "6:30 AM – 8:30 PM",
        accessibility: "Roadside level",
      },
      {
        name: "Mountain Spring Water Point",
        type: "Drinking Water",
        landmark: "Below Narayan-Nagini Temple",
        hours: "24 Hours",
        accessibility: "Stone tap",
      },
      {
        name: "Kalpa Heritage Parking Bay",
        type: "Parking",
        landmark: "Main Village Entry",
        hours: "24 Hours",
        accessibility: "Flat tarmac",
      },
      {
        name: "Kalpa Health Sub-Centre",
        type: "Medical Centres",
        landmark: "Near PWD Rest House",
        hours: "9:30 AM – 4:00 PM",
        accessibility: "Ground floor",
      },
      {
        name: "Kinner Kailash Café & Homestay Kitchen",
        type: "Food Outlets",
        landmark: "Upper Kalpa Road",
        hours: "7:30 AM – 9:30 PM",
        accessibility: "Terrace seating",
      },
    ],
  },
  {
    id: "ziro-ar",
    name: "Ziro",
    displayName: "Ziro (Arunachal Pradesh)",
    state: "Arunachal Pradesh",
    group: "small_town",
    regionCategory: "Small Highland Valley · Lower Subansiri",
    tagline: "UNESCO-tentative Apatani paddy-cum-fish terraces, bamboo craft, and pine-clad hills",
    overview:
      "A cool pine-ringed plateau at 1,500 metres in Arunachal Pradesh, Ziro Valley is home to the Apatani community—world-renowned for zero-machinery sustainable wet-rice and fish farming.",
    heroImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "How does the Apatani rice-and-fish farming system work?",
      "Tell me about Hong and Hari heritage villages",
      "What is the story behind Meghna Cave Temple and Siddheshwar Nath?",
    ],
    featuredGuide: {
      title: "Apatani Cultural Landscape, Ziro · ज़ीरो (अरुणाचल)",
      recordedHistoryAndFacts:
        "Inscribed on India's UNESCO World Heritage Tentative List, the Apatani Cultural Landscape spans roughly 32 sq km of flat valley floor in Lower Subansiri district. Anthropological and ecological records document how the Apatani people perfected an integrated wet-rice and pisciculture (fish-in-paddy) system using wooden and bamboo sluice channels, organic soil recycling, and community-managed sacred bamboo groves without chemical fertilizers or plough animals.",
      folkloreAndLocalTradition:
        "Apatani oral traditions trace their ancestry to Abo Tani, the mythical first forefather, and celebrate Dree (July) and Myoko (March) festivals to bless crops, reinforce clan friendship, and honour nature spirits (Donyi-Polo / sun-moon reverence).",
      accessibilityNotes:
        "The valley floor roads linking Hapoli, Old Ziro, Hong, and Hari villages are largely flat and paved, making vehicle and gentle walking exploration comfortable for elderly parents and families.",
      practicalTips:
        "Indian citizens require an Inner Line Permit (ILP) and foreign visitors require a Protected Area Permit (PAP) to enter Arunachal Pradesh—keep digital and printed copies handy.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Hong Village Bamboo Walk",
        walkTime: "Start · 25 min",
        summary: "One of Asia's largest organized tribal villages with stilted bamboo homes and community Lapang platforms.",
        audioStory: "Walk respectfully past the raised wooden Lapang platforms where village elders gather for council meetings and Myoko rituals.",
        accessibilityNote: "Flat village lanes; ask permission before photographing elders or interiors.",
      },
      {
        stopNumber: 2,
        name: "Apatani Paddy-Fish Terraces",
        walkTime: "5 min walk (300 m)",
        summary: "Observe wooden irrigation bunds channelling mountain streams cleanly through terraced rice plots.",
        audioStory: "Fish swim freely among the rice stalks, naturally controlling pests while enriching the soil.",
        accessibilityNote: "Viewing from paved road edges avoids muddy bunds.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Hong & Hari Heritage Villages",
        walkTime: "Start · 90 min",
        summary: "Experience traditional granaries, sacred groves, and sustainable bamboo architecture.",
        audioStory: "Every pine and bamboo grove around Ziro is carefully zoned by clan stewardship.",
        accessibilityNote: "Car access directly into village edges.",
      },
      {
        stopNumber: 2,
        name: "Tarin Fish Farm & Kile Pakho Ridge",
        walkTime: "15 min drive · 60 min",
        summary: "High-altitude fish breeding pond and panoramic ridge overlooking the entire Apatani plateau.",
        audioStory: "From Kile Pakho, see the geometric patchwork of fields framed by misty Himalayan foothills.",
        accessibilityNote: "Drive right up to the ridge viewpoint.",
      },
    ],
    localHighlights: [
      {
        title: "Apatani Handloom Textiles & Cane-Bamboo Craft",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Lower Subansiri Indigenous Craft",
        description:
          "Bold geometric-striped backstrap-loom shawls (Jilan/Zikhe) and intricately woven bamboo rain-shields and baskets.",
        whereToFind: "Hapoli Craft Emporium & Hong village weaver co-ops.",
      },
      {
        title: "Bamboo-Shoot Dishes, Tapyo & Apong",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Apatani Culinary Tradition",
        description:
          "Steamed red sticky rice, fresh bamboo-shoot curries, organic valley greens, and traditional bamboo-filtered mineral salt (Tapyo).",
        whereToFind: "Hapoli Market & certified Apatani homestays.",
      },
      {
        title: "Ziro Festival of Music & Myoko",
        category: "Nearby Sites & Festivals",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "September Music Fest / March Myoko",
        description:
          "Zero-plastic eco-music festival set in bamboo-built amphitheatres amidst golden harvest paddies.",
        whereToFind: "Biirii / Outdoor Festival Grounds, Ziro.",
      },
    ],
    nearestHospital: {
      name: "Gyati Takka General Hospital, Ziro",
      area: "Hapoli–Old Ziro Road",
      phone: "03788-224235",
      note: "24x7 district hospital & ambulance (108 / 112).",
    },
    facilities: [
      {
        name: "Hapoli Market Public Toilets",
        type: "Public Toilets",
        landmark: "Main Taxi Stand, Hapoli",
        hours: "6:00 AM – 8:30 PM",
        accessibility: "Ground-level access",
      },
      {
        name: "Old Ziro Filtered Water Kiosk",
        type: "Drinking Water",
        landmark: "Near District Museum",
        hours: "7:00 AM – 7:00 PM",
        accessibility: "Step-free",
      },
      {
        name: "Hong Village Visitor Parking",
        type: "Parking",
        landmark: "Village Entry Arch",
        hours: "24 Hours",
        accessibility: "Flat tarmac",
      },
      {
        name: "Gyati Takka Hospital Emergency",
        type: "Medical Centres",
        landmark: "Old Ziro Road",
        hours: "24 Hours",
        accessibility: "Wheelchair ramp",
      },
      {
        name: "Ziro Valley Tribal Kitchen",
        type: "Food Outlets",
        landmark: "Hapoli Main Bazaar",
        hours: "8:00 AM – 9:00 PM",
        accessibility: "Ground-floor dining",
      },
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
      "Resting along a crescent sweep of the Ganga, Varanasi (Kashi) unites 18th–19th century Maratha-rebuilt sandstone ghats, Banarasi brocade weavers, classical music gharanas, and ancient Sarnath nearby.",
    heroImage: IMG_MATHURA_GHAT,
    secondaryImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "Tell me about Dashashwamedh and Assi Ghat",
      "What is the history of Sarnath's Dhamek Stupa?",
      "Explain how Banarasi Kadhwa brocade is woven",
    ],
    featuredGuide: {
      title: "Dashashwamedh & Ganga Crescent Ghats · दशाश्वमेध घाट",
      recordedHistoryAndFacts:
        "While ancient texts mention Kashi since the first millennium BCE, archaeological evidence confirms flourishing urban settlement at Rajghat from c. 800 BCE onward, and Sarnath 10 km north preserves Mauryan (3rd century BCE) and Gupta-era Buddhist monuments. Most stone ghats seen today—including Dashashwamedh and Manikarnika—were built or extensively reconstructed in Chunar sandstone during the 18th and early 19th centuries by Maratha patrons such as Ahilyabai Holkar and the Peshwas.",
      folkloreAndLocalTradition:
        "According to Puranic tradition, Lord Brahma performed a ten-horse sacrifice ('Dasha-Ashwamedha') at Dashashwamedh Ghat to welcome Shiva. Every evening, young priests perform the choreographed Ganga Aarti with multi-tiered brass lamps accompanied by conch shells and chanting.",
      accessibilityNotes:
        "Assi Ghat and Namo Ghat offer wide, flat, step-free stone promenades and accessible ramps ideal for wheelchair users and elderly parents, unlike narrow old-city lanes around Vishwanath.",
      practicalTips:
        "For quiet morning boat rides, board at Assi Ghat at dawn; use Namo Ghat for easy vehicle parking and accessible riverfront walks.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Assi Ghat Morning Promenade",
        walkTime: "Start · 20 min",
        summary: "Broad southern riverfront plaza hosting sunrise classical music ('Subah-e-Banaras').",
        audioStory: "Begin at Assi Ghat, where the riverfront opens into a wide paved terrace accessible for every age.",
        accessibilityNote: "Step-free paved promenade and seating benches.",
      },
      {
        stopNumber: 2,
        name: "Tulsi Ghat & Chet Singh Fort",
        walkTime: "15 min walk along ghats",
        summary: "Associated with poet-saint Tulsidas and the 18th-century riverside palace-fortress.",
        audioStory: "Walk north along broad stone steps connecting historic akharas and sandstone bastions.",
        accessibilityNote: "Mostly flat promenade between ghats; occasional 4–6 step transitions.",
      },
      {
        stopNumber: 3,
        name: "Dashashwamedh Ghat Aarti Terrace",
        walkTime: "20 min walk / boat · 25 min",
        summary: "Vibrant central ghat with Chunar sandstone steps and evening Ganga Aarti.",
        audioStory: "Notice the symmetry of 18th-century Maratha stone balconies overlooking the ritual steps.",
        accessibilityNote: "Arrive early for upper verandah seating or book a stable bajra boat.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Sarnath Dhamek Stupa & Museum",
        walkTime: "Start · 90 min",
        summary: "Site of the Buddha's first sermon; home to the 5th-century CE Gupta-era Dhamek Stupa and the Ashokan Lion Capital.",
        audioStory: "Examine the geometric floral stone band encircling Dhamek Stupa and step inside the ASI Museum to see the polished Mauryan Lion Capital.",
        accessibilityNote: "Flat park lawns, wheelchair-friendly museum galleries.",
      },
      {
        stopNumber: 2,
        name: "Madanpura Banarasi Handloom Cluster",
        walkTime: "25 min auto · 45 min",
        summary: "Step inside traditional karkhanas weaving pure Katan silk and zari brocades.",
        audioStory: "Watch naksha-bandha card punching and Kadhwa handloom brocade weaving passed down over centuries.",
        accessibilityNote: "Ground-floor weaving workshops.",
      },
      {
        stopNumber: 3,
        name: "Namo Ghat & Evening Aarti",
        walkTime: "15 min e-rickshaw · 60 min",
        summary: "Modern accessible riverfront ghat with sculptures, water-taxi access, and open twilight views.",
        audioStory: "Conclude smoothly at Namo Ghat with spacious seating and zero crowd crush.",
        accessibilityNote: "Fully wheelchair accessible with ramps and golf carts.",
      },
    ],
    localHighlights: [
      {
        title: "Banarasi Silk Brocade & Wooden Lacquer Toys",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Varanasi ODOP",
        description:
          "Handwoven Katan and Tanchoi silk sarees with real silver-gold zari, plus vibrant hand-turned wooden toys from Khojwan.",
        whereToFind: "Madanpura / Sarai Mohana weaver co-ops & Khojwan bazaar.",
      },
      {
        title: "Tamatar Chaat, Kachori Sabzi & Malaiyo",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Kashi Culinary Classics",
        description:
          "Warm earthen-kulhad Tamatar Chaat spiced with roasted cumin, morning hing kachori, and winter saffron-foam Malaiyo.",
        whereToFind: "Godowlia, Thatheri Bazaar, and Assi Chowk.",
      },
      {
        title: "Dev Deepawali & Ganga Mahotsav",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "Kartik Purnima (November)",
        description:
          "All 84 ghats illuminated by over a million earthen oil lamps accompanied by classical concerts.",
        whereToFind: "Namo Ghat to Assi Ghat riverfront.",
      },
    ],
    nearestHospital: {
      name: "Sir Sunderlal Hospital (BHU) / Pt. Deendayal Upadhyay District Hospital",
      area: "Lanka (BHU) / Pandeypur",
      phone: "0542-2369024",
      note: "24x7 tertiary trauma care & ambulance (108 / 112).",
    },
    facilities: [
      {
        name: "Namo Ghat Accessible Washroom Complex",
        type: "Public Toilets",
        landmark: "Namo Ghat Main Promenade",
        hours: "5:00 AM – 11:00 PM",
        accessibility: "Full wheelchair ramps & tactile tiles",
      },
      {
        name: "Kashi Vishwanath Corridor RO Water Booths",
        type: "Drinking Water",
        landmark: "Corridor Plaza & Assi Ghat",
        hours: "24 Hours",
        accessibility: "Step-free",
      },
      {
        name: "Namo Ghat & Godowlia Multi-Level Parking",
        type: "Parking",
        landmark: "Rajghat / Godowlia",
        hours: "24 Hours",
        accessibility: "Golf-cart shuttle to ghats",
      },
      {
        name: "Marwari Hindu Hospital Aid Post",
        type: "Medical Centres",
        landmark: "Godowlia Crossing",
        hours: "24 Hours",
        accessibility: "Ground-floor emergency",
      },
      {
        name: "Deena Chaat Bhandar / Baati Chokha",
        type: "Food Outlets",
        landmark: "Luxa Road & Teliyabagh",
        hours: "11:00 AM – 10:30 PM",
        accessibility: "Ground-floor dining",
      },
    ],
  },
  {
    id: "jaipur-rj",
    name: "Jaipur",
    displayName: "Jaipur (Rajasthan)",
    state: "Rajasthan",
    group: "heritage_city",
    regionCategory: "UNESCO Walled Heritage City",
    tagline: "1727 CE Vastu-planned Pink City, Jantar Mantar astronomy, and Blue Pottery",
    overview:
      "Founded in 1727 CE by Sawai Jai Singh II and architect Vidyadhar Bhattacharya on Vastu Shastra grid geometry, Jaipur pairs terracotta-pink bazaars with astronomical precision and living crafts.",
    heroImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "How does Jantar Mantar's Samrat Yantra tell time to 2 seconds?",
      "Tell me about Panna Meena Ka Kund stepwell in Amer",
      "Explain Jaipur Blue Pottery and Sanganer block prints",
    ],
    featuredGuide: {
      title: "Hawa Mahal & Jantar Mantar Observatory · हवा महल व जंतर मंतर",
      recordedHistoryAndFacts:
        "Built in 1734 CE by Maharaja Sawai Jai Singh II, Jantar Mantar is a UNESCO World Heritage astronomical observatory featuring 19 masonry-and-brass instruments, including the 27-metre Samrat Yantra sundial accurate to two seconds of local solar time. Nearby Hawa Mahal, commissioned in 1799 CE by Sawai Pratap Singh and designed by Lal Chand Ustad, uses 953 jharokha lattice windows to create a Venturi-effect breeze across five storeys.",
      folkloreAndLocalTradition:
        "Jaipur's signature terracotta-pink facade dates to 1876 CE under Sawai Ram Singh II—traditionally painted to welcome Prince Albert, as pink symbolized hospitality in Rajputana court etiquette. Local guides recount how royal court ladies observed vibrant Teej and Gangaur processions unseen behind Hawa Mahal's jharokhas.",
      accessibilityNotes:
        "Jantar Mantar features broad, flat sandstone pathways across the entire observatory garden. Hawa Mahal's interior ramps replace stairs between lower storeys, though upper terraces remain narrow.",
      practicalTips:
        "Buy the Rajasthan Composite Ticket covering Amber Fort, Hawa Mahal, Jantar Mantar, Albert Hall, and Nahargarh to save queue time.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Hawa Mahal Facade & Sireh Deori Bazaar",
        walkTime: "Start · 15 min",
        summary: "Admire the 953-window honeycomb sandstone facade from across Badi Chaupar.",
        audioStory: "Look at how the curved pyramidal crown mirrors a royal mukut while cooling the chambers behind.",
        accessibilityNote: "Level sidewalks; shaded café rooftops across the road for effortless viewing.",
      },
      {
        stopNumber: 2,
        name: "Jantar Mantar Masonry Instruments",
        walkTime: "5 min walk (400 m)",
        summary: "Explore 18th-century stone sundials and celestial coordinate instruments.",
        audioStory: "Watch the shadow glide steadily across the Samrat Yantra marble quadrant—a giant clock powered purely by the sun.",
        accessibilityNote: "Wheelchair-accessible flat walkways and shaded benches.",
      },
      {
        stopNumber: 3,
        name: "Tripolia Bazaar & Thathera Metalwork",
        walkTime: "6 min walk (500 m)",
        summary: "Historic arcaded pink bazaar famous for lac bangles and brassware.",
        audioStory: "Walk beneath Jaipur's uniform pink colonnades designed in 1727 to shelter pedestrians from desert sun.",
        accessibilityNote: "Continuous covered pedestrian verandah.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Amer Fort & Panna Meena Ka Kund",
        walkTime: "Start · 90 min",
        summary: "16th-century Rajput-Mughal hill palace and geometric stepped reservoir below Amer.",
        audioStory: "Descend carefully around Panna Meena Ka Kund's criss-crossing octagonal steps, built to harvest monsoon runoff.",
        accessibilityNote: "Golf-cart shuttle / paved vehicle road to Amer Suraj Pol; stepwell viewable from top.",
      },
      {
        stopNumber: 2,
        name: "City Palace & Jantar Mantar",
        walkTime: "20 min drive · 75 min",
        summary: "Chandra Mahal courtyards, textile galleries, and the UNESCO astronomical park.",
        audioStory: "Notice the Peacock Gate representing autumn amidst the four seasonal gates of Pritam Niwas Chowk.",
        accessibilityNote: "Flat courtyards and wheelchairs available at City Palace gate.",
      },
      {
        stopNumber: 3,
        name: "Johari & Bapu Bazaar Craft Walk",
        walkTime: "8 min e-rickshaw · 45 min",
        summary: "Discover gem-cutting, lac bangles, and Sanganeri block prints.",
        audioStory: "Conclude with an evening walk under Jaipur's lit heritage arches.",
        accessibilityNote: "Level covered arcades.",
      },
    ],
    localHighlights: [
      {
        title: "Jaipur Blue Pottery & Sanganeri Block Print",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Jaipur ODOP",
        description:
          "Turquoise-and-cobalt quartz-paste ceramics fired without clay, paired with fine floral Sanganer cotton block prints.",
        whereToFind: "Neerja International (C-Scheme) & Sanganer/Bagru printing clusters.",
      },
      {
        title: "Pyaaz Kachori, Dal Baati Churma & Ghevar",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Jaipur Iconic Fare",
        description:
          "Flaky onion-spiced kachori, honeycomb-crisp Malai Ghevar, and traditional Rajasthani Dal Baati Churma.",
        whereToFind: "Rawat Mishthan Bhandar (Station Rd) & LMB (Johari Bazaar).",
      },
      {
        title: "Jaipur Literature Festival & Teej Procession",
        category: "Nearby Sites & Festivals",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Winter & Monsoon Cultural Calendar",
        description:
          "Heritage processions passing Tripolia Gate with decorated elephants, folk dancers, and kalbeliya musicians.",
        whereToFind: "Tripolia Bazaar & Albert Hall lawns.",
      },
    ],
    nearestHospital: {
      name: "Sawai Man Singh (SMS) Hospital",
      area: "JLN Marg, Central Jaipur",
      phone: "0141-2518222",
      note: "Major government tertiary trauma centre (108 / 112).",
    },
    facilities: [
      {
        name: "Jantar Mantar Visitor Restrooms",
        type: "Public Toilets",
        landmark: "Ticket Plaza Courtyard",
        hours: "9:00 AM – 5:00 PM",
        accessibility: "Wheelchair accessible",
      },
      {
        name: "Badi Chaupar Metro Concourse Water",
        type: "Drinking Water",
        landmark: "Badi Chaupar Underground Metro Station",
        hours: "6:00 AM – 10:30 PM",
        accessibility: "Lifts & ramps",
      },
      {
        name: "Atish Market Multi-Level Parking",
        type: "Parking",
        landmark: "Behind Tripolia Bazaar",
        hours: "24 Hours",
        accessibility: "Elevator access",
      },
      {
        name: "Gangori Hospital First-Aid",
        type: "Medical Centres",
        landmark: "Gangori Bazaar, Walled City",
        hours: "24 Hours",
        accessibility: "Ground floor",
      },
      {
        name: "LMB (Laxmi Misthan Bhandar)",
        type: "Food Outlets",
        landmark: "Johari Bazaar",
        hours: "8:00 AM – 11:00 PM",
        accessibility: "Level entrance",
      },
    ],
  },
  {
    id: "mysuru-ka",
    name: "Mysuru",
    displayName: "Mysuru (Karnataka)",
    state: "Karnataka",
    group: "heritage_city",
    regionCategory: "Royal Heritage City",
    tagline: "Indo-Saracenic Mysuru Palace, sandalwood carvings, silk sarees, and Chamundi Hill",
    overview:
      "Renowned for clean boulevards, neoclassical clocktowers, and Wodeyar-era architecture, Mysuru blends Indo-Saracenic grandeur with living craft guilds of Mysuru silk, rosewood inlay, and sandalwood.",
    heroImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "Who designed the 1912 Mysuru Palace?",
      "Tell me about Devaraja Market and Mysuru Pak",
      "Explain Mysuru Rosewood Inlay and Silk crafts",
    ],
    featuredGuide: {
      title: "Amba Vilas (Mysuru Palace) · ಮೈಸೂರು ಅರಮನೆ",
      recordedHistoryAndFacts:
        "Designed by British architect Henry Irwin and completed in 1912 CE after fire destroyed the older wooden palace, Amba Vilas Palace exemplifies Indo-Saracenic architecture—combining Rajput, Mughal, Gothic, and Hoysala-inspired Hindu motifs in grey granite and pink marble domes. Its Kalyan Mantapa (wedding hall) features stained-glass octagonal ceilings crafted in Glasgow and ornate cast-iron pillars.",
      folkloreAndLocalTradition:
        "During the ten-day Nadahabba (Mysuru Dasara), Wodeyar royalty and citizens celebrate Goddess Chamundeshwari's victory over Mahishasura—the mythical demon from whom Mysuru ('Mahishuru') derives its name. On Vijayadashami, nearly 100,000 incandescent bulbs illuminate the palace facade.",
      accessibilityNotes:
        "Mysuru Palace offers one of India's best accessible heritage experiences: paved garden paths, free wheelchairs at Varaha Gate, and ramps into ground-floor galleries.",
      practicalTips:
        "Illuminated every Sunday and public holiday 7:00–7:45 PM; inside photography is restricted inside the main Darbar galleries.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Amba Vilas Palace Gardens & Durbar Hall",
        walkTime: "Start · 35 min",
        summary: "Walk through stained-glass pavilions and carved rosewood doors.",
        audioStory: "Notice the cast-iron columns painted in deep turquoise and gold inside the public Durbar Hall.",
        accessibilityNote: "Free wheelchairs and smooth stone paths.",
      },
      {
        stopNumber: 2,
        name: "KR Circle & Devaraja Market",
        walkTime: "10 min walk (750 m)",
        summary: "130-year-old covered heritage market bursting with jasmine garlands, kumkum cones, and sandalwood incense.",
        audioStory: "Step inside Devaraja Market where neat pyramids of saffron, turmeric, and crimson kumkum line century-old stone aisles.",
        accessibilityNote: "Flat market corridors; best visited before 11 AM.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Mysuru Palace & Jaganmohan Art Gallery",
        walkTime: "Start · 90 min",
        summary: "Palace architecture followed by Raja Ravi Varma paintings at Jaganmohan Palace.",
        audioStory: "Compare royal court murals at Amba Vilas with Raja Ravi Varma's oil canvases nearby.",
        accessibilityNote: "Level entry at both sites.",
      },
      {
        stopNumber: 2,
        name: "KSIC Mysuru Silk Factory & Chamundi Hill",
        walkTime: "15 min drive · 75 min",
        summary: "Watch pure mulberry silk woven with gold zari before ascending Chamundi Hill.",
        audioStory: "Motorable road leads straight to the hilltop Chamundeshwari Temple and the 1659 CE monolithic Nandi.",
        accessibilityNote: "Road-level entry for seniors.",
      },
    ],
    localHighlights: [
      {
        title: "Mysuru Silk & Rosewood Inlay (ODOP)",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Mysuru Craft",
        description:
          "Pure mulberry crepe silk woven by KSIC since 1912 and intricate bone/ivory-substitute wood inlay artwork.",
        whereToFind: "KSIC Showroom (Manandavadi Rd) & Cauvery Arts Emporium.",
      },
      {
        title: "Mysuru Pak & Masala Dosa",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Palace Kitchen Invention",
        description:
          "Melt-in-mouth gram-flour, ghee, and sugar fudge invented in the Mysuru Palace kitchen by Kakasura Madappa, paired with crisp wood-fired Mylari dosa.",
        whereToFind: "Guru Sweet Mart (Sayyaji Rao Rd) & Original Vinayaka Mylari.",
      },
      {
        title: "Mysuru Dasara & Brindavan Illumination",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents"],
        originLabel: "Autumn Royal Festival",
        description:
          "Traditional torchlight parade, classical music recitals, and illuminated palace gardens.",
        whereToFind: "Mysuru Palace & Bannimantap Grounds.",
      },
    ],
    nearestHospital: {
      name: "K.R. Hospital (Mysore Medical College)",
      area: "Irwin Road, Central Mysuru",
      phone: "0821-2520512",
      note: "24x7 emergency & ambulance (108 / 112).",
    },
    facilities: [
      {
        name: "Palace Varaha Gate Accessible Toilets",
        type: "Public Toilets",
        landmark: "Varaha Gate Ticket Lawn",
        hours: "9:30 AM – 6:00 PM",
        accessibility: "Wheelchair accessible",
      },
      {
        name: "Devaraja Market Water Booth",
        type: "Drinking Water",
        landmark: "Sayyaji Rao Road Gate",
        hours: "6:00 AM – 9:30 PM",
        accessibility: "Street level",
      },
      {
        name: "Palace Southern Parking Plaza",
        type: "Parking",
        landmark: "Amba Vilas South Gate",
        hours: "8:00 AM – 8:30 PM",
        accessibility: "Smooth asphalt",
      },
      {
        name: "K.R. Hospital Trauma Wing",
        type: "Medical Centres",
        landmark: "Irwin Road",
        hours: "24 Hours",
        accessibility: "Ramp entrance",
      },
      {
        name: "Mylari & RRR Dining",
        type: "Food Outlets",
        landmark: "Nazarbad & Gandhi Square",
        hours: "7:00 AM – 10:00 PM",
        accessibility: "Ground floor",
      },
    ],
  },
  {
    id: "madurai-tn",
    name: "Madurai",
    displayName: "Madurai (Tamil Nadu)",
    state: "Tamil Nadu",
    group: "heritage_city",
    regionCategory: "Sangam-Era Temple City",
    tagline: "Polychrome Dravida gopurams, Thirumalai Nayak Palace, and Madurai Sungudi sarees",
    overview:
      "One of South Asia's oldest living cities along the Vaigai River, Madurai was the seat of the Tamil Sangam academies and shines today with towering Nayak-era temple gopurams and late-night culinary lanes.",
    heroImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "Explain the sculpture on Meenakshi Amman Temple's gopurams",
      "What is the history of Thirumalai Nayakkar Mahal?",
      "Tell me about Madurai Sungudi cotton sarees",
    ],
    featuredGuide: {
      title: "Meenakshi Amman Temple & Pudu Mandapam · மதுரை மீனாட்சி அம்மன்",
      recordedHistoryAndFacts:
        "While Madurai appears in Sangam Tamil literature and Greek accounts by Megasthenes (3rd century BCE), the present monumental Meenakshi Sundareshwarar complex was largely expanded in the 16th–17th centuries under the Madurai Nayak dynasty (notably Thirumalai Nayak, r. 1623–1659 CE). Its 14 towering stuccoed granite gopurams, Potramarai Kulam (Golden Lotus Tank), and Thousand Pillar Hall exemplify late Dravida temple architecture.",
      folkloreAndLocalTradition:
        "According to Tamil sacred lore (Thiruvilaiyadal Puranam), Goddess Meenakshi was born from a sacrificial fire to King Malayadwaja Pandya, conquered the directions, and wed Lord Sundareshwarar (Shiva) in Madurai—celebrated annually in the grand Chithirai Festival.",
      accessibilityNotes:
        "Wide level stone corridors surround the outer prakaram, and battery carts / wheelchairs operate for elderly devotees at the East & South towers. Footwear and mobile phones must be deposited at the outer cloakrooms.",
      practicalTips:
        "Visit at 6:00 AM for peaceful morning darshan and cooler granite floors; modest shoulder-and-knee-covering attire is required.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "East Gopuram & Pudu Mandapam",
        walkTime: "Start · 20 min",
        summary: "17th-century pillared pavilion built by Thirumalai Nayak featuring life-size granite sculptures.",
        audioStory: "Walk along Pudu Mandapam's granite piers carved with Nayak kings and traditional craft stalls.",
        accessibilityNote: "Level street approach; shaded stone roof.",
      },
      {
        stopNumber: 2,
        name: "Thirumalai Nayakkar Mahal",
        walkTime: "10 min walk / 4 min auto",
        summary: "1636 CE palace blending Dravida stucco with Indo-Islamic arches and 20-metre-tall circular pillars.",
        audioStory: "Stand inside the Swarga Vilasam courtyard to see how massive brick-and-shell-lime pillars support vaulted arches.",
        accessibilityNote: "Flat courtyard lawns and benches.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Meenakshi Temple & Thousand Pillar Museum",
        walkTime: "Start · 90 min",
        summary: "Explore the Temple Art Museum's musical granite pillars and Golden Lotus Tank.",
        audioStory: "Look for the carved musical pillars that resonate with distinct classical notes when gently tapped.",
        accessibilityNote: "Wheelchair assistance available at East Gate.",
      },
      {
        stopNumber: 2,
        name: "Thirumalai Nayak Mahal & Sungudi Weavers",
        walkTime: "10 min auto · 60 min",
        summary: "Royal stuccoed durbar hall followed by traditional tie-dye Sungudi textile workshops.",
        audioStory: "Meet Sourashtra community artisans tying thousands of tiny rice-grain knots on soft cotton cloth.",
        accessibilityNote: "Ground-floor palace and street-level shops.",
      },
    ],
    localHighlights: [
      {
        title: "Madurai Sungudi Sarees & Malli (Jasmine)",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Madurai Craft",
        description:
          "Breathable cotton tie-and-dye sarees crafted by the Sourashtra weaving community alongside GI-tagged fragrant Madurai jasmine garlands.",
        whereToFind: "Vilakkuthoon & Mattuthavani Flower Market (early morning).",
      },
      {
        title: "Jigarthanda & Kari Dosa",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Madurai Iconic Refreshment",
        description:
          "Cooling almond-gum (badam pisin), sarsaparilla root syrup (nannari), thickened milk, and house-made ice cream.",
        whereToFind: "Famous Jigarthanda (East Masi Street) & Simmakkal.",
      },
      {
        title: "Chithirai Festival & Vandiyur Mariamman Teppakulam",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents"],
        originLabel: "April–May / Jan–Feb Float Festival",
        description:
          "Grand temple float festival around a massive 17th-century stepped water tank fed by the Vaigai River.",
        whereToFind: "Vandiyur Teppakulam, 5 km east.",
      },
    ],
    nearestHospital: {
      name: "Government Rajaji Hospital, Madurai",
      area: "Panagal Road, Goripalayam",
      phone: "0452-2532535",
      note: "24x7 emergency & ambulance (108 / 112).",
    },
    facilities: [
      {
        name: "Meenakshi East Gate Restrooms",
        type: "Public Toilets",
        landmark: "Opposite East Tower Cloakroom",
        hours: "5:00 AM – 10:00 PM",
        accessibility: "Step-free ground block",
      },
      {
        name: "Chithirai Street RO Water Station",
        type: "Drinking Water",
        landmark: "South Chitrai Street",
        hours: "24 Hours",
        accessibility: "Street level",
      },
      {
        name: "Jhansi Rani Park Parking",
        type: "Parking",
        landmark: "West Masi Street",
        hours: "5:00 AM – 10:30 PM",
        accessibility: "Paved lot",
      },
      {
        name: "Corporation Urban Primary Health Centre",
        type: "Medical Centres",
        landmark: "Near South Avani Moola Street",
        hours: "8:00 AM – 8:00 PM",
        accessibility: "Ground floor",
      },
      {
        name: "Murugan Idli Shop / Sabarees",
        type: "Food Outlets",
        landmark: "West Masi Street",
        hours: "7:00 AM – 11:00 PM",
        accessibility: "Level dining hall",
      },
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
      "Resting along the Bay of Bengal, Puri combines the towering 12th-century Kalinga-style Jagannath Temple, vibrant Heritage Crafts Village Raghurajpur, and nearby Konark Sun Temple.",
    heroImage: IMG_TEMPLE_CARVING,
    secondaryImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "Tell me about the Kalinga architecture of Shri Jagannath Temple",
      "What is Pattachitra painting in Raghurajpur village?",
      "Explain the history of Konark Sun Temple nearby",
    ],
    featuredGuide: {
      title: "Shri Jagannath Temple & Bada Danda · श्री जगन्नाथ मंदिर, पुरी",
      recordedHistoryAndFacts:
        "Commenced in the 12th century CE by King Anantavarman Chodaganga Deva of the Eastern Ganga dynasty and completed by Anangabhima Deva III, the Shri Jagannath Temple is an exemplary Kalinga-style Rekha Deul monument rising nearly 65 metres above its stone plinth. Note that entry into the inner sanctum is traditionally restricted to practising Hindus, while all visitors can admire the monumental stone outer walls and Bada Danda (Grand Road) from outside and nearby heritage rooftops.",
      folkloreAndLocalTradition:
        "Odisha tradition recounts that the wooden idols (Daru Brahma) of Jagannath, Balabhadra, and Subhadra were carved in secret for King Indradyumna and are ritually renewed every 12–19 years during Nabakalebara. During Rath Yatra, the deities travel down Bada Danda on towering hand-pulled wooden chariots.",
      accessibilityNotes:
        "Grand Road (Bada Danda) is broad, paved, and shaded in sections. Free battery-operated shuttle carts and wheelchairs for seniors operate between parking zones and Singhadwara (Lion's Gate).",
      practicalTips:
        "Pair morning coastal walks with a 25-minute afternoon excursion to Raghurajpur Artisan Village (14 km), where every home paints Pattachitra scrolls.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Singhadwara (Lion's Gate) & Aruna Stambha",
        walkTime: "Start · 20 min",
        summary: "View the 16-sided monolithic chlorite Aruna Pillar originally brought from Konark in the 18th century.",
        audioStory: "Stand before Singhadwara and admire the finely sculpted Aruna Stambha—an authentic 13th-century pillar relocated from Konark.",
        accessibilityNote: "Wide, flat pedestrian plaza with seating along the outer perimeter.",
      },
      {
        stopNumber: 2,
        name: "Bada Danda (Grand Road) Chariot Route",
        walkTime: "15 min walk (1 km)",
        summary: "Walk the ceremonial boulevard linking Jagannath Temple to Gundicha Temple.",
        audioStory: "During Rath Yatra, carpenters build three new wooden chariots right here using traditional hand tools without metal nails.",
        accessibilityNote: "Level, wide paved avenue.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Grand Road, Singhadwara & Atharanala Bridge",
        walkTime: "Start · 60 min",
        summary: "Explore Singhadwara and the 13th-century 18-arch laterite Atharanala Bridge at Puri's entrance.",
        audioStory: "Cross or view Atharanala Bridge—an engineering marvel of corbelled Kalinga stone arches standing since c. 1290 CE.",
        accessibilityNote: "Vehicle access right up to both points.",
      },
      {
        stopNumber: 2,
        name: "Raghurajpur Heritage Crafts Village",
        walkTime: "25 min drive · 90 min",
        summary: "Step into India's living Pattachitra, palm-leaf engraving, and Gotipua dance village.",
        audioStory: "Watch artists grind conch-shell white and lampblack pigments on stone to paint epic cloth scrolls.",
        accessibilityNote: "Flat, tree-shaded single village street—ideal for families and elderly parents.",
      },
    ],
    localHighlights: [
      {
        title: "Pattachitra Cloth Scrolls & Tussar Silk",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Puri District Craft",
        description:
          "Intricate natural-pigment scroll paintings on tamarind-paste treated cloth and etched palm-leaf talapatra manuscripts.",
        whereToFind: "Raghurajpur Heritage Crafts Village (14 km north).",
      },
      {
        title: "Khaja, Dalma & Abhada Mahaprasad",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Odisha Temple & Coastal Cuisine",
        description:
          "Crisp layered sugar-glazed Khaja pastries, mild no-onion-no-garlic lentil Dalma, and earthen-pot steamed temple Mahaprasad.",
        whereToFind: "Ananda Bazaar (inside temple for permitted visitors) & Grand Road sweet shops.",
      },
      {
        title: "Konark Sun Temple & Sand Art Beach",
        category: "Nearby Sites & Festivals",
        companionFit: ["Family with Kids", "Elderly Parents", "Solo"],
        originLabel: "35 km East via Marine Drive",
        description:
          "13th-century UNESCO chariot temple of Surya along a scenic casuarina coastal drive.",
        whereToFind: "Puri–Konark Marine Drive.",
      },
    ],
    nearestHospital: {
      name: "District Headquarters Hospital, Puri",
      area: "Medical Square, Grand Road",
      phone: "06752-222062",
      note: "24x7 emergency & ambulance (108 / 112).",
    },
    facilities: [
      {
        name: "Singhadwara Pilgrim Utility Block",
        type: "Public Toilets",
        landmark: "Near Jagannath Temple East Plaza",
        hours: "24 Hours",
        accessibility: "Wheelchair accessible",
      },
      {
        name: "Bada Danda Drinking Water Kiosks",
        type: "Drinking Water",
        landmark: "Every 300 m along Grand Road",
        hours: "24 Hours",
        accessibility: "Step-free",
      },
      {
        name: "Jagannath Ballav Multi-Level Parking",
        type: "Parking",
        landmark: "Grand Road",
        hours: "24 Hours",
        accessibility: "Electric shuttle to Singhadwara",
      },
      {
        name: "Temple First-Aid Medical Unit",
        type: "Medical Centres",
        landmark: "Beside Singhadwara Police Post",
        hours: "5:00 AM – 11:00 PM",
        accessibility: "Wheelchairs & stretchers",
      },
      {
        name: "Dalma Odia Kitchen",
        type: "Food Outlets",
        landmark: "VIP Road, Puri",
        hours: "11:00 AM – 10:30 PM",
        accessibility: "Ground-floor dining",
      },
    ],
  },
  // States & UTs
  {
    id: "state-uttar-pradesh",
    name: "Uttar Pradesh",
    displayName: "Uttar Pradesh",
    state: "Uttar Pradesh",
    group: "state_ut",
    regionCategory: "State Heritage Trail",
    tagline: "Braj, Awadh, Bundelkhand, and Buddhist circuit—from Mathura & Sarnath to Dudhwa & Kalinjar",
    overview:
      "Spanning the Ganga-Yamuna plains to Vindhyan forts, Uttar Pradesh connects Mathura's Kushan galleries, Varanasi's ghats, Agra-Fatehpur Sikri Mughal marvels, Ayodhya, Kushinagar, and lesser-known Kalinjar Fort.",
    heroImage: IMG_MATHURA_GHAT,
    samplePrompts: [
      "What are the top lesser-known heritage towns in Uttar Pradesh?",
      "Explain the Buddhist Circuit from Sarnath to Kushinagar",
      "What ODOP handicrafts should I explore across UP districts?",
    ],
    featuredGuide: {
      title: "Uttar Pradesh Heritage & ODOP Corridor",
      recordedHistoryAndFacts:
        "Archaeologically spanning Painted Grey Ware settlements, 16 Mahajanapadas (Kashi, Kosala, Shurasena, Vatsa), Kushan sculpture hubs at Mathura, Gupta brick temples at Bhitargaon (5th century CE), and Mughal-Awadhi architecture across Agra and Lucknow, Uttar Pradesh holds one of India's densest concentrations of ASI monuments.",
      folkloreAndLocalTradition:
        "Sacred river traditions along the Ganga, Yamuna, and Sarayu animate seasonal fairs such as Kartik Purnima, Dev Deepawali, and Braj Holi, while regional folk ballads—Alha-Udal in Bundelkhand and Biraha in Purvanchal—carry oral histories across villages.",
      accessibilityNotes:
        "Major monuments (Taj Mahal, Sarnath, Fatehpur Sikri, Bara Imambara) offer paved ramps and golf carts; smaller brick sites like Bhitargaon have village-road access.",
      practicalTips:
        "Explore UP's 75-district One District One Product (ODOP) map—from Mathura Poshak and Varanasi Silk to Lucknow Chikankari and Moradabad Brass.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Bhitargaon 5th-Century Gupta Brick Temple (Kanpur Dehat)",
        walkTime: "Highlight 1 · 30 min",
        summary: "India's oldest surviving terracotta-clad structural Hindu temple with a true brick arch.",
        audioStory: "Built around the 5th century CE, Bhitargaon proves early Indian mastery of fired-brick shikhara engineering.",
        accessibilityNote: "Flat fenced lawn around plinth.",
      },
      {
        stopNumber: 2,
        name: "Sarnath & Varanasi Riverfront",
        walkTime: "Highlight 2 · 30 min",
        summary: "Pair Mauryan heritage at Sarnath with Chunar sandstone ghats along the Ganga.",
        audioStory: "Witness India's national emblem Ashokan Pillar base in situ.",
        accessibilityNote: "Level ASI park pathways.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Agra Heritage Triangle & Bateshwar Ghats",
        walkTime: "Morning · 2 hrs",
        summary: "Beyond Agra Fort and Taj Mahal, discover 101 Yamuna-side Shiva temples at Bateshwar.",
        audioStory: "Follow the Yamuna downstream from Mathura through Agra to quiet sandstone ghats in Bateshwar.",
        accessibilityNote: "Vehicle access along riverfront.",
      },
      {
        stopNumber: 2,
        name: "Lucknow Residency & Chikankari Craft Guilds",
        walkTime: "Afternoon · 2 hrs",
        summary: "Explore 18th–19th century Nawabi Lakhori-brick architecture and Chowk shadow-work embroidery.",
        audioStory: "Compare delicate floral stucco on Rumi Darwaza with needle-crafted Chikankari motifs.",
        accessibilityNote: "Shaded gardens and level Chowk alleys.",
      },
    ],
    localHighlights: [
      {
        title: "UP ODOP Trio: Chikankari, Banarasi Silk & Brassware",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Uttar Pradesh ODOP Network",
        description:
          "Lucknow shadow-work embroidery, Mathura zari poshak, Firozabad glass, and Bhadohi hand-knotted carpets.",
        whereToFind: "District ODOP emporiums & UP Khadi/Handloom centres.",
      },
      {
        title: "Mathura Peda, Allahabad Guava & Awadhi Tehri",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "State Culinary Heritage",
        description:
          "Regional flavours shifting from Braj milk sweets to Purvanchal litti-chokha and Awadhi saffron biryanis/tehri.",
        whereToFind: "Heritage chowks across Mathura, Lucknow, and Varanasi.",
      },
    ],
    nearestHospital: {
      name: "UP State Emergency & Trauma Network (KGMU / AIIMS)",
      area: "Statewide 108 / 112 Dispatch",
      phone: "108",
      note: "Free 108 ambulance network across all 75 UP districts.",
    },
    facilities: [
      {
        name: "UP Tourism Rahi Tourist Bungalows",
        type: "Food Outlets",
        landmark: "Major Heritage Highways",
        hours: "7:00 AM – 10:30 PM",
        accessibility: "Ground-floor restrooms & dining",
      },
      {
        name: "ASI Monument Restroom & Water Kiosks",
        type: "Public Toilets",
        landmark: "At Agra, Sarnath, Lucknow, Jhansi sites",
        hours: "6:00 AM – 6:30 PM",
        accessibility: "Accessible ramps at major sites",
      },
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
      "From Jaipur's pink grid and Bundi's stepwells to Mandawa's frescoed havelis and Kumbhalgarh's 36-km wall, Rajasthan safeguards unmatched stepwell engineering and community craft traditions.",
    heroImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "Tell me about Abhaneri's Chand Baori stepwell",
      "What are Shekhawati's open-air frescoed havelis?",
      "Explain Rajasthan's block printing and Kota Doria crafts",
    ],
    featuredGuide: {
      title: "Chand Baori Stepwell & Bundi Baolis · आभानेरी चाँद बावड़ी",
      recordedHistoryAndFacts:
        "Located in Abhaneri (Dausa district), Chand Baori dates its earliest phase to the 8th–9th century CE under the Nikumbha dynasty, featuring 3,500 symmetrical steps descending 13 storeys to harvest desert groundwater. Nearby Harshat Mata Temple preserves intricate Pratihara stone reliefs.",
      folkloreAndLocalTradition:
        "Local villagers share tales that Chand Baori's impossibly steep geometry was built in a single night, and traditionally warn visitors that it is nearly impossible to retrieve a coin dropped down the same flight of steps.",
      accessibilityNotes:
        "Descending into Chand Baori's steps is restricted for preservation; visitors enjoy clear panoramic views from the flat stone upper gallery.",
      practicalTips:
        "Combine Abhaneri with Bundi or Shekhawati towns for authentic small-town Rajasthan.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Chand Baori Upper Gallery & Harshat Mata",
        walkTime: "Start · 30 min",
        summary: "9th-century desert water architecture and Pratihara temple plinth.",
        audioStory: "Feel how ambient air temperature drops 5–6 degrees Celsius near the lower baoli levels.",
        accessibilityNote: "Flat upper stone gallery.",
      },
      {
        stopNumber: 2,
        name: "Mandawa / Nawalgarh Painted Havelis",
        walkTime: "Highlight 2 · 30 min",
        summary: "19th-century merchant mansions painted inside and out with frescoes.",
        audioStory: "Spot locomotives and telephones painted alongside epic scenes by Marwari muralists.",
        accessibilityNote: "Level sandy town lanes.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Bundi Taragarh Base & Raniji Ki Baori",
        walkTime: "Morning · 90 min",
        summary: "Explore 17th-century Queen Nathavati's stepwell and Bundi miniature mural rooms.",
        audioStory: "Bundi preserves over 50 historic stepwells tucked inside quiet blue-washed lanes.",
        accessibilityNote: "Auto-rickshaw connects stepwells without steep climbs.",
      },
    ],
    localHighlights: [
      {
        title: "Kota Doria, Bagru Print & Blue Pottery",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Rajasthan GI Craft Cluster",
        description:
          "Khat-patterned lightweight Kota Doria weaves, mud-resist Dabu block prints from Bagru, and Jodhpur Mojari footwear.",
        whereToFind: "Kaithoon (Kota), Bagru (Jaipur), and Rajasthali Emporium.",
      },
      {
        title: "Ker Sangri, Mirchi Vada & Ghevar",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids"],
        originLabel: "Arid Ecology Cuisine",
        description:
          "Foraged desert berries (Ker) and pods (Sangri) cooked in dry spices with millet bajra rotis.",
        whereToFind: "Traditional Rajasthani thali kitchens.",
      },
    ],
    nearestHospital: {
      name: "SMS Hospital Jaipur / AIIMS Jodhpur",
      area: "Statewide 108 Emergency",
      phone: "108",
      note: "24x7 statewide emergency ambulance coverage.",
    },
    facilities: [
      {
        name: "RTDC Heritage Rest Stops",
        type: "Food Outlets",
        landmark: "Across Highway Heritage Circuits",
        hours: "7:00 AM – 10:00 PM",
        accessibility: "Step-free restrooms & parking",
      },
    ],
  },
  {
    id: "state-kerala",
    name: "Kerala",
    displayName: "Kerala",
    state: "Kerala",
    group: "state_ut",
    regionCategory: "State Heritage Trail",
    tagline: "Timber-roofed Nalukettu architecture, Muziris port heritage, and Aranmula mirrors",
    overview:
      "From Fort Kochi's spice warehouses and Kodungallur's ancient Muziris port to Padmanabhapuram Palace's carved rosewood halls, Kerala preserves monsoon-adapted timber architecture and living classical arts.",
    heroImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "How does Kerala's Nalukettu courtyard keep homes cool?",
      "Tell me about Muziris Heritage Project in Kodungallur",
      "What is the secret of Aranmula Kannadi metal mirrors?",
    ],
    featuredGuide: {
      title: "Fort Kochi & Muziris Maritime Heritage · കൊച്ചി & മുസിരിസ്",
      recordedHistoryAndFacts:
        "Archaeological excavations at Pattanam near Kodungallur confirm an active 1st-century BCE to 4th-century CE Indian Ocean trading port identified with ancient Muziris—yielding Roman amphorae, West Asian beads, and Tamil-Brahmi potsherds. Centuries later, Fort Kochi preserved India's oldest European church structure (St. Francis, 1503 CE) alongside Mattancherry Palace murals and Chendamangalam handlooms.",
      folkloreAndLocalTradition:
        "Malayalam oral ballads celebrate the arrival of Onam's benevolent King Mahabali, while traditional Theyyam and Kathakali performances transform temple courtyards into living mythic theatre after dusk.",
      accessibilityNotes:
        "Fort Kochi's shaded coastal promenade and Mattancherry Palace ground galleries are flat and comfortable; houseboat boarding in Alleppey requires short gangplank assistance.",
      practicalTips:
        "Visit Chendamangalam weaver co-ops near Kochi to support flood-resilient handloom guilds.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Fort Kochi Promenade & Chinese Fishing Nets",
        walkTime: "Start · 25 min",
        summary: "Walk beside cantilevered teak-and-bamboo fishing nets along the Arabian Sea channel.",
        audioStory: "Watch fishermen counterbalance granite stones suspended on ropes—a coastal tradition documented here for centuries.",
        accessibilityNote: "Smooth waterfront walkway with benches.",
      },
      {
        stopNumber: 2,
        name: "Mattancherry Dutch Palace & Jew Town",
        walkTime: "10 min auto · 35 min",
        summary: "Explore 17th-century Kerala mural art and spice-trade timber architecture.",
        audioStory: "Step inside Mattancherry's galleries to view rich ochre-and-indigo Ramayana murals.",
        accessibilityNote: "Level ground floor; upstairs mural hall has wooden stairs.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Muziris Heritage Circuit (Pattanam & Paravur)",
        walkTime: "Morning · 2.5 hrs",
        summary: "Explore Cheraman Juma Mosque site, Paravur Synagogue museum, and Paliyam Nalukettu.",
        audioStory: "Trace 2,000 years of peaceful maritime exchange along the Periyar delta.",
        accessibilityNote: "Flat museum courtyards.",
      },
    ],
    localHighlights: [
      {
        title: "Aranmula Kannadi (Metal Mirror) & Kasavu Handloom",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Kerala GI Heritage Craft",
        description:
          "Front-surface reflecting bronze-tin alloy mirrors polished by hand without glass, plus unbleached ivory-and-gold Kasavu cotton weaves.",
        whereToFind: "Aranmula Artisan Street & Balaramapuram / Chendamangalam looms.",
      },
      {
        title: "Appam, Avial & Sadhya on Banana Leaf",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Monsoon Coast Kitchen",
        description:
          "Lacy fermented rice hoppers paired with coconut-milk vegetable stew and spiced Sadhya platters.",
        whereToFind: "Kashi Art Café (Fort Kochi) & traditional vegetarian Sadhya halls.",
      },
    ],
    nearestHospital: {
      name: "Ernakulam General Hospital / KIMS",
      area: "Hospital Road, Kochi",
      phone: "108",
      note: "24x7 emergency & ambulance across Kerala (108 / 112).",
    },
    facilities: [
      {
        name: "Fort Kochi Beach Comfort Station",
        type: "Public Toilets",
        landmark: "Vasco da Gama Square",
        hours: "6:00 AM – 10:00 PM",
        accessibility: "Step-free ground entrance",
      },
    ],
  },
  {
    id: "state-tamil-nadu",
    name: "Tamil Nadu",
    displayName: "Tamil Nadu",
    state: "Tamil Nadu",
    group: "state_ut",
    regionCategory: "State Heritage Trail",
    tagline: "Chola bronze & stone temples, Chettinad mansions, and Pallava shore carvings",
    overview:
      "Home to UNESCO Chola temples at Thanjavur and Gangaikondacholapuram, Pallava rock-cut reliefs at Mamallapuram, and terracotta-tiled Chettinad heritage towns like Karaikudi.",
    heroImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "Tell me about Thanjavur Brihadisvara Temple's engineering",
      "What are the Athangudi tiles of Chettinad?",
      "Explain Mamallapuram's Shore Temple and Arjuna's Penance",
    ],
    featuredGuide: {
      title: "Great Living Chola Temples & Chettinad · தஞ்சಾವூர் & செட்டிநாடு",
      recordedHistoryAndFacts:
        "Completed around 1010 CE by Rajaraja Chola I, the Brihadisvara Temple at Thanjavur rises 66 metres in carved granite with detailed Tamil inscriptions recording musicians, dancers, bronze donations, and temple administration. Further south in Chettinad (Karaikudi–Kanadukathan), 19th-century merchant mansions showcase Burma teak pillars and hand-cast geometric Athangudi cement tiles.",
      folkloreAndLocalTradition:
        "Tamil temple music preserves centuries-old Thevaram hymns sung daily on stone corridors, while Kolam rice-flour thresholds drawn every dawn welcome prosperity and feed ants.",
      accessibilityNotes:
        "Thanjavur Brihadisvara Temple has broad, flat granite courtyards suitable for wheelchairs up to the outer Nandi mandapa.",
      practicalTips:
        "Visit Swamimalai near Kumbakonam to see Chola-tradition lost-wax bronze casting workshops in action.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Brihadisvara Outer Granite Courtyard",
        walkTime: "Start · 30 min",
        summary: "Walk the serene moat-circled granite temple complex.",
        audioStory: "Read the continuous band of 11th-century Tamil inscriptions wrapping the temple plinth.",
        accessibilityNote: "Wheelchair-accessible flat granite courtyard.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Kanadukathan Chettinad Heritage Walk",
        walkTime: "Morning · 90 min",
        summary: "Stroll quiet tree-lined lanes of carved 19th-century palatial homes and Athangudi tile workshops.",
        audioStory: "Watch artisans pour vibrant mineral pigments into brass moulds to cure Athangudi floor tiles in water tanks.",
        accessibilityNote: "Wide, flat village streets.",
      },
    ],
    localHighlights: [
      {
        title: "Kanchipuram Silk, Thanjavur Paintings & Athangudi Tiles",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Tamil Nadu GI Craft Network",
        description:
          "Heavy temple-border mulberry silk, gold-leaf Thanjavur relief icons, and hand-cured Athangudi tiles.",
        whereToFind: "Co-optex / Poompuhar & Athangudi village factories.",
      },
      {
        title: "Filter Kaapi, Karaikudi Kuzhi Paniyaram & Pongal",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Tamil Culinary Classics",
        description:
          "Brass-tumbler frothy degree coffee paired with steamed rice dumplings and pepper-cumin Ven Pongal.",
        whereToFind: "Traditional mess kitchens across Thanjavur, Madurai, and Karaikudi.",
      },
    ],
    nearestHospital: {
      name: "Thanjavur Medical College / Rajiv Gandhi GH Chennai",
      area: "Statewide 108 Network",
      phone: "108",
      note: "24x7 emergency ambulance via 108 / 112.",
    },
    facilities: [
      {
        name: "Thanjavur Temple Heritage Restrooms",
        type: "Public Toilets",
        landmark: "Keralantakan Entrance Gate",
        hours: "6:00 AM – 8:30 PM",
        accessibility: "Step-free ramp",
      },
    ],
  },
  {
    id: "state-maharashtra",
    name: "Maharashtra",
    displayName: "Maharashtra",
    state: "Maharashtra",
    group: "state_ut",
    regionCategory: "State Heritage Trail",
    tagline: "Ajanta-Ellora rock-cut caves, Sahyadri hill forts, and Paithani silk weaves",
    overview:
      "Maharashtra preserves over 60% of India's ancient rock-cut architecture—from Ajanta, Ellora, and Karla caves to Maratha sea and mountain forts like Raigad and Sindhudurg, plus Paithan's luminous silk looms.",
    heroImage: IMG_TEMPLE_CARVING,
    samplePrompts: [
      "How was Ellora's Kailasa Temple carved top-down from one rock?",
      "Tell me about Paithani handloom weaving in Yeola",
      "What makes Sahyadri forts like Raigad and Sindhudurg special?",
    ],
    featuredGuide: {
      title: "Ellora Caves (Kailasa Cave 16) · वेरूळ कैलास लेणी",
      recordedHistoryAndFacts:
        "Excavated top-down out of a single monolithic basalt cliff during the 8th century CE under Rashtrakuta King Krishna I, Cave 16 (Kailasa Temple) required removing an estimated 200,000+ tonnes of volcanic rock. Across the 2-kilometre Ellora scarp, 34 Buddhist, Hindu, and Jain cave monasteries carved between the 6th and 10th centuries CE stand side by side.",
      folkloreAndLocalTradition:
        "Marathi folk stories narrate that a Rashtrakuta queen vowed to fast until she beheld the shikhara of a Shiva temple, prompting master sculptor Kokasa to carve the pinnacle downward first so she could break her fast within a week.",
      accessibilityNotes:
        "Ellora has paved walkways and ramps into Cave 16's lower courtyard and battery shuttle vans from the parking plaza. Ajanta requires an uphill climb unless using the accessible lower viewpoint.",
      practicalTips:
        "Ellora is closed on Tuesdays; Ajanta is closed on Mondays. Start at 8:00 AM before midday basalt heat.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Kailasa Monolithic Courtyard (Cave 16)",
        walkTime: "Start · 35 min",
        summary: "Walk around life-size stone elephants supporting the towering monolithic shrine.",
        audioStory: "Remember—nothing here was stacked brick by brick; everything was chiseled out of one solid basalt cliff.",
        accessibilityNote: "Level courtyard entry; battery shuttle from entrance.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Ellora Buddhist, Hindu & Jain Caves",
        walkTime: "Morning · 3 hrs",
        summary: "Journey from Vishvakarma Chaitya (Cave 10) to Kailasa (Cave 16) and Indra Sabha (Cave 32).",
        audioStory: "Witness four centuries of shared artisanal guilds across three Indian traditions.",
        accessibilityNote: "Paved pathways connecting Caves 1–16; shuttle bus to Cave 30–34.",
      },
    ],
    localHighlights: [
      {
        title: "Paithani Silk Sarees & Kolhapuri Chappals",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Maharashtra Crafts",
        description:
          "Tapestry-woven silk sarees with oblique square borders and peacock pallus, alongside hand-stitched vegetable-tanned Kolhapuri leather footwear.",
        whereToFind: "Yeola & Paithan weaver clusters; Kolhapur Chappal Line.",
      },
      {
        title: "Puran Poli, Misal & Solkadhi",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Marathi & Konkan Flavours",
        description:
          "Sweet lentil-jaggery stuffed flatbreads, spiced coastal kokum-coconut Solkadhi, and crisp Thalipeeth.",
        whereToFind: "Traditional Maharashtrian thali homes in Pune, Nashik, and Chhatrapati Sambhajinagar.",
      },
    ],
    nearestHospital: {
      name: "Government Medical College (GHATI), Chhatrapati Sambhajinagar",
      area: "Panchakki Road",
      phone: "108",
      note: "24x7 statewide emergency via 108 / 112.",
    },
    facilities: [
      {
        name: "Ellora Visitor Centre & Accessible Toilets",
        type: "Public Toilets",
        landmark: "Ticket & Shuttle Plaza",
        hours: "6:00 AM – 6:00 PM",
        accessibility: "Wheelchair ramps",
      },
    ],
  },
  {
    id: "state-assam",
    name: "Assam",
    displayName: "Assam",
    state: "Assam",
    group: "state_ut",
    regionCategory: "State Heritage Trail",
    tagline: "Ahom monuments at Sivasagar, Majuli river-island Satras, and golden Muga silk",
    overview:
      "Along the mighty Brahmaputra Valley, Assam preserves Ahom-era brick palaces and stone bridges in Sivasagar, Neo-Vaishnavite Satra monasteries in Majuli, and Sualkuchi's golden Muga silk looms.",
    heroImage: IMG_CRAFTS_ODOP,
    samplePrompts: [
      "Tell me about Rang Ghar and Talatal Ghar in Sivasagar",
      "What are the Satras and mask-making crafts of Majuli?",
      "Explain Assam's golden Muga silk in Sualkuchi",
    ],
    featuredGuide: {
      title: "Rang Ghar & Majuli Satras · ৰংঘৰ আৰু মাজুলী সত্ৰ",
      recordedHistoryAndFacts:
        "Built in 1746 CE under Ahom King Pramatta Singha using thin baked bricks bonded with traditional 'karal' mortar (rice paste, duck eggs, black gram, and lime), Rang Ghar in Sivasagar is one of Asia's oldest surviving royal amphitheatres. Upstream on Majuli—one of the world's largest inhabited river islands—Neo-Vaishnavite Satras founded by saint-reformer Srimanta Sankardev (15th–16th century) preserve Bhaona theatre, manuscripts, and traditional bamboo masks.",
      folkloreAndLocalTradition:
        "Assamese Bihu songs and Xattriya classical dances express the seasonal rhythm of the Brahmaputra's monsoon swells and golden paddy harvests, welcoming guests with a handwoven white-and-red Gamosa.",
      accessibilityNotes:
        "Rang Ghar and Sivasagar's Joysagar tank sit on flat grassy lawns with easy roadside vehicle parking. Majuli ferry terminals require short ramp walks; check Brahmaputra ferry timings before departure.",
      practicalTips:
        "Combine Guwahati's Kamakhya & Sualkuchi silk village with an overnight trip to Sivasagar and Majuli.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Rang Ghar Lawn & Pavilion",
        walkTime: "Start · 25 min",
        summary: "Walk around the inverted-boat-roofed 1746 CE Ahom royal pavilion.",
        audioStory: "Spot the carved pair of crocodiles adorning the curved roof ridge.",
        accessibilityNote: "Flat manicured lawn.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Majuli Samaguri Satra Mask Workshop",
        walkTime: "Morning · 90 min",
        summary: "Watch monks and families craft expressive Bhaona theatre masks from split bamboo and river clay.",
        audioStory: "Masks painted with natural hengul and haital pigments bring epic characters alive on Satra stages.",
        accessibilityNote: "Level bamboo courtyard.",
      },
    ],
    localHighlights: [
      {
        title: "Muga Golden Silk, Gamosa & Majuli Masks",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Assam Craft Heritage",
        description:
          "Naturally shimmering golden Muga silk exclusive to the Brahmaputra valley, woven in Sualkuchi, plus handwoven red-bordered Gamosa.",
        whereToFind: "Sualkuchi Silk Village (35 km from Guwahati) & Samaguri Satra.",
      },
      {
        title: "Joha Rice, Khar, Masor Tenga & Pitha",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "Assamese Kitchen Tradition",
        description:
          "Fragrant short-grain Joha rice, gentle alkaline Khar starter, tangy elephant-apple stew, and sesame-jaggery Til Pitha.",
        whereToFind: "Khorikaa / Michinga in Guwahati & Majuli Satra homestays.",
      },
    ],
    nearestHospital: {
      name: "Gauhati Medical College / Sivasagar Civil Hospital",
      area: "Statewide 108 Mrityunjoy",
      phone: "108",
      note: "24x7 emergency ambulance across Assam.",
    },
    facilities: [
      {
        name: "Sivasagar ASI Park Restrooms",
        type: "Public Toilets",
        landmark: "Near Rang Ghar Gate",
        hours: "6:00 AM – 6:00 PM",
        accessibility: "Ground floor",
      },
    ],
  },
  {
    id: "ut-ladakh",
    name: "Ladakh",
    displayName: "Ladakh",
    state: "Ladakh",
    group: "state_ut",
    regionCategory: "Union Territory · Trans-Himalayan Heritage",
    tagline: "11th-century Alchi murals, Leh Palace, and GI-tagged Changthangi Pashmina",
    overview:
      "A high-altitude cold desert along the Indus and Zanskar rivers, Ladakh preserves thousand-year-old Himalayan Buddhist murals at Alchi and Lamayuru, mud-brick Leh old town, and nomadic Pashmina heritage.",
    heroImage: IMG_ORCHHA_CHHATRIS,
    samplePrompts: [
      "What makes Alchi Monastery's 11th-century murals unique?",
      "Tell me about Leh Old Town's historic mud-brick restoration",
      "Explain Ladakh's GI-tagged Changthangi Pashmina wool",
    ],
    featuredGuide: {
      title: "Alchi Choskor & Leh Palace · अलची व लेह पैलेस",
      recordedHistoryAndFacts:
        "Located along the Indus River 65 km west of Leh, Alchi Monastery (11th–12th century CE) preserves some of the oldest surviving Indo-Tibetan wall paintings and Kashmiri-style carved deodar woodwork in the Himalayas—notably inside the Dukhang and Sumtseg shrines. Above Leh rises the nine-storey 17th-century Leh Palace built by King Sengge Namgyal in stone and sun-dried mud brick.",
      folkloreAndLocalTradition:
        "During winter and summer Cham mask dances at Hemis and Thiksey monasteries, monks enact triumph over negative forces with long copper dungchen horns echoing across the barren peaks.",
      accessibilityNotes:
        "First-time arrivals by air (3,500 m) MUST rest and acclimatize for 24–48 hours before climbing steep monastery stairs like Leh Palace or Thiksey.",
      practicalTips:
        "Use a small reusable bottle to refill at Leh's Dzomsa filtered glacier-water stations instead of single-use plastic.",
    },
    expressWalk: [
      {
        stopNumber: 1,
        name: "Leh Main Bazaar & Old Town Mud Lanes",
        walkTime: "Start · 25 min",
        summary: "Gentle, flat walk through restored mud-and-timber ladakhi houses below Leh Palace.",
        audioStory: "Observe how flat willow-twig roofs and thick rammed-earth walls insulate Ladakhi homes naturally.",
        accessibilityNote: "Level bazaar plaza; ideal on Day 2 of acclimatization.",
      },
    ],
    halfDayWalk: [
      {
        stopNumber: 1,
        name: "Alchi Monastery Complex (Lower Altitude)",
        walkTime: "Morning · 90 min",
        summary: "Explore flat riverside shrines preserving 11th-century Kashmiri-style paintings.",
        audioStory: "At slightly lower altitude than Leh, Alchi's flat village lane makes gentle walking very comfortable.",
        accessibilityNote: "Flat pathway into main courtyard; dim interiors (no flash photography).",
      },
    ],
    localHighlights: [
      {
        title: "Changthangi Pashmina & Thangka Scroll Art",
        category: "Crafts & ODOP",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "GI Certified · Ladakh Heritage Craft",
        description:
          "Ultra-fine hand-combed wool from Changpa nomadic herds above 4,000 m, spun and woven by Ladakhi women collectives.",
        whereToFind: "Looms of Ladakh (Leh) & LAMO Heritage Centre.",
      },
      {
        title: "Thukpa, Skyu, Apricot Jam & Sea-Buckthorn Juice",
        category: "Local Food",
        companionFit: ["Solo", "Family with Kids", "Elderly Parents"],
        originLabel: "High-Altitude Nutrition",
        description:
          "Warm hand-pulled noodle soups, barley tsampa, vitamin-rich golden sea-buckthorn berry tea, and sun-dried Ladakhi apricots (Chuli).",
        whereToFind: "Tibetan Kitchen / Alchi Kitchen (Leh & Alchi).",
      },
    ],
    nearestHospital: {
      name: "Sonam Norboo Memorial (SNM) Hospital, Leh",
      area: "Skara Road, Leh",
      phone: "01982-252014",
      note: "24x7 High-Altitude Pulmonary/Oxygen Care & Emergency (102 / 112).",
    },
    facilities: [
      {
        name: "Leh Main Bazaar Dzomsa Water & Toilets",
        type: "Drinking Water",
        landmark: "Near Jama Masjid / Main Bazaar",
        hours: "7:00 AM – 9:00 PM",
        accessibility: "Step-free street level",
      },
    ],
  },
];

export function findCuratedPlace(query: string): PlaceDossier | undefined {
  const normalized = query.trim().toLowerCase();
  return CURATED_PLACES.find(
    (p) =>
      p.id.toLowerCase() === normalized ||
      p.name.toLowerCase() === normalized ||
      p.displayName.toLowerCase() === normalized
  );
}
