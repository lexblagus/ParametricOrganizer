const faces = 360 / 10;
const size = 11;
const height = 22;
const floorHeight = 2.5;
const active = false;

module.exports = [
	{
		active,
		name: 'Batteries size AAA',
		params: {
			width: 100,
			length: 100,
			height,
			floorHeight,
			moduleQtt: [8, 8],
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
