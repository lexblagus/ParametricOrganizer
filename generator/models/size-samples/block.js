const faces = 360 / 10;
const height = 15;
const floorHeight = 1;
const active = true;

const depth = height - floorHeight;
const moduleSize = 5;

const defaults = [
	0,
	0,
	0 - depth,
	0,
	faces,
	0
];

const shanks = [
	0.1,
	0.2,
	0.3,
	0.4,
	0.5,
	0.6,
	0.7,
	0.8,
	0.9,
	1.0,
	1.2,
	1.3,
	1.4,
	1.5,
	1.6,
	1.7,
	1.8,
	1.9,
	2.0,
	2.2,
	2.3,
	2.4,
	2.5,
	2.6,
	2.7,
	2.8,
	2.9,
	3.0,
].reverse();

const moduleRow = shanks.map(d => ([
	d,
	d,
	0 - depth,
	0,
	faces,
	0
]));

const moduleConfig = [ moduleRow ]; // [ moduleRow.map(mdl => mdl) ];

const sizeSamplesBlock = {
	active,
	name: `Size sample 1xN block`,
	params: {
		width: moduleSize,
		length: moduleSize * (shanks .length),
		height,
		floorHeight,
		moduleQtt: [1, shanks.length],
		hoc: defaults,
		moduleConfig,
	},
};


module.exports = [ sizeSamplesBlock ];
