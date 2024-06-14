const active = false;


const development = [
	{
		active,
		path: 'development',
		name: 'Development model 1 simple box',
		params: {
			width: 100,
			length: 100,
			height: 25,
			floorHeight: 2.5,
			moduleQtt: [1, 1],
			hoc: [ 90, 90, -25, 0, 4, 0 ],
		},
	},
	{
		active,
		path: 'development',
		name: 'Development model 2 box 2x2 one shallow',
		params: {
			width: 100,
			length: 100,
			height: 25,
			floorHeight: 2.5,
			moduleQtt: [2, 2],
			hoc: [ 47.5, 47.5, -25, 0, 4, 0 ],
			moduleConfig: [ [ [ 48, 48, -5 ] ] ],
		},
	},
	{
		active,
		path: 'development',
		name: 'Development model 3 default hole one chanfer',
		params: {
			width: 75,
			length: 75,
			height: 25,
			floorHeight: 2.5,
			moduleQtt: [3, 3],
			hoc: [ 20, 20, -5, 0, 4, 0 ],
			moduleConfig: [ false, [ false, [ 15, 15, 10, 25, 4, 0 ] ] ],
		},
	},
	{
		active,
		path: 'development',
		name: 'Development model 4 two consecutve holes',
		params: {
			width: 100,
			length: 100,
			height: 50,
			floorHeight: 2.5,
			moduleQtt: [3, 3],
			hoc: [0,0,0,0,3,0],
			moduleConfig: [
				[
					[],
					[],
					[],
				],
				[
					[],
					[ 30, 30, -10, -15, (360/10), 0 ],
					[],
				],
				[
					[],
					[],
					[],
				],
			]
		},
	},
	{
		active,
		path: 'development',
		name: 'Development model 5 examples',
		params: {
			width: 100,
			length: 100,
			height: 10,
			floorHeight: 1,
			moduleQtt: [10, 10],
			hoc: [ 10, 10, -10, -10, 4, 0 ],
			moduleConfig: [
				// Basic forms negative
				[
					[ 10, 10, -2.5, 0, 3, 0 ],
					[ 10, 10, -2.5, 0, 4, 0 ],
					[ 10, 10, -2.5, 0, 5, 0 ],
					[ 10, 10, -2.5, 0, 6, 0 ],
					[ 10, 10, -2.5, 0, 7, 0 ],
					[ 10, 10, -2.5, 0, 8, 0 ],
					[ 10, 10, -2.5, 0, 9, 0 ],
					[ 10, 10, -2.5, 0, 10, 0 ],
					[ 10, 10, -2.5, 0, 11, 0 ],
				],
				// Basic forms positive
				[
					[ 10, 10, 2.5, 0, 3, 0 ],
					[ 10, 10, 2.5, 0, 4, 0 ],
					[ 10, 10, 2.5, 0, 5, 0 ],
					[ 10, 10, 2.5, 0, 6, 0 ],
					[ 10, 10, 2.5, 0, 7, 0 ],
					[ 10, 10, 2.5, 0, 8, 0 ],
					[ 10, 10, 2.5, 0, 9, 0 ],
					[ 10, 10, 2.5, 0, 10, 0 ],
					[ 10, 10, 2.5, 0, 11, 0 ],
				],
				// Rectangles and squares, hoc and base only
				[
					[  1, 10, -2.5, 0, 4, 0 ],
					[  2,  9, -2.5, 0, 4, 0 ],
					[  3,  8, -2.5, 0, 4, 0 ],
					[  4,  7, -2.5, 0, 4, 0 ],
					[  5,  6, -2.5, 0, 4, 0 ],
					[  6,  5, -2.5, 0, 4, 0 ],
					[  7,  4, -2.5, 0, 4, 0 ],
					[  8,  3, -2.5, 0, 4, 0 ],
					[  9,  2, -2.5, 0, 4, 0 ],
					[ 10,  1, -2.5, 0, 4, 0 ],
				],
				[
					[ 10,  1, 2.5, 0, 4, 0 ],
					[  9,  2, 2.5, 0, 4, 0 ],
					[  8,  3, 2.5, 0, 4, 0 ],
					[  7,  4, 2.5, 0, 4, 0 ],
					[  6,  5, 2.5, 0, 4, 0 ],
					[  5,  6, 2.5, 0, 4, 0 ],
					[  4,  7, 2.5, 0, 4, 0 ],
					[  3,  8, 2.5, 0, 4, 0 ],
					[  2,  9, 2.5, 0, 4, 0 ],
					[  1, 10, 2.5, 0, 4, 0 ],
				],
				// Rectangles and squares, with increased module height
				[
					[ 5, 5, -5, -10, 4, 0 ],
					[ 5, 5, -5,  -5, 4, 0 ],
					[ 5, 5, -5,   0, 4, 0 ],
					[ 5, 5, -5,   5, 4, 0 ],
					[ 5, 5, -5,  10, 4, 0 ],
					[ 5, 5, -5,  15, 4, 0 ],
				],[
					[ 5, 5,  5, -10, 4, 0 ],
					[ 5, 5,  5,  -5, 4, 0 ],
					[ 5, 5,  5,   0, 4, 0 ],
					[ 5, 5,  5,   5, 4, 0 ],
					[ 5, 5,  5,  10, 4, 0 ],
					[ 5, 5,  5,  15, 4, 0 ],
				],
			],
		},
	},
	{
		active,
		path: 'development',
		name: 'Development model 6 dynamically generated faces and rotations',
		params: {
			width: 200,
			length: 200,
			height: 10,
			floorHeight: 1,
			moduleQtt: [20, 20],
			hoc: [ 10, 10, -10, -10, 4, 0 ],
			moduleConfig: [
				// test faces and rotation
				...[
					3, 5, 6, 7, 8, 9, (360 / 10) // faces
				].map(
					face => [...Array(18)].map( // rotations
						(_, rotation_index) => [
							10, 10, -5, 0, face, ((360 / 18) *  rotation_index)
						]
					)
				),
				...[
					3, 5, 6, 7, 8, 9, (360 / 10) // faces
				].map(
					face => [...Array(18)].map( // rotations
						(_, rotation_index) => [
							10, 10, 5, 0, face, ((360 / 18) *  rotation_index)
						]
					)
				),
			],
		},
	},
];

// =============================================================================
module.exports = development;
