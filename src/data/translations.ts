import { IndianLanguage } from "../types";

export interface UIStrings {
  tabAsk: string;
  tabWalks: string;
  tabLocal: string;
  tabFacilities: string;
  tabInsights: string;
  largeText: string;
  offlinePack: string;
  offlineSaved: string;
  askPlaceholder: string;
  askButton: string;
  cameraButton: string;
  voiceButton: string;
  recordedHistory: string;
  folkloreTradition: string;
  accessibilityTitle: string;
  practicalTips: string;
  readAloud: string;
  stopAudio: string;
  expressWalk: string;
  halfDayWalk: string;
  playStory: string;
  emergencyBanner: string;
  unifiedHelpline: string;
  womenTouristHelpline: string;
  nearestHospitalLabel: string;
  insightsTitle: string;
  insightsSubtitle: string;
  placeSelectorTitle: string;
  searchPlacePlaceholder: string;
}

export const LANGUAGE_SPEECH_CODES: Record<IndianLanguage, string> = {
  "English | हिंदी": "en-IN",
  English: "en-IN",
  "हिंदी": "hi-IN",
  "मराठी": "mr-IN",
  "தமிழ்": "ta-IN",
  "తెలుగు": "te-IN",
  "বাংলা": "bn-IN",
  "ગુજરાતી": "gu-IN",
  "ಕನ್ನಡ": "kn-IN",
  "മലയാളം": "ml-IN",
  "ଓଡ଼ିଆ": "or-IN",
  "ਪੰਜਾਬੀ": "pa-IN",
  "অসমীয়া": "as-IN",
};

export const ALL_LANGUAGES: { value: IndianLanguage; label: string; native: string }[] = [
  { value: "English | हिंदी", label: "Bilingual", native: "English | हिंदी" },
  { value: "English", label: "English", native: "English" },
  { value: "हिंदी", label: "Hindi", native: "हिंदी" },
  { value: "मराठी", label: "Marathi", native: "मराठी" },
  { value: "தமிழ்", label: "Tamil", native: "தமிழ்" },
  { value: "తెలుగు", label: "Telugu", native: "తెలుగు" },
  { value: "বাংলা", label: "Bengali", native: "বাংলা" },
  { value: "ગુજરાતી", label: "Gujarati", native: "ગુજરાતી" },
  { value: "ಕನ್ನಡ", label: "Kannada", native: "ಕನ್ನಡ" },
  { value: "മലയാളം", label: "Malayalam", native: "മലയാളം" },
  { value: "ଓଡ଼ିଆ", label: "Odia", native: "ଓଡ଼ିଆ" },
  { value: "ਪੰਜਾਬੀ", label: "Punjabi", native: "ਪੰਜਾਬੀ" },
  { value: "অসমীয়া", label: "Assamese", native: "অসমীয়া" },
];

const EN_STRINGS: UIStrings = {
  tabAsk: "Ask & Scan",
  tabWalks: "Walks",
  tabLocal: "Food & ODOP",
  tabFacilities: "Help & Facilities",
  tabInsights: "Insights",
  largeText: "Large Text",
  offlinePack: "Offline Pack",
  offlineSaved: "Saved Offline",
  askPlaceholder: "Ask about any temple, ghat, fort, stepwell, carving, or local custom...",
  askButton: "Ask Guide",
  cameraButton: "Scan Photo",
  voiceButton: "Speak",
  recordedHistory: "Recorded History & Facts",
  folkloreTradition: "Folklore & Local Tradition",
  accessibilityTitle: "Accessibility & Rest Notes",
  practicalTips: "Visitor Etiquette & Tips",
  readAloud: "Read Aloud",
  stopAudio: "Stop Audio",
  expressWalk: "1-Hour Express Walk",
  halfDayWalk: "Half-Day Heritage Trail",
  playStory: "Play Audio Story",
  emergencyBanner: "ONE-TAP EMERGENCY HELP",
  unifiedHelpline: "India Unified Emergency",
  womenTouristHelpline: "Women & Tourist Helpline",
  nearestHospitalLabel: "Nearest Medical Care",
  insightsTitle: "Pan-India Tourism & Heritage Insights",
  insightsSubtitle: "Anonymized visitor trends, small-town discovery, and signage gap intelligence across Indian states.",
  placeSelectorTitle: "Choose Destination Across India",
  searchPlacePlaceholder: "Type any Indian state, city, town, qasba, or site...",
};

