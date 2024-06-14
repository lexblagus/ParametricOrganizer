const faces = 360 / 10;
const size = 7.1;
const holeDepth = 5 + (4.5 / 2); // 7.25
const floorHeight = 1;
const extensionIncrease = 30;
const active = false;

module.exports = [
	{
		active,
		path: 'tips-tools-chucks',
		name: '3D printer tips',
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
];
