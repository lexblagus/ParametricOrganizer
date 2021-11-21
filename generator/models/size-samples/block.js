const faces = 360 / 10;
const height = 15;
const floorHeight = 1;
const active = true;

const depth = height - floorHeight;
const moduleSize = 5;

const shanks = [
	1.2,
	1.3,
	1.4,
	1.5,
	1.6,
	1.7,
	1.8,
	1.9,
	2.0,
];

const defaults = [
	0,
	0,
	0 - depth,
	0,
	faces,
	0
];

const singleModule = shanks.map(d => ([
	d,
	d,
	0 - depth,
	0, // 2.5,
	faces,
	0
]));

const moduleConfig = [
			shanks.map(singleModule => singleModule)
		]

const sizeSamplesBlock = {
	active,
	name: `Size sample 1xN block`,
	params: {
		width: moduleSize * (shanks .length),
		length: moduleSize * 1,
		height,
		floorHeight,
		moduleQtt: [shanks .length, 1],
		hoc: defaults,
		moduleConfig,
	},
};


module.exports = [ sizeSamplesBlock ];
