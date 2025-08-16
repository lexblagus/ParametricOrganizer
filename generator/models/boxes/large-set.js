const active = false;
const path = 'boxes/large-set';
const wall = 2;

const divisions = {
	'1×1': [
		[1, 1],
		[1, 2],
		[1, 3],
		[1, 4],
		[2, 2],
		[2, 4],
		[3, 3],
		[4, 4],
		[5, 5],
		[6, 6],
		[7, 7],
		[8, 8],
	],
	'1×1.5': [ // 50×75
		[1, 1], [1, 2], [1, 3],
		[2, 1], [2, 2], [2, 3],
		[3, 1], [3, 2], [3, 3], [3, 4],
	],
	'1×2': [ // 50×100, 100×200
		[1, 1], [1, 2], [1, 3], [1, 4],
		[2, 1], [2, 2], [2, 4],
		[3, 1], [3, 2], [3, 3], [3, 4], [3, 6],
		[4, 1], [4, 2], [4, 4], [4, 8],
		[5, 1], [5, 2], [5, 3], [5, 5], [5, 10],
		[6, 1], [6, 2], [6, 3], [6, 6], [6, 12],
		[7, 1], [7, 2], [7, 3], [7, 7], [7, 14],
		[8, 1], [8, 2], [8, 4], [8, 8], [8, 16],
	],
	'1×3': [ // 50×150
		[1, 1], [1, 2], [1, 3],
		[2, 1], [2, 2], [2, 3], [2, 6],
		[3, 1], [3, 2], [3, 3], [3, 6],
		[4, (3 * 4)],
		[5, (3 * 5)],
		[6, (3 * 6)],
		[7, (3 * 7)],
		[8, (3 * 8)],
	],
	'1×4': [ // 50×200
		[1, 1], [1, 2], [1, 4], [1, 8],
		[2, 1], [2, 2], [2, 4], [2, 8],
		[3, 1], [3, 2], [3, 4], [3, 8], [3, 12],
		[4, 1], [4, 2], [4, 4], [4, 8], [4, 16],
		[5, 1], [5, 2], [5, 4], [5, 8], [5, 20],
		[6, 1], [6, 2], [6, 4], [6, 8], [6, 24],
		[7, 1], [7, 2], [7, 4], [7, 8], [7, 28],
		[8, 1], [8, 2], [8, 4], [8, 8], [8, 32],
	],
	'2×3': [ // 100×150
		[1, 1], [1, 2], [1, 3], [1, 6], [1, 12],
		[2, 1], [2, 2], [2, 3], [2, 6], [2, 12],
		[4, 1], [4, 2], [4, 3], [4, 6], [4, 12],
		[8, 1], [8, 2], [8, 3], [8, 6], [8, 12],
	],
	'3×4': [ // 150×200
		[1, 1], [1, 2], [1, 4], [1, 8], [1, 12], [1, 16],
		[3, 1], [3, 2], [3, 4], [3, 8], [3, 12], [3, 16],
		[6, 1], [6, 2], [6, 4], [6, 8], [6, 12], [6, 16],
		[12, 1], [12, 2], [12, 4], [12, 8], [12, 12], [12, 16],
	],
};

const heights = [
	25,
	50,
	75,
	100,
	150,
	200
];

const variations = [
	{
		active,
		width: 50,
		length: 50,
		divisions: divisions['1×1'],
	},
	{
		active,
		width: 50,
		length: 75,
		divisions: divisions['1×1.5'],
	},
	{
		active,
		width: 50,
		length: 100,
		divisions: divisions['1×2'],
	},
	{
		active,
		width: 50,
		length: 150,
		divisions: divisions['1×3'],
	},
	{
		active,
		width: 50,
		length: 200,
		divisions: divisions['1×4'],
	},
	{
		active,
		width: 100,
		length: 100,
		divisions: divisions['1×1'],
	},
	{
		active,
		width: 100,
		length: 150,
		divisions: divisions['2×3'],
	},
	{
		active,
		width: 100,
		length: 200,
		divisions: divisions['1×2'],
	},
	{
		active,
		width: 150,
		length: 150,
		divisions: divisions['1×1'],
	},
	{
		active,
		width: 150,
		length: 200,
		divisions: divisions['3×4'],
	},
	{
		active,
		width: 200,
		length: 200,
		divisions: divisions['1×1'],
	},
];

module.exports = variations.map(
	variation => heights.map(
		height => variation.divisions.map(
			division => ({
				active: variation.active,
				path: `${path}/${variation.width}×${variation.length}×${height}`,
				name: `${variation.width}×${variation.length}×${height} ${division[0]}×${division[1]}`,
				params: {
					width: variation.width,
					length: variation.length,
					height,
					floorHeight: wall,
					moduleQtt: division,
					hoc: [
						(variation.width / division[0]) - wall,
						(variation.length / division[1]) - wall,
						0 - (height - (wall)),
						0, // increase
						4, // faces
						0, // rotation
					],
					distributed: true,
				},
			})
		)
	)
).flat(3); // or `Infinity` if more maps are added
