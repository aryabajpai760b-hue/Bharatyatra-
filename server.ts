import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { GoogleGenAI, Type } from "@google/genai";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;
const app = express();
app.use(express.json({ limit: "15mb" }));

function getGeminiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is not configured in environment variables.");
  }
  return new GoogleGenAI({
    apiKey,
    apiVersion: "v1beta",
    httpOptions: {
      headers: {
        "User-Agent": "aistudio-build",
      },
    },
  });
}

async function withRetry<T>(fn: () => Promise<T>, retries = 2): Promise<T> {
  let lastError: unknown;
  for (let i = 0; i <= retries; i++) {
    try {
      return await fn();
    } catch (err: unknown) {
      lastError = err;
      const status = (err as { status?: number })?.status;
      if (status && status < 500 && status !== 429) {
        throw err;
      }
      if (i < retries) {
        await new Promise((r) => setTimeout(r, 400 * Math.pow(2, i)));
      }
    }
  }
  throw lastError;
}

const LANGUAGE_INSTRUCTIONS: Record<string, string> = {
  "English | हिंदी":
    "Write primarily in clear, warm English, seamlessly including key heritage terms and concise bilingual Hindi (Devanagari) section subtitles or phrases where helpful for Indian travellers.",
  English: "Write entirely in clear, natural English.",
  "हिंदी": "Write the entire response in clear, natural Hindi (Devanagari script).",
  "मराठी": "Write the entire response in clear, natural Marathi (Devanagari script).",
  "தமிழ்": "Write the entire response in clear, natural Tamil script.",
  "తెలుగు": "Write the entire response in clear, natural Telugu script.",
  "বাংলা": "Write the entire response in clear, natural Bengali script.",
  "ગુજરાતી": "Write the entire response in clear, natural Gujarati script.",
  "ಕನ್ನಡ": "Write the entire response in clear, natural Kannada script.",
  "മലയാളം": "Write the entire response in clear, natural Malayalam script.",
  "ଓଡ଼ିଆ": "Write the entire response in clear, natural Odia script.",
  "ਪੰਜਾਬੀ": "Write the entire response in clear, natural Punjabi (Gurmukhi script).",
  "অসমীয়া": "Write the entire response in clear, natural Assamese script.",
};

const STYLE_INSTRUCTIONS: Record<string, string> = {
  "Pilgrim / Devotional":
    "Tone: Warm, reverent, and helpful for pilgrims and devotees. Include temple/ghat etiquette, daily ritual rhythm, and spiritual significance—while keeping verified history strictly separate from sacred legends.",
  "History & Architecture":
    "Tone: Scholarly yet accessible architectural & historical guide. Highlight dynasties, structural elements (shikhara, mandapa, stepwell tiers, stone masonry, frescoes, epigraphy), and ASI/conservation context.",
  "Kids Story Mode":
    "Tone: Engaging, imaginative, and easy for children aged 7–13 and families to follow, using vivid imagery and curiosity prompts, while still clearly separating real historical facts from traditional stories.",
  "Quick Summary":
    "Tone: Crisp, high-signal 2–3 sentence bullet-friendly overview for visitors standing right at the site.",
};

app.get("/api/health", (_req, res) => {
  res.json({ ok: true });
});

