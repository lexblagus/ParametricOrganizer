const active = false;
const path = 'boxes/digital-storage';
const name = 'Disk drives desktop';

const width = 101.6;
const length = 25.4;
const height = 146 / 2;
const spacing = 2.5;
const walls = 1.5;
const moduleQtt = [1, 7];
const floorHeight = 1.5;

module.exports = [
	{
		active,
		path,
		name,
		params: {
			width: (moduleQtt[0] * (width + spacing)) + (walls * (moduleQtt[0] + 1)),
			length: (moduleQtt[1] * (length + spacing)) + (walls * (moduleQtt[1] + 1)),
			height: height + floorHeight,
			floorHeight,
			moduleQtt,
			hoc: [
				width + spacing,
				length + spacing,
				0 - height,
				0,
				4,
				0
			],
		},
	},
];
