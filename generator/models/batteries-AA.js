const faces = 360 / 10;
const size = 15; // 11 for AAA
const height = 25;
const floorHeight = 2.5;
const active = true;

module.exports = [
	{
		active,
		name: 'Batteries size AA',
		params: {
			width: 100,
			length: 100,
			height,
			floorHeight,
			moduleQtt: [6, 6],
			hoc: [
				size,
				size,
				0 - height,
				0,
				faces,
				0
			],
		},
	},
];
