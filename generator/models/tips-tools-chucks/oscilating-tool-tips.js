const floorHeight = 1;
const height = 25;
const faces = 4;
const thickness = 1.2; // measured: Dexter 0.9
const emptyHoc = [0,0,0,0,3,0];
const active = false;

const width = 150;
const length = 50;

const tipDiameters = [
	15, //  Dexter Power 5908.A-A4-BIM
	30,
	32.55,
	51,
	102.8,
	width - 10
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
			width,
			length,
			height,
			floorHeight,
			moduleQtt: [1, 15],
			hoc: emptyHoc,
			moduleConfig: [
				[
					emptyHoc,
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					tipDiameterConfig[5],
					emptyHoc,
				]
				/*
				[
					tipDiameterConfig[0],
					tipDiameterConfig[3],
				],
				[
					tipDiameterConfig[1],
					tipDiameterConfig[4],
				],
				[
					tipDiameterConfig[2],
					tipDiameterConfig[4],
				],
				[
					tipDiameterConfig[3],
					tipDiameterConfig[3],
				],
				*/
			],
		},
	},
];
