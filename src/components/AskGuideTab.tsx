import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  BookOpen,
  Camera,
  Clock,
  Compass,
  Landmark,
  Loader2,
  Mic,
  MicOff,
  Send,
  ShieldCheck,
  Sparkles,
  Trash2,
} from "lucide-react";
import {
  GuideResponse,
  IndianLanguage,
  PlaceDossier,
  VisitorStyleMode,
} from "../types";
import { LANGUAGE_SPEECH_CODES, UIStrings } from "../data/translations";
import { AudioPlayerButton } from "./AudioPlayerButton";

interface AskGuideTabProps {
  place: PlaceDossier;
  language: IndianLanguage;
  strings: UIStrings;
  styleMode: VisitorStyleMode;
  onChangeStyleMode: (mode: VisitorStyleMode) => void;
  responses: GuideResponse[];
  onAddResponse: (resp: GuideResponse) => void;
  prefilledQuestion: string;
  onClearPrefill: () => void;
  offlineMode: boolean;
}

const STYLE_MODES: VisitorStyleMode[] = [
  "Pilgrim / Devotional",
  "History & Architecture",
  "Kids Story Mode",
  "Quick Summary",
];

interface SpeechRecognitionEventLike {
  results: ArrayLike<ArrayLike<{ transcript: string }>>;
}

interface SpeechRecognitionInstance {
  lang: string;
  interimResults: boolean;
  maxAlternatives: number;
  onresult: ((event: SpeechRecognitionEventLike) => void) | null;
  onerror: (() => void) | null;
  onend: (() => void) | null;
  start: () => void;
  stop: () => void;
}

