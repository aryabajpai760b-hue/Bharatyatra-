import { PlaceDossier } from "../types";
import {
  IMG_CRAFTS_ODOP,
  IMG_MATHURA_GHAT,
  IMG_ORCHHA_CHHATRIS,
  IMG_TEMPLE_CARVING,
  PLACES_NORTH_CENTRAL,
} from "./placesNorthCentral";
import { PLACES_WEST_EAST } from "./placesWestEast";
import { PLACES_SOUTH } from "./placesSouth";
import { INDIA_STATES_AND_UTS_DIRECTORY } from "./statesDirectory";

export {
  IMG_CRAFTS_ODOP,
  IMG_MATHURA_GHAT,
  IMG_ORCHHA_CHHATRIS,
  IMG_TEMPLE_CARVING,
  INDIA_STATES_AND_UTS_DIRECTORY,
};

export const ALL_INDIAN_STATES_AND_UTS: string[] = INDIA_STATES_AND_UTS_DIRECTORY.map(
  (entry) => entry.state
);

export const CURATED_PLACES: PlaceDossier[] = [
  ...PLACES_NORTH_CENTRAL,
  ...PLACES_WEST_EAST,
  ...PLACES_SOUTH,
];

export function findCuratedPlace(query: string): PlaceDossier | undefined {
  const clean = query.trim().toLowerCase();
  if (!clean) return undefined;
  return CURATED_PLACES.find(
    (p) =>
      p.id.toLowerCase() === clean ||
      p.name.toLowerCase() === clean ||
      p.displayName.toLowerCase() === clean ||
      `${p.name}, ${p.state}`.toLowerCase() === clean
  );
}
