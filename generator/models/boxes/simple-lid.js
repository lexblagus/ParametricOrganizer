const dimensions = [70, 120, 100];
const lidHeight = 20;
const thickness = 2;
const gap = 0.2;
const active = false;
const path = 'boxes/simple-lid';

module.exports = [
	{
		active,
		path,
		name: 'Box',
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
	{
		active,
		path,
		name: 'Lid',
		params: {
			width: dimensions[0] + ( gap * 2 ) + ( thickness * 2 ),
			length: dimensions[1] + ( gap * 2 ) + ( thickness * 2 ),
			height: lidHeight,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				dimensions[0] + ( gap * 2 ),
				dimensions[1] + ( gap * 2 ),
				0 - lidHeight,
				0,
				4,
				0
			],
		},
	},
];
