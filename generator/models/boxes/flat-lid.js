const active = false;

const dimensions = [70, 120, 50];
const lidHeight = 2.5;
const thickness = 2;
const gap = 0.2;
const path = 'boxes/flat-lid';

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
			width: dimensions[0],
			length: dimensions[1],
			height: lidHeight,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				dimensions[0] - ( thickness * 2 ) - ( gap * 2 ),
				dimensions[1] - ( thickness * 2 ) - ( gap * 2 ),
				thickness * 4,
				0,
				4,
				0
			],
		},
	},
];
