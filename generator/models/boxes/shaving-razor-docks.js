const active = false;
const path = 'boxes/shaving-razor-docks';

const dimensions = {
	razors: [
		{
			active,
			name: 'Qshave Retro safety razor dock',
			head: {
				width: 51.7,
				length: 26.4,
			},
			handle: {
				height: 85, // 50,
				diameter: 15, // 13,
			},
		},
		{ 
			active,
			name: 'Gilette Mach 3 cartrige razor dock',
			head: {
				width: 41.5,
				length: 20,
			},
			handle: {
				height: 90,
				diameter: 12
			},
		},
	],
	clearance: {
		head: 5,
		handle: 2.5,
	},
	wall: 2.5,
};

module.exports = dimensions.razors.map(razor => ({
	active: razor.active,
	path: path,
	name: razor.name,
	params: {
		width: (
			(razor.head.width + dimensions.clearance.head) +
			( dimensions.wall * 2 )
		),
		length: (
			( (razor.head.length + dimensions.clearance.head) * 2 ) +
			( dimensions.wall * 3 )
		),
		height: razor.handle.height + dimensions.wall,
		floorHeight: dimensions.wall,
		moduleQtt: [1, 2],
		hoc: [0, 0, 0 ,0, 0, 0],
		moduleConfig: [
			[
				// Rinser sink
				[
					razor.head.width + dimensions.clearance.head,
					razor.head.length + dimensions.clearance.head,
					0 - razor.handle.height,
					(0 - razor.handle.height) * 0.33,
					4,
					0,
				],
				// Standup storage
				[
					razor.handle.diameter + dimensions.clearance.handle,
					razor.handle.diameter + dimensions.clearance.handle,
					0 - razor.handle.height,
					0,
					36,
					0
				],
			],
		],
		distributed: false,
	},
}));
