const capHeight = 5;
const thickness = 1.5;
const gap = 0.5;
const dimensions = [
	52  + ( thickness * 2 ) + ( gap * 2 ),
	7 + ( thickness * 2 ) + ( gap * 2 ),
	62
];


module.exports = [
	{
		active: false,
		name: 'Mini remote control box',
		params: {
			width: dimensions[0],
			length: dimensions[1],
			height: dimensions[2],
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				dimensions[0] - ( thickness * 2 ),
				dimensions[1] - ( thickness * 2 ),
				0 - dimensions[2],
				0,
				4,
				0
			],
		},
	},
];
