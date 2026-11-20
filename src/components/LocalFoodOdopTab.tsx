import { useState } from "react";
import { MapPin, Sparkles, Store, Utensils } from "lucide-react";
import { CompanionType, LocalCategory, PlaceDossier } from "../types";
import { IMG_CRAFTS_ODOP } from "../data/placesCatalog";

interface LocalFoodOdopTabProps {
  place: PlaceDossier;
}

const COMPANIONS: CompanionType[] = ["All", "Solo", "Family with Kids", "Elderly Parents"];
const CATEGORIES: LocalCategory[] = [
  "All",
  "Local Food",
  "Crafts & ODOP",
  "Nearby Sites & Festivals",
];

export function LocalFoodOdopTab({ place }: LocalFoodOdopTabProps) {
  const [companion, setCompanion] = useState<CompanionType>("All");
  const [category, setCategory] = useState<LocalCategory>("All");
  const [imgFailed, setImgFailed] = useState(false);

  const filtered = place.localHighlights.filter((item) => {
    const matchCategory = category === "All" || item.category === category;
    const matchCompanion =
      companion === "All" || item.companionFit.includes(companion);
    return matchCategory && matchCompanion;
  });

  const featuredCraftPhoto = place.secondaryImage || IMG_CRAFTS_ODOP;

  return (
    <div className="space-y-6">
      {/* Intro Banner with Craft & Food Editorial Photo */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch bg-white rounded-2xl border border-[#E2D5C1] overflow-hidden">
        <div className="lg:col-span-7 p-5 sm:p-6 flex flex-col justify-between gap-4">
          <div className="space-y-1.5">
            <div className="text-xs text-[#525B76]">
              <span>{place.displayName}</span>
              <span className="mx-1.5" aria-hidden="true">·</span>
              <span>One District One Product (ODOP) &amp; Regional Kitchens</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1A2342] text-balance">
              Local Food, Crafts &amp; Nearby Spots
            </h1>
            <p className="text-sm text-[#525B76] leading-relaxed">
              Discover authentic regional delicacies, GI-tagged artisan clusters, and nearby cultural spots matched to who you are travelling with.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="space-y-3 pt-2 border-t border-[#EFE6D8]">
            <div>
              <p className="text-xs font-bold text-[#525B76] mb-1.5">Travel Companion</p>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="Travel Companion Filter">
                {COMPANIONS.map((item) => {
                  const active = companion === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCompanion(item)}
                      aria-pressed={active}
                      className={`min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                        active
                          ? "bg-[#1A2342] text-white border-[#1A2342]"
                          : "bg-[#FBF7F0] text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <p className="text-xs font-bold text-[#525B76] mb-1.5">Category</p>
              <div className="flex flex-wrap gap-1.5" role="group" aria-label="Category Filter">
                {CATEGORIES.map((item) => {
                  const active = category === item;
                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      aria-pressed={active}
                      className={`min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                        active
                          ? "bg-[#C85A17] text-white border-[#C85A17]"
                          : "bg-[#FBF7F0] text-[#1A2342] border-[#DFCFAE] hover:border-[#C85A17]"
                      }`}
                    >
                      {item}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative min-h-[210px] bg-[#F4EDE1]">
          {!imgFailed ? (
            <img
              src={featuredCraftPhoto}
              alt="Traditional Indian handicrafts and regional delicacies"
              referrerPolicy="no-referrer"
              onError={() => setImgFailed(true)}
              className="w-full h-full object-cover lg:absolute lg:inset-0"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center text-[#1A2342]">
              <Store className="w-10 h-10 mb-2 text-[#C85A17]" />
              <p className="font-display font-semibold">ODOP &amp; Local Culinary Heritage</p>
            </div>
          )}
        </div>
      </section>

      {/* Filtered Highlights Grid */}
      {filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-8 text-center space-y-2">
          <p className="text-sm font-semibold text-[#1A2342]">
            No items match both &ldquo;{companion}&rdquo; and &ldquo;{category}&rdquo;.
          </p>
          <button
            type="button"
            onClick={() => {
              setCompanion("All");
              setCategory("All");
            }}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-[#1A2342] text-white text-xs font-semibold cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filtered.map((item) => (
            <article
              key={`${place.id}-${item.title}`}
              className="bg-white rounded-2xl border border-[#E2D5C1] p-5 flex flex-col justify-between gap-4"
            >
              <div className="space-y-2.5">
                {/* Unboxed clean metadata line */}
                <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#525B76]">
                  <span className="font-semibold text-[#C85A17]">{item.category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{item.originLabel}</span>
                </div>

                <h2 className="font-display text-xl font-bold text-[#1A2342] flex items-start gap-2">
                  {item.category === "Local Food" ? (
                    <Utensils className="w-5 h-5 text-[#C85A17] shrink-0 mt-0.5" />
                  ) : item.category === "Crafts & ODOP" ? (
                    <Store className="w-5 h-5 text-[#1A2342] shrink-0 mt-0.5" />
                  ) : (
                    <Sparkles className="w-5 h-5 text-[#C85A17] shrink-0 mt-0.5" />
                  )}
                  <span>{item.title}</span>
                </h2>

                <p className="text-sm leading-relaxed text-[#2C334A]">{item.description}</p>
              </div>

              <div className="pt-3 border-t border-[#EFE6D8] space-y-1.5 text-xs">
                <div className="flex items-start gap-2 text-[#1A2342]">
                  <MapPin className="w-3.5 h-3.5 text-[#C85A17] shrink-0 mt-0.5" />
                  <span>
                    <strong className="font-semibold">Where to find: </strong>
                    {item.whereToFind}
                  </span>
                </div>
                <p className="text-[#525B76]">
                  Suitable for: {item.companionFit.join(" · ")}
                </p>
              </div>
            </article>
          ))}
        </section>
      )}
    </div>
  );
}
