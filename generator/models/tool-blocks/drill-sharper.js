const faces = 360 / 10;
const gap = 0.4;
const height = 15;
const floorHeight = 1;
const emptyHoc = [0,0,0,0,3,0];
const active = false;


const diam = 17.3;
const config = [
	diam,
	diam,
	9.8 - gap,
	0,
	faces,
	0
];


module.exports = [{
	active,
	name: 'Drill sharper',
	params: {
		width: 50 * 4,
		length: 50,
		height,
		floorHeight,
		moduleQtt: [4, 1],
		hoc: config,
	},
}];
