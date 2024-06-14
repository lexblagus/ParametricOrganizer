const faces = 360 / 10;
const gap = 0.4;
const height = 20; // 15, 20, 25, 30
const floorHeight = 1;
const depth = height - floorHeight;
const moduleQtt = [5, 5];
const active = false;


const shanks = [
	3.2,
	3.2,
	3.2,
	3.175,
	3.175,
	3.175,
	3.175,
	3.175,
	3,
	3,
	2.77,
	2.5,
	2.5,
	2.45,
	2,
	2,
	1.5,
	1.5,
	1,
	1,
];

const defaults = [
	8, // 10 + gap,
	8, // 10 + gap,
	0 - depth,
	0,
	faces,
	0
];

const holders = shanks.map(d => ([
	d + gap,
	d + gap,
	0 - depth,
	0, // 2.5,
	faces,
	0
]));

const drillHolder = {
	active,
	path: 'bits-tips-drills-tools',
	name: 'Steel drills 03',
	params: {
		width: 50,
		length: 50,
		height: height,
		floorHeight,
		moduleQtt,
		hoc: defaults,
		moduleConfig: [...Array(  moduleQtt[0]  )].map(
			(x, xi) => [...Array(  moduleQtt[1]  )].map(
				(y, yi) => holders[
					xi + ( yi * ( moduleQtt[0] )  )
				] || defaults
			).reverse()
		),
	},
};


module.exports = [ drillHolder ];
