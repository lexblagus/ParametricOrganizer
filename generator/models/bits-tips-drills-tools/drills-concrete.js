const faces = 360 / 10;
const gap = 0.4;
const height = 30;
const floorHeight = 1;
const depth = height - floorHeight;
const active = false;


const shanks = [
	8.92,   // head: 12.18, shank: 8.92, written: 12;
	7.39,   // head: 10.35, shank: 7.39, written: MTX10;
	7.14,   // head:  8.22, shank: 7.14, written: 8;
	6.28,   // head:  8.00, shank: 6.28;
	6.18,   // head:  7.88, shank: 6.18;
	4.55,   // head:  6.47, shank: 4.55, written: 1/4";
	5.62,   // head:  6.20, shank: 5.62, written: 6;
	5.45,   // head:  6.20, shank: 5.45, written: 6;
	5.58,   // head:  6.17, shank: 5.58, written: 6.0;
	5.45,   // head:  6.17, shank: 5.45, written: 6;
	4.47,   // head:  6.17, shank: 4.47, written: MTX6;
	5.45,   // head:  6.16, shank: 5.45, written: 15/64";
	5.55,   // head:  6.12, shank: 5.55;
	4.60,   // head:  5.16, shank: 4.60, written: 5";
];

const defaults = [
	10 + gap,
	10 + gap,
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

const drillsConcreteOrganizer = {
	active,
	name: 'Concrete drills',
	params: {
		width: 50,
		length: 50,
		height,
		floorHeight,
		moduleQtt: [4, 4],
		hoc: defaults,
		moduleConfig: [
			[
				holders[0],
				holders[1],
				holders[2],
				holders[3],
			],
			[
				holders[4],
				holders[5],
				holders[6],
				holders[7],
			],
			[
				holders[8],
				holders[9],
				holders[10],
				holders[11],
			],
			[
				holders[12],
				holders[13],
				[],
				[], 
			],
		],
	},
};


module.exports = [ drillsConcreteOrganizer ];
