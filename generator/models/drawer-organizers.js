const base = [50];
const thickness = 2.5;
const height = 25;
const active = false;

const drawers = [
	// —————————————————————————————————————————————————————————————————————————————
	// 1xN A
	// —————————————————————————————————————————————————————————————————————————————
	{
		active,
		name: 'Drawer organizer 1x1A',
		params: {
			width: base * 1,
			length: base * 1,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 1,
				0 - height,
				0,
				4,
				0
			],
		}
	},{
		active,
		name: 'Drawer organizer 1x2A',
		params: {
			width: base * 1,
			length: base * 2,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 2,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x3A',
		params: {
			width: base * 1,
			length: base * 3,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 3,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x4A',
		params: {
			width: base * 1,
			length: base * 4,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 4,
				0 - height,
				0,
				4,
				0
			],
		},
	},

	// —————————————————————————————————————————————————————————————————————————————
	// 1xN B
	// —————————————————————————————————————————————————————————————————————————————
	{
		active,
		name: 'Drawer organizer 1x2B',
		params: {
			width: base * 1,
			length: base * 2,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 2],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 1,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x3B',
		params: {
			width: base * 1,
			length: base * 3,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 2],
			hoc: [
				( base - thickness ) * 1,
				( ( base * 3 ) / 2 ) - thickness,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x3C',
		params: {
			width: base * 1,
			length: base * 3,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 3],
			hoc: [
				( base - thickness ) * 1,
				( ( base * 3 ) / 3 ) - thickness,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x4B',
		params: {
			width: base * 1,
			length: base * 4,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 2],
			hoc: [
				( base - thickness ) * 1,
				( ( base * 4 ) / 2 ) - thickness,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x4C',
		params: {
			width: base * 1,
			length: base * 4,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 3],
			hoc: [
				( base - thickness ) * 1,
				( ( base * 4 ) / 3 ) - thickness,
				0 - height,
				0,
				4,
				0
			],
		},
	},{
		active,
		name: 'Drawer organizer 1x4D',
		params: {
			width: base * 1,
			length: base * 4,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 4],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 1,
				0 - height,
				0,
				4,
				0
			],
		},
	},
	// —————————————————————————————————————————————————————————————————————————————
	// 2x2 A
	// —————————————————————————————————————————————————————————————————————————————
	{
		active,
		name: 'Drawer organizer 2x2A',
		params: {
			width: base * 2,
			length: base * 2,
			height: height,
			floorHeight: thickness,
			moduleQtt: [1, 1],
			hoc: [
				( base - thickness ) * 2,
				( base - thickness ) * 2,
				0 - height,
				0,
				4,
				0
			],
		}
	},
	// —————————————————————————————————————————————————————————————————————————————
	// 2x2 B
	// —————————————————————————————————————————————————————————————————————————————
	{
		active,
		name: 'Drawer organizer 2x2B',
		params: {
			width: base * 2,
			length: base * 2,
			height: height,
			floorHeight: thickness,
			moduleQtt: [2, 2],
			hoc: [
				( base - thickness ) * 1,
				( base - thickness ) * 1,
				0 - height,
				0,
				4,
				0
			],
		}
	},
];


// =============================================================================
module.exports = drawers;
