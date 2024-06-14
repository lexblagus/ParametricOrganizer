const faces = 360 / 10;
const gap = 0.4;
const height = 20;
const floorHeight = 1;
const emptyHoc = [0,0,0,0,3,0];
const active = false;

const adapterSmall = [
	9.9 + gap,
	0 - 13,
];
const adapterBig = [
	12.7 + gap, 
	( 0 - 7.20 ) + adapterSmall[1],
];

module.exports = [{
	active,
	path: 'tips-tools-chucks',
	name: 'Router adapters',
	params: {
		width: 50,
		length: 50,
		height,
		floorHeight,
		moduleQtt: [1, 2],
		hoc: emptyHoc,
		moduleConfig: [
			[
				[
					adapterSmall[0],
					adapterSmall[0],
					adapterSmall[1],
					0,
					faces,
					0
				],
				[
					adapterBig[0],
					adapterBig[0],
					adapterBig[1],
					0,
					faces,
					0
				],
			]
		],
	},
}];
