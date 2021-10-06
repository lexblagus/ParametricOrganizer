const faces = 360 / 10;
const gap = 0.4;
const height = 20; // 15, 20, 25, 30
const floorHeight = 1;
const depth = height - floorHeight;
const moduleQtt = [4, 4];
const active = false;


const shanks = [
	5,
	5,
	4.8,
	4.76,

	4.76,
	4.5,
	4.5,
	4,

	4,
	3.96,
	3.5,
	3.5,
];

const defaults = [
	10, // 10 + gap,
	10, // 10 + gap,
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
	name: 'Steel drills 02',
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
