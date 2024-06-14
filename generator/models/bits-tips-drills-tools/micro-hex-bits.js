const faces = 360 / 10;
const size = 4.7;
const holeDepth = 18;
const floorHeight = 1;
const extensionIncrease = 30;
const active = false;

module.exports = [
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Micro hexagonal bits organizer default',
		params: {
			width: 50,
			length: 50,
			height: 20, // 15, 20, 25
			floorHeight: 1,
			moduleQtt: [5, 5],
			hoc: [
				size,
				size,
				0 - holeDepth,
				0,
				faces,
				0
			],
		},
	},
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Micro hexagonal bits organizer with extender',
		params: {
			width: 50,
			length: 50,
			height: 20, // 15, 20, 25
			floorHeight,
			moduleQtt: [5, 5],
			hoc: [
				size,
				size,
				0 - holeDepth,
				0,
				faces,
				0
			],
			moduleConfig: [
				[
					[ 
						size,
						size,
						( 0 - extensionIncrease - 18 ),
						extensionIncrease,
						faces,
						0
					]
				]
			],
		},
	},
];
