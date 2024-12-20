const faces = 360 / 10;
const floorHeight = 1;
const active = false;
const gap = 0.4;
const width = 50;
const length = 50;
const height = 15; // 15, 20, 25

const tipsSizes = {
	'Main head': [
		14.15 + 0.3 , // width
		height - floorHeight, // depth
	],
	'Big blower': [
		18.6 + 0.3 , // width
		height - floorHeight, // depth
	],
	'Scratcher': [
		11.4 + 0.3, // diameter
		9.9 + 8, // depth
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
	'Tall knife': [
		8.5, // diameter
		11, // depth
	],
	'Precision knife': [
		9, // diameter
		10, // depth
	],
	'Extended tips': [
		8.5, // diameter
		7.6, // depth
	],
	'Container': [
		(width / 4) - floorHeight,
		(length / 4) - floorHeight,
		0 - height + floorHeight,
		4, // square
	],
};

const tips = {
	'Main head': [
		tipsSizes['Main head'][0] + gap,
		tipsSizes['Main head'][0] + gap,
		0 - tipsSizes['Main head'][1],
		0,
		faces,
		0
	],
	'Big blower': [
		tipsSizes['Big blower'][0] + gap,
		tipsSizes['Big blower'][0] + gap,
		0 - tipsSizes['Big blower'][1],
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
	'Screw adapter': [
		tipsSizes['Screw adapter'][0] + gap,
		tipsSizes['Screw adapter'][0] + gap,
		0 - tipsSizes['Screw adapter'][1],
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
	'Extended tips': [
		tipsSizes['Soldering tip'][0] + gap,
		tipsSizes['Soldering tip'][0] + gap,
		0 - tipsSizes['Soldering tip'][1],
		0,
		faces,
		0
	],
	'Container': [
		tipsSizes['Container'][0],
		tipsSizes['Container'][1],
		tipsSizes['Container'][2],
		0,
		tipsSizes['Container'][3],
		0
	],
};


module.exports = [
	{
		active,
		path: 'tips-tools-chucks',
		name: 'Dremel Versatip main head',
		params: {
			width,
			length,
			height,
			floorHeight: 1,
			moduleQtt: [2, 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					tips['Main head'],
					tips['Main head'],
				],
				[
					tips['Main head'],
					tips['Main head'],
				],
			],
		},
	},
	{
		active,
		path: 'tips-tools-chucks',
		name: 'Dremel Versatip big blower attachments',
		params: {
			width,
			length,
			height,
			floorHeight: 1,
			moduleQtt: [2, 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					tips['Big blower'],
					tips['Big blower'],
				],
				[
					tips['Big blower'],
					tips['Big blower'],
				],
			],
		},
	},
	{
		active,
		path: 'tips-tools-chucks',
		name: 'Dremel Versatip scratcher attachments',
		params: {
			width,
			length,
			height,
			floorHeight: 1,
			moduleQtt: [2, 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					tips['Scratcher'],
					tips['Scratcher'],
				],
				[
					tips['Scratcher'],
					tips['Scratcher'],
				],
			],
		},
	},
	{
		active,
		path: 'tips-tools-chucks',
		name: 'Dremel Versa tips 1',
		params: {
			width,
			length,
			height,
			floorHeight: 1,
			moduleQtt: [4, 4],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					tips['Tall knife'],
					tips['Tall knife'],
					tips['Tall knife'],
					tips['Tall knife'],
				],[
					tips['Precision knife'],
					tips['Precision knife'],
					tips['Precision knife'],
					tips['Precision knife'],
				],[
					tips['Extended tips'],
					tips['Extended tips'],
					tips['Extended tips'],
					tips['Extended tips'],
				],[
					tips['Container'],
					tips['Container'],
					tips['Container'],
					tips['Container'],
				],
			],
		},
	},
	{
		active,
		path: 'tips-tools-chucks',
		name: 'Dremel Versa tips 2',
		params: {
			width,
			length,
			height,
			floorHeight: 1,
			moduleQtt: [4, 4],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
[
					tips['Screw adapter'],
					tips['Screw adapter'],
					tips['Screw adapter'],
					tips['Screw adapter'],
				],[
					tips['Micro blower'],
					tips['Micro blower'],
					tips['Micro blower'],
					tips['Micro blower'],
				],[
					tips['Soldering tip'],
					tips['Soldering tip'],
					tips['Soldering tip'],
					tips['Soldering tip'],
				],[
					tips['Container'],
					tips['Container'],
					tips['Container'],
					tips['Container'],
				],
			],
		},
	},
];
