const active = true;

/*
// Microwave lamp mold
const wall = 2;
const width = 120;
const length = 20;
const height = 20;
const divisions = [1, 1];


// Bin 0 divider
const wall = 1.5;
const width = 85;
const length = 50;
const height = 25;
const divisions = [3, 1];

// Bin 0 divider (individual)
const wall = 1.5;
const width = 85 / 4;
const length = 50;
const height = 25;
const divisions = [1, 1];
const path = 'makeup/bin-dividers',
const name = 'Bin 1 4x1 individual',

*/

// Hard drive case
const wall = 2;
const width = 75 + (wall * 2);
const length = 120;
const height = 50;
const divisions = [1, 1];
const path = 'boxes';
const name = 'Simple box';

module.exports = [{
	active,
	path,
	name,
	params: {
		width,
		length,
		height,
		floorHeight: wall,
		moduleQtt: divisions,
		hoc: [
			(width / divisions[0]) - wall,
			(length / divisions[1]) - wall,
			0 - (height - (wall)),
			0, // increase
			4, // faces
			0, // rotation
		],
	},
}];
