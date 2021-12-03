const faces = 360 / 10;
const height = 5; // 15, 20, 25, 30
const floorHeight = 5;
const chanferHeight = 10;
// make double or triple blocks, like
// 1x1, 2x1 (2x1 x 9x9 = 18x9), 3x1 (3x1 x 9x9 = 29x9)
const widthBlockMultipliers = [1, 2]; // , 3, 4, 5];
const modulesQtt = 4;
const active = false;

const chanferDiam = 5.5;

const defaults = [
	chanferDiam,
	chanferDiam,
	chanferHeight,
	0,
	faces,
	0
];

const sandingBands = widthBlockMultipliers.map(multiplier => ({
	active,
	name: `Sanding Bands small ${modulesQtt * multiplier}x${modulesQtt}`,
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

module.exports = sandingBands;
