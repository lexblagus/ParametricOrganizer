const active = false;

const wall = 2;

const divisions1x1 = [
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
];

const divisions1x2 = [
	[1, 1], [1, 2], [1, 3], [1, 4],
	[1, 1], [2, 1], [3, 1], 
	[2, 2], [2, 4], 
	[3, 2], [3, 4], [3, 6], 
	[4, 1], [4, 2], [4, 4], [4, 8],
	[5, 1], [5, 2], [5, 3], [5, 5], [5, 10],
	[6, 1], [6, 2], [6, 3], [6, 6], [6, 12],
	[7, 1], [7, 2], [7, 3], [7, 7], [7, 14],
	[8, 1], [8, 2], [8, 4], [8, 8], [8, 16],
];

const sizes = [
	{
		width: 50,
		length: 50,
		divisions: divisions1x1,
	},
	{
		width: 100,
		length: 100,
		divisions: divisions1x1,
	},
	{
		width: 150,
		length: 150,
		divisions: divisions1x1,
	},
	{
		width: 200,
		length: 200,
		divisions: divisions1x1,
	},
	{
		width: 50,
		length: 100,
		divisions: divisions1x2,
	},
	{
		width: 100,
		length: 200,
		divisions: divisions1x2,
	},
];

const heights = [25, 50, 75, 100];

module.exports = sizes.map(size => heights.map(height => size.divisions.map(division => ({
	active,
	name: `Makeup ${size.width}×${size.length}×${height} ${division[0]}×${division[1]}`,
	params: {
		width: size.width,
		length: size.length,
		height,
		floorHeight: wall,
		moduleQtt: division,
		hoc: [
			(size.width / division[0]) - wall,
			(size.length / division[1]) - wall,
			0 - (height - (wall)),
			0, // increase
			4, // faces
			0 // rotation
		],
	},
})))).flat(3); // or `Infinity` if more maps are added
