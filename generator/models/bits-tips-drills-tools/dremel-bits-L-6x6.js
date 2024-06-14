const faces = 360 / 10;
const gap = 0.4;
const height = 20; // 15, 20, 25, 30
const floorHeight = 1;
const depth = height - floorHeight;
const moduleQtt = [6, 6]; // actualy is 2x2 but more holes looks better
const active = false;


const shanks = {
	'L': 3.2,
	'M': 2.4,
	'S': 1.6,
	'XS': 0.8
};

const defaults = [
	shanks['L'] + gap,
	shanks['L'] + gap,
	0 - depth,
	0,
	faces,
	0
];

const holders = {};
Object.keys(shanks).map(size => {
	holders[size] = [
		shanks[size] + gap,
		shanks[size] + gap,
		0 - depth,
		0,
		faces,
		0
	]
});

const holderBlock = {
	active,
	path: 'bits-tips-drills-tools',
	name: 'Dremel bits large 6x6',
	params: {
		width: 50,
		length: 50,
		height: height,
		floorHeight,
		moduleQtt,
		hoc: defaults,
		moduleConfig: [],
	},
};


module.exports = [ holderBlock ];
