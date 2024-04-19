const active = false;

const width = 100;
const length = 100;
const height = 100;
const wall = 2;

const divisions = [
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
	[8, 8],
];

module.exports = divisions.map(division => ({
	active,
	name: `Makeup ${division[0]}x${division[1]}`,
	params: {
		width,
		length,
		height,
		floorHeight: wall,
		moduleQtt: division,
		hoc: [
			(width / division[0]) - wall,
			(length / division[1]) - wall,
			0 - (height - (wall)),
			0, // increase
			4, // faces
			0 // rotation
		],
	},
}));
