const faces = 360 / 10;
const size = 11.5;
const height = 44.5 / 2; // 44.5 full height
const spacing = 2.5;
const moduleQtt = [4, 4];
const floorHeight = 2.5;
const active = true;

module.exports = [
	{
		active,
		name: 'Batteries AAA',
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
