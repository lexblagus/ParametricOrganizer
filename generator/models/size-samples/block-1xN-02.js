
const faces = 360 / 10;
const active =  false;
const namePrefix = 'Size sample 1xN block 02';
const height = 15;
const floorHeight = 1;

const sizeSamples = [
	{
		name: `${namePrefix} piece 01 SMDSS tips positive 19-21p4mm`,
		height,
		moduleSize: 30,
		moduleQtt: [5 , 5],
		initialSize: 19,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} piece 02 Dremel sanding bands 12p7 (10p5mm to 12p9mm)`,
		height,
		moduleSize: 15,
		moduleQtt: [5 , 5],
		initialSize: 10.5,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} piece 03 Dremel sanding bands 6p4 (5p5mm to 7p9mm)`,
		height,
		moduleSize: 10,
		moduleQtt: [5 , 5],
		initialSize: 5.5,
		increaseSize: 0.1,
	},
];


module.exports = sizeSamples.map(sizeSample => ({
	active,
	path: 'size-samples',
	name: sizeSample.name,
	params: {
		width: sizeSample.moduleSize * sizeSample.moduleQtt[0],
		length: sizeSample.moduleSize * sizeSample.moduleQtt[1],
		height: floorHeight,
		floorHeight: floorHeight,
		moduleQtt: sizeSample.moduleQtt,
		hoc: [ 0, 0, 0, 0, 0, 0 ],
		moduleConfig: [  ...Array( sizeSample.moduleQtt[0] )  ].map(
			(_, x) => (
				[  ...Array( sizeSample.moduleQtt[1] )  ].map(
					(
						_,
						y,
						__,
						z = parseFloat((
							sizeSample.initialSize +
							( y * sizeSample.increaseSize ) + 
							( x * sizeSample.moduleQtt[0] * sizeSample.increaseSize )
						).toString().replace(/(\.)(\d{2})(\d+)/, '$1$2'))
					) => ([
						z,
						z,
						sizeSample.height,
						0,
						faces,
						0,
					])
				)
			)
		),
	},
}));
