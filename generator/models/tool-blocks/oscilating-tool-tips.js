const floorHeight = 1;
const height = 25;
const faces = 4;
const thickness = 1.2;
const emptyHoc = [0,0,0,0,3,0];
const active = false;

const tipDiameters = [
	30,
	32.55,
	51,
	102.8
];

const tipDiameterConfig = tipDiameters.map(tipDiameter => ([
	tipDiameter,
	thickness,
	0 - height,
	0,
	faces,
	0
]));

module.exports = [
	{
		active,
		name: 'Oscilating tool tips',
		params: {
			width: 200,
			length: 50,
			height,
			floorHeight,
			moduleQtt: [3, 2],
			hoc: emptyHoc,
			moduleConfig: [
				[
					tipDiameterConfig[0],
					tipDiameterConfig[2],
				],
				[
					tipDiameterConfig[1],
					tipDiameterConfig[3],
				],
				[
					tipDiameterConfig[2],
					tipDiameterConfig[2],
				],
			],
		},
	},
];
