import { IcePlanet } from './IcePlanet.js';
import { GlacierCanyonMap } from './GlacierCanyonMap.js';
import { getMapConfig, listMapIds } from '../../../shared/maps/index.js';

const MAP_CLASSES = {
  ice_planet:     IcePlanet,
  glacier_canyon: GlacierCanyonMap,
};

export function createMap(id) {
  const MapClass = MAP_CLASSES[id];
  if (!MapClass) throw new Error(`No client map class for: ${id}`);
  const config = getMapConfig(id);
  return new MapClass(config);
}

export function availableMaps() {
  return listMapIds();
}