app.post("/api/guide/ask", async (req, res) => {
  try {
    const { place, question, styleMode, language, imageBase64, imageMimeType } = req.body as {
      place?: string;
      question?: string;
      styleMode?: string;
      language?: string;
      imageBase64?: string;
      imageMimeType?: string;
    };

    if (!question && !imageBase64) {
      return res.status(400).json({ error: "Please enter a question or upload a monument photo." });
    }

    const ai = getGeminiClient();
    const activePlace = place || "Mathura, Uttar Pradesh";
    const activeStyle = STYLE_INSTRUCTIONS[styleMode || "History & Architecture"] || STYLE_INSTRUCTIONS["History & Architecture"];
    const activeLang = LANGUAGE_INSTRUCTIONS[language || "English | हिंदी"] || LANGUAGE_INSTRUCTIONS["English | हिंदी"];

    const systemInstruction = `You are BharatYatra AI, an authoritative Pan-India Heritage & Local Companion covering all Indian states, union territories, cities, and small towns/qasbas.
Active Place Context: ${activePlace}.
${activeStyle}
${activeLang}

MANDATORY FACT VS. FOLKLORE RULE:
1. "recordedHistoryAndFacts": Provide ONLY verified historical, architectural, geographical, and archaeological facts (centuries, dynasties, building materials, inscriptions, conservation status). Never fabricate dates, rulers, or unverified claims. If exact dating is debated or unconfirmed by archaeology, explicitly state what is historically documented vs. uncertain.
2. "folkloreAndLocalTradition": Share local legends, puranic/oral traditions, devotional beliefs, and regional customs respectfully—never mixing them into the Recorded History section.
3. "accessibilityNotes": Provide practical, honest guidance on steps, ramps, paved paths, seating/shade, footwear norms, and elderly/wheelchair feasibility.
4. "practicalTips": Helpful local etiquette, best visiting window, and orientation.
5. If an image is provided (temple, ghat, fort, stepwell/baoli, palace, carving, painting, or inscription), examine visual architectural features, motifs, script, or iconography closely to identify or interpret what is visible in the photo.`;

    const parts: Array<{ text: string } | { inlineData: { mimeType: string; data: string } }> = [];
    if (imageBase64 && imageMimeType) {
      parts.push({
        inlineData: {
          mimeType: imageMimeType,
          data: imageBase64,
        },
      });
    }
    parts.push({
      text: question?.trim()
        ? `Location: ${activePlace}. Visitor question: ${question.trim()}`
        : `Location: ${activePlace}. Please examine this heritage photo (temple, ghat, fort, stepwell, carving, painting, or inscription) and explain it following the Fact vs. Folklore structure.`,
    });

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: { parts },
        config: {
          systemInstruction,
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING, description: "Clear title for the monument, carving, or topic." },
              recordedHistoryAndFacts: {
                type: Type.STRING,
                description: "Verified historical, architectural, and archaeological facts only.",
              },
              folkloreAndLocalTradition: {
                type: Type.STRING,
                description: "Local legends, oral traditions, and cultural beliefs, respectfully separated from history.",
              },
              accessibilityNotes: {
                type: Type.STRING,
                description: "Practical step-free access, ramps, seating/rest points, and surface notes.",
              },
              practicalTips: {
                type: Type.STRING,
                description: "Best time of day, etiquette, photography or footwear notes.",
              },
              followUpSuggestions: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "2 or 3 natural next questions a visitor might ask here.",
              },
            },
            required: [
              "title",
              "recordedHistoryAndFacts",
              "folkloreAndLocalTradition",
              "accessibilityNotes",
              "practicalTips",
              "followUpSuggestions",
            ],
          },
        },
      })
    );

    const parsed = JSON.parse((response.text || "{}").trim());
    return res.json(parsed);
  } catch (err: unknown) {
    console.error("Error in /api/guide/ask:", err);
    const message = err instanceof Error ? err.message : "Failed to consult BharatYatra AI guide.";
    return res.status(500).json({ error: message });
  }
});

app.post("/api/guide/tts", async (req, res) => {
  try {
    const { text, language } = req.body as { text?: string; language?: string };
    if (!text || !text.trim()) {
      return res.status(400).json({ error: "Text is required for audio narration." });
    }

    const ai = getGeminiClient();
    const cleanText = text.trim().slice(0, 1400);

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: "gemini-3.8-flash-lite-tts",
        contents: [
          {
            role: "user",
            parts: [
              {
                text: cleanText,
                speechMetadata: {
                  style: `Warm, calm, articulate Indian heritage audio guide speaking in ${language || "English and Hindi"}.`,
                },
              },
            ],
          },
        ],
        config: {
          responseModalities: ["AUDIO"],
          speechConfig: {
            voiceConfig: {
              prebuiltVoiceConfig: { voiceName: "Kore" },
            },
          },
        },
      })
    );

    const base64Audio = response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;
    if (!base64Audio) {
      return res.status(502).json({ error: "Audio stream could not be synthesized." });
    }

    return res.json({ audioBase64: base64Audio, mimeType: "audio/wav" });
  } catch (err: unknown) {
    console.error("Error in /api/guide/tts:", err);
    const message = err instanceof Error ? err.message : "Audio narration unavailable.";
    return res.status(500).json({ error: message });
  }
});

