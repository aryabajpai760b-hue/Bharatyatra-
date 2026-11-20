import { StateDirectoryItem } from "../types";

export const INDIA_STATES_AND_UTS_DIRECTORY: StateDirectoryItem[] = [
  {
    state: "Uttar Pradesh",
    type: "State",
    region: "North",
    places: [
      { name: "Mathura", kind: "Major City", curatedId: "mathura-up", highlight: "Yamuna Ghats, Kushan Museum & Braj Peda" },
      { name: "Varanasi", kind: "Major City", curatedId: "varanasi-up", highlight: "Ganga Crescent Ghats, Sarnath & Banarasi Silk" },
      { name: "Ayodhya", kind: "Major City", curatedId: "ayodhya-up", highlight: "Sarayu Ghats, Ram Janmabhoomi & Treta Heritage" },
      { name: "Lucknow", kind: "Major City", curatedId: "lucknow-up", highlight: "Bara Imambara, Rumi Darwaza & Chikankari" },
      { name: "Chunar", kind: "Small Town / Qasba", curatedId: "chunar-up", highlight: "Chunar Hill Fort & Glazed Clay Pottery" },
      { name: "Bateshwar", kind: "Small Town / Qasba", highlight: "101 Yamuna Riverfront Shiva Shrines" },
    ],
  },
  {
    state: "Rajasthan",
    type: "State",
    region: "West",
    places: [
      { name: "Jaipur", kind: "Major City", curatedId: "jaipur-rj", highlight: "Vastu Pink City, Jantar Mantar & Blue Pottery" },
      { name: "Bundi", kind: "Small Town / Qasba", curatedId: "bundi-rj", highlight: "50+ Stepwells (Baolis) & Garh Palace Murals" },
      { name: "Kumbhalgarh", kind: "Small Town / Qasba", highlight: "36-km Aravalli Fort Wall & Badal Mahal" },
      { name: "Mandawa", kind: "Small Town / Qasba", highlight: "Shekhawati Painted Merchant Havelis" },
      { name: "Udaipur", kind: "Major City", highlight: "Lake Pichola, City Palace & Mewar Miniatures" },
    ],
  },
  {
    state: "Madhya Pradesh",
    type: "State",
    region: "Central",
    places: [
      { name: "Orchha", kind: "Small Town / Qasba", curatedId: "orchha-mp", highlight: "Betwa River Chhatris & Jahangir Mahal" },
      { name: "Mandu", kind: "Small Town / Qasba", curatedId: "mandu-mp", highlight: "Jahaz Mahal Waterworks & Afghan Sandstone" },
      { name: "Chanderi", kind: "Small Town / Qasba", curatedId: "chanderi-mp", highlight: "Chanderi Silk Looms & Battisi Baoli" },
      { name: "Khajuraho", kind: "Small Town / Qasba", highlight: "10th-Century Chandela Sandstone Temples" },
      { name: "Ujjain", kind: "Major City", highlight: "Shipra Ghats, Mahakaleshwar & Vedh Shala" },
    ],
  },
  {
    state: "Karnataka",
    type: "State",
    region: "South",
    places: [
      { name: "Hampi", kind: "Small Town / Qasba", curatedId: "hampi-ka", highlight: "Vijayanagara Stone Chariot & Tungabhadra Bazaars" },
      { name: "Pattadakal", kind: "Small Town / Qasba", curatedId: "pattadakal-ka", highlight: "UNESCO Chalukyan Nagara-Dravida Shrines" },
      { name: "Badami", kind: "Small Town / Qasba", highlight: "6th-Century Red Sandstone Rock-Cut Caves" },
      { name: "Mysuru", kind: "Major City", curatedId: "mysuru-ka", highlight: "Amba Vilas Palace, Silk & Rosewood Inlay" },
    ],
  },
  {
    state: "Tamil Nadu",
    type: "State",
    region: "South",
    places: [
      { name: "Madurai", kind: "Major City", curatedId: "madurai-tn", highlight: "Meenakshi Gopurams, Pudu Mandapam & Sungudi" },
      { name: "Thanjavur", kind: "Major City", curatedId: "thanjavur-tn", highlight: "1010 CE Chola Brihadisvara & Saraswathi Mahal" },
      { name: "Chettinad (Karaikudi)", kind: "Small Town / Qasba", highlight: "Teak Heritage Mansions & Athangudi Tiles" },
      { name: "Mamallapuram", kind: "Small Town / Qasba", highlight: "Pallava Shore Temple & Monolithic Rathas" },
    ],
  },
  {
    state: "West Bengal",
    type: "State",
    region: "East",
    places: [
      { name: "Bishnupur", kind: "Small Town / Qasba", curatedId: "bishnupur-wb", highlight: "17th-Century Terracotta Temples & Baluchari Silk" },
      { name: "Murshidabad", kind: "Small Town / Qasba", highlight: "Hazarduari Palace, Katra Mosque & Silk" },
      { name: "Santiniketan", kind: "Small Town / Qasba", highlight: "Tagore Heritage Campus & Khoai Craft Haat" },
      { name: "Kolkata", kind: "Major City", highlight: "Kumartuli Clay Artisans, College St & Riverfront" },
    ],
  },
  {
    state: "Odisha",
    type: "State",
    region: "East",
    places: [
      { name: "Puri", kind: "Major City", curatedId: "puri-od", highlight: "12th-Century Jagannath Kalinga Temple & Bada Danda" },
      { name: "Konark & Raghurajpur", kind: "Small Town / Qasba", curatedId: "konark-od", highlight: "13th-Century Sun Chariot & Pattachitra Village" },
      { name: "Bhubaneswar", kind: "Major City", highlight: "Lingaraja Temple, Udayagiri Caves & Handloom" },
    ],
  },
  {
    state: "Gujarat",
    type: "State",
    region: "West",
    places: [
      { name: "Patan", kind: "Small Town / Qasba", curatedId: "patan-gj", highlight: "UNESCO Rani ki Vav Stepwell & Double-Ikat Patola" },
      { name: "Ahmedabad", kind: "Major City", highlight: "Pol Heritage Lanes, Adalaj Stepwell & Sabarmati" },
      { name: "Bhuj (Kutch)", kind: "Small Town / Qasba", highlight: "Aina Mahal, Bhujodi Weaving & Roghan Art" },
      { name: "Champaner-Pavagadh", kind: "Small Town / Qasba", highlight: "16th-Century Sultanate Hill-Fort City" },
    ],
  },
  {
    state: "Maharashtra",
    type: "State",
    region: "West",
    places: [
      { name: "Chhatrapati Sambhajinagar", kind: "Major City", curatedId: "state-maharashtra", highlight: "Ellora & Ajanta Rock-Cut Caves, Himroo Weave" },
      { name: "Pune", kind: "Major City", curatedId: "pune-mh", highlight: "Shaniwar Wada, Sinhagad & Peshwa Heritage" },
      { name: "Yeola", kind: "Small Town / Qasba", highlight: "GI-Tagged Handwoven Paithani Silk Looms" },
      { name: "Sindhudurg & Malvan", kind: "Small Town / Qasba", highlight: "17th-Century Maratha Sea Fort & Konkan Cuisine" },
    ],
  },
  {
    state: "Kerala",
    type: "State",
    region: "South",
    places: [
      { name: "Fort Kochi & Muziris", kind: "Major City", curatedId: "state-kerala", highlight: "Maritime Spice Warehouses, Pattanam & Murals" },
      { name: "Aranmula", kind: "Small Town / Qasba", highlight: "Handmade Metal Mirrors (Kannadi) & Snake Boats" },
      { name: "Thiruvananthapuram", kind: "Major City", highlight: "Padmanabhaswamy Gopuram & Kuthira Malika" },
    ],
  },
  {
    state: "Bihar",
    type: "State",
    region: "East",
    places: [
      { name: "Nalanda & Rajgir", kind: "Small Town / Qasba", curatedId: "nalanda-br", highlight: "5th-Century Mahavihara Ruins & Magadha Hills" },
      { name: "Bodh Gaya", kind: "Small Town / Qasba", highlight: "Mahabodhi Temple Complex & Sujata Stupa" },
      { name: "Patna", kind: "Major City", highlight: "Pataliputra Kumhrar Pillars & Takht Sri Patna Sahib" },
      { name: "Madhubani", kind: "Small Town / Qasba", highlight: "Mithila Wall & Canvas Folk Painting" },
    ],
  },
  {
    state: "Himachal Pradesh",
    type: "State",
    region: "North",
    places: [
      { name: "Kalpa", kind: "Small Town / Qasba", curatedId: "kalpa-hp", highlight: "Kath-Kuni Cedar Temples & Kinner Kailash" },
      { name: "Pragpur", kind: "Small Town / Qasba", highlight: "India's First Notified Heritage Village" },
      { name: "Chamba", kind: "Small Town / Qasba", highlight: "Lakshmi Narayan Shrines & Chamba Rumal" },
      { name: "Shimla", kind: "Major City", highlight: "Viceregal Lodge, Mall Heritage & Kalka-Shimla Rail" },
    ],
  },
  {
    state: "Assam",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Sivasagar & Majuli", kind: "Small Town / Qasba", curatedId: "state-assam", highlight: "Ahom Rang Ghar & Satra Mask Monasteries" },
      { name: "Sualkuchi", kind: "Small Town / Qasba", highlight: "Golden Muga & Eri Silk Weaving Village" },
      { name: "Guwahati", kind: "Major City", highlight: "Kamakhya Hill Shrine & Brahmaputra Heritage" },
    ],
  },
  {
    state: "Arunachal Pradesh",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Ziro", kind: "Small Town / Qasba", curatedId: "ziro-ar", highlight: "Apatani Rice-Fish Terraces & Bamboo Heritage" },
      { name: "Tawang", kind: "Small Town / Qasba", highlight: "17th-Century Galden Namgey Lhatse Monastery" },
      { name: "Itanagar", kind: "Major City", highlight: "14th-Century Ita Brick Fort & Ganga Lake" },
    ],
  },
  {
    state: "Ladakh",
    type: "Union Territory",
    region: "Islands & Himalayas",
    places: [
      { name: "Leh & Alchi", kind: "Small Town / Qasba", curatedId: "ut-ladakh", highlight: "11th-Century Alchi Murals & Mud-Brick Old Town" },
      { name: "Lamayuru", kind: "Small Town / Qasba", highlight: "Moonland Gorge & Ancient Drikung Monastery" },
    ],
  },
  {
    state: "Jammu & Kashmir",
    type: "Union Territory",
    region: "Islands & Himalayas",
    places: [
      { name: "Srinagar", kind: "Major City", highlight: "Shankaracharya Hill, Jamia Mosque & Pashmina Craft" },
      { name: "Martand & Avantipora", kind: "Small Town / Qasba", highlight: "8th–9th Century Karkota-Utpala Stone Temples" },
      { name: "Jammu", kind: "Major City", highlight: "Mubarak Mandi Palace & Basohli Miniature Art" },
    ],
  },
  {
    state: "Andhra Pradesh",
    type: "State",
    region: "South",
    places: [
      { name: "Lepakshi", kind: "Small Town / Qasba", highlight: "16th-Century Vijayanagara Hanging Pillar & Murals" },
      { name: "Tirupati", kind: "Major City", highlight: "Tirumala Hills, Chandragiri Fort & Kalamkari" },
      { name: "Kondapalli", kind: "Small Town / Qasba", highlight: "Tella Poniki Wooden Toys & Hill Fort" },
    ],
  },
  {
    state: "Telangana",
    type: "State",
    region: "South",
    places: [
      { name: "Hyderabad", kind: "Major City", highlight: "Charminar, Golconda Fort & Laad Bazaar" },
      { name: "Warangal & Ramappa", kind: "Small Town / Qasba", highlight: "UNESCO Kakatiya Floating-Brick Temple" },
      { name: "Pochampally", kind: "Small Town / Qasba", highlight: "Bhoodan Heritage & Ikat Handloom Village" },
    ],
  },
  {
    state: "Punjab",
    type: "State",
    region: "North",
    places: [
      { name: "Amritsar", kind: "Major City", highlight: "Harmandir Sahib, Partition Museum & Phulkari" },
      { name: "Patiala", kind: "Major City", highlight: "Qila Mubarak, Sheesh Mahal & Patiala Jutti" },
      { name: "Sultanpur Lodhi", kind: "Small Town / Qasba", highlight: "Historic Sikh Heritage Town & Kali Bein" },
    ],
  },
  {
    state: "Uttarakhand",
    type: "State",
    region: "North",
    places: [
      { name: "Almora & Jageshwar", kind: "Small Town / Qasba", highlight: "8th–12th Century Stone Shikhara Cluster & Copper Craft" },
      { name: "Haridwar & Rishikesh", kind: "Major City", highlight: "Har Ki Pauri Ganga Aarti & Ashram Heritage" },
      { name: "Champawat", kind: "Small Town / Qasba", highlight: "Baleshwar Carved Stone Temple & Chand Heritage" },
    ],
  },
  {
    state: "Haryana",
    type: "State",
    region: "North",
    places: [
      { name: "Kurukshetra", kind: "Major City", highlight: "Brahma Sarovar, Sheikh Chilli Tomb & Jyotisar" },
      { name: "Rakhigarhi", kind: "Small Town / Qasba", highlight: "Largest Indus-Sarasvati Harappan Site in India" },
      { name: "Pinjore", kind: "Small Town / Qasba", highlight: "17th-Century Terraced Mughal Gardens & Bhima Devi" },
    ],
  },
  {
    state: "Goa",
    type: "State",
    region: "West",
    places: [
      { name: "Old Goa & Panaji", kind: "Major City", highlight: "Basilica of Bom Jesus, Fontainhas & Azulejos" },
      { name: "Tambdi Surla", kind: "Small Town / Qasba", highlight: "12th-Century Kadamba Basalt Forest Temple" },
    ],
  },
  {
    state: "Chhattisgarh",
    type: "State",
    region: "Central",
    places: [
      { name: "Sirpur", kind: "Small Town / Qasba", highlight: "7th-Century Lakshmana Brick Temple & Viharas" },
      { name: "Bastar (Kondagaon)", kind: "Small Town / Qasba", highlight: "Bell-Metal Dhokra & Wrought-Iron Craft Guilds" },
      { name: "Raipur", kind: "Major City", highlight: "Mahant Ghasidas Museum & Chhattisgarhi Cuisine" },
    ],
  },
  {
    state: "Jharkhand",
    type: "State",
    region: "East",
    places: [
      { name: "Maluti", kind: "Small Town / Qasba", highlight: "72 Surviving Terracotta Miniature Temples" },
      { name: "Deoghar", kind: "Major City", highlight: "Baidyanath Dham & Trikut Hills" },
      { name: "Ranchi", kind: "Major City", highlight: "Tribal Heritage Museum & Hundru Falls" },
    ],
  },
  {
    state: "Sikkim",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Yuksom", kind: "Small Town / Qasba", highlight: "1642 CE First Capital & Dubdi Monastery" },
      { name: "Gangtok", kind: "Major City", highlight: "Rumtek Monastery, Namgyal Institute & Temi Tea" },
    ],
  },
  {
    state: "Meghalaya",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Cherrapunji (Sohra) & Nongriat", kind: "Small Town / Qasba", highlight: "Khasi Living Root Bridges & Limestone Caves" },
      { name: "Shillong", kind: "Major City", highlight: "Don Bosco Indigenous Museum & Police Bazar" },
    ],
  },
  {
    state: "Nagaland",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Khonoma", kind: "Small Town / Qasba", highlight: "Angami Green Heritage Village & Stone Morungs" },
      { name: "Kohima", kind: "Major City", highlight: "Kisama Heritage Village & War Memorial" },
    ],
  },
  {
    state: "Manipur",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Imphal", kind: "Major City", highlight: "Kangla Fort, Ima Keithel Women's Market & Loktak" },
      { name: "Moirang", kind: "Small Town / Qasba", highlight: "INA Heritage Museum & Floating Phumdi Villages" },
    ],
  },
  {
    state: "Mizoram",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Aizawl", kind: "Major City", highlight: "State Museum, Falkawn Village & Puan Weaves" },
      { name: "Champhai & Vangchhia", kind: "Small Town / Qasba", highlight: "Mizo Menhirs & Ancient Terraced Stone Carvings" },
    ],
  },
  {
    state: "Tripura",
    type: "State",
    region: "Northeast",
    places: [
      { name: "Unakoti", kind: "Small Town / Qasba", highlight: "Monumental 7th–9th Century Rock-Cut Bas-Reliefs" },
      { name: "Agartala & Udaipur", kind: "Major City", highlight: "Ujjayanta Palace, Neermahal Water Palace & Tripura Sundari" },
    ],
  },
  {
    state: "Delhi (NCT)",
    type: "Union Territory",
    region: "North",
    places: [
      { name: "Mehrauli & Shahjahanabad", kind: "Major City", highlight: "Qutb Complex, Agrasen ki Baoli & Chandni Chowk" },
      { name: "Nizamuddin Basti", kind: "Small Town / Qasba", highlight: "14th-Century Sufi Dargah, Humayun Tomb & Qawwali" },
    ],
  },
  {
    state: "Puducherry",
    type: "Union Territory",
    region: "South",
    places: [
      { name: "White Town & Arikamedu", kind: "Major City", highlight: "Indo-French Promenade & 1st-Century Roman Port" },
      { name: "Karaikal", kind: "Small Town / Qasba", highlight: "Coastal Temple Heritage & Ammaiyar Festival" },
    ],
  },
  {
    state: "Chandigarh",
    type: "Union Territory",
    region: "North",
    places: [
      { name: "Capitol Complex & Rock Garden", kind: "Major City", highlight: "UNESCO Modernist Architecture & Nek Chand Folk Art" },
    ],
  },
  {
    state: "Andaman & Nicobar Islands",
    type: "Union Territory",
    region: "Islands & Himalayas",
    places: [
      { name: "Sri Vijaya Puram (Port Blair)", kind: "Major City", highlight: "Cellular Jail National Memorial & Chatham Saw Mill" },
      { name: "Netaji Subhas Chandra Bose Island", kind: "Small Town / Qasba", highlight: "19th-Century Island Ruins & Coastal Walk" },
    ],
  },
  {
    state: "Dadra & Nagar Haveli and Daman & Diu",
    type: "Union Territory",
    region: "West",
    places: [
      { name: "Diu", kind: "Small Town / Qasba", highlight: "1535 CE Sea Fort, Naida Caves & Gujarati Coastal Food" },
      { name: "Daman & Silvassa", kind: "Major City", highlight: "Moti Daman Fort & Warli Tribal Art Museum" },
    ],
  },
  {
    state: "Lakshadweep",
    type: "Union Territory",
    region: "Islands & Himalayas",
    places: [
      { name: "Kavaratti & Minicoy", kind: "Small Town / Qasba", highlight: "Ujra Coral-Stone Mosque, Lighthouse & Tuna Cuisine" },
    ],
  },
];
