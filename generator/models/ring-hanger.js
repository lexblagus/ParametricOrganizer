const baseSize = 25; // base sizes to be rendered
const hocDiameter = 10;
const moduleQtt = [5,5];
const moduleHeightIncrease = 5;
const minHeight = 2.5;
const hocHeight = 50;
const hocHeightIncrease = 2.5;

module.exports = [{
	active: false,
	name: `Ring Hanger`,
	params: {
		width: baseSize * moduleQtt[0],
		length: baseSize * moduleQtt[1],
		height: minHeight,
		floorHeight: minHeight,
		moduleQtt,
		hoc: [
			hocDiameter,
			hocDiameter,
			hocHeight,
			0,
			360 / 10,
			0
		],
		moduleConfig: [  ...Array( moduleQtt[0] )  ].map(
			(_, x) => (
				[  ...Array( moduleQtt[1] )  ].map(
					(_, y) => ([
						hocDiameter / 2,
						hocDiameter / 2,
						hocHeight - ( (x + y) * hocHeightIncrease ),
						( (x + y) * moduleHeightIncrease ),
						360 / 10,
						0
					])
				)
			)
		),
	},
}];
