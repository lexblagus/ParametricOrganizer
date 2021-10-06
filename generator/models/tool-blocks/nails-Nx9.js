const faces = 360 / 10;
const gap = 0.4;
const height = 15; // 15, 20, 25, 30
const floorHeight = 1;
const depth = 5;
const widthBlockMultipliers = [1, 2, 3, 4, 5]; // make double or triple blocks, like 1x1, 2x1 (2x1 x 9x9 = 18x9), 3x1 (3x1 x 9x9 = 29x9)
const modulesQtt = 9;  // actualy is 4x4 or 3x3 but more holes looks better
const active = false;

const nailHoleDiam = 1.6; // 1.9 max

const defaults = [
	nailHoleDiam + gap,
	nailHoleDiam + gap,
	0 - depth,
	0,
	faces,
	0
];

const nailBlocks = widthBlockMultipliers.map(multiplier => ({
	active,
	name: `Nail blocks ${modulesQtt * multiplier}x${modulesQtt}`,
	params: {
		width: 50 * multiplier,
		length: 50,
		height,
		floorHeight,
		moduleQtt: [
			multiplier * modulesQtt,
			modulesQtt
		],
		hoc: defaults,
		moduleConfig: [],
	},
}));

module.exports = nailBlocks;