const BILINGUAL_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "Ask · पूछें",
  tabWalks: "Walks · सैर",
  tabLocal: "Food & ODOP",
  tabFacilities: "Help · सुविधाएं",
  tabInsights: "Insights",
  recordedHistory: "Recorded History & Facts · प्रमाणित इतिहास",
  folkloreTradition: "Folklore & Local Tradition · लोककथा एवं परंपरा",
  accessibilityTitle: "Accessibility & Rest Notes · सुगम्यता",
  readAloud: "Read Aloud · सुनें",
  emergencyBanner: "ONE-TAP EMERGENCY HELP · आपातकालीन सहायता",
};

const HI_STRINGS: UIStrings = {
  tabAsk: "पूछें व स्कैन",
  tabWalks: "पैदल यात्रा",
  tabLocal: "भोजन व शिल्प",
  tabFacilities: "मदद व सुविधा",
  tabInsights: "पर्यटन डेटा",
  largeText: "बड़ा फ़ॉन्ट",
  offlinePack: "ऑफ़लाइन पैक",
  offlineSaved: "ऑफ़लाइन सेव",
  askPlaceholder: "किसी भी मंदिर, घाट, किले, बावड़ी या शिलालेख के बारे में पूछें...",
  askButton: "गाइड से पूछें",
  cameraButton: "फ़ोटो स्कैन",
  voiceButton: "बोलें",
  recordedHistory: "प्रमाणित इतिहास एवं तथ्य",
  folkloreTradition: "लोककथा एवं स्थानीय परंपरा",
  accessibilityTitle: "सुगम्यता व विश्राम जानकारी",
  practicalTips: "दर्शन व यात्रा सुझाव",
  readAloud: "सुनें (ऑडियो)",
  stopAudio: "रोकें",
  expressWalk: "1-घंटे की त्वरित सैर",
  halfDayWalk: "आधे दिन की विरासत यात्रा",
  playStory: "कहानी सुनें",
  emergencyBanner: "वन-टैप आपातकालीन सहायता",
  unifiedHelpline: "अखिल भारतीय आपातकालीन",
  womenTouristHelpline: "महिला एवं पर्यटक हेल्पलाइन",
  nearestHospitalLabel: "नज़दीकी अस्पताल",
  insightsTitle: "अखिल भारतीय पर्यटन अंतर्दृष्टि",
  insightsSubtitle: "विभिन्न राज्यों में यात्रियों के प्रश्न, भाषाएं और संकेतक सुधार डेटा।",
  placeSelectorTitle: "भारत का कोई भी स्थान चुनें",
  searchPlacePlaceholder: "कोई भी राज्य, शहर, कस्बा या स्मारक लिखें...",
};

const MR_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "विचारा व स्कॅन",
  tabWalks: "हेरिटेज फेरी",
  tabLocal: "खाद्य व हस्तकला",
  tabFacilities: "मदत व सुविधा",
  tabInsights: "पर्यटन माहिती",
  largeText: "मोठा मजकूर",
  offlinePack: "ऑफलाइन पॅक",
  offlineSaved: "ऑफलाइन जतन",
  askButton: "गाइडला विचारा",
  recordedHistory: "नोंदवलेला इतिहास आणि तथ्ये",
  folkloreTradition: "लोककथा आणि स्थानिक परंपरा",
  readAloud: "मोठ्याने वाचा",
  emergencyBanner: "तातडीची मदत (ONE-TAP)",
};

