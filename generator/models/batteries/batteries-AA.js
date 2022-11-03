const faces = 360 / 10;
const size = 15.5;
const height = 50.5 / 2; // 50.5 full height
const spacing = 2.5;
const moduleQtt = [4, 4];
const floorHeight = 2.5;
const active = false;

module.exports = [
	{
		active,
		name: 'Batteries AA',
		params: {
			width: (moduleQtt[0] * size) + ((moduleQtt[0] + 1) * spacing),
			length: (moduleQtt[1] * size) + ((moduleQtt[1] + 1) * spacing),
			height: height + floorHeight,
			floorHeight,
			moduleQtt,
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