app.post("/api/place/explore", async (req, res) => {
  try {
    const { place, language } = req.body as { place?: string; language?: string };
    if (!place || !place.trim()) {
      return res.status(400).json({ error: "Destination name is required." });
    }

    const ai = getGeminiClient();
    const activeLang = LANGUAGE_INSTRUCTIONS[language || "English | हिंदी"] || LANGUAGE_INSTRUCTIONS["English | हिंदी"];

    const response = await withRetry(() =>
      ai.models.generateContent({
        model: "gemini-4-hydrogen",
        contents: `Create a complete, historically accurate heritage, sightseeing, food, shopping, and visitor guide dossier for "${place.trim()}" in India. ${activeLang}
Rules:
1. Never invent historical dates, dynasties, or archaeological claims—if historical origin is uncertain, state clearly.
2. Strictly separate verified history ("howItBegan" and "recordedHistoryAndFacts") from traditional folklore ("originLegends" and "folkloreAndLocalTradition").
3. Include 3-4 chronological "turningPoints" showing how the place evolved.
4. Provide 4-5 real "sightseeingSpots" with practical step-by-step route directions from the nearest major railway station or bus stand, entry fees, best visiting hours, and accurate "mapQuery" strings for Google Maps.
5. Provide 3-4 authentic "famousFoods" (with dietary Veg/Non-Veg, priceRange in INR, bestTimeOfDay, iconicSpot, foodStreetArea, and mapQuery).
6. Provide 2-3 authentic "shoppingMarkets" highlighting real ODOP/GI handicrafts, market timings, closedDay, bargaining/authenticity tips, and mapQuery.`,
        config: {
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              name: { type: Type.STRING },
              state: { type: Type.STRING },
              regionCategory: { type: Type.STRING, description: "e.g., Small Heritage Town, Pilgrimage City, State Trail" },
              tagline: { type: Type.STRING },
              overview: { type: Type.STRING },
              storyOfOrigin: {
                type: Type.OBJECT,
                properties: {
                  howItBegan: {
                    type: Type.STRING,
                    description: "Verified historical origin, founders/dynasties, time period, and architectural significance.",
                  },
                  originLegends: {
                    type: Type.STRING,
                    description: "Traditional stories, mythological links, and local beliefs behind how the place got its name or sacred status.",
                  },
                  turningPoints: {
                    type: Type.ARRAY,
                    items: {
                      type: Type.OBJECT,
                      properties: {
                        era: { type: Type.STRING },
                        milestone: { type: Type.STRING },
                      },
                      required: ["era", "milestone"],
                    },
                    description: "3 to 4 short historical turning points across centuries.",
                  },
                },
                required: ["howItBegan", "originLegends", "turningPoints"],
              },
              samplePrompts: {
                type: Type.ARRAY,
                items: { type: Type.STRING },
                description: "Exactly 3 place-specific sample questions for Tab 1.",
              },
              featuredGuide: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING },
                  recordedHistoryAndFacts: { type: Type.STRING },
                  folkloreAndLocalTradition: { type: Type.STRING },
                  accessibilityNotes: { type: Type.STRING },
                  practicalTips: { type: Type.STRING },
                },
                required: [
                  "title",
                  "recordedHistoryAndFacts",
                  "folkloreAndLocalTradition",
                  "accessibilityNotes",
                  "practicalTips",
                ],
              },
              sightseeingSpots: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    spotType: { type: Type.STRING, description: "e.g., Temple, Fort, Ghat, Museum, Stepwell, Hidden Spot" },
                    description: { type: Type.STRING },
                    bestTime: { type: Type.STRING },
                    entryFee: { type: Type.STRING },
                    duration: { type: Type.STRING },
                    routeDirections: { type: Type.STRING, description: "Distance from main railway station/bus stand and nearest landmark." },
                    transportTip: { type: Type.STRING, description: "E-rickshaw, auto, local bus, or walking advice." },
                    mapQuery: { type: Type.STRING, description: "Place name + city + state for Google Maps search." },
                  },
                  required: [
                    "name",
                    "spotType",
                    "description",
                    "bestTime",
                    "entryFee",
                    "duration",
                    "routeDirections",
                    "transportTip",
                    "mapQuery",
                  ],
                },
              },
              expressWalk: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stopNumber: { type: Type.INTEGER },
                    name: { type: Type.STRING },
                    walkTime: { type: Type.STRING },
                    summary: { type: Type.STRING },
                    audioStory: { type: Type.STRING },
                    accessibilityNote: { type: Type.STRING },
                  },
                  required: ["stopNumber", "name", "walkTime", "summary", "audioStory", "accessibilityNote"],
                },
              },
              halfDayWalk: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    stopNumber: { type: Type.INTEGER },
                    name: { type: Type.STRING },
                    walkTime: { type: Type.STRING },
                    summary: { type: Type.STRING },
                    audioStory: { type: Type.STRING },
                    accessibilityNote: { type: Type.STRING },
                  },
                  required: ["stopNumber", "name", "walkTime", "summary", "audioStory", "accessibilityNote"],
                },
              },
              famousFoods: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    dishName: { type: Type.STRING },
                    dietary: { type: Type.STRING, description: "Must be Veg or Non-Veg" },
                    priceRange: { type: Type.STRING },
                    bestTimeOfDay: { type: Type.STRING },
                    description: { type: Type.STRING },
                    iconicSpot: { type: Type.STRING },
                    foodStreetArea: { type: Type.STRING },
                    companionFit: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "Subset of: Solo, Family with Kids, Elderly Parents",
                    },
                    mapQuery: { type: Type.STRING },
                  },
                  required: [
                    "dishName",
                    "dietary",
                    "priceRange",
                    "bestTimeOfDay",
                    "description",
                    "iconicSpot",
                    "foodStreetArea",
                    "companionFit",
                    "mapQuery",
                  ],
                },
              },
              shoppingMarkets: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    marketName: { type: Type.STRING },
                    famousFor: { type: Type.STRING },
                    odopOrCraftLabel: { type: Type.STRING },
                    timings: { type: Type.STRING },
                    closedDay: { type: Type.STRING },
                    authenticityTip: { type: Type.STRING },
                    companionFit: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                    },
                    mapQuery: { type: Type.STRING },
                  },
                  required: [
                    "marketName",
                    "famousFor",
                    "odopOrCraftLabel",
                    "timings",
                    "closedDay",
                    "authenticityTip",
                    "companionFit",
                    "mapQuery",
                  ],
                },
              },
              localHighlights: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    title: { type: Type.STRING },
                    category: {
                      type: Type.STRING,
                      description: "Must be: Nearby Sites & Festivals",
                    },
                    companionFit: {
                      type: Type.ARRAY,
                      items: { type: Type.STRING },
                      description: "Subset of: Solo, Family with Kids, Elderly Parents",
                    },
                    originLabel: { type: Type.STRING },
                    description: { type: Type.STRING },
                    whereToFind: { type: Type.STRING },
                    mapQuery: { type: Type.STRING },
                  },
                  required: ["title", "category", "companionFit", "originLabel", "description", "whereToFind", "mapQuery"],
                },
              },
              nearestHospital: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  area: { type: Type.STRING },
                  phone: { type: Type.STRING },
                  note: { type: Type.STRING },
                },
                required: ["name", "area", "phone", "note"],
              },
              facilities: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    type: {
                      type: Type.STRING,
                      description: "Must be one of: Public Toilets, Drinking Water, Parking, Medical Centres, Food Outlets",
                    },
                    landmark: { type: Type.STRING },
                    hours: { type: Type.STRING },
                    accessibility: { type: Type.STRING },
                  },
                  required: ["name", "type", "landmark", "hours", "accessibility"],
                },
              },
            },
            required: [
              "name",
              "state",
              "regionCategory",
              "tagline",
              "overview",
              "storyOfOrigin",
              "samplePrompts",
              "featuredGuide",
              "sightseeingSpots",
              "expressWalk",
              "halfDayWalk",
              "famousFoods",
              "shoppingMarkets",
              "localHighlights",
              "nearestHospital",
              "facilities",
            ],
          },
        },
      })
    );

    const parsed = JSON.parse((response.text || "{}").trim());
    return res.json(parsed);
  } catch (err: unknown) {
    console.error("Error in /api/place/explore:", err);
    const message = err instanceof Error ? err.message : "Could not load destination guide.";
    return res.status(500).json({ error: message });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const { createServer: createViteServer } = await import("vite");
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, "dist");
    app.use(express.static(distPath));
    app.get("/{*path}", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`BharatYatra AI server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
