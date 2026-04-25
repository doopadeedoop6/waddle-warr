import icePlanetConfig from './ice_planet.config.js';
import glacierCanyonConfig from './glacier_canyon.config.js';

export const MAP_CONFIGS = {
  ice_planet:     icePlanetConfig,
  glacier_canyon: glacierCanyonConfig,
};

export function getMapConfig(id) {
  const cfg = MAP_CONFIGS[id];
  if (!cfg) throw new Error(`Unknown map id: "${id}". Available: ${listMapIds().join(', ')}`);
  return cfg;
}

export function listMapIds() {
  return Object.keys(MAP_CONFIGS);
}

export const DEFAULT_MAP_ID = 'glacier_canyon';
