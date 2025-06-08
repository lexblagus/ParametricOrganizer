const faces = 360 / 10;
const floorHeight = 1;
const active = false;
const gap = 0.5;
const surface = 10; // how much we want to go show

const heights = {
	tall: 27.5,
	low: 20
};

const depths = {
	tall: 0 - heights.tall + surface,
	low: 0 - heights.low + surface
};

const sockets = {
	'empty': [
		20,
		20,
		depths.tall,
		0,
		4,
		0
	],
	'17mm': [
		23.5 + gap,
		23.5 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	// missing 16 and 15
	'14mm': [
		20 + gap,
		20 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'13mm': [
		18 + gap,
		18 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'12mm A': [
		17 + gap,
		17 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'12mm B': [
		17 + gap,
		17 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'11mm A': [
		17 + gap,
		17 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'11mm B': [
		17 + gap,
		17 + gap,
		depths.low,
		0,
		faces,
		0
	],

	'10mm A': [
		17 + gap,
		17 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'10mm B': [
		14 + gap,
		14 + gap,
		depths.low,
		0,
		faces,
		0
	],

	'9mm': [
		13 + gap,
		13 + gap,
		depths.low,
		0,
		faces,
		0
	],

	'8mm': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'7mm': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'6mm': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'5mm': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'4mm': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],

	'11/16"': [
		23.5 + gap,
		23.5 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'5/8"': [
		21.4 + gap,
		21.4 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'9/16"': [
		20 + gap,
		20 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'1/2" A': [
		17.7 + gap,
		17.7 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'1/2" B': [
		17.7 + gap,
		17.7 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'7/16" A': [
		16.7 + gap,
		16.7 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'7/16" B': [
		16 + gap,
		16 + gap,
		depths.low,
		0,
		faces,
		0
	],

	'3/8" A': [
		16.7 + gap,
		16.7 + gap,
		depths.tall,
		0,
		faces,
		0
	],
	'3/8" B': [
		14 + gap,
		14 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'5/16"': [
		14 + gap,
		14 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'1/4"': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'7/32"': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
	'3/16"': [
		12 + gap,
		12 + gap,
		depths.low,
		0,
		faces,
		0
	],
};

const qtt = [4, 1];

module.exports = [
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Ratchet wrench sockets 17-11mm',
		params: {
			width: qtt[0] * 50,
			length: qtt[1] * 50,
			height: heights.tall + floorHeight - surface,
			floorHeight,
			moduleQtt: [qtt[0] * 2, qtt[1] * 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				/*
				// order
				[
					[], // 2
					[], // 1
				],
				[
					[], // 4
					[], // 3
				],
				*/

				[
					sockets['empty'],
					sockets['17mm'],
				],
				[
					sockets['empty'],
					sockets['empty'],
				],
				[
					sockets['empty'],
					sockets['empty'],
				],
				[
					sockets['empty'],
					sockets['14mm'],
				],
				
				[
					sockets['empty'],
					sockets['13mm'],
				],
				[
					sockets['12mm B'],
					sockets['12mm A'],
				],

				[
					sockets['12mm B'],
					sockets['12mm A'],
				],
				[
					sockets['11mm B'],
					sockets['11mm A'],
				],
			],
		},
	},
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Ratchet wrench sockets 10-4mm',
		params: {
			width: qtt[0] * 50,
			length: qtt[1] * 50,
			height: heights.tall + floorHeight - surface,
			floorHeight,
			moduleQtt: [qtt[0] * 2, qtt[1] * 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					sockets['10mm B'],
					sockets['10mm A'],
				],
				[
					sockets['10mm B'],
					sockets['10mm B'],
				],

				[
					sockets['9mm'],
					sockets['9mm'],
				],
				[
					sockets['8mm'],
					sockets['8mm'],
				],

				[
					sockets['7mm'],
					sockets['7mm'],
				],
				[
					sockets['6mm'],
					sockets['6mm'],
				],

				[
					sockets['5mm'],
					sockets['5mm'],
				],
				[
					sockets['empty'],
					sockets['4mm'],
				],
			],
		},
	},
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Ratchet wrench sockets 11-16 to 7-16 inches',
		params: {
			width: qtt[0] * 50,
			length: qtt[1] * 50,
			height: heights.tall + floorHeight - surface,
			floorHeight,
			moduleQtt: [qtt[0] * 2, qtt[1] * 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					sockets['empty'],
					sockets['11/16"'],
				],
				[
					sockets['empty'],
					sockets['5/8"'],
				],

				[
					sockets['empty'],
					sockets['9/16"'],
				],
				[
					sockets['1/2" B'],
					sockets['1/2" A'],
				],

				[
					sockets['7/16" B'],
					sockets['7/16" A'],
				],
				[
					sockets['empty'],
					sockets['empty'],
				],

				[
					sockets['empty'],
					sockets['empty'],
				],
				[
					sockets['empty'],
					sockets['empty'],
				],
			],
		},
	},
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Ratchet wrench sockets 3-8 to 3-16 inches',
		params: {
			width: qtt[0] * 50,
			length: qtt[1] * 50,
			height: heights.tall + floorHeight - surface,
			floorHeight,
			moduleQtt: [qtt[0] * 2, qtt[1] * 2],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					sockets['empty'],
					sockets['3/8" A'],
				],
				[
					sockets['3/8" B'],
					sockets['3/8" B'],
				],

				[
					sockets['empty'],
					sockets['5/16"'],
				],
				[
					sockets['empty'],
					sockets['1/4"'],
				],

				[
					sockets['empty'],
					sockets['7/32"'],
				],
				[
					sockets['empty'],
					sockets['3/16"'],
				],

				[
					sockets['empty'],
					sockets['empty'],
				],
				[
					sockets['empty'],
					sockets['empty'],
				],
			],
		},
	},
];