const TA_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "கேள் & ஸ்கேன்",
  tabWalks: "நடைப்பயணம்",
  tabLocal: "உணவு & கைவினை",
  tabFacilities: "உதவி & வசதி",
  tabInsights: "தரவு பார்வை",
  largeText: "பெரிய எழுத்து",
  offlinePack: "ஆஃப்லைன்",
  offlineSaved: "சேமிக்கப்பட்டது",
  askButton: "கேட்கவும்",
  recordedHistory: "பதிவுசெய்யப்பட்ட வரலாறு & உண்மைகள்",
  folkloreTradition: "நாட்டுப்புறக் கதைகள் & மரபு",
  readAloud: "ஒலியாகக் கேள்",
  emergencyBanner: "அவசர உதவி (ONE-TAP)",
};

const TE_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "అడగండి & స్కాన్",
  tabWalks: "నడక మార్గాలు",
  tabLocal: "ఆహారం & ODOP",
  tabFacilities: "సహాయం & వసతి",
  tabInsights: "విశ్లేషణ",
  largeText: "పెద్ద అక్షరాలు",
  recordedHistory: "నమోదైన చరిత్ర & వాస్తవాలు",
  folkloreTradition: "జానపద కథలు & సంప్రదాయం",
  readAloud: "వినండి",
  emergencyBanner: "అత్యవసర సహాయం (ONE-TAP)",
};

const BN_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "জিজ্ঞাসা ও স্ক্যান",
  tabWalks: "ভ্রমণ পথ",
  tabLocal: "খাবার ও হস্তশিল্প",
  tabFacilities: "সাহায্য ও সুবিধা",
  tabInsights: "পর্যটন তথ্য",
  largeText: "বড় লেখা",
  recordedHistory: "নথিভুক্ত ইতিহাস ও তথ্য",
  folkloreTradition: "লোককথা ও স্থানীয় ঐতিহ্য",
  readAloud: "শুনুন",
  emergencyBanner: "জরুরি সহায়তা (ONE-TAP)",
};

const GU_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "પૂછો અને સ્કેન",
  tabWalks: "હેરિટેજ વોક",
  tabLocal: "ખોરાક અને હસ્તકલા",
  tabFacilities: "મદદ અને સુવિધા",
  tabInsights: "પ્રવાસન ડેટા",
  largeText: "મોટા અક્ષર",
  recordedHistory: "નોંધાયેલ ઇતિહાસ અને તથ્યો",
  folkloreTradition: "લોકકથા અને સ્થાનિક પરંપરા",
  readAloud: "સાંભળો",
  emergencyBanner: "તાત્કાલિક મદદ (ONE-TAP)",
};

const KN_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "ಕೇಳಿ ಮತ್ತು ಸ್ಕ್ಯಾನ್",
  tabWalks: "ನಡಿಗೆ ಮಾರ್ಗ",
  tabLocal: "ಆಹಾರ ಮತ್ತು ಕಲೆ",
  tabFacilities: "ಸಹಾಯ ಮತ್ತು ಸೌಲಭ್ಯ",
  tabInsights: "ಒಳನೋಟ",
  largeText: "ದೊಡ್ಡ ಅಕ್ಷರ",
  recordedHistory: "ದಾಖಲಿತ ಇತಿಹಾಸ ಮತ್ತು ಸತ್ಯಗಳು",
  folkloreTradition: "ಜಾನಪದ ಕಥೆಗಳು ಮತ್ತು ಸಂಪ್ರದಾಯ",
  readAloud: "ಕೇಳಿ",
  emergencyBanner: "ತುರ್ತು ಸಹಾಯ (ONE-TAP)",
};

