const faces = 360 / 10;
const floorHeight = 1;
const active = false;
const gap = 0.4;

const tipsSizes = {
	'Big blower': [
		16, // width
		16.5, // length
		12.2, // depth
	],
	'Scratcher': [
		11.6, // diameter
		8, // depth
	],
	'Tall knife': [
		8.5, // diameter
		11, // depth
	],
	'Precision knife': [
		9, // diameter
		10, // depth
	],
	'Screw adapter': [
		10.5, // diameter
		12, // depth
	],
	'Micro blower': [
		8.5, // diameter
		7.3, // depth
	],
	'Soldering tip': [
		8.6, // diameter
		7.6, // depth
	],
};

const tips = {
	'Big blower': [
		tipsSizes['Big blower'][0] + gap,
		tipsSizes['Big blower'][1] + gap,
		0 - tipsSizes['Big blower'][2],
		0,
		faces,
		0
	],
	'Scratcher': [
		tipsSizes['Scratcher'][0] + gap,
		tipsSizes['Scratcher'][0] + gap,
		0 - tipsSizes['Scratcher'][1],
		0,
		faces,
		0
	],
	'Tall knife': [
		tipsSizes['Tall knife'][0] + gap,
		tipsSizes['Tall knife'][0] + gap,
		0 - tipsSizes['Tall knife'][1],
		0,
		faces,
		0
	],
	'Precision knife': [
		tipsSizes['Precision knife'][0] + gap,
		tipsSizes['Precision knife'][0] + gap,
		0 - tipsSizes['Precision knife'][1],
		0,
		faces,
		0
	],
	'Screw adapter': [
		tipsSizes['Screw adapter'][0] + gap,
		tipsSizes['Screw adapter'][0] + gap,
		0 - tipsSizes['Screw adapter'][1],
		0,
		faces,
		0
	],
	'Micro blower': [
		tipsSizes['Micro blower'][0] + gap,
		tipsSizes['Micro blower'][0] + gap,
		0 - tipsSizes['Micro blower'][1],
		0,
		faces,
		0
	],
	'Soldering tip': [
		tipsSizes['Soldering tip'][0] + gap,
		tipsSizes['Soldering tip'][0] + gap,
		0 - tipsSizes['Soldering tip'][1],
		0,
		faces,
		0
	],
};


module.exports = [
	{
		active,
		name: 'Dremel Versa tips',
		params: {
			width: 50,
			length: 100,
			height: 20, // 15, 20, 25
			floorHeight: 1,
			moduleQtt: [2, 6],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					[],
					tips['Big blower'],
					[],
					tips['Tall knife'],
					tips['Precision knife'],
					tips['Soldering tip'],
				],
				[
					[],
					tips['Scratcher'],
					[],
					tips['Screw adapter'],
					tips['Micro blower'],
					[],
				],
			],
		},
	},
];
