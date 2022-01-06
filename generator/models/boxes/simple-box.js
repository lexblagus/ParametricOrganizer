const dimensions = [112, 52, 34];
const capStyle = 'cover'; // 'cover' or 'chanfer'
const capHeight = 5;
const thickness = 1;
const gap = 0.2;
const active = true;


module.exports = [
	{
		active,
		name: 'Simple box',
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
		active: capStyle === 'chanfer',
		name: 'Simple box chanfer cap',
		params: {
			width: dimensions[0],
			length: dimensions[1],
			height: capHeight,
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
	{
		active: capStyle === 'cover',
		name: 'Simple box cover cap',
		params: {
			width: dimensions[0] + ( gap * 2 ) + ( thickness * 2 ),
			length: dimensions[1] + ( gap * 2 ) + ( thickness * 2 ),
			height: capHeight,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				dimensions[0] + ( gap * 2 ),
				dimensions[1] + ( gap * 2 ),
				0 - capHeight,
				0,
				4,
				0
			],
		},
	},
];
