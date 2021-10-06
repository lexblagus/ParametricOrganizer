const faces = 360 / 10;
const size = 23 + 0.4;
const holeDepth = 12.75;
const floorHeight = 1;
const active = false;

module.exports = [
	{
		active,
		name: 'SMD soldering station tips',
		params: {
			width: 50,
			length: 50,
			height: 15, // 15, 20, 25
			floorHeight: 1,
			moduleQtt: [2, 2],
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
