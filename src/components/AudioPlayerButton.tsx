import { useEffect, useRef, useState } from "react";
import { Loader2, Square, Volume2 } from "lucide-react";
import { IndianLanguage } from "../types";
import { LANGUAGE_SPEECH_CODES } from "../data/translations";

interface AudioPlayerButtonProps {
  text: string;
  language: IndianLanguage;
  label: string;
  stopLabel?: string;
  offlineMode?: boolean;
  variant?: "primary" | "subtle";
}

export function AudioPlayerButton({
  text,
  language,
  label,
  stopLabel = "Stop",
  offlineMode = false,
  variant = "subtle",
}: AudioPlayerButtonProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "playing">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopPlayback = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setStatus("idle");
  };

  const playWithBrowserSpeech = () => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) {
      setErrorMsg("Audio playback is not supported in this browser.");
      setStatus("idle");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = LANGUAGE_SPEECH_CODES[language] || "en-IN";
    utterance.rate = 0.95;
    utterance.onend = () => setStatus("idle");
    utterance.onerror = () => {
      setStatus("idle");
    };
    setStatus("playing");
    window.speechSynthesis.speak(utterance);
  };

  const handleToggle = async () => {
    setErrorMsg(null);
    if (status === "playing" || status === "loading") {
      stopPlayback();
      return;
    }

    if (offlineMode) {
      playWithBrowserSpeech();
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/guide/tts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text, language }),
      });

      if (!res.ok) {
        throw new Error("TTS service unavailable");
      }

      const data = (await res.json()) as { audioBase64?: string; mimeType?: string };
      if (!data.audioBase64) {
        throw new Error("No audio payload returned");
      }

      const audio = new Audio(`data:${data.mimeType || "audio/wav"};base64,${data.audioBase64}`);
      audioRef.current = audio;
      audio.onended = () => {
        setStatus("idle");
        audioRef.current = null;
      };
      audio.onerror = () => {
        setStatus("idle");
        audioRef.current = null;
      };
      await audio.play();
      setStatus("playing");
    } catch {
      // Fall back to on-device Web Speech synthesis so travellers in weak-signal zones always hear narration
      playWithBrowserSpeech();
    }
  };

  const baseStyles =
    variant === "primary"
      ? "bg-[#1A2342] text-white hover:bg-[#27335C] border border-[#1A2342]"
      : "bg-[#F4EDE1] text-[#1A2342] hover:bg-[#EBDCC6] border border-[#DFCFAE]";

  return (
    <div className="inline-flex flex-col items-start gap-1">
      <button
        type="button"
        onClick={handleToggle}
        className={`inline-flex items-center gap-2 px-3.5 py-2 min-h-[44px] rounded-xl text-xs font-semibold transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#C85A17] ${
          status === "playing"
            ? "bg-[#C85A17] text-white border border-[#C85A17]"
            : baseStyles
        }`}
        aria-pressed={status === "playing"}
      >
        {status === "loading" ? (
          <Loader2 className="w-4 h-4 animate-spin shrink-0" />
        ) : status === "playing" ? (
          <Square className="w-3.5 h-3.5 fill-current shrink-0" />
        ) : (
          <Volume2 className="w-4 h-4 shrink-0" />
        )}
        <span>{status === "playing" ? stopLabel : status === "loading" ? "Preparing..." : label}</span>
      </button>
      {errorMsg && <span className="text-[11px] text-[#9A3412]">{errorMsg}</span>}
    </div>
  );
}
