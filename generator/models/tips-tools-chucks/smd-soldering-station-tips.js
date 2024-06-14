const faces = 360 / 10;

const chanferSize = 20.25;
const chanferHeight = 10;

const holeSize = 24; // previouslly: 23.4
const holeDepth = 12.75;

const floorHeight = 1;
const active = false;

module.exports = [
	{
		active,
		path: 'tips-tools-chucks',
		name: 'SMD soldering station tips positive',
		params: {
			width: 50,
			length: 50,
			height: 5, // 15, 20, 25
			floorHeight: 1,
			moduleQtt: [2, 2],
			hoc: [
				chanferSize,
				chanferSize,
				chanferHeight,
				0,
				faces,
				0
			],
		},
	},
	{
		active,
		path: 'tips-tools-chucks',
		name: 'SMD soldering station tips negative',
		params: {
			width: 50,
			length: 50,
			height: 15, // 15, 20, 25
			floorHeight: 1,
			moduleQtt: [2, 2],
			hoc: [
				holeSize,
				holeSize,
				0 - holeDepth,
				0,
				faces,
				0
			],
		},
	},
];
