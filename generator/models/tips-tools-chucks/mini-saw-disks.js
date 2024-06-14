const floorHeight = 1;
const faces = 4;
const thickness = 1;
const active = false;

const sawDiameters = [
	50 - 2,
	44,
	35,
	32,
	31.2,
	25,
	22
];

sawDiameterConfig = sawDiameters.map(sawDiameter => ([
	sawDiameter,
	thickness,
	0 - (sawDiameter / 2),
	0,
	faces,
	0
]));

module.exports = [
	{
		active,
		path: 'tips-tools-chucks',
		name: 'Mini saw discs',
		params: {
			width: 50,
			length: 50,
			height: 25, // 15, 20, 25
			floorHeight,
			moduleQtt: [1, 7],
			hoc: sawDiameterConfig[0],
			moduleConfig: [
				sawDiameterConfig
			],
		},
	},
];
