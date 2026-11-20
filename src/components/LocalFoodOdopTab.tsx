import { useEffect, useState } from "react";
import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Store,
  Utensils,
} from "lucide-react";
import {
  CompanionType,
  DietaryFilter,
  LocalCategory,
  PlaceDossier,
} from "../types";
import { IMG_CRAFTS_ODOP } from "../data/placesCatalog";

interface LocalFoodOdopTabProps {
  place: PlaceDossier;
}

const COMPANIONS: CompanionType[] = [
  "All",
  "Solo",
  "Family with Kids",
  "Elderly Parents",
];

const CATEGORIES: LocalCategory[] = [
  "All",
  "Local Food",
  "Shopping & ODOP",
  "Nearby Sites & Festivals",
];

const DIETARY_OPTIONS: DietaryFilter[] = ["All", "Veg", "Non-Veg"];

function buildMapsUrl(query: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

export function LocalFoodOdopTab({ place }: LocalFoodOdopTabProps) {
  const [companion, setCompanion] = useState<CompanionType>("All");
  const [category, setCategory] = useState<LocalCategory>("All");
  const [dietary, setDietary] = useState<DietaryFilter>("All");
  const [imgFailed, setImgFailed] = useState(false);

  useEffect(() => {
    setImgFailed(false);
  }, [place.id]);

  const showFood = category === "All" || category === "Local Food";
  const showMarkets = category === "All" || category === "Shopping & ODOP";
  const showNearby = category === "All" || category === "Nearby Sites & Festivals";

  const filteredFoods = (place.famousFoods || []).filter((item) => {
    const matchComp =
      companion === "All" || item.companionFit.includes(companion);
    const matchDiet = dietary === "All" || item.dietary === dietary;
    return matchComp && matchDiet;
  });

  const filteredMarkets = (place.shoppingMarkets || []).filter(
    (item) => companion === "All" || item.companionFit.includes(companion)
  );

  const filteredHighlights = (place.localHighlights || []).filter(
    (item) => companion === "All" || item.companionFit.includes(companion)
  );

  const totalMatches =
    (showFood ? filteredFoods.length : 0) +
    (showMarkets ? filteredMarkets.length : 0) +
    (showNearby ? filteredHighlights.length : 0);

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
              <span>Famous Food, Markets &amp; One District One Product (ODOP)</span>
            </div>
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-[#1A2342] text-balance">
              Local Food, Bazaars &amp; Handicrafts
            </h1>
            <p className="text-sm text-[#525B76] leading-relaxed">
              Signature regional dishes, iconic eateries, GI-tagged handicrafts, market timings, authenticity tips, and direct Google Maps links.
            </p>
          </div>

          {/* Interactive Filters */}
          <div className="space-y-3 pt-2 border-t border-[#EFE6D8]">
            <div>
              <p className="text-xs font-bold text-[#525B76] mb-1.5">
                Travel Companion
              </p>
              <div
                className="flex flex-wrap gap-1.5"
                role="group"
                aria-label="Travel Companion Filter"
              >
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

            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-[#525B76] mb-1.5">
                  Category
                </p>
                <div
                  className="flex flex-wrap gap-1.5"
                  role="group"
                  aria-label="Category Filter"
                >
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

              {showFood && (
                <div>
                  <p className="text-xs font-bold text-[#525B76] mb-1.5">
                    Dietary (Food)
                  </p>
                  <div
                    className="flex flex-wrap gap-1.5"
                    role="group"
                    aria-label="Dietary Preference"
                  >
                    {DIETARY_OPTIONS.map((opt) => {
                      const active = dietary === opt;
                      return (
                        <button
                          key={opt}
                          type="button"
                          onClick={() => setDietary(opt)}
                          aria-pressed={active}
                          className={`min-h-[40px] px-3 py-1.5 rounded-xl border text-xs font-semibold transition-colors whitespace-nowrap cursor-pointer ${
                            active
                              ? "bg-[#1D5E34] text-white border-[#1D5E34]"
                              : "bg-[#FBF7F0] text-[#1A2342] border-[#DFCFAE] hover:border-[#1D5E34]"
                          }`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}
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
              <p className="font-display font-semibold">
                ODOP &amp; Local Culinary Heritage
              </p>
            </div>
          )}
        </div>
      </section>

      {totalMatches === 0 && (
        <div className="bg-white rounded-2xl border border-[#E2D5C1] p-8 text-center space-y-3">
          <p className="text-sm font-semibold text-[#1A2342]">
            No entries match the current filters ({companion} · {category} · {dietary}).
          </p>
          <button
            type="button"
            onClick={() => {
              setCompanion("All");
              setCategory("All");
              setDietary("All");
            }}
            className="min-h-[44px] px-4 py-2 rounded-xl bg-[#1A2342] text-white text-xs font-semibold cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}

      {/* Section 1: Must-Try Local Food & Iconic Eateries */}
      {showFood && filteredFoods.length > 0 && (
        <section aria-labelledby="famous-food-heading" className="space-y-3.5">
          <div className="flex items-baseline justify-between gap-2">
            <h2
              id="famous-food-heading"
              className="font-display text-xl sm:text-2xl font-bold text-[#1A2342] flex items-center gap-2"
            >
              <Utensils className="w-5 h-5 text-[#C85A17] shrink-0" />
              <span>Must-Try Local Food &amp; Iconic Eateries</span>
            </h2>
            <span className="text-xs text-[#525B76]">
              {filteredFoods.length} regional specialties
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredFoods.map((food) => {
              const isVeg = food.dietary === "Veg";
              const mapsHref = buildMapsUrl(
                food.mapQuery || `${food.iconicSpot}, ${place.displayName}`
              );
              return (
                <article
                  key={`${place.id}-food-${food.dishName}`}
                  className="bg-white rounded-2xl border border-[#E2D5C1] p-5 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2.5">
                    {/* Clean unboxed Veg/Non-Veg + Price + Timing */}
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <span
                        className={`inline-flex items-center gap-1.5 font-bold ${
                          isVeg ? "text-[#1D5E34]" : "text-[#9A3412]"
                        }`}
                      >
                        <span
                          className={`w-3 h-3 rounded-[2px] border flex items-center justify-center ${
                            isVeg ? "border-[#1D5E34]" : "border-[#9A3412]"
                          }`}
                          aria-hidden="true"
                        >
                          <span
                            className={`w-1.5 h-1.5 rounded-full ${
                              isVeg ? "bg-[#1D5E34]" : "bg-[#9A3412]"
                            }`}
                          />
                        </span>
                        <span>{food.dietary}</span>
                        <span className="text-[#525B76] font-normal">·</span>
                        <span className="text-[#525B76] font-medium">
                          {food.bestTimeOfDay}
                        </span>
                      </span>

                      <span className="font-mono-tabular font-bold text-[#1A2342]">
                        {food.priceRange}
                      </span>
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A2342] text-balance">
                      {food.dishName}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#2C334A]">
                      {food.description}
                    </p>

                    <div className="rounded-xl bg-[#FDF4EB] border border-[#EED6BC] p-3.5 space-y-1 text-xs">
                      <p className="text-[#1A2342]">
                        <strong className="font-bold">Iconic Spot: </strong>
                        {food.iconicSpot}
                      </p>
                      <p className="text-[#525B76]">
                        <strong className="font-semibold text-[#1A2342]">
                          Food Street / Area:{" "}
                        </strong>
                        {food.foodStreetArea}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#EFE6D8] flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-[#525B76]">
                      Best for: {food.companionFit.join(" · ")}
                    </span>
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-[#1A2342] hover:bg-[#27335C] text-white text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#F4A261]" />
                      <span>Directions on Maps</span>
                      <ExternalLink className="w-3 h-3 opacity-85" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Section 2: Local Shopping & Famous Markets (ODOP & Handicrafts) */}
      {showMarkets && filteredMarkets.length > 0 && (
        <section aria-labelledby="shopping-markets-heading" className="space-y-3.5">
          <div className="flex items-baseline justify-between gap-2">
            <h2
              id="shopping-markets-heading"
              className="font-display text-xl sm:text-2xl font-bold text-[#1A2342] flex items-center gap-2"
            >
              <ShoppingBag className="w-5 h-5 text-[#C85A17] shrink-0" />
              <span>Local Shopping &amp; Famous Markets (ODOP &amp; Handicrafts)</span>
            </h2>
            <span className="text-xs text-[#525B76]">
              {filteredMarkets.length} curated bazaars
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredMarkets.map((market) => {
              const mapsHref = buildMapsUrl(
                market.mapQuery || `${market.marketName}, ${place.displayName}`
              );
              return (
                <article
                  key={`${place.id}-market-${market.marketName}`}
                  className="bg-white rounded-2xl border border-[#E2D5C1] p-5 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-3">
                    <div className="text-xs font-semibold text-[#C85A17]">
                      {market.odopOrCraftLabel}
                    </div>

                    <h3 className="font-display text-lg sm:text-xl font-bold text-[#1A2342] text-balance">
                      {market.marketName}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#2C334A]">
                      <strong className="font-semibold text-[#1A2342]">
                        Famous For:{" "}
                      </strong>
                      {market.famousFor}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] px-3 py-2 flex items-start gap-2">
                        <Clock className="w-3.5 h-3.5 text-[#C85A17] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#1A2342] block">
                            Market Hours
                          </span>
                          <span className="text-[#394158] font-mono-tabular">
                            {market.timings}
                          </span>
                        </div>
                      </div>
                      <div className="rounded-xl bg-[#FBF7F0] border border-[#E6DAC6] px-3 py-2 flex items-start gap-2">
                        <Store className="w-3.5 h-3.5 text-[#1A2342] shrink-0 mt-0.5" />
                        <div>
                          <span className="font-semibold text-[#1A2342] block">
                            Closed Day
                          </span>
                          <span className="text-[#394158]">{market.closedDay}</span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-xl bg-[#F3F5FA] border border-[#D4DCEB] p-3.5 flex items-start gap-2 text-xs">
                      <ShieldCheck className="w-4 h-4 text-[#1D5E34] shrink-0 mt-0.5" />
                      <p className="leading-relaxed text-[#1A2342]">
                        <strong className="font-bold">
                          Authenticity &amp; Buying Tip:{" "}
                        </strong>
                        {market.authenticityTip}
                      </p>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-[#EFE6D8] flex flex-wrap items-center justify-between gap-2">
                    <span className="text-xs text-[#525B76]">
                      Suitable for: {market.companionFit.join(" · ")}
                    </span>
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] px-4 py-2 rounded-xl bg-[#C85A17] hover:bg-[#AE4B10] text-white text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap transition-colors"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Navigate to Market</span>
                      <ExternalLink className="w-3 h-3 opacity-90" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}

      {/* Section 3: Nearby Sites & Festivals */}
      {showNearby && filteredHighlights.length > 0 && (
        <section aria-labelledby="nearby-festivals-heading" className="space-y-3.5">
          <div className="flex items-baseline justify-between gap-2">
            <h2
              id="nearby-festivals-heading"
              className="font-display text-xl sm:text-2xl font-bold text-[#1A2342] flex items-center gap-2"
            >
              <Sparkles className="w-5 h-5 text-[#C85A17] shrink-0" />
              <span>Nearby Heritage Sites &amp; Seasonal Festivals</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredHighlights.map((item) => {
              const mapsHref = buildMapsUrl(
                item.mapQuery || `${item.title}, ${place.displayName}`
              );
              return (
                <article
                  key={`${place.id}-nearby-${item.title}`}
                  className="bg-white rounded-2xl border border-[#E2D5C1] p-5 flex flex-col justify-between gap-4"
                >
                  <div className="space-y-2.5">
                    <div className="flex flex-wrap items-center gap-1.5 text-xs text-[#525B76]">
                      <span className="font-semibold text-[#C85A17]">
                        {item.category}
                      </span>
                      <span aria-hidden="true">·</span>
                      <span>{item.originLabel}</span>
                    </div>

                    <h3 className="font-display text-xl font-bold text-[#1A2342]">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-relaxed text-[#2C334A]">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#EFE6D8] flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div className="flex items-start gap-1.5 text-[#1A2342] min-w-0 flex-1">
                      <MapPin className="w-3.5 h-3.5 text-[#C85A17] shrink-0 mt-0.5" />
                      <span>
                        <strong className="font-semibold">Location: </strong>
                        {item.whereToFind}
                      </span>
                    </div>
                    <a
                      href={mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[40px] px-3.5 py-1.5 rounded-xl bg-[#FBF7F0] hover:bg-[#F4EDE1] border border-[#DFCFAE] text-[#1A2342] text-xs font-semibold inline-flex items-center gap-1.5 whitespace-nowrap"
                    >
                      <Navigation className="w-3.5 h-3.5 text-[#C85A17]" />
                      <span>Maps</span>
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}
