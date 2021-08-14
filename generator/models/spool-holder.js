const walls = 10;
const size = 75;
const width = 70;
const pinDiameter = 17;
const pinFittingGap = 0.11;
const hangFaces = 360 / 4;

module.exports = [{
	active: true,
	name: `Spool holder positive`,
	params: {
		width: size,
		length: size,
		height: walls,
		floorHeight: walls / 2,
		moduleQtt: [1, 1],
		hoc: [
			pinDiameter - pinFittingGap,
			pinDiameter - pinFittingGap,
			width + (walls / 2),
			0,
			360 / 10,
			0
		],
	},
},{
	active: true,
	name: `Spool holder negative`,
	params: {
		width: size,
		length: size,
		height: walls,
		floorHeight: walls / 2,
		moduleQtt: [1, 1],
		hoc: [
			pinDiameter + pinFittingGap,
			pinDiameter + pinFittingGap,
			0 - (walls / 2),
			0,
			360 / 10,
			0
		],
	},
}];
