const active = true;
const path = 'boxes/sd-cards';
const namePrefix = 'SD cards';

const msdcDimensions = [24, 32, 2]; // width, height, thickness
const visibleHeight = msdcDimensions[1] / 2; // naked area
const moduleQtt = [2, 15]; // cols, rows
const floorHeight = 1; // floor thickness
const wallThickness = floorHeight;
const coverHeight = 15;
const clearanceGrid = 0.4; // additional spacing for machine tolerance
const clearanceFloor = 1.5; // aditional height
const clearanceBox = 0.25;
const clearanceCover = 0.10;
const spacingXBetween = floorHeight + 0.065; // 1.45 * 2;
const spacingYBetween = floorHeight; // 2.5;


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
		path,
		name: `${namePrefix} grid`,
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
		path,
		name: `${namePrefix} box`,
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
		path,
		name: `${namePrefix} cover`,
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
