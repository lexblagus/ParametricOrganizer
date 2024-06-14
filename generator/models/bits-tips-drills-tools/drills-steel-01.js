const faces = 360 / 10;
const gap = 0.4;
const height = 30; // 15, 20, 25, 30
const floorHeight = 1;
const depth = height - floorHeight;
const moduleQtt = [3, 3];
const active = false;


const shanks = [
	10,
	9,
	9,

	6.5,
	6.35,
	6,

	5.95,
	5.5,
];

const defaults = [
	12, // 10 + gap,
	12, // 10 + gap,
	0 - depth,
	0,
	faces,
	0
];

const holders = shanks.map( d  => ([
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
	name: 'Steel drills 01',
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
