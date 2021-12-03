const faces = 360 / 10;
const gap = 0.4;
const height = 20;
const floorHeight = 1;
const emptyHoc = [0,0,0,0,3,0];
const active = false;

const chucksMeasurements = {
	'outer shell': [
		10.5, // diamater
		10, // depth
	],
	'jaw': [
		4.3, // diamater
		10, // depth
	],
};

const chucksConfiguration = {
	'outer shell': [
		chucksMeasurements['outer shell'][0] + gap,
		chucksMeasurements['outer shell'][0] + gap,
		0 - chucksMeasurements['outer shell'][1],
		0,
		faces,
		0
	],
	'jaw': [
		chucksMeasurements['jaw'][0] + gap,
		chucksMeasurements['jaw'][0] + gap,
		0 - chucksMeasurements['jaw'][1],
		0,
		faces,
		0
	],
};

module.exports = [{
	active,
	name: 'Dremel chucks',
	params: {
		width: 50,
		length: 50,
		height,
		floorHeight,
		moduleQtt: [4, 4],
		hoc: chucksConfiguration['jaw'],
		moduleConfig: [
			[
				chucksConfiguration['outer shell'],
				chucksConfiguration['outer shell'],
				chucksConfiguration['outer shell'],
				chucksConfiguration['outer shell'],
			],
			[
				chucksConfiguration['outer shell'],
				chucksConfiguration['outer shell'],
				chucksConfiguration['outer shell'],
				chucksConfiguration['outer shell'],
			],
		],
	},
}];
