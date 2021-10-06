const thickness = 1.5;
const coverGap = 0.5;
const pieceSpacing = 1;
const pieceSize = [
	20,
	20,
	44,
];
const piecesOnBox = [6, 6];
const boxHeight = pieceSize[2] / 2;


const boxDimensions = [
	( pieceSize[0] + (thickness * 2) + (pieceSpacing * 2) ) * piecesOnBox[0],
	( pieceSize[1] + (thickness * 2) + (pieceSpacing * 2) ) * piecesOnBox[1],
	boxHeight,
];

const defaultHoc = [
	pieceSize[0] + (pieceSpacing * 2),
	pieceSize[1] + (pieceSpacing * 2),
	0 - pieceSize[2] - pieceSpacing,
	0,
	4,
	0
];
const cornerHoc = [
	pieceSize[0] + (pieceSpacing * 2),
	pieceSize[1] + (pieceSpacing * 2),
	0 - pieceSize[2] - pieceSpacing,
	pieceSize[2] - boxHeight, // <!>
	4,
	0
]

module.exports = [
	{
		active: false,
		name: 'Box for chess pieces',
		params: {
			width:  boxDimensions[0],
			length: boxDimensions[1],
			height: boxDimensions[2],
			floorHeight: thickness,
			moduleQtt: piecesOnBox,
			hoc: defaultHoc,
			moduleConfig: [
				[
					cornerHoc,
					[],
					[],
					[],
					[],
					cornerHoc,
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
				],
				[
					[],
					[],
					[],
					[],
					[],
					[],
				],
				[
					cornerHoc,
					[],
					[],
					[],
					[],
					cornerHoc,
				],
			],
		},
	},
	{
		active: false,
		name: 'Box for chess pieces cover',
		params: {
			width: boxDimensions[0] + ( coverGap * 2 ) + ( thickness * 2 ),
			length: boxDimensions[1] + ( coverGap * 2 ) + ( thickness * 2 ),
			height: pieceSize[2] + thickness,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				boxDimensions[0] + ( coverGap * 2 ),
				boxDimensions[1] + ( coverGap * 2 ),
				0 - pieceSize[2] - pieceSpacing,
				0,
				4,
				0
			],
		},
	},
];