export function AskGuideTab({
  place,
  language,
  strings,
  styleMode,
  onChangeStyleMode,
  responses,
  onAddResponse,
  prefilledQuestion,
  onClearPrefill,
  offlineMode,
}: AskGuideTabProps) {
  const [question, setQuestion] = useState("");
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [imageMimeType, setImageMimeType] = useState<string | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [heroImgFailed, setHeroImgFailed] = useState(false);

  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

  useEffect(() => {
    setHeroImgFailed(false);
  }, [place.id]);

  useEffect(() => {
    if (prefilledQuestion) {
      setQuestion(prefilledQuestion);
      onClearPrefill();
    }
  }, [prefilledQuestion, onClearPrefill]);

  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const handleImagePick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setErrorMsg(null);

    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      const commaIdx = result.indexOf(",");
      if (commaIdx !== -1) {
        setImagePreviewUrl(result);
        setImageBase64(result.slice(commaIdx + 1));
        setImageMimeType(file.type || "image/jpeg");
      }
    };
    reader.readAsDataURL(file);
  };

  const clearImage = () => {
    setImageBase64(null);
    setImageMimeType(null);
    setImagePreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const toggleVoiceInput = () => {
    setErrorMsg(null);
    if (isListening && recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      return;
    }

    const win = window as unknown as {
      SpeechRecognition?: new () => SpeechRecognitionInstance;
      webkitSpeechRecognition?: new () => SpeechRecognitionInstance;
    };
    const SpeechRec = win.SpeechRecognition || win.webkitSpeechRecognition;

    if (!SpeechRec) {
      setErrorMsg("Voice input is not supported in this browser. Please type your question or upload a photo.");
      return;
    }

    try {
      const recognition = new SpeechRec();
      recognition.lang = LANGUAGE_SPEECH_CODES[language] || "en-IN";
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;
      recognition.onresult = (event) => {
        const transcript = event.results?.[0]?.[0]?.transcript;
        if (transcript) {
          setQuestion((prev) => (prev ? `${prev} ${transcript}` : transcript));
        }
      };
      recognition.onerror = () => {
        setIsListening(false);
        setErrorMsg("Could not capture microphone audio. Please check mic permissions or type your question.");
      };
      recognition.onend = () => {
        setIsListening(false);
      };
      recognitionRef.current = recognition;
      setIsListening(true);
      recognition.start();
    } catch {
      setIsListening(false);
      setErrorMsg("Microphone access unavailable.");
    }
  };

  const submitQuery = async (overrideQuestion?: string) => {
    const finalQuestion = (overrideQuestion ?? question).trim();
    if (!finalQuestion && !imageBase64) {
      setErrorMsg("Please type a question, use voice input, or upload a monument photo.");
      return;
    }

    setErrorMsg(null);
    setIsLoading(true);
    try {
      const res = await fetch("/api/guide/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          place: place.displayName,
          question: finalQuestion,
          styleMode,
          language,
          imageBase64,
          imageMimeType,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Unable to fetch guide response.");
      }

      const newEntry: GuideResponse = {
        id: `${Date.now()}`,
        question: finalQuestion || "Monument / Carving Photo Scan",
        styleMode,
        imagePreview: imagePreviewUrl || undefined,
        title: data.title,
        recordedHistoryAndFacts: data.recordedHistoryAndFacts,
        folkloreAndLocalTradition: data.folkloreAndLocalTradition,
        accessibilityNotes: data.accessibilityNotes,
        practicalTips: data.practicalTips,
        followUpSuggestions: data.followUpSuggestions || [],
        timestamp: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      onAddResponse(newEntry);
      if (!overrideQuestion) {
        setQuestion("");
      }
      clearImage();
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Network error. Please retry.";
      setErrorMsg(
        offlineMode
          ? "Offline Mode is active: live AI queries need connectivity, while your saved Offline Pack guide cards below remain available."
          : msg
      );
    } finally {
      setIsLoading(false);
    }
  };

  const displayCards = responses.length > 0 ? responses : [place.featuredGuide];

  return (
    <div className="space-y-6">
      {/* Desktop Split Hero + Quick Place Context */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* Hero Image Container */}
        <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#E2D5C1] bg-[#1A2342] min-h-[210px] sm:min-h-[250px]">
          {place.heroImage && !heroImgFailed ? (
            <img
              src={place.heroImage}
              alt={`${place.displayName} heritage view`}
              referrerPolicy="no-referrer"
              onError={() => setHeroImgFailed(true)}
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          ) : (
            <div className="w-full h-full min-h-[210px] bg-gradient-to-br from-[#1A2342] via-[#2C3A66] to-[#C85A17]/80 flex flex-col items-center justify-center p-6 text-center text-white">
              <Landmark className="w-10 h-10 mb-2 opacity-80" />
              <p className="font-display text-lg font-semibold">{place.displayName}</p>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A2342]/90 via-[#1A2342]/35 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
            <div className="text-xs text-[#F7D7B5] font-medium mb-1">
              <span>{place.state}</span>
              <span className="mx-1.5" aria-hidden="true">·</span>
              <span>{place.regionCategory}</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold leading-tight text-balance">
              {place.displayName}
            </h1>
            <p className="text-xs sm:text-sm text-white/90 mt-1 line-clamp-2">
              {place.tagline}
            </p>
          </div>
        </div>

        {/* Interactive Prompt & Camera Console */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-5 flex flex-col justify-between gap-4">
          {/* Style Mode Selector (4 pills/segmented buttons) */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-xs font-bold text-[#525B76]">Visitor Style Mode</span>
              <span className="text-xs text-[#525B76]">Fact vs. Folklore always separated</span>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" role="group" aria-label="Visitor Style Mode">
              {STYLE_MODES.map((mode) => {
                const active = styleMode === mode;
                return (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => onChangeStyleMode(mode)}
                    aria-pressed={active}
                    className={`min-h-[44px] px-2.5 py-2 rounded-xl text-xs font-semibold border transition-colors text-center cursor-pointer focus-visible:outline-2 focus-visible:outline-[#C85A17] ${
                      active
                        ? "bg-[#1A2342] text-white border-[#1A2342]"
                        : "bg-[#FBF7F0] text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                    }`}
                  >
                    {mode}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Input + Camera Scan + Voice Input */}
          <div className="space-y-3">
            {imagePreviewUrl && (
              <div className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-[#F4EDE1] border border-[#DFCFAE]">
                <div className="flex items-center gap-3 min-w-0">
                  <img
                    src={imagePreviewUrl}
                    alt="Uploaded monument preview"
                    className="w-12 h-12 rounded-lg object-cover border border-[#DFCFAE] shrink-0"
                  />
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-[#1A2342] truncate">
                      Monument / Carving Photo Ready
                    </p>
                    <p className="text-[11px] text-[#525B76]">
                      Will analyze architecture, iconography, or inscription
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={clearImage}
                  aria-label="Remove uploaded photo"
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg text-[#9A3412] hover:bg-white cursor-pointer"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            )}

            <div className="relative">
              <textarea
                rows={2}
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submitQuery();
                  }
                }}
                placeholder={strings.askPlaceholder}
                className="w-full rounded-xl bg-[#FBF7F0] border border-[#DFCFAE] px-3.5 py-3 text-sm text-[#1A2342] placeholder:text-[#788099] focus:outline-2 focus:outline-[#C85A17] resize-none"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  capture="environment"
                  onChange={handleImagePick}
                  className="hidden"
                  id="monument-camera-input"
                />
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="min-h-[44px] px-3.5 py-2 rounded-xl bg-[#F4EDE1] hover:bg-[#E8DBC6] border border-[#DFCFAE] text-[#1A2342] text-xs font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
                >
                  <Camera className="w-4 h-4 text-[#C85A17]" />
                  <span>{strings.cameraButton}</span>
                </button>

                <button
                  type="button"
                  onClick={toggleVoiceInput}
                  aria-pressed={isListening}
                  className={`min-h-[44px] px-3.5 py-2 rounded-xl border text-xs font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer transition-colors ${
                    isListening
                      ? "bg-[#9A3412] text-white border-[#9A3412]"
                      : "bg-[#F4EDE1] hover:bg-[#E8DBC6] border-[#DFCFAE] text-[#1A2342]"
                  }`}
                >
                  {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4 text-[#C85A17]" />}
                  <span>{isListening ? "Listening..." : strings.voiceButton}</span>
                </button>
              </div>

              <button
                type="button"
                disabled={isLoading}
                onClick={() => submitQuery()}
                className="min-h-[44px] px-5 py-2 rounded-xl bg-[#C85A17] hover:bg-[#AE4B10] disabled:opacity-60 text-white text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Consulting Guide...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>{strings.askButton}</span>
                  </>
                )}
              </button>
            </div>

            {errorMsg && (
              <p className="text-xs font-medium text-[#9A3412] bg-[#FEF2F2] border border-[#FECACA] rounded-xl px-3 py-2">
                {errorMsg}
              </p>
            )}
          </div>

          {/* 3 Quick-Tap Sample Prompts */}
          <div className="pt-2 border-t border-[#EFE6D8]">
            <p className="text-xs font-semibold text-[#525B76] mb-2">
              Quick-tap prompts for {place.name}:
            </p>
            <div className="flex flex-wrap gap-2">
              {place.samplePrompts.slice(0, 3).map((promptText) => (
                <button
                  key={promptText}
                  type="button"
                  disabled={isLoading}
                  onClick={() => {
                    setQuestion(promptText);
                    submitQuery(promptText);
                  }}
                  className="min-h-[40px] px-3 py-1.5 rounded-xl bg-[#FBF7F0] hover:bg-[#F4EDE1] border border-[#DFCFAE] text-xs font-medium text-[#1A2342] text-left cursor-pointer transition-colors"
                >
                  {promptText}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dedicated Story of Origin Card */}
      {place.storyOfOrigin && (
        <section
          aria-labelledby="story-of-origin-heading"
          className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-6 space-y-4"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-[#EFE6D8]">
            <div className="space-y-0.5">
              <p className="text-xs font-semibold text-[#C85A17]">
                {place.displayName} · Heritage Dossier
              </p>
              <h2
                id="story-of-origin-heading"
                className="font-display text-xl sm:text-2xl font-bold text-[#1A2342] text-balance"
              >
                Story of Origin
              </h2>
            </div>

            <AudioPlayerButton
              text={`Story of Origin for ${place.displayName}. How It Began, Recorded History: ${place.storyOfOrigin.howItBegan}. Origin Legends and Folklore: ${place.storyOfOrigin.originLegends}. Key Turning Points: ${place.storyOfOrigin.turningPoints
                .map((tp) => `${tp.era}: ${tp.milestone}`)
                .join(". ")}`}
              language={language}
              label={strings.readAloud}
              stopLabel={strings.stopAudio}
              offlineMode={offlineMode}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#F3F5FA] border border-[#D4DCEB] p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-[#1A2342]">
                <ShieldCheck className="w-4 h-4 text-[#1A2342] shrink-0" />
                <h3 className="text-sm font-bold">
                  How It Began (Recorded History)
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#1A2342]">
                {place.storyOfOrigin.howItBegan}
              </p>
            </div>

            <div className="rounded-xl bg-[#FDF4EB] border border-[#EED6BC] p-4 sm:p-5 space-y-2">
              <div className="flex items-center gap-2 text-[#8C3B0B]">
                <Sparkles className="w-4 h-4 text-[#C85A17] shrink-0" />
                <h3 className="text-sm font-bold">
                  Origin Legends &amp; Folklore
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-[#2C241E]">
                {place.storyOfOrigin.originLegends}
              </p>
            </div>
          </div>

          {place.storyOfOrigin.turningPoints &&
            place.storyOfOrigin.turningPoints.length > 0 && (
              <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A2342]">
                  <Clock className="w-4 h-4 text-[#C85A17] shrink-0" />
                  <span>Key Turning Points</span>
                </div>
                <ol className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {place.storyOfOrigin.turningPoints.map((tp, idx) => (
                    <li
                      key={`${place.id}-tp-${idx}`}
                      className="rounded-xl bg-white border border-[#E6DAC6] p-3.5 flex items-start gap-3"
                    >
                      <span className="w-6 h-6 rounded-lg bg-[#1A2342] text-white font-mono-tabular text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <div className="space-y-0.5 min-w-0">
                        <p className="font-mono-tabular text-xs font-bold text-[#C85A17]">
                          {tp.era}
                        </p>
                        <p className="text-xs sm:text-sm leading-relaxed text-[#2C334A]">
                          {tp.milestone}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            )}
        </section>
      )}

      {/* Fact vs. Folklore Guide Responses */}
      <section className="space-y-5" aria-live="polite">
        {displayCards.map((item, idx) => {
          const spokenScript = `${item.title}. ${strings.recordedHistory}: ${item.recordedHistoryAndFacts}. ${strings.folkloreTradition}: ${item.folkloreAndLocalTradition}. ${strings.accessibilityTitle}: ${item.accessibilityNotes}`;
          return (
            <article
              key={item.id || `${place.id}-featured-${idx}`}
              className="bg-white rounded-2xl border border-[#E2D5C1] p-4 sm:p-6 space-y-5"
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 pb-4 border-b border-[#EFE6D8]">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2 text-xs text-[#525B76]">
                    <span>{place.displayName}</span>
                    {item.styleMode && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span>{item.styleMode}</span>
                      </>
                    )}
                    {item.timestamp && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="font-mono-tabular">{item.timestamp}</span>
                      </>
                    )}
                  </div>
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-[#1A2342] text-balance">
                    {item.title}
                  </h2>
                  {item.question && (
                    <p className="text-xs text-[#525B76]">
                      Asked: &ldquo;{item.question}&rdquo;
                    </p>
                  )}
                </div>

                <AudioPlayerButton
                  text={spokenScript}
                  language={language}
                  label={strings.readAloud}
                  stopLabel={strings.stopAudio}
                  offlineMode={offlineMode}
                  variant="primary"
                />
              </div>

              {item.imagePreview && (
                <div className="rounded-xl overflow-hidden border border-[#E2D5C1] max-w-sm">
                  <img
                    src={item.imagePreview}
                    alt="Scanned heritage structure"
                    className="w-full h-44 object-cover"
                  />
                </div>
              )}

              {/* Mandatory Split: Recorded History & Facts vs. Folklore & Local Tradition */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#F3F5FA] border border-[#D4DCEB] p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#1A2342]">
                    <ShieldCheck className="w-4 h-4 text-[#1A2342] shrink-0" />
                    <h3 className="text-sm font-bold">{strings.recordedHistory}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#1A2342]">
                    {item.recordedHistoryAndFacts}
                  </p>
                </div>

                <div className="rounded-xl bg-[#FDF4EB] border border-[#EED6BC] p-4 sm:p-5 space-y-2">
                  <div className="flex items-center gap-2 text-[#8C3B0B]">
                    <Sparkles className="w-4 h-4 text-[#C85A17] shrink-0" />
                    <h3 className="text-sm font-bold">{strings.folkloreTradition}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[#2C241E]">
                    {item.folkloreAndLocalTradition}
                  </p>
                </div>
              </div>

              {/* Accessibility & Practical Tips */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1A2342]">
                    <Accessibility className="w-4 h-4 text-[#1D5E34] shrink-0" />
                    <span>{strings.accessibilityTitle}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#394158]">
                    {item.accessibilityNotes}
                  </p>
                </div>

                <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] p-4 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-bold text-[#1A2342]">
                    <BookOpen className="w-4 h-4 text-[#C85A17] shrink-0" />
                    <span>{strings.practicalTips}</span>
                  </div>
                  <p className="text-xs sm:text-sm leading-relaxed text-[#394158]">
                    {item.practicalTips}
                  </p>
                </div>
              </div>

              {/* Follow-up Suggestions */}
              {item.followUpSuggestions && item.followUpSuggestions.length > 0 && (
                <div className="pt-2 border-t border-[#EFE6D8]">
                  <p className="text-xs font-semibold text-[#525B76] mb-2">Continue exploring:</p>
                  <div className="flex flex-wrap gap-2">
                    {item.followUpSuggestions.map((followUp) => (
                      <button
                        key={followUp}
                        type="button"
                        disabled={isLoading}
                        onClick={() => submitQuery(followUp)}
                        className="min-h-[40px] px-3 py-1.5 rounded-xl bg-white hover:bg-[#F4EDE1] border border-[#DFCFAE] text-xs font-medium text-[#1A2342] text-left inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <Compass className="w-3.5 h-3.5 text-[#C85A17] shrink-0" />
                        <span>{followUp}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </article>
          );
        })}
      </section>
    </div>
  );
}
