const width = 27;
const length = 17;
const height = 48 / 2; // 48 full height
const spacing = 2.5;
const moduleQtt = [2, 2];
const floorHeight = 2.5;
const active = false;

module.exports = [
	{
		active,
		path: 'batteries',
		name: 'Batteries 9V',
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