const ML_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "ചോദിക്കൂ & സ്കാൻ",
  tabWalks: "നടത്ത വഴികൾ",
  tabLocal: "ഭക്ഷണം & കരകൗശലം",
  tabFacilities: "സഹായം & സൗകര്യം",
  tabInsights: "വിശകലനം",
  largeText: "വലിയ അക്ഷരം",
  recordedHistory: "രേഖപ്പെടുത്തിയ ചരിത്രവും വസ്തുതകളും",
  folkloreTradition: "നാടോടിക്കഥകളും പാരമ്പര്യവും",
  readAloud: "കേൾക്കുക",
  emergencyBanner: "അടിയന്തര സഹായം (ONE-TAP)",
};

const OR_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "ପଚାରନ୍ତୁ ଓ ସ୍କାନ୍",
  tabWalks: "ପଦଯାତ୍ରା ପଥ",
  tabLocal: "ଖାଦ୍ୟ ଓ ହସ୍ତଶିଳ୍ପ",
  tabFacilities: "ସହାୟତା ଓ ସୁବିଧା",
  tabInsights: "ପର୍ଯ୍ୟଟନ ତଥ୍ୟ",
  largeText: "ବଡ଼ ଅକ୍ଷର",
  recordedHistory: "ଲିପିବଦ୍ଧ ଇତିହାସ ଓ ତଥ୍ୟ",
  folkloreTradition: "ଲୋକକଥା ଓ ସ୍ଥାନୀୟ ପରମ୍ପରା",
  readAloud: "ଶୁଣନ୍ତୁ",
  emergencyBanner: "ଜରୁରୀକାଳୀନ ସହାୟତା",
};

const PA_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "ਪੁੱਛੋ ਤੇ ਸਕੈਨ",
  tabWalks: "ਪੈਦਲ ਸੈਰ",
  tabLocal: "ਭੋਜਨ ਤੇ ਸ਼ਿਲਪ",
  tabFacilities: "ਮਦਦ ਤੇ ਸਹੂਲਤਾਂ",
  tabInsights: "ਸੈਰ-ਸਪਾਟਾ ਡੇਟਾ",
  largeText: "ਵੱਡੇ ਅੱਖਰ",
  recordedHistory: "ਦਰਜ ਇਤਿਹਾਸ ਅਤੇ ਤੱਥ",
  folkloreTradition: "ਲੋਕ-ਕਥਾਵਾਂ ਅਤੇ ਪਰੰਪਰਾ",
  readAloud: "ਸੁਣੋ",
  emergencyBanner: "ਐਮਰਜੈਂਸੀ ਮਦਦ (ONE-TAP)",
};

const AS_STRINGS: UIStrings = {
  ...EN_STRINGS,
  tabAsk: "সোধক আৰু স্কেন",
  tabWalks: "খোজকাঢ়ি ভ্ৰমণ",
  tabLocal: "খাদ্য আৰু হস্তশিল্প",
  tabFacilities: "সহায় আৰু সুবিধা",
  tabInsights: "পৰ্যটন তথ্য",
  largeText: "ডাঙਰ আখৰ",
  recordedHistory: "নথিভুক্ত ইতিহাস আৰু তথ্য",
  folkloreTradition: "লোককথা আৰু স্থানীয় পৰম্পৰা",
  readAloud: "শুনক",
  emergencyBanner: "জৰুৰীকালীন সহায়",
};

const DICTIONARY: Record<IndianLanguage, UIStrings> = {
  "English | हिंदी": BILINGUAL_STRINGS,
  English: EN_STRINGS,
  "हिंदी": HI_STRINGS,
  "मराठी": MR_STRINGS,
  "தமிழ்": TA_STRINGS,
  "తెలుగు": TE_STRINGS,
  "বাংলা": BN_STRINGS,
  "ગુજરાતી": GU_STRINGS,
  "ಕನ್ನಡ": KN_STRINGS,
  "മലയാളം": ML_STRINGS,
  "ଓଡ଼ିଆ": OR_STRINGS,
  "ਪੰਜਾਬੀ": PA_STRINGS,
  "অসমীয়া": AS_STRINGS,
};

export function getUIStrings(lang: IndianLanguage): UIStrings {
  return DICTIONARY[lang] || BILINGUAL_STRINGS;
}
