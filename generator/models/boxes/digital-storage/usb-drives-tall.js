const active = false;
const path = 'boxes/digital-storage';
const namePrefix = 'USB drives tall';

const deviceDimensions = [12.15, 75, 4.55]; // width, height, thickness
const visibleHeight = deviceDimensions[1] - 10; // naked area
const moduleQtt = [3, 7]; // cols, rows
const floorHeight = 1; // floor thickness
const wallThickness = floorHeight;
const lidHeight = 15;
const clearanceGrid = 0.4; // additional spacing for machine tolerance
const clearanceFloor = 1.5; // aditional height
const clearanceBox = 0.25;
const clearanceLid = 0.10;
const spacingXBetween = 4.25;
const spacingYBetween = 2.5;


const width = 
	(moduleQtt[0] * (deviceDimensions[0] + clearanceGrid)) +
	((moduleQtt[0] + 1) * spacingXBetween);
const length = 
	(moduleQtt[1] * (deviceDimensions[2] + clearanceGrid)) +
	((moduleQtt[1] + 1) * spacingYBetween);
const height = deviceDimensions[1] + floorHeight - visibleHeight;
const hocWidth = deviceDimensions[0] + (clearanceGrid * 2);
const hocLength = deviceDimensions[2] + (clearanceGrid * 2);
const hocHeight = 0 - height + floorHeight;

const boxWidth = width + (wallThickness * 2) + (clearanceBox * 2);
const boxLength = length + (wallThickness * 2) + (clearanceBox * 2);
const boxHeight = deviceDimensions[1] + (floorHeight * 2) + clearanceFloor;
const boxHocWidth = width + (clearanceBox * 2);
const boxHocLength = length + (clearanceBox * 2);
const boxHocHeight = 0 - deviceDimensions[1];

const lidWidth = boxWidth + (wallThickness * 2) + (clearanceLid * 2);
const lidLength = boxLength + (wallThickness * 2) + (clearanceLid * 2);
const lidHocWidth = boxWidth + (clearanceLid * 2);
const lidHocLength = boxLength + (clearanceLid * 2);
const lidHocHeight = 0 - lidHeight + floorHeight;

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
		name: `${namePrefix} lid`,
		params: {
			width: lidWidth,
			length: lidLength,
			height: lidHeight,
			floorHeight,
			moduleQtt: [1, 1],
			hoc: [
				lidHocWidth,
				lidHocLength,
				lidHocHeight,
				0,
				4,
				0
			],
		},
	},
];
