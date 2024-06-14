const faces = 360 / 10;
const gap = 0.4;
const height = 30;
const floorHeight = 1;
const depth = height - floorHeight;
const active = false;




const holders = {
	'default': [
		8 + gap,
		8 + gap,
		0 - depth,
		0,
		faces,
		0
	],
	'7/8': [
		8 + gap,
		8 + gap,
		0 - depth - ( 5 * floorHeight ),
		( 5 * floorHeight ),
		faces,
		0
	],
	'1/2 A': [
		7 + gap,
		7 + gap,
		0 - depth - ( 4 * floorHeight ),
		( 4 * floorHeight ),
		faces,
		0
	],
	'1/2 B': [
		6.44 + gap,
		6.44 + gap,
		0 - depth - ( 3 * floorHeight ),
		( 3 * floorHeight ),
		faces,
		0
	],
	'3/8': [
		6.60 + gap,
		6.60 + gap,
		0 - depth - ( 2 * floorHeight ),
		( 2 * floorHeight ),
		faces,
		0
	],
	'1/4': [
		5.1 + gap,
		5.1 + gap,
		0 - depth - ( 1 * floorHeight ),
		( 1 * floorHeight ),
		faces,
		0
	],
};


const drillsWoodWideOrganizer = {
	active,
	path: 'bits-tips-drills-tools',
	name: 'Drills wood hex',
	params: {
		width: 50,
		length: 50,
		height,
		floorHeight,
		moduleQtt: [5, 5],
		hoc: holders.default,
		moduleConfig: [
			[
				[], [], [], [], [],
			],
			[
				[], [], [], [], [], 
			],
			[
				holders['7/8'],
				holders['1/2 A'],
				holders['1/2 B'],
				holders['3/8'], 
				holders['1/4'],
			],
			[
				[], [], [], [], [],
			],
			[
				[], [], [], [], [],
			],
		],
	},
};




module.exports = [ drillsWoodWideOrganizer ];
