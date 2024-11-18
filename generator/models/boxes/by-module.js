const active = false;
const width = 15;
const length = 15;
const height = 260 / 2; // 48 full height
const spacing = 2;
const moduleQtt = [5, 5];
const floorHeight = 2;

module.exports = [
	{
		active,
		path: 'boxes/by-module',
		name: 'Incense 5×5',
		params: {
			width: (moduleQtt[0] * width) + ((moduleQtt[0] + 1) * spacing),
			length: (moduleQtt[1] * length) + ((moduleQtt[1] + 1) * spacing),
			height: height + floorHeight,
			floorHeight,
			moduleQtt,
			hoc: [
				width,
				length,
				0 - height,
				0,
				4,
				0
			],
		},
	},
];
