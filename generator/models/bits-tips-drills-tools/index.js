const hexBits = require('./hex-bits');
const microHexBits = require('./micro-hex-bits');
const drillsConcrete = require('./drills-concrete');
const drillsSteel01 = require('./drills-steel-01');
const drillsSteel02 = require('./drills-steel-02');
const drillsSteel03 = require('./drills-steel-03');
const drillsWood = require('./drills-wood');
const drillsWoodWide = require('./drills-wood-wide');
const dremelCarvingCutters = require('./dremel-carving-cutters');
const dremelBitsLarge6x6 = require('./dremel-bits-L-6x6');
const dremelBitsLargeNx9 = require('./dremel-bits-L-Nx9');

module.exports = [
	...hexBits,
	...microHexBits,
	...drillsConcrete,
	...drillsSteel01,
	...drillsSteel02,
	...drillsSteel03,
	...drillsWood,
	...drillsWoodWide,
	...dremelCarvingCutters,
	...dremelBitsLarge6x6,
	...dremelBitsLargeNx9,
];
