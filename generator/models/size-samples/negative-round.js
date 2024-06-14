const faces = 360 / 10;
const active =  false;
const namePrefix = 'Size samples negative round';
const height = 25;

const sizeSamples = [
	{
		name: `${namePrefix} A 0.1-10mm`,
		height,
		moduleSize: 12.5,
		moduleQtt: [10 , 10],
		initialSize: 0.1,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} B 10.1-12.5mm`,
		height,
		moduleSize: 15,
		moduleQtt: [5 , 5],
		initialSize: 10.1,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} C 12.6-15mm`,
		height,
		moduleSize: 17.5,
		moduleQtt: [5 , 5],
		initialSize: 12.6,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} D 15.1-17.5mm`,
		height,
		moduleSize: 20.0,
		moduleQtt: [5 , 5],
		initialSize: 15.1,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} E 17.6-20mm`,
		height,
		moduleSize: 22.5,
		moduleQtt: [5 , 5],
		initialSize: 17.6,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} F 20.10-22.5mm`,
		height,
		moduleSize: 25,
		moduleQtt: [5 , 5],
		initialSize: 20.1,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} G 22.6-25mm`,
		height,
		moduleSize: 27.5,
		moduleQtt: [5 , 5],
		initialSize: 22.6,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} H 25.1-27.5mm`,
		height,
		moduleSize: 30,
		moduleQtt: [5 , 5],
		initialSize: 25.1,
		increaseSize: 0.1,
	},
	{
		name: `${namePrefix} I 27.6-30mm`,
		height,
		moduleSize: 32.5,
		moduleQtt: [5 , 5],
		initialSize: 27.6,
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
		height: sizeSample.height,
		floorHeight: 1,
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
						0 - sizeSample.height,
						0,
						faces,
						0,
					])	
				)
			)
		),
	},
}));
