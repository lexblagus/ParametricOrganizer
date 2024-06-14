const faces = 360 / 10;
const size = 7.5; // 4.7 for micro
const holeDepth = 18;
const floorHeight = 1;
const active = false;

module.exports = [
	{
		active,
		path: 'bits-tips-drills-tools',
		name: 'Hexagonal bits organizer 1x1',
		params: {
			width: 50,
			length: 50,
			height: 15, // 15, 20, 25
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
		name: 'Hexagonal bits organizer 1x2',
		params: {
			width: 2 * 50,
			length: 50,
			height: 15, // 15, 20, 25
			floorHeight: 1,
			moduleQtt: [2 * 5, 5],
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
];
