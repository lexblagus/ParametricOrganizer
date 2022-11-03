const msdcDimensions = [12.15, 35, 4.55]; // width, height, thickness
const visibleHeight = msdcDimensions[1] - 10; // naked area
const moduleQtt = [3, 7]; // cols, rows
const floorHeight = 1; // floor thickness
const wallThickness = floorHeight;
const coverHeight = 15;
const clearanceGrid = 0.4; // additional spacing for machine tolerance
const clearanceFloor = 1.5; // aditional height
const clearanceBox = 0.25;
const clearanceCover = 0.10;
const spacingXBetween = 4.25;
const spacingYBetween = 2.5;
const active = false;


const width = 
	(moduleQtt[0] * (msdcDimensions[0] + clearanceGrid)) +
	((moduleQtt[0] + 1) * spacingXBetween);
const length = 
	(moduleQtt[1] * (msdcDimensions[2] + clearanceGrid)) +
	((moduleQtt[1] + 1) * spacingYBetween);
const height = msdcDimensions[1] + floorHeight - visibleHeight;
const hocWidth = msdcDimensions[0] + (clearanceGrid * 2);
const hocLength = msdcDimensions[2] + (clearanceGrid * 2);
const hocHeight = 0 - height + floorHeight;

const boxWidth = width + (wallThickness * 2) + (clearanceBox * 2);
const boxLength = length + (wallThickness * 2) + (clearanceBox * 2);
const boxHeight = msdcDimensions[1] + (floorHeight * 2) + clearanceFloor;
const boxHocWidth = width + (clearanceBox * 2);
const boxHocLength = length + (clearanceBox * 2);
const boxHocHeight = 0 - msdcDimensions[1];

const coverWidth = boxWidth + (wallThickness * 2) + (clearanceCover * 2);
const coverLength = boxLength + (wallThickness * 2) + (clearanceCover * 2);
const coverHocWidth = boxWidth + (clearanceCover * 2);
const coverHocLength = boxLength + (clearanceCover * 2);
const coverHocHeight = 0 - coverHeight + floorHeight;

module.exports = [
	{
		active,
		name: 'USB drives short grid',
		params: {
			width,
			length,
			height,
			floorHeight,
			moduleQtt,
			hoc: [
				hocWidth,
				hocLength,
				hocHeight,
				0,
				4,
				0,
			],
		},
	},
	{
		active,
		name: 'USB drives short box',
		params: {
			width: boxWidth,
			length: boxLength,
			height: boxHeight,
			floorHeight,
			moduleQtt: [1, 1],
			hoc: [
				boxHocWidth,
				boxHocLength,
				boxHocHeight,
				0,
				4,
				0
			],
		},
	},
	{
		active,
		name: 'USB drives short cover',
		params: {
			width: coverWidth,
			length: coverLength,
			height: coverHeight,
			floorHeight,
			moduleQtt: [1, 1],
			hoc: [
				coverHocWidth,
				coverHocLength,
				coverHocHeight,
				0,
				4,
				0
			],
		},
	},
];
